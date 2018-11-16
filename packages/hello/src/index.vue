<template>
  <div class="suv-hello" @click="handleClick">
    hello
    <p class="suv-hello__message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'suv-hello',
  props: {
    message: {
      type: String,
      default: 'message'
    }
  },

  methods: {
    handleClick() {
      return new Promise((resolve, reject) => {
        resolve()
      }).then(() => {
        this.$emit('click', 'this is click emit')
      })
    }
  }
}
</script>
