<script lang="ts">
import Vue from "vue";


export default Vue.extend({
  mpType: 'app',
  globalData: {
  },
  onLaunch(options: App.LaunchShowOption) {
    console.log("App Launch");
    this.checkUpdate();
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  },
  onPageNotFound(options: App.PageNotFoundOption) {
    console.warn(`page not found: ${options.path}/${options.query}`);
  },
  computed: {
  },
  watch: {
  },
  methods: {
    checkUpdate() {
      //检查版本更新
      const updateManager = uni.getUpdateManager();

      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
      });

      updateManager.onUpdateReady(function () {
        uni.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function (res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          }
        });
      });

      updateManager.onUpdateFailed(function () {
        // 新版本下载失败
      });
    }
  }
});
</script>

<style lang="less">
/*每个页面公共css */
page {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 0 100rpx;
  color: #323233;
  font-size: 16px;
  background: #f7f8fa;
  -webkit-font-smoothing: antialiased;
}
</style>
