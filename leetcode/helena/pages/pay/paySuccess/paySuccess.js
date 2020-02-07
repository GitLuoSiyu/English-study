// pages/pay/paySuccess/paySuccess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderNo: '',
    orderTime: '',
    totalPrice: '',
    card: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.orderNo = options.orderNo
    this.setData({
      orderNo: App.globalData.orderInfo.orderNo,
      orderTime: App.globalData.orderInfo.createTimeFormat,
      totalPrice: App.globalData.orderInfo.total + App.globalData.orderInfo.shippingPrice,
      card: {
        isShow: true,
        title: `订单号:${App.globalData.orderInfo.orderNo}`,
        path: `/pages/order/orderDt/orderDt?id=${App.globalData.orderInfo.orderNo}`
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    App.globalData.orderInfo = {}
    App._gsTracker.setPageTitle("付款成功")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  toIndex() {
    wx.switchTab({
      url: '../../tabBar/index/index'
    })
  },
  toOrder() {
    if (this.orderNo) {
      wx.navigateTo({
        url: '../../order/orderDt/orderDt?id=' + this.orderNo,
      })
    } else {
      wx.navigateTo({
        url: '../../order/order?status=11'
      })
    }
  },
})