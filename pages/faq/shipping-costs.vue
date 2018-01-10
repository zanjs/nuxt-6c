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
              <div class="flex pd-bottom_19">
                  <div class="tb">
                    <span>国家/地区</span>
                  </div>
                  <div class="flex_3 text-right">
                      <span @click="switchCou(cIndex)" class="check-ui" :class="{on: cIndex === countrieIndex}"  v-for="(countrie, cIndex) in countries" :key="countrie.Name">
                          {{countrie.Name}}
                      </span>
                  </div>
              </div>
              <!-- countrys  end-->
              <!-- units -->
              <div class="flex pd-bottom_10">
                  <div class="tb">
                      <div>
                          <input class="ft_12" v-model.number="quantity" type="number" name="" placeholder="请输入重量" >
                      </div>
                  </div>
                  <div class="flex_3 text-right">
                      <span @click="switchUn(uIndex)" class="check-ui" :class="{on: uIndex === unitIndex}" v-for="(unit, uIndex) in units" :key="unit">
                          {{unit}}
                      </span>
                  </div>
              </div>
              <!-- units  end-->
              <div>
                  <button @click="submit" class="btn1" :disabled="!quantity">估算转运费</button>
              </div>
          </div>
          <!-- 输入区域 end -->
          <!-- 显示结果 -->
          <item-load :load="load"></item-load>
          <!-- companys -->
          <companys-faq :companys="companys"></companys-faq>
          <!-- companys end -->
          <!-- 显示结果 end -->
      </div>
  </div>
</template>
 
<script>
import Api from '../../api'
import ItemLoad from '../../components/ItemLoad'
import CompanysFaq from '../../components/CompanysFaq'
import Toas from '../../tools/toast'

export default {
  head: {
    title: '国际运费说明'
  },
  components: {
    ItemLoad,
    CompanysFaq
  },
  data () {
    return {
      units: ['克', '榜'],
      countries: [],
      unitIndex: 0,
      countrieIndex: 0,
      load: false,
      companys: [],
      quantity: ''
    }
  },
  async asyncData ({ params, req }) {
    const headers = req && req.headers
    let data2 = await Api.catelogCountries({headers})
    let countries = data2.List || []
    return { countries }
  },
  methods: {
    switchCou (index) {
      this.countrieIndex = index
    },
    switchUn (index) {
      this.unitIndex = index
    },
    async submit () {
      const cIndex = this.countrieIndex
      const countrie = this.countries[cIndex]
      const CountryId = countrie.Id
      console.log(countrie)
      console.log(CountryId)
      this.load = true
      let data2 = await Api.catelogShipcompaniesCountryId({data: { CountryId }})
      let list = data2.List || []
      if (!data2.Success) {
        Toas.error(this, data2.Message || '服务错误')
      }
      this.companys = list
      console.log(data2)
      console.log(list)
      const vm = this
      vm.load = false
    //   try {
    //     this.$toast.show('Logging in...')
    //     this.$toast.success('Successfully authenticated')
    //   } catch (e) {
    //     this.$toast.error('Error while authenticating')
    //   }
    //   setTimeout(function () {
    //     vm.load = false
    //   }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.flow {
  &-chart {
    position: relative;
  }
  &-child {
    height: 70px;
    margin-right: 20px;
    color: #fff;
    text-align: center;
    position: relative;
    font-size: 12px;
    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      right: -20px;
      //   background-color: rgb(77, 119, 255);
      border-color: transparent transparent transparent #aaa;
      border-width: 6px 6px;
      border-style: solid;
    }
    & > div {
      flex: 3;
    }
    &:nth-child(odd) {
      background-color: #ff4d6b;
    }
    &:nth-child(even) {
      background-color: #555;
    }
    &:last-child {
      margin-right: 0;
      &:before {
        display: none;
      }
    }
  }
}
.lu-l {
  position: relative;
  margin-bottom: 6px;
  &::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: #ff4d6b;
    border-radius: 100%;
    left: 2px;
    top: 6px;
  }
}
.description {
  color: #666;
}

.dec-t {
  font-size: 15px;
  color: #333;
}
.a {
  color: #ff4d6b;
  text-decoration: underline;
}

.input-wrap {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  line-height: 30px;
}

.tb {
  width: 100px;
  input {
    width: 88px;
    text-indent: 6px;
    height: 30px;
    line-height: 30px;
    color: #333;
    background-color: #f8f8f8;
  }
}

.check-ui {
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: left;
  position: relative;
  padding-left: 26px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 18px;
    height: 18px;
    background: url("https://api.6city.com/sp/img/icon_chk_1.png") no-repeat
      center center;
    background-size: 18px 18px;
    transform: translateY(-50%);
  }
  &.on {
    &::before {
      background-image: url("https://api.6city.com/sp/img/icon_chk_2.png");
    }
  }
}
.btn1 {
  display: block;
  width: 100%;
  padding: 8px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #ff4d6b;
}
</style>

