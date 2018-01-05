<template>
  <div class="app ft_12">
    <div>
      <countries @switchSel="switchId" :countries="countries" ></countries>
      <web-site :on="on"  :categories="categories"></web-site>
    </div>
  </div>
</template>

<script>
import Api from '../../api'
import Countries from '../../components/Countries'
import WebSite from '../../components/WebSite'
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters([
      'theCount'
    ])
  },
  async asyncData ({ params }) {
    let data2 = await Api.catelogCountries()
    let countries = data2.List || []

    let data3 = await Api.catelogCategories()
    let categories = data3.List || []
    console.log(data3)
    return { countries, categories }
  },
  mounted () {
    const he = window.document.cookie
    console.log(he)
  },
  created () {
  },
  methods: {
    switchId (id) {
      this.on = id
    }
  }
}
</script>

