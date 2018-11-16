import Hello from './src/index'

Hello.install = function(Vue) {
  Vue.component(Hello.name, Hello)
}

export default Hello
