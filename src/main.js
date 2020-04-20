import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(MuseUI)
Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
