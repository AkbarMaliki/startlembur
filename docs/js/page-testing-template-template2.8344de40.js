(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-template-template2"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&a.rotl(t,8)|4278255360&a.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=a.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],a=0,r=0;a<t.length;a++,r+=8)e[r>>>5]|=t[a]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],a=0;a<32*t.length;a+=8)e.push(t[a>>>5]>>>24-a%32&255);return e},bytesToHex:function(t){for(var e=[],a=0;a<t.length;a++)e.push((t[a]>>>4).toString(16)),e.push((15&t[a]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],a=0;a<t.length;a+=2)e.push(parseInt(t.substr(a,2),16));return e},bytesToBase64:function(t){for(var a=[],r=0;r<t.length;r+=3)for(var n=t[r]<<16|t[r+1]<<8|t[r+2],s=0;s<4;s++)8*r+6*s<=8*t.length?a.push(e.charAt(n>>>6*(3-s)&63)):a.push("=");return a.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],r=0,n=0;r<t.length;n=++r%4)0!=n&&a.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*n+8)-1)<<2*n|e.indexOf(t.charAt(r))>>>6-2*n);return a}};t.exports=a})()},"044b":function(t,e){function a(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&a(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(a(t)||r(t)||!!t._isBuffer)}},3933:function(t,e,a){t.exports=a.p+"img/icon.9b1db0de.png"},6821:function(t,e,a){(function(){var e=a("00d8"),r=a("9a63").utf8,n=a("044b"),s=a("9a63").bin,o=function(t,a){t.constructor==String?t=a&&"binary"===a.encoding?s.stringToBytes(t):r.stringToBytes(t):n(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var i=e.bytesToWords(t),c=8*t.length,l=1732584193,u=-271733879,d=-1732584194,p=271733878,f=0;f<i.length;f++)i[f]=16711935&(i[f]<<8|i[f]>>>24)|4278255360&(i[f]<<24|i[f]>>>8);i[c>>>5]|=128<<c%32,i[14+(c+64>>>9<<4)]=c;var h=o._ff,g=o._gg,m=o._hh,v=o._ii;for(f=0;f<i.length;f+=16){var b=l,y=u,w=d,x=p;l=h(l,u,d,p,i[f+0],7,-680876936),p=h(p,l,u,d,i[f+1],12,-389564586),d=h(d,p,l,u,i[f+2],17,606105819),u=h(u,d,p,l,i[f+3],22,-1044525330),l=h(l,u,d,p,i[f+4],7,-176418897),p=h(p,l,u,d,i[f+5],12,1200080426),d=h(d,p,l,u,i[f+6],17,-1473231341),u=h(u,d,p,l,i[f+7],22,-45705983),l=h(l,u,d,p,i[f+8],7,1770035416),p=h(p,l,u,d,i[f+9],12,-1958414417),d=h(d,p,l,u,i[f+10],17,-42063),u=h(u,d,p,l,i[f+11],22,-1990404162),l=h(l,u,d,p,i[f+12],7,1804603682),p=h(p,l,u,d,i[f+13],12,-40341101),d=h(d,p,l,u,i[f+14],17,-1502002290),u=h(u,d,p,l,i[f+15],22,1236535329),l=g(l,u,d,p,i[f+1],5,-165796510),p=g(p,l,u,d,i[f+6],9,-1069501632),d=g(d,p,l,u,i[f+11],14,643717713),u=g(u,d,p,l,i[f+0],20,-373897302),l=g(l,u,d,p,i[f+5],5,-701558691),p=g(p,l,u,d,i[f+10],9,38016083),d=g(d,p,l,u,i[f+15],14,-660478335),u=g(u,d,p,l,i[f+4],20,-405537848),l=g(l,u,d,p,i[f+9],5,568446438),p=g(p,l,u,d,i[f+14],9,-1019803690),d=g(d,p,l,u,i[f+3],14,-187363961),u=g(u,d,p,l,i[f+8],20,1163531501),l=g(l,u,d,p,i[f+13],5,-1444681467),p=g(p,l,u,d,i[f+2],9,-51403784),d=g(d,p,l,u,i[f+7],14,1735328473),u=g(u,d,p,l,i[f+12],20,-1926607734),l=m(l,u,d,p,i[f+5],4,-378558),p=m(p,l,u,d,i[f+8],11,-2022574463),d=m(d,p,l,u,i[f+11],16,1839030562),u=m(u,d,p,l,i[f+14],23,-35309556),l=m(l,u,d,p,i[f+1],4,-1530992060),p=m(p,l,u,d,i[f+4],11,1272893353),d=m(d,p,l,u,i[f+7],16,-155497632),u=m(u,d,p,l,i[f+10],23,-1094730640),l=m(l,u,d,p,i[f+13],4,681279174),p=m(p,l,u,d,i[f+0],11,-358537222),d=m(d,p,l,u,i[f+3],16,-722521979),u=m(u,d,p,l,i[f+6],23,76029189),l=m(l,u,d,p,i[f+9],4,-640364487),p=m(p,l,u,d,i[f+12],11,-421815835),d=m(d,p,l,u,i[f+15],16,530742520),u=m(u,d,p,l,i[f+2],23,-995338651),l=v(l,u,d,p,i[f+0],6,-198630844),p=v(p,l,u,d,i[f+7],10,1126891415),d=v(d,p,l,u,i[f+14],15,-1416354905),u=v(u,d,p,l,i[f+5],21,-57434055),l=v(l,u,d,p,i[f+12],6,1700485571),p=v(p,l,u,d,i[f+3],10,-1894986606),d=v(d,p,l,u,i[f+10],15,-1051523),u=v(u,d,p,l,i[f+1],21,-2054922799),l=v(l,u,d,p,i[f+8],6,1873313359),p=v(p,l,u,d,i[f+15],10,-30611744),d=v(d,p,l,u,i[f+6],15,-1560198380),u=v(u,d,p,l,i[f+13],21,1309151649),l=v(l,u,d,p,i[f+4],6,-145523070),p=v(p,l,u,d,i[f+11],10,-1120210379),d=v(d,p,l,u,i[f+2],15,718787259),u=v(u,d,p,l,i[f+9],21,-343485551),l=l+b>>>0,u=u+y>>>0,d=d+w>>>0,p=p+x>>>0}return e.endian([l,u,d,p])};o._ff=function(t,e,a,r,n,s,o){var i=t+(e&a|~e&r)+(n>>>0)+o;return(i<<s|i>>>32-s)+e},o._gg=function(t,e,a,r,n,s,o){var i=t+(e&r|a&~r)+(n>>>0)+o;return(i<<s|i>>>32-s)+e},o._hh=function(t,e,a,r,n,s,o){var i=t+(e^a^r)+(n>>>0)+o;return(i<<s|i>>>32-s)+e},o._ii=function(t,e,a,r,n,s,o){var i=t+(a^(e|~r))+(n>>>0)+o;return(i<<s|i>>>32-s)+e},o._blocksize=16,o._digestsize=16,t.exports=function(t,a){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var r=e.wordsToBytes(o(t,a));return a&&a.asBytes?r:a&&a.asString?s.bytesToString(r):e.bytesToHex(r)}})()},8650:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.errore?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("strong",[t._v("USERNAME ATAU PASSWORD SALAH")])]):t._e(),a("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"username"}},[t._v("username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.username,expression:"vdata.username"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",placeholder:"username",type:"text"},domProps:{value:t.vdata.username},on:{input:function(e){e.target.composing||t.$set(t.vdata,"username",e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"password"}},[t._v("password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.password,expression:"vdata.password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",placeholder:"password",type:"password"},domProps:{value:t.vdata.password},on:{input:function(e){e.target.composing||t.$set(t.vdata,"password",e.target.value)}}})]),t._m(0)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-sm btn-outline-primary",staticStyle:{"font-family":"'Cantata One', serif"},attrs:{type:"submit"}},[t._v(" LOGIN "),a("span",{staticClass:"typcn typcn-arrow-forward"})])])}],s=a("bc3a"),o=a.n(s),i=a("6821"),c={data:function(){return{errore:!1,vdata:{}}},methods:{register:function(){this.$nuxt.$emit("login","register")},login:function(){var t=this,e=this;this.vdata.password=i(this.vdata.password),o.a.post(this.$store.state.database+"/api/auth/login",this.vdata).then((function(a){var r="bearer "+a.data.token.accessToken;o.a.get(t.$store.state.database+"/api/auth/user",{headers:{Authorization:r}}).then((function(t){localStorage.setItem("auth._token.local",r),localStorage.setItem("auth.local",r),e.$store.commit("changeUser",t.data.user),//! redirect kemana  jika berhasil login
e.$router.push("/app")}))})).catch((function(t){console.log(t),e.errore=!0}))}}},l=c,u=a("2877"),d=Object(u["a"])(l,r,n,!1,null,null,null);e["a"]=d.exports},"9a63":function(t,e){var a={utf8:{stringToBytes:function(t){return a.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(a.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],a=0;a<t.length;a++)e.push(255&t.charCodeAt(a));return e},bytesToString:function(t){for(var e=[],a=0;a<t.length;a++)e.push(String.fromCharCode(t[a]));return e.join("")}}};t.exports=a},"9d47":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid",staticStyle:{padding:"0",margin:"0"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 bg-blue-darker",staticStyle:{height:"50px",width:"100%"},attrs:{id:"header"}},[r("p",{staticClass:"float-left",staticStyle:{padding:"10px",color:"white","font-weight":"bold"}},[t._v("TAUFIK AKBAR MALIKI")]),r("button",{staticClass:"btn btn-sm btn-outline-warning float-right",staticStyle:{height:"100%",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.test()}}},[r("span",{staticClass:"typcn typcn-arrow-left"}),t._v(" Login ")]),r("button",{staticClass:"btn btn-sm btn-outline-warning float-right",staticStyle:{height:"100%",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.test()}}},[t._v("Status")])]),t._m(0),r("div",{staticClass:"col-sm-12"},[r("br"),r("hr",{staticClass:"style2"}),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 font-times uppercase",staticStyle:{"box-shadow":"1px 2px 4px 1px",padding:"20px"}},[r("login")],1),r("div",{staticClass:"col-sm-6"},[r("carousel",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"animated fadeIn",attrs:{"per-page":1,autoplay:!0,"mouse-drag":!0,loop:!0,centerMode:!0,adjustableHeight:!0,paginationActiveColor:"blue",speed:1e3}},[r("slide",{staticClass:"text-center"},[r("img",{staticClass:"kinoLightBox img-thumbnail z-depth-2",staticStyle:{"border-radius":"20px",height:"300px"},attrs:{src:a("3933"),alt:""}})]),r("slide",{staticClass:"text-center"},[r("img",{staticClass:"kinoLightBox img-thumbnail z-depth-2",staticStyle:{"border-radius":"20px",height:"300px"},attrs:{src:a("3933"),alt:""}})]),r("slide",{staticClass:"text-center"},[r("img",{staticClass:"kinoLightBox img-thumbnail z-depth-2",staticStyle:{"border-radius":"20px",height:"300px"},attrs:{src:"https://gerakanopensource.files.wordpress.com/2016/01/1.png",alt:""}})])],1)],1),t._m(1)])])])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-12",staticStyle:{height:"100px",width:"100%",background:"linear-gradient(0deg, rgba(201,219,231,1) 3%, rgba(57,77,130,0.5970763305322129) 71%)"},attrs:{id:"header2"}},[r("img",{staticClass:"kinoLightBox img-fluid z-depth-1",staticStyle:{width:"100px",padding:"10px"},attrs:{src:a("3933")}}),r("h2",{staticClass:"font-times",staticStyle:{position:"absolute","font-size":"21px",left:"120px",top:"10px",color:"black","font-weight":"bold"}},[t._v("PROGRAM KANTOR PEDESAAN")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12 p-3 bg-black font-times mt-4",staticStyle:{color:"white"}},[a("p",[t._v("Copyright © 2019 By Taufik Akbar Maliki")])])}],s=a("8650"),o={components:{login:s["a"]},data:function(){return{ready:!1}},mounted:function(){var t=this;setTimeout((function(){t.ready=!0}),1e3)},head:{title:"hello",link:[{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}]}},i=o,c=a("2877"),l=Object(c["a"])(i,r,n,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=page-testing-template-template2.8344de40.js.map