(this.webpackJsonp=this.webpackJsonp||[]).push([[200],{"/GZH":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return d}));var i=40,r=35,s=13,o=27,a=36,c=37,l=39,u=32,d=38},30:function(t,e,n){n("HVBj"),n("iooJ"),t.exports=n("3n5V")},"3n5V":function(t,e,n){"use strict";n.r(e);var i=n("r5uf");document.addEventListener("DOMContentLoaded",(function(){Object(i.b)();const t=document.querySelector(".js-domain-cert-show"),e=document.querySelector(".js-domain-cert-inputs"),n=document.querySelector(".js-domain-cert-replace-btn"),r=document.querySelector(".js-serverless-domain-submit");n&&t&&e&&n.addEventListener("click",(function(){t.classList.add("hidden"),e.classList.remove("hidden"),r.removeAttribute("disabled")}))}))},"4lAS":function(t,e,n){"use strict";var i=n("ofGl"),r=n("XBTk"),s=n("g3So"),o=n("s1D3"),a=n("FkSe"),c=n("Pyw5"),l=n.n(c);const u={components:{BButton:i.a,GlIcon:o.a,GlLoadingIcon:a.a},mixins:[s.a],props:{category:{type:String,required:!1,default:r.u.primary,validator:function(t){return Object.keys(r.u).includes(t)}},variant:{type:String,required:!1,default:r.x.default,validator:function(t){return Object.keys(r.x).includes(t)}},size:{type:String,required:!1,default:r.v.medium,validator:function(t){return Object.keys(r.v).includes(t)}},selected:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},label:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},buttonTextClasses:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1}},computed:{hasIcon:function(){return""!==this.icon},hasIconOnly:function(){return 0===Object.keys(this.$slots).length&&this.hasIcon},isButtonDisabled:function(){return this.disabled||this.loading},buttonClasses:function(){var t=["gl-button"];return[r.x.dashed,r.x.link].includes(this.variant)||this.category===r.u.primary||t.push("btn-".concat(this.variant,"-").concat(this.category)),t.push({"btn-icon":this.hasIconOnly,"button-ellipsis-horizontal":this.hasIconOnly&&"ellipsis_h"===this.icon,selected:this.selected}),this.label&&t.push("btn","btn-label","btn-".concat(this.buttonSize)),t},buttonSize:function(){return r.w[this.size]}}};const d=l()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.label?"span":"b-button",t._g(t._b({directives:[{name:"safe-link",rawName:"v-safe-link:[safeLinkConfig]",arg:t.safeLinkConfig}],tag:"component",class:t.buttonClasses,attrs:{target:t.target,variant:t.variant,size:t.buttonSize,disabled:t.isButtonDisabled}},"component",t.$attrs,!1),t.$listeners),[t.loading?n("gl-loading-icon",{staticClass:"gl-button-icon gl-button-loading-indicator",attrs:{inline:""}}):t._e(),t._v(" "),!t.hasIcon||t.hasIconOnly&&t.loading?t._e():n("gl-icon",{staticClass:"gl-button-icon",attrs:{name:t.icon}}),t._v(" "),t._t("emoji"),t._v(" "),t.hasIconOnly?t._e():n("span",{staticClass:"gl-button-text",class:t.buttonTextClasses},[t._t("default")],2)],2)},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},FkSe:function(t,e,n){"use strict";var i=n("Pyw5"),r=["sm","md","lg","xl"],s={dark:"dark",light:"light"};const o={props:{label:{type:String,required:!1,default:"Loading"},size:{type:String,required:!1,default:"sm",validator:function(t){return-1!==r.indexOf(t)}},color:{type:String,required:!1,default:s.dark,validator:function(t){return Object.keys(s).includes(t)}},inline:{type:Boolean,required:!1,default:!1}},computed:{rootElementType:function(){return this.inline?"span":"div"},cssClasses:function(){return["gl-spinner","".concat("gl-spinner","-").concat(s[this.color]),"".concat("gl-spinner","-").concat(this.size)]}}};const a=n.n(i)()({render:function(){var t=this.$createElement,e=this._self._c||t;return e(this.rootElementType,{tag:"component",staticClass:"gl-spinner-container"},[e("span",{staticClass:"align-text-bottom",class:this.cssClasses,attrs:{"aria-label":this.label}})])},staticRenderFns:[]},void 0,o,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=a},"Ge+5":function(t,e,n){"use strict";var i=n("4lAS"),r=n("Pyw5"),s=n.n(r);const o={name:"CloseButton",components:{GlButton:i.a},props:{label:{type:String,required:!1,default:"Close"}}};const a=s()({render:function(){var t=this.$createElement;return(this._self._c||t)("gl-button",this._g(this._b({attrs:{category:"tertiary",size:"small",icon:"close","aria-label":this.label}},"gl-button",this.$attrs,!1),this.$listeners))},staticRenderFns:[]},void 0,o,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=a},dsWN:function(t,e,n){"use strict";var i=n("XBTk"),r=n("Ge+5"),s=n("4lAS"),o=n("s1D3"),a=n("Pyw5"),c=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const f={components:{GlIcon:o.a,CloseButton:r.a,GlButton:s.a},props:{title:{type:String,required:!1,default:""},dismissible:{type:Boolean,required:!1,default:!0},dismissLabel:{type:String,required:!1,default:"Dismiss"},variant:{type:String,required:!1,default:i.c.info,validator:function(t){return Object.keys(i.c).includes(t)}},primaryButtonLink:{type:String,required:!1,default:""},primaryButtonText:{type:String,required:!1,default:""},secondaryButtonLink:{type:String,required:!1,default:""},secondaryButtonText:{type:String,required:!1,default:""},contained:{type:Boolean,required:!1,default:!1},sticky:{type:Boolean,required:!1,default:!1}},computed:{iconName:function(){return i.b[this.variant]},shouldRenderActions:function(){return Boolean(this.$slots.actions||this.actionButtons.length)},actionButtons:function(){return[{text:this.primaryButtonText,attrs:{href:this.primaryButtonLink,variant:"confirm",category:i.u.primary},listeners:{click:this.primaryButtonClicked}},{text:this.secondaryButtonText,attrs:{href:this.secondaryButtonLink,variant:"default",category:i.u.secondary},listeners:{click:this.secondaryButtonClicked}}].reduce((function(t,e){if(!e.text)return t;var n=d({},e.attrs);return n.href||delete n.href,t.push(d(d({},e),{},{attrs:n})),t}),[])},variantClass:function(){return"gl-alert-".concat(this.variant)}},methods:{primaryButtonClicked:function(t){this.$emit("primaryAction",t)},secondaryButtonClicked:function(t){this.$emit("secondaryAction",t)},onDismiss:function(){this.$emit("dismiss")}}};const b=c()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["gl-alert",{"gl-alert-max-content":t.contained},{"gl-alert-sticky":t.sticky},{"gl-alert-not-dismissible":!t.dismissible},t.variantClass]},[n("div",{staticClass:"gl-alert-container"},[n("gl-icon",{class:{"gl-alert-icon":!0,"gl-alert-icon-no-title":!t.title},attrs:{name:t.iconName}}),t._v(" "),t.dismissible?n("close-button",{ref:"dismiss",staticClass:"gl-dismiss-btn",attrs:{label:t.dismissLabel},on:{click:t.onDismiss}}):t._e(),t._v(" "),n("div",{staticClass:"gl-alert-content",attrs:{role:"alert"}},[t.title?n("h4",{staticClass:"gl-alert-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"gl-alert-body"},[t._t("default")],2),t._v(" "),t.shouldRenderActions?n("div",{staticClass:"gl-alert-actions"},[t._t("actions",t._l(t.actionButtons,(function(e,i){return n("gl-button",t._g(t._b({key:i,staticClass:"gl-alert-action"},"gl-button",e.attrs,!1),e.listeners),[t._v("\n            "+t._s(e.text)+"\n          ")])})))],2):t._e()])],1)])},staticRenderFns:[]},void 0,f,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=b},iooJ:function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"requestStatistics",(function(){return h})),n.d(i,"fetchStatistics",(function(){return O})),n.d(i,"receiveStatisticsSuccess",(function(){return j})),n.d(i,"receiveStatisticsError",(function(){return S}));var r={};n.r(r),n.d(r,"getStatistics",(function(){return _}));var s=n("jB52"),o=n("FkSe"),a=n("yi8e"),c=n("/lV4");var l={forks:Object(c.e)("AdminStatistics|Forks"),issues:Object(c.e)("AdminStatistics|Issues"),mergeRequests:Object(c.e)("AdminStatistics|Merge requests"),notes:Object(c.e)("AdminStatistics|Notes"),snippets:Object(c.e)("AdminStatistics|Snippets"),sshKeys:Object(c.e)("AdminStatistics|SSH Keys"),milestones:Object(c.e)("AdminStatistics|Milestones"),activeUsers:Object(c.e)("AdminStatistics|Active Users")};function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b={components:{GlLoadingIcon:o.a},data:()=>({statisticsLabels:l}),computed:d(d({},Object(a.f)(["isLoading","statistics"])),Object(a.d)(["getStatistics"])),mounted(){this.fetchStatistics()},methods:d({},Object(a.c)(["fetchStatistics"]))},p=n("tBpV"),g=Object(p.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gl-card"},[n("div",{staticClass:"gl-card-body"},[n("h4",[t._v(t._s(t.__("Statistics")))]),t._v(" "),t.isLoading?n("gl-loading-icon",{staticClass:"my-3",attrs:{size:"md"}}):t._l(t.getStatistics(t.statisticsLabels),(function(e){return n("p",{key:e.key,staticClass:"js-stats"},[t._v("\n        "+t._s(e.label)+"\n        "),n("span",{staticClass:"light float-right"},[t._v(t._s(e.value))])])}))],2)])}),[],!1,null,null,null).exports,m=n("qPgm"),y=n("XRO8"),v=n("NmEs");const h=function(t){let{commit:e}=t;return e("REQUEST_STATISTICS")},O=function(t){let{dispatch:e}=t;e("requestStatistics"),m.a.adminStatistics().then((function(t){let{data:n}=t;e("receiveStatisticsSuccess",Object(v.h)(n,{deep:!0}))})).catch((function(t){return e("receiveStatisticsError",t)}))},j=function(t,e){let{commit:n}=t;return n("RECEIVE_STATISTICS_SUCCESS",e)},S=function(t,e){let{commit:n}=t;n("RECEIVE_STATISTICS_ERROR",e),Object(y.c)(Object(c.e)("AdminDashboard|Error loading the statistics. Please try again"))},_=function(t){return function(e){return Object.keys(e).map((function(n){return{key:n,label:e[n],value:t.statistics&&t.statistics[n]?t.statistics[n]:null}}))}};var C={REQUEST_STATISTICS(t){t.isLoading=!0},RECEIVE_STATISTICS_SUCCESS(t,e){t.isLoading=!1,t.error=null,t.statistics=e},RECEIVE_STATISTICS_ERROR(t,e){t.isLoading=!1,t.error=e}};s.default.use(a.b);var k=function(){return new a.b.Store({actions:i,getters:r,mutations:C,state:{error:null,isLoading:!1,statistics:null}})};n("orcL");var w={components:{GlAlert:n("dsWN").a},props:{html:{type:String,required:!1,default:""}},data:()=>({isDismissed:!1}),methods:{dismiss(){this.isDismissed=!0}}},E=Object(p.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDismissed?t._e():n("gl-alert",t._g(t._b({on:{dismiss:t.dismiss}},"gl-alert",t.$attrs,!1),t.$listeners),[n("div",{domProps:{innerHTML:t._s(t.html)}})])}),[],!1,null,null,null).exports;function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){q(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const x=function(t){const e={html:t.innerHTML},n=B(B({},t.dataset),{},{dismissible:Object(v.K)(t.dataset.dismissible)});return new s.default({el:t,render:t=>t(E,{props:e,attrs:n})})};var T=n("EmJ/"),I=n.n(T),D=n("3twG");[...document.querySelectorAll(".js-vue-alert")].map(x);const L=document.getElementById("js-admin-statistics-container");I()("input#user_force_random_password").on("change",(function(){const t=I()("#user_password, #user_password_confirmation");I()(this).attr("checked")?t.val("").prop("disabled",!0):t.prop("disabled",!1)})),I()("body").on("click",".js-toggle-colors-link",(function(t){t.preventDefault(),I()(".js-toggle-colors-container").toggleClass("hide")})),I()("li.project_member, li.group_member").on("ajax:success",D.u),function(t){if(!t)return!1;const e=k();new s.default({el:t,store:e,components:{StatisticsPanelApp:g},render:t=>t(g)})}(L)},ofGl:function(t,e,n){"use strict";n.d(e,"a",(function(){return B}));var i=n("0zRR"),r=n("/GZH"),s=n("/Szx"),o=n("lgrP"),a=n("TjC/"),c=n("t8l0"),l=n("o/E4"),u=n("QXXq"),d=n("BrvI"),f=n("7bmO"),b=n("ua/H"),p=n("U9NU"),g=n("1m+M");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(f.k)(g.b,["event","routerTag"]);delete h.href.default,delete h.to.default;var O=y(y({},{block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:function(){return Object(c.b)(i.g,"size")}},variant:{type:String,default:function(){return Object(c.b)(i.g,"variant")}},type:{type:String,default:"button"},tag:{type:String,default:"button"},pill:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},pressed:{type:Boolean,default:null}}),h),j=function(t){"focusin"===t.type?Object(l.b)(t.target,"focus"):"focusout"===t.type&&Object(l.y)(t.target,"focus")},S=function(t){return Object(p.d)(t)||Object(l.t)(t.tag,"a")},_=function(t){return Object(d.b)(t.pressed)},C=function(t){return!(S(t)||t.tag&&!Object(l.t)(t.tag,"button"))},k=function(t){return!S(t)&&!C(t)},w=function(t){var e;return["btn-".concat(t.variant||Object(c.b)(i.g,"variant")),(e={},v(e,"btn-".concat(t.size),t.size),v(e,"btn-block",t.block),v(e,"rounded-pill",t.pill),v(e,"rounded-0",t.squared&&!t.pill),v(e,"disabled",t.disabled),v(e,"active",t.pressed),e)]},E=function(t){return S(t)?Object(b.a)(h,t):{}},P=function(t,e){var n=C(t),i=S(t),r=_(t),s=k(t),o=i&&"#"===t.href,a=e.attrs&&e.attrs.role?e.attrs.role:null,c=e.attrs?e.attrs.tabindex:null;return(s||o)&&(c="0"),{type:n&&!i?t.type:null,disabled:n?t.disabled:null,role:s||o?"button":a,"aria-disabled":s?String(t.disabled):null,"aria-pressed":r?String(t.pressed):null,autocomplete:r?"off":null,tabindex:t.disabled&&!n?"-1":c}},B=s.a.extend({name:i.g,functional:!0,props:O,render:function(t,e){var n=e.props,i=e.data,s=e.listeners,c=e.children,l=_(n),f=S(n),b=k(n),p=f&&"#"===n.href,m={keydown:function(t){if(!n.disabled&&(b||p)){var e=t.keyCode;if(e===r.h||e===r.c&&b){var i=t.currentTarget||t.target;Object(u.d)(t,{propagation:!1}),i.click()}}},click:function(t){n.disabled&&Object(d.d)(t)?Object(u.d)(t):l&&s&&s["update:pressed"]&&Object(a.b)(s["update:pressed"]).forEach((function(t){Object(d.e)(t)&&t(!n.pressed)}))}};l&&(m.focusin=j,m.focusout=j);var y={staticClass:"btn",class:w(n),props:E(n),attrs:P(n,i),on:m};return t(f?g.a:n.tag,Object(o.a)(i,y),c)}})},r5uf:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var i=n("EmJ/"),r=n.n(i),s=n("/lV4");function o(t){return(t instanceof r.a?t[0]:t).classList.contains("expanded")}function a(t){const e=r()(t);e.find(".js-settings-toggle:not(.js-settings-toggle-trigger-only)").text(Object(s.a)("Collapse")),e.find(".settings-content").off("scroll.expandSection").scrollTop(0),e.addClass("expanded"),e.hasClass("no-animate")||e.addClass("animating").one("animationend.animateSection",(function(){return e.removeClass("animating")}))}function c(t){const e=r()(t);e.find(".js-settings-toggle:not(.js-settings-toggle-trigger-only)").text(Object(s.a)("Expand")),e.find(".settings-content").on("scroll.expandSection",(function(){return a(e)})),e.removeClass("expanded"),e.hasClass("no-animate")||e.addClass("animating").one("animationend.animateSection",(function(){return e.removeClass("animating")}))}function l(){if(r()(".settings").each((function(t,e){const n=r()(e);n.on("click.toggleSection",".js-settings-toggle",(function(){return function(t){t.removeClass("no-animate"),o(t)?c(t):a(t)}(n)})),o(n)||n.find(".settings-content").on("scroll.expandSection",(function(){n.removeClass("no-animate"),a(n)}))})),window.location.hash){const t=r()(window.location.hash);t.length&&t.hasClass("settings")&&a(t)}}}},[[30,1,0,2]]]);
//# sourceMappingURL=pages.admin.serverless.domains.66318827.chunk.js.map