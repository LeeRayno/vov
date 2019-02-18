<template>
  <header class="vov-header">
    <h1 class="vov-header__logo">
      <a href="#">vov.js</a>
    </h1>
    <div class="vov-header__link">
      <a
        href="https://github.com/LeeRayno/vov"
        target="_blank"/>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DocsHeader'
}
</script>

<style lang="scss">
@import "packages/vov-css/src/mixins/mixins.scss";

@include b(header) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 60px;
  padding: 0 20px;
  background: hsla(0, 0%, 100%, 0.4);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: block;
  }

  @include e(logo) {
    a {
      background: url('../assets/logo.png') no-repeat 0 center;
      background-size: contain;
      padding-left: 45px;
    }
  }

  @include e(link) {
    a {
      background: url('https://img.yzcdn.cn/upload_files/2017/03/30/Fil9peDfgzvk3kj-oFCsElS4FS1x.png') no-repeat 0 center;
      width: 22px;
      height: 60px;
      background-size: contain;
    }
  }
}
</style>
