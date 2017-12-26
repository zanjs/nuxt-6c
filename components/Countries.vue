<template>
  <div class="countries bg-co_555 pd-left_10 z_9">
    <ul class="countries-u none clearfix content">
        <li class="" :class="{ on: onInex == -1  }" @click="switchCoun(-1)" >
          <span>全部国家</span>
        </li>
        <li class="" :class="{on: onInex == index }" v-for="(countrie, index) in countries" :key="countrie.Name" @click="switchCoun(index)">
          <span>{{ countrie.Name }}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'countries',
  data () {
    return {
      onInex: -1
    }
  },
  props: {
    countries: {
      type: Array,
      default: []
    }
  },
  mounted () {
  },
  methods: {
    switchCoun (index) {
      this.onInex = index
      if (index === -1) {
        this.$emit('switchSel', index)
        return
      }
      const countrie = this.countries[index]
      this.$emit('switchSel', countrie.Id)
    }
  }
}
</script>

<style lang="scss" scoped>
.countries{
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  overflow-x: scroll;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  ul{
    white-space: nowrap;
  }
  li{
    display: inline-block;
    color: #d6d6d6;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 10px;
    cursor: pointer;
    &:last-child{
      margin-right: 10px;
    }
    &.on{
      color: #fff;
      span{
        &::after{
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background-color: #ff4d6b;
        }
      }
    }
    span{
      display: block;
      height: 40px;
      position: relative;
    }
  }
}
</style>

