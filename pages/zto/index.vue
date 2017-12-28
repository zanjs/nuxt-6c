<template>
  <div>
    <div>父组件改变值 cityProp：<input v-model="cityma" type="text" > cityProp：=  {{cityma}}</div>
    <div>
      <button @click="update">改变</button> <br/><br/>
      <button @click="hideo">隐藏</button>
    </div>
    <div v-show="isShow" >
      <div>子组件</div>
      <city :cityProp="cityma" ></city>
    </div>
  </div>
</template>

<script>
import City from '~/components/City.vue'

export default {
  data () {
    return {
      cityma: '1',
      isShow: false
    }
  },
  components: {
    City
  },
  methods: {
    update () {
      var time = -new Date()
      this.isShow = true
      this.cityma = '上海' + time
    },
    hideo () {
      this.isShow = false
    }
  }
}
</script>
