## Dialog 轻提示

### 基本用法

#### 插件调用

引入 `Dialog` 组件后，会自动在 `Vue` 的 `prototype` 上挂载 `$dialog` 方法，便于在组件内调用。

```html
<template>
  <vov-button @click="handleClick">弹框</vov-button>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        const vm = this.$dialog({
        zIndex: 3000,
        title: 'comfirm',
        type: 'confirm',
        msg: 'type 为 confirm',
        handleCancel() {
          console.log('cancel')
          vm.hide()
        },
        handleEnsure() {
          console.log('ensure')
        }
      })
      }
    }
  }
</script>
```

#### 组件调用

```html
<template>
  <vov-button @click="handleClick">组件调用</vov-button>
  <vov-dialog
    v-model="dialog"
    :close-on-click-btn="false"
    title="组件调用"
    @handleCancel="handleCancel"
    @handleEnsure="handleEnsure">
    <!-- slot -->
    <input
      v-model="text"
      type="text"
      placeholder="请输入">
  </vov-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false
      }
    },
    methods: {
      handleClick() {
        this.dialog = true
      }
    }
  }
</script>
```

### Attributes


| 参数                | 说明         | 类型       | 可选值               | 默认值       |
|-------------------|------------|----------|-------------------|-----------|
| title             | 标题         | string   | —                 | —         |
| msg               | 内容         | string   | —                 | —         |
| type              | 弹框类型       | string   | `confirm` `alter` | `confirm` |
| showModal         | 是否显示遮罩     | boolean  | `true` `false`    | `false`   |
| cancelText        | `取消`按钮文字   | string   | —                 | `取消`      |
| ensureText        | `确认`按钮文字   | string   | —                 | `确认`      |
| closeOnClickBtn   | 是否点击按钮关闭弹框 | boolean  | `true` `false`    | `true`    |
| closeOnClickModal | 是否点击遮罩关闭弹框 | boolean  | `true` `false`    | `true`    |
| handleCancel      | 点击`取消`按钮回调 | function | —                 | —         |
| handleEnsure      | 点击`确定`按钮回调 | function | —                 | —         |


### Events


| 事件名称         | 说明         | 回调参数   |
|--------------|------------|--------|
| handleCancel | 点击`取消`按钮回调 | $event |
| handleEnsure | 点击`确定`按钮回调 | $event |


### Methods


| 事件名称 | 说明                  | 回调参数 |
|------|---------------------|------|
| show | 手动调用`dialog.show()` | —    |
| hide | 手动调用`dialog.hide()` | —    |


### slots


| name | 说明     |
|------|--------|
| slot | 默认slot |
