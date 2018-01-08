export default {
  show (vm, msg) {
    vm.$toast.show(msg)
  },
  success (vm, msg) {
    vm.$toast.success(msg)
  },
  error (vm, msg) {
    vm.$toasted.error(msg)
  }
}
