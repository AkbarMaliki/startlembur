(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-firebase-storage-index"],{"1b28":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",[t("p",[e._v("Upload an image to Firebase:")]),t("input",{attrs:{type:"file",accept:"image/*"},on:{change:e.previewImage}})]),t("div",[t("p",[e._v("Progress: "+e._s(e.uploadValue.toFixed()+"%")+" "),t("progress",{attrs:{id:"progress",max:"100"},domProps:{value:e.uploadValue}})])]),null!=e.imageData?t("div",[t("img",{staticClass:"preview",attrs:{src:e.picture}}),t("br"),t("button",{on:{click:e.onUpload}},[e._v("Upload")])]):e._e()])},o=[],i=(t("b0c0"),t("8aa5")),l=t.n(i),s={name:"Upload",data:function(){return{imageData:null,picture:null,uploadValue:0}},methods:{previewImage:function(e){this.uploadValue=0,this.picture=null,this.imageData=e.target.files[0]},onUpload:function(){var e=this;this.picture=null;var a=l.a.storage().ref("".concat(this.imageData.name)).put(this.imageData);a.on("state_changed",(function(a){e.uploadValue=a.bytesTransferred/a.totalBytes*100}),(function(e){console.log(e.message)}),(function(){e.uploadValue=100,a.snapshot.ref.getDownloadURL().then((function(a){e.picture=a,console.log("url",a)}))}))}}},u=s,r=t("2877"),p=Object(r["a"])(u,n,o,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=page-testing-firebase-storage-index.14ed2f3a.js.map