(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{340:function(t,e,r){var content=r(350);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("b85ed92a",content,!0,{sourceMap:!1})},341:function(t,e,r){var content=r(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("6e63816d",content,!0,{sourceMap:!1})},349:function(t,e,r){"use strict";var c=r(340);r.n(c).a},350:function(t,e,r){(e=r(11)(!1)).push([t.i,".content h1{border-left:5px solid #262626}",""]),t.exports=e},351:function(t,e,r){"use strict";var c=r(341);r.n(c).a},352:function(t,e,r){(e=r(11)(!1)).push([t.i,".article .article-title{margin:30px 0;color:#851818;border-bottom:1px solid #b83131;line-height:1.5}.article .article-title span{border-bottom:6px solid #b83131}.body{border-bottom:1px solid #000}",""]),t.exports=e},393:function(t,e,r){"use strict";r.r(e);r(67);var c=r(16),n={name:"ArticleBody",props:{article:{type:Object,required:!0}}},o=(r(349),r(17)),l={components:{ArticleBody:Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("nuxt-content",{attrs:{document:this.article}})],1)}),[],!1,null,null,null).exports},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("articles",c.category,c.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article,params:c});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.params.slug," | ").concat(this.params.category),meta:this.article.meta}}},d=(r(351),Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article"},[r("h1",{staticClass:"article-title"},[r("span",[t._v(t._s(t.article.title))])]),t._v(" "),r("article-body",{staticClass:"body",attrs:{article:t.article}}),t._v(" "),t.article.category?r("div",{staticClass:"category"},[r("h4",[t._v("category: "+t._s(t.params.category))])]):t._e(),t._v(" "),t.article.tags?r("div",{staticClass:"tag"},[r("h4",[t._v("tags: "+t._s(t.article.tags))])]):t._e()],1)}),[],!1,null,null,null));e.default=d.exports}}]);