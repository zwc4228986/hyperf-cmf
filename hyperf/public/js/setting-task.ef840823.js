(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting-task","setting-task-logs","setting-task-save"],{4681:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=Object(o["createTextVNode"])("取 消"),r=Object(o["createTextVNode"])("保 存");function l(e,t,n,l,a,i){var d=Object(o["resolveComponent"])("el-input"),s=Object(o["resolveComponent"])("el-form-item"),u=Object(o["resolveComponent"])("el-switch"),b=Object(o["resolveComponent"])("el-form"),m=Object(o["resolveComponent"])("el-button"),f=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(f,{title:a.titleMap[a.mode],modelValue:a.visible,"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.visible=e}),width:400,"destroy-on-close":"",onClosed:t[7]||(t[7]=function(t){return e.$emit("closed")})},{footer:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(m,{onClick:t[4]||(t[4]=function(e){return a.visible=!1})},{default:Object(o["withCtx"])((function(){return[c]})),_:1}),Object(o["createVNode"])(m,{type:"primary",loading:a.isSaveing,onClick:t[5]||(t[5]=function(e){return i.submit()})},{default:Object(o["withCtx"])((function(){return[r]})),_:1},8,["loading"])]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(b,{model:a.form,rules:a.rules,ref:"dialogForm","label-width":"100px","label-position":"left"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{label:"描述",prop:"title"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{modelValue:a.form.title,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.form.title=e}),placeholder:"计划任务标题",clearable:""},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(s,{label:"执行类",prop:"handler"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{modelValue:a.form.handler,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.form.handler=e}),placeholder:"计划任务执行类名称",clearable:""},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(s,{label:"定时规则",prop:"cron"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{modelValue:a.form.cron,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.form.cron=e}),placeholder:"请输入Cron定时规则",clearable:""},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(s,{label:"是否启用",prop:"state"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{modelValue:a.form.state,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.form.state=e}),"active-value":"1","inactive-value":"-1"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["title","modelValue"])}var a={emits:["success","closed"],data:function(){return{mode:"add",titleMap:{add:"新增计划任务",edit:"编辑计划任务"},form:{id:"",title:"",handler:"",cron:"",state:"1"},rules:{title:[{required:!0,message:"请填写标题"}],handler:[{required:!0,message:"请填写执行类"}],cron:[{required:!0,message:"请填写定时规则"}]},visible:!1,isSaveing:!1}},mounted:function(){},methods:{open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add";return this.mode=e,this.visible=!0,this},submit:function(){var e=this;this.$refs.dialogForm.validate((function(t){t&&(e.isSaveing=!0,setTimeout((function(){e.isSaveing=!1,e.visible=!1,e.$message.success("操作成功"),e.$emit("success",e.form,e.mode)}),1e3))}))},setData:function(e){this.form.id=e.id,this.form.title=e.title,this.form.handler=e.handler,this.form.cron=e.cron,this.form.state=e.state}}},i=n("6b0d"),d=n.n(i);const s=d()(a,[["render",l]]);t["default"]=s},"5a15":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=function(e){return Object(o["pushScopeId"])("data-v-5382f148"),e=e(),Object(o["popScopeId"])(),e},r=c((function(){return Object(o["createElementVNode"])("h4",null,"执行类",-1)})),l=c((function(){return Object(o["createElementVNode"])("h4",null,"定时规则",-1)})),a={class:"bottom"},i={class:"state"},d=Object(o["createTextVNode"])("准备就绪"),s=Object(o["createTextVNode"])("停用"),u={class:"handler"},b=Object(o["createTextVNode"])("编辑"),m=Object(o["createTextVNode"])("日志"),f=Object(o["createTextVNode"])("删除"),j=c((function(){return Object(o["createElementVNode"])("i",{class:"el-icon-plus"},null,-1)})),O=c((function(){return Object(o["createElementVNode"])("p",null,"添加计划任务",-1)}));function h(e,t,n,c,h,p){var V=Object(o["resolveComponent"])("el-tag"),v=Object(o["resolveComponent"])("el-button"),g=Object(o["resolveComponent"])("el-popconfirm"),C=Object(o["resolveComponent"])("el-dropdown-item"),x=Object(o["resolveComponent"])("el-dropdown-menu"),N=Object(o["resolveComponent"])("el-dropdown"),w=Object(o["resolveComponent"])("el-card"),k=Object(o["resolveComponent"])("el-col"),_=Object(o["resolveComponent"])("el-row"),T=Object(o["resolveComponent"])("el-main"),y=Object(o["resolveComponent"])("save-dialog"),B=Object(o["resolveComponent"])("logs"),E=Object(o["resolveComponent"])("el-drawer");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(T,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(_,{gutter:15},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(h.list,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(k,{xl:6,lg:6,md:8,sm:12,xs:24,key:e.id},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(w,{class:"task task-item",shadow:"hover"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("h2",null,Object(o["toDisplayString"])(e.title),1),Object(o["createElementVNode"])("ul",null,[Object(o["createElementVNode"])("li",null,[r,Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.handler),1)]),Object(o["createElementVNode"])("li",null,[l,Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.cron),1)])]),Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("div",i,["1"==e.state?(Object(o["openBlock"])(),Object(o["createBlock"])(V,{key:0,size:"mini"},{default:Object(o["withCtx"])((function(){return[d]})),_:1})):Object(o["createCommentVNode"])("",!0),"-1"==e.state?(Object(o["openBlock"])(),Object(o["createBlock"])(V,{key:1,size:"mini",type:"info"},{default:Object(o["withCtx"])((function(){return[s]})),_:1})):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",u,[Object(o["createVNode"])(g,{title:"确定立即执行吗？",onConfirm:function(t){return p.run(e)}},{reference:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(v,{type:"primary",icon:"el-icon-caret-right",size:"mini",circle:""})]})),_:2},1032,["onConfirm"]),Object(o["createVNode"])(N,{trigger:"click"},{dropdown:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(x,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(C,{onClick:function(t){return p.edit(e)}},{default:Object(o["withCtx"])((function(){return[b]})),_:2},1032,["onClick"]),Object(o["createVNode"])(C,{onClick:function(t){return p.logs(e)}},{default:Object(o["withCtx"])((function(){return[m]})),_:2},1032,["onClick"]),Object(o["createVNode"])(C,{onClick:function(t){return p.del(e)},divided:""},{default:Object(o["withCtx"])((function(){return[f]})),_:2},1032,["onClick"])]})),_:2},1024)]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(v,{type:"primary",icon:"el-icon-more",size:"mini",circle:"",plain:""})]})),_:2},1024)])])]})),_:2},1024)]})),_:2},1024)})),128)),Object(o["createVNode"])(k,{xl:6,lg:6,md:8,sm:12,xs:24},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(w,{class:"task task-add",shadow:"none",onClick:p.add},{default:Object(o["withCtx"])((function(){return[j,O]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),h.dialog.save?(Object(o["openBlock"])(),Object(o["createBlock"])(y,{key:0,ref:"saveDialog",onSuccess:p.handleSuccess,onClosed:t[0]||(t[0]=function(e){return h.dialog.save=!1})},null,8,["onSuccess"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(E,{title:"计划任务日志",modelValue:h.dialog.logsVisible,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.dialog.logsVisible=e}),size:600,direction:"rtl","destroy-on-close":""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(B)]})),_:1},8,["modelValue"])],64)}n("a434"),n("c740"),n("d3b7"),n("159b"),n("4de4");var p=n("4681"),V=n("d88c"),v={name:"task",components:{saveDialog:p["default"],logs:V["default"]},provide:function(){return{list:this.list}},data:function(){return{dialog:{save:!1,logsVisible:!1},list:[{id:"1",title:"清理服务器缓存",handler:"cleanUpCacheHandler",cron:"59 59 23 * * ? *",state:"1"},{id:"2",title:"自动审核",handler:"automaticAuditHandler",cron:"0 0 * * * ? *",state:"1"},{id:"3",title:"清理未实名用户",handler:"deleteUserHandler",cron:"0 0 0 * * ? *",state:"-1"}]}},mounted:function(){},methods:{add:function(){var e=this;this.dialog.save=!0,this.$nextTick((function(){e.$refs.saveDialog.open()}))},edit:function(e){var t=this;this.dialog.save=!0,this.$nextTick((function(){t.$refs.saveDialog.open("edit").setData(e)}))},del:function(e){var t=this;this.$confirm("确认删除 ".concat(e.title," 计划任务吗？"),"提示",{type:"warning",confirmButtonText:"删除",confirmButtonClass:"el-button--danger"}).then((function(){t.list.splice(t.list.findIndex((function(t){return t.id===e.id})),1)})).catch((function(){}))},logs:function(){this.dialog.logsVisible=!0},run:function(e){this.$message.success("已成功执行计划任务：".concat(e.title))},handleSuccess:function(e,t){"add"==t?(e.id=(new Date).getTime(),this.list.push(e)):"edit"==t&&this.list.filter((function(t){return t.id===e.id})).forEach((function(t){Object.assign(t,e)}))}}},g=(n("b0e5"),n("6b0d")),C=n.n(g);const x=C()(v,[["render",h],["__scopeId","data-v-5382f148"]]);t["default"]=x},a9a3:function(e,t,n){},b0e5:function(e,t,n){"use strict";n("a9a3")},d88c:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c={key:0,style:{color:"#67c23a"}},r=Object(o["createElementVNode"])("i",{class:"el-icon-success"},null,-1),l=Object(o["createTextVNode"])(" 成功"),a=[r,l],i={key:1,style:{color:"#f56c6c"}},d=Object(o["createElementVNode"])("i",{class:"el-icon-error"},null,-1),s=Object(o["createTextVNode"])(" 异常"),u=[d,s],b=Object(o["createTextVNode"])("日志"),m={style:{"font-size":"12px",color:"#999",padding:"20px",background:"#333","font-family":"consolas","line-height":"1.5",overflow:"auto"}};function f(e,t,n,r,l,d){var s=Object(o["resolveComponent"])("el-table-column"),f=Object(o["resolveComponent"])("el-button"),j=Object(o["resolveComponent"])("scTable"),O=Object(o["resolveComponent"])("el-main"),h=Object(o["resolveComponent"])("el-container"),p=Object(o["resolveComponent"])("el-drawer");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{style:{padding:"0 20px"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{ref:"table",data:l.data,stripe:""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{label:"执行时间",prop:"time",width:"200"}),Object(o["createVNode"])(s,{label:"执行结果",prop:"state",width:"100"},{default:Object(o["withCtx"])((function(e){return[200==e.row.state?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",c,a)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",i,u))]})),_:1}),Object(o["createVNode"])(s,{label:"执行日志",prop:"logs",width:"100",fixed:"right"},{default:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])(f,{size:"mini",onClick:function(t){return d.show(e.row)},type:"text"},{default:Object(o["withCtx"])((function(){return[b]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]})),_:1})]})),_:1}),Object(o["createVNode"])(p,{title:"日志",modelValue:l.logsVisible,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.logsVisible=e}),size:500,direction:"rtl","destroy-on-close":""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{style:{padding:"0 20px 20px 20px"}},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("pre",m,Object(o["toDisplayString"])(l.demoLog),1)]})),_:1})]})),_:1},8,["modelValue"])],64)}var j={data:function(){return{logsVisible:!1,demoLog:"2021-07-07 12:35:00 [com.xxl.job.core.thread.JobThread#run]-[124]-[Thread-308]\n----------- xxl-job job execute start -----------\n----------- Param:\n2021-07-07 12:35:00 [com.heronshn.reservation.jobhandler.AqshMasterDataSendHandler#execute]-[31]-[Thread-308] aqshMasterDataSendHandler start\n2021-07-07 12:35:00 [com.heronshn.reservation.data.service.impl.AqshVehicleServiceImpl#send]-[42]-[Thread-308] send 45\n2021-07-07 12:35:00 [com.heronshn.reservation.data.service.impl.AqshVehicleServiceImpl#send]-[45]-[Thread-308] webapi http://127.0.0.1:48080\n2021-07-07 12:35:00 [com.heronshn.reservation.jobhandler.AqshMasterDataSendHandler#execute]-[33]-[Thread-308] aqshMasterDataSendHandler vehicle end\n2021-07-07 12:35:00 [com.heronshn.reservation.jobhandler.AqshMasterDataSendHandler#execute]-[35]-[Thread-308] aqshMasterDataSendHandler stop\n2021-07-07 12:35:00 [com.xxl.job.core.thread.JobThread#run]-[158]-[Thread-308]\n----------- xxl-job job execute end(finish) -----------\n----------- ReturnT:ReturnT [code=200, msg=null, content=null]\n2021-07-07 12:35:00 [com.xxl.job.core.thread.TriggerCallbackThread#callbackLog]-[176]-[Thread-10]\n----------- xxl-job job callback finish.\n\n[Load Log Finish]",data:[{time:"2021-07-07 00:00:00",state:"500",logs:""},{time:"2021-07-06 00:00:00",state:"200",logs:""},{time:"2021-07-05 00:00:00",state:"200",logs:""},{time:"2021-07-04 00:00:00",state:"200",logs:""},{time:"2021-07-03 00:00:00",state:"200",logs:""},{time:"2021-07-02 00:00:00",state:"200",logs:""},{time:"2021-07-01 00:00:00",state:"200",logs:""}]}},mounted:function(){},methods:{show:function(){this.logsVisible=!0}}},O=n("6b0d"),h=n.n(O);const p=h()(j,[["render",f]]);t["default"]=p}}]);