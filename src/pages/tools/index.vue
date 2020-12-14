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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,288L0,320L144,320L144,160L288,160L288,160L432,160L432,128L576,128L576,32L720,32L720,160L864,160L864,288L1008,288L1008,256L1152,256L1152,64L1296,64L1296,32L1440,32L1440,0L1296,0L1296,0L1152,0L1152,0L1008,0L1008,0L864,0L864,0L720,0L720,0L576,0L576,0L432,0L432,0L288,0L288,0L144,0L144,0L0,0L0,0Z"></path></svg>
    <p class="pl-3  font-bold text-2xl">TOOLS <span class="typcn typcn-chart-bar-outline"></span></p>
    <div class="row p-3">
        <!-- <div class="col-6 mt-2 hover:bg-red-400 shadow-lg rounded-lg p-2" style="border:1px solid grey;">
            <span class="typcn typcn-social-skype text-yellow-500 text-2xl"></span>
            <p class="font-bold p-2 text-sm font-times">BTN Foods</p>
            <p class="text-sm text-justify">Aplikasi request Makanan dengan Pramubakti</p>
            <p class="text-red-700 font-bold text-sm underline">Under development!</p>
        </div> -->
        <div @click="$router.push('/tools/peminjaman')" class="col-6 mt-2 hover:bg-red-400 shadow-lg rounded-lg p-2" style="border:1px solid grey;">
            <span class="typcn typcn-tabs-outline text-yellow-500 text-2xl"></span>
            <p class="font-bold p-2 text-sm font-times">Peminjaman Barang </p>
            <p class="text-sm text-justify">Form Input Simpan Barang Logistic</p>
            <p class="text-red-700 font-bold text-sm underline">Under development!</p>
        </div>
        <div @click="$router.push('/tools/permintaan')" class="col-6 mt-2 hover:bg-red-400 shadow-lg rounded-lg p-2" style="border:1px solid grey;">
            <span class="typcn typcn-tabs-outline text-yellow-500 text-2xl"></span>
            <p class="font-bold p-2 text-sm font-times">Permintaan Barang </p>
            <p class="text-sm text-justify">Form Input Permintaan Barang Logistic</p>
            <p class="text-red-700 font-bold text-sm underline">Under development!</p>
        </div>
        <div @click="$router.push('/tools/vicon')" class="col-6 mt-2 hover:bg-red-400 shadow-lg rounded-lg p-2" style="border:1px solid grey;">
            <span class="typcn typcn-group text-yellow-500 text-2xl"></span>
            <p class="font-bold p-2 text-sm font-times">Jadwal Vicon</p>
            <p class="text-sm text-justify">Liat daftar jadwal vicon / Video Confrence</p>
            <!-- <p class="text-red-700 font-bold text-sm underline">Under development!</p> -->
        </div>
          <div @click="$router.push('/tools/sop')" class="col-6 mt-2 hover:bg-red-400 shadow-lg rounded-lg p-2" style="border:1px solid grey;">
            <span class="typcn typcn-document-text text-yellow-500 text-2xl"></span>
            <p class="font-bold p-2 text-sm font-times">Jadwal SOP</p>
            <p class="text-sm text-justify">Liat daftar jadwal SOP / Penyampaian SOP</p>
            <!-- <p class="text-red-700 font-bold text-sm underline">Under development!</p> -->
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