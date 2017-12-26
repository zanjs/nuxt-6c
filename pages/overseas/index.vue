<template>
  <div class="app ft_12">
    <div>
      <countries @switchSel="switchId" :countries="countries" ></countries>
      <web-site :on="on"  :categories="categories"></web-site>
    </div>
  </div>
</template>

<script>
import Api from '../../config/api'
import Countries from '../../components/Countries'
import WebSite from '../../components/WebSite'
import toastTypes from '../../enumerate/toastTypes'

export default {
  head: {
    title: '支持的海外网站'
  },
  components: {
    Countries,
    WebSite
  },
  data () {
    return {
      on: -1
    }
  },
  async asyncData ({ params }) {
    const data = {
      'CurrencyCode': 'CNY'
    }
    let data2 = await Api.catelogCountries(data)
    let countries = data2.List || []

    let data3 = await Api.catelogCategories()
    let categories = data3.List || []
    console.log(data3)
    return { countries, categories }
  },
  mounted () {
    this.showLoginError()
    const he = window.document.cookie
    console.log(he)
  },
  methods: {
    switchId (id) {
      this.on = id
    }
  },
  notifications: {
    showLoginError: { // You can have any name you want instead of 'showLoginError'
      title: 'Login Failed 2s',
      message: 'Failed to authenticate',
      type: toastTypes.success // You also can use 'VueNotifications.types.error' instead of 'error'
    }
  }
}
</script>

