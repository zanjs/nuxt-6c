<template>
  <div class="app ft_12">
    <div>
      海外 {{title}}      
    </div>
    <div>
      <countries :countries="countries" ></countries>
      <div v-for="categorie in categories" :key="categorie.Name">
         <span>{{ categorie.Name }}</span>
         <div v-for="webSite in categorie.WebSites" :key="webSite.Id">
           <span>{{ webSite.Name }}</span>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ax from 'axios'
import Api from '../../config/api'
import Countries from '../../components/Countries'

export default {
  components: {
    Countries
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
    return { title: 'ss', countries, categories }

    // return ax.post(
    //   'https://api.6city.com/catelog/countries', data
    // ).then((res) => { console.log(res); return { title: 'res' } })
  },
  created () {
    // this.showLoginError()
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

