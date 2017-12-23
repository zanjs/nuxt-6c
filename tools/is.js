export default {
  /**
   * 合法http（s）
   * @param {any} URL
   * @returns
   */
  CheckURL (URL) {
    var str = URL
    var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/
    var objExp = new RegExp(Expression)
    if (objExp.test(str) === true) {
      return true
    } else {
      return false
    }
  }
}
