<template>
  <suv-button @click="handleClick"></suv-button>
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
