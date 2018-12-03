<template>
  <i
    :class="`vov-icon-${name}`"
    @click="handleClick"/>
</template>

<script>
export default {
  name: 'VovIcon',

  props: {
    name: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
