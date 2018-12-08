import Toast from './src/index.vue'

let $vm
let defaults = {}

Toast.install = function (Vue) {
  function toast(options = {}) {
    if (!$vm) {
      const ToastCtr = Vue.extend(Toast)

      $vm = new ToastCtr({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)

      Object.keys($vm.$options.props).forEach(key => {
        defaults[key] = $vm.$options.props[key].default
      })
    }

    Object.assign(
      $vm,
      defaults,
      typeof options === 'string'
        ? { msg: options }
        : options
    )

    $vm.show()

    return $vm
  }

  Vue.prototype.$toast = toast
}

export default Toast
