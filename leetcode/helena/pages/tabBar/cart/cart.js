// pages/tabBar/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkFlag: false,
    checkAllFlag: false,
    totalPrice: 0,
    cartList: [{
        goodId: "111",
        imgUrl: "https://i1.fuimg.com/708157/14662ff33149b189.png",
        cartNum: 1,
        price: 1234,
        selected: true
      },
      {
        goodId: "112",
        imgUrl: "https://i1.fuimg.com/708157/14662ff33149b189.png",
        cartNum: 1,
        price: 2234,
        selected: false
      },
      {
        goodId: "112",
        imgUrl: "https://i1.fuimg.com/708157/14662ff33149b189.png",
        cartNum: 1,
        price: 3234,
        selected: true
      }
    ]
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

  goDetail() {

  },

  loveProduct() {

  },

  //优惠劵-select
  couponListAll(e) {

  },

  removeArr(arr, item) {

  },

  //更改
  toChange() {

  },

  //提交
  toNext() {

  },

  //tag切换
  navTab(e) {

  },

  //优惠劵显??
  isShowCoupon() {

  },


  //隐
  closeLayer() {

  },

  //免费送礼提示
  checkFree() {

  },
  //跳转产品页面
  toProduct() {
    wx.switchTab({
      url: '../product/product',
    })
  },

  inputFocus() {
    console.log("11");
    this.setData({
      isHideTxt: true
    })
  },
  inputBlur(e) {
    if (e.detail.value == "") {
      this.setData({
        isHideTxt: false
      })
    }
  },

  inputSubmit() {

  },

  bindPickerChange() {

  },

  checkboxClick() {

  },

  checkAllClick() {
    console.log('点击了全选', this.checkAllFlag)
    
  },


  changeAllclick() {

  },

  getDiscountDes() {

  },

  //获取购物车的数据，
  getCurrentCart() {

  },

  promotionCart() {

  },


  //去支付
  toPay(e) {
    console.log('跳转订单页')
    wx.navigateTo({
      url: '../../orders/orderCreat/orderCreat',
      success: function (res) {

      },
      fail: function (res) {

      },
      complete: function (res) {

      },
    })
  },

  gotopay(e) {

  },

  loadCart() {

  },
  deleteSku() {

  },

  loadPromotionDescription() {

  },
  /*促销码文案 */
  loadPromotionCodeText() {

  },
  checkShare() {

  },

  toCustomService() {

  },

  // 删除购物车订单里某个商品
  deleteCartProduct(e) {
    console.log('删除购物车商品:', e)

  },

  // 切换当个产品的选中窗台
  checkSingleCart(e) {
    console.log('点击了单个商品的切换状态')
    this.checkSingleCart = !this.checkSingleCart
  },

  bindPickerChange(e) {
    let [that, sku, val] = [this, e.currentTarget.dataset.productsku, e.detail.value]
    App.getOpenId()
      .then(res => App.HttpService.addCart({
        account: App.config.account,
        count: Number(val) + 1,
        openId: res.openId,
        skuDTO: {
          productSkuId: sku.productSkuId
        },
        cartType: 1
      }))
      .then(res => {
        let cartInfo = res.data.data
        if (!res.data.status) {
          let content = App.getErrMsg(res.data.statusCode)
          wx.showToast({
            title: content,
            icon: "none"
          })
          return;
        }
        that.setData({
          cartInfo: cartInfo
        })
        that.promotionCart()
        App.mutationCartInfo(cartInfo)
        wx.showToast({
          icon: 'success',
          title: '修改成功',
        })
      })

  }

})