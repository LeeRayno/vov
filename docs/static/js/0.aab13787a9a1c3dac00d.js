webpackJsonp([0],{"/QYO":function(t,e){},BEw7:function(t,e){},ec6V:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("ffz/"),n=i.n(s),o={name:"mobile-group",props:{data:{type:Object,default:function(){}}},data:function(){return{active:!1}},mounted:function(){this.caclHeight()},methods:{handleClick:function(){this.active=!this.active},caclHeight:function(){var t=this.$refs.list,e=t.scrollHeight;t.style.setProperty("--max-height",e+"px")}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"vov-mobile__group"},[i("h6",{staticClass:"vov-mobile__title",on:{click:t.handleClick}},[t._v(t._s(t.data.groupName))]),t._v(" "),i("ul",{ref:"list",staticClass:"vov-mobile__list",class:{active:t.active}},t._l(t.data.list,function(e,s){return i("li",{key:s,staticClass:"vov-mobile__item vov-1px--top"},[i("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1)}))])},staticRenderFns:[]};var a=i("VU/8")(o,l,!1,function(t){i("BEw7")},null,null).exports,c=n.a["zh-CN"].filter(function(t){return t.isShowInMobile})[0].groups,r={name:"mobile-list",data:function(){return{navs:c}},components:{MobileGroup:a}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vov-mobile"},[e("h1",{staticClass:"vov-mobile__logo"}),this._v(" "),e("p",{staticClass:"vov-mobile__desc"},[this._v("vov.js 移动端组件库")]),this._v(" "),e("ul",{staticClass:"vov-mobile__groups"},this._l(this.navs,function(t,i){return e("mobile-group",{key:i,attrs:{data:t}})}))])},staticRenderFns:[]};var v=i("VU/8")(r,u,!1,function(t){i("/QYO")},null,null);e.default=v.exports}});