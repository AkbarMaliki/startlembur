(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-crud"],{"0362":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.crud}},[t._v("crud")]),n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.getData}},[t._v("get")])])},c=[],o=n("bc3a"),s=n.n(o),l={methods:{getData:function(){s.a.get("http://localhost:3000/api/data/alluser").then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},crud:function(){var t=new FormData;t.append("table","User"),t.append("aksi","data");var a="5cf8795a13dd04257cbc0e49";t.append("email","admin"),t.append("username","akbar"),t.append("password","maliki"),s.a.post("http://localhost:3000/api/query/".concat(a),t).then((function(t){console.log(t)}))}}},p=l,r=n("2877"),i=Object(r["a"])(p,e,c,!1,null,null,null);a["default"]=i.exports}}]);
//# sourceMappingURL=page-testing-crud.5f7a3a36.js.map