(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-auth"],{5916:function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-6"},[o("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),t.loginLocal(a)}}},[o("div",{staticClass:"sm-form"},[o("label",{attrs:{for:"username"}},[t._v("Your username")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.username,expression:"vdata.username"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"username",name:"username",placeholder:"username"},domProps:{value:t.vdata.username},on:{input:function(a){a.target.composing||t.$set(t.vdata,"username",a.target.value)}}})]),o("div",{staticClass:"sm-form"},[o("label",{attrs:{for:"password"}},[t._v("Your password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.password,expression:"vdata.password"}],staticClass:"form-control form-control-sm",attrs:{type:"password",id:"password",name:"password",placeholder:"password"},domProps:{value:t.vdata.password},on:{input:function(a){a.target.composing||t.$set(t.vdata,"password",a.target.value)}}})]),o("button",{staticClass:"btns btns-sm bg-black text-white",attrs:{type:"submit"}},[t._v("Login")])])]),o("div",{staticClass:"col-sm-6"})])]),o("br"),o("button",{staticClass:"btn btn-sm btn-danger btn-block",attrs:{type:"button"},on:{click:t.logout}},[t._v("logout")]),o("hr",{staticClass:"style13"}),o("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:t.loginGoogle}},[t._v("login google")]),o("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.loginFacebook}},[t._v("login facebook")]),o("button",{staticClass:"btn btn-sm btn-warning",attrs:{type:"button",id:"cek"},on:{click:t.cek}},[t._v("cek")]),o("br"),o("br"),o("br"),o("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:function(a){return t.$router.go(-1)}}},[t._v("KEMBALI")]),o("br"),o("hr",{staticClass:"style2"}),t._v(" "+t._s(t.$store.state.user)+" "+t._s(t.result)+" "+t._s(t.vdata)+" ")])},n=[],s=o("5530"),r=(o("bc3a"),{data:function(){return{vdata:{},result:{}}},methods:{loginLocal:function(){var t=this,a={method:"post",data:{username:t.vdata.username,password:t.vdata.password}};cordova.plugin.http.sendRequest("https://banua.now.sh/api/auth/login",a,(function(a){var o=JSON.parse(a.data);o="bearer "+o.token.accessToken,console.log(o),localStorage.setItem("auth._token.local",o);var e={method:"get",headers:{Authorization:o}};cordova.plugin.http.sendRequest("https://banua.now.sh/api/auth/user",e,(function(a){var o=JSON.parse(a.data).user;t.$store.commit("changeUser",o)}),(function(t){}))}),(function(t){}))},logout:function(){this.$store.commit("changeUser",!1),localStorage.removeItem("auth._token.local"),localStorage.removeItem("auth._token.google"),localStorage.removeItem("auth._token.facebook")},loginGoogle:function(){var t=this;window.plugins.googleplus.login({},(function(a){var o={method:"post",data:Object(s["a"])(Object(s["a"])({},a),{},{oAuth:!0})};cordova.plugin.http.sendRequest("https://banua.now.sh/api/auth/login",o,(function(a){var o=JSON.parse(a.data);o="bearer "+o.token.accessToken,console.log(o),localStorage.setItem("auth._token.local",o);var e={method:"get",headers:{Authorization:o}};cordova.plugin.http.sendRequest("https://banua.now.sh/api/auth/user",e,(function(a){var o=JSON.parse(a.data).user;t.$store.commit("changeUser",o)}),(function(t){}))}),(function(t){}))}),(function(t){alert(JSON.stringify(t))}))},loginFacebook:function(){facebookConnectPlugin.login(["public_profile","email"],(function(t){console.log(JSON.stringify(t)),facebookConnectPlugin.api("/me?fields=email,name,picture",["public_profile","email"],(function(t){alert(JSON.stringify(t))}),(function(t){alert(JSON.stringify(t))}))}),(function(t){alert(JSON.stringify(t))}))},cek:function(){alert("start"),cordovaHTTP.post("https://banua.now.sh/api/auth/login",{username:"akbar",password:"akbar"},{Authorization:"OAuth2: token"},(function(t){alert(JSON.stringify(t))}),(function(t){console.log(t.error)}))}},mounted:function(){}}),i=r,l=o("2877"),u=Object(l["a"])(i,e,n,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=page-testing-auth.65b3c753.js.map