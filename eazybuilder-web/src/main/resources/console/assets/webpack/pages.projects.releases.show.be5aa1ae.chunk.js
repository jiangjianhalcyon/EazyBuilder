(this.webpackJsonp=this.webpackJsonp||[]).push([[382],{212:function(e,n,a){a("HVBj"),a("gjpc"),e.exports=a("VvpT")},VvpT:function(e,n,a){"use strict";a.r(n);var t=a("jB52"),i=a("GiFX"),l=a("5v28"),r=a("XRO8"),o=a("/lV4"),s=a("lBNs"),d=a.n(s),u=a("9+77"),c=a("V594"),f=a("/127"),m={name:"ReleaseShowApp",components:{ReleaseBlock:c.a,ReleaseSkeletonLoader:f.a},inject:{fullPath:{default:""},tagName:{default:""}},apollo:{release:{query:d.a,variables(){return{fullPath:this.fullPath,tagName:this.tagName}},update(e){var n;return(null===(n=e.project)||void 0===n?void 0:n.release)?Object(u.b)(e.project.release):null},result(e){e.error||this.release||this.showFlash(new Error('No release found in project "'.concat(this.fullPath,'" with tag "').concat(this.tagName,'"')))},error(e){this.showFlash(e)}}},methods:{showFlash(e){Object(r.b)({message:Object(o.e)("Release|Something went wrong while getting the release details."),captureError:!0,error:e})}}},h=a("tBpV"),v=Object(h.a)(m,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"gl-mt-3"},[this.$apollo.queries.release.loading?n("release-skeleton-loader"):this.release?n("release-block",{attrs:{release:this.release}}):this._e()],1)}),[],!1,null,null,null).exports;t.default.use(i.default);const p=new i.default({defaultClient:Object(l.default)()});!function(){const e=document.getElementById("js-show-release-page");if(!e)return!1;const{projectPath:n,tagName:a}=e.dataset;new t.default({el:e,apolloProvider:p,provide:{fullPath:n,tagName:a},render:function(e){return e(v)}})}()},lBNs:function(e,n,a){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"oneRelease"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"fullPath"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"tagName"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"project"},arguments:[{kind:"Argument",name:{kind:"Name",value:"fullPath"},value:{kind:"Variable",name:{kind:"Name",value:"fullPath"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"release"},arguments:[{kind:"Argument",name:{kind:"Name",value:"tagName"},value:{kind:"Variable",name:{kind:"Name",value:"tagName"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Release"},directives:[]}]}}]}}]}}],loc:{start:0,end:198}};t.loc.source={body:'#import "../fragments/release.fragment.graphql"\n\nquery oneRelease($fullPath: ID!, $tagName: String!) {\n  project(fullPath: $fullPath) {\n    release(tagName: $tagName) {\n      ...Release\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};t.definitions=t.definitions.concat(a("oiak").definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!i[n]&&(i[n]=!0,!0)})));var l={};function r(e,n){for(var a=0;a<e.definitions.length;a++){var t=e.definitions[a];if(t.name&&t.name.value==n)return t}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,a){if("FragmentSpread"===n.kind)a.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&a.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,a)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,a)})),n.definitions&&n.definitions.forEach((function(n){e(n,a)}))}(e,n),l[e.name.value]=n}})),e.exports=t,e.exports.oneRelease=function(e,n){var a={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var t=l[n]||new Set,i=new Set,o=new Set;for(t.forEach((function(e){o.add(e)}));o.size>0;){var s=o;o=new Set,s.forEach((function(e){i.has(e)||(i.add(e),(l[e]||new Set).forEach((function(e){o.add(e)})))}))}return i.forEach((function(n){var t=r(e,n);t&&a.definitions.push(t)})),a}(t,"oneRelease")}},[[212,1,0,6,2,3,4,5,75,123]]]);
//# sourceMappingURL=pages.projects.releases.show.be5aa1ae.chunk.js.map