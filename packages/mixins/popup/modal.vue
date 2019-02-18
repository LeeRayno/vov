<template>
  <transition name="vov-fade">
    <div
      v-show="curentValue"
      :style="customStyle"
      class="vov-modal"
      @click="$emit('modalClick', $event)"
      @touchmove.prevent.stop/>
  </transition>
</template>

<script>
export default {
  name: 'VovModal',

  props: {

    zIndex: Number,

    modalStyle: {
      type: Object,
      default: function() {
        return {}
      }
    }

  },

  data() {
    return {
      curentValue: false
    }
  },

  computed: {
    customStyle() {
      return {
        zIndex: this.zIndex,
        ...this.modalStyle
      }
    }
  },

  methods: {
    show() {
      this.curentValue = true
    },

    hide() {
      this.curentValue = false
    }
  }
}
</script>
