<template>
  <view>
    UNIAPP 分包优化测试
    <navigator url="/packages/helloworld/pages/index">分包页面</navigator>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';

@Component
export default class Index extends Vue{
  onLoad() {
  }

  onShareAppMessage() {
  }
}
</script>

<style lang="less">

</style>
