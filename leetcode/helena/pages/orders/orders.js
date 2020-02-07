// pages/orders/orders.js

let time = 0;
let touchDot = 0; //触摸时的原点
let interval = "";
let btnClick = true;

const navList = [{
    indexId: 0,
    state: 0,
    className: 'active',
    name: '全部订单',
    inNum: 0,
    action: [],
    page: 0,
    pagesize: 5
  },
  {
    indexId: 1,
    state: 1,
    className: '',
    name: '待付款',
    inNum: 0,
    action: ['NEW', 'WaitPay'],
    page: 0,
    pagesize: 5
  },
  {
    indexId: 2,
    state: 2,
    className: '',
    name: '待收货',
    inNum: 0,
    action: ['Shipping'],
    page: 0,
    pagesize: 5
  },
  {
    indexId: 3,
    state: 3,
    className: '',
    name: '待收获',
    inNum: 0,
    action: ['UnComment'],
    page: 0,
    pagesize: 5
  },
  {
    indexId: 4,
    state: 4,
    className: '',
    name: '已完成',
    inNum: 0,
    action: ['Cancel', 'Return'],
    page: 0,
    pagesize: 5
  },
  {
    indexId: 5,
    state: 5,
    className: '',
    name: '已取消',
    inNum: 0,
    action: ['Cancel', 'Return'],
    page: 0,
    pagesize: 5
  }
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: [],
    tabArr: {
      currentNav: 0,
      currentContent: 0
    },
    currentNavId: 0,
    orders: [],
    flag: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // let that = this;
    // if (navList.length == 0 ) {
    //   wx.redirectTo({
    //     url: '../tabBar/user/bindphone/bindphone',
    //   })
    // } else {
    //   that.tabCurrentIndex = options.state;
    //   that.loadData();

    // }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  loadData(source) {
    console.log('加载数据')
    let index = this.currentNavId;
    let navItem = this.navList[index];
    let state = navItem.state;
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

  onPullDownRefresh: function() {
    wx.showNavigationBarLoading()
    let that = this;
    let nav = that.data.nav;
    console.log("nnnn", nav);
    let currentNav = nav.find(i => i.className == 'active');
    currentNav.page = 0;
    let params = {
      name: 'onPullDownRefresh',
      openId: user.openId,
      page: currentNav.page,
      pagesize: currentNav.pagesize,
      orderStatus: currentNav.action
    }
    that.loadOrders(params);
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },

  onReachBottom: function() {
    let that = this;
    let nav = that.data.nav;
    let currentNav = nav.find(i => i.className == 'active');
    let currentIndex = nav.indexOf(currentNav);
    let params = {
      name: 'onReachBottom',
      openId: user.openId,
      page: currentNav.page,
      pagesize: currentNav.pagesize,
      orderStatus: currentNav.action
    }
    that.loadOrders(params);
  },

  //事件冒泡
  eventOut() {},
  //待发货-申请退款
  backMoney(e) {

  },
  bindPickerChange(e) {
    let value = e.detail.value
    this.setData({
      reason: this.data.array[value]
    })
  },

  //点击切换
  navTab: function(e) {

  },

  loadOrders(params) {

  },

  // 触摸开始事件
  touchStart(e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点
    // 使用js计时器记录时间    
    interval = setInterval(function() {
      time++;
    }, 100);
  },

  // 触摸结束事件
  touchEnd(e) {
    var touchMove = e.changedTouches[0].pageX;
    // 向左滑动   
    if (touchMove - touchDot <= -150 && time < 10) {
      console.log('right')
      this.updateNavBymove('right')
    }
    // 向右滑动   
    if (touchMove - touchDot >= 150 && time < 10) {
      console.log('left')
      this.updateNavBymove('left')

    }
    clearInterval(interval); // 清除setInterval
    time = 0;
  },

  //滑动触发页面切换方法
  updateNavBymove(params) {


  },

  goDetail(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../order/orderDt/orderDt?id=' + id,
    })
  },

  goPay(e) {


  },
  toggle(e) {

  },
  evaluate(e) {

  },
  submit(e) {

  },

  // 取消退货
  cancelReturn(e) {

  },
  shippingReturn() {
    wx.showToast({
      title: '请收货后再申请退货',
      icon: 'none',
      duration: 2000
    });
  },

  //取消订单
  cancelOfOrder(e) {

  },
  //刷新页面
  loadPageList() {

  },

  //点击切换
  navTab: function(e) {
    let that = this;
    let dataId = e.currentTarget.id;
    console.log(dataId);
    let nav = that.data.nav;
    let selectedNav = nav.find((ele) => {
      return ele.indexId == dataId
    });
    console.log(selectedNav);
    selectedNav.page = 0;
    var params = {
      name: 'navTab',
      openId: user.openId,
      page: selectedNav.page,
      pagesize: selectedNav.pagesize,
      orderStatus: selectedNav.action
    }
    console.log(that.data.orders)
    that.loadOrders(params);
    let list = this.data.nav.map(item => {
      if (item.indexId == dataId) {
        item.className = "active";
        item.page = 0;
        //item.inNum=orders.length;
      } else {
        item.className = "";
        item.page = 0;
      }
      console.log(item)
      return item;

    })
    this.setData({
      nav: list,
      //orders: orders,
      currentNavId: dataId
    })

  },





})