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
        <div class="sku-scroll" :class="{ mobile: isMobile }" ref="scroll">
          <div>
            <!-- sku class -->
            <div v-if="skuClasses.length" class="pd_10">
              <div v-for="skuClasse in skuClasses" :key="skuClasse.TypeName" class="">
                <div>{{skuClasse.TypeName}}</div>
                <div class=" pd-y_10">
                  <span class=" inline-block pd-right_10 pd-bottom_10" v-for="item in skuClasse.SkuProperties" :key="item.PropertieName">
                    <button class="cursor sku-btn">{{item.PropertieName}}</button>
                  </span>
                </div>
              </div>
              <!-- 数量 -->
              <div class="flex">
                <div class="flex_2 ft_14">数量: (库存1)</div>
                <div class="flex">
                  {{isUse}}
                </div>
              </div>
              <!-- 数量 end -->
            </div>
            <!-- sku class end -->
            <!-- 2 -->
            <div class="border_top pd_10">
              <div class="flex pd-bottom_10">
                <div class="flex_2 ft_14">网站优惠码</div>
                <div>
                  <input class=" pd-y_10 pd-left_4 bg-co_f8 rds_2" type="text" placeholder="如有优惠码请填写" />
                </div>
              </div>
              <!-- 是否购买 -->
              <div class="flex pd-bottom_10">
                <div class="flex_2 ft_14"> ★优惠码不可用时是否购买 </div>
                <div>
                  <switch-option class="item" name="isUse" :value="isUse"
                           @update:value="updateIsUse"></switch-option>
                </div>
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
                <input class="rds_2 block w pd-y_10 pd-left_4 bg-co_f8" type="text" name="" id="" placeholder="如果有其他要求，请在此填写">
              </div>
              <div class="co_m text-right">若价格抓取不准确，下单后将返回差价 </div>
            </div>
            <!-- 3 end -->
          </div>
        </div>
        <!-- scroll-view end  -->
        <div>
          <button class=" block w btn-mc ft_17 h_45 l-h_45" disabled>加入购物车</button>
        </div>   
      </div>
  </div>
</template>

<script>
import SwitchOption from '../ui/switchOption'
import Is from '../../tools/is'
import SkuTool from '../../tools/sku'

export default {
  components: {
    SwitchOption
  },
  data () {
    return {
      i: '1上市',
      isUse: true,
      isMobile: false
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
  },
  methods: {
    updateIsUse (val) {
      this.isUse = val
    }
  },
  mounted () {
    // const BScroll = require('better-scroll').default
    // this.scroll = new BScroll(this.$refs.scroll, {click: true})
    if (Is.mobile()) {
      this.isMobile = true
      const BScroll = require('better-scroll').default
      this.scroll = new BScroll(this.$refs.scroll, {click: true})
    }

    let skus = this.product.Skus || []
    if (!skus.length) {
      return
    }

    let newSKUResult = SkuTool.initSKU(skus)
    console.log(newSKUResult)
    let selecteSkus = SkuTool.getDefaultSkus(skus)
    console.log(selecteSkus)
  }
}
</script>

<style lang="scss" scoped>
.sku{
  &-scroll{
    max-height: 360px;
    overflow-y: scroll;
    &.pc{
      overflow-y: scroll;
    }
    &.mobile{
      overflow: hidden;
    }
    // &>div{
    //   overflow-y: auto;
    // }
  }
  &-box{
    bottom: 0;
    min-height: 200px;
    right: 0;
    left: 0;
    background-color: #fff;
    white-space:normal;
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

.btn-mc{
  color: #FFF;
  background-color: #FF4D6B;
  border: none;
  cursor: pointer;
  &[disabled="disabled"]{
    cursor: no-drop;
  }
}

</style>


