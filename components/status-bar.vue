<template>
  <view :style="`padding-top: ${statusBarHeight}px;`"></view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 0
    }
  },
  created() {
    this.getStatusBarHeight();
  },
  methods: {
    getStatusBarHeight() {
      try {
        const res = uni.getSystemInfoSync();
        this.statusBarHeight = res.statusBarHeight || 0;
      } catch (e) {
        console.log(e.message);
      }
    }
  }
}
</script>

<style>
</style>