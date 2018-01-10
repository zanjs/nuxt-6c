
import OBJ from './obj'
import Arr from './array'

// let SKUResult = {}

export default {
  initSKU (initData) {
    let data = OBJ.arrToObj(initData)
    let skuKeys = OBJ.getObjKeys(data)
    console.log(data)
    console.log(skuKeys)
    const vm = this
    let newSKUResult = {}
    let i
    let j
    for (i = 0; i < skuKeys.length; i += 1) {
      const skuKey = skuKeys[i] // 一条SKU信息key
      const sku = data[skuKey] // 一条SKU信息value
      const skuKeyAttrs = skuKey.split(';') // SKU信息key属性值数组
      skuKeyAttrs.sort((value1, value2) => {
        return parseInt(value1, 10) - parseInt(value2, 10)
      })

      // 对每个SKU信息key属性值进行拆分组合
      const combArr = Arr.combInArray(skuKeyAttrs)
      for (j = 0; j < combArr.length; j += 1) {
        newSKUResult = vm.add2SKUResult(newSKUResult, combArr[j], sku)
      }

      // 结果集接放入SKUResult
      newSKUResult[skuKeyAttrs.join(';')] = {
        count: sku.Quantity,
        prices: [sku.Price]
      }
    }
    return newSKUResult
  },
  /**
   * 把组合的key放入结果集SKUResult
   * @param {any} newSKUResult
   * @param {any} combArrItem
   * @param {any} sku
   * @returns
   */
  add2SKUResult (newSKUResult, combArrItem, sku) {
    const SKUResult = JSON.parse(JSON.stringify(newSKUResult))
    const key = combArrItem.join(';')
    if (SKUResult[key]) { // SKU信息key属性·
      SKUResult[key].count += sku.Quantity
      SKUResult[key].prices.push(sku.Price)
      SKUResult[key].SkuId = sku.SkuId
    } else {
      SKUResult[key] = {
        count: sku.Quantity,
        prices: [sku.Price],
        SkuId: sku.SkuId
      }
    }
    return SKUResult
  },
  /**
 * 获取默认选中的 sku
 * @param {any} skus
 * @returns
 */
  getDefaultSkus (skus) {
    const len = skus.length
    let i
    let PropIds
    for (i = 0; i > len; i++) {
      const item = skus[i]
      if (item.Selected) {
        PropIds = item.PropIds
        break
      }
    }
    PropIds = PropIds || skus[0].PropIds
    // PropIds = PropIds.sort()
    return PropIds
  }
}
