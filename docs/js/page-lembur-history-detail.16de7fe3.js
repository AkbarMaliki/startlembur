(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-lembur-history-detail"],{"03a0":function(t,a,n){var e=n("25bb"),i=n("d309");t.exports={distanceInWords:e(),format:i()}},"25bb":function(t,a){function n(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function a(a,n,e){var i;return e=e||{},i="string"===typeof t[a]?t[a]:1===n?t[a].one:t[a].other.replace("{{count}}",n),e.addSuffix?e.comparison>0?"dalam waktu "+i:i+" yang lalu":i}return{localize:a}}t.exports=n},"932b":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("button",{staticClass:"btn btn-sm btn-style1 font-bold text-uppercase underline",staticStyle:{position:"absolute","z-index":"10"},attrs:{type:"button"},on:{click:function(a){return t.$router.go(-1)}}},[n("span",{staticClass:"text-xl typcn typcn-arrow-left"}),t._v(" Kembali ")]),n("svg",{staticClass:"animated fadeInDown",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[n("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,106.7C840,64,960,32,1080,69.3C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"}})]),n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("APPROVE UNIT HEAD")]),n("div",{staticClass:"card-body"},[n("tr",[n("td",[t._v("NIP")]),n("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),n("td",[t._v(t._s(t.datanya.nip))])]),n("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"kinoLightBox img-fluid rounded-circle float-right",staticStyle:{"margin-top":"-10px",width:"40px",height:"40px"},attrs:{src:t.datanya.from.gambar}}),t._v(" Nama : "+t._s(t.datanya.nama)+" "),n("br"),t._v(" Unit : "+t._s(t.datanya.from.unit.nama_unit)+" "),n("tr",[n("td",[t._v("Tanggal Lembur")]),n("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),n("td",[t._v(t._s(t.format(t.datanya.tanggal_lembur)))])]),n("tr",[n("td",[t._v("Jenis Pekerjaan")]),n("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),n("td",[t._v(t._s(t.datanya.jenis_pekerjaan))])]),n("tr",[n("td",[t._v("Rincian lembur")]),n("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),n("td",[t._v(t._s(t.datanya.rincian_kerja))])]),n("span",{staticClass:"text-sm float-right"},[t._v(t._s(t.distanceToNow(t.datanya.createAt.toDate()))+" Yang lalu")]),n("br"),n("hr",{staticClass:"style13"}),n("div",{staticClass:"row"},[t.datanya.disposisi_unit_head?n("div",{staticClass:"col-6"},[n("p",{staticClass:"p-2"},[t._v("Unit Head")]),t._v(" Nip : "+t._s(t.datanya.disposisi_unit_head.nip)+" "),n("br"),t._v(" Nama : "+t._s(t.datanya.disposisi_unit_head.nama)+" "),n("br"),t._v(" disposisi : "+t._s(t.datanya.disposisi1)+" ")]):t._e(),t.datanya.disposisi_head?n("div",{staticClass:"col-6"},[n("p",{staticClass:"p-2"},[t._v("Head")]),t._v(" Nip : "+t._s(t.datanya.disposisi_head.nip)),n("br"),t._v(" Nama : "+t._s(t.datanya.disposisi_head.nama)+" disposisi : "+t._s(t.datanya.disposisi2)+" ")]):t._e()]),n("br"),t.vdata.link.length>0?n("div",{staticClass:"sm-form"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.vdata.link,expression:"vdata.link"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"link",name:"link",rows:"2",placeholder:"link..."},domProps:{value:t.vdata.link},on:{input:function(a){a.target.composing||t.$set(t.vdata,"link",a.target.value)}}}),n("a",{attrs:{href:t.vdata.link}})]):t._e(),n("button",{staticClass:"btn btn-sm btn-style9 float-right",attrs:{type:"button"},on:{click:t.print}},[n("span",{staticClass:"typcn typcn-printer"}),t._v(" Print")])])])])},i=[],s=(n("9911"),n("5530")),r=(n("bc3a"),n("8aa5")),o=n.n(r),u=n("03a0"),d=o.a.firestore(),l={data:function(){return{datanya:{},vdata:{disposisi1:"",link:""},ready:!1,units:[]}},methods:{generateslink:function(){this.vdata.link="http://localhost:8082/lembur_generate?datanya=".concat(JSON.stringify(this.datanya)),navigator.clipboard.writeText(this.vdata.link).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(t){console.error("Async: Could not copy text: ",t)}))},print:function(){this.$router.push("/lembur/history/laporan?id=".concat(this.$route.query.id))},batal:function(){var t=this;if(confirm("yakin membatalkan lemburan?")){var a=prompt("Alasan dibatalkan ? ","-");console.log(t.datanya.from),this.$store.dispatch("notifikasi",{title:"Permintaan lembur dibatalkan",body:a,link:"/lembur",from:this.$store.state.users,uid:t.datanya.from.uid,to:t.datanya.from}),d.collection("users").doc(this.datanya.from.uid).collection("lembur").doc(this.$route.query.id).delete().then((function(a){t.$router.push("/lembur")}))}},distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:u,includeSeconds:!0})},format:function(t){return this.$datefns.format(new Date(t),"DD MMMM YYYY",{locale:u})}},mounted:function(){var t=this,a=this;d.collection("users/".concat(this.$route.query.uid,"/history-lembur")).doc(this.$route.query.id).get().then((function(n){var e=Object(s["a"])({id:n.id},n.data());t.datanya=e,console.log("hadang"),console.log("daranaya",n.data()),setTimeout((function(){a.ready=!0}),3e3)}))},layout:"lembur"},c=l,m=n("2877"),p=Object(m["a"])(c,e,i,!1,null,null,null);a["default"]=p.exports},d309:function(t,a,n){var e=n("90e5");function i(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],a=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],n=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],i=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],r=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],o=["AM","PM"],u=["am","pm"],d=["a.m.","p.m."],l={MMM:function(a){return t[a.getMonth()]},MMMM:function(t){return a[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return i[t.getDay()]},dddd:function(t){return r[t.getDay()]},A:function(t){return t.getHours()/12>=1?o[1]:o[0]},a:function(t){return t.getHours()/12>=1?u[1]:u[0]},aa:function(t){return t.getHours()/12>=1?d[1]:d[0]}},c=["M","D","DDD","d","Q","W"];return c.forEach((function(t){l[t+"o"]=function(a,n){return s(n[t](a))}})),{formatters:l,formattingTokensRegExp:e(l)}}function s(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=i}}]);
//# sourceMappingURL=page-lembur-history-detail.16de7fe3.js.map