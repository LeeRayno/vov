<template>
  <div class="vov-hello" @click="handleClick">
    hello
    <p class="vov-hello__message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'vov-hello',
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
