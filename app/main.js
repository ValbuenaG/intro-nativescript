import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import router from './routes'
if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
Vue.prototype.$router = router
Vue.prototype.$goto = function (to, options) {
  this.$navigateTo(this.$router[to], options)
}

new Vue({
  render: h => h('frame', [h(router['Home'])])
}).$start()
