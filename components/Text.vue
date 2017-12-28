<template>
  <div>
      <input v-model="txt"  type="text" name="" id="">
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      default: 'ss'
    }
  },
  data () {
    return {
      txt: ''
    }
  },
  watch: {
    city: function (val) {
      console.log('props val')
      console.log(val)
      this.txt = val
    },
    txt: function (val) {
      console.log('data watch  val')
      console.log(val)
    }
  },
  methods: {
  }
}
</script>
