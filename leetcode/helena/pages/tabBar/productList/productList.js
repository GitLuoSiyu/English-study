// pages/tabBar/productList/productList.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: [],
    page: 0,
    value: '兰蔻超级品牌周',
    eachNav: {},
    navList: [
      // tab1
      {
        account: "lancome",
        activityCode: null,
        categoryId: null,
        categoryName: null,
        channelId: null,
        className: "active",
        createDate: "2019-09-12T03:04:24.193+0000",
        createDateString: "2019-09-12 11:04:24",
        delete: false,
        id: "5d79b5b886e7970001efaf59",
        image: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/9a51b49d-5cf6-443e-bb64-2eeff5f65ad9.jpg",
        jumpLink: "/pages/tabBar/product/product_details/product_details?id=LAN00008&skuId=LA653700U",
        moduleId: null,
        name: "护肤星品",
        pageType: "ProductView",
        productId: null,
        relateActivityCode: "1910081570541870638",
        skuId: "LA653700U",
        skuListsDTO: [{
          gender: "男",
          index: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00008/LA653700U/ShowImage/1.jpg",
          offlineTime: "2022-01-08T16:00:00.000+0000",
          onlineTime: "2019-12-03T16:00:00.000+0000",
          productSkuDTO: {
            headPicture: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00008/LA653700U/ShowImage/1.jpg",
            name: "第二代[小黑瓶]精华",
            platformPrice: 760,
            productSkuId: "LA653700U",
            productId: "LAN00008"
          },
          sku: "LA653700U",
          sort: 1
        }, {
          gender: "男",
          index: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00012/FirstImage/1.jpg",
          offlineTime: "2022-01-23T08:00:00.000+0000",
          onlineTime: "2019-12-10T08:00:00.000+0000",
          productSkuDTO: {
            headPicture: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00012/FirstImage/1.jpg",
            name: "[小黑瓶]安瓶精华",
            platformPrice: 690,
            productSkuId: "L6960600U",
            productId: "LAN00012"
          },
          sku: "L6960600U",
          sort: 2
        }, {
          gender: "男",
          index: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00013/FirstImage/1.jpg",
          offlineTime: "2022-01-30T08:00:00.000+0000",
          onlineTime: "2019-12-10T08:00:00.000+0000",
          productSkuDTO: {
            headPicture: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00013/FirstImage/1.jpg",
            name: "眼部精华肌底液",
            platformPrice: 680,
            productSkuId: "LA109500U",
            productId: "LAN00013"
          },
          sku: "LA109500U",
          sort: 3
        }, {
          gender: "男",
          index: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00011/FirstImage/1.jpg",
          offlineTime: "2022-01-08T08:00:00.000+0000",
          onlineTime: "2019-12-10T08:00:00.000+0000",
          productSkuDTO: {
            headPicture: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00011/FirstImage/1.jpg",
            name: "小黑瓶[发光眼霜]",
            platformPrice: 520,
            productSkuId: "L8760400U",
            productId: "LAN00011"
          },
          sku: "L8760400U",
          sort: 4
        }, {
          gender: "男",
          index: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00001/FirstImage/1.jpg",
          offlineTime: "2022-01-30T08:00:00.000+0000",
          onlineTime: "2019-12-10T08:00:00.000+0000",
          productSkuDTO: {
            headPicture: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00001/FirstImage/1.jpg",
            name: "清滢柔肤水",
            platformPrice: 420,
            productSkuId: "L5449201U",
            productId: "LAN00001"
          },
          sku: "L5449201U",
          sort: 5
        }, {
          gender: "男",
          index: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
          offlineTime: "2021-01-31T08:00:00.000+0000",
          onlineTime: "2019-12-10T08:00:00.000+0000",
          productSkuDTO: {
            headPicture: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
            name: "新小白管",
            platformPrice: 480,
            productSkuId: "F6901900U",
            productId: "LAN00027"
          },
          sku: "F6901900U",
          sort: 6
        }],
        type: "type"
      },
      // tab2
      {
        account: "lancome",
        activityCode: null,
        categoryId: null,
        categoryName: null,
        channelId: null,
        className: "",
        createDate: "2019-09-12T03:07:53.807+0000",
        createDateString: "2019-09-12 11:07:53",
        delete: false,
        id: "5d79b68986e7970001efaf5a",
        image: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/68449876-5130-45aa-800b-acafc01a9e5a.jpg",
        jumpLink: "/pages/tabBar/product/product_details/product_details?id=LAN00072&skuId=LA034200U",
        moduleId: null,
        name: "明星彩香",
        pageType: "ProductView",
        productId: null,
        relateActivityCode: null,
        skuId: "LA034200U",
        skuListsDTO: [{
          gender: "男",
          index: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00086/FirstImage/1.jpg",
          offlineTime: "2021-02-01T16:00:00.000+0000",
          onlineTime: "2019-12-02T16:00:00.000+0000",
          productSkuDTO: {
            headPicture: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00086/FirstImage/1.jpg",
            name: "菁纯漆光唇釉",
            platformPrice: 270,
            productSkuId: "L8055500U",
            productId: "LAN00086"
          },
          sku: "L8055500U",
          sort: 5
        }, {
          gender: "男",
          index: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00071/FirstImage/1.png",
          offlineTime: "2021-02-01T16:00:00.000+0000",
          onlineTime: "2019-12-02T16:00:00.000+0000",
          productSkuDTO: {
            headPicture: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00071/FirstImage/1.png",
            name: "持妆轻透粉底液",
            platformPrice: 420,
            productSkuId: "L8082200U",
            productId: "LAN00071"
          },
          sku: "L8082200U",
          sort: 6
        }, {
          gender: "男",
          index: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/8bb31054-8d30-4925-bc3f-c76d13734970.jpg",
          offlineTime: "2021-02-01T08:00:00.000+0000",
          onlineTime: "2019-12-02T08:00:00.000+0000",
          productSkuDTO: {
            headPicture: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/8bb31054-8d30-4925-bc3f-c76d13734970.jpg",
            name: "持妆无瑕粉底棒",
            platformPrice: 380,
            productSkuId: "LA034200U",
            productId: "LAN00072"
          },
          sku: "LA034200U",
          sort: 7
        }],
        type: "type"
      },
      // tab3
      {
        account: "lancome",
        activityCode: null,
        categoryId: null,
        categoryName: null,
        channelId: null,
        className: "",
        createDate: "2019-09-22T09:30:02.438+0000",
        createDateString: "2019-09-22 17:30:02",
        delete: false,
        id: "5d873f1acc1997000123e0eb",
        image: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/fd06e88f-8e4e-46e8-beb4-049deb6f3d01.jpg",
        jumpLink: "/pages/tabBar/product/product_details/product_details?id=LAN00001&skuId=L5449201U",
        moduleId: null,
        name: "畅销榜单",
        pageType: "ProductView",
        productId: null,
        relateActivityCode: "1910101570644375661",
        skuId: "L5449201U",
        skuListsDTO: [{
            gender: "男",
            index: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/65959134-8d06-4393-87df-b0b551825ef3.jpg",
            offlineTime: "2021-01-31T08:00:00.000+0000",
            onlineTime: "2019-12-10T08:00:00.000+0000",
            productSkuDTO: {
              headPicture: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/65959134-8d06-4393-87df-b0b551825ef3.jpg",
              name: "空气轻垫菁纯粉底液",
              platformPrice: 630,
              productSkuId: "F7196900U",
              productId: "LAN00063"
            },
            sku: "F7196900U",
            sort: 7
          }, {
            gender: "男",
            index: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/76d30d48-e776-44b7-938b-620556f70358.jpg",
            offlineTime: "2021-01-31T08:00:00.000+0000",
            onlineTime: "2019-12-10T08:00:00.000+0000",
            productSkuDTO: {
              headPicture: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/76d30d48-e776-44b7-938b-620556f70358.jpg",
              name: "菁纯臻颜精萃乳霜",
              platformPrice: 1380,
              productSkuId: "LA155200U",
              productId: "LAN00039"
            },
            sku: "LA155200U",
            sort: 8
          }, {
            gender: "男",
            index: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/fac5ac4c-8227-46ca-b991-8af1fd48194c.jpg",
            offlineTime: "2021-01-31T08:00:00.000+0000",
            onlineTime: "2019-12-10T08:00:00.000+0000",
            productSkuDTO: {
              headPicture: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/fac5ac4c-8227-46ca-b991-8af1fd48194c.jpg",
              name: "塑颜紧致焕白霜",
              platformPrice: 895,
              productSkuId: "L6413500U",
              productId: "LAN00029"
            },
            sku: "L6413500U",
            sort: 9
          },
          {
            gender: "男",
            index: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/cd4267d6-f0e3-4800-82ec-eda9eb51b6cc.jpg",
            offlineTime: "2021-01-31T08:00:00.000+0000",
            onlineTime: "2019-12-10T08:00:00.000+0000",
            productSkuDTO: {
              headPicture: "https://containeruatstorage.blob.core.chinacloudapi.cn/test/9846b642-a9b6-4bb8-affe-82a9de63821f.jpg",
              name: "菁纯臻颜焕亮眼霜",
              platformPrice: 1080,
              productSkuId: "L9711100U",
              productId: "LAN00036"
            },
            sku: "L9711100U",
            sort: 10
          }, {
            gender: "男",
            index: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00013/FirstImage/1.jpg",
            offlineTime: "2021-01-31T08:00:00.000+0000",
            onlineTime: "2019-12-10T08:00:00.000+0000",
            productSkuDTO: {
              headPicture: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00013/FirstImage/1.jpg",
              name: "眼部精华肌底液",
              platformPrice: 680,
              productSkuId: "LA109500U",
              productId: "LAN00013"
            },
            sku: "LA109500U",
            sort: 11
          }
        ],
        type: "type"
      }
    ],
    checkedTitle: '',
    // 
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    tabs: [{
      id: 0,
      name: '全部商品'
    }, {
      id: 1,
      name: '金愿礼盒'
    }, {
      id: 2,
      name: '绿宝瓶系列'
    }, {
      id: 3,
      name: '高光系列'
    }, {
      id: 4,
      name: '干预式系列'
    }],
    goodsList: [
      [{
          id: 0,
          imgUrl: "https://i1.fuimg.com/708157/597f05c0940475b2.png",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0001"
        },
        {
          id: 1,
          imgUrl: "https://i1.fuimg.com/708157/14662ff33149b189.png",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0002"
        },
        {
          id: 2,
          imgUrl: "http://i2.tiimg.com/708157/6bded69cb50e5a7c.png",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0003"
        },
        {
          id: 3,
          imgUrl: "https://i1.fuimg.com/708157/53bb2d72960a2c4c.png",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0004"
        },
        {
          id: 4,
          imgUrl: "https://i1.fuimg.com/708157/3a5ca41570815516.png",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0005"
        },
        {
          id: 5,
          imgUrl: "https://i2.tiimg.com/708157/ed102f6a73f999a6.jpg",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0006"
        },
        {
          id: 6,
          imgUrl: "https://i2.tiimg.com/708157/51f7d425b32a02f7.jpg",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0007"
        }
      ],
      [{
          id: 0,
          imgUrl: "https://i2.tiimg.com/708157/51f7d425b32a02f7.jpg",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0008"
        },
        {
          id: 1,
          imgUrl: "https://i1.fuimg.com/708157/597f05c0940475b2.png",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0009"
        }
      ],
      [{
          id: 0,
          imgUrl: "https://i2.tiimg.com/708157/ed102f6a73f999a6.jpg",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0010"
        },
        {
          id: 1,
          imgUrl: "https://i1.fuimg.com/708157/14662ff33149b189.png",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0011"
        }
      ],
      [{
          id: 0,
          imgUrl: "https://i2.tiimg.com/708157/51f7d425b32a02f7.jpg",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0012"
        },
        {
          id: 1,
          imgUrl: "https://i1.fuimg.com/708157/597f05c0940475b2.png",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0013"
        }
      ],
      [{
          id: 0,
          imgUrl: "https://i1.fuimg.com/708157/597f05c0940475b2.png",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0014"
        },
        {
          id: 1,
          imgUrl: "https://i1.fuimg.com/708157/14662ff33149b189.png",
          price: 2195,
          desc: "HR活颜修护舒缓面膜50ml",
          goodId: "0015"
        }
      ]
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
    footerTap: app.footerTap
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // _gsTracker.setPageTitle("商品列表")
    // if (this.data.nav && this.data.nav.length > 0) {
    //   return;
    // }
    // App.HttpService.getRecommendData({
    //   type: 'byName'
    // }).then(res => {
    //   console.log("res", res)
    //   res.data.data[0].className = 'active'
    //   this.data.checkedTitle = res.data.data[0].name
    //   this.setData({
    //     nav: res.data.data,
    //     eachNav: res.data.data[0],
    //     navList: res.data.data[0].skuListsDTO
    //   });
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 点击tab
  // 滚动切换标签样式
  switchTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },

  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },

  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },

  // 点击进入产品详情
  goDetail(e) {
    console.log(e)

  },

  // (有搜索栏的话)点击搜索
  toSearch() {
    wx.navigateTo({
      url: '/pages/search/index',
    })
    _gsTracker.trackEvent("站内搜索", "搜索入口", '/pages/tabBar/Recommend/Recommend', 0)
  },

  // 点击切换tab
  navTab: function(e) {
    let that = this;
    let dataName = e.currentTarget.dataset.navname;
    let nav = that.data.nav;
    console.log("1234", dataName, nav)
    this.data.checkedTitle = dataName
    let selectedNav = nav.find((ele) => {
      return ele.name == dataName
    });
    this.setData({
      eachNav: selectedNav,
      navList: selectedNav.skuListsDTO
    });

    selectedNav.type = 'type';
    var params = {
      name: 'navTab',
      openId: user.openId,
      page: selectedNav.page,
      pagesize: selectedNav.pagesize,
      orderStatus: selectedNav.action
    }
    let list = this.data.nav.map(item => {
      if (item.name == dataName) {
        item.className = "active";
        item.type = 'type';
      } else {
        item.className = "";
        item.type = 'type';
      }
      return item;

    })
    this.setData({
      nav: list,
    })
  },

  /**
   * 跳转到详情页
   */
  toDetailsId(e) {
    console.log("456722", e)
    let checkedTitle = this.data.checkedTitle
    _gsTracker.trackEvent("商品列表", checkedTitle + "-浏览详情", e.currentTarget.dataset.name, 0)
    App.WxService.navigateTo('../product/product_details/product_details', {
      id: e.currentTarget.dataset.id,
      skuId: e.currentTarget.dataset.skuid
    })
  },
  toDetail(e) {
    console.log("4567", e.currentTarget.dataset.name)
    _gsTracker.trackEvent("商品列表", e.currentTarget.dataset.name + "-活动大图", e.currentTarget.dataset.url, 0)
    App.WxService.navigateTo(e.currentTarget.dataset.url)
  },

  // 有搜索框的情况下，吊起键盘
  /**
   * placeholder
   */
  loadKeyWord() {
    wx.showLoading({
      title: '加载中',
    })
    App.HttpService.getHot()
      .then(resList => {
        wx.hideLoading();
        let placeholder = resList.data.name_cn
        this.setData({
          value: placeholder ? placeholder : ""
        })
      })
  },


})