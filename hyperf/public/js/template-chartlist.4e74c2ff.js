(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["template-chartlist"],{2927:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=function(e){return Object(c["pushScopeId"])("data-v-0aefb342"),e=e(),Object(c["popScopeId"])(),e},r={class:"left-panel"},l={class:"number-data"},a={class:"item"},i=Object(c["createTextVNode"])(" 浏览量(PV) "),u=o((function(){return Object(c["createElementVNode"])("div",{style:{width:"200px","line-height":"2"}}," 即通常说的Page View(PV)，用户每打开一个网站页面就被记录1次。用户多次打开同一页面，浏览量值累计。 ",-1)})),d=o((function(){return Object(c["createElementVNode"])("i",{class:"el-icon-question"},null,-1)})),b=o((function(){return Object(c["createElementVNode"])("p",null,"65,715",-1)})),j={class:"item"},O=Object(c["createTextVNode"])(" 访客数(UV) "),p=o((function(){return Object(c["createElementVNode"])("div",{style:{width:"200px","line-height":"2"}}," 一天之内您网站的独立访客数(以Cookie为依据)，一天内同一访客多次访问您网站只计算1个访客。 ",-1)})),s=o((function(){return Object(c["createElementVNode"])("i",{class:"el-icon-question"},null,-1)})),f=o((function(){return Object(c["createElementVNode"])("p",null,"8,936",-1)})),m={class:"item"},V=Object(c["createTextVNode"])(" IP数 "),h=o((function(){return Object(c["createElementVNode"])("div",{style:{width:"200px","line-height":"2"}}," 一天之内您网站的独立访问ip数。 ",-1)})),N=o((function(){return Object(c["createElementVNode"])("i",{class:"el-icon-question"},null,-1)})),v=o((function(){return Object(c["createElementVNode"])("p",null,"10,279",-1)})),w={class:"item"},x=Object(c["createTextVNode"])(" 跳出率 "),C=o((function(){return Object(c["createElementVNode"])("div",{style:{width:"200px","line-height":"2"}}," 只浏览了一个页面便离开了网站的访问次数占总的访问次数的百分比。 ",-1)})),E=o((function(){return Object(c["createElementVNode"])("i",{class:"el-icon-question"},null,-1)})),g=o((function(){return Object(c["createElementVNode"])("p",null,"27.92%",-1)})),y={class:"item"},_=Object(c["createTextVNode"])(" 平均访问时长 "),T=o((function(){return Object(c["createElementVNode"])("div",{style:{width:"200px","line-height":"2"}}," 访客在一次访问中，平均打开网站的时长。即每次访问中，打开第一个页面到关闭最后一个页面的平均值，打开一个页面时计算打开关闭的时间差。 ",-1)})),k=o((function(){return Object(c["createElementVNode"])("i",{class:"el-icon-question"},null,-1)})),q=o((function(){return Object(c["createElementVNode"])("p",null,"00:19:05",-1)})),I={class:"chart"};function P(e,t,n,o,P,U){var S=Object(c["resolveComponent"])("el-radio-button"),z=Object(c["resolveComponent"])("el-radio-group"),A=Object(c["resolveComponent"])("el-date-picker"),B=Object(c["resolveComponent"])("el-header"),D=Object(c["resolveComponent"])("el-tooltip"),J=Object(c["resolveComponent"])("scEcharts"),G=Object(c["resolveComponent"])("el-col"),R=Object(c["resolveComponent"])("el-row"),W=Object(c["resolveComponent"])("el-card"),F=Object(c["resolveComponent"])("el-table-column"),H=Object(c["resolveComponent"])("scTable"),K=Object(c["resolveComponent"])("el-main"),L=Object(c["resolveComponent"])("el-container");return Object(c["openBlock"])(),Object(c["createBlock"])(L,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(B,null,{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(z,{modelValue:P.dateType,"onUpdate:modelValue":t[0]||(t[0]=function(e){return P.dateType=e}),size:"mini",style:{"margin-right":"15px"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(S,{label:"今天"}),Object(c["createVNode"])(S,{label:"昨天"}),Object(c["createVNode"])(S,{label:"最近7天"}),Object(c["createVNode"])(S,{label:"最近30天"})]})),_:1},8,["modelValue"]),Object(c["createVNode"])(A,{modelValue:P.date,"onUpdate:modelValue":t[1]||(t[1]=function(e){return P.date=e}),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"mini"},null,8,["modelValue"])])]})),_:1}),Object(c["createVNode"])(K,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(W,{shadow:"never"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("h2",null,[i,Object(c["createVNode"])(D,{effect:"light"},{content:Object(c["withCtx"])((function(){return[u]})),default:Object(c["withCtx"])((function(){return[d]})),_:1})]),b]),Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("h2",null,[O,Object(c["createVNode"])(D,{effect:"light"},{content:Object(c["withCtx"])((function(){return[p]})),default:Object(c["withCtx"])((function(){return[s]})),_:1})]),f]),Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("h2",null,[V,Object(c["createVNode"])(D,{effect:"light"},{content:Object(c["withCtx"])((function(){return[h]})),default:Object(c["withCtx"])((function(){return[N]})),_:1})]),v]),Object(c["createElementVNode"])("div",w,[Object(c["createElementVNode"])("h2",null,[x,Object(c["createVNode"])(D,{effect:"light"},{content:Object(c["withCtx"])((function(){return[C]})),default:Object(c["withCtx"])((function(){return[E]})),_:1})]),g]),Object(c["createElementVNode"])("div",y,[Object(c["createElementVNode"])("h2",null,[_,Object(c["createVNode"])(D,{effect:"light"},{content:Object(c["withCtx"])((function(){return[T]})),default:Object(c["withCtx"])((function(){return[k]})),_:1})]),q])]),Object(c["createElementVNode"])("div",I,[Object(c["createVNode"])(R,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(G,{span:8},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(J,{height:"250px",option:P.pie},null,8,["option"])]})),_:1}),Object(c["createVNode"])(G,{span:16},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(J,{height:"250px",option:P.option},null,8,["option"])]})),_:1})]})),_:1})])]})),_:1}),Object(c["createVNode"])(W,{shadow:"never"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(H,{ref:"table",data:P.data},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(F,{label:"来源类型",prop:"type"}),Object(c["createVNode"])(F,{label:"网站基础指标",align:"center"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(F,{label:"访客数(UV)",prop:"uv",width:"150"}),Object(c["createVNode"])(F,{label:"IP数",prop:"ip",width:"150"})]})),_:1}),Object(c["createVNode"])(F,{label:"流量质量指标",align:"center"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(F,{label:"跳出率",prop:"out",width:"150"}),Object(c["createVNode"])(F,{label:"平均访问时长",prop:"time",width:"150"})]})),_:1})]})),_:1},8,["data"])]})),_:1})]})),_:1})]})),_:1})}var U=n("591b"),S={name:"chartlist",components:{scEcharts:U["a"]},data:function(){return{dateType:"今天",date:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],data:[{type:"直接访问",pv:"57,847",uv:"7,129",ip:"8,330",out:"26.38%",time:"00:20:35"},{type:"搜索引擎",pv:"5,942",uv:"1,338",ip:"1,449",out:"33.49%",time:"00:11:31"},{type:"外部链接",pv:"1,926",uv:"469",ip:"500",out:"44.53%",time:"00:08:49"}],pie:{tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:["55%","70%"],itemStyle:{borderRadius:5,borderColor:"#fff",borderWidth:1},data:[{value:1048,name:"搜索引擎"},{value:235,name:"直接访问"},{value:180,name:"外部链接"}]}]},option:{legend:{data:["直接访问","搜索引擎","外部链接"]},tooltip:{trigger:"axis"},xAxis:{type:"category",data:["08:00","09:00","10:00","11:00","12:00","13:00","14:00"],boundaryGap:!1},yAxis:{type:"value"},series:[{name:"直接访问",data:[120,210,150,80,70,110,130],type:"line"},{name:"搜索引擎",data:[110,180,120,120,60,90,110],type:"line"},{name:"外部链接",data:[50,90,60,60,30,40,50],type:"line"}]}}}},z=(n("ee11"),n("6b0d")),A=n.n(z);const B=A()(S,[["render",P],["__scopeId","data-v-0aefb342"]]);t["default"]=B},c6dd:function(e,t,n){},ee11:function(e,t,n){"use strict";n("c6dd")}}]);