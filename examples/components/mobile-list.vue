<template>
  <div class="suv-mobile">
    <h1 class="suv-mobile__logo"></h1>
    <p class="suv-mobile__desc">Suv.js 移动端组件库</p>
    <ul class="suv-mobile__groups">
      <mobile-group v-for="(nav, index) in navs" :data="nav" :key="index" />
    </ul>
  </div>
</template>

<script>
import navConfig from '../nav.config.json'
import MobileGroup from './mobile-group.vue'
const navs = navConfig['zh-CN'].filter(item => item.isShowInMobile)[0].groups
export default {
  name: 'mobile-list',

  data() {
    return {
      navs
    }
  },

  components: {
    MobileGroup
  }
}
</script>

<style lang="scss">
@import "packages/suv-css/src/mixins/mixins.scss";

@include b(mobile) {

  @include e(logo) {
    height: 60px;
    background: url('../assets/logo.png') no-repeat center center / 40px 40px;
  }

  @include e(desc) {
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}
</style>

