//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    urlVideo: "https://res-wxec-unipt.lorealchina.com/helena/HR_video.m4v",
    allSwiperHeight: {},
    addHeight: false,
    dataList: [],
    pageDetail: [{
        // 0
        account: "lancome",
        autoCarousel: true,
        autoplay: false,
        code: "2001081578468656874",
        directType: "Horizontal",
        endTime: "2020-02-29T00:00:00.000+0000",
        id: "5e1585303c726c0007c62356",
        linkPage: "",
        pageType: "GroupView",
        picturePrice: "",
        pictureTitle: "",
        productShowType: "",
        showCount: 1,
        showPoint: true,
        showTitle: false,
        sort: 0,
        startTime: "2020-01-01T00:00:00.000+0000",
        subPagesDto: [{
            account: "lancome",
            autoCarousel: false,
            autoplay: false,
            code: "CNY KV01",
            directType: "Vertical",
            endTime: "2020-03-02T08:00:00.000+0000",
            id: "5e15da908d3a950007dfcfbc",
            image: "https://res-wxec-unipt.lorealchina.com/test/20200119/323019c7-0628-4809-81bb-c2d04120c7ae.jpg",
            linkPage: "",
            pageType: "Simple",
            picturePrice: "",
            pictureTitle: "",
            productShowType: "",
            relateActivityCode: "2001081578458628948",
            showCount: 1,
            showPoint: false,
            showTitle: false,
            sort: 0,
            startTime: "2020-01-03T08:00:00.000+0000",
            subPagesDto: [],
            title: "CNY KV01",
            updateTime: "2020-01-12T08:42:49.484+0000",
            uploadFileType: "PictureFile"
          },
          {
            account: "lancome",
            autoCarousel: false,
            autoplay: false,
            code: "CNY KV02",
            directType: "Vertical",
            endTime: "2020-02-29T08:00:00.000+0000",
            id: "",
            image: "https://res-wxec-unipt.lorealchina.com/test/20200108/470ebcf1-d1d1-4c81-ac69-b9ee5446de31.jpg",
            linkPage: "/pages/springTour/springIndex/springIndex",
            pageType: "Simple",
            picturePrice: "",
            pictureTitle: "",
            productShowType: "",
            showCount: 1,
            showPoint: false,
            showTitle: false,
            sort: 0,
            startTime: "2020-01-01T08:00:00.000+0000",
            subPagesDto: [],
            title: "CNY KV02",
            uploadFileType: "PictureFile"
          }
        ],
        title: "KV1",
        updateTime: "2020-02-06T06:11:30.282+0000",
        uploadFileType: "PictureFile"
      },
      // 1
      {
        account: "lancome",
        autoCarousel: false,
        autoplay: false,
        code: "23423423",
        description: "sdfsdfsf",
        directType: "Vertical",
        endTime: "2020-02-28T00:00:00.000+0000",
        id: "",
        image: "https://ecminiappprd.kiehls.com.cn/lancome/activity/51ac58943d99588ce50d57380932cd6_03.png",
        linkPage: "/pages/search/index",
        pageType: "SearchView",
        picturePrice: "",
        pictureTitle: "",
        productShowType: "",
        showCount: 1,
        showPoint: false,
        showTitle: false,
        sort: 0,
        startTime: "2020-01-21T00:00:00.000+0000",
        subPagesDto: [],
        title: "搜索",
        uploadFileType: "PictureFile"
      },
      // 2
      {
        account: "lancome",
        autoCarousel: true,
        autoplay: true,
        code: "23423423",
        description: "",
        directType: "Vertical",
        endTime: "2020-02-28T00:00:00.000+0000",
        id: "",
        image: "https://res-wxec-unipt.lorealchina.com/helena/HR_video.m4v",
        linkPage: "/pages/search/index",
        pageType: "VideoView",
        picturePrice: "",
        pictureTitle: "",
        productShowType: "",
        showCount: 1,
        showPoint: true,
        showTitle: true,
        sort: 0,
        startTime: "2020-01-21T00:00:00.000+0000",
        subPagesDto: [],
        title: "",
        uploadFileType: "VideoFile"
      },
      {
        account: "lancome",
        autoCarousel: false,
        autoplay: false,
        code: "CNY001",
        directType: "Vertical",
        endTime: "2020-02-29T00:00:00.000+0000",
        id: "",
        image: "https://res-wxec-unipt.lorealchina.com/test/20200119/4347f89c-3f5a-4bbc-b513-34df48468dd2.jpg",
        linkPage: "",
        pageType: "Simple",
        picturePrice: "",
        pictureTitle: "",
        productShowType: "",
        showCount: 1,
        showPoint: false,
        showTitle: false,
        sort: 0,
        startTime: "2020-01-01T00:00:00.000+0000",
        subPagesDto: [],
        title: "新年礼赞",
        uploadFileType: "PictureFile",
      },
      // 3
      {
        account: "lancome",
        autoCarousel: false,
        autoplay: false,
        code: "红装站02",
        directType: "Vertical",
        endTime: "2029-03-02T00:00:00.000+0000",
        id: "5e156c4d3c726c0007c62350",
        image: "https://res-wxec-unipt.lorealchina.com/test/20200119/7e45cf7c-692c-43ac-811c-fe01ccaa047b.jpg",
        linkPage: "/pages/tabBar/product/product_details/product_details?id=LAN00008&skuId=LA653700U",
        pageType: "ProductView",
        picturePrice: "",
        pictureTitle: "",
        productId: "LAN00008",
        productShowType: "picture",
        showCount: 1,
        showPoint: false,
        showTitle: false,
        skuId: "LA653700U",
        sort: 0,
        startTime: "2020-01-08T00:00:00.000+0000",
        subPagesDto: [],
        title: "红装站02",
        updateTime: "2020-01-08T05:44:45.165+0000",
        uploadFileType: "PictureFile"
      },
      // 4
      {
        account: "lancome",
        autoCarousel: false,
        autoplay: false,
        code: "红砖03",
        directType: "Vertical",
        endTime: "2021-03-01T16:00:00.000+0000",
        id: "5e156c503c726c0007c62351",
        image: "https://res-wxec-unipt.lorealchina.com/test/20200119/07618052-63b6-422d-a76f-aab375608b36.jpg",
        linkPage: "/pages/tabBar/product/product_details/product_details?id=190001&skuId=LANXCX19001",
        pageType: "ProductView",
        picturePrice: "",
        pictureTitle: "",
        productId: "190001",
        productShowType: "picture",
        showCount: 1,
        showPoint: false,
        showTitle: false,
        skuId: "LANXCX19001",
        sort: 0,
        startTime: "2020-01-07T16:00:00.000+0000",
        subPagesDto: [],
        title: "红砖03",
        updateTime: "2020-01-08T05:44:48.642+0000",
        uploadFileType: "PictureFile"
      },
      // 5
      {
        account: "lancome",
        autoCarousel: false,
        autoplay: false,
        code: "CNY002",
        directType: "Vertical",
        endTime: "2020-02-29T00:00:00.000+0000",
        id: "",
        image: "https://res-wxec-unipt.lorealchina.com/test/20200119/f60cfec9-0506-4756-a8d7-677508576f60.jpg",
        linkPage: "/pages/tabBar/product/product_details/product_details?id=LAN00008&skuId=LA653700U",
        pageType: "ProductView",
        picturePrice: "",
        pictureTitle: "",
        productId: "LAN00008",
        productShowType: "picture",
        showCount: 1,
        showPoint: false,
        showTitle: false,
        skuId: "LA653700U",
        sort: 0,
        startTime: "2020-01-01T00:00:00.000+0000",
        subPagesDto: [],
        title: "第二代[小黑瓶]30ml",
        uploadFileType: "PictureFile"
      },
      // 6
      {
        account: "lancome",
        autoCarousel: false,
        autoplay: false,
        code: "红妆04",
        directType: "Vertical",
        endTime: "2021-01-09T16:00:00.000+0000",
        id: "5e156c533c726c0007c62352",
        image: "https://res-wxec-unipt.lorealchina.com/test/20200119/b06f326b-f047-465c-ac94-66687ca86f39.jpg",
        linkPage: "/pages/tabBar/product/product_details/product_details?id=LAN00013&skuId=LA109500U",
        pageType: "ProductView",
        picturePrice: "",
        pictureTitle: "",
        productId: "LAN00013",
        productShowType: "picture",
        showCount: 1,
        showPoint: false,
        showTitle: false,
        skuId: "LA109500U",
        sort: 0,
        startTime: "2020-01-08T16:00:00.000+0000",
        subPagesDto: [],
        title: "红妆04",
        updateTime: "2020-01-11T14:55:51.746+0000",
        uploadFileType: "PictureFile"
      },
      // 7
      {
        account: "lancome",
        autoCarousel: false,
        autoplay: false,
        code: "CNY004",
        directType: "Vertical",
        endTime: "2020-02-29T00:00:00.000+0000",
        id: "",
        image: "https://res-wxec-unipt.lorealchina.com/test/20200119/bab95bf4-74be-4d85-96e2-e13fbf1d9ee5.jpg",
        linkPage: "/pages/tabBar/product/product_details/product_details?id=LAN00039&skuId=LA153400U",
        pageType: "ProductView",
        picturePrice: "",
        pictureTitle: "",
        productId: "LAN00039",
        productShowType: "picture",
        showCount: 1,
        showPoint: false,
        showTitle: false,
        skuId: "LA153400U",
        sort: 0,
        startTime: "2020-01-01T00:00:00.000+0000",
        subPagesDto: [],
        title: "菁纯面霜 60ml",
        uploadFileType: "PictureFile"
      },
      // 8
      {
        account: "lancome",
        autoCarousel: false,
        autoplay: false,
        code: "CNY 0006",
        directType: "Vertical",
        endTime: "2020-02-29T00:00:00.000+0000",
        id: "",
        image: "https://res-wxec-unipt.lorealchina.com/test/20200119/a0c7ceba-f9d6-486a-a096-2085b062abfc.jpg",
        linkPage: "/pages/tabBar/product/product_details/product_details?id=LAN00029&skuId=L6413500U",
        pageType: "ProductView",
        picturePrice: "",
        pictureTitle: "",
        productId: "LAN00029",
        productShowType: "picture",
        showCount: 1,
        showPoint: false,
        showTitle: false,
        skuId: "L6413500U",
        sort: 0,
        startTime: "2020-01-01T00:00:00.000+0000",
        subPagesDto: [],
        title: "塑颜雪花霜 50ml",
        uploadFileType: "PictureFile"
      },
      // 9
      {
        account: "lancome",
        autoCarousel: false,
        autoplay: false,
        code: "CNY007",
        directType: "Vertical",
        endTime: "2020-02-29T00:00:00.000+0000",
        id: "",
        image: "https://res-wxec-unipt.lorealchina.com/test/20200119/0d3334d2-38ab-475d-9b78-4476ef3f3473.jpg",
        linkPage: "/pages/tabBar/product/product_details/product_details?id=LAN00071&skuId=L8094500U",
        pageType: "ProductView",
        picturePrice: "",
        pictureTitle: "",
        productId: "LAN00071",
        productShowType: "picture",
        showCount: 1,
        showPoint: false,
        showTitle: false,
        skuId: "L8094500U",
        sort: 0,
        startTime: "2020-01-01T00:00:00.000+0000",
        subPagesDto: [],
        title: "持妆粉底液 30ml",
        uploadFileType: "PictureFile"
      },
      // 10
      {
        account: "lancome",
        autoCarousel: false,
        autoplay: false,
        code: "CNY008",
        directType: "Vertical",
        endTime: "2020-02-29T00:00:00.000+0000",
        id: "",
        image: "https://res-wxec-unipt.lorealchina.com/test/20200119/7e54aaaa-d420-4594-bed6-00f8aed15e89.jpg",
        linkPage: "/pages/tabBar/product/product_details/product_details?id=LAN00084&skuId=L8022000U",
        pageType: "ProductView",
        picturePrice: "",
        pictureTitle: "",
        productId: "LAN00084",
        productShowType: "picture",
        showCount: 1,
        showPoint: false,
        showTitle: false,
        skuId: "L8022000U",
        sort: 0,
        startTime: "2020-01-01T00:00:00.000+0000",
        subPagesDto: [],
        title: "菁纯唇膏",
        uploadFileType: "PictureFile"
      },
      // 11
      {
        account: "lancome",
        autoCarousel: false,
        autoplay: false,
        code: "CNY009",
        directType: "Vertical",
        endTime: "2020-02-29T00:00:00.000+0000",
        id: "",
        image: "https://res-wxec-unipt.lorealchina.com/test/20200119/48b5de7d-59dc-455f-bb2f-36c1c8d9b3d8.jpg",
        linkPage: "",
        pageType: "Simple",
        picturePrice: "",
        pictureTitle: "",
        productShowType: "",
        showCount: 1,
        showPoint: false,
        showTitle: false,
        sort: 0,
        startTime: "2020-01-01T00:00:00.000+0000",
        subPagesDto: [],
        title: "底部2020",
        uploadFileType: "PictureFile"
      },
      // 
    ],
    placeholder: "绿宝瓶",
    notice_flag: true,
    bannerList: [
      'https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/banner_1.png',
      'https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/banner_2.png',
      'https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/banner_3.png',
      'https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/banner_4.png',
      'https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/banner_5.png'
    ],
    swiperHeight: 0,
    swiperCurrent: 0,
    searchWord: "",
    notice: {
      title: "温馨提示",
      context: "尊敬的赫莲娜女孩，由于农历新春将至，赫莲娜官方商城将于1月24日-1月27日停止发货。期间您可以正常选购，仓库将在1月28日按照付款顺序陆续发货，给您带来不便敬请谅解。感谢您一如既往的喜爱与支持，赫莲娜在此提前祝您农历新春快乐！"
    },
    hotOneList: [{
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hot1.png",
        title: "商品测试名称",
        price: 9999
      },
      {
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hot2.png",
        title: "商品测试名称",
        price: 9999
      },
      {
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hot3.png",
        title: "商品测试名称",
        price: 9999
      },
      {
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hot4.png",
        title: "商品测试名称",
        price: 9999
      },
      {
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hot5.png",
        title: "商品测试名称",
        price: 9999
      }
    ],
    hotTwoList: [{
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hotTwo_1.png",
        title: "商品测试名称",
        price: 9999
      },
      {
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hotTwo_2.png",
        title: "商品测试名称",
        price: 9999
      },
      {
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hotTwo_3.png",
        title: "商品测试名称",
        price: 9999
      }
    ],
    hotThreeList: [{
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hotThree_1.png",
        title: "商品测试名称",
        price: 9999
      },
      {
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hotThree_2.png",
        title: "商品测试名称",
        price: 9999
      },
      {
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hotThree_3.png",
        title: "商品测试名称",
        price: 9999
      },
      {
        goodId: "",
        imgUrl: "https://hr-1256143910.cos.ap-shanghai.myqcloud.com/index/hotThree_4.png",
        title: "商品测试名称",
        price: 9999
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function(options) {
    // wx.showLoading({
    //   title: '加载中',
    // })
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // 打开右上角列表，赫莲娜项目暂时没有
  menuOpen() {
    _gsTracker.trackEvent("首页", "导航栏", "首页左上角", 0)
    let that = this;
    let isShow = that.data.isShowMenu;
    that.setData({
      isShowMenu: !isShow,
    })
  },

  // 客服，赫莲娜首页暂时没有，可不管
  showLayer() {
    let that = this;
    that.setData({
      isShowLayer: true
    })
  },

  // 关闭客服，赫莲娜首页暂时没有，可不管
  closeLayer() {
    let that = this;
    that.setData({
      isShowLayer: false
    })
  },

  // 点击进入购物车购物车，赫莲娜暂时没有
  cartToPage() {
    // _gsTracker.trackEvent("首页", "购物车", "首页右上区域", 0)
    wx.switchTab({
      url: '../cart/cart',
    })
  },

  // 弹出搜索框，键盘
  loadKeyWord() {
    // App.HttpService.getHot()
    // .then(resList => {
    //   let placeholder = resList.data.name_cn
    //   this.setData({
    //     placeholder: placeholder ? placeholder : ""
    //   })
    // })
  },

  // 不同获取图片真实高度
  imageCount1(e) { //获取图片真实宽度  
    console.log("imageCount1", e)
    let $width = e.detail.width, //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;
    var viewWidth = 750,
      viewHeight = 750 / ratio;
    var viewHeightT = viewHeight + 70
    var pindex = e.currentTarget.dataset.pindex;
    this.data.pageDetail[pindex].wh = { viewWidth, viewHeightT };
    this.setData({
      imageCount1H: viewHeight,
      imageCount1T: viewHeightT
    })
  },

  // 获取hot2的真实图片高度
  imageCount12: function (e) { //获取图片真实宽度  
    let $width = e.detail.width, //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;
    var viewWidth = 750,
      viewHeight = 750 / ratio;
    var viewHeightT = viewHeight + 280
    console.log(viewHeight, viewHeightT);
    this.setData({
      imageCount12H: viewHeight,
      imageCount12T: viewHeightT
    })
  },

  // 获取组件2的图片高度
  imageCount2: function (e) { //获取图片真实宽度  
    let $width = e.detail.width, //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;
    var viewWidth = 345,
      viewHeight = 345 / ratio;
    var viewHeight2T = viewHeight + 100
    this.setData({
      imageCount2H: viewHeight,
      imageCount2T: viewHeight2T
    })
  },

  // 获取图片真实高度
  imageCount2: function (e) { //获取图片真实宽度  
    let $width = e.detail.width, //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;
    var viewWidth = 345,
      viewHeight = 345 / ratio;
    var viewHeight2T = viewHeight + 100
    this.setData({
      imageCount2H: viewHeight,
      imageCount2T: viewHeight2T
    })
  },

  // 获取不同组件，图片真实高度
  imageCount11: function (e) { //获取图片真实宽度  
    let $width = e.detail.width, //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;
    var viewWidth = 594,
      viewHeight = 594 / ratio;
    var viewHeight11T = viewHeight + 100
    this.setData({
      imageCount11H: viewHeight,
      imageCount11T: viewHeight11T
    })
  },

  //productShowType == 'button'时
  imageCount112: function (e) { //获取图片真实宽度  
    let $width = e.detail.width, //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;
    var viewWidth = 594,
      viewHeight = 594 / ratio;
    var viewHeight11T = viewHeight + 230
    this.setData({
      imageCount112H: viewHeight,
      imageCount112T: viewHeight11T
    })
  },
  imageCount15: function (e) { //获取图片真实宽度  
    let $width = e.detail.width, //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;
    var viewWidth = 500,
      viewHeight = 500 / ratio;
    var viewHeight15T = viewHeight + 200
    this.setData({
      imageCount15H: viewHeight,
      imageCount15T: viewHeight15T
    })
  },
  //productShowType == 'button'时
  imageCount152: function (e) { //获取图片真实宽度  
    let $width = e.detail.width, //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;
    var viewWidth = 500,
      viewHeight = 500 / ratio;
    var viewHeight15T = viewHeight + 300
    this.setData({
      imageCount152H: viewHeight,
      imageCount152T: viewHeight15T
    })
  },

  // 弹窗里面的回到 轮播方法，赫莲娜暂时没有
  toBanner() {
    if (this.data.dialogConfig.menu) {
      wx.switchTab({
        url: this.data.dialogConfig.page,
      })
    } else {
      wx.navigateTo({
        url: this.data.dialogConfig.page,
      })
    }
  },

  // 关闭弹窗
  closeDialog() {
    this.setData({
      'dialogConfig.show': false
    })
  },

  // 请求数据
  loadPageData() {
    console.log('请求首页数据')
  },

  // 请求右上角菜单数据
  loadMenuData() {
    console.log('请求右上角menu数据')
  },

  handleMenu(){
    console.log('因此菜单')
  },

  // 请求会员信息，如果仅仅是潜客，回到绑定会员、或者注册
  getNewMemberUrl() {
    if (Object.keys(App.globalData.customerInfo).length == 0 || App.globalData.customerInfo.mobile == null) {
      return "/pages/tabBar/user/bindphone/bindphone";
    }
    else {
      return "/pages/tabBar/user/registe/registe";
    }
  },

  // 点击热卖频道里的商品，点击进入详情
  goDetail(e) {
    console.log('点击进入商品详情')
  },

  // 这是什么不知道
  handleSubMenu(e) {
    // let that = this;
    // let index = e.currentTarget.dataset.index;
    // that.setData({
    //   currentSubIndex: index
    // })
    // let url = e.currentTarget.dataset.url;
    // App.WxService.navigateTo(url)
  },

  // 
  authorEvent(e) {

  },

  // 
  contactEvent(e) {

  },

  //
  swiperChange: function(e) {
    let that = this;
    that.setData({
      swiperCurrent: e.detail.current
    })
  },

  // 改变swiper默认高度，高度自适应
  setSwiperHeight(e) {
    // 图片的原始宽度
    let imgWidth = e.detail.width;
    // 图片的原始高度
    let imgHeight = e.detail.height;
    // 同步获取设备宽度
    let sysInfo = wx.getSystemInfoSync();
    // 获取屏幕的宽度
    let screenWidth = sysInfo.screenWidth;
    // 获取屏幕和原图的比例
    let scale = screenWidth / imgWidth;
    // 设置容器的高度
    this.setData({
      swiperHeight: imgHeight * scale
    })
  },

  getInputValue(e) {
    this.data.searchWord = e.detail.value

    console.log(this.data.searchWord)
  },

  // dot
  swiperChange(e) {
    let that = this;
    if (e.detail.source == 'touch') {
      that.setData({
        current: e.detail.current,

      })
    }
  },

  goDetail(e) {
    console.log(e)
    console.log('跳转热卖详情')
  },

  // 获取图片实际高度
  getSwiperH(e) {
    const code = e.currentTarget.dataset.code
    const height = e.currentTarget.dataset.height
    let $width = e.detail.width, //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;
    var viewWidth = 750,
      viewHeight = 750 / ratio;
    let key = `allSwiperHeight.swiperHeight_${code}`
    let obj = {}
    obj[key] = viewHeight

    this.setData(obj)
    // console.log('allSwiperHeight',this.data.allSwiperHeight)
  },
})