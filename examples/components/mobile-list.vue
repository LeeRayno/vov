<template>
  <div class="vov-mobile">
    <h1 class="vov-mobile__logo"/>
    <p class="vov-mobile__desc">vov.js 移动端组件库</p>
    <ul class="vov-mobile__groups">
      <mobile-group
        v-for="(nav, index) in navs"
        :data="nav"
        :key="index" />
    </ul>
  </div>
</template>

<script>
import navConfig from '../nav.config.json'
import MobileGroup from './mobile-group.vue'
const navs = navConfig['zh-CN'].filter(item => item.isShowInMobile)[0].groups
export default {
  name: 'MobileList',

  components: {
    MobileGroup
  },

  data() {
    return {
      navs
    }
  }
}
</script>

<style lang="scss">
@import "packages/vov-css/src/mixins/mixins.scss";

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
