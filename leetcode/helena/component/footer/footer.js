var App = getApp();
var user = App.globalData.userInfo;
let btnTimeOut = true;
var btnTimeOutAll = false;
import _gsTracker from '../../utils/gs.js';
const Component = _gsTracker.GsComponent;
Component({
  data: {
    cartCount: 0,
    productSKU: {},
    payStatus: '立即购买',
    status:Number,
    formId:'',
    isAuth: App.globalData.customerInfo.openId?true:false,
    isPhone: App.globalData.customerInfo.mobile ? true : false
  },
  onLoad() {
    console.log("commodity", this.data.commodity)
    this.setData({
      isPhone: App.globalData.customerInfo.mobile ? true : false
    })
  },
  attached() {
    console.log(App.globalData.customerInfo.openId);
    this.setData({
      isAuth: App.globalData.customerInfo.openId ? true : false,
      isPhone: App.globalData.customerInfo.mobile ? true : false
    })
  },
  properties: {
    commodity: {
      type: Object,
      value: {}
    },
    skuInformation: {
      type: Object,
      value: {}
    },
    cartCount: {
      type: Number,
      value: 0
    },
    choosed: {
      type: Object,
      value: {},
      observer:function(newVal,old,changed){
        if (newVal){
          console.log("newVal", newVal.stockQty)
          this.data.status = newVal.stockQty
          if (newVal.stockQty > 0) {
            this.setData({
              payStatus: '立即购买'
            })
          } else {
            this.setData({
              payStatus: '售罄'
            })
          }
        }
      }
    },
  },
  ready(){
    this.dataLoad();
    console.log("commodity", this.data.choosed)
    let that = this
    that.data.status = that.data.choosed.stockQty
    if (that.data.status){
      if (that.data.status > 0) {
        that.setData({
          payStatus: '立即购买'
        })
      } else {
        that.setData({
          payStatus: '售罄'
        })
      }
    }
  },
  methods: {
    // 初始化数据
    dataLoad() {
      let that = this
      if (that.data.commodity.productSkuDTO) {
        setTimeout(function() {
          console.log("commodity", that.data.commodity)
            that.data.status = that.data.commodity.productSkuDTO[0].stockQty
            if (that.data.status > 0) {
              that.setData({
                payStatus: '立即购买'
              })
            } else {
              that.setData({
                payStatus: '到货通知'
              })
            }
        }, 2000)
      }
    },
    // 首页
    toIndex() {
      App.globalData.menuStatus = true;
      wx.switchTab({
        url: '/pages/tabBar/index/index',
      })
    },
    //客服
    contactEvent(){
      if (App.globalData.customerInfo.mobile == null) {
        wx.showModal({
          title: '请先绑定手机号',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.navigateTo({
                url: '/pages/tabBar/user/bindphone/bindphone'
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
        return
      }
      _gsTracker.trackEvent("在线咨询", "在线咨询",'pages/tabBar/product/product_details/product_details', 0)
    },
    // 跳转购物车
    toCart() {
      wx.switchTab({
        url: '/pages/tabBar/cart/cart'
      })
      return false
    },
    // 定制服务
    toCustomService() {
      _gsTracker.trackEvent("PDP", "定制服务",this.data.choosed.name, 0)
      if (this.data.status > 0) {
        App.WxService.navigateTo("/pages/carveWord/carveWord", {
          productSkuId: this.data.skuInformation.productSkuId,
          presetEnable: this.data.commodity.customizationDTO.presetEnable
        })
      } else {
        wx.showToast({
          title: '已售磬',
          icon:'none',
          duration: 1500
        })
      }
    },
    // 加入购物车
    addCart(e) {
      console.log("23456",e)
      let that = this
      if (e.detail.errMsg == "getUserInfo:ok") {
        _gsTracker.trackUserInfo(e.detail.userInfo)
        _gsTracker.trackEvent("授权", "授权进入小程序", 0)
        b()
      } else if (that.data.isAuth) {
        b()
      }
      function b() {
        if (!App.checkCartMaxCount(that.data.skuInformation.productSkuId)) {
          wx.showToast({
            title: '购物车单件商品不能超过5个',
            icon: 'none'
          })
          return;
        }
        App.getOpenId()
          .then(res => App.HttpService.addCart({
            account: App.config.account,
            count: 1,
            openId: res.openId,
            skuDTO: {
              productSkuId: that.data.skuInformation.productSkuId
            },
            cartType: 0
          }))
          .then(res => {
            console.log(res)
            if (!res.data.status) {
              let content = App.getErrMsg(res.data.statusCode)
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
              console.log("formId", that.data.formId)
              _gsTracker.trackEvent("PDP", "加入购物车", that.data.choosed.name, 0, { 'formId': that.data.formId })
              wx.showToast({
                title: '成功加入购物车',
              })
            }
          })
      }
    },
    addCart1(e){
      console.log("ee",e)
      this.data.formId = e.detail.formId
    },
    // 立即购买
    toPay(e) {
      console.log("payStatus",e.type,this.data.payStatus,btnTimeOut)
      if (e.type == 'submit'){
        this.data.formId = e.detail.formId
      }else{
        if (btnTimeOut) {
          wx.showLoading({
            title: '加载中',
            mask:true
          })
          btnTimeOut = false
          let that = this
          console.log(that.data.isAuth)
          console.log("3456789", that.data.payStatus, that.data.choosed.name)
          that.setData({
            btnTimeOutAll:true
          })
          if (e.detail.errMsg == "getUserInfo:ok") {
            _gsTracker.trackUserInfo(e.detail.userInfo)
            _gsTracker.trackEvent("授权", "授权进入小程序", 0)
            wx.showLoading({
              title: '加载中',
            })
            b()
          } else if(that.data.isAuth) {
            wx.showLoading({
              title: '加载中',
            })
            b()
          }
          function b() {
            App.getOpenId()
              .then(res => {
                _gsTracker.trackEvent("PDP", that.data.payStatus, that.data.choosed.name, 0)
                let data = {
                  account: App.config.account,
                  openId: user.openId,
                  shareList: [""],
                  skuList: [{
                    productSkuIds: that.data.skuInformation.productSkuId,
                    count: 1
                  }]
                }
                console.log("that.data.status",that.data.status)
                if (that.data.status > 0) {
                  App.HttpService.getPromotionNew(data).then(resPromotion => {
                    console.log("getPromotionNew-details", resPromotion)
                    let giftList = resPromotion.data.samples
                    console.log("giftList", giftList)
                    App.getOpenId()
                      .then(res => App.HttpService.getDefaultAddress({
                        openId: res.openId,
                        account: App.config.account
                      }))
                      .then(res => {
                        console.log("res1", res)
                        let address = res.data
                        let shipmentDto = !address ? null : {
                          shippingAddressDTO: {
                            city: address.cityName,
                            detailAddress: address.street,
                            district: address.districtName,
                            mobilePhone: address.phone,
                            postalCode: address.postalCode,
                            province: address.provinceName,
                            receiveName: address.receiverName,
                            telephoneNumber: address.telephone
                          }
                        };
                        let orderInfo = {
                          account: App.config.account,
                          customerId: App.globalData.customerInfo.id,
                          openId: App.globalData.userInfo.openId,
                          productsDto: [{
                            quantity: '1',
                            sku: that.data.skuInformation.productSkuId,
                            headPicture: that.data.skuInformation.headPicture,
                            productName: that.data.skuInformation.name,
                            basePrice: that.data.skuInformation.platformPrice,
                            productType: that.data.skuInformation.productType,
                          }],
                          shippingPrice: resPromotion.data.freight,
                          total: resPromotion.data.totalPrice,
                          shipmentDto: shipmentDto,
                          formId: that.data.formId,
                          giftList: giftList
                        }
                        wx.hideLoading();
                        App.mutationOrderInfo(orderInfo)
                        wx.navigateTo({
                          url: '/pages/pay/pay?product=' + encodeURIComponent(JSON.stringify(res.data))
                        })
                        btnTimeOut = true;
                      })
                  }).catch(err => {
                    btnTimeOut = true;
                    wx.hideLoading();
                    console.log(err)
                  })
                }else{
                  btnTimeOut = true;
                }
              })
          }
        }else{
          this.setData({
            btnTimeOutAll:true
          })
        }
      }
      wx.hideLoading();
    },
  },
})