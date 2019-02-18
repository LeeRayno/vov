<template>
  <section class="vov-demo-block">
    <h2 class="vov-demo-block__title">{{ title }}</h2>
    <div class="vov-demo-block__content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'DemoBlock',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "packages/vov-css/src/mixins/mixins.scss";

@include b(demo-block) {
  padding: 0 15px;

  @include e(title) {
    padding: 40px 15px 15px 0;
    font-size: 14px;
    font-weight: normal;
  }

  @include e(content) {
    font-size: 0;

    .vov-button {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
