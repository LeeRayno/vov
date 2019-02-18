import Modal from './modal.vue'
import Vue from 'vue'

let $vm
let defaults = {}
let preCtx

export default {
  openModal(ctx, config = {}) {
    preCtx = ctx
    if (!$vm) {
      $vm = new (Vue.extend(Modal))({
        el: document.createElement('div')
      })

      document.body.appendChild($vm.$el)

      Object.keys($vm.$options.props).forEach(key => {
        defaults[key] = $vm.$options.props[key].default
      })
    }

    $vm && $vm.$on('modalClick', function() {
      ctx.closeOnClickModal && ctx.hide()
    })

    Object.assign(
      $vm,
      defaults,
      config
    )

    $vm.show()

    return $vm
  },

  closeModal() {
    if (preCtx && preCtx.curentValue) return
    $vm && $vm.hide()
  }
}
