(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],m=0,d=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("global-header"),a("v-content",[a("router-view")],1),a("global-footer")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"white"}},[a("v-img",{attrs:{src:"https://live.staticflickr.com/65535/49633281918_bcdc62932a_b.jpg",contain:!0,"max-height":"25",position:"left"}})],1)},s=[],l={name:"GlobalHeader"},c=l,u=a("2877"),m=a("6544"),d=a.n(m),v=a("40dc"),p=a("adda"),g=Object(u["a"])(c,o,s,!1,null,"744ffd76",null),h=g.exports;d()(g,{VAppBar:v["a"],VImg:p["a"]});var f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",[a("v-card-text",{staticClass:"text-center"},[t._v("© TEDxNagoyaU")])],1)},_=[],b={name:"GlobalFooter"},x=b,y=a("99d9"),w=a("553a"),V=Object(u["a"])(x,f,_,!1,null,"13456024",null),j=V.exports;d()(V,{VCardText:y["b"],VFooter:w["a"]});var T={name:"App",components:{GlobalHeader:h,GlobalFooter:j},data:function(){return{}}},C=T,k=a("7496"),E=a("a75b"),S=Object(u["a"])(C,i,r,!1,null,null,null),L=S.exports;d()(S,{VApp:k["a"],VContent:E["a"]});var D=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("the-first-view")],1),a("div",{},[a("tedx-nagoyau")],1),a("div",[a("mission-vision-session")],1),a("div",[a("please-sponsor")],1),a("div",[a("plan-session")],1),a("div",{},[a("past-sponsor-session")],1),a("div",[a("Contact")],1)])},P=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{attrs:{src:"https://live.staticflickr.com/65535/48247140977_d4ea623259_o.jpg",height:"600"}},[a("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[a("h1",{staticClass:"black--text mb-4 display-1 text-xs-center"},[t._v("協賛企業募集 ")]),a("div",{staticClass:"white--text subheading text-xs-center",staticStyle:{"font-weight":"900","text-shadow":"2px 2px #000000","border-bottom":"solid 2px red"}},[t._v("理念に共感し、応援してくださる方々を探しています。")])])],1)},U=[],$={name:"TheFirstView"},H=$,I=a("a722"),F=a("8b9c"),M=Object(u["a"])(H,N,U,!1,null,"49b06790",null),A=M.exports;d()(M,{VLayout:I["a"],VParallax:F["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-parallax",{attrs:{src:t.imgLink.missionView}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("Mission")]),a("h3",{staticClass:"subheading"},[t._v("ありたい姿に向かって挑戦し、ひとりひとりが楽しく生きる社会の実現")]),a("p"),a("p",{staticStyle:{"line-height":"2em"}},[t._v('"should" (しなければならない) があふれる社会から、"want" (やりたい) があふれる社会へ。')])])],1)],1),a("v-parallax",{attrs:{src:t.imgLink.visionView}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("Vision")]),a("h3",{staticClass:"subheading"},[t._v("あらゆる人と人、アイデアとアイデアをつなげ、挑戦するに足る高いエネルギーを生み出す")]),a("p",[t._e()]),a("p",{staticStyle:{"line-height":"2em"}},[t._v("新しいアイデアに触れ、様々な人と交流することで新たな自分を見つけ、一歩踏み出すエネルギーを創出する。")])])],1)],1)],1)},z=[],G={name:"MissionVisionSession",data:function(){return{imgLink:{missionView:"img/25.jpg",visionView:"img/23.jpg"}}}},q=G,J=a("62ad"),Y=a("0fd9"),B=Object(u["a"])(q,R,z,!1,null,null,null),W=B.exports;d()(B,{VCol:J["a"],VParallax:F["a"],VRow:Y["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("協賛プラン")]),a("p",[t._v("TEDxNagoyaUにご協賛していただくにあたり、いくつかのプランをご用意させていただきました。下記プランの組み合わせにより、協賛金額が上下いたします。")]),a("p",[t._v("また、全ての協賛企業様の企業名を、弊団体のホームページに掲載させていただくほか、当日イベント（10/11）と活動報告会（10/25）にご招待致します。")])])],1),a("v-row",t._l(t.planList,(function(e){return a("v-col",{key:e.title,attrs:{xs:"12",sm:"6",md:"4"}},[a("v-card",{attrs:{height:"100%"}},[a("v-img",{attrs:{src:e.img}}),a("v-card-title",[t._v(t._s(e.title))]),a("v-card-subtitle",[t._v(t._s(e.price)),e.per?a("span",[t._v(" / "+t._s(e.per))]):t._e()]),a("v-card-text",[t._v(t._s(e.desc))])],1)],1)})),1)],1)},K=[],Q={name:"PlanSession",data:function(){return{defaultElevation:20,planList:[{title:"ロゴ掲載",img:"https://live.staticflickr.com/65535/48254817982_6cd3d3b7a4_c.jpg",price:"2万円～",desc:"TEDxNagoyaUホームページ、イベントトーク動画（YouTube 公式TEDxチャンネル 総再生回数 約40万回、2020/07/03時点））など、TEDxNagoyaU2020イベントに関わる様々なところに、貴社のロゴを掲載させていただきます。",bool:!0,overlay:!0},{title:"企業宣伝",img:"img/megahon.png",price:"3万円",desc:"TEDxNagoyaUイベントにどのようなご協力をしていただいているかや、応援していただいている理由などをインタビューさせていただき、TEDxNagoyaUのホームページや公式SNSで発信いたします。"},{title:"アンケート調査",img:"img/yes_no.jpg",price:"目安2万円（3社限定）",desc:"貴社からの質問のアンケート結果と、年齢・出身地などの属性を掛け合わせた調査報告をいたします。対象である100名以上の学生に対し、調査したい質問や最近の若者の流行まで、お気軽にご質問いただけます。"},{title:"物品協賛",img:"https://live.staticflickr.com/65535/48218583016_d25eddc1d1_c.jpg",price:"ご相談ください",desc:"物品協賛は物品に応じて金額に換算し、ロゴ掲載や企業宣伝など、他の協賛プランに代えさせていただきます。"}],imgLink:{test:""}}},methods:{}},X=Q,tt=a("b0af"),et=a("a523"),at=Object(u["a"])(X,Z,K,!1,null,"2c649010",null),nt=at.exports;d()(at,{VCard:tt["a"],VCardSubtitle:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:J["a"],VContainer:et["a"],VImg:p["a"],VRow:Y["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{xs:"12",sm:"4"}},[a("v-img",{attrs:{src:"https://live.staticflickr.com/65535/49596192838_f80a0c10a7_c.jpg"}})],1),a("v-col",{attrs:{xs:"12",sm:"8"}},[a("h3",[t._v("about TEDxNagoyaU")]),a("p",[t._v("TEDxNagoyaU は、TED Talks に感銘を受けたメンバーが TEDx イベントを名古屋大学で開催しようという意気込みのもと2013年度に発足し、以降毎年TEDから正式なライセンスを取得して活動しています。 実行委員会は名古屋大学を中心とした名古屋近辺の学生のみで構成され、企画・運営を行っております。")]),a("p",[t._v("今年の本番イベントにつきましては、新型コロナウイルス感染拡大防止のため、YouTube LiveとZoomを用いたオンラインで開催いたします。イベント運営資金の多くは、協賛企業様からのご好意によって寄せられた協賛金によって成り立っています。")]),a("p",[t._v("本ページをご覧になり、私たちの"),a("strong",[t._v("理念")]),t._v("に共感し、ともに歩んでいただける方々との出会いをお待ちしております。")])])],1)],1)},rt=[],ot={name:"TedxNagoyau"},st=ot,lt=Object(u["a"])(st,it,rt,!1,null,"5314a5dc",null),ct=lt.exports;d()(lt,{VCol:J["a"],VContainer:et["a"],VImg:p["a"],VRow:Y["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{attrs:{src:t.imgLink.normalSize,height:t.parallaxHeight}},[a("v-container",[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"text-center",attrs:{xs:"12"}},[a("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("協賛のお願い")])])],1),a("v-row",{attrs:{justify:"center"}},t._l(t.messageFromTeam,(function(e){return a("v-col",{key:e.title,attrs:{cols:"12",sm:"6",md:"6"}},[a("h2",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.body))])])})),1)],1)],1)},mt=[],dt={name:"PleaseSponsor",data:function(){return{width:window.innerWidth,parallaxHeight:500,messageFromTeam:[{title:"協賛金の使途",body:"撮影・配信機材費、コンテンツ準備費、イベント広告費などに充てられます。これらの費用を総じて、今年度のオンライン本番イベントを開催するには総計約40万円が必要となります。\n我々は学生のみで活動している団体でありますので、理念に共感してくださるサポーター企業様のお力添えが必要不可欠です。"},{title:"協賛していただくメリット",body:"弊団体にご協賛していただくことで、YouTubeに公開されるトーク動画へのロゴ掲載や公式SNSへの企業紹介文の掲載などによる宣伝効果が期待できます。その上、TEDxNagoyaUのイベントは、高い理想や価値観を持った学生と多く出会える場となっておりますので、今の優秀な学生が何を考え、どのように行動したいと考えているのかを知る機会にもなります。"},{title:"理念に共感",body:"TEDxNagoyaUのイベントは毎回テーマが設定されます。このテーマは社会に関する問題意識や、皆が普段当たり前と思っていることを見直すといった鋭い視点が反映されております。このテーマに共感していただくことは、貴社の理想や目標を達成することの一助となりえます。"},{title:"協賛プラン",body:"協賛プランは、ロゴ掲載、企業宣伝、アンケート調査、物品協賛がございます。各項目の詳細は下記に説明がございます。その他ご提案いただければ、可能な限り対応させていただきます。"}],imgLink:{normalSize:"img/21.jpg",bigSize:"img/21_big.jpg"}}},methods:{},created:function(){this.width=window.innerWidth,this.width<500?(this.parallaxHeight=1200,this.imgLink.normalSize=this.imgLink.bigSize):this.width<599?this.parallaxHeight=900:this.width<800?this.parallaxHeight=800:this.parallaxHeight=500}},vt=dt,pt=Object(u["a"])(vt,ut,mt,!1,null,"49d3bc70",null),gt=pt.exports;d()(pt,{VCol:J["a"],VContainer:et["a"],VParallax:F["a"],VRow:Y["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-card",[a("v-card-title",[t._v("昨年度協賛企業様ご芳名")]),a("v-card-text",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"7"}},[a("v-img",{attrs:{src:t.imgLink.logoPartner,alt:"2019年パンフレット"},on:{load:function(e){return t.loaded()}}})],1),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("span",[t._v("Partners")]),a("ul",t._l(t.sponsorList2019normal,(function(e){return a("li",{key:e.name},[t._v(t._s(e.name)+" 様")])})),0),a("span",[t._v("Inkind Partners")]),a("ul",t._l(t.sponsorList2019material,(function(e){return a("li",{key:e.name},[t._v(t._s(e.name)+" 様")])})),0),a("span",[t._v("後援")]),a("ul",[a("li",[t._v("名古屋大学")])])])],1)],1)],1)],1)],1)],1)},ft=[],_t={name:"PastSponsorSession",data:function(){return{imgLink:{logoPartner:"img/logoMatrix.jpg"},sponsorList2019normal:[{name:"大同特殊鋼株式会社"},{name:"株式会社イエス"},{name:"アビームシステムズ株式会社"},{name:"イー・エフ・エデュケーション・ファースト・ジャパン"},{name:"株式会社青柳総本家"},{name:"株式会社サーラコーポレーション"},{name:"株式会社ソフトバリー"},{name:"株式会社キャディッシュ"},{name:"中京テレビ放送株式会社"},{name:"東京海上日動火災保険株式会社"},{name:"株式会社Harmony For"},{name:"株式会社イノベスト"},{name:"株式会社コーチング・システムズ"},{name:"株式会社ジェイエスティ"}],sponsorList2019material:[{name:"株式会社シーマ"},{name:"Peatix Japan株式会社"},{name:"磯田園製茶株式会社"},{name:"株式会社 エス・ピー・プラネット"},{name:"レッドブル・ジャパン株式会社"}],loading:!0}},methods:{loaded:function(){console.log(this.loading),this.loading=!1,console.log(this.loading)}}},bt=_t,xt=Object(u["a"])(bt,ht,ft,!1,null,"4cc9b72d",null),yt=xt.exports;d()(xt,{VCard:tt["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:J["a"],VContainer:et["a"],VImg:p["a"],VRow:Y["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-card",[a("v-card-title",[t._v("Contact & Link")]),a("v-card-text",[a("v-list",t._l(t.addressList,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[a("a",{attrs:{href:e.link}},[t._v(t._s(e.title))])]),a("v-list-item-sub-title",[t._v(t._s(e.subTitle))])],1)],1)})),1)],1)],1)],1)],1)],1)},Vt=[],jt={name:"Contact",data:function(){return{overlay:!1,addressList:[{title:"info[at]tedxnagoyau.com",link:"mail:info[at]tedxngoyau.com",icon:"mdi-email",subTitle:"[at]を@にしてご連絡ください。"},{title:"TEDxNagoyaUホームページ",link:"/",icon:"mdi-home"},{title:"イベントページ",link:"/event",icon:"mdi-ship-wheel"}]}},methods:{}},Tt=jt,Ct=a("132d"),kt=a("8860"),Et=a("da13"),St=a("5d23"),Lt=a("34c3"),Dt=Object(u["a"])(Tt,wt,Vt,!1,null,"b8cfe5a8",null),Ot=Dt.exports;d()(Dt,{VCard:tt["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:J["a"],VContainer:et["a"],VIcon:Ct["a"],VList:kt["a"],VListItem:Et["a"],VListItemContent:St["a"],VListItemIcon:Lt["a"],VListItemTitle:St["b"],VRow:Y["a"]});var Pt={name:"Home",components:{TheFirstView:A,MissionVisionSession:W,PlanSession:nt,TedxNagoyau:ct,PleaseSponsor:gt,PastSponsorSession:yt,Contact:Ot},data:function(){return{imgLink:{firstView:"https://live.staticflickr.com/65535/48247140977_d4ea623259_o.jpg",missionView:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",visionView:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",meritView:"https://superdevresources.com/wp-content/uploads/2016/02/5-backgrounds.jpg",cardA:"https://live.staticflickr.com/65535/48254749996_95807209b1_c.jpg",cardB:"https://live.staticflickr.com/65535/48247052851_1efa58fde2_c.jpg",cardC:"https://live.staticflickr.com/65535/48247052991_d905b95448_c.jpg"}}},mounted:function(){var t="協賛のお願い | TEDxNagoyaU",e="TEDxNagoyaUは名古屋大学でTEDxイベントを運営する学生のみで構成されたイベント運営団体です。";document.title=t,document.querySelector("meta[property='og:title']").setAttribute("content",t),document.querySelector("meta[name='description']").setAttribute("content",e),document.querySelector("meta[property='og:description']").setAttribute("content",e)}},Nt=Pt,Ut=Object(u["a"])(Nt,O,P,!1,null,null,null),$t=Ut.exports;n["a"].use(D["a"]);var Ht=[{path:"/",name:"Home",meta:{title:"TEDxNagoyaU 団体情報",desc:"TEDxNagoyaUは名古屋大学を中心に活動する、TEDxイベント運営団体です。毎年夏にTEDxNagoyaUを開催しています。"},component:$t}],It=new D["a"]({mode:"history",base:"",routes:Ht}),Ft=It,Mt=a("f309");n["a"].use(Mt["a"]);var At=new Mt["a"]({icon:{iconfont:"mdiSvg"}});n["a"].config.productionTip=!1,new n["a"]({router:Ft,vuetify:At,render:function(t){return t(L)}}).$mount("#app")}});
//# sourceMappingURL=app.747eb762.js.map