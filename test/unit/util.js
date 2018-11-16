import Vue from 'vue'
import suv from '@/index.js'

Vue.use(suv)

let id = 0

const createElm = function() {
  const elm = document.createElement('div')

  elm.id = 'app' + ++id
  document.body.appendChild(elm)

  return elm
}

/**
 * 回收vm
 * @param {Object} vm
 */
exports.destroyVM = function(vm) {
  vm.$destory && vm.$destory()
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el)
}

/**
 * 创建一个Vue实例对象
 * @param {Object|String} Compo 组件配置 可直接传 template
 * @param {Boolean = false} mounted 是否添加到 DOM 上
 * @return {Object} vm
 */
exports.createVue = function(Compo, mounted = false) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = { template: Compo }
  }

  return new Vue(Compo).$mount(mounted === false ? null : createElm())
}

/**
 * 创建一个测试组件实例
 * @param {Object} Compo 组件对象
 * @param {Object} propsData props 数据
 * @param {Boolean = false} 是否添加到 DOM
 * @return {Object} vm
 */
exports.createTest = function(Compo, propsData = {}, mounted = false) {
  if (propsData === true || propsData === false) {
    mounted = propsData
    propsData = {}
  }

  const elm = createElm()
  const Ctor = Vue.extend(Compo)

  return new Ctor({propsData}).$mount(mounted === false ? null : elm)
}

/**
 * 触发事件
 * 注：mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param {Element} elm 元素
 * @param {String} name 事件名称
 * @param {*} opts 配置项
 */
exports.triggerEvent = function(elm, name, ...opts) {
  let eventName

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents'
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent'
  } else {
    eventName = 'HtmlEvents'
  }

  const evt = document.createEvent(eventName)
  evt.initEvent(name, ...opts)
  elm.dispatchEvent
    ? elm.dispatchEvent(eventName)
    : elm.fireEvent('on' + name, evt)

  return elm
}

/**
 * 触发 'mousedown' 'mouseup' 事件
 * @param {Element} elm 元素
 * @param {*} 配置项
 */
exports.triggerClick = function(elm, ...opts) {
  exports.triggerEvent(elm, 'mousedown', ...opts)
  exports.triggerEvent(elm, 'mouseup', ...opts)
}

/**
 * 触发 keydown 事件
 * @param {Element} elm
 * @param {keyCode} int
 */
exports.triggerKeyDown = function(el, keyCode) {
  const evt = document.createEvent('Events')
  evt.initEvent('keydown', true, true)
  evt.keyCode = keyCode
  el.dispatchEvent(evt)
}
