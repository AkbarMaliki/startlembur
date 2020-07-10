(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-lembur-head2-approve"],{"03a0":function(t,a,e){var n=e("25bb"),r=e("d309");t.exports={distanceInWords:n(),format:r()}},"25bb":function(t,a){function e(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function a(a,e,n){var r;return n=n||{},r="string"===typeof t[a]?t[a]:1===e?t[a].one:t[a].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"dalam waktu "+r:r+" yang lalu":r}return{localize:a}}t.exports=e},5970:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("button",{staticClass:"btn btn-sm btn-style1 font-bold text-uppercase underline",staticStyle:{position:"absolute","z-index":"10"},attrs:{type:"button"},on:{click:function(a){return t.$router.go(-1)}}},[e("span",{staticClass:"text-xl typcn typcn-arrow-left"}),t._v(" Kembali ")]),e("svg",{staticClass:"animated fadeInDown",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,106.7C840,64,960,32,1080,69.3C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"}})]),t.ready?e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("DISPOSISI HEAD")]),e("div",{staticClass:"card-body"},[e("tr",[e("td",[t._v("NIP")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(t.datanya.nip))])]),e("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"kinoLightBox img-fluid rounded-circle float-right",staticStyle:{"margin-top":"-10px",width:"40px",height:"40px"},attrs:{src:t.datanya.from.gambar}}),t._v(" Nama : "+t._s(t.datanya.nama)+" "),e("br"),t._v(" Unit : "+t._s(t.datanya.from.unit.nama_unit)+" "),e("tr",[e("td",[t._v("Tanggal Lembur")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(t.format(t.datanya.tanggal_lembur)))])]),e("tr",[e("td",[t._v("Jenis Pekerjaan")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(t.datanya.jenis_pekerjaan))])]),e("tr",[e("td",[t._v("Rincian lembur")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(t.datanya.rincian_kerja))])]),e("span",{staticClass:"text-sm float-right"},[t._v(t._s(t.distanceToNow(t.datanya.createAt.toDate()))+" Yang lalu")]),e("br"),e("hr",{staticClass:"style13"}),e("div",{staticClass:"sm-form"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.vdata.disposisi2,expression:"vdata.disposisi2"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"disposisi1",name:"disposisi1",rows:"2",placeholder:"disposisi ..."},domProps:{value:t.vdata.disposisi2},on:{input:function(a){a.target.composing||t.$set(t.vdata,"disposisi2",a.target.value)}}})]),e("br"),e("br"),e("button",{staticClass:"btn btn-sm btn-style9 float-right",attrs:{type:"button"},on:{click:t.approve}},[t._v("Approve")]),e("button",{staticClass:"btn btn-sm btn-style9",staticStyle:{background:"linear-gradient(349deg, rgba(227,23,23,0.5410539215686274) 0%, rgba(232,53,17,0.8603816526610644) 97%)"},attrs:{type:"button"},on:{click:t.batal}},[t._v("BATAL")])])]):e("div",[e("p",{staticClass:"p-3 font-bold font-medium text-center animated bounce infinite"},[t._v("DATA TIDAK DITEMUKAN ...")])])])},r=[],o=(e("4de4"),e("d81d"),e("5530")),i=(e("bc3a"),e("8aa5")),s=e.n(i),u=e("03a0"),d=s.a.firestore(),c={data:function(){return{datanya:{},vdata:{disposisi2:""},ready:!1,units:[]}},methods:{approve:function(){var t=this;confirm("yakin meng approve lemburan ?")&&(this.$store.dispatch("notifikasi",{title:"Permintaan lembur diterima !",body:"Permintaan lembur dari "+t.datanya.from.nama+" telah di disposisi",link:"/lembur/history",from:t.datanya.from,uid:t.datanya.from.uid,to:t.datanya.from}),console.log("uid",t.datanya.from.uid),d.collection("users").doc(t.datanya.from.uid).collection("lembur").doc(this.$route.query.id).set({status:3,disposisi_head:this.$store.state.users,disposisi2:this.vdata.disposisi2},{merge:!0}).then((function(a){d.collection("users").doc(t.datanya.from.uid).collection("lembur").doc(t.$route.query.id).get().then((function(a){console.log("select",a.data()),d.collection("users").doc(t.datanya.from.uid).collection("history-lembur").doc().set(Object(o["a"])({},a.data()),{merge:!0}).then((function(a){d.collection("users").doc(t.datanya.from.uid).collection("lembur").doc(t.$route.query.id).delete().then((function(a){t.$router.push("/lembur")}))}))}))})))},batal:function(){var t=this;if(confirm("yakin membatalkan lemburan?")){var a=prompt("Alasan dibatalkan ? ","-");console.log(t.datanya.from),this.$store.dispatch("notifikasi",{title:"Permintaan lembur dibatalkan",body:a,link:"/lembur",from:this.$store.state.users,uid:t.datanya.from.uid,to:t.datanya.from}),d.collection("users").doc(this.datanya.from.uid).collection("lembur").doc(this.$route.query.id).delete().then((function(a){t.$router.push("/lembur")}))}},distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:u,includeSeconds:!0})},format:function(t){return this.$datefns.format(new Date(t),"DD MMMM YYYY",{locale:u})}},mounted:function(){var t=this;console.log(this.$route.query),d.collection("users").where("bagian","==","deputy").get().then((function(a){var e=a.docs.map((function(t){return Object(o["a"])({id:t.id},t.data())}));t.units=e})),d.collectionGroup("lembur").where("status","==",2).get().then((function(a){var e=a.docs.map((function(t){return Object(o["a"])({id:t.id},t.data())}));e=e.filter((function(a){if(a.id==t.$route.query.id)return a})),console.log("datanya",e),t.datanya=e[0],e[0]&&(t.ready=!0)}))},layout:"lembur"},l=c,m=e("2877"),f=Object(m["a"])(l,n,r,!1,null,null,null);a["default"]=f.exports},d309:function(t,a,e){var n=e("90e5");function r(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],a=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],e=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],i=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],s=["AM","PM"],u=["am","pm"],d=["a.m.","p.m."],c={MMM:function(a){return t[a.getMonth()]},MMMM:function(t){return a[t.getMonth()]},dd:function(t){return e[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return i[t.getDay()]},A:function(t){return t.getHours()/12>=1?s[1]:s[0]},a:function(t){return t.getHours()/12>=1?u[1]:u[0]},aa:function(t){return t.getHours()/12>=1?d[1]:d[0]}},l=["M","D","DDD","d","Q","W"];return l.forEach((function(t){c[t+"o"]=function(a,e){return o(e[t](a))}})),{formatters:c,formattingTokensRegExp:n(c)}}function o(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=r},d81d:function(t,a,e){"use strict";var n=e("23e7"),r=e("b727").map,o=e("1dde"),i=e("ae40"),s=o("map"),u=i("map");n({target:"Array",proto:!0,forced:!s||!u},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=page-lembur-head2-approve.cb1edf13.js.map