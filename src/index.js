import Hello from '../packages/hello'
import Button from '../packages/button'
import Icon from '../packages/icon'
import Toast from '../packages/toast'

const components = [
  Hello,
  Button,
  Icon,
  Toast
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Hello,
  Button,
  Icon,
  Toast
}

export default {
  install
}
