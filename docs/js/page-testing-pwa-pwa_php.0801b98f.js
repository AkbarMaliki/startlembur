(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-pwa-pwa_php"],{1148:function(t,e,a){"use strict";var o=a("a691"),n=a("1d80");t.exports="".repeat||function(t){var e=String(n(this)),a="",r=o(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(a+=e);return a}},"38cf":function(t,e,a){var o=a("23e7"),n=a("1148");o({target:"String",proto:!0},{repeat:n})},"5cc6":function(t,e,a){var o=a("74e8");o("Uint8",(function(t){return function(e,a,o){return t(this,e,a,o)}}))},"82b1":function(t,e,a){"use strict";a.r(e);var o,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" "+t._s(t.subsss)+" "),a("button",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"button"},on:{click:t.install}},[t._v("Install")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.title,expression:"vdata.title"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"title",name:"title",placeholder:"title"},domProps:{value:t.vdata.title},on:{input:function(e){e.target.composing||t.$set(t.vdata,"title",e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.content,expression:"vdata.content"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"content",name:"content",placeholder:"content"},domProps:{value:t.vdata.content},on:{input:function(e){e.target.composing||t.$set(t.vdata,"content",e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.url,expression:"vdata.url"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"url",name:"url",placeholder:"url"},domProps:{value:t.vdata.url},on:{input:function(e){e.target.composing||t.$set(t.vdata,"url",e.target.value)}}}),a("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:t.kirim}},[t._v("SEND Notification")])])},r=[],i=(a("99af"),a("d3b7"),a("ac1f"),a("38cf"),a("5319"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("bf19"),a("bc3a")),s=a.n(i),l={data:function(){return{}},mounted:function(){this.subscribe(),window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),o=t}))},methods:{kirim:function(t){var e=new FormData;e.append("datanya",JSON.stringify({content:"aaaa",title:"title",url:{link:"http://localhost:8080"}})),e.append("data",'select notifid from user where id="'.concat(t,'"')),e.append("database","loandocument"),s.a.post("http://localhost:8080/api/send_push_notification.php",e).then((function(t){console.log(t)}))},install:function(){console.log(o),void 0!==o&&(o.prompt(),o.userChoice.then((function(t){"dismissed"==t.outcome?console.log("User cancelled home screen install"):console.log("User added to home screen"),o=null})))},subscribe:function(){var t=this;"Notification"in window?Notification.requestPermission((function(e){if("granted"!==e)console.log("notifikasi tidak di perbolehkan");else{var a=t;if(!("serviceWorker"in navigator))return;navigator.serviceWorker.ready.then((function(t){console.log(t),t.pushManager.getSubscription().then((function(e){null===e&&t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:a.urlB64ToUint8Array("BHb6hCsHUmbFb8xXLP46iv_xzns76xPniKia5FiBC1sd7RiAiMuRnv1MbGo-ey5oKYwb_UIo9PBWB-yIrlHJ184")}).then((function(t){console.log("Subscribe OK:",t),a.subsss=t,localStorage.setItem("notifid",JSON.stringify(t.toJSON()))})).catch((function(t){console.log("Subscribe Error:",t)}))}))})),console.log("notifikasi aktif")}})):alert("notifikasi tidak didukung ")},login:function(){var t=this;if(console.log(this.vdata.username,this.vdata.password,md5(this.vdata.password)),"admin"==this.vdata.username&&"btnkantorcabangbanjarbaru"==this.vdata.password)this.$router.push("/driver/admin");else{var e=new FormData;e.append("username",this.vdata.username),e.append("password",md5(this.vdata.password)),s.a.post("http://localhost:8080/api/mysql/ld/login.php",e).then((function(e){console.log(e),localStorage.setItem("auth._token.local",e.data.token),localStorage.setItem("auth.local",e.data.token);var a=new FormData;a.append("data","select * from user"),s.a.post("http://localhost:8080/api/mysql/ld/getUser.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){console.log(e),t.$store.commit("changeUsers",e.data[0]),localStorage.setItem("users",JSON.stringify(e.data[0])),console.log(e.data[0]);var a=new FormData;a.append("data","update user set notifid='".concat(localStorage.getItem("notifid"),"' where id='").concat(e.data[0].id,"'")),a.append("database","loandocument"),s.a.post("http://localhost:8080/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){console.log(e),t.$forceUpdate(),t.$router.push("/ld/")}))}))})).catch((function(t){alert("username salah")}))}},urlB64ToUint8Array:function(t){for(var e="=".repeat((4-t.length%4)%4),a=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),o=window.atob(a),n=new Uint8Array(o.length),r=0;r<o.length;++r)n[r]=o.charCodeAt(r);return n}}},c=l,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,null,null);e["default"]=d.exports},"99af":function(t,e,a){"use strict";var o=a("23e7"),n=a("d039"),r=a("e8b5"),i=a("861d"),s=a("7b0b"),l=a("50c4"),c=a("8418"),u=a("65f0"),d=a("1dde"),p=a("b622"),f=a("2d00"),m=p("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",g=f>=51||!n((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=d("concat"),w=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:r(t)},y=!g||!b;o({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,o,n,r,i=s(this),d=u(i,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(r=-1===e?i:arguments[e],w(r)){if(n=l(r.length),p+n>h)throw TypeError(v);for(a=0;a<n;a++,p++)a in r&&c(d,p,r[a])}else{if(p>=h)throw TypeError(v);c(d,p++,r)}return d.length=p,d}})},bf19:function(t,e,a){"use strict";var o=a("23e7");o({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})}}]);
//# sourceMappingURL=page-testing-pwa-pwa_php.0801b98f.js.map