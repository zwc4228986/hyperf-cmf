(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["college-task-lists"],{"1f79":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"left-panel"},c=Object(r["createTextVNode"])(" 新增任务 "),o=Object(r["createTextVNode"])(" 填报 "),i=Object(r["createTextVNode"])(" 编辑 "),s=Object(r["createTextVNode"])(" 派送 ");function u(e,t,n,u,l,d){var h=Object(r["resolveComponent"])("el-button"),m=Object(r["resolveComponent"])("el-header"),b=Object(r["resolveComponent"])("el-table-column"),f=Object(r["resolveComponent"])("yjTable"),p=Object(r["resolveComponent"])("el-main"),j=Object(r["resolveComponent"])("el-container");return Object(r["openBlock"])(),Object(r["createBlock"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,null,{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",a,[Object(r["createVNode"])(h,{icon:"el-icon-plus",type:"primary",onClick:t[0]||(t[0]=function(e){return d.onAdd()})},{default:Object(r["withCtx"])((function(){return[c]})),_:1})])]})),_:1}),Object(r["createVNode"])(p,{class:"nopadding"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{ref:"yjTable",data:l.tableData,apiObj:l.apiObj,params:l.queryParams},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{type:"selection",width:"50"}),Object(r["createVNode"])(b,{label:"ID",prop:"id",width:"150"}),Object(r["createVNode"])(b,{label:"填报人",prop:"system_admin.nickname",width:"150"}),Object(r["createVNode"])(b,{label:"准考证",prop:"ticket",width:"150"}),Object(r["createVNode"])(b,{label:"省份",prop:"tables_name",width:"150"}),Object(r["createVNode"])(b,{label:"姓名",prop:"username",width:"150"}),Object(r["createVNode"])(b,{label:"手机号",prop:"mobile",width:"150"}),Object(r["createVNode"])(b,{label:"成绩",prop:"score",width:"150"}),Object(r["createVNode"])(b,{label:"来源",prop:"tables_name",width:"150"}),Object(r["createVNode"])(b,{label:"状态",prop:"status",width:"150"}),Object(r["createVNode"])(b,{label:"操作",fixed:"right",align:"right",width:"150"},{default:Object(r["withCtx"])((function(e){return[e.row.delivery_id>0?(Object(r["openBlock"])(),Object(r["createBlock"])(h,{key:0,type:"text",onClick:function(t){return d.onFill(e.row)}},{default:Object(r["withCtx"])((function(){return[o]})),_:2},1032,["onClick"])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(h,{type:"text",onClick:function(t){return d.onEdit(e.row)}},{default:Object(r["withCtx"])((function(){return[i]})),_:2},1032,["onClick"]),Object(r["createVNode"])(h,{type:"text",onClick:function(t){return d.onDelivery(e.row)}},{default:Object(r["withCtx"])((function(){return[s]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data","apiObj","params"])]})),_:1})]})),_:1})}var l=n("1da1"),d=(n("d81d"),n("a15b"),n("96cf"),n("cf45")),h={name:"setting:code",components:{},data:function(){return{apiObj:this.$HTTP().url("/admin/task/lists"),tableData:[],queryParams:{},selection:[]}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$route.meta.params&&(console.log(e.$route.meta.params,"$route"),Object(d["b"])(e.queryParams,JSON.parse(e.$route.meta.params)));case 1:case"end":return t.stop()}}),t)})))()},methods:{onFill:function(e){var t=e.id;this.$router.push({path:"/college/task/fill",query:"id="+t})},onAdd:function(){this.$modalForm(this.$HTTP().post("/admin/task/form")).then((function(e){}))},onDelivery:function(e){var t=e.id;this.$modalForm(this.$HTTP().params({id:t}).post("/admin/task/delivery-form")).then((function(e){}))},onEdit:function(e){var t=e.id;this.$modalForm(this.$HTTP().params({id:t}).post("/admin/task/form")).then((function(e){}))},success:function(e){console.log(e),this.$HTTP().post("/import/school",e).then((function(e){}))},selectionChange:function(e){this.selection=e},confirm:function(){this.handleSuccess()},handleGenCodes:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e.$refs.preview);case 1:case"end":return t.stop()}}),t)})))()},generateCode:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.$message.info("代码生成下载中，请稍后"),n.next=3,t.$API.generate.generate(e).then((function(e){e.message&&!e.success?t.$message.error(e.message):(t.$TOOL.download(e),t.$message.success("代码生成成功"))}));case 3:case"end":return n.stop()}}),n)})))()},handleDeleteBatch:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.selection.length>0)){t.next=6;break}return n=e.selection.map((function(e){return e.id})),t.next=4,e.handleDelete(n.join(","));case 4:t.next=7;break;case 6:e.$message.error("请选择要删除的项");case 7:case"end":return t.stop()}}),t)})))()},handleDelete:function(e){var t=this;this.$confirm("此操作会将数据物理删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$API.generate.deletes(e).then((function(e){t.$message.success(e.message),t.handleSuccess()}))}))},handleSync:function(e){var t=this;this.$confirm("此操作会导致字段设置信息丢失，确定同步吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$API.generate.sync(e).then((function(e){e.success&&t.$message.success(e.message)}))}))},handlerSearch:function(){this.handleSuccess()},resetSearch:function(){this.queryParams={table_name:void 0},this.handleSuccess()},handleSuccess:function(){this.$refs.table.upData(this.queryParams)}}},m=n("6b0d"),b=n.n(m);const f=b()(h,[["render",u]]);t["default"]=f}}]);