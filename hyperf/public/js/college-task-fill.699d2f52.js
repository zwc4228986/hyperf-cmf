(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["college-task-fill"],{"07374":function(e,n,t){"use strict";t.r(n);var r=t("7a23");function a(e,n,t,a,s,o){var c=Object(r["resolveComponent"])("el-header"),i=Object(r["resolveComponent"])("el-main"),u=Object(r["resolveComponent"])("el-container");return Object(r["openBlock"])(),Object(r["createBlock"])(u,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c),Object(r["createVNode"])(i,{class:"nopadding"})]})),_:1})}var s=t("1da1"),o=(t("d81d"),t("a15b"),t("96cf"),t("cf45")),c={name:"setting:code",components:{},data:function(){return{apiObj:this.$HTTP().url("/admin/task/lists"),tableData:[],queryParams:{},selection:[]}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$route.meta.params&&(console.log(e.$route.meta.params,"$route"),Object(o["b"])(e.queryParams,JSON.parse(e.$route.meta.params)));case 1:case"end":return n.stop()}}),n)})))()},methods:{onFill:function(e){var n=e.id;this.$router.push({path:"",query:n})},onAdd:function(){this.$modalForm(this.$HTTP().post("/admin/task/form")).then((function(e){}))},onDelivery:function(e){var n=e.id;this.$modalForm(this.$HTTP().params({id:n}).post("/admin/task/delivery-form")).then((function(e){}))},onEdit:function(e){var n=e.id;this.$modalForm(this.$HTTP().params({id:n}).post("/admin/task/form")).then((function(e){}))},success:function(e){console.log(e),this.$HTTP().post("/import/school",e).then((function(e){}))},selectionChange:function(e){this.selection=e},confirm:function(){this.handleSuccess()},handleGenCodes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log(e.$refs.preview);case 1:case"end":return n.stop()}}),n)})))()},generateCode:function(e){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.$message.info("代码生成下载中，请稍后"),t.next=3,n.$API.generate.generate(e).then((function(e){e.message&&!e.success?n.$message.error(e.message):(n.$TOOL.download(e),n.$message.success("代码生成成功"))}));case 3:case"end":return t.stop()}}),t)})))()},handleDeleteBatch:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(e.selection.length>0)){n.next=6;break}return t=e.selection.map((function(e){return e.id})),n.next=4,e.handleDelete(t.join(","));case 4:n.next=7;break;case 6:e.$message.error("请选择要删除的项");case 7:case"end":return n.stop()}}),n)})))()},handleDelete:function(e){var n=this;this.$confirm("此操作会将数据物理删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.$API.generate.deletes(e).then((function(e){n.$message.success(e.message),n.handleSuccess()}))}))},handleSync:function(e){var n=this;this.$confirm("此操作会导致字段设置信息丢失，确定同步吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.$API.generate.sync(e).then((function(e){e.success&&n.$message.success(e.message)}))}))},handlerSearch:function(){this.handleSuccess()},resetSearch:function(){this.queryParams={table_name:void 0},this.handleSuccess()},handleSuccess:function(){this.$refs.table.upData(this.queryParams)}}},i=t("6b0d"),u=t.n(i);const h=u()(c,[["render",a]]);n["default"]=h}}]);