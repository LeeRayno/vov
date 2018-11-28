<template>
  <button
    class="vov-button"
    :class="[
      `vov-button--${type}`,
      `vov-button--${size}`,
      {
        'is-disabled': disabled,
        'is-plain': plain
      }
    ]"
    :disabled="disabled"
    @click="handleClick">
      <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: 'vov-button',

  props: {
    type: {
      type: String,
      default: 'default'
    },

    size: {
      type: String,
      default: 'normal'
    },

    disabled: Boolean,
    plain: Boolean
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
