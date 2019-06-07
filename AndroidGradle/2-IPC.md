在上一篇Window里提及过IPC，本篇将详细总结IPC，知识点如下：

IPC基础及概念

多进程模式
序列化

Serializable接口
Parcelable接口


Binder机制


IPC方式

Bundle
文件共享
AIDL
Messager
ContentProvider
Socket


Binder连接池


一、IPC基础及概念
1.多进程模式
a.进程&线程

进程：一般指一个执行单元，在PC和移动设备上指一个程序或应用。
线程：CPU调度的最小单元。线程是一种有限的系统资源。


两者关系： 一个进程可包含多个线程，即一个应用程序上可以同时执行多个任务。

主线程（UI线程）：UI操作
有限个子线程：耗时操作

注意：不可在主线程做大量耗时操作，会导致ANR（应用无响应）。

b.开启多进程模式的方式：

（不常用）通过JNI在native层fork一个新的进程。
（常用）在AndroidMenifest中给四大组件指定属性android:process，进程名的命名规则：

默认进程：没有指定该属性则运行在默认进程，其进程名就是包名。
以“：”开头的进程：

省略包名，如android:process=":remote"，表示进程名为com.example.myapplication:remote。
属于当前应用的私有进程，其他进程的组件不能和他跑在同一进程中。


完整命名的进程：

如android:process="com.example.myapplication.remote"。
属于全局进程，其他应用可以通过ShareUID方式和他跑在用一个进程中。






UID&ShareUID：

Android系统为每个应用分配一个唯一的UID，具有相同UID的应用才能共享数据。
两个应用通过ShareUID跑在同一进程的条件：ShareUID相同且签名也相同。

满足上述条件的两个应用，无论是否跑在同一进程，它们可共享data目录，组件信息。
若跑在同一进程，它们除了可共享data目录、组件信息，还可共享内存数据。它们就像是一个应用的两个部分。




c.查看进程信息的方法：

通过DDMS视图查看进程信息。
通过shell查看，命令为：adb shell ps|grep 包名。

d.需要进程间通信的必要性：所有运行在不同进程的四大组件，只要它们之间需要通过内存在共享数据，都会共享失败。

原因：由于Android为每个应用分配了独立的虚拟机，不同的虚拟机在内存分配上有不同的地址空间，这会导致在不同的虚拟机中访问同一个类的对象会产生多份副本。

e.多进程造成的影响，总结为以下四方面：
①静态变量和单例模式失效。

由独立的虚拟机造成。

②线程同步机制失效。

原因同上。

③SharedPreference的不可靠下降。

SharedPreferences不支持两个进程同时进行读写操作，即不支持并发读写，有一定几率导致数据丢失。

④Application多次创建。

Android系统会为新的进程分配独立虚拟机，相当于系统又把这个应用重新启动了一次。

推荐阅读：关于Android多进程

2.序列化
a.序列化的介绍


含义：序列化表示将一个对象转换成可存储或可传输的状态。序列化后的对象可以在网络上进行传输，也可以存储到本地。
场景：需要通过Intent和Binder等传输类对象就必须完成对象的序列化过程。
两种方式：实现Serializable/Parcelable接口。


b.Serializable接口和Parcelable接口的比较：







c.serialVersionUID

含义：是Serializable接口中用来辅助序列化和反序列化过程。
注意：原则上序列化后的数据中的serialVersionUID要和当前类的serialVersionUID 相同才能正常的序列化。


注意：两种变量不会参与序列化过程：


静态成员变量属于类，不属于对象。
用transient关键字标记的成员变量。


推荐阅读：序列化Serializable和Parcelable的理解和区别

3.IPC简介
a.IPC（Inter-Process Communication，跨进程通信）：指两个进程之间进行数据交换的过程。
b.任何一个操作系统都有对应的IPC机制。

Windows：通过剪切板、管道、油槽等进行进程间通讯。
Linux：通过命名空间、共享内容、信号量等进行进程间通讯。
Android：没有完全继承Linux，比如，其独具特色的通讯方式有Binder、Socket等等。

c.IPC的使用场景：

由于某些原因，应用自身需要采用多进程模式来实现。可能原因有：

某些模块因特殊原因要运行在单独进程中；
为加大一个应用可使用的内存，需通过多进程来获取多份内存空间。


当前应用需要向其它应用获取数据。

d.Android的进程架构：每一个Android进程都是独立的，且都由两部分组成，一部分是用户空间，另一部分是内核空间，如下图：







如此设计的优点：

稳定性、安全性高：每一个Android进程都拥有自己独立的虚拟地址空间，一方面可以限制其他进程访问自己的虚拟地址空间；另一方面，当一个进程崩溃时不至于“火烧连营”。
便于复用与管理：内核共享有助于系统维护和并发操作、节省空间。


4.Binder机制
a.概念：

从API角度：是一个类，实现IBinder接口。
从IPC角度：是Android中的一种跨进程通信方式。
从Framework角度：是ServiceManager连接各种Manager和相应ManagerService的桥梁。
从应用层：是客户端和服务端进行通信的媒介。客户端通过它可获取服务端提供的服务或者数据。

b.Android是基于Linux内核基础上设计的，却没有把管道/消息队列/共享内存/信号量/Socket等一些IPC通信手段作为Android的主要IPC方式，而是新增了Binder机制，其优点有：

传输效率高、可操作性强：传输效率主要影响因素是内存拷贝的次数，拷贝次数越少，传输速率越高。几种数据传输方式比较：




方式
拷贝次数
操作难度




Binder
1
简易


消息队列
2
简易


Socket
2
简易


管道
2
简易


共享内存
0
复杂



从Android进程架构角度分析：对于消息队列、Socket和管道来说，数据先从发送方的缓存区拷贝到内核开辟的缓存区中，再从内核缓存区拷贝到接收方的缓存区，一共两次拷贝，如图：







而对于Binder来说，数据从发送方的缓存区拷贝到内核的缓存区，而接收方的缓存区与内核的缓存区是映射到同一块物理地址的，节省了一次数据拷贝的过程，如图：







由于共享内存操作复杂，综合来看，Binder的传输效率是最好的。

实现C/S架构方便：Linux的众IPC方式除了Socket以外都不是基于C/S架构，而Socket主要用于网络间的通信且传输效率较低。Binder基于C/S 架构 ，Server端与Client端相对独立，稳定性较好。
安全性高：传统Linux IPC的接收方无法获得对方进程可靠的UID/PID，从而无法鉴别对方身份；而Binder机制为每个进程分配了UID/PID且在Binder通信时会根据UID/PID进行有效性检测。

c.Binder框架定义了四个角色：Server，Client，ServiceManager和Binder驱动。

其中Server、Client、ServiceManager运行于用户空间，Binder驱动运行于内核空间。关系如图：








下面简单介绍这四个角色：


ServiceManager：服务的管理者，将Binder名字转换为Client中对该Binder的引用，使得Client可以通过Binder名字获得Server中Binder实体的引用。流程如图：










Binder驱动：

与硬件设备没有关系，其工作方式与设备驱动程序是一样的，工作于内核态。
提供open()、mmap()、poll()、ioctl()等标准文件操作。
以字符驱动设备中的misc设备注册在设备目录/dev下，用户通过/dev/binder访问该它。
负责进程之间binder通信的建立，传递，计数管理以及数据的传递交互等底层支持。
驱动和应用程序之间定义了一套接口协议，主要功能由ioctl()接口实现，由于ioctl()灵活、方便且能够一次调用实现先写后读以满足同步交互，因此不必分别调用write()和read()接口。
其代码位于linux目录的drivers/misc/binder.c中。



Server&Client：服务器&客户端。在Binder驱动和Service Manager提供的基础设施上，进行Client-Server之间的通信。

d.代理模式Proxy：给某个对象提供一个代理对象，并由代理对象控制对原对象的访问。如图：







代理模式的组成：

Abstarct Subject（抽象主题）：声明Real Subject和Proxy的共同接口，这样在任何可以使用Real Subject的地方都可以使用Proxy。

Real Subject（真实主题）：定义了Proxy所代表的Real Subject。

Proxy Subject（代理主题）：

内部含有Real Subject的引用，可在任何时候操作目标对象；
提供一个与Real Subject相同的接口，可在任何时候替代目标对象。



推荐阅读：代理模式
e.Binder 工作原理：

服务器端：在服务端创建好了一个Binder对象后，内部就会开启一个线程用于接收Binder驱动发送的消息，收到消息后会执行onTranscat()，并按照参数执行不同的服务端代码。
Binder驱动：在服务端成功Binder对象后，Binder驱动也会创建一个mRemote对象（也是Binder类），客户端可借助它调用transcat()即可向服务端发送消息。
客户端：客户端要想访问Binder的远程服务，就必须获取远程服务的Binder对象在Binder驱动层对应的mRemote引用。当获取到mRemote对象的引用后，就可以调用相应Binder对象的暴露给客户端的方法。

后面会通过AIDL和Messager更深刻地体会这一工作原理。
推荐阅读：Android - Binder驱动、Binder设计与实现、Binder系列、

三、IPC方式





image

由上图可以看到，其他一些IPC方式实际都是通过Binder来实现，只不过封装方式不同。接下来分别总结其他六种IPC方式：
1.使用Bundle
a.Bundle：支持在Activity、Service和Receiver之间通过Intent.putExtra()传递Bundle数据。
Intent intent = new Intent();
Bundle bundle = new Bundle();
bundle.putString("xxx","xxx");
intent.putExtra("data", bundle);

b.原理：Bundle实现Parcelable接口，它可方便的在不同的进程中传输。
c.注意：Bundle不支持的数据类型无法在进程中被传递。

思考下面这种情况：
Q：在A进程进行计算后的结果不是Bundle所支持的数据类型，该如何传给B进程？
A：将在A进程进行的计算过程转移到B进程中的一个Service里去做，这样可成功避免进程间的通信问题。

推荐阅读：通过Bundle在Android Activity间传递数据

2.使用文件共享
a.文件共享：两个进程通过读/写同一个文件来交换数据。比如A进程把数据写入文件，B进程通过读取这个文件来获取数据。
b.适用情况：对数据同步要求不高的进程之间进行通信，并且要妥善处理并发读/写的问题。
c.虽然SharedPreferences也是文件存储的一种，但不建议采用。

原因：系统对SharedPreferences的读/写有一定的缓存策略，即在内存中有一份该文件的缓存，因此在多进程模式下，其读/写会变得不可靠，甚至丢失数据。


3.使用AIDL
a.AIDL(Android Interface Definition Language，Android接口定义语言)：如果在一个进程中要调用另一个进程中对象的方法，可使用AIDL生成可序列化的参数，AIDL会生成一个服务端对象的代理类，通过它客户端实现间接调用服务端对象的方法。
b.可支持的数据类型：

基本数据类型：byte，int，long，float，double，boolean，char
String类型
CharSequence类型
ArrayList、HashMap且里面的每个元素都能被AIDL支持
实现Parcelable接口的对象
所有AIDL接口本身


注意：除了基本数据类型，其它类型的参数必须标上方向：in、out或inout，用于表示在跨进程通信中数据的流向。


in

表示数据只能由客户端流向服务端。
服务端将会接收到这个对象的完整数据，但在服务端修改它不会对客户端输入的对象产生影响。



out

表示数据只能由服务端流向客户端。
服务端将会接收到这个对象的的空对象，但在服务端对接收到的空对象有任何修改之后客户端将会同步变动。



inout

表示数据可在服务端与客户端之间双向流通。
服务端将会接收到客户端传来对象的完整信息，且客户端将会同步服务端对该对象的任何变动。




c.两种AIDL文件：

用于定义parcelable对象，以供其他AIDL文件使用AIDL中非默认支持的数据类型的。
用于定义方法接口，以供系统使用来完成跨进程通信的。


注意：

自定义的Parcelable对象必须把java文件和自定义的AIDL文件显式的import进来，无论是否在同一包内。
AIDL文件用到自定义Parcelable的对象，必须新建一个和它同名的AIDL文件，并在其中声明它为Parcelable类型。


d.AIDL的本质是系统提供了一套可快速实现Binder的工具。关键类和方法：


AIDL接口：继承IInterface。

Stub类：Binder的实现类，服务端通过这个类来提供服务。

Proxy类：服务器的本地代理，客户端通过这个类调用服务器的方法。

asInterface()：客户端调用，将服务端的返回的Binder对象，转换成客户端所需要的AIDL接口类型对象。返回对象：

若客户端和服务端位于同一进程，则直接返回Stub对象本身；
否则，返回的是系统封装后的Stub.proxy对象。



asBinder()：根据当前调用情况返回代理Proxy的Binder对象。

onTransact()：运行服务端的Binder线程池中，当客户端发起跨进程请求时，远程请求会通过系统底层封装后交由此方法来处理。

transact()：运行在客户端，当客户端发起远程请求的同时将当前线程挂起。之后调用服务端的onTransact()直到远程请求返回，当前线程才继续执行。






原理图

通过此处实例具体了解AIDL实现IPC的流程：







推荐阅读：Android中AIDL的工作原理
e.实现方法：

服务端：

创建一个aidl文件；
创建一个Service，实现AIDL的接口函数并暴露AIDL接口。


客户端：

通过bindService绑定服务端的Service；
绑定成功后，将服务端返回的Binder对象转化成AIDL接口所属的类型，进而调用相应的AIDL中的方法。




总结：服务端里的某个Service给和它绑定的特定客户端进程提供Binder对象，客户端通过AIDL接口的静态方法asInterface() 将Binder对象转化成AIDL接口的代理对象，通过这个代理对象就可以发起远程调用请求。

实例：使用AIDL进行进程间通信
f.可能产生ANR的情形：

对于客户端，且假设在主线程调用方法：

调用服务端的方法是运行在服务端的Binder线程池中，若所调用的方法里执行了较耗时的任务，同时会导致客户端线程长时间阻塞，易导致客户端ANR。
在onServiceConnected()和onServiceDisconnected()里直接调用服务端的耗时方法，易导致客户端ANR。


对于服务端：

服务端的方法本身就运行在服务端的Binder线程中，可在其中执行耗时操作，而无需再开启子线程。
回调客户端Listener的方法是运行在客户端的Binder线程中，若所调用的方法里执行了较耗时的任务，易导致服务端ANR。



g.解决客户端频繁调用服务器方法导致性能极大损耗的办法：实现观察者模式。即当客户端关注的数据发生变化时，再让服务端通知客户端去做相应的业务处理。

比如：每个客户端的请求Listener传递给服务端，服务端用一个list保存，当数据变化时服务器再依次通知，此时客户端就用Listener进行回调处理。注意要用Handler切换到主线程。

h.AIDL 解注册失败

原因：Binder进行对象传输实际是通过序列化和反序列化进行，即Binder会把客户端传递过来的对象重新转化并生成一个新的对象，虽然在注册和解注册的过程中使用的是同一个客户端对象，但经过Binder传到服务端后会生成两个不同的对象。另外，多次跨进程传输的同一个客户端对象会在服务端生成不同的对象，但它们在底层的Binder对象是相同的。
解决办法：当客户端解注册的时候，遍历服务端所有的Listener，找到和解注册Listener具有相同的Binder对象的服务端Listener，删掉即可。


需要用到RemoteCallBackList：Android系统专门提供的用于删除跨进程listener的接口。其内部自动实现了线程同步的功能。

推荐文章：Android：学习AIDL，这一篇文章就够了

4.使用Messager
a.Messenger：轻量级的IPC方案，通过它可在不同进程中传递Message对象。
Messenger.send(Message);


相关记忆：

Handler：主要进行线程间的数据通信。
Messenger：进程间的数据通信。


b.特点：

底层实现是AIDL，即对AIDL进行了封装，更便于进行进程间通信。
其服务端以串行的方式来处理客户端的请求，不存在并发执行的情形，故无需考虑线程同步的问题。
可在不同进程中传递Message对象，Messager可支持的数据类型即Messenge可支持的数据类型。

arg1、arg2、what字段：int型数据
obj字段：Object对象，支持系统提供的Parcelable对象
setData：Bundle对象


有两个构造函数，分别接收Handler对象和Binder对象。

c.实现方法：

服务端：

创建一个Service用于提供服务；
其中创建一个Handler用于接收客户端进程发来的数据；
利用Handler创建一个Messenger对象；
在Service的onBind()中返回Messenger对应的Binder对象。


客户端：

通过bindService绑定服务端的Service；
通过绑定后返回的IBinder对象创建一个Messenger，进而可向服务器端进程发送Message数据。（至此只完成单向通信）
在客户端创建一个Handler并由此创建一个Messenger，并通过Message的replyTo字段传递给服务器端进程。服务端通过读取Message得到Messenger对象，进而向客户端进程传递数据。（完成双向通信）










实例：使用Messenger实现IPC
d.Message的缺点：

主要作用是传递 Message，难以实现远程方法调用。
以串行的方式处理客户端发来的消息的，不适合高并发的场景。


解决办法：考虑使用AIDL实现IPC。

推荐阅读：超简单的Binder，AIDL和Messenger的原理及使用流程

5.使用ContentProvider
a.ContentProvider：是Android提供的专门用来进行不同应用间数据共享的方式。

底层同样是通过Binder实现的。

b.注意：

除了onCreat()运行在UI线程中，其他的query()、update()、insert()、delete()和getType()都运行在Binder线程池中。
CRUD四大操作存在多线程并发访问，要注意在方法内部要做好线程同步。
一个SQLiteDatabase内部对数据库的操作有同步处理，但多个SQLiteDatabase之间无法同步。

基础篇： 组件篇之ContentProvider

6.使用Socket
a.Socket（套接字）：不仅可跨进程，还可以跨设备通信。







b.使用类型


流套接字：基于TCP协议，采用流的方式提供可靠的字节流服务。

数据报套接字：基于UDP协议，采用数据报文提供数据打包发送的服务。

c.实现方法：TCP/UDP

服务端：

创建一个Service，在线程中建立TCP服务、监听相应的端口等待客户端连接请求；
与客户端连接时，会生成新的Socket对象，利用它可与客户端进行数据传输；
与客户端断开连接时，关闭相应的Socket并结束线程。


客户端：

开启一个线程、通过Socket发出连接请求；
连接成功后，读取服务端消息；
断开连接，关闭Socket。










d.注意：使用Socket进行通信

需要声明权限：

<uses-permission android:name="android.permission.INTERNET" />  
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />  



不能在主线程中访问网络

推荐阅读：这是一份很详细的Socket使用攻略
综上，以上六种IPC方式的优缺点和使用场景见下图：








四.Binder连接池
a.背景：有多个业务模块都需要AIDL来进行IPC，此时需要为每个模块创建特定的aidl文件，那么相应的Service就会很多。必然会出现系统资源耗费严重、应用过度重量级的问题。
b.作用：将每个业务模块的Binder请求统一转发到一个远程Service中去执行，从而避免重复创建Service。
c.工作原理：每个业务模块创建自己的AIDL接口并实现此接口，然后向服务端提供自己的唯一标识和其对应的Binder对象。服务端只需要一个Service，服务器提供一个queryBinder接口，它会根据业务模块的特征来返回相应的Binder对像，不同的业务模块拿到所需的Binder对象后就可进行远程方法的调用了。流程如图：







d.实现方式：

为每个业务模块创建AIDL接口并具体实现；
为Binder连接池创建AIDL接口IBinderPool.aidl并具体实现；
远程服务BinderPoolService的实现，在onBind()返回实例化的IBinderPool实现类对象；
Binder连接池的具体实现，来绑定远程服务。
客户端的调用。

实例：细说Binder连接池

现在可以回答以下问题:
Q：在Android开发中提高开发效率的方法？
A：使用Binder连接池，避免反复创建Service，统一管理和维护AIDL。

推荐阅读：Android的IPC机制、Android跨进程通信IPC

