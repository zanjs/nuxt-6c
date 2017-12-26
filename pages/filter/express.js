import _ from 'lodash'

export default {
  detail (list, id) {
    list = list || []
    let express = {}
    if (list.length) {
      express = _.find(list, {'Id': id})
    }
    let ShortDescription = express.ShortDescription || ''
    let shortDescription = ShortDescription.split(';')
    let ShippingWayDefault = express.ShippingWayDefault || {}
    express.ShippingWayDefault = null
    let obj = {
      express,
      shortDescription,
      ShippingWayDefault
    }
    console.log(obj)
    return obj
  }
}
