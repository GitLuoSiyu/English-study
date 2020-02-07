// pages/tabBar/user/user.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "未绑定手机",
    customer: {},
    isShowLayer: false,
    isAuth: App.globalData.customerInfo.openId ? true : false,
    isPhone: App.globalData.customerInfo.mobile ? true : false
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
    // wx.hideShareMenu();
    // _gsTracker.setPageTitle("个人中心")
    // let that = this
    // that.setData({
    //   isAuth: App.globalData.customerInfo.openId ? true : false,
    //   isPhone: App.globalData.customerInfo.mobile ? true : false
    // })
    // App.setTabBarBadge();
    // App.getOpenId()
    //   .then(res => {
    //     let data = {
    //       openId: res.openId,
    //       account: config.account
    //     }
    //     return App.HttpService.findUserByOpenId(data)
    //   })
    //   .then(res => {
    //     App.mutationCustomerInfo(res.data)
    //     let text = ""
    //     if (res.data.mobile && res.data.name) {
    //       text = "完善信息";
    //     } else if (res.data.mobile && !res.data.name) {
    //       text = "完善个人信息";
    //     } else {
    //       text = '未绑定手机'
    //     }
    //     that.setData({
    //       text: text,
    //       customer: res.data
    //     })
    //     console.log(this.data.customer)
    //   });
    // let isIphoneX = App.globalData.isIphoneX;
    // this.setData({
    //   isIphoneX: isIphoneX
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

  contactIcon() {

  },

  bindGetUserInfo() {

  },

  navigateTo() {
    var that = this
  },

  goMyOder(e) {
    // if (Object.keys(App.globalData.customerInfo).length <= 0) {
    //   wx.navigateTo({
    //     url: '../user/bindphone/bindphone'
    //   })
    //   return false;
    // } else {
    //   let that = this;
    //   let indexId = e.currentTarget.dataset.indexid;
    //   console.log("indexId", e, indexId)
    //   wx.navigateTo({
    //     url: '../../order/order?indexId=' + indexId,
    //   })
    // }
    let indexId = e.currentTarget.dataset.indexid;
    wx.navigateTo({
      url: '../../orders/orders?indexId=' + indexId,
    })
  },

  // 联系客服
  contactIcon() {
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
    _gsTracker.trackEvent("在线咨询", "在线咨询", '/pages/tabBar/user/user', 0)
  },

  // 绑定用户信息
  bindGetUserInfo(e) {
    console.log(e.detail)
    if (e.detail.userInfo || this.data.isAuth) { // 用户授权成功
      // 获取用户信息成功，进行后续流程
      let text = this.data.text
      if (text == "未绑定手机") {
        App.WxService.navigateTo('../../tabBar/user/bindphone/bindphone')
      } else {
        App.WxService.navigateTo('../../tabBar/user/registe/registe')
      }
    } else { // 用户授权失败

    }
  },

  navigateTo() {
    var that = this
  },

  // 跳转订单中心，判断
  goMyOder(e) {
    if (Object.keys(App.globalData.customerInfo).length <= 0) {
      wx.navigateTo({
        url: '../user/bindphone/bindphone'
      })
      return false;
    } else {
      let that = this;
      let indexId = e.currentTarget.dataset.indexid;
      console.log("indexId", e, indexId)
      wx.navigateTo({
        url: '../../order/order?indexId=' + indexId,
      })
    }
  },

})