import Hello from '../packages/hello'
import Button from '../packages/button'

const components = [
  Hello,
  Button
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
  Button
}

export default {
  install
}
