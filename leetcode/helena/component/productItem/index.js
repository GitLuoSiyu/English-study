var App = getApp();
import _gsTracker from '../../utils/gs.js';
const Component = _gsTracker.GsComponent;
Component({
  data: {},
  properties: {
    commodity: {
      type: Object,
      value: {}
    }
  },
  methods: {
    goDetail() {
      console.log("this.data.commodity",this.data.commodity)
        _gsTracker.trackClickThrough(this.data.commodity.name, "/pages/tabBar/product/product_details/product_details?id=" + this.data.commodity.productId);
      App.WxService.navigateTo('/pages/tabBar/product/product_details/product_details', {
        id: this.data.commodity.productId
      })
    },
  },
})