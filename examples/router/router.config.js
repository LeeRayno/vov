import navConfig from '../nav.config.json'
import isMobile from '../isMobile.js'

function regesiterRoute(navConfig, isMobile) {
  const navs = navConfig['zh-CN']
  let routes = []
  navs.forEach(nav => {
    if (isMobile && !nav.isShowInMobile) {
      return
    }

    nav.groups.forEach(group => {
      group.list.forEach(li => {
        routes.push(addRoute(li))
      })
    })
  })

  if (isMobile) {
    routes.push({
      path: '/',
      component: () => import('../components/mobile-list.vue')
    })
  }

  return routes
}

function addRoute(router) {
  const component = isMobile
    ? () => import(`../mobile${router.path}.vue`)
    : () => import(`../docs${router.path}.md`)
  return {
    path: router.path,
    component
  }
}

const routes = regesiterRoute(navConfig, isMobile)

export default routes
