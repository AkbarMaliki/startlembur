(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-auth-dashboard"],{6881:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.$store.state.users?[e("div",{staticClass:"nav-item"},[t._v(t._s(t.$store.state.users.displayName))]),e("div",{staticClass:"nav-item"},[t._v(t._s(t.$store.state.users.email))]),e("a",{staticClass:"btn btn-sm btn-dark text-white",on:{click:function(s){return s.preventDefault(),t.logout(s)}}},[t._v("Logout")])]:[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"login"}},[t._v("Login")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"register"}},[t._v("Register")])],1),e("a",{staticClass:"btn btn-sm btn-dark text-white",on:{click:function(s){return s.preventDefault(),t.logout(s)}}},[t._v("Logout")])]],2)},n=[],i=e("8aa5"),o=e.n(i),r={methods:{logout:function(){var t=this;o.a.auth().signOut().then((function(){t.$store.dispatch("logout")}))}},beforeMount:function(){this.$store.dispatch("ceklogin",{true:!0,false:!0})},mounted:function(){}},l=r,u=e("2877"),c=Object(u["a"])(l,a,n,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=page-auth-dashboard.69869943.js.map