<template>
  <div>
      <div class="masking"></div>
      <div class="app fixed sku-box">
        <!-- 商品信息头 -->
        <div class=" position_re border_bottom">
          <div class="sku-img flex item-center justify-center">
            <img :src="product.Picture" alt="" srcset="">
          </div>
          <div class="ft_15 sku-title flex item-center">
            <div class="flex_2">
              <div class="strong">USD {{product.Price}}</div>
              <div class="ft_14 pd-top_5">White,46 (US Men's 12-12.5),D - Medium</div>
            </div>
          </div>
        </div>
        <!-- 商品信息头 end -->
        <!-- scroll-view  -->
        <div class="sku-scroll">
          <div>
            <!-- sku class -->
            <div v-if="skuClasses.length" class="pd_10">
              <div v-for="skuClasse in skuClasses" :key="skuClasse.TypeName" class="">
                <div>{{skuClasse.TypeName}}</div>
                <div class=" pd-y_10">
                  <span class=" inline-block pd-right_10 pd-bottom_10" v-for="item in skuClasse.SkuProperties" :key="item.PropertieName">
                    <button class="sku-btn">{{item.PropertieName}}</button>
                  </span>
                </div>
              </div>
              <!-- 数量 -->
              <div class="flex">
                <div class="flex_2">数量: (库存1)</div>
                <div class="flex">

                </div>
              </div>
              <!-- 数量 end -->
            </div>
            <!-- sku class end -->
            <!-- 2 -->
            <div class="border_top pd_10">
              <div class="flex pd-bottom_10">
                <div class="flex_2">网站优惠码</div>
                <div></div>
              </div>
              <!-- 是否购买 -->
              <div class="flex pd-bottom_10">
                <div class="flex_2"> ★优惠码不可用时是否购买 </div>
                <div></div>
              </div>
              <div class=" text-right co_m">
                <span>优惠码使用成功后，差价将在一个工作日内返还 </span>
              </div>
              <!-- 是否购买 end -->
            </div>
            <!-- 2 end -->
            <!-- 3 -->
            <div class=" border_top pd_10">
              <div class=" pd-bottom_10">
                <input class=" block w pd-y_10 pd-left_4" type="text" name="" id="" placeholder="如果有其他要求，请在此填写">
              </div>
              <div class="co_m text-right">若价格抓取不准确，下单后将返回差价 </div>
            </div>
            <!-- 3 end -->
          </div>
        </div>
        <!-- scroll-view end  -->        
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      i: '1上市'
    }
  },
  props: {
    product: {
      type: Object,
      default: {}
    },
    skuClasses: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.sku{
  &-box{
    bottom: 0;
    min-height: 200px;
    right: 0;
    left: 0;
    background-color: #fff;
  }
  &-img{
    position: absolute;
    width: 120px;
    height: 120px;
    top: -30px;
    left: 10px;
    background-color: #fff;
    text-align: center;
    img{
      max-width: 92%;
      max-height: 95%;
    }
  }
  &-title{
    padding-left: 150px;
    min-height: 100px;
  }
  &-btn{
    padding: 8px 10px;
    background-color: transparent;
    border:1px solid #979797;
    color: #333;
    &.on{
      background:#444;
      color: #333;
      border:1px solid #222;
    }
  }
}

</style>


