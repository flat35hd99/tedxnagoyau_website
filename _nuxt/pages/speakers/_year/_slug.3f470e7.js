(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{284:function(t,e,n){"use strict";var strong=n(286),r=n(285);t.exports=n(287)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},285:function(t,e,n){var r=n(29);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},286:function(t,e,n){"use strict";var r=n(34).f,o=n(90),c=n(175),l=n(60),f=n(173),d=n(174),v=n(132),h=n(177),y=n(133),O=n(30),j=n(130).fastKey,_=n(285),w=O?"_s":"size",m=function(t,e){var n,r=j(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[w]=0,null!=r&&d(r,n,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=_(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[w]=0},delete:function(t){var n=_(this,e),r=m(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[w]--}return!!r},forEach:function(t){_(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(_(this,e),t)}}),O&&r(h.prototype,"size",{get:function(){return _(this,e)[w]}}),h},def:function(t,e,n){var r,o,c=m(t,e);return c?c.v=n:(t._l=c={i:o=j(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[w]++,"F"!==o&&(t._i[o]=c)),t},getEntry:m,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=_(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))}),n?"entries":"values",!n,!0),y(e)}}},287:function(t,e,n){"use strict";var r=n(20),o=n(13),c=n(37),l=n(175),meta=n(130),f=n(174),d=n(173),v=n(29),h=n(31),y=n(131),O=n(89),j=n(134);t.exports=function(t,e,n,_,w,m){var S=r[t],k=S,P=w?"set":"add",E=k&&k.prototype,C={},x=function(t){var e=E[t];c(E,t,"delete"==t||"has"==t?function(a){return!(m&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return m&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof k&&(m||E.forEach&&!h((function(){(new k).entries().next()})))){var D=new k,N=D[P](m?{}:-0,1)!=D,M=h((function(){D.has(1)})),B=y((function(t){new k(t)})),F=!m&&h((function(){for(var t=new k,e=5;e--;)t[P](e,e);return!t.has(-0)}));B||((k=e((function(e,n){d(e,k,t);var r=j(new S,e,k);return null!=n&&f(n,w,r[P],r),r}))).prototype=E,E.constructor=k),(M||F)&&(x("delete"),x("has"),w&&x("get")),(F||N)&&x(P),m&&E.clear&&delete E.clear}else k=_.getConstructor(e,t,w,P),l(k.prototype,n),meta.NEED=!0;return O(k,t),C[t]=k,o(o.G+o.W+o.F*(k!=S),C),m||_.setStrong(k,t,w),k}},290:function(t,e,n){"use strict";n(10),n(8),n(48),n(36),n(41);var r=n(2),o=(n(46),n(284),n(40),n(5),n(4),n(9),n(19),n(176),n(0)),c=n(61),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(O)};function _(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},293:function(t,e,n){"use strict";n(10),n(8);var r=n(2),o=(n(46),n(284),n(40),n(5),n(4),n(9),n(36),n(41),n(176),n(0)),c=n(61),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.r)(r)]=e(),n}),{})}var O=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:O}})),_=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},w=y("justify",(function(){return{type:String,default:null,validator:_}})),m=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:m}})),k={align:Object.keys(j),justify:Object.keys(w),alignContent:Object.keys(S)},P={align:"align",justify:"justify",alignContent:"align-content"};function E(t,e,n){var r=P[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var C=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},j),{},{justify:{type:String,default:null,validator:_}},w),{},{alignContent:{type:String,default:null,validator:m}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=C.get(l);return d||function(){var t,e;for(e in d=[],k)k[e].forEach((function(t){var r=n[t],o=E(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},316:function(t,e,n){"use strict";n.r(e);n(66);var r=n(15),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("speakers",r.year,r.slug).fetch();case 3:return o=e.sent,e.abrupt("return",{params:r,speaker:o});case 5:case"end":return e.stop()}}),e)})))()}},c=n(39),l=n(47),f=n.n(l),d=n(290),v=n(293),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.speaker.name))]),this._v(" "),e("v-row",[e("v-col")],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:d.a,VRow:v.a})}}]);