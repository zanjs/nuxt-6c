<template lang='html'>
  <div class='skuModule'>
    <h2>Vue中SKU组合查询DEMO</h2>
    <color-item :colorType='this.skuType['color']'></color-item>
    <size-item :sizeType='this.skuType['size']'></size-item>
    <config-item :configType='this.skuType['config']'></config-item>
  </div>
</template>

<script>
import colorItem from './colorItem'
import sizeItem from './sizeItem'
import configItem from './configItem'

export default {
  name: 'skuModule',
  components: {
    colorItem,
    sizeItem,
    configItem
  },
  data () {
    return {
      skuList: [
        { color: '银色', size: '13.3英寸', config: 'Core i5/8G内存/256G闪存' },
        { color: '银色', size: '15.4英寸', config: '512闪存/Multi-Touch Bar' },
        { color: '深空灰色', size: '13.3英寸', config: '256闪存/Multi-Touch Bar' },
        { color: '银色', size: '13.3英寸', config: '512闪存/Multi-Touch Bar' },
        { color: '深空灰色', size: '15.4英寸', config: '512闪存/Multi-Touch Bar' }
      ],
      skuType: {},
      typeIsSelected: {},
      skuResultList: []
    }
  },
  created () {
    this.typeInit()
    this.addStateToType()
    this.$root.eventHub.$on('color-change', target => {
      this.colorChangeHandler(target)
    })
    this.$root.eventHub.$on('size-change', target => {
      this.sizeChangeHandler(target)
    })
    this.$root.eventHub.$on('config-change', target => {
      this.configChangeHandler(target)
    })
  },
  methods: {
    typeInit () {
      this.skuList.forEach(item => {
        Object.keys(item).forEach(sitem => {
          if (
            this.skuType[sitem] &&
            this.skuType[sitem].indexOf(item[sitem]) === -1
          ) {
            this.skuType[sitem].push(item[sitem])
          } else if (!this.skuType[sitem]) {
            this.skuType[sitem] = [item[sitem]]
          }
          if (!this.typeIsSelected[sitem]) {
            this.typeIsSelected[sitem] = 0
          }
        })
      })
    },
    addStateToType () {
      for (let key in this.skuType) {
        this.skuType[key].forEach((item, index) => {
          this.skuType[key][index] = { type: item, state: 0 }
        })
      }

      this.skuType = Object.assign({}, this.skuType)
    },
    colorChangeHandler (msg) {
      this.attrChangeHandler('color', msg)
    },
    sizeChangeHandler (msg) {
      this.attrChangeHandler('size', msg)
    },
    configChangeHandler (msg) {
      this.attrChangeHandler('config', msg)
    },
    attrChangeHandler (attr, attrInfo) {
      let attrState = attrInfo.state
      this.skuType[attr].forEach((item, index) => {
        if (item.type === attrInfo.type) {
          item.state = 1
        } else {
          item.state = 2
        }
      })
      let count = 0
      Object.keys(this.typeIsSelected).forEach(item => {
        count += this.typeIsSelected[item]
      })
      if (attrState === 2) {
        this.resetTypeSelectedState()
        this.selectRightData(this.skuList, attr, attrInfo)
      } else {
        if (count === 0) {
          this.resetTypeSelectedState()
          this.selectRightData(this.skuList, attr, attrInfo)
        } else {
          this.selectRightData(this.skuResultList, attr, attrInfo)
        }
      }
    },
    selectRightData (dataList, attr, attrInfo) {
      this.typeIsSelected[attr] = 1
      this.skuResultList = []

      dataList.forEach(item => {
        if (item[attr] === attrInfo['type']) {
          this.skuResultList.push(item)
        }
      })
      let tempSkuType = {}
      this.skuResultList.forEach(item => {
        Object.keys(item).forEach(sitem => {
          if (
            tempSkuType[sitem] &&
            tempSkuType[sitem].indexOf(item[sitem]) === -1
          ) {
            tempSkuType[sitem].push(item[sitem])
          } else if (!tempSkuType[sitem]) {
            tempSkuType[sitem] = [item[sitem]]
          }
        })
      })
      for (let key in tempSkuType) {
        if (this.typeIsSelected[key] === 0) {
          for (let i = 0; i < this.skuType[key].length; i++) {
            let currEle = this.skuType[key][i]
            if (tempSkuType[key].indexOf(currEle['type']) > -1) {
              currEle['state'] = 0
            } else {
              currEle['state'] = 2
            }
          }
        }
      }
    },
    resetTypeSelectedState () {
      for (let key in this.typeIsSelected) {
        this.typeIsSelected[key] = 0
      }
    }
  }
}
</script>

<style lang='css'>
.skuModule {
  width: 800px;
  height: 700px;
  margin: 0 auto;
  text-align: left;
}
</style>
