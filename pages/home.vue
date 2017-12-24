<template>
  <div class="app ft_12">
      <div>
      </div>
      <div class="pd_10">
        <textarea class="pd_5" v-model="url" placeholder="黏贴海外购物网站的商品网站"></textarea>
      </div>
      <div class="pd_10">
        <button class="pd-y_10 ft_14 bt1"  :disabled="isURL" >一键海淘</button>
      </div>
      <div class="pd_10 text-right">
        <nuxt-link to="/help/copy" class="go-a" >查看示例 ></nuxt-link>
      </div>
      <div class="pd_10">
        <div class="text-center position_re tx_line">
          <span class="co_999 ft_14 z_9 position_re pd-x_10">支持美/日/德/法/英等多国官网</span>
        </div>
      </div>
      <div class="pd_10">
        <button @click="listMore" class="pd-y_10 ft_14 bt2" >查看全部</button>
      </div>
  </div>
</template>

<script>
import Is from '../tools/is'

export default {
  head: {
    title: '一键海淘'
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
  },
  methods: {
    listMore () {
      this.$router.push({path: '/overseas'})
    }
  }
}
</script>

<style lang="scss" scoped>
.app{
  background-color: #efefef;
}
textarea{
  display: block;
  width: 100%;
  height: 70px;
  border: 1px solid #999;
}
button{
  display: block;
  width: 100%;
  border: none;
  &.bt1{
    background: #FF6D7E;
    color: #FFF;
  }
  &.bt2{
    border: 1px solid #999;
    color: #999;
  }
}
.go-a{
  color: rgb(79, 163, 231);
}
.tx_line{
  &::after{
    position: absolute;
    content: '';
    height: 1px;
    background-color: #999;
    left: 0;
    right: 0;
    top: 50%;
    z-index: 0;
  }
  span{
    background-color: #efefef;
  }
}
</style>


