<template>
  <div class="vov-button" @click="handleClick">
    <slot>按钮</slot>
  </div>
</template>

<script>
export default {
  name: 'vov-button',

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
