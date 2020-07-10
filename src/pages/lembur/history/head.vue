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
          <div class="sm-form ">
              <label for="search">Your search</label>
              <input type="text" id="search" name="search" class="form-control form-control-sm" placeholder="search" v-model="search" >
          </div>
        <div
        @click="$router.push(`/lembur/history/detail?id=${item.id}&uid=${item.from.uid}`)"
          v-for="(item, index) in td"
          :key="index+'datanya'"
          class="p-2 rounded-lg shadow-1 bg-gray-200 mt-1"
        >
       
          <tr>
            <td>NIP</td>
            <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
            <td>{{item.nip}}</td>
          </tr>
          <img
            :src="item.from.gambar"
            v-viewer
            class="kinoLightBox img-fluid rounded-circle float-right"
            style="margin-top:-10px;width:40px;height:40px;"
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
      search:""
    };
  },
  methods: {
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
              if(e.tanggalnya.toLowerCase().indexOf(that.search.toLowerCase())!=-1 || e.nama.toLowerCase().indexOf(that.search.toLowerCase())!=-1 || e.nip.toLowerCase().indexOf(that.search.toLowerCase())!=-1){
                  return e
              }
          })
        
          return data
      }
  },
  mounted() {
    db.collectionGroup(`history-lembur`)
      .get()
      .then(res => {
        let data = res.docs.map(e => {
          return {
            id: e.id,
            ...e.data(),
            tanggalnya:this.format(e.data().tanggal_lembur)
          };
        });
        data = this.$_.orderBy(data, ['createAt'],['desc'])
        this.datanya = data;
        console.log('data',data);
      });
  },
  layout: "lembur"
};
</script>