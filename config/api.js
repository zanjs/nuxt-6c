import fetch from './fetch'

export default {
  catelogCountries (data = {}, params) {
    return fetch({
      url: `/catelog/countries`,
      method: 'POST',
      data,
      params
    })
  },
  catelogCategories (data = {}, params) {
    return fetch({
      url: `/catelog/categories`,
      method: 'POST',
      data,
      params
    })
  }
}
