(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{341:function(t,e,r){var content=r(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("1fb57095",content,!0,{sourceMap:!1})},345:function(t,e,r){"use strict";var n=r(341);r.n(n).a},346:function(t,e,r){(e=r(11)(!1)).push([t.i,"a[data-v-50859f1e]{padding:0}",""]),t.exports=e},347:function(t,e,r){"use strict";var n={name:"ArticleListCard",props:{article:{type:Object,required:!0}}},l=(r(345),r(15)),o=r(22),c=r.n(o),v=r(336),d=r(335),A=r(327),h=r(333),f=r(134),m=r(329),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"ma-1 mb-1",attrs:{nuxt:!0,to:t.article.path,outlined:""}},[r("v-container",{staticClass:"pa-0"},[r("v-row",{attrs:{dense:"",align:"center"}},[r("v-col",{attrs:{xs:"12",sm:"4"}},[r("v-img",{staticClass:"white--text align-end",attrs:{contain:"","max-height":"200",src:t.article.thumbnail}})],1),t._v(" "),r("v-col",{attrs:{xs:"12",sm:"8"}},[r("v-card-title",[t._v(t._s(t.article.title))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("\n          "+t._s(t.article.date)+"\n        ")]),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(t.article.description))])])],1)],1)],1)],1)}),[],!1,null,"50859f1e",null),C=component.exports;c()(component,{VCard:v.a,VCardSubtitle:d.b,VCardText:d.c,VCardTitle:d.d,VCol:A.a,VContainer:h.a,VImg:f.a,VRow:m.a});var w={name:"ArticleList",components:{ArticleListCard:C},props:{articles:{type:Array,required:!0}}},_=Object(l.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{dense:""}},this._l(this.articles,(function(article){return e("v-col",{key:article.path,attrs:{cols:"12"}},[e("article-list-card",{attrs:{article:article}})],1)})),1)}),[],!1,null,null,null);e.a=_.exports;c()(_,{VCol:A.a,VRow:m.a})},371:function(t,e,r){var content=r(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("ced3d366",content,!0,{sourceMap:!1})},408:function(t,e,r){"use strict";var n=r(371);r.n(n).a},409:function(t,e,r){(e=r(11)(!1)).push([t.i,".row[data-v-2598e9b3]{height:95%}a[data-v-2598e9b3]{text-decoration:none}.v-btn[data-v-2598e9b3]{background:linear-gradient(90deg,#feb334,#fd226b,#feb334);background-size:200% auto;border:none;transition:all 1s ease;color:#fff;font-weight:700}.v-btn[data-v-2598e9b3]:hover{background-position:100%}.bg-filter[data-v-2598e9b3]{-webkit-backdrop-filter:brightness(50%);backdrop-filter:brightness(50%)}",""]),t.exports=e},446:function(t,e,r){"use strict";r.r(e);r(67);var n=r(17),l={methods:{eventOfClickedEventDetail:function(){this.$ga.event({eventCategory:"Home",eventAction:"clickButton",eventLabel:"event2021",eventValue:1})}}},o=(r(408),r(15)),c=r(22),v=r.n(c),d=r(97),A=r(327),h=r(333),f=r(134),m=r(329),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-img",{staticClass:"align-center",attrs:{src:"bgFirstViewSecond.jpg",height:"100%","max-height":"600px",dark:""}},[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-row",{staticClass:"bg-filter",attrs:{align:"center",justify:"center",height:"100%","max-height":"550px"}},[r("v-col",{staticClass:"text-center",attrs:{sm:"6",xs:"12"}},[r("h1",{staticClass:"display-1  mb-4"},[t._v("\n          2021 TEDxNagoyaU Event\n        ")]),t._v(" "),r("h2",{staticClass:" font-weight mb-4"},[t._v("\n          開催日時: 2021/07/04(Sun) "),r("br"),t._v("\n          参加形態: Zoom & youtube\n        ")]),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{color:"white",depressed:"",href:"https://tedxnagoyau.github.io/connect/",target:"_blank"}},[t._v("\n          イベントの詳細\n        ")]),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{color:"white",depressed:"",href:"https://docs.google.com/forms/d/e/1FAIpQLSfjF9cbXWnZVToFbp1-EctCWTqTo8yuIUNgXg3XXHP7KAAaVA/viewform",target:"_blank"}},[t._v("\n          参加申し込み\n        ")])],1)],1)],1)],1)}),[],!1,null,"2598e9b3",null),C=component.exports;v()(component,{VBtn:d.a,VCol:A.a,VContainer:h.a,VImg:f.a,VRow:m.a});var w=r(40),_=(r(23),r(1)),k=r(410),x=r.n(k);_.a.use(x.a);var V={name:"ShowTalks",props:{speakers:{type:Array,required:!0}},data:function(){return{youtubeModalOn:!1,youtubeModalData:null}},computed:{numberOfDisplay:function(){var t;switch(this.$vuetify.breakpoint.name){case"xs":t=2;break;case"sm":t=4;break;case"md":case"lg":case"xl":t=6;break;default:t=2}return t}},methods:{slicedSpeakers:function(){var t=this.numberOfDisplay;return Object(w.a)(this.speakers).slice(0,t)}}},y=r(336),O=r(335),E=r(442),F=r(156),M=Object(o.a)(V,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",[r("h1",{staticClass:"pl-3 text-h5"},[t._v("\n        TEDxNagoyaU Talk\n      ")])]),t._v(" "),r("v-row",{attrs:{align:"center"}},t._l(t.slicedSpeakers(),(function(e){return r("v-col",{key:e.name,attrs:{xs:"12",sm:"6",md:"4"}},[r("v-card",[r("v-img",{staticClass:"align-end",attrs:{src:e.img,"lazy-src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAAAAAAZai4+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkCRkOBjOCFGLKAAAAkklEQVR42u3OwQmAMADAwO4/ZaWga+gKQsEgF8j/xkw2vgZgYWFhYWFFwsLCKoSFhVUICwurEBYWViEsLKxCWFhYhbCwsAphYWEVwsLCKoSFhVXo36zjmut8jrF2h4WFVQgLC6sQFhZWISwsrEJYWFiFsLCwCmFhYRXCwsIqhIWFVQgLC6sQFhZWISwsrEJYb7oBmCDsEMs9N24AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDktMjVUMjM6MDY6NTErMDk6MDC+nySAAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA5LTI1VDIzOjA2OjUxKzA5OjAwz8KcPAAAAABJRU5ErkJggg=="}},[r("div",{staticStyle:{background:"rgba(0,0,0,0.3)"}},[r("v-container",{staticClass:"pa-0"},[r("v-row",[r("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"8"}},[r("v-card-title",{staticClass:"white--text"},[t._v("\n                      "+t._s(e.title)+"\n                    ")]),t._v(" "),r("v-card-subtitle",{staticClass:"white--text"},[t._v("\n                      "+t._s(e.name)+"\n                    ")])],1),t._v(" "),e.youtubeId?r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"4"}},[r("v-btn",{attrs:{color:"red",text:""},on:{click:function(r){t.youtubeModalOn=!0,t.youtubeModalData=e.youtubeId}}},[r("v-icon",{attrs:{large:""}},[t._v("\n                        mdi-youtube\n                      ")])],1)],1):t._e()],1)],1)],1)])],1)],1)})),1)],1),t._v(" "),r("v-dialog",{model:{value:t.youtubeModalOn,callback:function(e){t.youtubeModalOn=e},expression:"youtubeModalOn"}},[r("youtube",{ref:"youtube",attrs:{"video-id":t.youtubeModalData,resize:!0}})],1)],1)}),[],!1,null,null,null),j=M.exports;v()(M,{VBtn:d.a,VCard:y.a,VCardSubtitle:O.b,VCardTitle:O.d,VCol:A.a,VContainer:h.a,VDialog:E.a,VIcon:F.a,VImg:f.a,VRow:m.a});var S={name:"ShowArticles",components:{ArticleList:r(347).a},props:{articles:{type:Array,required:!0}},methods:{eventOfClickedShowMoreArticles:function(){this.$ga.event({eventCategory:"Home",eventAction:"clickButton",eventLabel:"showMoreArticle",eventValue:1})}}},D=Object(o.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("h2",{staticClass:"pl-5 text-h5"},[t._v("\n      Articles\n    ")])]),t._v(" "),r("article-list",{attrs:{articles:t.articles}}),t._v(" "),r("v-row",[r("v-col",[r("v-btn",{attrs:{block:"",depressed:"",to:"/articles",nuxt:""},nativeOn:{click:function(e){return t.eventOfClickedShowMoreArticles(e)}}},[t._v("\n        もっと見る\n      ")])],1)],1)],1)}),[],!1,null,null,null),L=D.exports;v()(D,{VBtn:d.a,VCol:A.a,VContainer:h.a,VRow:m.a});var R={layout:"full",components:{FirstView:C,ShowTalks:j,ShowArticles:L},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("talks","2019").fetch();case 3:return n=e.sent,e.next=6,r("articles",{deep:!0}).sortBy("date","desc").limit(3).fetch();case 6:return l=e.sent,e.abrupt("return",{speakers:n,articles:l});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{titleTemplate:"TEDxNagoyaU"}}},I=Object(o.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("first-view"),this._v(" "),e("show-talks",{attrs:{speakers:this.speakers}}),this._v(" "),e("show-articles",{attrs:{articles:this.articles}})],1)}),[],!1,null,null,null);e.default=I.exports}}]);