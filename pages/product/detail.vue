<template>
  <div>
    <div class="flex detail-pic text-center item-center justify-center">
      <img :src="product.Picture" alt="" srcset="">
    </div>
    <div class="pd_10">
      <div class=" pd-top_10 pd-bottom_10">
        <div class="ft_14">{{product.Title}}</div>
        <div class="flex">
          <div class="co_m flex_2">RMB <span class="ft_15 strong">{{product.Price}}</span></div>
          <div class="co_999 ft_12">
            <span>单件到手价</span>
            <span>?</span>
          </div>
        </div>
      </div>
      <!-- 官网 -->
      <div class="flex pd-y_10 border_top">
        <div class="flex_2 ft_15">
          <span>官网实际价格</span>
          <span> USD {{product.Price}}</span>
        </div>
        <div>
          <div class="flex website-info" v-if="product.Site">
            <div class="flex justify-center item-center pd-x_4">
              <img src="https://api.6city.com/sp/img/usa.png" alt="" srcset="">
            </div>
            <div class="ft_12 pd-right_6 co_fff">{{product.Site.Name}}</div>
          </div>
        </div>
      </div>
      <!-- 官网 end -->
      <!-- 选择规格 -->
      <div class="flex pd-y_10 border_top cursor">
        <div class="flex_2 ft_15">
          <span>选择 规格 数量</span>
        </div>
        <div class=" pd-right_4">
          <span class="more-right"></span>
        </div>
      </div>
      <!-- 选择规格 end -->
      <!-- 品牌展示 -->
      <product-show-ban></product-show-ban>
      <!-- 品牌展示 end -->
    </div>
    <!-- 分割线 -->
    <div class="h_5 bg-co_e6"></div>
    <!-- 分割线 end -->
    <product-footer></product-footer>
    <product-sku :product="product" :skuClasses="skuClasses"></product-sku>
  </div>
</template>

<script>
import Api from '../../api'
import ProductFooter from '../../components/product/footer'
import ProductSku from '../../components/product/sku'
import ProductShowBan from '../../components/product/showBan'

export default {
  layout: 'app',
  middleware: 'product',
  components: {
    ProductFooter,
    ProductSku,
    ProductShowBan
  },
  head () {
    return {
      title: this.product.Title || '商品详情'
    }
  },
  data () {
    return {
      id: '',
      product: {},
      loadingimage: ''
    }
  },
  async asyncData ({ params, query, req }) {
    const url = query.url
    const headers = req && req.headers
    const data1 = await Api.productDetail({ headers, data: {url} })
    console.log(data1)
    const product = data1.Data || {}
    const skuClasses = product.SkuClasses || []
    // console.log(skuClasses)
    return {product, skuClasses}
  }
}
</script>


<style lang="scss" scoped>
.detail{
  &-pic{
    height: 300px;
  }
}
.website-info{
  background: #444;
  height: 22px;
  line-height: 22px;
  border-radius:11px;
  img{
    height: 16px;
    width: 16px;
  }
}

.more-right{
  border-right:1px solid #FF4D6B;
  border-top:1px solid #FF4D6B;
  height: 8px;
  width: 8px;
  display: inline-block;
  transform: rotate(45deg);
}

</style>
   
