(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-template-template6"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&a.rotl(t,8)|4278255360&a.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=a.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],a=0,n=0;a<t.length;a++,n+=8)e[n>>>5]|=t[a]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],a=0;a<32*t.length;a+=8)e.push(t[a>>>5]>>>24-a%32&255);return e},bytesToHex:function(t){for(var e=[],a=0;a<t.length;a++)e.push((t[a]>>>4).toString(16)),e.push((15&t[a]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],a=0;a<t.length;a+=2)e.push(parseInt(t.substr(a,2),16));return e},bytesToBase64:function(t){for(var a=[],n=0;n<t.length;n+=3)for(var s=t[n]<<16|t[n+1]<<8|t[n+2],r=0;r<4;r++)8*n+6*r<=8*t.length?a.push(e.charAt(s>>>6*(3-r)&63)):a.push("=");return a.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],n=0,s=0;n<t.length;s=++n%4)0!=s&&a.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*s+8)-1)<<2*s|e.indexOf(t.charAt(n))>>>6-2*s);return a}};t.exports=a})()},"044b":function(t,e){function a(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&a(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(a(t)||n(t)||!!t._isBuffer)}},3025:function(t,e,a){},"32c4":function(t,e,a){"use strict";var n=a("3025"),s=a.n(n);s.a},3933:function(t,e,a){t.exports=a.p+"img/icon.9b1db0de.png"},6821:function(t,e,a){(function(){var e=a("00d8"),n=a("9a63").utf8,s=a("044b"),r=a("9a63").bin,i=function(t,a){t.constructor==String?t=a&&"binary"===a.encoding?r.stringToBytes(t):n.stringToBytes(t):s(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var o=e.bytesToWords(t),l=8*t.length,c=1732584193,u=-271733879,d=-1732584194,p=271733878,f=0;f<o.length;f++)o[f]=16711935&(o[f]<<8|o[f]>>>24)|4278255360&(o[f]<<24|o[f]>>>8);o[l>>>5]|=128<<l%32,o[14+(l+64>>>9<<4)]=l;var m=i._ff,g=i._gg,h=i._hh,v=i._ii;for(f=0;f<o.length;f+=16){var b=c,y=u,x=d,S=p;c=m(c,u,d,p,o[f+0],7,-680876936),p=m(p,c,u,d,o[f+1],12,-389564586),d=m(d,p,c,u,o[f+2],17,606105819),u=m(u,d,p,c,o[f+3],22,-1044525330),c=m(c,u,d,p,o[f+4],7,-176418897),p=m(p,c,u,d,o[f+5],12,1200080426),d=m(d,p,c,u,o[f+6],17,-1473231341),u=m(u,d,p,c,o[f+7],22,-45705983),c=m(c,u,d,p,o[f+8],7,1770035416),p=m(p,c,u,d,o[f+9],12,-1958414417),d=m(d,p,c,u,o[f+10],17,-42063),u=m(u,d,p,c,o[f+11],22,-1990404162),c=m(c,u,d,p,o[f+12],7,1804603682),p=m(p,c,u,d,o[f+13],12,-40341101),d=m(d,p,c,u,o[f+14],17,-1502002290),u=m(u,d,p,c,o[f+15],22,1236535329),c=g(c,u,d,p,o[f+1],5,-165796510),p=g(p,c,u,d,o[f+6],9,-1069501632),d=g(d,p,c,u,o[f+11],14,643717713),u=g(u,d,p,c,o[f+0],20,-373897302),c=g(c,u,d,p,o[f+5],5,-701558691),p=g(p,c,u,d,o[f+10],9,38016083),d=g(d,p,c,u,o[f+15],14,-660478335),u=g(u,d,p,c,o[f+4],20,-405537848),c=g(c,u,d,p,o[f+9],5,568446438),p=g(p,c,u,d,o[f+14],9,-1019803690),d=g(d,p,c,u,o[f+3],14,-187363961),u=g(u,d,p,c,o[f+8],20,1163531501),c=g(c,u,d,p,o[f+13],5,-1444681467),p=g(p,c,u,d,o[f+2],9,-51403784),d=g(d,p,c,u,o[f+7],14,1735328473),u=g(u,d,p,c,o[f+12],20,-1926607734),c=h(c,u,d,p,o[f+5],4,-378558),p=h(p,c,u,d,o[f+8],11,-2022574463),d=h(d,p,c,u,o[f+11],16,1839030562),u=h(u,d,p,c,o[f+14],23,-35309556),c=h(c,u,d,p,o[f+1],4,-1530992060),p=h(p,c,u,d,o[f+4],11,1272893353),d=h(d,p,c,u,o[f+7],16,-155497632),u=h(u,d,p,c,o[f+10],23,-1094730640),c=h(c,u,d,p,o[f+13],4,681279174),p=h(p,c,u,d,o[f+0],11,-358537222),d=h(d,p,c,u,o[f+3],16,-722521979),u=h(u,d,p,c,o[f+6],23,76029189),c=h(c,u,d,p,o[f+9],4,-640364487),p=h(p,c,u,d,o[f+12],11,-421815835),d=h(d,p,c,u,o[f+15],16,530742520),u=h(u,d,p,c,o[f+2],23,-995338651),c=v(c,u,d,p,o[f+0],6,-198630844),p=v(p,c,u,d,o[f+7],10,1126891415),d=v(d,p,c,u,o[f+14],15,-1416354905),u=v(u,d,p,c,o[f+5],21,-57434055),c=v(c,u,d,p,o[f+12],6,1700485571),p=v(p,c,u,d,o[f+3],10,-1894986606),d=v(d,p,c,u,o[f+10],15,-1051523),u=v(u,d,p,c,o[f+1],21,-2054922799),c=v(c,u,d,p,o[f+8],6,1873313359),p=v(p,c,u,d,o[f+15],10,-30611744),d=v(d,p,c,u,o[f+6],15,-1560198380),u=v(u,d,p,c,o[f+13],21,1309151649),c=v(c,u,d,p,o[f+4],6,-145523070),p=v(p,c,u,d,o[f+11],10,-1120210379),d=v(d,p,c,u,o[f+2],15,718787259),u=v(u,d,p,c,o[f+9],21,-343485551),c=c+b>>>0,u=u+y>>>0,d=d+x>>>0,p=p+S>>>0}return e.endian([c,u,d,p])};i._ff=function(t,e,a,n,s,r,i){var o=t+(e&a|~e&n)+(s>>>0)+i;return(o<<r|o>>>32-r)+e},i._gg=function(t,e,a,n,s,r,i){var o=t+(e&n|a&~n)+(s>>>0)+i;return(o<<r|o>>>32-r)+e},i._hh=function(t,e,a,n,s,r,i){var o=t+(e^a^n)+(s>>>0)+i;return(o<<r|o>>>32-r)+e},i._ii=function(t,e,a,n,s,r,i){var o=t+(a^(e|~n))+(s>>>0)+i;return(o<<r|o>>>32-r)+e},i._blocksize=16,i._digestsize=16,t.exports=function(t,a){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var n=e.wordsToBytes(i(t,a));return a&&a.asBytes?n:a&&a.asString?r.bytesToString(n):e.bytesToHex(n)}})()},8650:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.errore?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("strong",[t._v("USERNAME ATAU PASSWORD SALAH")])]):t._e(),a("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"username"}},[t._v("username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.username,expression:"vdata.username"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",placeholder:"username",type:"text"},domProps:{value:t.vdata.username},on:{input:function(e){e.target.composing||t.$set(t.vdata,"username",e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"password"}},[t._v("password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.password,expression:"vdata.password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",placeholder:"password",type:"password"},domProps:{value:t.vdata.password},on:{input:function(e){e.target.composing||t.$set(t.vdata,"password",e.target.value)}}})]),t._m(0)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-sm btn-outline-primary",staticStyle:{"font-family":"'Cantata One', serif"},attrs:{type:"submit"}},[t._v(" LOGIN "),a("span",{staticClass:"typcn typcn-arrow-forward"})])])}],r=a("bc3a"),i=a.n(r),o=a("6821"),l={data:function(){return{errore:!1,vdata:{}}},methods:{register:function(){this.$nuxt.$emit("login","register")},login:function(){var t=this,e=this;this.vdata.password=o(this.vdata.password),i.a.post(this.$store.state.database+"/api/auth/login",this.vdata).then((function(a){var n="bearer "+a.data.token.accessToken;i.a.get(t.$store.state.database+"/api/auth/user",{headers:{Authorization:n}}).then((function(t){localStorage.setItem("auth._token.local",n),localStorage.setItem("auth.local",n),e.$store.commit("changeUser",t.data.user),//! redirect kemana  jika berhasil login
e.$router.push("/app")}))})).catch((function(t){console.log(t),e.errore=!0}))}}},c=l,u=a("2877"),d=Object(u["a"])(c,n,s,!1,null,null,null);e["a"]=d.exports},"9a63":function(t,e){var a={utf8:{stringToBytes:function(t){return a.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(a.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],a=0;a<t.length;a++)e.push(255&t.charCodeAt(a));return e},bytesToString:function(t){for(var e=[],a=0;a<t.length;a++)e.push(String.fromCharCode(t[a]));return e.join("")}}};t.exports=a},c645:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row",staticStyle:{background:"linear-gradient(0deg, rgba(140,193,244,1) 0%, rgba(255,255,255,1) 100%)"}},[t._m(0),n("div",{staticClass:"col-sm-9"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[t._m(1),n("div",{staticClass:"col-sm-8"},[n("carousel",{attrs:{"per-page":1,autoplay:!0,"mouse-drag":!0,loop:!0,centerMode:!0,adjustableHeight:!0,paginationActiveColor:"blue",speed:1e3}},[n("slide",[n("img",{staticClass:"img-thumbnail anim zoomInS",attrs:{src:a("3933")}})]),n("slide",[n("img",{staticClass:"img-thumbnail anim zoomInS",attrs:{src:a("3933")}})])],1)],1)])])]),n("div",{staticClass:"col-sm-3 p-5 mt-2 shadow-lg rounded-full"},[t._m(2),t.$store.state.user?t._e():n(t.componentId,{tag:"component"}),0!=t.$store.state.user?n("div",{staticClass:"text-center"},[n("p",{staticClass:"text-center"},[t._v("Anda Sudah Login!")]),n("button",{staticClass:"btn btn-sm btn-outline-primary text-center",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/app")}}},[t._v("Masuk")])]):t._e()],1),t._m(3),t._m(4)])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-12 order-0 p-0 m-0"},[n("div",{staticStyle:{background:"linear-gradient(90deg, rgba(101,154,231,1) 0%, rgba(136,180,241,1) 33%, rgba(233,233,233,1) 100%)"}},[n("div",{staticClass:"d-none d-sm-block"},[n("img",{staticClass:"kinoLightBox img-fluid z-depth-2 float-left p-2",staticStyle:{height:"70px"},attrs:{src:a("3933")}})]),n("div",{staticClass:"d-block d-sm-none text-center"},[n("img",{staticClass:"kinoLightBox img-fluid z-depth-2 float-left p-2",staticStyle:{height:"70px"},attrs:{src:a("3933")}})]),n("div",{staticStyle:{height:"16px"}}),n("span",{staticClass:"animated fadeIn d-none d-sm-block",staticStyle:{"font-family":"'Cantata One', serif","font-size":"26px","animation-delay":"1s"}},[t._v("PEMERINTAH KABUPATEN HULU SUNGAI SELATAN")]),n("p",{staticClass:"animated fadeIn d-block d-sm-none",staticStyle:{"font-family":"'Cantata One', serif","font-size":"15px","animation-delay":"1s"}},[t._v("PEMERINTAH KABUPATEN HULU SUNGAI SELATAN")]),n("p",{staticClass:"float-right pr-2 pt-1 d-none d-sm-block",staticStyle:{"font-size":"13px"}},[t._v("Jl.A. Yani Km 11,2 Desa Bamban Kec.Angkinang Kab.HSS Kode pos 71291")]),n("hr",{staticClass:"style13"})]),n("span",{staticStyle:{"font-family":"'Special Elite', cursive","font-size":"25px","padding-left":"20px"}},[t._v("SELAMAT DATANG")]),n("p",{staticClass:"float-right pr-3 italic pt-3 d-none d-sm-block",staticStyle:{"font-family":"'Special Elite', cursive","font-size":"16px","padding-left":"14px"}},[t._v("APLIKASI DATA KEPENDUDUKAN DESA BAMBAN")]),n("p",{staticClass:"float-right pr-3 italic d-block d-sm-none",staticStyle:{"font-family":"'Special Elite', cursive","font-size":"12px","padding-left":"14px"}},[t._v("APLIKASI DATA KEPENDUDUKAN DESA BAMBAN")]),n("hr",{staticClass:"style16"}),n("p",{staticStyle:{"font-family":"'Special Elite', cursive","padding-left":"15%","font-size":"20px"}},[t._v("KANTOR DESA BAMBAN")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-4 order-1 text-center"},[n("p",{staticStyle:{"font-family":"'Electrolize', sans-serif"}},[t._v("Lokasi Kantor :")]),n("a",{attrs:{target:"_blank",href:"https://www.google.com/maps/place/Kantor+Desa+Bamban/@-2.708747,115.302145,17z/data=!4m5!3m4!1s0x2de5733ed9ae9519:0xbb5f9d2720ec4ec3!8m2!3d-2.7080129!4d115.3024347"}},[n("img",{staticClass:"img-thumbnail anim zoomInS",staticStyle:{"box-shadow":"3px 4px 4px 4px black"},attrs:{src:a("3933"),alt:""}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center",staticStyle:{"font-family":"'Special Elite', cursive","font-size":"25px"}},[t._v(" LOGIN "),a("span",{staticClass:"typcn typcn-group",staticStyle:{"font-size":"28px",color:"black"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12"},[a("hr",{staticClass:"style4"}),a("h2",{staticStyle:{"font-family":"'Electrolize', sans-serif","font-weight":"bold"}},[t._v("Fungsi :")]),a("p",{staticClass:"sm:pl-5 sm:pr-5 sm:pb-5 sm:pt-2 text-justify",staticStyle:{"font-family":"'Electrolize', sans-serif"}},[t._v("Fungsi kantor desa diantaranya untuk menyajikan informasi kependudukan, informasi keuangan dan informasi pembangungann desa. Untuk pengelolaan data kependudukan di desa meliputi berbagai hal antara lain pengelolaan data penduduk kelahiran, kematian , pindah dan datang serta surat keterangan lahir, surat keterangan mati dan surat pengatar pindah")]),a("hr",{staticClass:"style16"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12 bg-black text-white p-4"},[a("p",[t._v("Copyright © 2019 By Desa Bamban Kec. Angkinang")])])}],r=(a("bc3a"),a("8650")),i=(a("6821"),{data:function(){return{vdata:{},show:!1,errore:!1,componentId:"login"}},mounted:function(){var t=this;this.$nuxt.$on("login",(function(e){t.componentId=e}))},components:{login:r["a"]},head:{title:"hello",link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Cantata+One|Electrolize|Marck+Script|Rancho|Special+Elite|Tangerine&display=swap"},{rel:"stylesheet",href:"https://unpkg.com/vue2-animate/dist/vue2-animate.min.css"}]},methods:{}}),o=i,l=(a("32c4"),a("2877")),c=Object(l["a"])(o,n,s,!1,null,"05604249",null);e["default"]=c.exports}}]);
//# sourceMappingURL=page-testing-template-template6.f74f1101.js.map