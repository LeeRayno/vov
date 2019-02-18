<template>
  <transition name="vov-zoom">
    <div
      v-show="curentValue"
      :class="[`vov-dialog--${type}`]"
      class="vov-dialog"
      @touchmove.prevent.stop>
      <header
        v-if="title"
        class="vov-dialog__header">
        {{ title }}
      </header>
      <div class="vov-dialog__content">
        <slot>{{ msg }}</slot>
      </div>
      <footer class="vov-dialog__footer vov-1px--top">
        <vov-botton
          v-if="type === 'confirm'"
          size="large"
          class="vov-dialog__footer--cancel"
          @click="handleCancel">
          {{ cancelText }}
        </vov-botton>
        <vov-botton
          v-if="type === 'confirm' || type === 'alter'"
          size="large"
          class="vov-dialog__footer--ensure"
          type="primary"
          plain
          @click="handleEnsure">
          {{ ensureText }}
        </vov-botton>
      </footer>
    </div>
  </transition>
</template>

<script>
import VovBotton from '../../button/index'
import popup from '../../mixins/popup/index'
export default {
  name: 'VovDialog',

  components: {
    VovBotton
  },

  mixins: [popup],

  props: {

    type: {
      type: String,
      default: 'confirm'
    },

    title: {
      type: String,
      default: ''
    },

    msg: {
      type: String,
      default: ''
    },

    cancelText: {
      type: String,
      default: '取消'
    },

    ensureText: {
      type: String,
      default: '确定'
    },

    showModal: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnClickBtn: {
      type: Boolean,
      default: true
    }
  },

  mounted() {
    document.body.appendChild(this.$el)
  },

  methods: {
    handleCancel(e) {
      this.closeOnClickBtn && this.hide()
      this.$emit('handleCancel', e)
    },

    handleEnsure(e) {
      this.closeOnClickBtn && this.hide()
      this.$emit('handleEnsure', e)
    }
  }
}
</script>
