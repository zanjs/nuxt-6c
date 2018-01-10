export default {
  /**
   * 获得对象的key
   * @param {any} obj
   * @returns
   */
  getObjKeys (obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object')
    let keys = []
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) { keys[keys.length] = key }
    }
    return keys
  },
  arrToObj (arr) {
    const skus = arr
    const leng = skus.length
    const newObj = {}
    let i
    for (i = 0; i < leng; i += 1) {
      const item = skus[i]
      const key = item.PropIds.join(';')
      newObj[key] = {}
      newObj[key].SkuId = item.SkuId
      newObj[key].Price = item.Price
      newObj[key].ListPrice = item.ListPrice
      newObj[key].Quantity = item.Quantity
      newObj[key].Selected = item.Selected
    }
    return newObj
  }
}
