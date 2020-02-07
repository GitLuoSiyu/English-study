var App = getApp();
Component({
  data: {
    isShow: false,
    parameter: ""
  },
  properties: {
    text: {
      type: String,
      value: "",
      observer: function(newVal, oldVal) {
        if (newVal) {
          this.openApp(newVal)
        }
      }
    },
  },
  attached() {},
  methods: {
    closeApp() {
      this.setData({
        isShow: false
      })
    },
    openApp(params) {
      let [isAndroid, parameter] = [wx.getSystemInfoSync().system.indexOf("Android") != -1, ""]
      console.log("toApp", {
        name: params,
        isAndroid,
        scene: App.globalData.globalScene
      })
      if ([1069, 1036].indexOf(App.globalData.globalScene) != -1) {
        if (params == "QQ音乐") {
          if (!isAndroid) {
            this.setData({
              isShow: true,
              parameter: "qqmusic://"
            })
          }
        } else {
          this.setData({
            isShow: true
          })
        }
      }
    },
    launchAppError(e) {
      wx.showModal({
        title: '返回App失败',
        showCancel: false,
        content: e.detail.errMsg,
      })
    },
    launchAppOK(e) {
      console.log("打开App成功", e)
    },
  },
})