<template>
  <vov-button @click="handleClick"></vov-button>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      console.log(e)
    }
  }
}
</script>
