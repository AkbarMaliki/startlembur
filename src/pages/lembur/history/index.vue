<template>
  <div>
    <button
      type="button"
      @click="$router.push('/lembur')"
      class="btn btn-sm btn-style1 font-bold text-uppercase underline"
      style="position:absolute;z-index:100;"
    >
      <span class="text-xl typcn typcn-arrow-left"></span> Kembali
    </button>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="animated fadeInDown">
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,106.7C840,64,960,32,1080,69.3C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
    <div class="card animate__animated animate__zoomIn">
      <div class="card-header">History Lembur</div>
      <div class="card-body">
        <button type="button" @click="print" class="btn btn-sm btn-primary  float-right"><span class="typcn typcn-printer"></span> Print</button>
         <a :href="`https://akbarmaliki.github.io/infolayanansjs/#/excel?data=${JSON.stringify(susun(td)).split('&').join('%26')}`" > <button type="button" class="btn btn-sm btn-success  float-right"><span class="typcn typcn-printer"></span>  <span class="typcn typcn-chart-bar"></span></button></a>
          <div class="sm-form ">
              <label for="search">Your search</label>
              <input type="text" id="search" name="search" class="form-control form-control-sm" placeholder="search" v-model="search" >
          </div>
        <div
        @click="$router.push(`/lembur/history/detail?id=${item.id}&uid=${item.from.uid}`)"
          v-for="(item, index) in td"
          :key="index+'datanya'"
         class="p-3 rounded-lg shadow-1 border-green-400  mt-1"
          style="border:1px solid ;"
        >
          <tr>
            <td>NIP</td>
            <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
            <td>{{item.nip}}</td>
          </tr>
           <img
            v-if="item.from.gambar!='-'"
            :src="item.from.gambar"
            v-viewer
            class="kinoLightBox img-fluid rounded-circle float-right"
            style="margin-top:20px;width:40px;height:40px;"
          />
          <img
            v-else
            src="@/static/nofound.png"
            v-viewer
            class="kinoLightBox img-fluid rounded-circle float-right"
            style="margin-top:20px;width:40px;height:40px;"
          />
          Nama
          &nbsp;:&nbsp;
          {{item.nama}}
          <br />
          Unit
          &nbsp;:&nbsp;
          {{item.from.unit.nama_unit}}
         <tr>
            <td>Tanggal Lembur</td>
            <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
            <td>{{format(item.tanggal_lembur)}}</td>
          </tr>
           <tr>
            <td>Lama Lembur</td>
            <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
            <td>{{item.lama_lembur}} Jam</td>
          </tr>
          <tr>
            <td>Jenis Pekerjaan</td>
            <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
            <td>{{item.jenis_pekerjaan}}</td>
          </tr>
          <tr>
            <td>Rincian lembur</td>
            <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
            <td>{{item.rincian_kerja}}</td>
          </tr>
          <span class="text-sm float-right">{{distanceToNow(item.createAt.toDate())}} Yang lalu</span>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
export default {
  data() {
    return {
      datanya: [],
      search:"",
      less:['id']
    };
  },
  methods: {
     print(){
      this.$router.push(`/laporan/print?less=${this.less.toString()}`);
      this.$store.state.print2 = this.susun(this.td)
      // console.log(this.susun(this.td))
      // console.log(this.td)
    },
     susun(datas){
      let that=this
      let data = datas;
      // let order = ['id','nip','nama','unit','tujuan','rincian_kerja','lokasi','jam_berangkat','driver','mobil','createAt','kendaraan']
      let hasil=[]
      let obj={}
      // console.log('susun',data)
      let datanya = data.map((e)=>{
        let obj={}
        console.log(e)
        obj.nip=e.nip
        obj.nama=e.nama
        obj.unit=e.unit.nama_unit
        obj.lama_lembur=e.lama_lembur
        obj.tanggal_lembur=e.tanggal_lembur
        obj.jenis_pekerjaan=e.jenis_pekerjaan
        obj.rincian_kerja=e.rincian_kerja
        return obj
      })
      return datanya
    },
    distanceToNow(date) {
      return this.$datefns.distanceInWordsToNow(new Date(date), {
        locale: id,
        includeSeconds: true
      });
      //=> "3 days ago"
    },
    format(date) {
      return this.$datefns.format(new Date(date), "DD MMMM YYYY", {
        locale: id
      });
    }
  },
  computed:{
      td(){
          let that = this
          let data = this.datanya 
          data=data.filter(e=>{
              if(e.tanggalnya.indexOf(that.search)!=-1){
                  return e
              }
          })
          return data
      }
  },
  mounted() {
    db.collection(`users/${this.$store.state.users.uid}/history-lembur`).orderBy("createAt", "desc")
      .get()
      .then(res => {
        let data = res.docs.map(e => {
          return {
            id: e.id,
            ...e.data(),
            tanggalnya:this.format(e.data().tanggal_lembur)
          };
        });
        this.datanya = data;
        console.log('data',data);
      });
  },
  layout: "lembur"
};
</script>