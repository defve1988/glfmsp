(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98f168ce"],{"16b7":function(t,a,e){"use strict";e("a9e3");var i=e("2b0e");a["a"]=i["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,a){var e=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(a||function(){e.isActive={open:!0,close:!1}[t]},i)}}})},2861:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var i=a.hover;return[e("v-card",{staticClass:"ma-0 pa-0",attrs:{"max-width":"400",elevation:i?16:2},on:{click:t.expand}},[e("v-card-title",{staticClass:"py-1 px-2",on:{dblclick:t.expand}},[e("v-row",{staticClass:"ma-0 pa-0",attrs:{"no-gutters":""}},[e("div",{staticClass:"ml-2 mt-1 mb-0"},[e("span",{staticClass:"subtitle-1 font-weight-bold",attrs:{id:"header"}},[t._v(t._s(t.app_data.plot_data[t.card_index].name))])]),e("v-spacer")],1),e("v-btn",{attrs:{small:"",icon:""}},[e("v-icon",{attrs:{small:""},on:{click:t.expand}},[t._v(" mdi-arrow-expand ")])],1),e("v-btn",{attrs:{small:"",icon:""}},[e("v-icon",{attrs:{small:""},on:{click:t.close_view}},[t._v(" mdi-close ")])],1)],1),e("v-divider",{staticClass:"mx-2"}),e("div",{staticClass:"mx-1",attrs:{id:t.app_data.plot_data[t.card_index].name}})],1)]}}])})},s=[],n=(e("c975"),e("a434"),e("b0c0"),e("5530")),o=e("486b"),l=e("2f62"),r={name:"trend_card",props:["card_index"],mounted:function(){this.CHANGE_PLOT_DATA(this.card_index),this.card_name=this.app_data.plot_data[this.card_index].name,this.card_data=this.app_data.plot_data[this.card_index],this.plotting=new o["a"](this.card_name,this.card_data),this.plotting.set_layout("small_plot"),this.plotting.draw(this.card_data.plots.type)},data:function(){return{card_data:{chemical:"",trend:0}}},computed:Object(n["a"])(Object(n["a"])({},Object(l["c"])({lakes:"lakes",app_data:"app_data"})),{},{is_update:function(){return this.lakes.prev_filter}}),watch:{is_update:function(){this.CHANGE_PLOT_DATA(this.card_index),this.card_name=this.app_data.plot_data[this.card_index].name,this.card_data=this.app_data.plot_data[this.card_index],this.plotting.set_data(this.card_data),this.plotting.set_layout("small_plot"),this.plotting.draw(this.card_data.plots.type),this.lakes.update=!1}},methods:Object(n["a"])(Object(n["a"])({},Object(l["b"])(["CHANGE_PLOT_DATA"])),{},{expand:function(){var t=this.app_data.current_plot_order.indexOf(this.card_index);this.app_data.last_expand=this.app_data.main_card_index,this.app_data.current_plot_order[t]=this.app_data.main_card_index,this.app_data.main_card_index=this.card_index},close_view:function(){var t=this.app_data.current_plot_order.indexOf(this.card_index);this.app_data.current_plot_order.splice(t,1);var a=this.app_data.view_selected.indexOf(this.card_index);this.app_data.view_selected.splice(a,1),this.app_data.last_expand==this.card_index&&(this.app_data.last_expand=-1)}})},c=r,d=(e("52b0"),e("2877")),h=e("6544"),u=e.n(h),p=e("8336"),_=e("b0af"),y=e("99d9"),f=e("ce7e"),v=e("ce87"),m=e("132d"),x=e("0fd9"),b=e("2fa4"),g=Object(d["a"])(c,i,s,!1,null,"228aa1d3",null);a["default"]=g.exports;u()(g,{VBtn:p["a"],VCard:_["a"],VCardTitle:y["d"],VDivider:f["a"],VHover:v["a"],VIcon:m["a"],VRow:x["a"],VSpacer:b["a"]})},"486b":function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e("4160"),e("a630"),e("caad"),e("d81d"),e("4fad"),e("b64b"),e("d3b7"),e("2532"),e("3ca3"),e("159b"),e("ddb0");var i=e("3835"),s=e("d4ec"),n=e("bee2"),o=e("030a"),l=e.n(o),r=function(){function t(a,e){Object(s["a"])(this,t),this.div_name=a,this.config={displaylogo:!1,responsive:!0,displayModeBar:!1,staticPlot:!0,editable:!1},this.set_data(e)}return Object(n["a"])(t,[{key:"set_data",value:function(t){this.type=t.plots.type,this.layout=t.layout,this.trace=t.trace}},{key:"set_layout",value:function(t){var a=this;if("main_plot"==t){this.layout.height=450,this.layout.margin={r:30,t:25,b:25,l:75},this.layout.font.size=14,Object.keys(this.layout.xaxis).includes("title_temp")&&(this.layout.xaxis.title=this.layout.xaxis.title_temp,this.layout.yaxis.title=this.layout.yaxis.title_temp);try{this.layout.xaxis.title.font.size=18,this.layout.yaxis.title.font.size=18,this.layout.xaxis.showticklabels=!0,this.layout.yaxis.showticklabels=!0,this.layout.yaxis.showline=!0,this.layout.xaxis.showline=!0,this.layout.yaxis.showgrid=!0,this.layout.xaxis.showgrid=!0,this.layout.xaxis.zeroline=!0,this.layout.yaxis.zeroline=!0,this.config.responsive=!0,this.config.staticPlot=!1,"pie"!==this.type?this.layout.showlegend=!0:this.layout.showlegend=!1}catch(e){alert(e)}}else"small_plot"==t&&(this.layout.height=200,this.layout.margin={r:20,t:10,b:25,l:20},this.layout.font.size=8,this.layout.xaxis.title_temp=this.layout.xaxis.title,this.layout.xaxis.title="",this.layout.yaxis.title_temp=this.layout.yaxis.title,this.layout.yaxis.title="",this.layout.xaxis.showticklabels=!1,this.layout.yaxis.showticklabels=!1,this.layout.xaxis.zeroline=!1,this.layout.showlegend=!1,"pie"==this.type&&this.trace.forEach((function(t,e){a.trace[e].textinfo="none"})))}},{key:"draw",value:function(t){var a=["bar","scatter","bar_stacked","box"];if(a.includes(t)){var e=[];this.trace.forEach((function(a){for(var s={},n=0,o=Object.entries(a);n<o.length;n++){var l=Object(i["a"])(o[n],2),r=l[0],c=l[1];s[r]=c}"scatter"==t&&(s.x=s.x.map((function(t){return null==t?null:0}))),s.y=s.y.map((function(t){return null==t?null:0})),e.push(s)})),l.a.newPlot(this.div_name,e,this.layout,this.config),l.a.animate(this.div_name,{data:this.trace,traces:Array.from(Array(this.trace.length).keys())},{transition:{duration:1e3,easing:"cubic-in-out"}})}else l.a.newPlot(this.div_name,this.trace,this.layout,this.config)}},{key:"clear",value:function(){l.a.purge(this.div_name)}},{key:"animate_with_frame",value:function(){var t=this.div_name,a=this.gene_frame(this.trace),e=[];this.trace.forEach((function(t,s){for(var n={},o=0,l=Object.entries(t);o<l.length;o++){var r=Object(i["a"])(l[o],2),c=r[0],d=r[1];n[c]=d}n.y=a[0].data[s].y,e.push(n)})),l.a.newPlot(t,e,this.layout,this.config).then((function(){console.log(a),l.a.animate(t,a,{transition:{duration:0},frame:{duration:10,redraw:!1}})}))}},{key:"gene_frame",value:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;console.log(t);for(var e=[],i=0;i<=a;i++){var s={data:[]};t.forEach((function(t){var e={x:[],y:[]};e.x=t.x.map((function(t){return t})),e.y=t.y.map((function(t){return parseFloat(t)/a*i})),s.data.push(e)})),e.push(s)}return e}},{key:"plot_animation",value:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e={yaxis:{range:[0,t.max_y]}};Object.assign(e,a);var i=this.set_layout(e);l.a.newPlot(this.div_name,t.trace_data.trace_0,i,this.plotly_config);var s=Array.from(Array(t.trace_data.trace.length).keys());l.a.animate(this.div_name,{data:t.trace_data.trace,traces:s,layout:{range:[0,t.max_y]}},{transition:{duration:1e3,easing:"cubic-in-out"}})}}]),t}()},"52b0":function(t,a,e){"use strict";var i=e("cb1b"),s=e.n(i);s.a},cb1b:function(t,a,e){},ce87:function(t,a,e){"use strict";var i=e("16b7"),s=e("f2e7"),n=e("58df"),o=e("d9bd");a["a"]=Object(n["a"])(i["a"],s["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o["c"])("v-hover should only contain a single element",this),t)):(Object(o["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}})}}]);
//# sourceMappingURL=chunk-98f168ce.ae1d9022.js.map