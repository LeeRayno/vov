# 快速开始

## 安装

```sh
# via npm or yarn
npm i vov -S
# OR
yarn add vov -S
```
## 引入组件

**完整引入**

在 `main.js` 引入以下内容

```js
import Vue from 'vue'
import vov from 'vov'
import 'vov/lib/vov-css/index.css'

Vue.use(vov)
```

**按需引入**

```js
import {
  Button,
  Icon,
  ...
} from 'vov'

Vue.use(Button)
Vue.use(Icon)
```
