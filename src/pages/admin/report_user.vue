<template>
  <div class="font-times">
    <!-- FORM -->
      
      <div class="tips float-right">
          <button type="button" @click="print1" v-show="pilih.name!='taufik'" class="btn btn-sm btn-outline-danger">
            <span class="typcn typcn-document-text"></span>
          </button>
          <span class="tipstextB">Print Satu</span>
      </div>
      <div class="row">
        <div class="offset-sm-2 col-sm-8">
    <form
      action
      @submit.prevent="aksi == 'insert' ? insert() : aksi == 'update' ? update() : remove() "
    >
     <div class="card">
        <div class="card-header">users</div>
        <div class="card-body">
      <!-- FORM --> 
          <tr>
              <td class='text-uppercase text-sm'>id_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="id_"
                    id="id"
                    name="id"
                    class="form-control form-control-sm"
                    v-model="vdata.id"
                    pattern="[a-zA-Z0-9\s]+" minlength="0" maxlength="30"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
              oninput="this.setCustomValidity('')"
              required
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>nip_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="nip_"
                    id="nip"
                    name="nip"
                    class="form-control form-control-sm"
                    v-model="vdata.nip"
                    pattern="[a-zA-Z0-9\s]+" minlength="0" maxlength="30"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
              oninput="this.setCustomValidity('')"
              required
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>nama_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="nama_"
                    id="nama"
                    name="nama"
                    class="form-control form-control-sm"
                    v-model="vdata.nama"
                    pattern="[a-zA-Z0-9\s]+" minlength="0" maxlength="30"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
              oninput="this.setCustomValidity('')"
              required
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>unit_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="unit_"
                    id="unit"
                    name="unit"
                    class="form-control form-control-sm"
                    v-model="vdata.unit"
                    pattern="[a-zA-Z0-9\s]+" minlength="0" maxlength="30"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
              oninput="this.setCustomValidity('')"
              required
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>emails_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="emails_"
                    id="emails"
                    name="emails"
                    class="form-control form-control-sm"
                    v-model="vdata.emails"
                    pattern="[a-zA-Z0-9\s]+" minlength="0" maxlength="30"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
              oninput="this.setCustomValidity('')"
              required
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>nohp_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="nohp_"
                    id="nohp"
                    name="nohp"
                    class="form-control form-control-sm"
                    v-model="vdata.nohp"
                    pattern="[a-zA-Z0-9\s]+" minlength="0" maxlength="30"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
              oninput="this.setCustomValidity('')"
              required
              
                  >
                </div>
              </td>
            </tr>
            <!-- FORM -->
      <!-- SUBMIT -->
      <br />
      <div class="text-center">
      <button
        type="submit"
        class="btn btn-sm btn-outline-primary ml-2  font-times text-uppercase"
      ><span class="typcn typcn-edit"></span> {{aksi == 'insert' ? 'insert' : aksi == 'update' ? 'update' : 'remove'}}</button>
      </div>
        </div>
            </div>
      <!-- SUBMIT -->
    </form>
     <hr class="style13" />
     <div class="row">
       <div class="offset-1 col-3">
        <button type="button" @click="aksi='insert';clearInput()" class="text-uppercase font-times btn btn-sm btn-success"><span class="typcn typcn-plus"></span>Insert</button> &nbsp;
       </div>
       <div class="col-3 text-center">
        <button type="button" @click="aksi='update'" class="text-uppercase font-times btn btn-sm btn-warning"><span class="typcn typcn-edit"></span>Update</button>&nbsp;
       </div>
       <div class="col-3 text-center">
        <button type="button" @click="aksi='remove'" class="text-uppercase font-times btn btn-sm btn-danger"><span class="typcn typcn-delete"></span>Delete</button>&nbsp;
        </div>
     </div>
      </div>
      </div>
          <hr class="style16">

    
     <!-- <tables :datatable="datanya" :unless="['fname','lname']" /> -->
    <div style="overflow-x:auto;width:100%;" v-if="ready">
      <!-- MODAL -->
      <!-- ======================================================= -->
      <!-- DATATABLE MULAI DISINI -->
      <!-- SEARCH INPUT -->
      <div class="container flex flex-wrap mx-auto px-4 d-print-none">
        <div class="w-full sm:w-1/3">
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <span class="typcn typcn-zoom"></span>
              </div>
            </div>
            <input
              type="text"
              class="form-control py-0"
              id="searchTable"
              placeholder="Cari Data ... "
              v-model="search"
            />
          </div>
        </div>
        <!-- KOSONG -->
        <div class="w-full sm:w-1/3"></div>
        <!-- BUTTON LIST -->
        <div class="w-full sm:w-1/3">
          <div class="row">
            <div class="col-3 order-2">
              <a :href="`https://akbarmaliki.github.io/infolayanansjs/#/excel?data=${JSON.stringify(td)}`" class="btn-lg btn-success" ><span class="typcn typcn-chart-bar"></span></a>
            </div>
            <div class="col-3 order-3">
              <div class="tips">
                  <button type="button" @click="print2" class="btn btn-sm btn-outline-danger">
                    <span class="typcn typcn-document-text"></span>
                  </button>
                  <span class="tipstextB">Print Laporan</span>
              </div>
            </div>
            <div class="col-4 order-1">
              <select class="form-control" style="width:80px" v-model="selected">
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
                <option :value="1000000">Semua</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- TABLE -->
      <div
        class="table-responsive-sm font-times p-3"
        style="box-shadow:1px 4px 6px black;overflow:scroll;"
        v-dragscroll
      >
        <template>
          <!-- DEKSTOP -->
          <table
            class="table-print table-sm table-bordered table-striped table-hover table-print border-black"
            style=" overflow-x: scroll;
    overflow-y: hidden;
    height: 80px;
    white-space:nowrap"
          >
            <!-- TABLE STYLE -->
            <thead class="mdb-color" :style="{background:thbackground}">
              <tr class="text-white" style="overflow:scroll;color:white;">
                 <th class :style="{color:thcolor}">#</th>
                 
                <th
                  scope="col"
                  class="th-print cursor-pointer uppercase"
                  style="font-size:21px;"
                  @click="sort(item)"
                  v-for="(item, index) in thnya"
                  :key="index+'th'"
                  v-show="!less.includes(item)"
                >
                  <span :style="{color:thcolor}" style="font-size:13px;">
                    {{item}}
                    <template v-if="orderWith">
                      <span v-show="orderBy==item">
                        <span class="typcn typcn-arrow-down"></span>
                      </span>
                    </template>
                    <template v-else>
                      <span v-show="orderBy==item">
                        <span class="typcn typcn-arrow-up"></span>
                      </span>
                    </template>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index3) in td" :key="index3+'td'">
                 
                <td>{{(index3+temp1)+1}}</td>
                <no-ssr>
                  <v-touch
                    tag="td"
                    v-on:tap="ambil(item,index3);modal=true;aksi='update'"
                    class="cursor-pointer"
                   
                    v-for="(item2, indexs) in thnya"
                    :key="indexs+'th2'"
                    v-html="item[item2]"
                    v-show="!less.includes(item2)"
                  ></v-touch>
                   <!-- item[item2].split('-').length>2 && item[item2].indexOf('20')!=-1 ? format(item[item2]):item[item2]  -->
                </no-ssr>
              </tr>
            </tbody>
          </table>
        </template>
        <!-- FUNGSI DIBAWAH TABEL SEPERTI PAGINATION -->
        <div class="float-right">
          <template v-if="datanya.length>=selected">
            <button
              type="button"
              @click="pagPrev"
              class="btn btn-sm btn-outline-info roundec-circle"
            >Prev</button>
            &nbsp;
            <button
              type="button"
              @click="pagNext"
              class="btn btn-sm btn-info roundec-circle"
            >Next</button>
          </template>
          <template v-else>
            <button
              type="button"
              @click="pagPrev"
              class="btn btn-sm btn-black roundec-circle"
              disabled
            >Prev</button>
            &nbsp;
            <button
              type="button"
              @click="pagNext"
              class="btn btn-sm btn-black roundec-circle"
              disabled
            >Next</button>
          </template>
        </div>
                 
       
      </div>
    </div>
    <div v-else>
      <p class="text-center">Loading Table ...</p>
    </div>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
import downloadExcel from 'vue-json-excel'
import upload from "@/components/Single/UploadsNo.vue";
import axios from "axios";
import firebase from 'firebase'
let db = firebase.firestore()
export default {
  layout:"admin",
  components: {
    upload,
    downloadExcel
  },
  data() {
    return {
      // style
      thbackground: "initial",
      thcolor: "asd",
      // valdatable
      datanya: [],
      order:['id','nip','nama','unit','email','nohp'],
      vdata: {
        
      },
      ready: false,
      search: "",
      pilih: { name: "taufik", hobby: "coding" },
      thnya: {},
      err: false,
      checkedItem:[],
      less: [,'_id','id'],
      // modal
      modal: false,
      modalAction: "preview",
      // pagination
      selected: 10,
      pagination: 1,
      temp1: 0,
      temp2: 10,
      orderBy: "",
      orderWith: true,
      //form
      aksi: "insert",
      formOn: false,
      updateOn: false
    };
  },
  methods: {
    insert(){
          delete this.vdata.id;
          db.collection(`users`).doc().set(this.vdata).then(res=>{
              console.log('berhasil')
              alert('simpan data berhasil!')
          })
      },update(){
          db.collection(`users`).doc(this.pilih.id).set(this.vdata,{merge:true}).then(res=>{
              alert('update data berhasil!')
          })
      },remove(){
          if(confirm('Apakah yakin menghapus data?')){
              db.collection(`users`).doc(this.pilih.id).delete().then(res=>{
              alert('delete data berhasil!')
              })
          }
      },
       refreshData() {
         let that = this
         db.collection(`users`).onSnapshot(snap=>{
             let arr = []
             snap.forEach(e=>{
                 arr.push({id:e.id,...e.data()})
             })
             arr = arr.filter(e=>{
               if(e.unit.nama_unit=='DRIVER'){

               }else{return e}
             })
          setTimeout(() => {
            (function() {
              var thElm;
              var startOffset;
              Array.prototype.forEach.call(
                document.querySelectorAll("table th"),
                function(th) {
                  th.style.position = "relative";
                  var grip = document.createElement("div");
                  grip.innerHTML = "&nbsp;";
                  grip.style.top = 0;
                  grip.style.right = 0;
                  grip.style.bottom = 0;
                  grip.style.width = "5px";
                  grip.style.position = "absolute";
                  grip.style.cursor = "col-resize";
                  grip.addEventListener("mousedown", function(e) {
                    thElm = th;
                    startOffset = th.offsetWidth - e.pageX;
                  });
                  th.appendChild(grip);
                }
              );
              document.addEventListener("mousemove", function(e) {
                if (thElm) {
                  thElm.style.width = startOffset + e.pageX + "px";
                }
              });
              document.addEventListener("mouseup", function() {
                thElm = undefined;
              });
            })();
            let hasil=[]
            let obj={}
            arr.forEach((e,index)=>{
              that.order.forEach(e=>{
                 if(e=='unit'){
                  obj[e]=arr[index][e].nama_unit
                }else{
                  obj[e]=arr[index][e]
                }
              })
              hasil.push(obj)
              obj={}
            })
            this.datanya=hasil;
            let keys = this.order;
            keys = this.$_.difference(keys, this.unless);
            this.thnya = keys;
          }, 1000);
         })
    },
      ambil(item, index) {
      window.scrollTo(0, 0);
      let that = this;
      this.updateOn = true;
      this.formOn = true;
      let clone = this.$_.clone(item);
      // clone["TGL_LHR"] = this.$datefns.format(
      //   new Date(clone["TGL_LHR"]),
      //   "YYYY-MM-dd"
      // );
      console.log(clone);
      this.vdata = clone;
      this.pilih = item;
    },
     clearInput() {
      this.formOn = true;
      let keys = Object.keys(this.vdata);
      keys.forEach(key => {
        this.vdata[key] = "";
      });
    },
    
    //!==================
    //! hapus dari sini
    //! =================
    checkedAll() {
      console.log(this.checkedItem);
    },
     susun(datas){
      let that=this
      let data = datas;
      let order = ['id','nip','nama','unit','emails','nohp']
      let hasil=[]
      let obj={}
      data.forEach((e,index)=>{
        order.forEach(e=>{
          obj[e]=data[index][e]
        })
        hasil.push(obj)
        obj={}
      })
      return hasil
    },
    print1() {
      this.$router.push(`/laporan/perdata?less=${this.less.toString()}`);
      this.$store.state.print2=[]
      this.$store.state.print2.push(this.pilih)
      this.$store.state.print2  = this.susun(this.$store.state.print2)
      alert("print satu");
    },
    print2() {
      this.$router.push(`/laporan/print?less=${this.less.toString()}`);
      let that=this
       this.$store.state.print2 = this.susun(this.td)
      alert("print banyak");
    },
     linknya(hasil) {
      console.log('link', hasil)
      this.vdata.Gambars = hasil
      this.$forceUpdate()
    },
    isDate(value) {
      var dateFormat;
      if (toString.call(value) === "[object Date]") {
        return true;
      }
      if (typeof value.replace === "function") {
        value.replace(/^s+|s+$/gm, "");
      }
      dateFormat = /(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/;
      return dateFormat.test(value);
    },
    // MODAL
    format(date) {
      return this.$datefns.format(date, "DD MMMM YYYY", {
        locale: id
      });
    },
    distanceToNow() {
      return this.$datefns.distanceInWordsToNow(
        new Date(2015, 0, 1, 0, 0, 15),
        {
          locale: id,
          includeSeconds: true
        }
      );
      //=> "3 days ago"
    },
    // DATATABLE
   pagPrev() {
      this.pagination = this.pagination - 1;
      if (this.pagination == 0) {
        this.pagination = 1;
      }
      this.temp2 = this.pagination * this.selected;
      this.temp1 = Math.ceil(this.temp2) - this.selected;
    },
    pagNext() {
      this.pagination = this.pagination + 1;
      if (this.pagination > (this.bagi+1)) {
        this.pagination = Math.round(this.bagi);
      }
      this.temp2 = this.pagination * this.selected;
      this.temp1 = Math.ceil(this.temp2) - this.selected;
    },
    sort(item) {
      this.orderBy = item;
      this.orderWith = !this.orderWith;
    },
    //!==================
    //! hapus sampai sini
    //! =================
  },props: {
    unless: {
      type: Array,
      required: false,
      default: () => ["gone"]
    },
    date: {
      type: Array,
      required: false,
      default: () => ["ditanyakan"]
    }
  },
  watch: {
    datanya() {
      if (this.datanya.length > 0) {
        this.ready = true;
      }
    },
    selected() {
      this.temp2 = this.pagination * this.selected;
      this.temp1 = this.temp2 - this.selected;
    },
    search() {
      this.pagination = 1;
      this.temp2 = this.pagination * this.selected;
      this.temp1 = this.temp2 - this.selected;
    }
  }, computed: {
    // DATATABLE
    bagi() {
      let data = this.datanya;
      data = data.length / 10;
      console.log(data);
      return data;
    },
    th() {
      let data = this.datanya;
      let keys = Object.keys(data[0]);
      keys = this.$_.difference(keys, this.unless);
      return keys;
    },
    td() {
      let that = this;
      let data = this.datanya;
      //! order fungsi
      if (this.orderBy.length > 0) {
        let ordernya = this.orderWith ? "asc" : "desc";
        data = this.$_.orderBy(data, [this.orderBy], [ordernya]);
      }
      //! search fungsi
      let keys = this.thnya;
      data = data.filter((v, i, a) => {
        let hasil = false;
        keys.filter(key => {
          if (typeof v[key] == "string") {
            if (v[key].toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
              hasil = true;
            }
          } else {
            if (v[key] != null) {
              if (v[key].toString().indexOf(this.search) != -1) {
                hasil = true;
              }
            } else {
            }
          }
        });
        if (hasil) return v;
      });
        //! cari shortcut contoh
      // data = data.filter((v, i, a) => {
      //   let hasil = false;
      //   console.log(v.id_kelas==that.carikelas)
      //     if(v['id_kelas']==this.carikelas){
      //       return v
      //     }else if(this.carikelas==''){
      //       return v
      //     }
      // });
      data = data.map(e => {
        let obj = {};
        let kunci = Object.keys(e);
        kunci = that.$_.difference(kunci, that.unless);
        kunci.forEach((a, index) => {
          if (kunci.find(e => e == that.date[index])) {
          } else {
            // obj[a] = 'tanggal'
          }

          obj[a] = e[a];
          // typeof e[a] != "string"
          //   ? e[a]
          //   : new Date(e[a]) !== "Invalid Date" && !isNaN(new Date(e[a]))
          //   ? that.isDate(e[a])
          //     ? that.format(e[a])
          //     : e[a]
          //   : e[a];
        });
        return obj;
      });
      data = data.slice(this.temp1, this.temp2);
      return data;
    }
  },mounted() {
    let that = this;
    this.refreshData();
    
  }
};</script>