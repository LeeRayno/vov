// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './mobile.vue'
import router from './router'
import isMobile from './isMobile'
import suv from '@/index'
import 'packages/suv-css/src/index.scss'

Vue.use(suv)

router.beforeEach((from, to, next) => {
  if (!isMobile) {
    window.location.replace('/')
    return
  }
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
