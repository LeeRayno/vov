## Button 按钮

### 基本用法

#### 按钮类型

支持 `default`、`primary`、`warning`、`danger`、`success` 默认为 `default`

```html
<vov-button>普通按钮</vov-button>
<vov-button type="primary">主题按钮</vov-button>
<vov-button type="warning">警告按钮</vov-button>
<vov-button type="danger">危险按钮</vov-button>
<vov-button type="success">成功按钮</vov-button>
```

#### 按钮尺寸

支持 `large`、`normal`、`small`、`mini` 默认为 `normal`

```html
<vov-button size="large"></vov-button>
<vov-button size="normal"></vov-button>
<vov-button size="small"></vov-button>
<vov-button size="mini"></vov-button>
```

#### 朴素按钮

加 `plain` 属性

```html
<vov-button plain type="primary">主题按钮</vov-button>
```

#### 禁用按钮

加 `disabled` 属性

```html
<vov-button disabled type="primary">主题按钮</vov-button>
```
### Attributes


| 参数       | 说明   | 类型      | 可选值                                              | 默认值       |
|----------|------|---------|--------------------------------------------------|-----------|
| type     | 按钮类型 | string  | `default` `primary` `warning` `danger` `success` | `default` |
| size     | 按钮尺寸 | string  | `large` `normal` `small` `mini`                  | `normal`  |
| disabled | 按钮禁用 | boolean | —                                                | `false`   |
| plain    | 朴素按钮 | boolean | —                                                | `false`   |


### Events


| 事件名称  | 说明   | 回调参数 |
|-------|------|------|
| click | 点击操作 | —    |
