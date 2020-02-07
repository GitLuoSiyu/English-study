// pages/orders/orderDeatil/orderDetail.js
import toa from './../../../config/dov.js'

Page({
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // axios get请求
    // toa.get('https://wanandroid.com/wxarticle/chapters/json').then((res) => {
    //   console.log(res)
    // })

    // let page = 405;
    // let id = 1;

    // 带参数的请求
    // toa.get('https://wanandroid.com/wxarticle/list/' + page + '/' + id + '/json?k=Java', {
    //     data: {
    //       page: 405,
    //       id: 1
    //     }
    //   }).then(response => {
    //     console.log(response)
    //   }),

      // 多次请求合并
    //   toa.defaults.baseURL = 'https://www.wanandroid.com'

    // function getUserInfo() {
    //   return toa.get('/article/listproject/0/json')
    // }

    // function getUserPerssion() {
    //   return toa.get('/article/list/0/json')
    // }
    // toa.all([getUserInfo(), getUserPerssion()]).then(response => {
    //   console.log(response)
    // }).catch(error => {
    //   console.log(error)
    // })


    // 原始请求法
    // toa({
    //     method: 'post',
    //     url: 'http://www.baidu.com/getUserInfo',
    //     data: {
    //       username: 'king',
    //       password: 'kingpassword'
    //     }
    //   }).then(response => {
    //     console.log(response)
    //   })

    // 或
    // toa.defaults.baseURL = 'http://www.baidu.com'
    // toa({
    //   method: 'post',
    //   url: '/getUserInfo',
    //   data: {
    //     username: 'king',
    //     password: 'kingpassword'
    //   }
    // }).then(response => {
    //   console.log(response)
    // })

    // toa('http://www.baidu.com/getUserInfo', {
    //   method: 'post',
    //   data: {
    //     username: 'king',
    //     password: 'kingpassword'
    //   }
    // }).then(response => {
    //   console.log(response)
    // })

    // 可能需要多个实例来操作时，可以通过 create 方法来实现。
    // let server1 = toa.create({
    //   baseURL: 'https://api.baidu.com'
    // })
    // let server2 = toa.create({
    //   baseURL: 'https://img.baidu.com'
    // })
    // server1.get('/getUserInfo').then(response => {
    //   console.log(response)
    // })

    // 请求拦截,和 axios 一样的请求拦截和响应拦截，并且可以配置多个
    // 1.第一个 request 的拦截器
    // toa.interceptors.request.use(function(config) {
    //   config.data.header['Authorization'] = wx.getStorageSync('token')
    //   // ...
    //   return config
    // })
    // // 2.第二个 request 的拦截器，
    // toa.interceptors.request.use(function(config) {
    //   config.data.token = wx.getStorageSync('token')
    //   // ...
    //   return config
    // })

    // res拦截器
    // 1.第一个 response 的拦截器
    // toa.interceptors.response.use(function(response) {
    //   if (response.status === 200) {
        
    //   }
    //   return response
    // })
    // // 2.第二个 response 的拦截器，
    // toa.interceptors.response.use(function(response) {
    //   if (response.status === 300) {
        
    //   }
    //   return response
    // })

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

  }
})