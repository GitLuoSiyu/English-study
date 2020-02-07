// pages/product/productDeail/productDeail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: 0,
    isShare: true,
    productSKU: {
      addTime: "2019-12-03 14:28:48",
      catePropVal: "30ml",
      categoryPicture: null,
      categorySkuPropertyDTO: {
        catePropId: null,
        catePropVal: "30ml",
        code: "Other",
        id: null,
        name: "其它",
        productSkuId: "F6901900U"
      },
      categorySkuPropertyDTOList: [{
        catePropId: null,
        catePropVal: "30ml",
        code: "Other",
        id: null,
        name: "其它",
        productSkuId: "F6901900U"
      }],
      channelId: null,
      colorPicture: null,
      colorProperty: null,
      costPrice: 480,
      count: null,
      customizationDTO: {
        cardDetailDTO: null,
        cardEnable: false,
        customized: false,
        direction: null,
        engraveDetailDTO: null,
        engraveEnable: false,
        engraveImg: [],
        fontColor: null,
        position: "0",
        positionListDTO: null,
        positionX: "",
        positionY: "",
        presetEnable: false
      },
      defaultProperty: "30ml",
      digest: "轻透防晒系列",
      headPicture: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
      isAlive: 0,
      isShow: "0",
      lev: 10,
      marketPrice: 480,
      name: "新小白管",
      // p2 这里才是轮播图，因为每个sku的轮播图都不一样
      p2: [{
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/1.jpg",
        type: "2"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/2.jpg",
        type: "2"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/3.jpg",
        type: "2"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/4.jpg",
        type: "2"
      }],
      p3: [{
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
        type: "3"
      }],
      p4: [{
        id: null,
        pictureUrl: "",
        type: "4"
      }],
      // 轮播
      pictureDTO: [{
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/1.jpg",
        type: "2"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/2.jpg",
        type: "2"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/3.jpg",
        type: "2"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/4.jpg",
        type: "2"
      }, {
        id: null,
        pictureUrl: "",
        type: "category"
      }, {
        id: null,
        pictureUrl: "",
        type: "color"
      }, {
        id: null,
        pictureUrl: "",
        type: "4"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
        type: "3"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
        type: "6"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
        type: "friend"
      }],
      platformCode: null,
      platformPrice: 480,
      productId: "LAN00027",
      productLev: 30,
      productSkuId: "F6901900U",
      productType: "0",
      realQty: null,
      relateCouponCode: "",
      relateProductId: null,
      removeTime: null,
      rgba: null,
      sampleType: null,
      sharingCopywriters: [],
      showColorSelector: false,
      stock: 1000,
      stockQty: 1000,
      stockRate: null,
      title: "兰蔻柔皙轻透防晒素颜乳",
      tryColor: false,
      updateTime: "2019-12-13T10:12:50.318+0000",
      uploadSuccess: true,
      version: 5,
      warningStock: 0
    },
    isAuth: false,
    isCollect: false,
    cartCount: 0,
    isShowLayer: false,
    isShowMoments: true,
    productId: '',
    swiperIndex: 0,
    skuId: '',
    product: {
      account: "lancome",
      addTime: null,
      attachment: false,
      attachmentList: null,
      attachmentListDTO: null,
      categoryId: null,
      categoryIds: ["5dd66e424b538e2aa4a5aeb9"],
      changeShow: "0",
      customizationDTO: {
        engraveEnable: false,
        engraveImg: Array(0),
        positionX: "",
        positionY: "",
        engraveDetailDTO: null,
      },
      digest: null,
      firstOtherProperty: "30ml",
      id: "5dd7fa96437a3e8310b5c18e",
      isAlive: null,
      keywords: [""],
      labelLists: [],
      lev: 30,
      name: "新小白管",
      // p0是 商品分类页里的展示栏图片
      p0: [{
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
        type: "0"
      }],
      // p1 是商品详情里的 图片
      p1: [{
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/1.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/2.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/3.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/4.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/5.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/6.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/7.jpg",
        type: "1"
      }],
      pictureDTO: [{
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/1.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/2.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/3.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/4.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/5.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/6.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/DetailImage/7.jpg",
        type: "1"
      }, {
        id: null,
        pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
        type: "0"
      }],
      productDetails: "兰蔻柔皙轻透防晒素颜乳 30ml",
      productId: "LAN00027",
      productImg: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
      productProperty: "NORMAL",
      productSkuDTO: [{
        addTime: "2019-12-03 14:28:48",
        catePropVal: "30ml",
        categoryPicture: null,
        categorySkuPropertyDTO: {
          catePropId: null,
          catePropVal: "30ml",
          code: "Other",
          id: null,
          name: "其它",
          productSkuId: "F6901900U"
        },
        categorySkuPropertyDTOList: [{
          catePropId: null,
          catePropVal: "30ml",
          code: "Other",
          id: null,
          name: "其它",
          productSkuId: "F6901900U"
        }],
        channelId: null,
        colorPicture: null,
        colorProperty: null,
        costPrice: 480,
        count: null,
        customizationDTO: {
          cardDetailDTO: null,
          cardEnable: false,
          customized: false,
          direction: null,
          engraveDetailDTO: null,
          engraveEnable: false,
          engraveImg: [],
          fontColor: null,
          position: "0",
          positionListDTO: null,
          positionX: "",
          positionY: "",
          presetEnable: false
        },
        defaultProperty: "30ml",
        digest: "轻透防晒系列",
        headPicture: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
        isAlive: 0,
        isShow: "0",
        lev: 10,
        marketPrice: 480,
        name: "新小白管",
        // p2 这里才是轮播图，因为每个sku的轮播图都不一样
        p2: [{
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/1.jpg",
          type: "2"
        }, {
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/2.jpg",
          type: "2"
        }, {
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/3.jpg",
          type: "2"
        }, {
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/4.jpg",
          type: "2"
        }],
        p3: [{
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
          type: "3"
        }],
        p4: [{
          id: null,
          pictureUrl: "",
          type: "4"
        }],
        // 轮播
        pictureDTO: [{
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/1.jpg",
          type: "2"
        }, {
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/2.jpg",
          type: "2"
        }, {
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/3.jpg",
          type: "2"
        }, {
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/F6901900U/ShowImage/4.jpg",
          type: "2"
        }, {
          id: null,
          pictureUrl: "",
          type: "category"
        }, {
          id: null,
          pictureUrl: "",
          type: "color"
        }, {
          id: null,
          pictureUrl: "",
          type: "4"
        }, {
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
          type: "3"
        }, {
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
          type: "6"
        }, {
          id: null,
          pictureUrl: "https://devopsblob01.blob.core.chinacloudapi.cn/lancome/Images/LAN00027/FirstImage/1.jpg",
          type: "friend"
        }],
        platformCode: null,
        platformPrice: 480,
        productId: "LAN00027",
        productLev: 30,
        productSkuId: "F6901900U",
        productType: "0",
        realQty: null,
        relateCouponCode: "",
        relateProductId: null,
        removeTime: null,
        rgba: null,
        sampleType: null,
        sharingCopywriters: [],
        showColorSelector: false,
        stock: 1000,
        stockQty: 1000,
        stockRate: null,
        title: "兰蔻柔皙轻透防晒素颜乳",
        tryColor: false,
        updateTime: "2019-12-13T10:12:50.318+0000",
        uploadSuccess: true,
        version: 5,
        warningStock: 0
      }],
      productType: "0",
      recommendProductsDTOList: [

      ],
      season: null,
      sex: null,
      showColorSelector: false,
      sort: 0,
      title: "兰蔻柔皙轻透防晒素颜乳",
      tryColor: false,
      updateTime: "2019-12-13T10:19:29.648+0000",
      version: 5,
      year: null,
      // footer
      btnTimeOutAll: false,
      cartCount: 0,
      productSKU: {},
      payStatus: "立即购买",
      status: Number,
      formId: '',
      isAuth: true,
      isPhone: true
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  categoryClick(e) {

  },

  //加入购物车
  addCart(e) {

  },

  bindgetuserinfo(e) {
    console.log(e.detail)
  },

  toCart() {
    wx.switchTab({
      url: '../../tabBar/cart/cart'
    })
    return false
  },

  toCustomer(e) {
    console.log('进入客服页')
  },

  //首页
  toIndex() {
    wx.switchTab({
      url: '../../tabBar/index/index',
    })
  },

  toPay(e) {
    console.log('点击了立即购买')
    wx.redirectTo({
      url: '../../orders/orderCreat/orderCreat',
    })

  },


  closeLayer() {
    let that = this;
    that.setData({
      isShowLayer: false
    })
  },

  phoneCall(e) {
    console.log(e);
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function() {
        console.log('成功拨打电话');
      },
      fail: function(e) {
        console.log('拨打电话失败' + e);
      }
    })
  },

  swiperChange(e) {
    // console.log('轮播变化了:', e)
    // let that = this;
    // that.setData({
    //   swiperCurrent: e.detail.current
    // })
  },

  // 仿造兰蔻的逻辑

  // 分享
  onShareAppMessage() {
    console.log(this.data.productSKU)
    let imageUrl = this.data.productSKU.pictureDTO.find(i => { return i.type == 3 }).pictureUrl ? this.data.productSKU.pictureDTO.find(i => { return i.type == 3 }).pictureUrl : this.data.productSKU.pictureDTO.find(i => { return i.type == 6 }).pictureUrl;
    console.log(imageUrl);
    return {
      title: `${this.data.product.name}`,
      path: `/pages/tabBar/product/product_details/product_details?id=${this.data.product.productId}`,
      imageUrl: `${imageUrl}`
    }
  },

  // 点击品牌切换sku
  categoryClick(e) {
    console.log("e.detail.value", e.detail.value)
    let productSKU = this.data.product.productSkuDTO.find(item => item.productSkuId == e.detail.value)
    console.log("11", productSKU)
    this.setData({
      checkValue: e.detail.value,
      productSKU: productSKU,
      swiperIndex: 0
    })
  },

  // 点击加入购物车
  addCart(e) {
    let that = this
    if (e.detail.errMsg == "getUserInfo:ok") {
      _gsTracker.trackUserInfo(e.detail.userInfo)
      _gsTracker.trackEvent("授权", "授权进入小程序", 0)
      if (!App.checkCartMaxCount(that.data.productSKU.productSkuId)) {
        wx.showToast({
          title: '购物车单件商品不能超过5个',
          icon: 'none'
        })
        return;
      }
      console.log(that.data.productSKU)
      App.getOpenId()
        .then(res => App.HttpService.addCart({
          account: App.config.account,
          count: 1,
          openId: res.openId,
          skuDTO: { productSkuId: that.data.productSKU.productSkuId },
          cartType: 0
        }))
        .then(res => {
          console.log(res)
          if (!res.data.status) {
            let content = App.getErrMsg(res.data.statusCode)
            console.log("12345", statusCode)
            wx.showToast({
              title: content,
              icon: "none"
            })
            return false;
          } else {
            App.mutationCartInfo(res.data.data)
            that.setData({
              cartCount: res.data.data.totalCount
            })
            wx.showToast({
              title: '成功加入购物车',
            })
          }
        })
      that.gsTrackEvent("加入购物车")
    }
  },

  // 绑定用户信息
  bindgetuserinfo(e) {
    console.log(e.detail)
  },

  // 点击footer购物车，进入购物车页面
  toCart() {
    wx.switchTab({
      url: '../../cart/cart'
    })
    return false
  },

  // 点击footer底部的 首页，进行跳转
  toIndex() {
    wx.switchTab({
      url: '../../../tabBar/index/index',
    })
  },

  // 底部有 猜你喜欢，点击进入商品详情
  toDetail(e) {
    console.log(e)
    _gsTracker.trackEvent("PDP", "推荐搭配-", "首页左上角", 0)
    App.WxService.navigateTo('../product_details/product_details', {
      id: e.currentTarget.dataset.id
    })
  }, 

  // 点击底部加入收藏
  addCollect() {
    let that = this
    App.HttpService.favorite({
      account: App.config.account,
      openId: App.globalData.userInfo.openId,
      sku: [{
        productDTO: that.data.product
      }]
    })
      .then(res => {
        console.log(res)
        if (!res.data.status) {
          wx.showToast({
            title: '收藏成功',
          })
        } else {
          wx.showToast({
            title: '取消收藏成功',
          })
        }
        that.setData({
          isCollect: !res.data.status
        })

      })
    if (!this.data.isCollect) {
      this.gsTrackEvent("收藏")
    } else {
      this.gsTrackEvent("取消收藏")
    }
  },

  // 送礼，增收购买
  clickGift(e) {
    console.log(e)
    App.WxService.navigateTo('../../../gift/sendFriend/sendFriend', {
      id: e.target.dataset.id
    })
    this.gsTrackEvent("送礼")
    return false;
  },

  // 点击推荐好物，将商品 分享到朋友圈、微信好友、QQ空间等等
  clickCircle(e) {
    let that = this;
    console.log("推荐好物", that.data.productSKU)
    if (wx.openBusinessView) {
      wx.openBusinessView({
        businessType: 'friendGoodsRecommend',
        extraData: {
          product: {
            item_code: that.data.productSKU.productId,
            title: that.data.productSKU.name,
            image_list: [that.data.productSKU.pictureDTO[0].pictureUrl, that.data.productSKU.pictureDTO[1].pictureUrl, that.data.productSKU.pictureDTO[2].pictureUrl]
          }
        },
        success: function (res) {
          console.log("openBusinessViewResult:", res)
          let productRecommendDTO = {
            imageList: that.data.productSKU.pictureDTO[0].pictureUrl,
            title: that.data.productSKU.name,
            itemCode: that.data.productSKU.productSkuId,
            openId: App.globalData.userInfo.openId
          }
          App.HttpService.goodsRecommend(productRecommendDTO).then(response => {
            console.log("goodsRecommendResult", response.data)
          })
        },
        fail: function (res) {
          console.log(res)
        }
      })

    } else {
      wx.showToast({
        title: '请将微信更新到最新版本',
        duration: 3000,
        icon: "none"
      })
    }
    _gsTracker.trackEvent("PDP", "推荐好物", that.data.productSKU.name, 0)
  },

  // 点击页面右下角 分享按钮
  clickShare() {
    let [that, isShare] = [this, this.data.isShare]
    that.setData({
      isShare: !isShare
    })
    //监测代码  
    if (!this.data.isShare) {
      this.gsTrackEvent("分享")
    }
  },

  // 显示分享模块
  showShareToMoments() {
    let [that, isShowMoments] = [this, this.data.isShowMoments]
    if (isShowMoments) {
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success(res) {
                that.setData({
                  isAuth: true
                })
              }
            })
          } else {
            that.setData({
              isAuth: true
            })
          }
        }
      })
    }
    that.setData({
      isShar: true,
      isShowMoments: !isShowMoments
    })

  },

  // 选择不同规格sku
  chooseColor: function (e) {
    console.log("choose color", e)
    let productSKU = this.data.product.productSkuDTO.find(item => item.productSkuId == e.currentTarget.dataset.id);
    console.log("choose color", productSKU)
    this.data.colorCheckd = productSKU.defaultProperty
    this.setData({
      swiperIndex: 0,
      activeIndex: e.currentTarget.dataset.index,
      colorName: productSKU.defaultProperty,
      productSKU
    })
  },

  // 试色       
  cameraEvent() {
    _gsTracker.trackEvent("唇膏试色", "即刻试色", this.data.colorCheckd, 0)
    // console.log("productId", this.data.productId)
    wx.navigateTo({
      url: "/pages/tabBar/product/product_details/makeFirst/makeFirst?data=" + encodeURIComponent(JSON.stringify(this.data.productDeP)) +
        '&type="shise"',
    })
  },

  // 保存商品图片
  shareToMoments(e) {
    let [that, imgurl] = [this, e.target.dataset.imgurl]
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              wx.getImageInfo({
                src: imgurl,
                success(res) {
                  let path = res.path;
                  console.log(path)
                  wx.saveImageToPhotosAlbum({
                    filePath: path,
                    success(result) {
                      wx.showToast({
                        title: '保存图片成功',
                      })
                    }
                  })
                }
              })

            }
          })
          that.setData({
            isAuth: false
          })
        } else {
          wx.getImageInfo({
            src: imgurl,
            success(res) {
              let path = res.path;
              wx.saveImageToPhotosAlbum({
                filePath: path,
                success(result) {
                  wx.showToast({
                    title: '保存图片成功',
                  })
                },
                fail() {
                  wx.showToast({
                    title: '保存图片失败',
                  })

                }
              })
            }
          })

          that.setData({
            isAuth: true
          })
        }
      }
    })
  },

  // 
  handler(e) {
    let that = this;
    if (!e.detail.authSetting['scope.writePhotosAlbum']) {
      that.setData({
        isAuth: false
      })
    } else {
      that.setData({
        isAuth: true
      })
    }
  },

  // 加载详情页数据
  loadProductById(id) {
    let that = this
    return App.getOpenId()
      .then(res => App.HttpService.getPorductByProductId(id))
      .then(res => {
        console.log("dataddd", res)
        let data = res.data
        if (!data.productSkuDTO || data.productSkuDTO.length <= 0 || data.productSkuDTO[0].isAlive == 1) {
          wx.showToast({
            title: '该产品已下架',
            duration: 2000,
            icon: 'none',
            mask: true,
          })
          setTimeout(res => {
            wx.switchTab({
              url: '../../index/index',
            })
          }, 2100)
          return false;
        }
        data.p0 = data.pictureDTO.filter(item => item.type == 0) //主图
        data.p1 = data.pictureDTO.filter(item => item.type == 1) //详情图
        data.productSkuDTO.forEach(item => {
          item.p2 = item.pictureDTO.filter(item => item.type == 2) //SKU轮播图
          item.p3 = item.pictureDTO.filter(item => item.type == 3) //SKU菊花码
          item.p4 = item.pictureDTO.filter(item => item.type == 4) //SKU首页图
        })
        let productSKU = data.productSkuDTO.find(item => item.productSkuId == that.data.skuId)
        if (!productSKU) {
          productSKU = data.productSkuDTO[0]
        }
        console.log(data)
        this.setData({
          footerData: data
        })
        this.data.productDeP = data
        this.data.colorCheckd = data.productSkuDTO[0].defaultProperty
        console.log(data);
        let productSkuId = 0;
        data.productSkuDTO.forEach((item, index) => {
          if (item.productSkuId == that.data.skuId) {
            productSkuId = index;
          }
        })
        that.setData({
          skuIndex: productSkuId,
          product: data,
          productSKU,
          activeIndex: data.productSkuDTO.indexOf(productSKU),
          colorName: productSKU.defaultProperty,
        })

        //猜你喜欢
        App.HttpService.getDetailCommendtUrl({
          categoryId: that.data.product.categoryIds

        }).then(res => {
          that.setData({
            recommendProductsDTOList: res.data.data
          })
        })
      })
  },

  // 客服
  showLayer() {
    let that = this;
    let isShow = that.data.isShowLayer;
    that.setData({
      isShowLayer: !isShow
    })
  },
  // 关闭客服
  closeLayer() {
    let that = this;
    that.setData({
      isShowLayer: false
    })
  },

  // 微信拨打电话
  phoneCall(e) {
    console.log(e);
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
        console.log('成功拨打电话');
      },
      fail: function (e) {
        console.log('拨打电话失败' + e);
      }
    })
  },

  // 查看更多，回到商品分类页
  lookMore() {
    wx.switchTab({
      url: "../product"
    })
  },

  // 点击进入客服服务
  toCustomService() {
    App.WxService.navigateTo("/pages/carveWord/carveWord", {
      customizationDTO: JSON.stringify(this.data.product.customizationDTO),
      //skuDTO: JSON.stringify(this.data.productSKU)
      productSkuId: this.data.productSKU.productSkuId
    });
  },

  // 改变切换规格
  changeSpecify(e) {
    let productSKU = this.data.product.productSkuDTO.find(item => item.productSkuId == e.currentTarget.dataset.value)
    this.setData({
      checkValue: e.currentTarget.dataset.value,
      productSKU: productSKU,
      skuIndex: e.currentTarget.dataset.index,
      swiperIndex: 0
    })
  },

  // 如果 有搜索框，点击搜索框，唤起键盘
  loadKeyWord() {
    App.HttpService.getHot()
      .then(resList => {
        let placeholder = resList.data.name_cn
        this.setData({
          placeholder: placeholder ? placeholder : ""
        })
      })
  },

  // 点击搜索框，进入搜索结果页
  goDetail() {
    wx.navigateTo({
      url: '/pages/search/index',
      success: function () {
        _gsTracker.trackEvent("站内搜索", "搜索入口", '/pages/tabBar/product/product_details/product_details', 0)
      }
    })
  },

  // 这是什么
  customFriends() {
    _gsTracker.trackEvent("在线咨询", "在线咨询", 'pages/tabBar/product/product_details/product_details', 0)
  }

})