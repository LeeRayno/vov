<template>
  <div>
    <demo-block title="文字提示">
      <vov-button @click="handleClick">短文</vov-button>
      <vov-button @click="handleClick2">长文</vov-button>
    </demo-block>
    <demo-block title="icon提示">
      <vov-button @click="handleClick3">icon</vov-button>
      <vov-button @click="handleClick4">icon & 文字</vov-button>
    </demo-block>
    <demo-block title="方向提示">
      <vov-button @click="handleClick5">vertical</vov-button>
      <vov-button @click="handleClick6">horizental</vov-button>
    </demo-block>
    <demo-block title="手动隐藏">
      <vov-button @click="handleClick7">点击其他按钮隐藏</vov-button>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },

  methods: {
    handleClick() {
      this.$toast('加载中...')
    },

    handleClick2() {
      this.$toast('好嗨哦！感觉人生已经到达了巅峰，感觉人生已经到达了高潮')
    },

    handleClick3() {
      this.$toast({
        icon: 'fire',
        showModal: true
      })
    },

    handleClick4() {
      this.$toast({
        icon: 'love',
        msg: '比心'
      })
    },

    handleClick5() {
      this.$toast({
        icon: 'fire',
        msg: 'fire in the hole'
      })
    },

    handleClick6() {
      this.$toast({
        icon: 'fire',
        msg: 'fire in the hole',
        direction: 'horizental'
      })
    },

    handleClick7() {
      this.$toast({
        icon: 'fire',
        msg: 'fire in the hole',
        duration: 0
      })
    }
  }
}
</script>
