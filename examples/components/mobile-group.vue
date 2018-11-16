<template>
  <li class="suv-mobile__group">
    <h6 class="suv-mobile__title" @click="handleClick">{{ data.groupName }}</h6>
    <ul class="suv-mobile__list" ref="list" :class="{active: active}">
      <li class="suv-mobile__item suv-1px--top" v-for="(item, index) in data.list" :key="index">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'mobile-group',

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
@import "packages/suv-css/src/mixins/mixins.scss";

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
