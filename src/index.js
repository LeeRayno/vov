import Hello from '../packages/hello'
import Button from '../packages/button'
import Icon from '../packages/icon'

const components = [
  Hello,
  Button,
  Icon
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Hello,
  Button,
  Icon
}

export default {
  install
}
