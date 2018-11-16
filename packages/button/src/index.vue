<template>
  <div class="suv-button" @click="handleClick">
    <slot>按钮</slot>
  </div>
</template>

<script>
export default {
  name: 'suv-button',

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
