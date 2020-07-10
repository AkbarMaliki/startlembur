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
    <p class="pl-3  font-bold text-2xl">TOOLS <span class="typcn typcn-chart-bar-outline"></span></p>
    <div class="row p-3">
        <div class="col-6 mt-2 hover:bg-red-400 shadow-lg rounded-lg p-2" style="border:1px solid grey;">
            <span class="typcn typcn-compass text-yellow-500 text-2xl"></span>
            <p class="font-bold p-2 text-sm font-times">BTN Driver</p>
            <p class="text-sm text-justify">Aplikasi Ijin Keluar menggunakan Drivers</p>
            <p class="text-red-700 font-bold text-sm underline">Under development!</p>
        </div>
        <div class="col-6 mt-2 hover:bg-red-400 shadow-lg rounded-lg p-2" style="border:1px solid grey;">
            <span class="typcn typcn-social-skype text-yellow-500 text-2xl"></span>
            <p class="font-bold p-2 text-sm font-times">BTN Foods</p>
            <p class="text-sm text-justify">Aplikasi request Makanan dengan Pramubakti</p>
            <p class="text-red-700 font-bold text-sm underline">Under development!</p>
        </div>
        <div class="col-6 mt-2 hover:bg-red-400 shadow-lg rounded-lg p-2" style="border:1px solid grey;">
            <span class="typcn typcn-tabs-outline text-yellow-500 text-2xl"></span>
            <p class="font-bold p-2 text-sm font-times">Peminjaman Barang</p>
            <p class="text-sm text-justify">Form Input Simpan Barang</p>
            <p class="text-red-700 font-bold text-sm underline">Under development!</p>
        </div>
        <div class="col-6 mt-2 hover:bg-red-400 shadow-lg rounded-lg p-2" style="border:1px solid grey;">
            <span class="typcn typcn-group text-yellow-500 text-2xl"></span>
            <p class="font-bold p-2 text-sm font-times">Absen Ikut Serta SOP</p>
            <p class="text-sm text-justify">Form Input Hadir Rapat</p>
            <p class="text-red-700 font-bold text-sm underline">Under development!</p>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
let db = firebase.firestore()
export default{
  data(){
    return{

    }
  },
  methods:{

  },
  mounted() {
    
  },
}
</script>