(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-sms-sms1"],{"48bf":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"sm-form"},[s("label",{attrs:{for:"number"}},[e._v("Your number")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.no,expression:"no"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"number",name:"number",placeholder:"number"},domProps:{value:e.no},on:{input:function(t){t.target.composing||(e.no=t.target.value)}}})]),s("div",{staticClass:"sm-form"},[s("label",{attrs:{for:"message"}},[e._v("Your message")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.sms,expression:"sms"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"message",name:"message",placeholder:"message"},domProps:{value:e.sms},on:{input:function(t){t.target.composing||(e.sms=t.target.value)}}})]),s("button",{staticClass:"btn btn-sm btn-info btn-block",attrs:{type:"button"},on:{click:function(t){return e.kirim()}}},[e._v("kirim")]),s("button",{staticClass:"btn btn-sm btn-warning btn-block",attrs:{type:"button"},on:{click:function(t){return e.requrestPermission()}}},[e._v("request")])])},o=[],r=(s("bc3a"),{data:function(){return{vdata:{},no:"082251970006",sms:"hello bro"}},methods:{kirim:function(){var e=this.sms,t=this.no;document.addEventListener("deviceready",(function(){var s={replaceLineBreaks:!1,android:{intent:""}},n=function(){},o=function(e){alert("Message Failed:"+e)};sms.send("".concat(t),"".concat(e),s,n,o)}))},checkSMSPermission:function(){var e={replaceLineBreaks:!1,android:{intent:""}},t=function(){alert("Message sent successfully")},s=function(e){alert("Message Failed:"+e)};console.log(sms),sms.send("082251970006","hello world",e,t,s)},requrestPermission:function(){sms.requestPermission((function(){alert("sukses"),console.log("[OK] Permission accepted")}),(function(e){alert("gagal"),console.info("[WARN] Permission not accepted")}))}}}),a=r,i=s("2877"),c=Object(i["a"])(a,n,o,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=page-testing-sms-sms1.6eea16a4.js.map