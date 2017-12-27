<template>
  <div class="app ft_14">
      <div class="content">
          <div class="pd_10 flow-chart flex">
              <div class="flex flow-child flex_1 item-center">
                  <div class="" >
                    <div>支付</div>
                    <div>订单费用</div>
                  </div>
              </div>
              <div class="flex flow-child flex_1 item-center">
                  <div class="" >
                    <div>商品转送至</div>
                    <div>转运仓库</div>
                  </div>
              </div>
              <div class="flex flow-child flex_1 item-center">
                  <div class="" >
                    <div>支付</div>
                    <div>国际运费</div>
                  </div>
              </div>
              <div class="flex flow-child flex_1 item-center">
                  <div class="" >
                    <div>包裹送达</div>
                    <div>送货地址</div>
                  </div>
              </div>
          </div>
          <div class="pd_10 description ft_12">
              <div class="lu-l pd-left_16">
                  <div class="dec-t">订单费用=商品价格+商家运费</div>
                  <div>其中，一般网站的服务费=（商品价格+商家运费）x 5% </div>
                  <div>部分网站因需要使用美卡美私代买 </div> 
                  <div>因此,服务费=（商品价格+商家运费）x10% </div>
                  <div>每单最低收取2元，每单是指一个商家为1个订单 </div>
              </div>
              <div class="lu-l pd-left_16">
                  <div class="dec-t">收货地址在支付国际运费时填写</div>
              </div>
              <div class="lu-l pd-left_16">
                  <div class="dec-t">
                     <span>如产生关税，会通知您缴纳，</span>
                     <nuxt-link to="/faq/taxation" class="a" >关税说明</nuxt-link>
                   </div>
              </div>
          </div>
          <!-- 输入区域 -->
          <div class="input-wrap">
              <!-- countrys -->
              <div class="flex">
                  <div class="">
                    <span>国家/地区</span>
                  </div>
                  <div class=" flex_2">

                  </div>
              </div>
              <!-- countrys  end-->
              <!-- units -->
              <div class="flex">
                  <div class="">
                      <div>
                          <input type="text" name="" >
                      </div>
                  </div>
              </div>
              <!-- units  end-->
          </div>
          <!-- 输入区域 end -->
      </div>
  </div>
</template>

<script>
export default {
  head: {
    title: '国际运费说明'
  }
}
</script>

<style lang="scss" scoped>
.flow{
    &-chart{
        position: relative;
    }
    &-child{
        height: 70px;
        margin-right: 20px;
        color: #FFF;
        text-align: center;
        position: relative;
        font-size: 12px;
        &:before{
          content: '';
          position: absolute;
          display: block;
          width: 0;
          height: 0;
          right: -20px;
        //   background-color: rgb(77, 119, 255);
          border-color: transparent transparent transparent #aaa;
          border-width: 6px 6px;
          border-style:solid;
        }
        &>div{
          flex: 3;
        }
        &:nth-child(odd) {
            background-color: #FF4D6B;
        }
        &:nth-child(even) {
            background-color: #555;
        }
        &:last-child{
            margin-right: 0;
            &:before{
                display: none;
            }
        }
    }
}
.lu-l{
  position: relative;
  margin-bottom: 6px;
  &::before{
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background: #FF4D6B;
      border-radius: 100%;
      left: 2px;
      top: 6px;
  }
}
.description{
  color: #666;
}

.dec-t{
  font-size: 15px;
  color: #333;
}
.a{
 color: #FF4D6B;
 text-decoration: underline;
}

.input-wrap{
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 10px;
}
</style>

