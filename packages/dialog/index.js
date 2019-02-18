import Dialog from './src/index'

let $vm
let defaults = {}

function noop() {}

Dialog.install = function(Vue) {
  function dialog(options = {}) {
    if (!$vm) {
      const DialogCtr = Vue.extend(Dialog)
      $vm = new DialogCtr({
        el: document.createElement('div')
      })

      document.body.appendChild($vm.$el)

      Object.keys($vm.$options.props).forEach(key => {
        defaults[key] = $vm.$options.props[key].default
      })

      $vm.$on('handleCancel', options.handleCancel || noop)

      $vm.$on('handleEnsure', options.handleEnsure || noop)
    }

    Object.assign(
      $vm,
      defaults,
      options
    )

    $vm.show()

    return $vm
  }

  Vue.component(Dialog.name, Dialog)
  Vue.prototype.$dialog = dialog
}

export default Dialog
