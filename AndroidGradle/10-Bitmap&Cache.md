本篇将总结有关图片加载、缓存策略以及优化列表卡顿的知识点：

Bitmap的高效加载
缓存策略

LruCache(内存缓存)
DiskLruCache(磁盘缓存)


ImageLoader


1.Bitmap的高效加载
a.Bitmap(位图)：指一张图片，常见格式：.png、.jpg等
b.必要性：直接加载大容量的高清Bitmap很容易出现显示不完整、内存溢出OOM的问题（如报错：
java.lang.OutofMemoryError:bitmap size exceeds VM budget

c.核心思想：按一定的采样率将图片缩小后再加载进来。
d.工具类：


BitmapFactory类提供的四种加载图片的方法：


decodeFile()：从文件系统加载出一个Bitmap对象

decodeResource()：从资源文件加载出一个Bitmap对象

decodeStream()：从输入流加载出一个Bitmap对象

decodeByteArray()：从字节数组加载出一个Bitmap对象




注：

对应着BitmapFactory类的几个native方法；

decodeFile()和decodeResource()又间接调用decodeStream()。




BitmapFactory.Options的参数


inSampleSize参数：即采样率，同时作用于宽/高

取值规定：

应为2的指数，如1、2、4...
否则系统会向下取整并选择一个最接近2的指数来替代，如3被2替代。


变化规则：

当inSampleSize=1，采样后大小不变。
当inSampleSize=k>1，采样后图片会缩小。具体规则：宽高变为原图的1/k, 像素变为原图的1/k^2, 占用内存大小变为原图的1/k^2。


注意：根据图片宽高的 实际大小&需要大小，而计算出的缩放比尽可能取最小，避免由于缩小的过多，导致在控件中不能铺满而被拉伸至模糊。



inJustDecodeBounds参数：

值为true：BitmapFactory只加载图片的原始宽高信息，而不真正加载图片到内存；
值为false：BitmapFactory真正加载图片到内存。






注意：BitmapFactory获取的图片宽高信息和图片的位置以及程序运行的设备有关，会导致获取到不同的结果。

e.加载流程

将BitmapFactory.Options.inJustDecodeBounds参数设为true并加载图片。
从BitmapFactory.Options中取出图片的原始宽高信息，对应outWidth和outHeight参数。
根据采样率的规则并结合目标View的所需大小计算出采样率inSampleSize。
将BitmapFactory.Options.inJustDecodeBounds参数设为false，然后重新加载图片。

常用的获取采样率的代码片段：
  /**
     * 对一个Resources的资源文件进行指定长宽来加载进内存, 并把这个bitmap对象返回
     *
     * @param res   资源文件对象
     * @param resId 要操作的图片id
     * @param reqWidth 最终想要得到bitmap的宽度
     * @param reqHeight 最终想要得到bitmap的高度
     * @return 返回采样之后的bitmap对象
     */
public static Bitmap decodeSampledBitmapFromResource(Resources res, int resId, int reqWidth, int reqHeight){
        BitmapFactory.Options options = new BitmapFactory.Options();
        //1.设置inJustDecodeBounds=true获取图片尺寸
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeResource(res,resId,options);
        //3.计算缩放比
        options.inSampleSize = calculateInSampleSize(options,reqHeight,reqWidth);
        //4.再设为false，重新从资源文件中加载图片
        options.inJustDecodeBounds =false;
        return BitmapFactory.decodeResource(res,resId,options);
    }

   /**
     *  一个计算工具类的方法, 传入图片的属性对象和想要实现的目标宽高. 通过计算得到采样值
     * @param options 要操作的原始图片属性
     * @param reqWidth 最终想要得到bitmap的宽度
     * @param reqHeight 最终想要得到bitmap的高度
     * @return 返回采样率
     */
    private static int calculateInSampleSize(BitmapFactory.Options options, int reqHeight, int reqWidth) {
        //2.height、width为图片的原始宽高
        int height = options.outHeight;
        int width = options.outWidth;
        int inSampleSize = 1;
        if(height>reqHeight||width>reqWidth){
            int halfHeight = height/2;
            int halfWidth = width/2;
            //计算缩放比，是2的指数
            while((halfHeight/inSampleSize)>=reqHeight&&(halfWidth/inSampleSize)>=reqWidth){
                inSampleSize*=2;
            }
        }    
        return inSampleSize;
    }

现在假设ImageView期望图片大小是为100*100像素：
mImageView.setImageBitmap(decodeSampledBitmapFromResource(getResources(),R.mipmap.ic_launcher,100,100);

推荐阅读：Android开发之高效加载Bitmap

2.缓存策略

为减少流量消耗，可采用缓存策略。常用的缓存算法是LRU(Least Recently Used)：

核心思想：当缓存满时, 会优先淘汰那些近期最少使用的缓存对象。
两种方式：LruCache(内存缓存)、DiskLruCache(磁盘缓存)。


a.LruCache(内存缓存)

LruCache类是一个线程安全的泛型类：内部采用一个LinkedHashMap以强引用的方式存储外界的缓存对象，并提供get和put方法来完成缓存的获取和添加操作，当缓存满时会移除较早使用的缓存对象，再添加新的缓存对象。

public class LruCache<K, V> {
    private final LinkedHashMap<K, V> map;
...


注：几种引用的含义

强引用：直接的对象引用，不会被gc回收；
软引用：当系统内存不足时，对象会被gc回收；
弱引用：随时会被gc回收。



实现原理：LinkedHashMap利用一个双重链接链表来维护所有条目item。

常用属性accessOrder：决定LinkedHashMap的链表顺序。

值为true：以访问顺序维护链表。
值为false：以插入的顺序维护链表。






而LruCache利用是accessOrder=true 、时的LinkedHashMap实现LRU算法，使得最近访问的数据会在链表尾部，在容量溢出时，将链表头部的数据移除。


使用方法：

计算当前可用的内存大小；
分配LruCache缓存容量；
创建LruCache对象并传入最大缓存大小的参数、重写sizeOf()用于计算每个缓存对象的大小；
通过put()、get()和remove()实现数据的添加、获取和删除。



实例：
  //初始化LruCache对象
public void initLruCache()
{
    //1.获取当前进程的可用内存，转换成KB单位
    int maxMemory = (int) (Runtime.getRuntime().maxMemory() / 1024);
    //2.分配缓存的大小
    int maxSize = maxMemory / 8;
    //3.创建LruCache对象并重写sizeOf方法
    lruCache = new LruCache<String, Bitmap>(maxSize)
        {
            @Override
            protected int sizeOf(String key, Bitmap value) {
                // TODO Auto-generated method stub
                return value.getWidth() * value.getHeight() / 1024;
            }
        };
}
//4.LruCache对数据的操作
public void fun()
{
    //添加数据
    lruCache.put("lizhuo", bm1);
    lruCache.put("sushe", bm2);
    lruCache.put("jiqian", bm3);
    //获取数据
    Bitmap b1 = (lruCache.get("lizhuo"));
    Bitmap b2 = (lruCache.get("sushe"));
    Bitmap b3 = (lruCache.get("jiqian"));
    //删除数据
    lruCache.remove("sushe");
}

推荐阅读：详细解读LruCache类、LruCache 源码解析

b.DiskLruCache(磁盘缓存)

通过将缓存对象写入文件系统从而实现缓存效果，即磁盘缓存。


与LruCache区别：DiskLruCache非泛型类，不能添加类型，而是采用文件存储，存储和读取通过I/O流处理。


使用方法：

计算分配DiskLruCache的容量；
设置缓存目录；
创建DiskLruCache对象，注意不能通过构造方法来创建, 而是提供open()方法；
利用Editor、Snapshot和remove()实现数据的添加、获取和删除。
调用flush()将数据写入磁盘。



(1)先来介绍DiskLruCache的创建：
public static DiskLruCache open(File directory, int appVersion, int valueCount, long maxSize)

其中，参数含义：
①directory：磁盘缓存的存储路径。有两种目录：

SD 上的缓存目录：/sdcard/Android/data/package_name/cache 目录，当应用被卸载后会被删除。
其他目录：应用卸载后缓存数据还在。

②appVersion：当前应用的版本号，一般设为1。
③valueCount：单个节点所对应的数据的个数，一般设为1。
④maxSize：缓存的总大小，超出这个设定值后DiskLruCache会清除一些缓存
例如，典型的创建过程：
DiskLruCache mDiskLruCache = null;  
try {  
    File cacheDir = getDiskCacheDir(context, "bitmap");  
    if (!cacheDir.exists()) {  
    //若缓存地址的路径不存在就创建一个
        cacheDir.mkdirs();  
    }  
    mDiskLruCache = DiskLruCache.open(cacheDir, getAppVersion(context), 1, 10 * 1024 * 1024);  
} catch (IOException e) {  
    e.printStackTrace();  
}  
//用于获取到缓存地址的路径
public File getDiskCacheDir(Context context, String uniqueName) {  
    String cachePath;  
    if (Environment.MEDIA_MOUNTED.equals(Environment.getExternalStorageState())|| !Environment.isExternalStorageRemovable()) {  
    //当SD卡存在或者SD卡不可被移除，获取路径 /sdcard/Android/data/<application package>/cache
        cachePath = context.getExternalCacheDir().getPath();  
    } else { 
    //反之，获取路径/data/data/<application package>/cache 
        cachePath = context.getCacheDir().getPath();  
    }  
    return new File(cachePath + File.separator + uniqueName);  
}  
//用于获取到当前应用程序的版本号
public int getAppVersion(Context context) {  
    try {  
        PackageInfo info = context.getPackageManager().getPackageInfo(context.getPackageName(), 0);  
        return info.versionCode;  
    } catch (NameNotFoundException e) {  
        e.printStackTrace();  
    }  
    return 1;  
}  

(2)添加缓存操作：通过Editor完成

获取资源的key值，采用url的md5值作为key；
通过DiskLruCache.edit() 获取对应key的Editor；
通过Editor.newOutputStream(0)得到一个输出流；
通过OutputStream写入数据；

Editor.commit()提交写操作，若发生异常，则调用Editor.abort()进行回退。

核心代码：
//1.返回url的MD5算法结果
String key = hashKeyFormUrl(url);
//2.获取Editor对象
Editor editor = mDiskLruCache.edit(key);
//3.创建输出流，其中常量DISK_CACHE_INDEX = 0
OutputStream outputStream = editor.newOutputStream(DISK_CACHE_INDEX);
//4.写入数据
outputStream.wirte(data);
//5.提交写操作
editor.commit();

(3)查找缓存操作：和缓存添加的过程类似

获取资源的key值，采用url的md5值作为key；
通过DiskLruCache.get()获取对应key的Snapshot对象；
通过Snapshot.getInputStream(0)得到一个输入流（可向下转型为FileInputStream）；
通过InputStream读取数据。

核心代码：
//1.返回url的MD5算法结果
String key = hashKeyFormUrl(url);
//2.获取Snapshot对象
Snapshot snapshot = mDiskLruCache.get(key);
//3.创建输入流，其中常量DISK_CACHE_INDEX = 0
InputStream inputStream = snapshot.getInputStream(DISK_CACHE_INDEX);
//4.读出数据
int data = inputStream.read();



问题：FileInputStream是一种有序的文件流，调用两次 BitmapFactory.decodeStream()会影响文件流的位置属性，导致第二次解析结果为空。
解决办法：通过文件流得到其对应的文件描述符，再调用 BitmapFactory.decodeFileDescriptor()来加载一张缩放后的图片。


推荐阅读：Android DiskLruCache完全解析、 源码解析

3.ImageLoader 的使用
a.ImageLoader内部封装了Bitmap的高效加载、LruCache和DiskLruCache。
b.应具备功能：

同步加载
异步加载
图片压缩
内存缓存
磁盘缓存
网络拉取

更多了解：Android 开源框架Universal-Image-Loader完全解析、开源框架ImageLoader的完美例子
c.使用场景：

实现照片墙效果 ，此处实例

优化 ListView/GridView卡顿现象，几点办法：

不要在Adapter的getView()中执行耗时操作，比如直接加载图片。
控制异步任务的执行频率，在列表滑动时停止加载图片，而列表停下时再加载图片，此处实例。
开启硬件加速，给Activity添加配置android:hardwareAccelerated="true"。更多办法

