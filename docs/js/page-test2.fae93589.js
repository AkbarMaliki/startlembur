(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-test2"],{"8f36":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-sm btn-dark",on:{click:t.kirim}},[t._v("kirim ")]),t._v(" NOTIFIKASI REGISTRASI ID WEB DI MAIN.JS "),n("br"),t._v(" REGISTRASI ID ANDROID / IOS DI MOUNTED "),n("pre",[t._v("    "+t._s(t.regis)+"\n    ")])])},o=[],a=n("bc3a"),r=n.n(a),s={data:function(){return{regis:""}},mounted:function(){var t=this;document.addEventListener("deviceready",t.onDeviceReady,!1)},methods:{kirim:function(){var t=this,e={data:{title:"JR-BTN Banjarbaru",body:"go",surveyID:"ewtawgreg-gragrag-rgarhthgbad",soundname:"default",ledColor:[255,255,128,16],vibrationPattern:[250,1e3,250,500]},to:"chMhxRk_hKA:APA91bHDaSXPDYqnZHst-fKMMdc0dHyukxZjov5v9IhzR1CsjbBJlaeC7Bf8O1ynxXXesx59TAjbPABsv4VsAQbetBZf2DzvtQ_ucVNfotU1FtNNyWnFTpZ9iyzLiY-oFK1Dj9iwe1SY",priority:"high",content_available:!0};e=JSON.stringify(e),r.a.post("https://fcm.googleapis.com/fcm/send",e,{headers:{Authorization:"key=AAAAUBoNxhU:APA91bGmp6193yTOWq0XcUu4adMjbF4XVk2uqDy8V-1y7pT26S_Q1kVkYTSyLBsgU-B4lUyYDMykMKtuiQWlVeYIEr713d5Ty0GphyUxcGlMb1D1uKsOPZ4LujfYzke2qdnZOBYEMzdm","Content-Type":"application/json"}}).then((function(e){console.log(e),t.$forceUpdate()}))},onDeviceReady:function(){var t=this,e=PushNotification.init({android:{senderID:"344034493973"}});e.on("registration",(function(e){t.regis=e.registrationId})),e.on("error",(function(t){console.log(t.message)}))}}},c=s,d=n("2877"),u=Object(d["a"])(c,i,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=page-test2.fae93589.js.map