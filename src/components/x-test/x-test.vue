<template>
  <view>test component: {{message}}</view>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { hello } from '../../utils/tools';

@Component
export default class Xtest extends Vue {
  message = '';

  created() {
    this.message = hello();
  }
}
</script>