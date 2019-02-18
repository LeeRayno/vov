import manager from './manager'

const context = {
  zIndex: 2000
}

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },

    zIndex: Number,

    showModal: {
      type: Boolean,
      default: false
    },

    modalStyle: {
      type: Object,
      default() {
        return {}
      }
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    }

  },

  data() {
    return {
      curentValue: false
    }
  },

  watch: {

    value(val) {
      this.curentValue = val
    },

    curentValue(val) {
      this.update(val)
      this.$emit('input', val)
    },

    showModal(val) {
      this.update(val)
    }
  },

  methods: {
    update(val) {
      context.zIndex = this.zIndex || context.zIndex

      if (val && this.showModal) {
        manager.openModal(this, {
          zIndex: context.zIndex,
          modalStyle: this.modalStyle || {}
        })
      } else {
        manager.closeModal()
      }

      this.$nextTick(() => {
        this.$el.style.zIndex = context.zIndex + 1
      })
    },

    show() {
      this.curentValue = true
    },

    hide() {
      this.curentValue = false
    }
  }
}
