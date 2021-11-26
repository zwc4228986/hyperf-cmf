import {is,deepExtend,getSlot,deepCopy,hasProperty,mergeProps,$set,extend,_defineProperty,_objectSpread2,upper,_toConsumableArray,toLine,uniqueId,toCase,lower} from "./common";
import {nameProp,BaseParser} from "./Prop";
var {ElInput,ElSelect} = require('element-plus')

var vue = require('vue');
import {makeSlotBag} from "./makeSlotBag";



function toProps(rule) {
    var prop = _objectSpread2({}, rule.props || {});
    Object.keys(rule.on || {}).forEach(function (k) {
        var name = "on".concat(upper(k));
        if (Array.isArray(prop[name])) {
            prop[name] = [].concat(_toConsumableArray(prop[name]), [rule.on[k]]);
        } else if (prop[name]) {
            prop[name] = [prop[name], rule.on[k]];
        } else {
            prop[name] = rule.on[k];
        }
    });

    prop.key = rule.key;
    prop.ref = rule.ref;
    prop["class"] = rule["class"];
    prop.style = rule.style;
    if (prop.slot) delete prop.slot;
    return prop;
}

function CreateNodeFactory() {
    var aliasMap = {};
    var CreateNode = function () {};
    extend(CreateNode.prototype,{
        make:function (tag,data,children) {
            console.log('make',tag, toProps(data), children)
            return this.h(tag, toProps(data), children);
        },
        h: function h(tag, data, children) {
            return vue.createVNode(vue.getCurrentInstance().appContext.config.isNativeTag(tag) ? tag : vue.resolveComponent(tag), data, children);
        },
        aliasMap: aliasMap
    })
    extend(CreateNode,{
        aliasMap: aliasMap,
        alias: function alias(_alias, name) {
            aliasMap[_alias] = name;
        },
        use: function use(nodes) {
            Object.keys(nodes).forEach(function (k) {
                var line = toLine(k);  //button
                var lower = toString(k).toLocaleLowerCase();  //button
                var v = nodes[k];    //el-button

                [k, line, lower].forEach(function (n) {
                    CreateNode.alias(k, v);

                    CreateNode.prototype[n] = function (data, children) {
                        return this.make(v, data, children);
                    };


                });
            });
        }
    })

    return CreateNode;
}

var row = {
    name: 'FcRow',
    render: function render(_, ctx) {
        return ctx.vNode.col({
            props: {
                span: 24
            }
        }, [ctx.vNode.row(ctx.prop, _)]);
    }
};

var NAME$8 = 'fcRadio';
var Radio = vue.defineComponent({
	name: NAME$8,
	inheritAttrs: false,
	props: {
		modelValue: {
			type: [String, Number],
			"default": function _default() {
				return [];
			}
		},
		type: String
	},
	emits: ['update:modelValue'],
	setup: function setup(props, _) {
		var _toRefs = vue.toRefs(vue.inject('formCreateInject')),
			options = _toRefs.options;

		var trueValue = vue.ref([]);
		var value = vue.toRef(props, 'modelValue');

		var _options = vue.computed(function () {
			return Array.isArray(options) ? options : [];
		});

		var update = function update() {
			trueValue.value = _options.value.filter(function (opt) {
				return opt.value === value.value;
			}).reduce(function (initial, opt) {
				return opt.label;
			}, '');
		};

		update();
		return {
			options: _options,
			trueValue: trueValue,
			value: value,
			onInput: function onInput(n) {
				_.emit('update:modelValue', _options.value.filter(function (opt) {
					return opt.label === n;
				}).reduce(function (initial, opt) {
					return opt.value;
				}, ''));
			},
			update: update
		};
	},
	watch: {
		modelValue: function modelValue() {
			this.update();
		}
	},
	render: function render() {
		// var _this$$slots$default,
		// 	_this$$slots,
		// 	_this = this;
		// var name = this.type === 'button' ? 'ElRadioButton' : 'ElRadio';
		// var Type = vue.resolveComponent(name);
		// return vue.createVNode(vue.resolveComponent("ElRadioGroup"), vue.mergeProps(this.$attrs, {
		// 	"modelValue": this.trueValue,
		// 	"onUpdate:modelValue": this.onInput
		// }), _objectSpread2({
		// 	"default": function _default() {
		// 		return [_this.options.map(function (opt, index) {
		// 			var props = _objectSpread2({}, opt);
		// 			delete props.value;
		// 			return vue.createVNode(Type, vue.mergeProps(props, {
		// 				"key": name + index + opt.value
		// 			}), null);
		// 		}), (_this$$slots$default = (_this$$slots = _this.$slots)["default"]) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default.call(_this$$slots)];
		// 	}
		// }, getSlot(this.$slots, ['default'])));
	}
});


var parsers = [row];

var PRE = 'el';
var alias = {
    button: PRE + '-button',
    icon: 'i',
    slider: PRE + '-slider',
    rate: PRE + '-rate',
    upload: 'fc-upload',
    cascader: PRE + '-cascader',
    popover: PRE + '-popover',
    tooltip: PRE + '-tooltip',
    colorPicker: PRE + '-colorPicker',
    timePicker: PRE + '-time-picker',
    timeSelect: PRE + '-time-select',
    datePicker: PRE + '-date-picker',
    'switch': PRE + '-switch',
    select: 'fc-select',
    checkbox: 'fc-checkbox',
    radio: 'fc-radio',
    inputNumber: PRE + '-input-number',
    number: PRE + '-input-number',
    input: PRE + '-input',
    formItem: PRE + '-form-item',
    form: PRE + '-form',
    frame: 'fc-frame',
    col: PRE + '-col',
    row: PRE + '-row',
    tree: 'fc-tree',
    autoComplete: PRE + '-autocomplete',
    auto: PRE + '-autocomplete',
    group: 'fc-group',
    object: 'fc-sub-form',
    subForm: 'fc-sub-form'
};


function RuleContext(handle, rule) {
    console.log(rule);
    var id = uniqueId();
    var isInput = !!rule.field;
    extend(this, {
        id: id,
        ref: id,
        rule: rule,
        watch: [],
        wrapRef: id + 'fi',
        name: rule.name,
        prop: _objectSpread2({}, rule),
        el: undefined,
        field: rule.field || undefined,
        defaultValue: isInput ? deepCopy(rule.value) : undefined,
    });
    this.updateKey()
    this.updateType();
}

var CreateNode = CreateNodeFactory();


extend(RuleContext.prototype,{
    updateType: function updateType() {
        this.originType = this.rule.type;
        this.type = toCase(this.rule.type);
    },
    updateKey: function updateKey(flag) {
        this.key = uniqueId();
        flag && this.parent && this.parent.updateKey(flag);
    },
    setParser: function setParser(parser) {
        this.parser = parser;

        parser.init(this);
    },
    defaultRender: function defaultRender(ctx, children) {
        var prop = ctx.prop;
        console.log('makedefaultRender',prop)
        if (CreateNode.prototype[ctx.type]) return CreateNode.prototype[ctx.type](prop, children);
        // if (this.vNode[ctx.originType]) return this.vNode[ctx.originType](prop, children);
        return CreateNodeFactory().prototype.make(lower(ctx.originType), prop, children);
    },
})

var NAME$9 = 'FcFragment';
var fragment = vue.defineComponent({
    name: NAME$9,
    inheritAttrs: false,
    props: ['formCreateInject'],
    setup: function setup(props) {
        var data = vue.toRef(props, 'formCreateInject'); // 获取这个props['formCreateInject']
        var $inject = vue.reactive(_objectSpread2({}, data.value));
        vue.watch(data, function () {
            extend($inject, data.value);
        });
        vue.provide('formCreateInject', $inject);
    },
    render: function render() {
        console.log('default11',this.$slots["default"]());

        return this.$slots["default"]();
    }
});

var NAME$7 = 'fcSelect';
var Select = vue.defineComponent({
	name: NAME$7,
	inheritAttrs: false,
	props: {
		modelValue: {
			type: Array,
			"default": function _default() {
				return [];
			}
		},
		type: String
	},
	components:{
		ElSelect
	},
	emits: ['update:modelValue'],
	setup: function setup(props) {
		var _toRefs = vue.toRefs(vue.inject('formCreateInject')),
			options = _toRefs.options;

		var value = vue.toRef(props, 'modelValue');

		var _options = vue.computed(function () {
			return Array.isArray(options) ? options : [];
		});

		return {
			options: _options,
			value: value
		};
	},
	render: function() {
		var _this = this,
			_this$$slots$default,
			_this$$slots;

		console.log(_objectSpread2({
			"default": function _default() {
				return [_this.options.map(function (props, index) {
					return vue.createVNode(vue.resolveComponent("ElOption"), vue.mergeProps(props, {
						"key": '' + index + props.value
					}), null);
				}), (_this$$slots$default = (_this$$slots = _this.$slots)["default"]) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default.call(_this$$slots)];
			}
		}, getSlot(this.$slots, ['default'])));


		return vue.createVNode(vue.resolveComponent("ElSelect"), vue.mergeProps(this.$attrs, {
			"modelValue": this.value,
			"onUpdate:modelValue": function onUpdateModelValue(v) {
				return _this.$emit('update:modelValue', v);
			}
		}));
	}
});


function FormCreate(vm) {  //4776

    var components = _defineProperty({}, fragment.name, fragment);  //定义一个 FcFragment

    function use(fn, opt) {
        // if (is.Function(fn.install)) fn.install(create, opt);else if (is.Function(fn)) fn(create, opt);
        // return this;
    }

    var _this = this;
    extend(this,{
		formData: vue.reactive({}),
        fieldCtx: {},
        ctxs: {},
        appendData: vue.reactive({}),
        parsers: {},
        bindParser: function bindParser(ctx) {
            ctx.setParser(BaseParser);
        },
		api:function(){
			return {
				asubmit:()=>{
					console.log(111);
					this.vm.emit('submit','111111',{});
				}
			};
		},
        parser:function(){
            var data = nameProp.apply(void 0, arguments);
            // if (!data.id || !data.prop) return;
            var name = toCase(data.id);
            var parser = data.prop;
            var base = parser.merge === true ? parsers[name] : undefined;
            this.parsers[name] = _objectSpread2(_objectSpread2({}, base || BaseParser), parser);
            extend(vm.appContext.components, this.parsers);
            // console.log("parser",this.parsers);
            // maker[name] = creatorFactory(name);
            // parser.maker && extend(maker, parser.maker);
        },
		component:function(id, component) {
			var name;
			if (is.String(id)) {
				name = toCase(id);
				if (component === undefined) {
					return components[name];
				}
			} else {
				name = toCase(id.name);
				component = id;
			}
			if (!name || !component) return;
			components[name] = component;
		},
        nameCtx: {},
        sort: [],
        CreateNode: CreateNode,
        rules:vm.props.rule,
        use:use,
        vm:vm,
        options: {form:{}},
        init:function () {   //4812
            this.appendData = _objectSpread2(this.vm.props.modelValue, this.appendData);
            console.log('appendData',this.appendData);

            this.loadRule()
            this.initOptions(this.vm.option || {});
            this.clearCacheAll();
            this.$r = function () {
                return this.renderRule.apply(this, arguments);
            };
        },
        renderRule: function(rule, children, origin) {
            var type;
            type = rule.type;
            if (type) {
                type = toCase(rule.type);
                var alias = this.CreateNode.aliasMap[type];
                if (alias) type = toCase(alias);
            }
            var slotBag = makeSlotBag();
            return this.CreateNode.prototype.make(type,rule,slotBag.mergeBag(children).getSlots())
        },
        loadRule(){
          let rules = this.rules;

          var _this = this;
            rules.map(function (_rule, index) {
                var ctx;
                ctx = new RuleContext(_this,_this.parseRule(_rule));
                console.log('_rule',ctx);

                _this.bindParser(ctx);
                _this.sort.push(ctx.id);
                console.log('_rule',_this.sort);
                _this.setCtx(ctx);
                return ctx;
            });
        },
         baseRule() {
            return {
                props: {},
                // on: {},
                options: [],
                children: [],
                hidden: false,
                display: true,
                value: undefined
            };
         },
        parseRule(_rule){
            // var def = this.baseRule();
            // console.log(def);


            this.fullRule(_rule)
            this.appendValue(_rule);
            // console.log(_rule);
            // die;
            //
            console.log('_rule',_rule);

            return _rule;
        },
        appendValue: function appendValue(rule) {
			console.log(this.appendData, rule.field)
            if (!rule.field || !hasProperty(this.appendData, rule.field)) return;
            rule.value = this.appendData[rule.field];
            delete this.appendData[rule.field];
        },
        fullRule(rule) {
            var def = this.baseRule();
			console.log(rule);
            Object.keys(def).forEach(function (k) {

                if (!hasProperty(rule, k)) rule[k] = def[k];
            });
            console.log(rule);
            return rule;
        },
         setCtx(ctx){
             var id = ctx.id,
                 field = ctx.field,
                 name = ctx.name,
                 rule = ctx.rule;
             this.ctxs[id] = ctx;
             this.setIdCtx(ctx, field, 'field');
             this.setFormData(ctx, ctx.parser.toFormValue(rule.value, ctx));
        },
        setIdCtx: function setIdCtx(ctx, key, type) {
            var field = "".concat(type, "Ctx");
            if (!this[field][key]) {
                this[field][key] = [ctx];
            } else {
                this[field][key].push(ctx);
            }
        },
        $handleRender(){
            if(this.vm.setupState.unique>0){
                return this.$renderRender()
            }
        },
        $renderRender(){
            var _this = this;
            this.beforeRender(); //5368

            var slotBag = makeSlotBag();


            this.sort.forEach(function (k) {

                _this.renderSlot(slotBag, _this.ctxs[k]);
            });

            // console.log(this.$manager.render,'2333');
            return this.$managerRender(slotBag);
        },
        beforeRender(){
            var key = this.key,
                ref = this.ref;

            extend(this.rule, {
                key: key,
                ref: ref
            });
            extend(this.rule.props, {
                model: this.formData
            });

        },
        $managerRender(children){
                var _this2 = this;
                if (children.slotLen()) {
                    children.setSlot(undefined, function () {
                        return _this2.makeFormBtn();
                    });
                }

                console.log(this.rule,'$managerRender');
                return this.$r(this.rule, [this.makeRow(children)]);
        },
        makeFormBtn(){
            var vn = [];
            vn.push(this.makeSubmitBtn());
            var item = this.$r({
                type: 'formItem',
                key: "".concat(this.key, "fb")
            }, vn);
            return this.$r({
                type: 'col',
                props: {
                    span: 24
                },
                key: "".concat(this.key, "fc")
            }, [item]);
        },
        makeSubmitBtn: function makeSubmitBtn() {
            var text = '提交';
            var submitBtn = _objectSpread2({}, this.options.submitBtn);

            return this.$r({
                type: 'button',
                props: submitBtn,
                style: {
                    width: submitBtn.width
                },
                on: {
                    click: function click() {
                        console.log(111111);
                        // fApi.submit();
                        // var fApi = _this6.$handle.api;
                        // submitBtn.click ? submitBtn.click(fApi) : fApi.submit();
                    }
                },
                key: "".concat(this.key, "b1")
            }, [text]);
        },
        makeRow: function makeRow(children) {
            var row = this.options.row || {};
            return this.$r({
                type: 'row',
                props: row,
                "class": row["class"],
                key: "".concat(this.key, "row")
            }, children);
        },
		makeWrap:function(ctx, children){

			var _this3 = this;
			var rule = ctx.prop;
			var uni = "".concat(this.key).concat(ctx.key);

			var isTitle = true;
			var col = rule.col;
			var labelWidth = 100;
			return this.$r(mergeProps([rule.wrap, {
				props: _objectSpread2(_objectSpread2({
					labelWidth: labelWidth === void 0 ? labelWidth : toString(labelWidth)
				}, rule.wrap || {}), {}, {
					prop: ctx.id,
					rules: rule.validate
				}),
				"class": rule.className,
				key: ctx.wrapRef,
				ref: ctx.wrapRef,
				type: 'formItem'
			}]), _objectSpread2({
				"default": function _default() {
					return children;
				}
			}, isTitle ? {
				label: function label() {
					return 'w1w1w1';
				}
			} : {}))
		},

        renderSlot(slotBag, ctx, parent){
            slotBag.setSlot(ctx.rule.slot, this.renderCtx(ctx, parent));
        },
        clearCacheAll: function clearCacheAll() {
            this.cache = {};
        },
        renderChildren: function renderChildren(ctx) {
            return {};
        },
        renderCtx(ctx, parent){
            console.log('makerenderCtx',!this.cache[ctx.id])
            var rule = ctx.rule;
            var _this = this;

            if (!this.cache[ctx.id]) {
                console.log(ctx);
                this.tidyRule(ctx)
				this.ctxProp(ctx);
				// this.setCache(ctx, undefined, parent);
                var vn = function vn() {
                    return _this.item(ctx, function () {
                        var _vn = ctx.parser.render(_this.renderChildren(ctx), ctx);
						_vn = _this.makeWrap(ctx, _vn);

						// if (!(!ctx.input && is.Undef(prop["native"])) && prop["native"] !== true) {
						//
						// }

                        // _this.renderSides(_vn,ctx)
                        return _vn;
                    });
                };
                this.setCache(ctx, vn, parent);
                ctx._vnode = vn;
                return vn;
            }

            return this.getCache(ctx);
        },
        tidyRule: function tidyRule(_ref) {
            var prop = _ref.prop;
            // tidy(prop, 'title');
            // tidy(prop, 'info');
            return prop;
        },
		ctxProp:function(ctx,custom){
		    console.log('ctxProp');

			var _this6 = this;
			var ref = ctx.ref,
				key = ctx.key,
				rule = ctx.rule;

			var props = [{
				ref: ref,
                key: rule.key || "".concat(key, "fc"),
				// key: rule.key || "".concat(key, "fc"),
				slot: undefined,
			}];

				var field = this.getModelField(ctx);
				console.log('default11 ',field,_this.getFormData(ctx));
				props.push({
					on: _defineProperty({}, "update:".concat(field), function update(value) {
						_this6.onInput(ctx, value);
                        // this.emit("update:modelValue",value);
                        // console.log('update',value);
                        // console.log('make',field,_this.getFormData(ctx),_this.formData,ctx);
						// console.log(_this6.formData)
                        return;
					}),
					props: _defineProperty({}, field,_this.getFormData(ctx))
				});

			mergeProps(props, ctx.prop);

			return ctx.prop;
		},
		getFormData: function getFormData(ctx) {
		    console.log(this.formData[ctx.id]);
			return this.formData[ctx.id];
		},
		onInput: function onInput(ctx, value) {
			var val = value;
			// if (ctx.input && (this.isQuote(ctx, val = ctx.parser.toValue(value, ctx)) || this.isChange(ctx, value))) {
			this.setValue(ctx, val, value);
			// }
		},
		setValue: function setValue(ctx, value, formValue, setFlag) {
			// if (ctx.deleted) return;
			ctx.rule.value = value;

			this.changeStatus = true;
			// this.nextRefresh();
			this.clearCache(ctx);
			this.setFormData(ctx, formValue);
			// this.syncValue();
			// this.valueChange(ctx, value);
			// this.vm.emit('change', ctx.field, value, ctx.origin, this.api, setFlag);
			// this.effect(ctx, 'value');
		},
		syncValue: function syncValue() {
			if (this.deferSyncFn) {
				return this.deferSyncFn.sync = true;
			}
			this.vm.setupState.updateValue(_objectSpread2({}));
		},
		setFormData: function setFormData(ctx, value) {
			$set(this.formData, ctx.id, value);
		},

		getModelField(ctx){
			return 'modelValue';
		},
		clearCache: function clearCache(ctx) {
			// if (!this.cache[ctx.id]) {
			// 	ctx.parent && this.clearCache(ctx.parent);
			// 	return;
			// }
			// if (this.cache[ctx.id].use === true || this.cache[ctx.id].parent) {

            // if (this.cache[ctx.id].use === true || this.cache[ctx.id].parent) {
                this.refresh();
            // }
            this.cache[ctx.id] = null;

            // }
			//
			// var parent = this.cache[ctx.id].parent;
			// console.log(this.cache);
			// parent && this.clearCache(parent);
		},
        refresh(){
		    // console.log('11111',this.vm.setupState.refresh());

            this.vm.setupState.refresh();
        },
        // renderSides(vn,ctx,temp){
        //     var prop = ctx[temp ? 'rule' : 'prop'];
        //     console.log('renderSides',prop);
        //     console.log([this.renderRule(prop.prefix), vn, this.renderRule(prop.suffix)]);
        //
        // },
        setCache: function setCache(ctx, vnode, parent) {
            this.cache[ctx.id] = {
                vnode: vnode,
                use: false,
                parent: parent,
                slot: ctx.rule.slot
            };
        },
        getCache: function getCache(ctx) {
            var cache = this.cache[ctx.id];
            cache.use = true;
            return cache.vnode;
        },
        item: function item(ctx, vn) {
		    console.log('item',ctx)
            return this.CreateNode.prototype.h('FcFragment', {
                key: ctx.key,
                formCreateInject: this.injectProp(ctx)
            }, vn);
        },
        initOptions(options){
            this.updateOptions(options)
        },
        injectProp: function injectProp(ctx) {
            var _this5 = this;
            return {
                api: "",
                form:"",
                field: ctx.field,
                options: ctx.prop.options,
                children: ctx.rule.children,
                rule: ctx.rule,
                prop: function () {
                    var temp = _objectSpread2({}, ctx.prop);
                    return temp.on = temp.on ? _objectSpread2({}, temp.on) : {}, temp;
                }()
            };
        },
        updateOptions(options){
            this.update();
        },
        update(){
            var form = this.options.form;
            this.rule = {
                props: _objectSpread2({}, form),
                on: {
                    submit: function submit(e) {
                        e.preventDefault();
                    }
                },
                "class": [form.className, form["class"], 'form-create'],
                style: form.style,
                type: 'form'
            };
        }
    })

    var maker = {};

    parsers.forEach((parser)=>{
        this.parser(parser);
    });
    Object.keys(maker).forEach(function (name) {
        this.maker[name] = maker[name];
    });

    CreateNode.use({
        fragment: 'fcFragment'
    });

    extend(this,{
        install:()=>{
        	[Radio,Select].forEach(function (component) {
				_this.component(component.name, component);
			});
            CreateNode.use(alias);
            console.log('components',components);
			extend(vm.appContext.components, components);
        }
    })




}




export  {
    FormCreate
}