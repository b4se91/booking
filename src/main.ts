import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Arr from '@/service/arrayPrototype.service'

/**
 * Include any dependencies modules.
 */
import Moment from 'moment'
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
import Button from '@/components/Button.vue'
import Pages from '@/components/Pages.vue'
import DatePicker from '@/components/DatePicker.vue'
const components: any = {
  Input,
  Select,
  Button,
  Pages,
  DatePicker
}

/**
 * Installation global components.
 */
for (const key in components) Vue.component(key, components[key])

// Instanced Config
Vue.prototype.$m = Moment
Vue.config.productionTip = false
Vue.config.devtools = (process.env.NODE_ENV !== 'production')

// Vue Instance
new Vue({
  router,
  store,
  beforeCreate () {
    Arr()
  },
  render: h => h(App)
}).$mount('#app')
console.info('🚀 Application Running...')