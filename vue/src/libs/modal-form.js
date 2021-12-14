import http from "@/utils/request";
import {
	ref,
	reactive,
	h,
	render,
	createVNode,
	resolveComponent,
	defineComponent,
	extend,
	component,
} from "vue";
import formCreate from "@/components/formCreate";
import { toProps } from "./common.js";

let fApi;
let unique = 1;

const uniqueId = () => ++unique;
// const uniqueId = () => {
//   unique++
//   unique++
// }

// var modalForm =  defineComponent({
// 	render() {
// 		return h('div');
// 	}
// })
// export default modalForm;
// import formCreate from '../form-create'
// import formCreate from '@/components/formCreate/index.js'

//
export default function modalForm(app) {
	return function (formRequestPromise, config = {}) {
		return new Promise((resolve, reject) => {
			formRequestPromise
				.then((data) => {
					data.config.global = {
						upload: {
							props: {
								onSuccess(res, file) {
									if (res.status === 200) {
										console.log(file);
										file.url = res.data.src;
									} else {
										this.$Message.error(res.msg);
									}
								},
							},
						},
					};
					console.log("app", app);

					if (!data.config.form) data.config.form = {};
					if (!data.config.formData) data.config.formData = {};
					data.config.formData = {
						...data.config.formData,
						...config.formData,
					};
					data.config.form.labelWidth =
						data.config.form.labelWidth || "120px";
					var formCreate = h(
						app.component("formCreate"),
						toProps({
							props: {
								rule: data.rule,
								option: {
									onSubmit: (formData) => {
										//  http.post(data.action,formData).then((res) => {
										// 				 done()
										// 	 			this.$message.success(res.message || '提交成功')
										// 	 			resolve(res)
										//  }).catch(err => {
										// 	this.$message.error(err.message || '提交失败')
										// 	reject(err)
										// }).finally(() => {
										// 	instance.confirmButtonLoading = false
										// })
									},
									submitBtn: {
										show: false,
									},
								},
							},
							on: {
								getApi: (e) => {
									fApi = e;
								},
							},
						})
					);

					console.log(formCreate);

					this.$msgbox({
						dangerouslyUseHTMLString: true,
						title: data.title,
						customClass: config.class || "modal-form",
						message: formCreate,
						beforeClose: (action, instance, done) => {
							if (action === "confirm") {
								instance.confirmButtonLoading = true;
								fApi.submit((formData) => {
									http[data.method.toLowerCase()](
										data.action,
										formData
									)
										.then((res) => {
											this.$message.success(
												res.message || "提交成功"
											);
											done();
											resolve(res);
										})
										.finally(() => {
											instance.confirmButtonLoading = false;
										});
								});
								instance.confirmButtonLoading = false;
							} else {
								instance.confirmButtonLoading = false;
								done();
							}
							// fApi.asubmit();
							// if (action === 'confirm') {
							// 	instance.confirmButtonLoading = true
							// 	fApi.submit((formData) => {
							// 		http[data.method.toLowerCase()](data.action, formData).then((res) => {
							// 			done()
							// 			this.$message.success(res.message || '提交成功')
							// 			resolve(res)
							// 		}).catch(err => {
							// 			this.$message.error(err.message || '提交失败')
							// 			reject(err)
							// 		}).finally(() => {
							// 			instance.confirmButtonLoading = false
							// 		})
							// 	}, () => (instance.confirmButtonLoading = false))
							// } else {
							// 	instance.confirmButtonLoading = false
							// 	done()
							// }
						},
					});
				})
				.catch((e) => {
					this.$message.error(e.message);
				});
		});
	};
}
