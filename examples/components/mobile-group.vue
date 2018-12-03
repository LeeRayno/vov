<template>
  <li class="vov-mobile__group">
    <h6
      class="vov-mobile__title"
      @click="handleClick">{{ data.groupName }}</h6>
    <ul
      ref="list"
      :class="{active: active}"
      class="vov-mobile__list">
      <li
        v-for="(item, index) in data.list"
        :key="index"
        class="vov-mobile__item vov-1px--top">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'MobileGroup',

  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      active: false
    }
  },

  mounted() {
    this.caclHeight()
  },

  methods: {
    handleClick() {
      this.active = !this.active
    },

    caclHeight() {
      const el = this.$refs.list
      const height = el.scrollHeight
      el.style.setProperty('--max-height', height + 'px')
    }
  }
}
</script>

<style lang="scss">
@import "packages/vov-css/src/mixins/mixins.scss";

$h: 56px;
@include b(mobile) {

  @include e(group) {
    margin-bottom: 10px;
    background: #fff;
  }

  @include e(title) {
    height: $h;
    line-height: $h;
    padding-left: 20px;
  }

  @include e(list) {
    max-height: 0;
    overflow: hidden;

    transition: .5s all ease;

    &.active{
      max-height: var(--max-height);
    }
  }

  @include e(item) {
    a {
      display: block;
      padding-left: 20px;
      height: 44px;
      line-height: 44px;
      font-size: 12px;
      color: #333;
    }
  }
}

</style>
