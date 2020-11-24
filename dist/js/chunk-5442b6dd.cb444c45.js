(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5442b6dd"],{"48d4":function(t,e,i){},"6ca7":function(t,e,i){},a523:function(t,e,i){"use strict";i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("20f6"),i("4b85"),i("a15b"),i("498a");var n=i("2b0e");function a(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,a=i.data,s=i.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var r=a.attrs;if(r){a.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,a,s)}})}var s=i("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,a=e.data,r=e.children,o=a.attrs;return o&&(a.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),t(n.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),r)}})},ec29:function(t,e,i){},ef60:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{staticClass:"mt-4 mx-1",attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"5"}},[i("v-card",[i("v-card-title",{staticClass:"font_color--text title py-2"},[t._v(t._s(t.lakes.title_text)+" "),i("v-spacer")],1),i("v-divider"),i("Lake")],1)],1),i("v-col",{staticClass:"pl-0",attrs:{cols:"5"}},[i("v-card",{attrs:{height:"523"}},[i("v-card-title",{staticClass:"font_color--text title py-2"},[t._v("Chemical Concentration Visualizations")]),i("v-divider"),i("MainPlot",{attrs:{card_name:"Chemicals of Years"}})],1)],1),i("v-col",{staticClass:"px-2",attrs:{cols:"2"}},[i("v-card",[i("v-card-title",{staticClass:"font_color--text title py-2"},[t._v(" Select Views ")]),i("v-divider"),i("v-list",{staticClass:"pa-0",attrs:{dense:"",flat:""}},[i("v-list-item-group",{attrs:{multiple:"",dense:""},model:{value:t.app_data.view_selected,callback:function(e){t.$set(t.app_data,"view_selected",e)},expression:"app_data.view_selected"}},t._l(t.app_data.plots,(function(e,n){return i("v-list-item",{key:n,attrs:{dense:""},on:{click:function(e){return t.hide_show_view(n)}},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.active;return[i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":a,color:"font_color"}})],1),t._v(" "+t._s(e.name)+" "),i("v-spacer")]}}],null,!0)})})),1)],1)],1)],1)],1),i("v-row",{staticClass:"mx-1 mt-2"},[t._l(t.app_data.plots,(function(e){return[e.plots?i("v-col",{key:e.name,staticClass:"pt-0 px-2",attrs:{cols:"2"}},[i("SmallCard",{attrs:{card_name:e.name}})],1):t._e()]}))],2)],1)},a=[],s=(i("caad"),i("d3b7"),i("2532"),i("5530")),r=i("2f62"),o={name:"summary_view",props:[],components:{Lake:function(){return i.e("chunk-09ef7989").then(i.bind(null,"7266"))},MainPlot:function(){return Promise.all([i.e("chunk-6b999dd8"),i.e("chunk-3170ce18")]).then(i.bind(null,"2d7b"))},SmallCard:function(){return Promise.all([i.e("chunk-6b999dd8"),i.e("chunk-59dd4e16")]).then(i.bind(null,"2861"))}},data:function(){return{fullscreen:!1}},computed:Object(s["a"])({},Object(r["c"])({lakes:"lakes",app_data:"app_data"})),mounted:function(){},methods:{fullscreen:function(){this.$refs["fullscreen"].toggle()},fullscreenChange:function(t){this.fullscreen=t},hide_show_view:function(t){this.app_data.view_selected.includes(t)?this.app_data.plots[t].plots=!1:this.app_data.plots[t].plots=!0}}},l=o,c=(i("fe04"),i("2877")),u=i("6544"),d=i.n(u),h=i("b0af"),p=i("99d9"),f=(i("25f0"),i("6ca7"),i("ec29"),i("9d26")),v=i("c37a"),m=(i("4de4"),i("45fc"),i("5607")),b=i("2b0e"),g=b["a"].extend({name:"rippleable",directives:{ripple:m["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),C=i("8547"),_=i("58df"),k=Object(_["a"])(v["a"],g,C["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=v["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),V=k.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},v["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(f["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(s["a"])(Object(s["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),y=i("62ad"),x=i("a523"),w=i("ce7e"),I=i("8860"),S=i("da13"),j=i("1800"),A=i("1baa"),O=i("0fd9"),$=i("2fa4"),P=Object(c["a"])(l,n,a,!1,null,"6c6f049b",null);e["default"]=P.exports;d()(P,{VCard:h["a"],VCardTitle:p["d"],VCheckbox:V,VCol:y["a"],VContainer:x["a"],VDivider:w["a"],VList:I["a"],VListItem:S["a"],VListItemAction:j["a"],VListItemGroup:A["a"],VRow:O["a"],VSpacer:$["a"]})},fe04:function(t,e,i){"use strict";var n=i("48d4"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-5442b6dd.cb444c45.js.map