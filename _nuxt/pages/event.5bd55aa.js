(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{297:function(t,e,n){var content=n(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("0cd63bd9",content,!0,{sourceMap:!1})},298:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=e},308:function(t,e,n){"use strict";n(18),n(297);var r=n(0).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),o=n(8),l=Object(o.a)(r);e.a=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})},311:function(t,e,n){"use strict";n.r(e);var r={props:["title","content"]},o=n(32),l=n(37),c=n.n(l),h=n(283),d=n(308),v=n(285),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-parallax",{attrs:{dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("h1",{staticClass:"display-1 font-weight-bold mb-4"},[this._v("\n        "+this._s(this.title)+"\n      ")])])],1),this._v(" "),e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"6"}},[e("p",{staticClass:"subheading"},[this._v("\n        "+this._s(this.content)+"\n      ")])])],1)],1)}),[],!1,null,"539feacd",null),f=component.exports;c()(component,{VCol:h.a,VParallax:d.a,VRow:v.a});var m={props:["title","abstruct","date"]},w=Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{attrs:{dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"display-1 font-weight-bold mb-4"},[t._v("\n        "+t._s(t.title)+"\n      ")])])],1),t._v(" "),n("v-row",{attrs:{align:"start",justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("p",{staticClass:"subheading"},[t._v("\n        "+t._s(t.abstruct)+"\n      ")])]),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[n("h1",{staticClass:"display-1 font-weight-bold mb-4"},[t._v("\n        概要\n      ")]),t._v(" "),n("p",[t._v(t._s(t.date))])])],1)],1)}),[],!1,null,"0bd9f6d7",null),_=w.exports;c()(w,{VCol:h.a,VParallax:d.a,VRow:v.a});var x={props:["title","keyVisual","theme","wishs","content"]},y=n(114),j=Object(o.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{attrs:{height:"1070",dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"display-1 font-weight-bold mb-4"},[t._v("\n        "+t._s(t.title)+"\n      ")])])],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[n("h2",{staticClass:"display-1 font-weight-bold mb-4"},[t._v("\n        "+t._s(t.theme)+"\n      ")])]),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-img",{attrs:{src:t.keyVisual,"aspect-ratio":"2.7"}})],1)],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"display-1 font-weight-bold mb-4"},[t._v("\n        "+t._s(t.wishs)+"\n      ")])])],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[n("v-img",{attrs:{src:"https://picsum.photos/510/300?random","aspect-ratio":"1.7"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("div",[n("p",{staticClass:"subheading"},[t._v("\n          "+t._s(t.content)+"\n        ")]),t._v(" "),n("p",{staticClass:"subheading"},[t._v("\n          TEDxNagoyaU2020 代表 れんれん\n        ")])])])],1)],1)}),[],!1,null,"7e730ea1",null),C=j.exports;c()(j,{VCol:h.a,VImg:y.a,VParallax:d.a,VRow:v.a});var T={layout:"full",components:{VSectionForm:f,VSectionInfo:_,VSectionTheme:C},data:function(){return{theme:{title:"2020 TEDxNagoyaU Theme is ...",keyVisual:"https://lh6.googleusercontent.com/TjwebgbuMUHaNrYD2r0OYPLInqh_hqFLNBK0_9Vj4hJvBhnKygjVLTnkIwXrk6cXgPL9QWxQx9-Ud-mM7iOvWdHxbKBQ36b-TaAVYrlc",theme:"steer your ship!",wishs:"テーマへの思い",content:"TEDxとは、「ideas worth spreading」というTEDの 精神のもとに世界各地で発足し、 独自に運営されているイベントです。 世界各地の人々が、 TEDイベントのような経験を共有することができます。 TEDxイベントでは、TED Talksの 上映やライブ・スピーカーのプレゼンテーションによって深い議論が起こり、参加者同士の間に“つながり”が生まれます。 このように、各地域で独自に運営されるイベントを「TEDx」と呼び、 「x」は、「独自に開催されるTEDイベント」という意味を持ちます。TEDxイベントは、 TEDイベントの手引きにより運営されますが、 定められたルールの下で、独自に運営されています。"},info:{title:"Event Information",abstruct:"abstruct: 今年はオンライン開催となりました。",date:"2020/10/11(日)"},form:{title:"Form"}}}},E=Object(o.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-section-theme",t._b({},"v-section-theme",t.theme,!1)),t._v(" "),n("v-section-info",t._b({},"v-section-info",t.info,!1)),t._v(" "),n("v-section-form",t._b({},"v-section-form",t.form,!1))],1)}),[],!1,null,null,null);e.default=E.exports}}]);