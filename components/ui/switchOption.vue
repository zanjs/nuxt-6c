<template>
  <div class="switch-option">
    <div class="switch-ellipse" :class="{ active: checked }" @click="clickSwitch">
      <span class="switch-circle" :class="{ active: checked }"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'switch-option'
  export default {
    name: COMPONENT_NAME,
    props: {
      name: {
        type: String
      },
      value: null
    },
    data () {
      return {
        checked: this.value
      }
    },
    watch: {
      checked (newValue) {
        this.$emit('update:value', newValue)
      }
    },
    methods: {
      clickSwitch () {
        this.checked = !this.checked
      }
    }
  }
</script>

<style lang="stylus" scoped>
 @import "~@/common/stylus/variable.styl"

.switch-option
  display flex
  justify-content space-between
  align-items stretch
  height: 100%
  .name
    display flex
    align-items: center
    flex: 0 1 auto
  .switch-ellipse
    align-self: center
    flex: 0 0 auto
    display: inline-block
    position: relative
    height: 22px
    width: 36px
    background-color: #fff
    border-radius: 1000px
    border: 1px solid #dadada
    transition: all 0.1s
    &.active
      background-color: #04BE02
      border-color: #04BE02
      transition: all 0.2s ease 0.2s
    .switch-circle
      position: absolute
      display: inline-block
      height: 20px
      width: 20px
      background: #FFF;
      border-radius: 100%
      border: 1px solid #dadada
      top: 0
      left: 0
      transition: all 0.3s
      box-shadow: -1px 1px 1px #dadada
      &.active
        left: 14px
        transition: all 0.3s ease 0.05s
        box-shadow: -1px 1px 1px #04BE02
</style>