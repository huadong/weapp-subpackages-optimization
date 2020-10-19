<template>
  <view>
    <x-test />
    <text>{{message}}</text>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import { hello } from '@/utils/tools';

@Component
export default class Index extends Vue{
  message = 'hello word';

  onLoad() {
    this.message = hello();
  }

  onShareAppMessage() {
  }
}
</script>

<style lang="less">

</style>
