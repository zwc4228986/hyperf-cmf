(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home-work","home-work-components-myapp"],{4836:function(e,t,n){},b223:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function c(e,t,n,c,l,a){var r=Object(o["resolveComponent"])("el-alert"),i=Object(o["resolveComponent"])("myapp"),d=Object(o["resolveComponent"])("el-card"),s=Object(o["resolveComponent"])("el-col"),m=Object(o["resolveComponent"])("el-row"),u=Object(o["resolveComponent"])("el-main");return Object(o["openBlock"])(),Object(o["createBlock"])(u,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(r,{title:"根据角色配置,可让不同角色访问不同的控制台视图,参数值在登录成功后返回 dashboard:{type}",type:"success",style:{"margin-bottom":"20px"}}),Object(o["createVNode"])(m,{gutter:15},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{lg:24},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{shadow:"never",header:"我的常用"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i)]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var l=n("ec3f"),a={components:{myapp:l["default"]},data:function(){return{}},mounted:function(){this.$emit("on-mounted")},methods:{}},r=n("6b0d"),i=n.n(r);const d=i()(a,[["render",c]]);t["default"]=d},ec3f:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=function(e){return Object(o["pushScopeId"])("data-v-12a272e8"),e=e(),Object(o["popScopeId"])(),e},l={class:"myMods"},a=["href"],r=c((function(){return Object(o["createElementVNode"])("a",{href:"javascript:void(0)"},[Object(o["createElementVNode"])("i",{class:"el-icon-plus"})],-1)})),i=[r],d={class:"setMods"},s={class:"setMods"},m=Object(o["createTextVNode"])("保存");function u(e,t,n,c,r,u){var b=Object(o["resolveComponent"])("router-link"),O=Object(o["resolveComponent"])("draggable"),j=Object(o["resolveComponent"])("el-scrollbar"),p=Object(o["resolveComponent"])("el-main"),f=Object(o["resolveComponent"])("el-button"),h=Object(o["resolveComponent"])("el-footer"),y=Object(o["resolveComponent"])("el-container"),V=Object(o["resolveComponent"])("el-drawer");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createElementVNode"])("ul",l,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.myMods,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.path,style:Object(o["normalizeStyle"])({background:e.meta.color||"#909399"})},["link"==e.meta.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{key:0,href:e.path,target:"_blank"},[Object(o["createElementVNode"])("i",{class:Object(o["normalizeClass"])(e.meta.icon||"el-icon-menu")},null,2),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.meta.title),1)],8,a)):(Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:1,to:{path:e.path}},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("i",{class:Object(o["normalizeClass"])(e.meta.icon||"el-icon-menu")},null,2),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.meta.title),1)]})),_:2},1032,["to"]))],4)})),128)),Object(o["createElementVNode"])("li",{class:"modItem-add",onClick:t[0]||(t[0]=function(){return u.addMods&&u.addMods.apply(u,arguments)})},i)]),Object(o["createVNode"])(V,{title:"添加应用",modelValue:r.modsDrawer,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.modsDrawer=e}),size:570,"destroy-on-close":""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(y,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,{class:"nopadding"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("h4",null,"我的常用 ( "+Object(o["toDisplayString"])(r.myMods.length)+" )",1),Object(o["createVNode"])(O,{tag:"ul",modelValue:r.myMods,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.myMods=e}),animation:"200","item-key":"path",group:"people"},{item:Object(o["withCtx"])((function(e){var t=e.element;return[Object(o["createElementVNode"])("li",{style:Object(o["normalizeStyle"])({background:t.meta.color||"#909399"})},[Object(o["createElementVNode"])("i",{class:Object(o["normalizeClass"])(t.meta.icon||"el-icon-menu")},null,2),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(t.meta.title),1)],4)]})),_:1},8,["modelValue"])]),Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("h4",null,"全部应用 ( "+Object(o["toDisplayString"])(r.filterMods.length)+" )",1),Object(o["createVNode"])(O,{tag:"ul",modelValue:r.filterMods,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.filterMods=e}),animation:"200","item-key":"path",sort:!1,group:"people"},{item:Object(o["withCtx"])((function(e){var t=e.element;return[Object(o["createElementVNode"])("li",{style:Object(o["normalizeStyle"])({background:t.meta.color||"#909399"})},[Object(o["createElementVNode"])("i",{class:Object(o["normalizeClass"])(t.meta.icon||"el-icon-menu")},null,2),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(t.meta.title),1)],4)]})),_:1},8,["modelValue"])])]})),_:1})]})),_:1}),Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,{type:"primary",size:"small",onClick:u.saveMods},{default:Object(o["withCtx"])((function(){return[m]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])}n("4de4"),n("d3b7"),n("caad"),n("2532"),n("b0c0"),n("159b"),n("d81d");var b=n("b76a"),O=n.n(b),j={components:{draggable:O.a},data:function(){return{mods:[],myMods:[],myModsName:[],filterMods:[],modsDrawer:!1}},mounted:function(){this.getMods()},methods:{addMods:function(){this.modsDrawer=!0},getMods:function(){var e=this;this.myModsName=this.$TOOL.data.get("my-mods")||[];var t=this.$TOOL.data.get("MENU");this.filterMenu(t),this.myMods=this.mods.filter((function(t){return e.myModsName.includes(t.name)})),this.filterMods=this.mods.filter((function(t){return!e.myModsName.includes(t.name)}))},filterMenu:function(e){var t=this;e.forEach((function(e){if(e.meta.hidden)return!1;"iframe"==e.meta.type&&(e.path="/i/".concat(e.name)),e.children&&e.children.length>0?t.filterMenu(e.children):t.mods.push(e)}))},saveMods:function(){var e=this.myMods.map((function(e){return e.name}));this.$TOOL.data.set("my-mods",e),this.$message.success("设置常用成功"),this.modsDrawer=!1}}},p=(n("fc82"),n("6b0d")),f=n.n(p);const h=f()(j,[["render",u],["__scopeId","data-v-12a272e8"]]);t["default"]=h},fc82:function(e,t,n){"use strict";n("4836")}}]);