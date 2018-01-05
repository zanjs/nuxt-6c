import Request from './common/request'

export default {
  catelogCountries (data = {}, params) {
    data.CurrencyCode = 'CNY'
    const url = '/catelog/countries'
    return Request.post(url, data, params)
  },
  catelogCategories (data = {}, params) {
    const url = '/catelog/categories'
    return Request.post(url, data, params)
  },
  catelogShipcompanies (data = {}, params) {
    const url = '/catelog/shipcompanies'
    return Request.post(url, data, params)
  },
  catelogShipcompaniesCountryId (data = {CountryId: 0}, params) {
    const url = '/catelog/shipcompanies/countryId'
    return Request.post(url, data, params)
  },
  productDetail (data = {url: ''}, params) {
    const url = 'grab/detail'
    return Request.post(url, data, params)
  }
}
