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
    <div class="row">
        <div class="offset-1 col-10">
            <div class="p-3 rounded-lg shadow-lg" style="border:1px solid grey;">
                <div class="sm-form ">
                    <label for="tahun">Tahun</label>
                    <input type="text" id="tahun" name="tahun" class="form-control form-control-sm" placeholder="tahun" v-model="vdata.tahun" >
                </div>
                  <div class="sm-form ">
                    <label for="bulan">Bulan</label>
                    <input type="text" id="bulan" name="bulan" class="form-control form-control-sm" placeholder="bulan" v-model="vdata.bulan" >
                </div>

                Jumlah jam bulan ini : <span class="text-red font-bold">{{total}}</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
let db = firebase.firestore()
  var id = require("date-fns/locale/id");
export default{
  data(){
    return{
        vdata:{
            tahun:'2020',
            bulan:'M',
        },
        jumlah_lembur:0,
        datanya:[]
    }
  },
  computed:{
      total(){
          let data = this.td
          let jumlah= 0
          data.forEach(e=>{
              jumlah=jumlah+e.lama_lembur
          })
          return jumlah
      },
      td(){
          let that = this
          let data = this.datanya
          data = data.filter(e=>{
              if(that.tahuns(e.tanggal_lembur).indexOf(that.vdata.tahun)!=-1 && that.bulans(e.tanggal_lembur).indexOf(that.vdata.bulan)!=-1){
                  return e
              }
          })
          return data
      }
  },
  methods:{ 
    tahuns(data) {
      return this.$datefns.format(
        new Date(data),
        "YYYY",
        {
          locale: id
        }
      );
    },
    bulans(data) {
      return this.$datefns.format(
        new Date(data),
        "MMMM",
        {
          locale: id
        }
      );
    },
    tahun() {
      return this.$datefns.format(
        new Date(),
        "YYYY",
        {
          locale: id
        }
      );
    },
    bulan() {
      return this.$datefns.format(
        new Date(),
        "MMMM",
        {
          locale: id
        }
      );
    },
  },
  mounted() {
      this.vdata.bulan=this.bulan()
      this.vdata.tahun=this.tahun()
      db.collection(`users/${this.$route.query.id}/history-lembur`).get().then(res=>{
          let data = res.docs.map(e=>e.data())
          this.datanya = data
      })
  },
}
</script>