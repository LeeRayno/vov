import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.config'

Vue.use(Router)

export default new Router({
  routes,
  linkActiveClass: 'active'
})
