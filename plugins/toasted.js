import Vue from 'vue'
import Toasted from 'vue-toasted'

// Vue.use(Toasted)

const Options = {
  position: 'top-center',
  duration: 3000
}
// you can also pass options, check options reference below
Vue.use(Toasted, Options)
