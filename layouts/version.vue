<template>
  <div>
    <nuxt/>
    <div class="version-box">
      v: {{ version }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      version: '0.0.1'
    }
  }
}
</script>


<style>
html {
  font-family: PingFangSC-Light, "Microsoft Yahei", "微软雅黑", sans-serif,"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px; /*no*/
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.version-box{
    position: fixed;
    bottom: 10px;
    right: 10px;
    color: rgb(56, 57, 61);
}
</style>
