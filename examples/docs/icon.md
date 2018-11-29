## Icon 图标

请调至手机模式预览具体图标

### 基本用法

**组件方式**

通过 `name` 属性传入字体名称

```html
<vov-icon name="fire" />
```

**类名方式**

直接设置类名 `vov-icon-xxx`使用

```html
<i class="vov-icon-fire"></i>
```

### 自定义图标

如果需要在现有 `Icon` 的基础上使用更多图标，可以登陆[Iconfont](http://www.iconfont.cn)官网选择你想使用的图标，然后定义`font-family`,如：

```scss
// 定义 font-family 为 your-icon
@font-face {
  font-family: 'your-icon';  /* project id 585056 */
  src: url('//at.alicdn.com/t/font_585056_wrvw77wfsz0hehfr.eot');
  src: url('//at.alicdn.com/t/font_585056_wrvw77wfsz0hehfr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_585056_wrvw77wfsz0hehfr.woff') format('woff'),
  url('//at.alicdn.com/t/font_585056_wrvw77wfsz0hehfr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_585056_wrvw77wfsz0hehfr.svg#iconfont') format('svg');
}

// 将 your-icon 加入到 vov-icon- 类名 font-family 中
[class^="vov-icon-"],
[class*=" vov-icon-"] {
  font-family: 'vov-icon', 'your-icon'!important;
}

// 定义 content
.vov-icon-custom::before {
  content: "\e61b";
}

// 页面中使用
<vov-icon name="custom" />
// or
<i class="vov-icon-custom"></i>
```

### Attributes

| 参数   | 说明       | 类型     | 可选值 | 默认值 |
|------|----------|--------|-----|-----|
| name | `Icon`名字 | string | —   | —   |


### Events


| 事件名称  | 说明   | 回调参数 |
|-------|------|------|
| click | 点击操作 | —    |
