(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-mobile-authmobile"],{"334a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("br"),a("hr",{staticClass:"style13"}),t.errore?a("div",{staticClass:"alert alert-danger text-center",attrs:{role:"alert"}},[t._v("Username / Password salah")]):t._e(),a("div",{staticClass:"text-center font-bold uppercase font-times"},[t._v("Login")]),a("form",{staticStyle:{"font-family":"times new roman","line-height":"0.5"},attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.loginLocal(e)}}},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"username"}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.username,expression:"vdata.username"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"Username"},domProps:{value:t.vdata.username},on:{input:function(e){e.target.composing||t.$set(t.vdata,"username",e.target.value)}}})]),a("br"),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.password,expression:"vdata.password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",type:"text",placeholder:"password"},domProps:{value:t.vdata.password},on:{input:function(e){e.target.composing||t.$set(t.vdata,"password",e.target.value)}}})]),a("br"),a("br"),a("br"),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btns btns-sm bg-black text-white",attrs:{type:"submit"}},[t._v("Login")]),a("br"),a("br"),a("p",{staticStyle:{"line-height":"1.5"}},[t._v("Belum punya akun ? "),a("router-link",{attrs:{to:"/register"}},[t._v("Daftar")])],1)])])]),a("div",{staticClass:"col-sm-6",staticStyle:{"box-shadow":"1px 4px 4px gray","border-radius":"5%"}},[a("div",{staticClass:"bg-white text-black rounded-lg p-10 text-center"},[[a("div",{staticStyle:{height:"20px"}})],a("div",{staticClass:"text-center font-bold font-times"},[t._v("Daftar/Masuk dengan Akun Social :")]),a("button",{staticClass:"btn btn-sm btn-danger btn-block",attrs:{type:"button"},on:{click:t.loginGoogle}},[a("span",{staticClass:"typcn typcn-social-google-plus"}),t._v(" Google ")]),a("button",{staticClass:"btn btn-sm btn-primary btn-block",attrs:{type:"button"},on:{click:t.loginFacebook}},[a("span",{staticClass:"typcn typcn-social-facebook-circular"}),t._v(" Facebook ")])],2)])])]),a("br"),a("hr",{staticClass:"style13"}),a("button",{staticClass:"btn btn-sm btn-danger btn-block",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("logout")}}},[t._v("logout")]),t._v(" "+t._s(t.$store.state.user)+" ")])},s=[],n=(a("96cf"),a("1da1")),r=a("5530"),i=(a("bc3a"),{data:function(){return{vdata:{},result:{},errore:!1}},methods:{loginLocal:function(){var t=this,e={method:"post",data:{username:t.vdata.username,password:t.vdata.password}};cordova.plugin.http.sendRequest(this.$store.state.url+"/api/auth/login",e,(function(e){alert(JSON.stringify(e.data));var a=JSON.parse(e.data);a="bearer "+a.token.accessToken,console.log(a),localStorage.setItem("auth._token.local",a);var o={method:"get",headers:{Authorization:a}};cordova.plugin.http.sendRequest(t.$store.state.url+"/api/auth/user",o,(function(e){var a=JSON.parse(e.data).user;t.$store.commit("changeUser",a)}),(function(e){t.errore=!0}))}),(function(e){t.errore=!0,alert(JSON.stringify(e))}))},loginGoogle:function(){var t=this;window.plugins.googleplus.login({},(function(e){alert(JSON.stringify(e));var a={method:"post",data:Object(r["a"])(Object(r["a"])({},e),{},{oAuth:!0})};cordova.plugin.http.sendRequest(t.$store.state.url+"/api/auth/login",a,(function(e){var a=JSON.parse(e.data);a="bearer "+a.token.accessToken,console.log(a),localStorage.setItem("auth._token.local",a);var o={method:"get",headers:{Authorization:a}};cordova.plugin.http.sendRequest(t.$store.state.url+"/api/auth/user",o,(function(e){var a=JSON.parse(e.data).user;t.$store.commit("changeUser",a)}),(function(t){}))}),(function(t){alert(JSON.stringify(t))}))}),(function(t){alert(JSON.stringify(t))}))},loginFacebook:function(){var t=this;facebookConnectPlugin.login(["public_profile","email"],(function(e){console.log(JSON.stringify(e)),facebookConnectPlugin.api("/me?fields=email,name,picture",["public_profile","email"],(function(e){var a=e.picture.data.url,o={method:"post",data:Object(r["a"])(Object(r["a"])({},e),{},{picture:a,verified:!0,oAuth:!0})};cordova.plugin.http.sendRequest(t.$store.state.url+"/api/auth/login",o,(function(e){var a=JSON.parse(e.data),o="bearer "+a.token.accessToken,s={method:"get",headers:{Authorization:o}};cordova.plugin.http.sendRequest(t.$store.state.url+"/api/auth/user",s,(function(e){var a=JSON.parse(e.data).user;t.$store.commit("changeUser",Object(r["a"])({},a))}),(function(t){}))}),(function(t){}))}),(function(t){alert(JSON.stringify(t))}))}),(function(t){alert(JSON.stringify(t))}))},facebookG:function(){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:alert("sup");case 1:case"end":return t.stop()}}),t)})))()},cek:function(){alert("start"),cordovaHTTP.post(this.$store.state.url+"/api/auth/login",{username:"akbar",password:"akbar"},{Authorization:"OAuth2: token"},(function(t){alert(JSON.stringify(t))}),(function(t){console.log(t.error)}))}},mounted:function(){}}),l=i,c=a("2877"),u=Object(c["a"])(l,o,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=page-testing-mobile-authmobile.e5456160.js.map