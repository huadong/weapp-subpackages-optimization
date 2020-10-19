import { hello } from '../../utils/tools';

Component({
  data: {
    message: ''
  },
  methods: {
    onLoad: function () {
      this.message = hello();
    }
  }
});