<template>
  <button
    :class="[
      `vov-button--${type}`,
      `vov-button--${size}`,
      {
        'is-disabled': disabled,
        'is-plain': plain
      }
    ]"
    :disabled="disabled"
    class="vov-button"
    @click="handleClick">
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: 'VovButton',

  props: {
    type: {
      type: String,
      default: 'default'
    },

    size: {
      type: String,
      default: 'normal'
    },

    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
