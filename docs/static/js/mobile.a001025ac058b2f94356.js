webpackJsonp([8,5],{"38+0":function(t,e,n){"use strict";const o=function(){const t=navigator.userAgent.toLowerCase();return/(android|bb\d+|meego).+mobile|kdtunion|weibo|m2oapp|micromessenger|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}();e.a=o},"7jcf":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},o,!1,function(t){n("J/Nu")},null,null);e.default=i.exports},CoTI:function(t,e,n){var o={"./mobile.vue":["7jcf",5],"./mobile/button.vue":["ft/V",4]};function i(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}i.keys=function(){return Object.keys(o)},i.id="CoTI",t.exports=i},"J/Nu":function(t,e){},Le5C:function(t,e){},LgXO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i=n("7jcf"),a=n("NwlK"),s=n("38+0"),c=n("//Fk"),r=n.n(c),l={name:"vov-hello",props:{message:{type:String,default:"message"}},methods:{handleClick:function(){var t=this;return new r.a(function(t,e){t()}).then(function(){t.$emit("click","this is click emit")})}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vov-hello",on:{click:this.handleClick}},[this._v("\n  hello\n  "),e("p",{staticClass:"vov-hello__message"},[this._v(this._s(this.message))])])},staticRenderFns:[]},p=n("VU/8")(l,u,!1,null,null,null).exports;p.install=function(t){t.component(p.name,p)};var m=p,d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vov-button",on:{click:this.handleClick}},[this._t("default",[this._v("按钮")])],2)},staticRenderFns:[]},h=n("VU/8")({name:"vov-button",methods:{handleClick:function(t){this.$emit("click",t)}}},d,!1,null,null,null).exports;h.install=function(t){t.component(h.name,h)};var f=[m,h],v=function(t){f.forEach(function(e){t.component(e.name,e)})};"undefined"!=typeof window&&window.Vue&&v(window.Vue);var b={install:v};n("Le5C");o.a.use(b),a.a.beforeEach((t,e,n)=>{s.a?n():window.location.replace("index.html")}),o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,components:{App:i.default},template:"<App/>"})},NwlK:function(t,e,n){"use strict";var o=n("7+uW"),i=n("/ocq"),a=n("ffz/"),s=n.n(a),c=n("38+0");function r(t){const e=c.a?()=>n("CoTI")(`./mobile${t.path}.vue`):()=>n("dwtK")(`./docs${t.path}.md`);return{path:t.path,component:e}}var l=function(t,e){let o=[];return t["zh-CN"].forEach(t=>{e&&!t.isShowInMobile||t.groups.forEach(t=>{t.list.forEach(t=>{o.push(r(t))})})}),e&&o.push({path:"/",component:()=>n.e(0).then(n.bind(null,"ec6V"))}),o}(s.a,c.a);o.a.use(i.a);e.a=new i.a({routes:l,linkActiveClass:"active"})},dwtK:function(t,e,n){var o={"./docs/button.md":["VS29",3],"./docs/intro.md":["MWvK",2],"./docs/start.md":["NbD9",1]};function i(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}i.keys=function(){return Object.keys(o)},i.id="dwtK",t.exports=i},"ffz/":function(t,e){t.exports={"zh-CN":[{name:"开发指南",groups:[{list:[{path:"/intro",title:"介绍"},{path:"/start",title:"快速开始"}]}]},{name:"组件",isShowInMobile:!0,groups:[{groupName:"基础",list:[{path:"/button",title:"Button 按钮"},{path:"/button",title:"Button 按钮"},{path:"/button",title:"Button 按钮"},{path:"/hello2",title:"hello2"}]},{groupName:"提示",list:[{path:"/button",title:"Button 按钮"},{path:"/button",title:"Button 按钮"},{path:"/button",title:"Button 按钮"},{path:"/hello2",title:"hello2"}]}]}]}}},["LgXO"]);