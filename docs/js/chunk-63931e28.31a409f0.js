(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63931e28"],{"7b3d":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$store.state.busy?n("div",[e._m(0)]):e._e(),n("router-view")],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"absolute",height:"100vh",width:"100vw",background:"linear-gradient(90deg, rgba(8,34,11,0.5522584033613445) 3%, rgba(1,11,2,0.5046393557422969) 98%)",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)","z-index":"100"}},[n("p",{staticClass:"font-bold text-2xl text-red animated bounce infinite",staticStyle:{position:"absolute",top:"50%",left:"30%",transform:"translateX(-50%) translateY(-50%)","z-index":"100"}},[e._v("LOADING ...")])])}],i=(n("99af"),n("c975"),n("53ca")),r=n("bc3a"),s=n.n(r),c=n("8aa5"),d=n.n(c),l=(d.a.firestore(),{data:function(){return{test:1,bearer:"",busy:!1}},methods:{mails:function(e,t,n){var o=this,a=new FormData;a.append("data","select * from tbuser where id='".concat(e,"'")),s.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){if(-1!=e.data[0].email.indexOf("@")){console.log(e.data[0].email);var a=new FormData;a.append("tujuan",e.data[0].email),a.append("subjek",t),a.append("text",n),s.a.post("https://infolayanans.space/send_mail.php",a).then((function(e){console.log(e),o.$forceUpdate()}))}else console.log("kosong")}))},notifikasi:function(e,t,n){var o=new FormData;o.append("data","insert into notifikasi (id_user,link,text,dibaca,app,button,tanggal)\n         VALUES ('".concat(e,"','").concat(t,"','").concat(n,"','false','driver','1','").concat(new Date,"')")),o.append("database"," infolay3_test"),s.a.post("https://infolayanans.space/api/mysql/auto.php",o,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(o){var a={id:uniqid(),target_id:e,app:"driver",text:n,link:t,dibaca:"false"};socket.emit("send-message",a)})).catch((function(o){var a={id:uniqid(),target_id:e,app:"driver",text:n,link:t,dibaca:"false"};socket.emit("send-message",a)}))},version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var e=indexedDB.deleteDatabase(this.$store.state.indexdb);e.onsuccess=function(){console.log("Deleted database successfully")},e.onerror=function(){console.log("Couldn't delete database")},e.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.version(),this.loginOAuth()}},mounted:function(){var e=this,t=this;//! idleLogout();
window.addEventListener("scroll",(function(e){this.scrollY}));var n=document.createElement("script");n.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"),document.head.appendChild(n),setTimeout((function(){(new WOW).init()}),500),document.addEventListener("deviceready",(function(){var e=PushNotification.init({android:{senderID:"527099963081",sound:"true",vibrate:"true",clearNotifications:!0,forceShow:!0},ios:{alert:"true",badge:"true",sound:"true"}});PushNotification.createChannel((function(){console.log("success")}),(function(){console.log("error")}),{id:"test-channel",description:"My first test channel",importance:5,vibration:[500,1e3,500,500],sound:"test"}),e.on("registration",(function(e){localStorage.setItem("notifid",e.registrationId),t.regis=e.registrationId,t.$forceUpdate()})),e.on("notification",(function(e){})),e.on("error",(function(e){console.log(e.message)}))}),!1),"object"===("undefined"===typeof cordova?"undefined":Object(i["a"])(cordova))&&document.addEventListener("deviceready",(function(){cordova.plugins.backgroundMode.enable(),cordova.plugins.backgroundMode.on("EVENT",(function(){})),window.powerManagement.dim((function(){console.log("Wakelock acquired")}),(function(){console.log("Failed to acquire wakelock")})),cordova.plugins.backgroundMode.setDefaults({title:"HELLO",text:"World",hidden:!0,silent:!0}),cordova.plugins.notification.local.setDefaults({led:{color:"#FF00FF",on:500,off:500},vibrate:[100,50,200]})})),this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){t.mediaQueries()}))})),setTimeout((function(){e.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(t){e.busy=t}))}}),u=l,f=(n("f70f"),n("2877")),p=Object(f["a"])(u,o,a,!1,null,null,null);t["default"]=p.exports},"99af":function(e,t,n){"use strict";var o=n("23e7"),a=n("d039"),i=n("e8b5"),r=n("861d"),s=n("7b0b"),c=n("50c4"),d=n("8418"),l=n("65f0"),u=n("1dde"),f=n("b622"),p=n("2d00"),h=f("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",b=p>=51||!a((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),v=u("concat"),w=function(e){if(!r(e))return!1;var t=e[h];return void 0!==t?!!t:i(e)},k=!b||!v;o({target:"Array",proto:!0,forced:k},{concat:function(e){var t,n,o,a,i,r=s(this),u=l(r,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(i=-1===t?r:arguments[t],w(i)){if(a=c(i.length),f+a>g)throw TypeError(m);for(n=0;n<a;n++,f++)n in i&&d(u,f,i[n])}else{if(f>=g)throw TypeError(m);d(u,f++,i)}return u.length=f,u}})},f70f:function(e,t,n){"use strict";var o=n("fb80"),a=n.n(o);a.a},fb80:function(e,t,n){}}]);
//# sourceMappingURL=chunk-63931e28.31a409f0.js.map