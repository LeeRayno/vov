## Toast 轻提示

### 基本用法

#### 插件调用

引入 `Toast` 组件后，会自动在 `Vue` 的 `prototype` 上挂载 `$toast` 方法，便于在组件内调用。

```html
<template>
  <vov-button @click="handleClick">轻提示</vov-button>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        this.$toast({
          icon: 'fire',
          msg: '加载中...',
          zIndex: 2000,
          duration: 2000,
          direction: 'horizental',
          showModal: false
        })
      }
    }
  }
</script>
```

### Attributes


| 参数        | 说明                                           | 类型      | 可选值                     | 默认值        |
|-----------|----------------------------------------------|---------|-------------------------|------------|
| icon      | 图标                                           | string  | icon图标                  | —          |
| msg       | 消息                                           | string  | —                       | —          |
| showModal | 是否显示遮罩                                       | boolean | `true` `false`          | `false`    |
| direction | 方向                                           | string  | `vertical` `horizental` | `vertical` |
| duration  | 显示时间(ms)，值为0时，toast不会消失，需要手动调用toast.hide()消失 | number  | —                       | 2000       |


### Methods


| 事件名称 | 说明                | 回调参数 |
|------|-------------------|------|
| show | 展示 `toast.show()` | —    |
| hide | 隐藏 `toast.hide()` | —    |
