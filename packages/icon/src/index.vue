<template>
  <i :class="`vov-icon-${name}`" @click="handleClick"></i>
</template>

<script>
export default {
  name: 'vov-icon',

  props: {
    name: String
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
