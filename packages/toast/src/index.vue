
<template>
  <transition name="vov-fade">
    <div
      v-show="curentValue"
      :class="[
        `vov-toast--${direction}`,
        {
          'vov-toast--icon': icon,
          'vov-toast--msg': msg
        }
      ]"
      class="vov-toast"
    >
      <i
        v-if="icon"
        :class="`vov-icon-${icon}`"/>
      <div
        v-if="msg"
        class="vov-toast__msg">{{ msg }}</div>
    </div>
  </transition>
</template>

<script>
import popup from '../../mixins/popup/index'
export default {
  name: 'VovToast',

  mixins: [popup],

  props: {
    icon: {
      type: String,
      default: ''
    },

    msg: {
      type: String,
      default: ''
    },

    direction: {
      type: String,
      default: 'vertical'
    },

    duration: {
      type: Number,
      default: 2000
    }
  },

  methods: {
    show() {
      this.curentValue = true
      clearTimeout(this.timer)
      if (this.duration === 0) return

      this.timer = setTimeout(() => {
        this.curentValue = false
      }, this.duration)
    }
  }
}
</script>
