(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-lembur-head1-index"],{"03a0":function(t,a,e){var n=e("25bb"),r=e("d309");t.exports={distanceInWords:n(),format:r()}},"129f":function(t,a){t.exports=Object.is||function(t,a){return t===a?0!==t||1/t===1/a:t!=t&&a!=a}},"25bb":function(t,a){function e(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function a(a,e,n){var r;return n=n||{},r="string"===typeof t[a]?t[a]:1===e?t[a].one:t[a].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"dalam waktu "+r:r+" yang lalu":r}return{localize:a}}t.exports=e},"841c":function(t,a,e){"use strict";var n=e("d784"),r=e("825a"),o=e("1d80"),i=e("129f"),s=e("14c3");n("search",1,(function(t,a,e){return[function(a){var e=o(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,e):new RegExp(a)[t](String(e))},function(t){var n=e(a,t,this);if(n.done)return n.value;var o=r(t),u=String(this),c=o.lastIndex;i(c,0)||(o.lastIndex=0);var d=s(o,u);return i(o.lastIndex,c)||(o.lastIndex=c),null===d?-1:d.index}]}))},c8ff:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("button",{staticClass:"btn btn-sm btn-style1 font-bold text-uppercase underline",staticStyle:{position:"absolute","z-index":"100"},attrs:{type:"button"},on:{click:function(a){return t.$router.push("/lembur")}}},[e("span",{staticClass:"text-xl typcn typcn-arrow-left"}),t._v(" Kembali ")]),e("svg",{staticClass:"animated fadeInDown",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,106.7C840,64,960,32,1080,69.3C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"}})]),e("div",{staticClass:"card animate__animated animate__zoomIn"},[e("div",{staticClass:"card-header"},[t._v("LIST APPROVE UNIT HEAD")]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"search"}},[t._v("Your search")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"search",name:"search",placeholder:"search"},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})]),t._l(t.datanya,(function(a,n){return e("div",{key:n+"datanya",staticClass:"p-2 rounded-lg shadow-1 bg-gray-200",on:{click:function(e){return t.$router.push("/lembur/head1/approve?id="+a.id)}}},[e("tr",[e("td",[t._v("NIP")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(a.nip))])]),e("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"kinoLightBox img-fluid rounded-circle float-right",staticStyle:{"margin-top":"-10px",width:"40px",height:"40px"},attrs:{src:a.from.gambar}}),t._v(" Nama : "+t._s(a.nama)+" "),e("br"),t._v(" Unit : "+t._s(a.from.unit.nama_unit)+" "),e("tr",[e("td",[t._v("Tanggal Lembur")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(t.format(a.tanggal_lembur)))])]),e("tr",[e("td",[t._v("Lama Lembur")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(a.lama_lembur)+" Jam")])]),e("tr",[e("td",[t._v("Jenis Pekerjaan")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(a.jenis_pekerjaan))])]),e("tr",[e("td",[t._v("Rincian lembur")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(a.rincian_kerja))])]),e("span",{staticClass:"text-sm float-right"},[t._v(t._s(t.distanceToNow(a.createAt.toDate()))+" Yang lalu")]),e("br"),e("br")])}))],2)])])},r=[],o=(e("4de4"),e("c975"),e("d81d"),e("ac1f"),e("841c"),e("5530")),i=(e("bc3a"),e("8aa5")),s=e.n(i),u=e("03a0"),c=s.a.firestore(),d={data:function(){return{datanya:[],search:""}},methods:{distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:u,includeSeconds:!0})},format:function(t){return this.$datefns.format(new Date(t),"DD MMMM YYYY",{locale:u})}},computed:{td:function(){var t=this,a=this.datanya;return a=a.filter((function(a){if(-1!=a.tanggalnya.indexOf(t.search))return a})),a}},mounted:function(){var t=this;c.collectionGroup("lembur").get().then((function(a){var e=a.docs.map((function(a){return Object(o["a"])(Object(o["a"])({id:a.id},a.data()),{},{tanggalnya:t.format(a.data().tanggal_lembur)})}));e=e.filter((function(t){if(1==t.status)return t})),e=e.filter((function(a){if(a.to.uid==t.$store.state.users.uid)return a})),e=t.$_.orderBy(e,["createAt"],["desc"]),t.datanya=e,console.log(e)}))},layout:"lembur"},l=d,f=e("2877"),m=Object(f["a"])(l,n,r,!1,null,null,null);a["default"]=m.exports},d309:function(t,a,e){var n=e("90e5");function r(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],a=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],e=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],i=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],s=["AM","PM"],u=["am","pm"],c=["a.m.","p.m."],d={MMM:function(a){return t[a.getMonth()]},MMMM:function(t){return a[t.getMonth()]},dd:function(t){return e[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return i[t.getDay()]},A:function(t){return t.getHours()/12>=1?s[1]:s[0]},a:function(t){return t.getHours()/12>=1?u[1]:u[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}},l=["M","D","DDD","d","Q","W"];return l.forEach((function(t){d[t+"o"]=function(a,e){return o(e[t](a))}})),{formatters:d,formattingTokensRegExp:n(d)}}function o(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=r},d81d:function(t,a,e){"use strict";var n=e("23e7"),r=e("b727").map,o=e("1dde"),i=e("ae40"),s=o("map"),u=i("map");n({target:"Array",proto:!0,forced:!s||!u},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=page-lembur-head1-index.3bfa8176.js.map