<template>
  <div>
    <div class="flex detail-pic text-center item-center justify-center">
      <img :src="product.Picture" alt="" srcset="">
    </div>
    <div class="pd_10">
      <div class="ft_14">{{product.Title}}</div>
      <div class="flex">
        <div class="">RMB<span class="ft_15 strong">{{product.Price}}</span></div>
      </div>
    </div>    
  </div>
</template>

<script>
import Api from '../../api'

export default {
  layout: 'app',
  middleware: 'product',
  data () {
    return {
      id: '',
      loadingimage: ''
    }
  },
  async asyncData ({ params, query }) {
    const url = query.url
    const data1 = await Api.productDetail({url})
    console.log(data1)
    const product = data1.Data || {}
    return {product}
  }
}
</script>


<style lang="scss" scoped>
.detail{
  &-pic{
    height: 300px;
  }
}
</style>
   
