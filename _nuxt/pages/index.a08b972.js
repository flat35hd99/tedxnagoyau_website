(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{335:function(t,e,r){var content=r(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("1fb57095",content,!0,{sourceMap:!1})},339:function(t,e,r){"use strict";var n=r(335);r.n(n).a},340:function(t,e,r){(e=r(11)(!1)).push([t.i,"a[data-v-50859f1e]{padding:0}",""]),t.exports=e},341:function(t,e,r){"use strict";var n={name:"ArticleListCard",props:{article:{type:Object,required:!0}}},l=(r(339),r(15)),c=r(22),o=r.n(c),v=r(330),d=r(329),A=r(321),h=r(327),f=r(132),m=r(323),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"ma-1 mb-1",attrs:{nuxt:!0,to:t.article.path,outlined:""}},[r("v-container",{staticClass:"pa-0"},[r("v-row",{attrs:{dense:"",align:"center"}},[r("v-col",{attrs:{xs:"12",sm:"4"}},[r("v-img",{staticClass:"white--text align-end",attrs:{contain:"","max-height":"200",src:t.article.thumbnail}})],1),t._v(" "),r("v-col",{attrs:{xs:"12",sm:"8"}},[r("v-card-title",[t._v(t._s(t.article.title))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("\n          "+t._s(t.article.date)+"\n        ")]),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(t.article.description))])])],1)],1)],1)],1)}),[],!1,null,"50859f1e",null),C=component.exports;o()(component,{VCard:v.a,VCardSubtitle:d.b,VCardText:d.c,VCardTitle:d.d,VCol:A.a,VContainer:h.a,VImg:f.a,VRow:m.a});var w={name:"ArticleList",components:{ArticleListCard:C},props:{articles:{type:Array,required:!0}}},x=Object(l.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{dense:""}},this._l(this.articles,(function(article){return e("v-col",{key:article.path,attrs:{cols:"12"}},[e("article-list-card",{attrs:{article:article}})],1)})),1)}),[],!1,null,null,null);e.a=x.exports;o()(x,{VCol:A.a,VRow:m.a})},360:function(t,e,r){var content=r(392);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("23fe8d82",content,!0,{sourceMap:!1})},391:function(t,e,r){"use strict";var n=r(360);r.n(n).a},392:function(t,e,r){(e=r(11)(!1)).push([t.i,"a[data-v-7e688a8c]{color:#fff!important;text-decoration:none}.bg-filter[data-v-7e688a8c]{-webkit-backdrop-filter:brightness(50%);backdrop-filter:brightness(50%)}",""]),t.exports=e},431:function(t,e,r){"use strict";r.r(e);r(67);var n=r(17),l={methods:{eventOfClickedEventDetail:function(){this.$ga.event({eventCategory:"Home",eventAction:"clickButton",eventLabel:"event2020",eventValue:1})}}},c=(r(391),r(15)),o=r(22),v=r.n(o),d=r(97),A=r(321),h=r(327),f=r(132),m=r(323),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-img",{staticClass:"align-center",attrs:{src:"bgFirstViewSecond.jpg",height:"100%","max-height":"600px",dark:""}},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-center",attrs:{sm:"6",xs:"12"}},[r("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("\n          2020' TEDxNagoyaU Theme\n        ")]),t._v(" "),r("v-img",{staticClass:"bg-filter",attrs:{src:"keyvisual_white.png"}})],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{sm:"6",xs:"12"}},[r("h1",{staticClass:"display-1 font-weight-thin mb-4 text-decoration-underline"},[t._v("\n          Date 10/11\n        ")]),t._v(" "),r("v-btn",{staticClass:"ma-2 red--text",attrs:{color:"white",to:"/events/2020",nuxt:"",depressed:""},nativeOn:{click:function(e){return t.eventOfClickedEventDetail(e)}}},[t._v("\n          VIEW MORE\n        ")])],1)],1)],1)],1)}),[],!1,null,"7e688a8c",null),C=component.exports;v()(component,{VBtn:d.a,VCol:A.a,VContainer:h.a,VImg:f.a,VRow:m.a});var w=r(40),x=(r(23),r(1)),k=r(393),_=r.n(k);x.a.use(_.a);var V={name:"ShowTalks",props:{speakers:{type:Array,required:!0}},data:function(){return{youtubeModalOn:!1,youtubeModalData:null}},computed:{numberOfDisplay:function(){var t;switch(this.$vuetify.breakpoint.name){case"xs":t=2;break;case"sm":t=4;break;case"md":case"lg":case"xl":t=6;break;default:t=2}return t}},methods:{slicedSpeakers:function(){var t=this.numberOfDisplay;return Object(w.a)(this.speakers).slice(0,t)}}},y=r(330),O=r(329),E=r(425),M=r(154),j=Object(c.a)(V,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",[r("h1",{staticClass:"pl-3 text-h5"},[t._v("\n        TEDxNagoyaU Talk\n      ")])]),t._v(" "),r("v-row",{attrs:{align:"center"}},t._l(t.slicedSpeakers(),(function(e){return r("v-col",{key:e.name,attrs:{xs:"12",sm:"6",md:"4"}},[r("v-card",[r("v-img",{staticClass:"align-end",attrs:{src:e.img,"lazy-src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAAAAAAZai4+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkCRkOBjOCFGLKAAAAkklEQVR42u3OwQmAMADAwO4/ZaWga+gKQsEgF8j/xkw2vgZgYWFhYWFFwsLCKoSFhVUICwurEBYWViEsLKxCWFhYhbCwsAphYWEVwsLCKoSFhVXo36zjmut8jrF2h4WFVQgLC6sQFhZWISwsrEJYWFiFsLCwCmFhYRXCwsIqhIWFVQgLC6sQFhZWISwsrEJYb7oBmCDsEMs9N24AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDktMjVUMjM6MDY6NTErMDk6MDC+nySAAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA5LTI1VDIzOjA2OjUxKzA5OjAwz8KcPAAAAABJRU5ErkJggg=="}},[r("div",{staticStyle:{background:"rgba(0,0,0,0.3)"}},[r("v-container",{staticClass:"pa-0"},[r("v-row",[r("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"8"}},[r("v-card-title",{staticClass:"white--text"},[t._v("\n                      "+t._s(e.title)+"\n                    ")]),t._v(" "),r("v-card-subtitle",{staticClass:"white--text"},[t._v("\n                      "+t._s(e.name)+"\n                    ")])],1),t._v(" "),e.youtubeId?r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"4"}},[r("v-btn",{attrs:{color:"red",text:""},on:{click:function(r){t.youtubeModalOn=!0,t.youtubeModalData=e.youtubeId}}},[r("v-icon",{attrs:{large:""}},[t._v("\n                        mdi-youtube\n                      ")])],1)],1):t._e()],1)],1)],1)])],1)],1)})),1)],1),t._v(" "),r("v-dialog",{model:{value:t.youtubeModalOn,callback:function(e){t.youtubeModalOn=e},expression:"youtubeModalOn"}},[r("youtube",{ref:"youtube",attrs:{"video-id":t.youtubeModalData,resize:!0}})],1)],1)}),[],!1,null,null,null),D=j.exports;v()(j,{VBtn:d.a,VCard:y.a,VCardSubtitle:O.b,VCardTitle:O.d,VCol:A.a,VContainer:h.a,VDialog:E.a,VIcon:M.a,VImg:f.a,VRow:m.a});var F={name:"ShowArticles",components:{ArticleList:r(341).a},props:{articles:{type:Array,required:!0}},methods:{eventOfClickedShowMoreArticles:function(){this.$ga.event({eventCategory:"Home",eventAction:"clickButton",eventLabel:"showMoreArticle",eventValue:1})}}},R=Object(c.a)(F,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("h2",{staticClass:"pl-5 text-h5"},[t._v("\n      Articles\n    ")])]),t._v(" "),r("article-list",{attrs:{articles:t.articles}}),t._v(" "),r("v-row",[r("v-col",[r("v-btn",{attrs:{block:"",depressed:"",to:"/articles",nuxt:""},nativeOn:{click:function(e){return t.eventOfClickedShowMoreArticles(e)}}},[t._v("\n        もっと見る\n      ")])],1)],1)],1)}),[],!1,null,null,null),S=R.exports;v()(R,{VBtn:d.a,VCol:A.a,VContainer:h.a,VRow:m.a});var L={layout:"full",components:{FirstView:C,ShowTalks:D,ShowArticles:S},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("talks","2019").fetch();case 3:return n=e.sent,e.next=6,r("articles",{deep:!0}).sortBy("date","desc").limit(3).fetch();case 6:return l=e.sent,e.abrupt("return",{speakers:n,articles:l});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{titleTemplate:"TEDxNagoyaU"}}},I=Object(c.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("first-view"),this._v(" "),e("show-talks",{attrs:{speakers:this.speakers}}),this._v(" "),e("show-articles",{attrs:{articles:this.articles}})],1)}),[],!1,null,null,null);e.default=I.exports}}]);