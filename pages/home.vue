<template>
  <div class="app ft_12">
      <div>
      </div>
      <div class="pd_10">
        <textarea class="pd_5" v-model="url" placeholder="黏贴海外购物网站的商品网站"></textarea>
      </div>
      <div class="pd_10">
        <button class="pd-y_10 ft_14" :disabled="isURL" >一键海淘</button>
      </div>
      <div class="pd_10 text-right">
        <nuxt-link to="/help/copy" class="go-a" >查看示例 ></nuxt-link>
      </div>
  </div>
</template>

<script>
import Is from '../tools/is'

export default {
  head: {
    title: '一键海淘 Home'
  },
  data () {
    return {
      url: ''
    }
  },
  computed: {
    isURL () {
      return !Is.CheckURL(this.url)
    }
  }
}
</script>

<style lang="scss" scoped>
textarea{
  display: block;
  width: 100%;
  height: 70px;
  border: 1px solid #999;
}
button{
  display: block;
  background: #FF6D7E;
  width: 100%;
  color: #FFF;
  border: none;
}
.go-a{
  color: rgb(79, 163, 231);
}
</style>


