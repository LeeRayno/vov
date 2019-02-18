<template>
  <div>
    <demo-block title="弹框提示">
      <vov-button @click="handleClick1">confirm</vov-button>
      <vov-button @click="handleClick2">alter</vov-button>
    </demo-block>
    <demo-block title="组件调用">
      <vov-button @click="handleClick3">组件调用</vov-button>
      <vov-dialog
        v-model="dialog"
        :close-on-click-btn="false"
        title="组件调用"
        @handleCancel="handleCancel"
        @handleEnsure="handleEnsure">
        <input
          v-model="text"
          type="text"
          placeholder="请输入">
      </vov-dialog>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      text: ''
    }
  },
  methods: {
    handleClick1() {
      const vm = this.$dialog({
        zIndex: 3000,
        title: 'comfirm',
        msg: 'type 为 confirm',
        handleCancel() {
          console.log('cancel')
          vm.hide()
        },
        handleEnsure() {
          console.log('ensure')
        }
      })
    },

    handleClick2() {
      const vm = this.$dialog({
        type: 'alter',
        msg: 'type 为 alter, 并且没有title',
        closeOnclickBtn: false,
        handleEnsure() {
          vm.hide()
        }
      })
    },

    handleClick3() {
      this.dialog = true
    },

    handleCancel() {
      this.dialog = false
    },

    handleEnsure() {
      this.$toast(this.text)
    }
  }
}
</script>
