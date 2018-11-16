<template>
  <aside class="vov-aside">
    <ul class="vov-aside__wrap">
      <li class="vov-aside__item" v-for="(item, index) in navs" :key="index">
        <h5 class="vov-aside__title">{{ item.name }}</h5>
        <div class="vov-aside__group" v-for="(group, groupIndex) in item.groups" :key="groupIndex">
          <h6 class="vov-aside__subtitle">{{ group.groupName }}</h6>
          <ul class="vov-aside__list">
            <li class="vov-aside__router" v-for="(list, listIndex) in group.list" :key="listIndex">
              <router-link :to="list.path">{{ list.title }}</router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script>
import navConfig from '../nav.config.json'
export default {
  name: 'docs-aside',

  data() {
    return {
      navs: navConfig['zh-CN']
    }
  }
}
</script>

<style lang="scss">
@import "packages/vov-css/src/mixins/mixins.scss";

@include b(aside) {
  position: fixed;
  top: 60px;
  bottom: 0;
  width: 250px;
  z-index: 10;
  background: #fff;

  a {
    display: block;
    position: relative;
  }

  @include e(title) {
    line-height: 40px;
    padding: 0 20px;
  }

  @include e(subtitle) {
    line-height: 30px;
    padding: 0 30px;
    font-size: 12px;
    color: #666;
  }

  @include e(router) {
    a {
      line-height: 40px;
      padding: 0 40px;
      font-size: 14px;
      color: #333;
      transition: .3s all ease;

      &:hover {
        background-color: #ffeee8;
      }

      &.active{
        background: #e4d8d1;
        color: #fd521d;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 3px;
          background: #fd521d;
        }
      }
    }
  }
}
</style>
