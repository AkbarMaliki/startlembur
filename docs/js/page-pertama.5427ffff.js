(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-pertama"],{d81d:function(t,a,s){"use strict";var e=s("23e7"),i=s("b727").map,n=s("1dde"),o=s("ae40"),r=n("map"),l=o("map");e({target:"Array",proto:!0,forced:!r||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e7af:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[s("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,224L30,213.3C60,203,120,181,180,170.7C240,160,300,160,360,170.7C420,181,480,203,540,181.3C600,160,660,96,720,90.7C780,85,840,139,900,138.7C960,139,1020,85,1080,96C1140,107,1200,181,1260,213.3C1320,245,1380,235,1410,229.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"}})]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("Setting Profile :")]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"md-form form-sm"},[s("span",{staticClass:"typcn typcn-business-card text-lg"}),t._v(" "),s("label",{attrs:{for:"nip"}},[t._v("nip")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nip,expression:"vdata.nip"}],staticClass:"form-control",attrs:{type:"text",id:"nip",name:"nip",required:""},domProps:{value:t.vdata.nip},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nip",a.target.value)}}})]),s("div",{staticClass:"md-form form-sm"},[s("span",{staticClass:"typcn typcn-user-add text-lg"}),t._v(" "),s("label",{attrs:{for:"nama"}},[t._v("Nama")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama,expression:"vdata.nama"}],staticClass:"form-control",attrs:{type:"text",id:"nama",name:"nama",required:""},domProps:{value:t.vdata.nama},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama",a.target.value)}}})]),s("div",{staticClass:"md-form form-sm"},[s("span",{staticClass:"typcn typcn-group text-lg"}),t._v(" "),s("label",{attrs:{for:"unit"}},[t._v("Unit")]),s("v-select",{attrs:{required:"",options:t.units,label:"nama_unit"},model:{value:t.vdata.unit,callback:function(a){t.$set(t.vdata,"unit",a)},expression:"vdata.unit"}})],1),s("br"),s("div",{staticClass:"md-form form-sm"},[s("span",{staticClass:"typcn typcn-phone text-lg"}),t._v(" "),s("label",{attrs:{for:"nohp"}},[t._v("NO WA (optional)")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nohp,expression:"vdata.nohp"}],staticClass:"form-control",attrs:{type:"text",id:"nohp",name:"nohp"},domProps:{value:t.vdata.nohp},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nohp",a.target.value)}}})]),s("div",{staticClass:"md-form form-sm"},[s("span",{staticClass:"typcn typcn-image text-lg"}),t._v(" "),s("label",{attrs:{for:"gambar"}},[t._v("Gambar (optional)")]),s("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.previewImage}}),s("p",[t._v(" Progress: "+t._s(t.uploadValue.toFixed()+"%")+" "),s("progress",{attrs:{id:"progress",max:"100"},domProps:{value:t.uploadValue}})]),s("hr",{staticClass:"style2"}),null!=t.imageData?s("div",[s("img",{staticClass:"preview",attrs:{src:t.picture}}),s("br"),s("button",{staticClass:"btn btn-sm btn-dark",on:{click:t.onUpload}},[s("span",{staticClass:"typcn typcn-upload"}),t._v(" Upload")])]):t._e()]),s("p",[t._v("Notifikasi dengan Email ? "),s("span",{staticClass:"font-bold font-times"},[t._v(" "+t._s(t.email?"aktif":"tidak aktif")+" ")])]),s("button",{staticClass:"btn btn-sm",class:{"btn-secondary":!t.email},attrs:{type:"button"},on:{click:function(a){t.email=!1,t.vdata.emails=!1}}},[t._v("OFF")]),s("button",{staticClass:"btn btn-sm",class:{"btn-primary":t.email},attrs:{type:"button"},on:{click:function(a){t.email=!0,t.vdata.emails=!0}}},[t._v("ON")]),t.email?s("div",{staticClass:"md-form form-sm"},[s("span",{staticClass:"typcn typcn-mail text-lg"}),t._v(" "),s("label",{attrs:{for:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.emailnotif,expression:"vdata.emailnotif"}],staticClass:"form-control",attrs:{type:"email",id:"email",name:"email",required:""},domProps:{value:t.vdata.emailnotif},on:{input:function(a){a.target.composing||t.$set(t.vdata,"emailnotif",a.target.value)}}})]):t._e(),s("br"),t.vdata.nama.length>0?s("button",{staticClass:"btn btn-sm btn-style9 float-right ",attrs:{type:"button"},on:{click:function(a){return t.next()}}},[t._v("Next "),s("span",{staticClass:"typcn typcn-arrow-right"})]):t._e()])]),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[s("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,224L30,213.3C60,203,120,181,180,170.7C240,160,300,160,360,170.7C420,181,480,203,540,181.3C600,160,660,96,720,90.7C780,85,840,139,900,138.7C960,139,1020,85,1080,96C1140,107,1200,181,1260,213.3C1320,245,1380,235,1410,229.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"}})])])},i=[],n=(s("d81d"),s("b0c0"),s("5530")),o=(s("bc3a"),s("8aa5")),r=s.n(o),l=r.a.firestore(),m={data:function(){return{vdata:{nama:"",unit:"",nohp:"-",gambar:""},units:[],imageData:null,email:!1,picture:null,uploadValue:0}},beforeMount:function(){"true"==this.$store.state.users.pertama&&this.$router.push("/lembur")},methods:{next:function(){var t=this;console.log(this.vdata),l.collection("users").doc(this.$store.state.users.uid).set(Object(n["a"])(Object(n["a"])({},this.vdata),{},{pertama:"true"}),{merge:!0}).then((function(a){t.$router.push("/kedua")}))},previewImage:function(t){this.uploadValue=0,this.picture=null,this.imageData=t.target.files[0]},onUpload:function(){var t=this;this.picture=null;var a=r.a.storage().ref("".concat(this.imageData.name)).put(this.imageData);a.on("state_changed",(function(a){t.uploadValue=a.bytesTransferred/a.totalBytes*100}),(function(t){console.log(t.message)}),(function(){t.uploadValue=100,a.snapshot.ref.getDownloadURL().then((function(a){t.picture=a,console.log("url",a),t.vdata.gambar=a}))}))}},mounted:function(){var t=this;this.vdata.nip=this.$store.state.users.nip,this.vdata.nama=this.$store.state.users.nama,this.vdata.unit=this.$store.state.users.unit,this.vdata.emails=!!this.$store.state.users.emails,this.email=this.$store.state.users.emails,this.vdata.emailnotif=this.$store.state.users.emailnotif?this.$store.state.users.emailnotif:"-",this.vdata.nohp=this.$store.state.users.nohp?this.$store.state.users.nohp:"-",this.vdata.gambar=this.$store.state.users.gambar?this.$store.state.users.gambar:"-",this.$forceUpdate(),l.collection("unit").get().then((function(a){var s=a.docs.map((function(t){return Object(n["a"])({id:t.id},t.data())}));s=_.orderBy(s,["nama_unit"],["asc"]),t.units=s,console.log(t.units)}))}},c=m,u=s("2877"),p=Object(u["a"])(c,e,i,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=page-pertama.5427ffff.js.map