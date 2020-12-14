<template>
  <div>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#3F5FA1" fill-opacity="1" d="M0,192L30,165.3C60,139,120,85,180,106.7C240,128,300,224,360,261.3C420,299,480,277,540,256C600,235,660,213,720,197.3C780,181,840,171,900,149.3C960,128,1020,96,1080,122.7C1140,149,1200,235,1260,256C1320,277,1380,235,1410,213.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
</svg>
    <br>
    <div class="p-2">
      <div class="row">
         <div class="col-4 text-center mt-3">
              <button
              @click="$router.push('/admin/user')"
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInLeft"
                 style="background: rgb(32,162,150);
background: linear-gradient(349deg, rgba(32,162,150,0.5410539215686274) 0%, rgba(0,119,126,0.8603816526610644) 93%);"
              
              >
                <span class="typcn typcn-group"></span>
              </button>
              <p
                style="font-size:12px;"
                class=" font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Users</p>
            </div>
              <div class="col-4 text-center mt-3">
              <button
              @click="$router.push('/admin/unit')"
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInLeft"
                 style="background: rgb(32,162,150);
background: linear-gradient(349deg, rgba(32,162,150,0.5410539215686274) 0%, rgba(0,119,126,0.8603816526610644) 93%);"
              >
                <span class="typcn typcn-puzzle"></span>
              </button>
              <p
                style="font-size:12px;"
                class=" font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Unit kerja</p>
            </div>
              <!-- <div class="col-4 text-center mt-3">
              <button
              @click="$router.push('/admin/mobil')"
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInLeft"
                 style="background: rgb(32,162,150);
background: linear-gradient(349deg, rgba(32,162,150,0.5410539215686274) 0%, rgba(0,119,126,0.8603816526610644) 93%);"
              >
                <span class="typcn typcn-map"></span>
              </button>
              <p
                style="font-size:12px;"
                class=" font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Mobil</p>
            </div>
              <div class="col-4 text-center mt-3">
              <button
              @click="$router.push('/admin/report_keluar')"
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInLeft"
                 style="background: rgb(32,162,150);
background: linear-gradient(349deg, rgba(32,162,150,0.5410539215686274) 0%, rgba(0,119,126,0.8603816526610644) 93%);"
              >
                <span class="typcn typcn-document"></span>
              </button>
              <p
                style="font-size:12px;"
                class=" font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Report Keluar</p>
            </div>
            <div class="col-4 text-center mt-3">
              <button
              @click="$router.push('/admin/report_driver')"
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInLeft"
                 style="background: rgb(32,162,150);
background: linear-gradient(349deg, rgba(32,162,150,0.5410539215686274) 0%, rgba(0,119,126,0.8603816526610644) 93%);"
              >
                <span class="typcn typcn-document"></span>
              </button>
              <p
                style="font-size:12px;"
                class=" font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Report Driver</p>
            </div>
             <div class="col-4 text-center mt-3">
              <button
              @click="$router.push('/admin/report_user')"
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInLeft"
                 style="background: rgb(32,162,150);
background: linear-gradient(349deg, rgba(32,162,150,0.5410539215686274) 0%, rgba(0,119,126,0.8603816526610644) 93%);"
              >
                <span class="typcn typcn-document"></span>
              </button>
              <p
                style="font-size:12px;"
                class=" font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Report Karyawan</p>
            </div> -->
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
  layout:"admin"
}
</script>