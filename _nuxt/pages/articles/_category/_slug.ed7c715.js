(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{334:function(t,e,r){var content=r(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("b1bed018",content,!0,{sourceMap:!1})},335:function(t,e,r){(e=r(11)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=e},336:function(t,e,r){"use strict";r(52);var n={name:"TopicPath",computed:{breadcrumbs:function(){var t=this.$route.path.split("/");return t.shift(),t.map((function(t,i,e){return{text:t,to:"/".concat(e.slice(0,i+1).join("/")),exact:!0,nuxt:!0}}))}}},c=r(15),o=r(22),l=r.n(o),d=r(341),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:this.breadcrumbs,divider:"/"}})],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBreadcrumbs:d.a})},341:function(t,e,r){"use strict";r(10),r(7),r(6),r(4),r(8);var n=r(2),c=(r(334),r(49)),o=r(5);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),h=r(0),f=Object(h.g)("v-breadcrumbs__divider","li"),v=r(13);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(o.a)(v.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(f,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(m,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},343:function(t,e,r){var content=r(354);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("4b82b2ea",content,!0,{sourceMap:!1})},353:function(t,e,r){"use strict";var n=r(343);r.n(n).a},354:function(t,e,r){(e=r(11)(!1)).push([t.i,".article-title{font-size:1.4rem}.headline,.nuxt-content h1{border-bottom:1px solid #ddd;margin-top:49px;margin-bottom:24px}.nuxt-content h1{font-size:1.25rem;font-weight:400}.nuxt-content h2{font-size:1.15rem;font-weight:400}.nuxt-content h3{font-size:1.05rem;font-weight:500}.nuxt-content h4{font-size:.95;font-weight:600}.nuxt-content p{line-height:2rem}.nuxt-content p img{max-width:100%;height:auto;display:block;margin:auto;text-align:center}",""]),t.exports=e},405:function(t,e,r){"use strict";r.r(e);r(67);var n=r(17),c=r(336),o={name:"ArticleBody",props:{article:{type:Object,required:!0}}},l=r(15),d={components:{ArticleBody:Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("nuxt-content",{attrs:{document:this.article}})],1)}),[],!1,null,null,null).exports,TopicPath:c.a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.category,n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article,params:n});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.article.title," | ").concat(this.params.category),meta:this.article.meta_tag.concat([{hid:"og:url",property:"og:url",content:"https://tedxnagoyau.com"+this.$route.path}])}}},m=(r(353),r(22)),h=r.n(m),f=r(319),v=r(321),y=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"10",md:"10",lg:"7",xl:"7"}},[e("topic-path")],1),this._v(" "),e("v-col",{attrs:{cols:"12",sm:"10",md:"10",lg:"7",xl:"7"}},[e("h1",{staticClass:"article-title"},[e("span",[this._v(this._s(this.article.title))])])])],1),this._v(" "),e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"10",md:"10",lg:"7",xl:"6"}},[e("article-body",{staticClass:"body",attrs:{article:this.article}})],1)],1)],1)}),[],!1,null,null,null);e.default=y.exports;h()(y,{VCol:f.a,VRow:v.a})}}]);