<template>
  <div class="app ft_12">
    海外 {{title}}
  </div>
</template>

<script>
// import ax from 'axios'
import Api from '../../config/api'

export default {
  async asyncData ({ params }) {
    const data = {
      'CurrencyCode': 'CNY'
    }
    let data2 = await Api.catelogCountries(data)

    console.log(data2)
    return { title: 'ss' }

    // return ax.post(
    //   'https://api.6city.com/catelog/countries', data
    // ).then((res) => { console.log(res); return { title: 'res' } })
  },
  created () {
    this.showLoginError()
  },
  notifications: {
    showLoginError: { // You can have any name you want instead of 'showLoginError'
      title: 'Login Failed 2s',
      message: 'Failed to authenticate',
      type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
    }
  }
}
</script>

