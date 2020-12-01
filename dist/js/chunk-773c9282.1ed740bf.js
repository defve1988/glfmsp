(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-773c9282"],{7266:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",{attrs:{justify:"center"}},[s("svg",{attrs:{id:"lake_canvas",width:e.lake_canvas_width,height:e.lake_canvas_height,viewBox:"-25 25 1250 500",preserveAspectRatio:"xMinYMin meet"}},[s("filter",{attrs:{id:"f1",x:"0",y:"0",width:"200%",height:"200%"}},[s("feOffset",{attrs:{result:"offOut",in:"SourceAlpha",dx:"10",dy:"10"}}),s("feGaussianBlur",{attrs:{result:"blurOut",in:"offOut",stdDeviation:"8"}}),s("feBlend",{attrs:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}})],1),e._l(e.lakes.lakes_data,(function(t,a){return s("g",{key:a,staticClass:"GL_lakes",attrs:{name:t.lake,filter:t.selected||t.hovered?"url(#f1)":""},on:{click:e.lake_click,mouseover:e.lake_mouseover,mouseleave:e.lake_mouseleave}},[s("g",{class:t.lake,attrs:{transform:"translate(0,800) scale(0.1,-0.1)"}},[s("path",{staticClass:"lake_water",attrs:{name:t.lake,d:e.lakes[t.d],id:t.selected?"lake_water_selected":""}})]),s("text",{attrs:{x:t.x,y:t.y,"font-size":"20 "}},[e._v(" "+e._s(t.name)+" ")])])})),e._l(e.lakes.site_data,(function(t,a){return s("g",{key:a,class:t.class,attrs:{name:t.name,lake:t.lake,id:e.get_id(t)},on:{click:e.site_click,mouseover:e.site_mouseover,mouseleave:e.site_mouseleave}},[s("defs",[s("filter",{attrs:{x:"0",y:"0",width:"1",height:"1",id:"solid"}},[s("feFlood",{attrs:{"flood-color":"rgba(0, 0, 0, 0.5)"}}),s("feComposite",{attrs:{in:"SourceGraphic"}})],1)]),s("circle",{staticClass:"less_industrial",attrs:{name:t.name,cx:t.x,cy:t.y}}),s("text",{attrs:{filter:"url(#solid)",x:t.x+25,y:t.y+5}},[e._v(" "+e._s(t.name)+" ")])])})),s("g",{staticClass:"legend"},[s("circle",{staticClass:"less_industrial",attrs:{cx:e.legend_x,cy:e.legend_y},on:{mouseover:e.legend_mouseover,mouseleave:e.legend_mouseleave,click:e.legend_click}}),s("text",{attrs:{x:e.legend_x+25,y:e.legend_y+6}},[e._v(" Less Industrial Sites ")]),s("circle",{staticClass:"more_industrial",attrs:{cx:e.legend_x,cy:e.legend_y+50},on:{mouseover:e.legend_mouseover,mouseleave:e.legend_mouseleave,click:e.legend_click}}),s("text",{attrs:{x:e.legend_x+25,y:e.legend_y+56}},[e._v(" More Industrial Sites ")]),s("text",{staticClass:"tooltip",attrs:{filter:"url(#solid)",x:e.legend_x+25,y:e.legend_y+105}},[e._v(" Click to select all. ")])])],2)])],1)},l=[],i=(s("fb6a"),s("b0c0"),s("4fad"),s("3835")),d=s("5530"),r=s("2f62"),_={name:"lakes",components:{},data:function(){return{lake_canvas_width:700,lake_canvas_height:450,legend_x:800,legend_y:100,delay:250,last_hover:null,trigger_limit:500}},mounted:function(){this.CHANGE_FILTER()},computed:Object(d["a"])({},Object(r["c"])({lakes:"lakes",app_data:"app_data"})),methods:Object(d["a"])(Object(d["a"])({},Object(r["b"])(["CHANGE_SELECTED_TEXT","CHANGE_FILTER","FILTER_DF"])),{},{legend_click:function(e){var t=e.currentTarget.getAttribute("class"),s=!0;if("less_industrial"==t){for(var a=0,l=Object.entries(this.lakes.site_data);a<l.length;a++){var d=Object(i["a"])(l[a],2),r=d[1];"less_industrial_site"==r.class&&(s=r.selected&&s)}s?(this.lakes.site_data["LS1"].selected=!1,this.lakes.site_data["LH1"].selected=!1,this.lakes.site_data["LM1"].selected=!1,this.lakes.site_data["LO1"].selected=!1,this.lakes.site_data["LE1"].selected=!1):(this.lakes.site_data["LS1"].selected=!0,this.lakes.site_data["LH1"].selected=!0,this.lakes.site_data["LM1"].selected=!0,this.lakes.site_data["LO1"].selected=!0,this.lakes.site_data["LE1"].selected=!0)}else{for(var _=0,c=Object.entries(this.lakes.site_data);_<c.length;_++){var h=Object(i["a"])(c[_],2),k=h[1];"more_industrial_site"==k.class&&(s=k.selected&&s)}s?(this.lakes.site_data["LS2"].selected=!1,this.lakes.site_data["LH2"].selected=!1,this.lakes.site_data["LM2"].selected=!1,this.lakes.site_data["LO2"].selected=!1,this.lakes.site_data["LE2"].selected=!1):(this.lakes.site_data["LS2"].selected=!0,this.lakes.site_data["LH2"].selected=!0,this.lakes.site_data["LM2"].selected=!0,this.lakes.site_data["LO2"].selected=!0,this.lakes.site_data["LE2"].selected=!0)}this.lakes.site_data["LS1"].hovered=!1,this.lakes.site_data["LH1"].hovered=!1,this.lakes.site_data["LM1"].hovered=!1,this.lakes.site_data["LO1"].hovered=!1,this.lakes.site_data["LE1"].hovered=!1,this.lakes.site_data["LS2"].hovered=!1,this.lakes.site_data["LH2"].hovered=!1,this.lakes.site_data["LM2"].hovered=!1,this.lakes.site_data["LO2"].hovered=!1,this.lakes.site_data["LE2"].hovered=!1,this.CHANGE_SELECTED_TEXT(),this.CHANGE_FILTER(),this.FILTER_DF(this.lakes.prev_filter),this.lakes.title_text=this.lakes.selected.text},lake_click:function(e){var t=e.currentTarget.getAttribute("name"),s=this.lakes.lakes_data[t].lake;this.lakes.lakes_data[t].selected?(this.lakes.lakes_data[t].selected=!1,this.lakes.site_data[s+"1"].selected=!1,this.lakes.site_data[s+"2"].selected=!1):(this.lakes.lakes_data[t].selected=!0,this.lakes.site_data[s+"1"].selected=!0,this.lakes.site_data[s+"2"].selected=!0),this.lakes.site_data[t+"1"].hovered=!1,this.lakes.site_data[t+"2"].hovered=!1,this.CHANGE_SELECTED_TEXT(),this.CHANGE_FILTER(),this.FILTER_DF(this.lakes.prev_filter),this.lakes.title_text=this.lakes.selected.text},site_click:function(e){var t=e.currentTarget.getAttribute("lake");if("site_selected"==e.currentTarget.id)this.lakes.site_data[t].selected=!1,this.lakes.lakes_data[t.slice(0,2)].selected=!1;else{this.lakes.site_data[t].selected=!0;var s=t.slice(0,2);this.lakes.site_data[s+"1"].selected&&this.lakes.site_data[s+"2"].selected&&(this.lakes.lakes_data[s].selected=!0)}this.lakes.site_data[t].hovered=!1,this.CHANGE_SELECTED_TEXT(),this.CHANGE_FILTER(),this.FILTER_DF(this.lakes.prev_filter),this.lakes.title_text=this.lakes.selected.text},legend_mouseover:function(e){var t=this,s=e.currentTarget.getAttribute("class");setTimeout((function(){"less_industrial"==s?(t.lakes.site_data["LS1"].hovered=!0,t.lakes.site_data["LH1"].hovered=!0,t.lakes.site_data["LM1"].hovered=!0,t.lakes.site_data["LO1"].hovered=!0,t.lakes.site_data["LE1"].hovered=!0,t.lakes.title_text="All None-industrial Sites"):(t.lakes.site_data["LS2"].hovered=!0,t.lakes.site_data["LH2"].hovered=!0,t.lakes.site_data["LM2"].hovered=!0,t.lakes.site_data["LO2"].hovered=!0,t.lakes.site_data["LE2"].hovered=!0,t.lakes.title_text="All Industrial Sites")}),this.delay)},legend_mouseleave:function(e){var t=this,s=e.currentTarget.getAttribute("class");setTimeout((function(){"less_industrial"==s?(t.lakes.site_data["LS1"].hovered=!1,t.lakes.site_data["LH1"].hovered=!1,t.lakes.site_data["LM1"].hovered=!1,t.lakes.site_data["LO1"].hovered=!1,t.lakes.site_data["LE1"].hovered=!1):(t.lakes.site_data["LS2"].hovered=!1,t.lakes.site_data["LH2"].hovered=!1,t.lakes.site_data["LM2"].hovered=!1,t.lakes.site_data["LO2"].hovered=!1,t.lakes.site_data["LE2"].hovered=!1),t.lakes.title_text=t.lakes.selected.text}),this.delay)},lake_mouseover:function(e){var t=e.currentTarget.getAttribute("name");this.lakes.lakes_data[t].hovered=!0,this.lakes.title_text=this.lakes.lakes_data[t].name,this.lakes.site_data[t+"1"].hovered=!0,this.lakes.site_data[t+"2"].hovered=!0},lake_mouseleave:function(e){var t=e.currentTarget.getAttribute("name");this.lakes.lakes_data[t].hovered=!1,this.lakes.title_text=this.lakes.selected.text,this.lakes.site_data[t+"1"].hovered=!1,this.lakes.site_data[t+"2"].hovered=!1},site_mouseover:function(e){var t=e.currentTarget.getAttribute("lake");this.lakes.site_data[t].hovered=!0,this.lakes.title_text=this.lakes.site_data[t].name},site_mouseleave:function(e){var t=e.currentTarget.getAttribute("lake");this.lakes.title_text=this.lakes.selected.text,this.lakes.site_data[t].hovered=!1},get_id:function(e){var t="";return e.hovered&&(t="site_focused"),e.selected&&(t="site_selected"),t}})},c=_,h=(s("dfa8"),s("2877")),k=s("6544"),n=s.n(k),o=s("a523"),u=s("0fd9"),v=Object(h["a"])(c,a,l,!1,null,"7cf726c4",null);t["default"]=v.exports;n()(v,{VContainer:o["a"],VRow:u["a"]})},"919f":function(e,t,s){},dfa8:function(e,t,s){"use strict";var a=s("919f"),l=s.n(a);l.a}}]);
//# sourceMappingURL=chunk-773c9282.1ed740bf.js.map