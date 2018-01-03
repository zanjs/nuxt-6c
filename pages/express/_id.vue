<template>
  <div class="app ft_12 fixed bottom top" ref="scroll">
    <div class="content">
        <div class="flex pd-bottom_10 description">
          <div>
            <img :src="express.Logo" alt="" srcset="">          
          </div>
          <div class=" pd-left_10">
            <div>{{ express.Name }}</div>
            <div>
              <strong>RMB {{ ShippingWayDefault.Price }}</strong>
              <span>/首{{ ShippingWayDefault.Weight }}克</span>
            </div>
          </div>
        </div>
        <div class=" pd_10">
          <div v-html="express.Description">
          </div>
          <div v-html="express.HtmlFiveDescription">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Api from '../../config/api'
import ExpressFilter from '../filter/express'

export default {
  name: 'express-id',
  data () {
    return {
      id: null
    }
  },
  validate ({ params }) {
    // Must be a number
    if (/^\d+$/.test(params.id)) {
      return true
    }
    return false
  },
  async asyncData (content) {
    const params = content.params
    const id = parseInt(params.id)
    const q = content.route.query
    const CountryId = parseInt(q.country)
    // const CountryId = parseInt(params.country)
    let data = await Api.catelogShipcompanies({CountryId})
    let list = data.List || []

    let express = ExpressFilter.detail(list, id)
    return { ...express }
  }
}
</script>

<style lang="scss" scoped>
.description{
  border-bottom: 1px solid #ddd;
}
</style>

