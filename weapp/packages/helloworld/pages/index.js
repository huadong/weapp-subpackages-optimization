import { hello } from '../../../utils/tools';

Page({
  data: {
    message: ''
  },
  onLoad: function () {
    this.message = hello();
  }
});