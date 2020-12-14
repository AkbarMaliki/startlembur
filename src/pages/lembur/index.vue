<template>
  <div>
    <div>
    <transition
        tag="div"
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutRight"
        mode="in-out"
      >
        <div
          v-show="menuKanan"
          style="position:fixed;z-index:11;right:0;top:0;width:210px;box-shadow:1px 1px 2px 1.5px black;"
          class=" border-1 border-grey shadow-md rounded-bl-lg bg-white mt-1 pt-1 shadow-1"
        >
        <!-- <p class="p-2 btn-style8 btn-block " @click="$router.push('/profile')"><span class="typcn typcn-user"></span> Profile</p> -->
        <p class="p-2 btn-style8 btn-block " @click="$router.push('/notification')" :class="{'text-red-600':notification2.length>0}">
          <span v-show="notification2.length>0">{{notification2.length}}</span>
          <span class="typcn typcn-bell" ></span> Notification</p>
        <p class="p-2 btn-style8 btn-block mt-1" @click="$router.push('/tools')"><span class="typcn typcn-attachment"></span> Tools</p>
        <p class="p-2 btn-style8 btn-block mt-1" @click="$router.push('/setting')"><span class="typcn typcn-cog"></span> Setting</p>
        <p class="p-2 btn-style8 btn-block mt-1" v-show="$store.state.users.auth=='admin'" @click="$router.push('/admin')"><span class="typcn typcn-at"></span> Admin</p>
        <p class="p-2 btn-style8 btn-block mt-1" @click="logout"><span class="typcn typcn-delete"></span> Logout</p>
          </div>
      </transition>
    <div>
      <svg 
      @click="menuKanan=false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style="height:300px;"
        class="animated fadeIn"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,288L60,256C120,224,240,160,360,122.7C480,85,600,75,720,80C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
      <img
        src="@/static/logobtn.png"
        class="kinoLightBox img-fluid"
        style="width:130px;position:absolute;left:10px;top:30px;"
        @click="menuKanan=false"
      />

      <button
      @click="menukanans()"
        type="button"
        class="btn btn-sm btn-style9"
        style="font-size:14px;position:absolute;right:10px;top:10px;"
      >
        <i class="fas fa-ellipsis-v text-white"></i>
        <button type="button" class="btn btn-sm btn-danger" v-show="notification2.length>0" style="position:absolute;right:3px;top:2px;">
          {{notification2.length}}
        </button>
      </button>
      
      <div class="p-2" style="margin-top:-170px;z-index:10;position:absolute;width:100%;" @click="menuKanan=false">
        <div
          class="shadow-1 rounded-lg p-3"
          style="box-shadow:-webkit-box-shadow: -1px 10px 12px 2px rgba(0,0,0,0.49);
-moz-box-shadow: -1px 10px 12px 2px rgba(0,0,0,0.49);
box-shadow: -1px 10px 12px 2px rgba(0,0,0,0.49);
background:white;
"
        >
          <div class="row">
            <div class="col-12">
              <img v-if="this.$store.state.users.gambar!='-'" :src="this.$store.state.users.gambar" v-viewer class="kinoLightBox img-fluid rounded-circle float-right" style="margin-top:-10px;width:40px;height:40px;">
              <img v-else src="@/static/nofound.png" v-viewer class="kinoLightBox img-fluid rounded-circle float-right" style="margin-top:-10px;width:40px;height:40px;">
              <p
                class="p-2 text-sm text-uppercase font-courier"
              >Hello <span class="font-bold">{{$store.state.users.nama}}</span></p>
              
              <hr style="margin:0;padding:0;" />
            </div>
            <div class="offset-2 col-3 mt-3 text-center">
              <button
              @click="$router.push('/lembur/ijin-lembur')"
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInRight"
              >
                <span class="typcn typcn-stopwatch"></span>
              </button>
              <p
                style="font-size:12px;"
                class="text-center font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Ijin Lembur</p>
            </div>
            <div class="offset-2 col-3 mt-3 text-center">
              <button
              @click="$store.state.users.bagian=='unit_head'?$router.push('/lembur/history/head'):$store.state.users.bagian=='deputy'?$router.push('/lembur/history/head'):$router.push('/404')"
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInLeft"
              >
                <span class="typcn typcn-th-list"></span>
              </button>
              <p
                style="font-size:12px;"
                class="text-center font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Log Semua</p>
            </div>
            <div class="col-1"></div>
              <div class="col-3 mt-3 text-center"
              @click="$router.push(`/lembur/history/total?id=${$store.state.users.uid}`)">
              <button
              
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInRight"
              >
                <span class="typcn typcn-download"></span>
              </button>
              <p
                style="font-size:12px;"
                class="text-center font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Total Lembur</p>
            </div>
            <div class="col-3 mt-3 text-center">
              <button
              @click="$router.push('/lembur/history')"
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInDown"
              >
                <span class="typcn typcn-equals"></span>
              </button>
              <p
                style="font-size:12px;"
                class="text-center font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Log Lembur</p>
            </div>
          
            <div class="col-3 mt-3 text-center">
              <button
              @click="$store.state.users.bagian=='unit_head'?$router.push('/lembur/head1'):$router.push('/404')"
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInLeft"
              >
                <span class="typcn typcn-pencil"></span>
              </button>
              <p
                style="font-size:12px;"
                class="text-center font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Approve Unit Head</p>
            </div>
            <div class="col-3 mt-3 text-center">
              <button
              @click="$store.state.users.bagian=='deputy'?$router.push('/lembur/head2'):$router.push('/404')"
                type="button"
                class="btn btn-lg btn-style9 animate__animated animate__backInUp"
              >
                <span class="typcn typcn-pen"></span>
              </button>
              <p
                style="font-size:12px;"
                class="text-center font-bold font-times animate__animated animate__fadeInDown delay-1s"
              >Approve DBM/DSM</p>
            </div>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0099ff"
                fill-opacity="1"
                d="M0,64L60,96C120,128,240,192,360,192C480,192,600,128,720,106.7C840,85,960,107,1080,106.7C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              />
            </svg>
          </div>
        </div>
        <div class="p-2 mt-3">
          <hr class="style13">
          <p class="text-center font-bold font-times">INFO TERKINI</p>
          <div class="shadow-lg rounded-lg p-2 mt-2"
          @click="$router.push('/tools/vicon')"
        style="border:1px solid grey;">
            <p class="pl-3 font-bold">Jadwal vicon akan datang: </p>
            <p>
              <span class="font-bold">
              Judul / Perihal : 
              </span>
              {{vicons.judul}}</p>
            <p>
              <span class="font-bold">
              Tanggal : 
              </span>
              {{vicons.tanggal}}</p>
            <p>
              <span class="font-bold">
              Peserta : 
              </span>
              {{vicons.peserta}}</p>
          </div>
          <div class="shadow-lg rounded-lg p-2 mt-2"
          @click="$router.push('/tools/sop')"
        style="border:1px solid grey;">
            <p class="pl-3 font-bold">Jadwal SOP akan datang: </p>
            <p>
              <span class="font-bold">
              Tanggal : 
              </span>
              {{sops.tanggal}}</p>
            <p>
              <span class="font-bold">
              Pemateri : 
              </span>
              {{sops.pemateri}}</p>
          </div>
    <!-- <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      </div> -->
          <!-- <carousel
            :per-page="1"
            :autoplay="true"
            :autoplayTimeout="6000"
            :mouse-drag="true"
            :loop="true"
            :centerMode="true"
            :adjustableHeight="true"
            :paginationActiveColor="'transparent'"
            :speed="1000"
          >
            <slide>BERITA 1</slide>
            <slide>BERITA 2</slide>
          </carousel> -->
        </div>
    <div>
      <marquee>Created By TA-Malik</marquee>
    </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
import { Carousel, Slide } from "vue-carousel";
export default {
  layout:"lembur",
  data() {
    return {
      ready: false,
      notification: [],
      notification2: [],
      menuKanan:false,
      vicons:[],
      sops:[],
     
         series: [{
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Pemakai an aplikasi',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
          },
    };
  },
  methods: {
    getVicon(){
      db.collection('vicon').orderBy('createdAt','asc').get().then(res=>{
        let data = res.docs.map(e=>{
          return {
            id:e.id,
            ...e.data()
          }
        })
        console.log('vicon',data)
        this.vicons = data[0]
      })
    },
    getSop(){
      db.collection('sop').orderBy('createdAt','asc').get().then(res=>{
        let data = res.docs.map(e=>{
          return {
            id:e.id,
            ...e.data()
          }
        })
        console.log('sop',data)
        this.sops = data[0]
      })
    },
    logout(){
      this.$store.dispatch('logout')
    },
    menukanans(){
      this.menuKanan=!this.menuKanan
    }
  },
  beforeMount() {
    let that = this;
  },
  mounted() {
    this.getVicon()
    this.getSop()
    console.log(this.$store.state.users)
    if(this.$store.state.users.changepassword=='true'){
      
    }
    if (this.$store.state.users.changettd == "true") {
    }else{
      this.$router.push('/kedua')
    }
    db.collection('users').doc(this.$store.state.users.uid).collection('notification').onSnapshot(res=>{
      let data = res.docs.map(e=>{
        return {id:e.id,...e.data()}
      })
      let notiffalse=data.filter(e=>{
        if(!e.dibaca){
          return e
        }
      })
      this.notification = data
      this.notification2 = notiffalse
    })
  },
  components: {
    Carousel,
    Slide
  }
};
</script>