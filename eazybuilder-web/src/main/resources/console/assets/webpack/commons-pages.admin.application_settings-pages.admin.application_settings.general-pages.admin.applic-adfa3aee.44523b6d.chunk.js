(this.webpackJsonp=this.webpackJsonp||[]).push([[9],{"47in":function(t,e,i){"use strict";var n=i("0zRR"),r=i("/Szx"),o=i("o/E4"),a=i("BrvI"),s=i("9aS3"),u=i("Ddgg"),c=i("Vxxt"),l=i("ZKBa"),h=i("Tu1i"),p=i("QlUp"),d=i("Qo4I"),f=i("xy9X"),b=i("DXSV"),v=i("6iM1"),m=i("H1r6"),y=i("zlPX"),O=i("NSGy"),g=i("7bmO");function j(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var w="__bv__visibility_observer",V=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.callback=i.callback,this.margin=i.margin||0,this.once=i.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver(n)}var e,i,n;return e=t,(i=[{key:"createObserver",value:function(t){var e=this;if(this.observer&&this.stop(),!this.doneOnce&&Object(a.e)(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(t){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}t.context.$nextTick((function(){Object(o.B)((function(){e.observer&&e.observer.observe(e.el)}))}))}}},{key:"handler",value:function(t){var e=t?t[0]:{},i=Boolean(e.isIntersecting||e.intersectionRatio>0);i!==this.visible&&(this.visible=i,this.callback(i),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}])&&j(e.prototype,i),n&&j(e,n),t}(),$=function(t){var e=t[w];e&&e.stop&&e.stop(),delete t[w]},x=function(t,e,i){var n=e.value,r=e.modifiers,o={margin:"0px",once:!1,callback:n};Object(g.i)(r).forEach((function(t){y.c.test(t)?o.margin="".concat(t,"px"):"once"===t.toLowerCase()&&(o.once=!0)})),$(t),t[w]=new V(t,o,i),t[w]._prevModifiers=Object(g.b)(r)},S={bind:x,componentUpdated:function(t,e,i){var n=e.value,r=e.oldValue,o=e.modifiers;o=Object(g.b)(o),!t||n===r&&t[w]&&Object(O.a)(o,t[w]._prevModifiers)||x(t,{value:n,modifiers:o},i)},unbind:function(t){$(t)}};function k(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function B(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?k(Object(i),!0).forEach((function(e){P(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function P(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var R=r.a.extend({name:n.O,directives:{"b-visible":S},mixins:[m.a,b.a,v.a,c.a,h.a,p.a,d.a,l.a,f.a],props:{rows:{type:[Number,String],default:2},maxRows:{type:[Number,String]},wrap:{type:String,default:"soft"},noResize:{type:Boolean,default:!1},noAutoShrink:{type:Boolean,default:!1}},data:function(){return{heightInPx:null}},computed:{computedStyle:function(){var t={resize:!this.computedRows||this.noResize?"none":null};return this.computedRows||(t.height=this.heightInPx,t.overflowY="scroll"),t},computedMinRows:function(){return Object(s.b)(Object(u.c)(this.rows,2),2)},computedMaxRows:function(){return Object(s.b)(this.computedMinRows,Object(u.c)(this.maxRows,0))},computedRows:function(){return this.computedMinRows===this.computedMaxRows?this.computedMinRows:null},computedAttrs:function(){var t=this.disabled,e=this.required;return{id:this.safeId(),name:this.name||null,form:this.form||null,disabled:t,placeholder:this.placeholder||null,required:e,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,rows:this.computedRows,wrap:this.wrap||null,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return B(B({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{localValue:function(){this.setHeight()}},mounted:function(){this.setHeight()},methods:{visibleCallback:function(t){t&&this.$nextTick(this.setHeight)},setHeight:function(){var t=this;this.$nextTick((function(){Object(o.B)((function(){t.heightInPx=t.computeHeight()}))}))},computeHeight:function(){if(this.$isServer||!Object(a.f)(this.computedRows))return null;var t=this.$el;if(!Object(o.u)(t))return null;var e=Object(o.k)(t),i=Object(u.b)(e.lineHeight,1),n=Object(u.b)(e.borderTopWidth,0)+Object(u.b)(e.borderBottomWidth,0),r=Object(u.b)(e.paddingTop,0)+Object(u.b)(e.paddingBottom,0),c=n+r,l=i*this.computedMinRows+c,h=Object(o.m)(t,"height")||e.height;Object(o.F)(t,"height","auto");var p=t.scrollHeight;Object(o.F)(t,"height",h);var d=Object(s.b)((p-r)/i,2),f=Object(s.c)(Object(s.b)(d,this.computedMinRows),this.computedMaxRows),b=Object(s.b)(Object(s.a)(f*i+c),l);return this.noAutoShrink&&Object(u.b)(h,0)>b?h:"".concat(b,"px")}},render:function(t){return t("textarea",{ref:"input",class:this.computedClass,style:this.computedStyle,directives:[{name:"b-visible",value:this.visibleCallback,modifiers:{640:!0}}],attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners})}}),D=i("Pyw5");function z(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function M(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function I(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?M(Object(i),!0).forEach((function(e){z(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):M(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var C={prop:"value",event:"input"};const T={components:{BFormTextarea:R},inheritAttrs:!1,model:C,props:{value:{type:String,required:!1,default:""},noResize:{type:Boolean,required:!1,default:!0},submitOnEnter:{type:Boolean,required:!1,default:!1}},computed:{listeners:function(){var t=this;return I(I({},this.$listeners),{},{input:function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];t.$emit.apply(t,["update"].concat(i))},update:function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];t.$emit.apply(t,[C.event].concat(i))}})},keypressEvent:function(){return this.submitOnEnter?"keyup":null}},methods:{handleKeyPress:function(t){13===t.keyCode&&(t.metaKey||t.ctrlKey)&&this.$emit("submit")}}};const E=i.n(D)()({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-form-textarea",t._g(t._b({staticClass:"gl-form-input gl-form-textarea",attrs:{"no-resize":t.noResize,value:t.value},nativeOn:t._d({},[t.keypressEvent,function(e){return t.handleKeyPress(e)}])},"b-form-textarea",t.$attrs,!1),t.listeners))},staticRenderFns:[]},void 0,T,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=E},QlUp:function(t,e,i){"use strict";var n=i("BrvI");e.a={props:{state:{type:Boolean,default:null}},computed:{computedState:function(){return Object(n.b)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null}}}},Qo4I:function(t,e,i){"use strict";var n=i("o/E4"),r=i("QXXq"),o=i("BrvI"),a=i("9aS3"),s=i("Ddgg"),u=i("bvam");e.a={model:{prop:"value",event:"update"},props:{value:{type:[String,Number],default:""},ariaInvalid:{type:[Boolean,String],default:!1},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},formatter:{type:Function},lazyFormatter:{type:Boolean,default:!1},trim:{type:Boolean,default:!1},number:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},debounce:{type:[Number,String],default:0}},data:function(){return{localValue:Object(u.e)(this.value),vModelValue:this.value}},computed:{computedClass:function(){return[{"custom-range":"range"===this.type,"form-control-plaintext":this.plaintext&&"range"!==this.type&&"color"!==this.type,"form-control":!this.plaintext&&"range"!==this.type||"color"===this.type},this.sizeFormClass,this.stateClass]},computedAriaInvalid:function(){return this.ariaInvalid&&"false"!==this.ariaInvalid?!0===this.ariaInvalid?"true":this.ariaInvalid:!1===this.computedState?"true":null},computedDebounce:function(){return Object(a.b)(Object(s.c)(this.debounce,0),0)},hasFormatter:function(){return Object(o.e)(this.formatter)}},watch:{value:function(t){var e=Object(u.e)(t);e!==this.localValue&&t!==this.vModelValue&&(this.clearDebounce(),this.localValue=e,this.vModelValue=t)}},created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on("hook:beforeDestroy",this.clearDebounce);var t=this.value,e=Object(u.e)(t);e!==this.localValue&&t!==this.vModelValue&&(this.localValue=e,this.vModelValue=t)},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(u.e)(t),!this.hasFormatter||this.lazyFormatter&&!i||(t=this.formatter(t,e)),t},modifyValue:function(t){return this.trim&&(t=t.trim()),this.number&&(t=Object(s.b)(t,t)),t},updateValue:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.lazy;if(!n||i){this.clearDebounce();var r=function(){if((t=e.modifyValue(t))!==e.vModelValue)e.vModelValue=t,e.$emit("update",t);else if(e.hasFormatter){var i=e.$refs.input;i&&t!==i.value&&(i.value=t)}},o=this.computedDebounce;o>0&&!n&&!i?this.$_inputDebounceTimer=setTimeout(r,o):r()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,i=this.formatValue(e,t);!1===i||t.defaultPrevented?Object(r.d)(t,{propagation:!1}):(this.localValue=i,this.updateValue(i),this.$emit("input",i))}},onChange:function(t){var e=t.target.value,i=this.formatValue(e,t);!1===i||t.defaultPrevented?Object(r.d)(t,{propagation:!1}):(this.localValue=i,this.updateValue(i,!0),this.$emit("change",i))},onBlur:function(t){var e=t.target.value,i=this.formatValue(e,t,!0);!1!==i&&(this.localValue=Object(u.e)(this.modifyValue(i)),this.updateValue(i,!0)),this.$emit("blur",t)},focus:function(){this.disabled||Object(n.d)(this.$el)},blur:function(){this.disabled||Object(n.c)(this.$el)}}}},Tu1i:function(t,e,i){"use strict";var n=i("t8l0");e.a={props:{size:{type:String,default:function(){return Object(n.b)("formControls","size")}}},computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]},sizeBtnClass:function(){return[this.size?"btn-".concat(this.size):null]}}}},Vxxt:function(t,e,i){"use strict";var n=i("o/E4");e.a={props:{name:{type:String},id:{type:String},disabled:{type:Boolean},required:{type:Boolean,default:!1},form:{type:String},autofocus:{type:Boolean,default:!1}},mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(n.B)((function(){var e=t.$el;t.autofocus&&Object(n.u)(e)&&(Object(n.v)(e,"input, textarea, select")||(e=Object(n.C)("input, textarea, select",e)),Object(n.d)(e))}))}))}}}},ZKBa:function(t,e,i){"use strict";e.a={computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}}},xy9X:function(t,e,i){"use strict";e.a={computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}}}}]);
//# sourceMappingURL=commons-pages.admin.application_settings-pages.admin.application_settings.general-pages.admin.applic-adfa3aee.44523b6d.chunk.js.map