<template>
  <div>
    <demo-block title="Icon 图标">
      <ul class="icon-list">
        <li v-for="(icon, index) in icons" :key="index">
          <vov-icon :name="icon" />
          <span>{{ icon }}</span>
        </li>
      </ul>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        'yuyin',
        'gift',
        'love',
        'mian',
        'seven',
        'thirty',
        'fire',
        'save-as',
        'message',
        'correct',
        'camera',
        'opinion',
        'eyes',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'arrow-down',
        'turn-down',
        'turn-up',
        'coupon',
        'my',
        'red-packet',
        'feedback',
        'order',
        'complete',
        'warn',
        'lock',
        'search',
        'refresh',
        'home',
        'adress',
        'time',
        'voice',
        'setting',
        'scan',
        'alarm-clock',
        'link',
        'collection',
        'delete',
        'qrcode',
        'close',
        'shopping-car',
        'car-add',
        'safe',
        'clear',
        'error'
      ]
    }
  }
}
</script>

<style lang="scss">
.icon-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  li {
    width: 33.333333%;
    height: 100px;
    text-align: center;
    i {
      display: block;
      font-size: 30px;
      margin: 10px 0;
    }
    span {
      font-size: 16px;
    }
  }
}
</style>
