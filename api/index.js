import Request from './common/request'

export default {
  catelogCountries (options = {}) {
    options.data ? options.data.CurrencyCode = 'CNY' : options.data = {CurrencyCode: 'CNY'}
    const url = '/catelog/countries'
    options.url = url
    return Request.post(options)
  },
  catelogCategories (options = {}) {
    const url = '/catelog/categories'
    options.url = url
    return Request.post(options)
  },
  catelogShipcompanies (options = {}) {
    const url = '/catelog/shipcompanies'
    options.url = url
    return Request.post(options)
  },
  catelogShipcompaniesCountryId (options = {}) {
    const url = '/catelog/shipcompanies/countryId'
    options.url = url
    return Request.post({options})
  },
  productDetail (options = {}) {
    const url = '/grab/detail'
    options.url = url
    return Request.post(options)
  }
}
