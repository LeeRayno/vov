<template>
  <div>
    <demo-block title="按钮类型">
      <vov-button>普通按钮</vov-button>
      <vov-button type="primary">主题按钮</vov-button>
      <vov-button type="warning">警告按钮</vov-button>
      <vov-button type="danger">危险按钮</vov-button>
      <vov-button type="success">成功按钮</vov-button>
    </demo-block>
    <demo-block title="朴素按钮">
      <vov-button plain type="primary">主题按钮</vov-button>
      <vov-button plain type="warning">警告按钮</vov-button>
      <vov-button plain type="danger">危险按钮</vov-button>
      <vov-button plain type="success">成功按钮</vov-button>
    </demo-block>
    <demo-block title="禁用按钮">
      <vov-button disabled type="primary">主题按钮</vov-button>
      <vov-button disabled type="warning">警告按钮</vov-button>
      <vov-button disabled type="danger">危险按钮</vov-button>
      <vov-button disabled type="success">成功按钮</vov-button>
    </demo-block>
    <demo-block title="按钮大小">
      <vov-button size="large"></vov-button>
      <vov-button size="normal"></vov-button>
      <vov-button size="small"></vov-button>
      <vov-button size="mini"></vov-button>
    </demo-block>
  </div>
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
