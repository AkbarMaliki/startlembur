(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-filterList"],{"25f0":function(t,a,i){"use strict";var n=i("6eeb"),e=i("825a"),s=i("d039"),o=i("ad6d"),r="toString",c=RegExp.prototype,l=c[r],p=s((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=l.name!=r;(p||u)&&n(RegExp.prototype,r,(function(){var t=e(this),a=String(t.source),i=t.flags,n=String(void 0===i&&t instanceof RegExp&&!("flags"in c)?o.call(t):i);return"/"+a+"/"+n}),{unsafe:!0})},"863f":function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"mb-4"},[i("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"SearchItem"}},[t._v("Search")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchItem,expression:"searchItem"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"SearchItem",placeholder:"Search Item",type:"text"},domProps:{value:t.searchItem},on:{input:function(a){a.target.composing||(t.searchItem=a.target.value)}}})]),i("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:function(a){t.orderBy="asc"}}},[t._v("ASC")]),i("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:function(a){t.orderBy="desc"}}},[t._v("DESC")]),i("ul",t._l(t.filteredData,(function(a,n){return i("li",{key:n},[t._v(t._s(a.title))])})),0),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12"},t._l(t.tombolPagination,(function(a,n){return i("button",{directives:[{name:"show",rawName:"v-show",value:a<t.jumlahPagination+1,expression:"item<jumlahPagination+1"}],key:n+"pagination2",staticClass:"btn btn-sm btn-warning rounded-circle",class:{"bg-blue hover:bg-blue border-blue cursor-not-allowed text-red":a==t.pagination},attrs:{type:"button",disabled:a==t.pagination},on:{click:function(i){return t.changePagination(a)}}},[t._v(t._s(a))])})),0)])]),i("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.pagPrev}},[t._v("Previous")]),i("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.pagNext}},[t._v("Next")])])},e=[],s=(i("4de4"),i("c975"),i("fb6a"),i("b64b"),i("d3b7"),i("25f0"),i("bc3a")),o=i.n(s),r={data:function(){return{datanya:"",temp1:0,temp2:10,pagination:1,pembagiannya:10,orderBy:"",orderWith:!0,searchItem:""}},computed:{jumlahPagination:function(){var t=this.datanya;return t.length/10},tombolPagination:function(){var t=this.pagination,a=t-2,i=t-1,n=t,e=t+1,s=t+2,o=[a,i,n,e,s];return(-1!=o.indexOf(-1)||-1!=o.indexOf(0))&&(o=[1,2,3,4,5]),o},filteredData:function(){var t=this,a=this.datanya;//! search fungsi
if(//! order fungsi
this.orderBy.length>0&&(a=this.$_.orderBy(a,["title"],[this.orderBy])),void 0!=a[0]){var i=Object.keys(a[0]);a=a.filter((function(a,n,e){var s=!1;if(i.filter((function(i){"string"===typeof a[i]?-1!=a[i].toLowerCase().indexOf(t.searchItem.toLowerCase())&&(s=!0):-1!=a[i].toString().indexOf(t.searchItem)&&(s=!0)})),s)return a}))}return a=a.slice(this.temp1,this.temp2),a}},methods:{pagPrev:function(){this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.pembagiannya,this.temp1=Math.ceil(this.temp2)-this.pembagiannya},pagNext:function(){this.pagination=this.pagination+1,this.pagination>this.jumlahPagination+1&&(this.pagination=Math.ceil(this.jumlahPagination)),this.temp2=this.pagination*this.pembagiannya,this.temp1=Math.ceil(this.temp2)-this.pembagiannya},changePagination:function(t){this.pagination=t,this.temp2=this.pagination*this.pembagiannya,this.temp2=Math.ceil(this.temp2),this.temp1=this.temp2-this.pembagiannya,this.temp1=Math.ceil(this.temp1)}},mounted:function(){var t=this;o.a.get("https://jsonplaceholder.typicode.com/todos").then((function(a){t.datanya=a.data}))}},c=r,l=i("2877"),p=Object(l["a"])(c,n,e,!1,null,null,null);a["default"]=p.exports},fb6a:function(t,a,i){"use strict";var n=i("23e7"),e=i("861d"),s=i("e8b5"),o=i("23cb"),r=i("50c4"),c=i("fc6a"),l=i("8418"),p=i("b622"),u=i("1dde"),h=i("ae40"),d=u("slice"),m=h("slice",{ACCESSORS:!0,0:0,1:2}),g=p("species"),b=[].slice,f=Math.max;n({target:"Array",proto:!0,forced:!d||!m},{slice:function(t,a){var i,n,p,u=c(this),h=r(u.length),d=o(t,h),m=o(void 0===a?h:a,h);if(s(u)&&(i=u.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?e(i)&&(i=i[g],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return b.call(u,d,m);for(n=new(void 0===i?Array:i)(f(m-d,0)),p=0;d<m;d++,p++)d in u&&l(n,p,u[d]);return n.length=p,n}})}}]);
//# sourceMappingURL=page-testing-filterList.6650d111.js.map