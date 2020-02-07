var App = getApp()
Component({
  data: {
    isShowLayer: false
    // paramAtoB: "我是A向B传值"
  },
  properties: {
    customAttribute: String,
    customAttribute1: String,
    customAttribute2: String,
    gs: Object,
    card: {
      type: Object,
      value: {
        isShow: false,
        title: "",
        path: ""
      }
    }
  },
  attached() {
    const pages = getCurrentPages()
    if (pages.length > 1) {
      this.setData({
        customAttribute: "KFeature",
        customAttribute1: ""
      })
    }
    console.log("card", this.properties.card)
  },
  methods: {
    gsTrackEvent(p1, p2, p3) {
//      App._gsTracker.trackEvent(p1, p2, p3);
    },
    // 返回主页
    returnHome() {
      if (this.data.gs) {
        if (this.data.gs.gs_fh) {
       //   this.gsTrackEvent(this.data.gs.gs_fh.type, this.data.gs.gs_fh.name, this.data.gs.gs_fh.detail)
        }
      }
      this.triggerEvent('parentEvent', "返回主页");
      wx.switchTab({
        url: "/pages/tabBar/index/index",
      })

    },
    changeLayer() {
      let that = this;
      let isShow = that.data.isShowLayer;
      that.setData({
        isShowLayer: !isShow
      })
      if (!isShow) {
        if (this.data.gs) {
          if (this.data.gs.gs_kf) {
           // this.gsTrackEvent(this.data.gs.gs_kf.type, this.data.gs.gs_kf.name, this.data.gs.gs_kf.detail)
          }
        }
      }
    },
    clickWX() {
      if (this.data.gs) {
        if (this.data.gs.gs_wx) {
        //  this.gsTrackEvent(this.data.gs.gs_wx.type, this.data.gs.gs_wx.name, this.data.gs.gs_wx.detail)
        }
      }
    },
    phoneCall(e) {
      if (this.data.gs) {
        if (this.data.gs.gs_mobile) {
       //   this.gsTrackEvent(this.data.gs.gs_mobile.type, this.data.gs.gs_mobile.name, this.data.gs.gs_mobile.detail)
        }
      }
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
    contactCallback(e){
      console.log("contactCallback",e)
      let path = e.detail.path, query = e.detail.query, params = '';
      if (path) {
        for (var key in query) {
          params = key + '=' + query[key] + '&';
        }
        params = params.slice(0, params.length - 1);
        wx.navigateTo({
          url: path + '?' + params
        })
      }
    }
  },

})