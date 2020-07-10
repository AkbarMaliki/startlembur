<template>
  <div>
    <div v-if="busy" style="width:100%;height:1200px;position:fixed;z-index:200;background: rgb(33,35,57);
background: radial-gradient(circle, rgba(33,35,57,0.36738445378151263) 0%, rgba(34,33,48,0.33657212885154064) 100%);">
        <p class="animated infinite bounce font-bold font-times text-2xl text-black" style="margin-top:50vh;margin-left:30vw;">LOADING ...</p>
    </div>
    <div class="text-center d-sm-none">
      <v-touch
        style="width:20px;background:transparent;height:100vh;position:absolute;left:0;z-index:10001;"
        v-on:swiperight="onSwipeRight"
        v-if="!menuTrigger"
      ></v-touch>
    </div>
    <div class="container-fluid anim shadow-lg" style="background:#343A40;">
      <div class="row anim">
        <div
          class="anim col-4 col-sm-3 col-md-2 p-1 rounded-lg"
          style="position:absolute;padding:0;margin:0;height:100px;position:fixed;"
          :style="{'background':bgleft1}"
        >
      
          <!-- LEFT TOP -->
          <div
            style="height:0px;margin:none;padding-top:10px;"
            :style="{'background':bgleft2}"
            class="text-center text-white font-bold text-times text-xs"
          >
             <br>
          <br>
          <img src="@/static/logobtn.png" @click="$router.push('/admin')" class="kinoLightBox img-fluid " style="">
         

          </div>
          <!-- LEFT SECOND -->
          <div class="text-center p-1" :style="{'background':bgleft2}" style="z-index:100;">
               <br>
          <br>
          <br>
          <br>
            <div class="sm:p-3 text-center" style="border-bottom:1px solid gray;">
            </div>
            <!-- SEARCH BAR -->
            <div class="flex items-center border-b border-b-2 p-2">

            </div>
            <br />
            <!-- MENU BUTTON -->
            <div
              class="bord hover:bg-red-500 rounded-t-lg text-left pl-3 "
              style="border-top:2px solid black;color:white;font-size:13px;"
              @click="muncul($event);"
              id="pertamaclick"
            >
              Menu
              <span class="typcn typcn-arrow-down float-right"></span>
            </div>
            <ul class="isaktif sm:pl-4 anim mb-3 text-white animated slideInRight " style="background:#232E30;">
              <li class="bord hover:bg-red-500 text-left sm:pl-3" style="font-size:13px;" @click="$router.push('/lembur/user')">&nbsp;&nbsp;User&nbsp;&nbsp;<span class="typcn typcn-user"></span></li>
              <li class="bord hover:bg-red-500 text-left sm:pl-3" style="font-size:13px;" @click="$router.push('/lembur/unit')">&nbsp;&nbsp;unit&nbsp;&nbsp;<span class="typcn typcn-group-outline"></span></li>
              <li class="bord hover:bg-red-500 text-left sm:pl-3" style="font-size:13px;" @click="$router.push('/lembur')">&nbsp;&nbsp;Menu utama&nbsp;&nbsp;<span class="typcn typcn-adjust-contrast"></span></li>
            </ul>
            <div
              class="bord hover:bg-red-500 rounded-b-lg text-left pl-3 mt-2"
              style="border-top:2px solid black;color:white;font-size:13px;"
              @click="$router.push('/lembur/admin')"
            >
              DASHBOARD
            </div>
            <!-- END MENU -->
          </div>
        </div>
        <div
          class="bg-black anim"
          :class="{'col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2':menuTrigger,'col-sm-12':!menuTrigger}"
        >
          <div class="row">
            <!-- RIGHT TOP -->
            <div class="col-sm-12" style="padding:0;margin:0;position:fixed;z-index:100;">
              <div
                style="height:50px;margin:none;padding:3px;background: rgb(148,160,217);
background: linear-gradient(349deg, rgba(148,160,217,1) 0%, rgba(32,89,162,0.5410539215686274) 20%, rgba(0,37,126,0.8603816526610644) 93%);"
                class="pt-2"
              >
                <!-- :style="{'background':bgrighttop}" -->
                <button
                  type="button"
                  class="btn btn-sm btn-dark ml-3"
                  @click="menuTrigger=!menuTrigger"
                >
                  <div class="tips">
                    <i class="fas fa-th" style="color:white;margin-left:50px;"></i>
                    <span class="tipstextB">Slide</span>
                  </div>
                </button>
                <!-- BUTTON DIKANAN ATAS -->
                  <!-- <span class="p-1 ml-3 text-white cursor-pointer hover:bg-black rounded-lg">
                  HOME
                  <i class="fas fa-home"></i>
                </span> -->
                <div class="text-center" style="position:absolute;width:60%;margin-top:-33px;left:20%;">
                <!-- <img src="@/static/icon.png" class="kinoLightBox img-fluid mx-auto" style="height:30px;" @click="$router.push('/driver/admin')"> -->
                </div>
                <template class>
                  <div style="position:absolute;right:10px;top:5px;">
                    <!-- <button
                      type="button"
                      @click="$store.dispatch('logout')"
                      class="btn btn-sm btn-warning mr-2"
                    >
                      <i
                        class="far fa-bell text-white p-1 cursor-pointer"
                        style="font-size:13px;color:black;"
                      ></i>
                    </button> -->
                    
                    <button type="button"  @click="logout()" class="btn btn-sm btn-style9 " style="background: rgb(162,97,32);
background: linear-gradient(349deg, rgba(162,97,32,0.5410539215686274) 0%, rgba(126,36,0,0.8603816526610644) 93%);">Logout</button>
                    <!-- <button
                      type="button"
                      @click="$store.dispatch('logout')"
                      class="btn btn-sm btn-danger mr-2 "
                      style="margin-top:4px;"
                    >
                      <div class="tips">
                        <i class="fas fa-sign-out-alt"></i>
                        <span class="tipstextB">Logout</span>
                      </div>
                    </button> -->
                  </div>
                </template>
              </div>
            </div>
            <!-- RIGHT SECOND -->
            <div
              class="col-sm-12"
              style="background:white;min-height:100vh;padding:0;margin:0;"
              @click="menuTrigger=false;menuKanan=false"
            >
            <br>
            <br>
              <div class="sm:mt-2 sm:p-2">
                <router-view style="z-index:10" v-myimage v-reload />
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition
        tag="div"
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutRight"
        mode="in-out"
      >
        <div
          v-show="menuKanan"
          style="position:fixed;z-index:11;right:0;top:0;width:210px;height:100vh;box-shadow:1px 1px 2px 1.5px black;"
          class=" border-1 border-grey shadow-md rounded-bl-lg"
        >
          <br>
          <br>
          <br>
          <p class="p-2 border-2 text-sm font-times" @click="$router.push('/driver/profile');menuKanan=!menuKanan"><span class="typcn typcn-user"></span>&nbsp;&nbsp; Profile </p>
          <p class="p-2 border-2 text-sm font-times text-red" @click="logout;menuKanan=!menuKanan"><span class="typcn typcn-eject"></span>&nbsp;&nbsp; Logout </p>
          <!-- <p class="p-2 border-2 text-sm font-times text-red" @click="exits();menuKanan=!menuKanan"><span class="typcn typcn-cancel"></span>&nbsp;&nbsp; EXIT </p> -->
          <hr class="style13" style="margin:0;">
          <p class="text-center font-times">Notifikasi!</p>
          <hr class="style13" style="margin:0;">
          <div style="overflow-y:scroll;height:400px;">
        
            </div>
          </div>
      </transition>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
let db = firebase.firestore()
import md5 from 'md5'
// import socket from "@/plugins/socket.io.js";
var id = require("date-fns/locale/id");
export default {
  components: {
  },
  data () {
    return {
        notifs:[],
      notifn:0,
      count:0,
      bgleft1: '#343A40',
      bgleft2: '#232e30',
      bgleft3: '#343A40',
      bgrighttop: '#1A3B4E',
      test: 1,
      menuTrigger: false,
      menuKanan: false,
      bearer: '',
      busy: false // digunakan untuk melihat apakah ada data yang masih diprocess untuk dimunculkan loading
    }
  },
   beforeMount() {
      let that = this;
        this.$store.dispatch('ceklogin',{
          true:true,
          false:'/'
        }).then(res=>{
          if(this.$store.state.users.auth=='admin'){
          }else{
            this.$router.push('/')
          }
        })
    //   socket.on("new-message", message => {
    //   if(message.target_id==that.$store.state.users.id && message.app=='driver'){
    //       that.refreshNotif()
    //        //  CORDOVA
    //       document.addEventListener('deviceready', function () {
    //           cordova.plugins.notification.local.schedule({
    //               title: 'BTN Banjarbaru',
    //               text: message.text,
    //               sound:'file://resources/audio/beep.mp3'
    //           });
    //           cordova.plugins.notification.local.on('click', function (notification, eopts) { 
    //               setTimeout(() => {
    //                   that.$router.push(message.link)
    //               }, 1000);
    //           });
    //           navigator.notification.beep(1);
    //       })
    //   }
    // });
  },
  methods: {
    exits(){
      document.addEventListener("deviceready", function(e){
        navigator.app.exitApp();
      }, true);
    },  
     distanceToNow(tanggal) {
          return this.$datefns.distanceInWordsToNow(
            new Date(tanggal),
            {
              locale: id,
              includeSeconds: true
            }
          );
        },
    logout () {
      this.$store.dispatch('logout')
      localStorage.removeItem('login')
      this.$router.push('/')
    },
    muncul (e) {
      e.target.nextElementSibling.classList.toggle('isaktif')
    },
    onSwipeRight () {
      this.menuTrigger = true
    },
    scrollOnLoad () {
      this.$el.querySelectorAll('a.scrollactive-item').forEach(el => {
        if (el.hash == this.$route.hash) {
          el.click()
        }
      })
    },
    version () {
      if (localStorage.getItem('version') == null) {
        localStorage.setItem('version', 1)
      }
    },
    newStuff () {
      if (localStorage.getItem('newstuff') != this.$store.state.version) {
        var req = indexedDB.deleteDatabase(this.$store.state.indexdb)
        req.onsuccess = function () {
          console.log('Deleted database successfully')
        }
        req.onerror = function () {
          console.log("Couldn't delete database")
        }
        req.onblocked = function () {
          console.log(
            "Couldn't delete database due to the operation being blocked"
          )
        }
        localStorage.clear()
        localStorage.setItem('newstuff', this.$store.state.version)
        alert('new version')
      }
    },
    mediaQueries () {
      this.$store.commit(
        'mediaQueries',
        window.innerWidth <= 576
          ? 'sm'
          : window.innerWidth <= 768
            ? 'md'
            : window.innerWidth <= 992
              ? 'lg'
              : 'xl'
      )
    },
    init () {
      this.scrollOnLoad()
      // this.cekAuth();
      this.version()
      //! mencek apakah expireData berakhir
      // this.$store.dispatch('auth/autoLogout');
    }
  },
  mounted () {
    let that = this;
    function idleLogout() {
      var t;
      window.onload = resetTimer;
      window.onmousemove = resetTimer;
      window.onmousedown = resetTimer; // catches touchscreen presses as well
      window.ontouchstart = resetTimer; // catches touchscreen swipes as well
      window.onclick = resetTimer; // catches touchpad clicks as well
      window.onkeypress = resetTimer;
      window.addEventListener("scroll", resetTimer, true); // improved; see comments
      function yourFunction() {
        alert('idle')
        // your function for too long inactivity goes here
        // e.g. window.location.href = 'logout.php';
      }

      function resetTimer() {
        clearTimeout(t);
        console.log('idle di reset')
        t = setTimeout(yourFunction, 300000); // time is in milliseconds
      }
    }
    // idleLogout();
    this.mediaQueries()
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        that.mediaQueries()
      })
    })
    this.init()
    setTimeout(() => {
      this.$store.commit('nossr', true)
    }, 100)
    this.$nuxt.$on('busy', data => {
      this.busy = data
    })
  },
}
</script>
<style scoped>
.isaktif {
  transition: all 0.3s ease-in-out;
  display: none;
}
.anim {
  transition: all 0.3s ease-in-out;
}
.bord {
  font-weight: bold;
  cursor: pointer;
  font-size: 17px;
  padding: 5px 0px 5px 0px;
  font-size: 14px;
  border-bottom: 2px solid black;
}
</style>
