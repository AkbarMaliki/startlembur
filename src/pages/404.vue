<template>
  <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,144C384,107,480,53,576,64C672,75,768,149,864,192C960,235,1056,245,1152,250.7C1248,256,1344,256,1392,256L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
      <div class="text-center p-3 mt-5 text-uppercase font-bold animated bounce infinite" >
    NOT FOUND atau tidak memiliki akses untuk mengakses wilayah ini
      </div>
      <br>
      <hr class="style16">
      <p class="font-bold text-center underline" @click="$router.go(-1)">Kembali</p>
      <div style="height:200px;"></div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,224L48,192C96,160,192,96,288,112C384,128,480,224,576,240C672,256,768,192,864,149.3C960,107,1056,85,1152,85.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
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