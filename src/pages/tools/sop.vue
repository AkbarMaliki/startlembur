<template>
  <div>
    <button
      type="button"
      @click="$router.push('/')"
      class="btn btn-sm btn-style1 font-bold text-uppercase underline text-white"
      style="position:absolute;"
    >
      <span class="text-xl typcn typcn-arrow-left"></span> Kembali
    </button>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#000b76"
        fill-opacity="1"
        d="M0,288L0,320L144,320L144,160L288,160L288,160L432,160L432,128L576,128L576,32L720,32L720,160L864,160L864,288L1008,288L1008,256L1152,256L1152,64L1296,64L1296,32L1440,32L1440,0L1296,0L1296,0L1152,0L1152,0L1008,0L1008,0L864,0L864,0L720,0L720,0L576,0L576,0L432,0L432,0L288,0L288,0L144,0L144,0L0,0L0,0Z"
      />
    </svg>
    <br />
    <div class="p-3">
        <p class="text-center font-times text-xl">JADWAL SOP <span class="typcn typcn-document-text"></span></p>
        <br>
      <button type="button" @click="edit=!edit" class="btn btn-sm btn-success">
        <span class="typcn typcn-plus"></span> Tambah
      </button>
      <a :href="`https://akbarmaliki.github.io/infolayanansjs/#/excel?data=${JSON.stringify(datanya).split('&').join('%26')}`" class="float-right btn-lg btn-success" ><span class="typcn typcn-chart-bar"></span></a>
        <br>
        <br>

      <div v-if="edit">
        <br />
        <form action @submit.prevent="simpanvicon" class="animate__animated animate__fadeIn">
          <div class="sm-form">
            <label for="judul">Judul / Perihal</label>
            <input
              type="text"
              id="judul"
              name="judul"
              class="form-control form-control-sm"
              placeholder="judul"
              v-model="vdata.judul"
            />
          </div>
          <div class="sm-form">
            <label for="pemateri">Nama</label>
            <input
              type="text"
              id="pemateri"
              name="pemateri"
              class="form-control form-control-sm"
              placeholder="pemateri"
              v-model="vdata.pemateri"
            />
          </div>
          <div class="sm-form">
            <label for="tanggal">Tanggal</label>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              class="form-control form-control-sm"
              placeholder="tanggal"
              v-model="vdata.tanggal"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-sm btn-style9">
            <span class="typcn typcn-edit"></span> Simpan
          </button>
        </form>
      </div>
      <div
        class="shadow-lg rounded-lg p-2 mt-2"
        style="border:1px solid grey;"
        v-for="(item, index) in datanya"
        :key="index"
      >
      <button type="button" @click="hapus(item.id)" class="btn btn-sm btn-danger  float-right">x</button>
        <p class="font-bold">
          <span>Perihal :</span>
          <span class="text-capitalize pl-2">{{item.judul}}</span>
        </p>
        <p class="font-bold">
          <span>Tanggal :</span>
          <span class="text-capitalize pl-2">{{item.tanggal}}</span>
        </p>
        <p class="font-bold">
          <span>Pemateri :</span>
          <span class="text-capitalize pl-2">{{item.pemateri}}</span>
        </p>
      </div>
      <br>

    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
 var id = require("date-fns/locale/id");
let db = firebase.firestore();
// let rdb = firebase.database()
import autophp from "@/plugins/autophp";
let sdb = new autophp();
export default {
  data() {
    return {
      vdata: {},
      edit: false,
      datanya: [],
    };
  },
  methods: {
     format(date) {
       return this.$datefns.format(
         new Date(date),
         "dddd DD MMMM YYYY",
         {
           locale: id
         }
       );
     },
    simpanvicon() {
      this.vdata.tanggal =this.format(this.vdata.tanggal)
      this.vdata.createdAt = new Date()
      db.collection("sop")
        .doc()
        .set(this.vdata, { merge: true })
        .then((res) => {});
    },
    hapus(id){
        db.collection('sop').doc(id).delete().then(res=>{
            
        })
    }
  },
  mounted() {
    db.collection("sop").onSnapshot((res) => {
      let data = res.docs.map((e) => {
        return {
          id: e.id,
          ...e.data(),
        };
      });
      this.datanya = data;
    });
  },
};
</script>