(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vab-filterBar"],{"2dba":function(e,t,a){"use strict";a.r(t);var r=a("7a23");function n(e,t,a,n,l,c){var o=Object(r["resolveComponent"])("scFilterBar"),u=Object(r["resolveComponent"])("el-card"),i=Object(r["resolveComponent"])("el-alert"),s=Object(r["resolveComponent"])("el-main");return Object(r["openBlock"])(),Object(r["createBlock"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{shadow:"never"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o,{filterName:"filterName",options:l.options,onFilterChange:c.change},null,8,["options","onFilterChange"])]})),_:1}),Object(r["createVNode"])(i,{title:"SCUI 独创的过滤条Filterbar,可配置不同类型的过滤字段,以及异步获取数据,在@/config/filterBar.js中可以更改运算符以及其他配置,操作上方过滤条查看下方change事件的回调,在表格查询的场景下非常合适",type:"success",style:{margin:"20px 0"}}),Object(r["createVNode"])(u,{shadow:"never"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("pre",null,Object(r["toDisplayString"])(l.filterData),1)]})),_:1})]})),_:1})}var l=a("1da1"),c=(a("96cf"),a("d81d"),a("5576")),o={name:"filterBar",components:{scFilterBar:c["a"]},data:function(){var e=this;return{filterData:{},defaultFilter:[],options:[{label:"订单号",value:"id",type:"text",selected:!0,placeholder:"请输入订单号"},{label:"类型",value:"type",type:"select",operator:"=",selected:!0,placeholder:"请选择类型",extend:{data:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{label:"类型(多选)",value:"type2",type:"select",operator:"=",placeholder:"请选择类型",extend:{multiple:!0,data:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{label:"通知(异步)",value:"noticeType",type:"select",operator:"=",placeholder:"请选择通知类型",extend:{request:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$API.system.dic.get.get();case 2:return a=t.sent,t.abrupt("return",a.data.map((function(e){return{label:e.label,value:e.value}})));case 4:case"end":return t.stop()}}),t)})));function a(){return t.apply(this,arguments)}return a}()}},{label:"通知(远程搜索)",value:"noticeType2",type:"select",operator:"=",placeholder:"请输入关键词后检索",extend:{remote:!0,request:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={keyword:a},t.next=3,e.$API.system.dic.get.get(r);case 3:return n=t.sent,t.abrupt("return",n.data.map((function(e){return{label:e.label,value:e.value}})));case 5:case"end":return t.stop()}}),t)})));function a(e){return t.apply(this,arguments)}return a}()}},{label:"开关",value:"switch",type:"switch",operator:"="},{label:"日期单选",value:"date",type:"date"},{label:"日期范围",value:"date2",type:"daterange"}]}},methods:{change:function(e){this.filterData=e}}},u=a("6b0d"),i=a.n(u);const s=i()(o,[["render",n]]);t["default"]=s}}]);