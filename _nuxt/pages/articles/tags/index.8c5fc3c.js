(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{348:function(t,e,n){"use strict";var strong=n(201),r=n(158);t.exports=n(202)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},398:function(t,e,n){"use strict";n.r(e);n(50),n(6),n(4),n(43),n(348),n(67);var r=n(16),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,c,o,f,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles",{deep:!0}).only(["tags"]).fetch();case 3:return c=e.sent,o=new Set(c.map((function(t){return t.tags})).flat()),f=Array.from(o).sort(),e.next=8,Promise.all(f.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{};case 2:return n=t.sent,t.abrupt("return",{tag:e,articles:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 8:return l=e.sent,e.abrupt("return",{uniqueTags:f,tagsArticles:l});case 10:case"end":return e.stop()}}),e)})))()}},o=n(17),component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v(this._s(this.uniqueTags))]),this._v(" "),e("p",[this._v(this._s(this.tagsArticle))])])}),[],!1,null,null,null);e.default=component.exports}}]);