<template>
    <div class="hidden" style="width:100%;">
        <transition name="load-fade">
            <div v-show="companys.length !== 0" class="pd_10">
                <div class="ft_15 pd-top_5">估算结果如下:</div>
                <div class=" pd-top_10">
                    <div v-for="company in companys" :key="company.Id" class="pd_top_10 pd-bottom_10">
                        <div class="flex">
                            <div class="flex_2 decorate">转运公司: <span class="strong">{{ company.Name }}</span></div>
                            <div>
                                <nuxt-link :to="{name:'express-id', params:{id:company.Id}, query:{country:company.CountryId}}" class="more-a" >详情 ></nuxt-link>
                            </div>
                        </div>
                        <div class=" pd-top_5">
                            <table class="tb1"  cellspacing="0" cellpadding="0">
                                <tbody>
                                <tr>
                                    <th>转运方式</th>
                                    <th>国际运费（RMB）</th>
                                </tr>
                                <tr v-for="item in company.ShippingWaies" :key="item.Code">
                                    <td>{{item.Name}}</td>
                                    <td>{{item.Price}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  props: {
    companys: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.tb1{
    width: 100%;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    tbody{
        padding: 0;
        margin: 0;
    }
    th,td{
        font-weight: 400;
        padding: 5px;
        text-align: center;
        border: 1px solid #ccc;
        border-left: none;
        border-bottom: none;
        background-color: #f8f8f8; 
    }
}
.decorate{
    position: relative;
    padding-left: 10px;
    &::after{
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        background-color: #FF4D6B;
        border-radius: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
}

.more-a{
  color: #68ADFA;
}
</style>


