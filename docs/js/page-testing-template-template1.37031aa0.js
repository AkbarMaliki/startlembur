(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-template-template1"],{3933:function(t,e,s){t.exports=s.p+"img/icon.9b1db0de.png"},9431:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.busy?s("Busy"):t._e(),s("imageku",{staticStyle:{"z-index":"1000"}}),s("div",{staticClass:"text-center d-sm-none"},[t.menuTrigger?t._e():s("v-touch",{staticStyle:{width:"40px",background:"transparent",height:"900px",position:"absolute",left:"0","z-index":"10001"},on:{swiperight:t.onSwipeRight}})],1),s("div",{staticClass:"container-fluid anim bg-black"},[s("div",{staticClass:"row anim"},[s("div",{staticClass:"bg-black anim col-4 col-sm-3 col-md-2",staticStyle:{position:"absolute",padding:"0",margin:"0","min-height":"760px"}},[t._m(0),s("div",{staticClass:"text-center",staticStyle:{background:"#232e30"}},[t._m(1),s("br"),s("menus")],1)]),s("div",{staticClass:"bg-black anim",class:{"col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2":t.menuTrigger,"col-sm-12":!t.menuTrigger}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12",staticStyle:{padding:"0",margin:"0"}},[s("div",{staticStyle:{height:"40px",background:"#3c8dbc",margin:"none",padding:"3px"}},[s("button",{staticClass:"btn btn-sm ml-3",staticStyle:{"border-color":"white"},attrs:{type:"button"},on:{click:function(e){t.menuTrigger=!t.menuTrigger}}},[t._m(2)]),[s("div",{staticStyle:{position:"absolute",right:"40px",top:"5px"}},[s("button",{staticClass:"btn btn-sm btn-danger mr-2",attrs:{type:"button"},on:{click:function(e){return t.$store.dispatch("logout")}}},[t._m(3)]),s("button",{staticClass:"btn btn-sm btn-warning mr-2",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/")}}},[t._m(4)])])]],2)]),s("div",{staticClass:"col-sm-12",staticStyle:{background:"#eceff4","min-height":"760px"},on:{click:function(e){t.menuTrigger=!1}}},[s("div",{staticClass:"sm:mt-2 sm:p-2"},[s("router-view",{directives:[{name:"myimage",rawName:"v-myimage"},{name:"reload",rawName:"v-reload"}],staticStyle:{"z-index":"10"}})],1)])])])])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center text-white font-bold text-times text-xs",staticStyle:{height:"40px",background:"#3580a8",margin:"none","padding-top":"10px"}},[t._v(" ADMIN DESA "),s("span",{staticClass:"typcn typcn-folder-open"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sm:p-3 text-center"},[a("img",{staticClass:"kinoLightBox img-thumbnail z-depth-2 content-center",staticStyle:{width:"50px","margin-left":"40%"},attrs:{src:s("3933"),alt:"circle"}}),a("span",{staticClass:"text-white text-times sm:ml-1 md:ml-2"},[t._v("Admin")]),a("br"),a("span",{staticClass:"text-times ml-2 text-green-light font-bold"},[t._v("Online")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tips"},[s("span",{staticClass:"typcn typcn-th-menu",staticStyle:{color:"white","margin-left":"50px"}}),s("span",{staticClass:"tipstextB"},[t._v("Slide")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tips"},[s("span",{staticClass:"typcn typcn-eject"}),s("span",{staticClass:"tipstextB"},[t._v("Logout")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tips"},[s("span",{staticClass:"typcn typcn-home"}),s("span",{staticClass:"tipstextB"},[t._v("Home")])])}],n=(s("4160"),s("c975"),s("fb6a"),s("ac1f"),s("5319"),s("159b"),s("53ca")),o=s("5530"),c=s("748e"),r=s("8ea4"),l=s("bc3a"),u=s.n(l),d=s("f051"),h=s("ee0b"),m=s("19d9"),g=s("38d8"),p={components:{imageku:d["a"],menus:r["a"],dropdown:c["a"],Busy:h["a"],Footer:m["a"],Navbar:g["a"]},data:function(){return{test:1,menuTrigger:!0,bearer:"",busy:!1}},methods:{onSwipeRight:function(){this.menuTrigger=!0},scrollOnLoad:function(){var t=this;this.$el.querySelectorAll("a.scrollactive-item").forEach((function(e){e.hash==t.$route.hash&&e.click()}))},cekAuth:function(){var t=this;null!=localStorage.getItem("auth._token.local")&&("false"==localStorage.getItem("auth._token.local")?"false"!=localStorage.getItem("auth.local")&&u.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})):u.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})))},loginOAuth:function(){var t=this,e=document.URL.indexOf("?json");e=document.URL.slice(0,e);var s=document.URL.indexOf("xxx");if(-1!=s){var a=document.URL.slice(s).replace("%20"," ").replace("#/","").replace("xxx=","");console.log(a),this.bearer=a,localStorage.setItem("auth._token.local",a),localStorage.setItem("auth.local",a),u.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:a}}).then((function(s){console.log(s.data),t.$store.commit("changeUser",s.data.user),console.log(t.$store.state.user),setTimeout((function(){window.location=e}),500)}))}},isLoginNotLocal:function(){var t=this,e=this;this.$store.state.auth.loggedIn&&"local"!=this.$store.state.auth.strategy&&!this.$store.state.auth.isAuth&&(this.busy=!0,setTimeout((function(){if(t.busy=!1,t.$store.dispatch("auth/goAuth",t.$store.state.auth.isAuth),"local"!=t.$auth.$state.strategy){var s=new Date;localStorage.setItem("expireDate",new Date(s.getTime()+36e5));var a=t.$auth.user;"facebook"==t.$auth.$state.strategy&&(a.picture=t.$auth.user.picture.data.url,a.verified=!0),t.$auth.loginWith("local",{data:Object(o["a"])(Object(o["a"])({},a),{},{oAuth:!0})}).then((function(s){
//! setelah di ganti ke login local maka redirect kemana?
t.busy=!0,setTimeout((function(){t.busy=!1,e.$store.dispatch("userRefresh"),t.$router.push("/")}),500)}))}}),1e3))},version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var t=indexedDB.deleteDatabase(this.$store.state.indexdb);t.onsuccess=function(){console.log("Deleted database successfully")},t.onerror=function(){console.log("Couldn't delete database")},t.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.scrollOnLoad(),"dekstop"!=this.$store.state.device&&this.isLoginNotLocal(),this.version(),this.loginOAuth()}},mounted:function(){var t=this;this.$store.dispatch("auth");var e=this;"object"==("undefined"===typeof cordova?"undefined":Object(n["a"])(cordova))&&document.addEventListener("deviceready",(function(){cordova.plugins.backgroundMode.enable(),cordova.plugins.backgroundMode.on("EVENT",(function(){})),cordova.plugins.backgroundMode.setDefaults({title:"HELLO",text:"World",hidden:!0,silent:!0}),cordova.plugins.notification.local.setDefaults({led:{color:"#FF00FF",on:500,off:500},vibrate:[100,50,200]})})),this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){e.mediaQueries()}))})),this.init(),setTimeout((function(){t.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(e){t.busy=e}))},head:{title:"hello",link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"},{}]}},f=p,b=s("2877"),v=Object(b["a"])(f,a,i,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=page-testing-template-template1.37031aa0.js.map