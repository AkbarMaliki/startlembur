<template>
  <div>
    <div class="container-fluid">
      <div
        class="row"
        style="
        background: rgb(140,193,244);
background: linear-gradient(0deg, rgba(140,193,244,1) 0%, rgba(255,255,255,1) 100%);"
      >
        <div class="col-sm-12 order-0 p-0 m-0">
          <div
            class
            style="
          background: rgb(101,154,231);
background: linear-gradient(90deg, rgba(101,154,231,1) 0%, rgba(136,180,241,1) 33%, rgba(233,233,233,1) 100%);"
          >
            <div class="d-none d-sm-block">
              <img
                src="@/static/icon.png"
                class="kinoLightBox img-fluid z-depth-2 float-left p-2"
                style="height:70px;"
              />
            </div>
            <div class="d-block d-sm-none text-center">
              <img
                src="@/static/icon.png"
                class="kinoLightBox img-fluid z-depth-2 float-left p-2"
                style="height:70px;"
              />
            </div>
            <div style="height:16px;"></div>
            <span
              class="animated fadeIn d-none d-sm-block"
              style="font-family: 'Cantata One', serif;font-size:26px;animation-delay:1s;"
            >PEMERINTAH KABUPATEN HULU SUNGAI SELATAN</span>
            <p
              class="animated fadeIn d-block d-sm-none"
              style="font-family: 'Cantata One', serif;font-size:15px;animation-delay:1s;"
            >PEMERINTAH KABUPATEN HULU SUNGAI SELATAN</p>
            <p
              class="float-right pr-2 pt-1 d-none d-sm-block"
              style="font-size:13px;"
            >Jl.A. Yani Km 11,2 Desa Bamban Kec.Angkinang Kab.HSS Kode pos 71291</p>
            <hr class="style13" />
          </div>
          <span
            style="
            font-family: 'Special Elite', cursive;
            font-size:25px;padding-left:20px;"
          >SELAMAT DATANG</span>
          <p
            class="float-right pr-3 italic pt-3 d-none d-sm-block"
            style="font-family: 'Special Elite', cursive;
            font-size:16px;padding-left:14px;"
          >APLIKASI DATA KEPENDUDUKAN DESA BAMBAN</p>
          <p
            class="float-right pr-3 italic d-block d-sm-none"
            style="font-family: 'Special Elite', cursive;
            font-size:12px;padding-left:14px;"
          >APLIKASI DATA KEPENDUDUKAN DESA BAMBAN</p>
          <hr class="style16" />
          <p
            style="
            font-family: 'Special Elite', cursive;
            padding-left:15%;
            font-size:20px;"
          >KANTOR DESA BAMBAN</p>
        </div>
        <div class="col-sm-9">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-4 order-1 text-center">
                <p style="font-family: 'Electrolize', sans-serif;">Lokasi Kantor :</p>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Kantor+Desa+Bamban/@-2.708747,115.302145,17z/data=!4m5!3m4!1s0x2de5733ed9ae9519:0xbb5f9d2720ec4ec3!8m2!3d-2.7080129!4d115.3024347"
                >
                  <img
                    src="@/static//icon.png"
                    class="img-thumbnail anim zoomInS"
                    style="box-shadow:3px 4px 4px 4px black;"
                    alt
                  />
                </a>
              </div>
              <div class="col-sm-8">
                <carousel
                  :per-page="1"
                  :autoplay="true"
                  :mouse-drag="true"
                  :loop="true"
                  :centerMode="true"
                  :adjustableHeight="true"
                  :paginationActiveColor="'blue'"
                  :speed="1000"
                >
                  <slide>
                    <img src="@/static/icon.png" class="img-thumbnail anim zoomInS" />
                  </slide>
                  <slide>
                    <img src="@/static/icon.png" class="img-thumbnail anim zoomInS" />
                  </slide>
                </carousel>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 p-5 mt-2 shadow-lg rounded-full">
          <p class="text-center" style="font-family: 'Special Elite', cursive;font-size:25px;">
            LOGIN
            <span class="typcn typcn-group" style="font-size:28px;color:black;"></span>
          </p>
          <component v-if="!$store.state.user" :is="componentId"></component>

          <div v-if="$store.state.user!=false" class="text-center">
            <p class="text-center">Anda Sudah Login!</p>
            <button
              type="button"
              @click="$router.push('/app')"
              class="btn btn-sm btn-outline-primary text-center"
            >Masuk</button>
          </div>
        </div>
        <div class="col-sm-12">
          <hr class="style4" />
          <h2 style="font-family: 'Electrolize', sans-serif;font-weight:bold;">Fungsi :</h2>
          <p
            class="sm:pl-5 sm:pr-5 sm:pb-5 sm:pt-2 text-justify"
            style="font-family: 'Electrolize', sans-serif;"
          >Fungsi kantor desa diantaranya untuk menyajikan informasi kependudukan, informasi keuangan dan informasi pembangungann desa. Untuk pengelolaan data kependudukan di desa meliputi berbagai hal antara lain pengelolaan data penduduk kelahiran, kematian , pindah dan datang serta surat keterangan lahir, surat keterangan mati dan surat pengatar pindah</p>

          <hr class="style16" />
        </div>
        <div class="col-sm-12 bg-black text-white p-4">
          <p>Copyright &copy; 2019 By Desa Bamban Kec. Angkinang</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const md5 = require("md5");
import login from "@/components/radio/login.vue";

export default {
  data() {
    return {
      vdata: {},
      show: false,
      errore: false,
      componentId: "login"
    };
  },
  mounted() {
    this.$nuxt.$on("login", data => {
      this.componentId = data;
    });
  },
  components: {
    login
  },
  //   font-family: 'Special Elite', cursive;
  // font-family: 'Tangerine', cursive;
  // font-family: 'Marck Script', cursive;
  // font-family: 'Rancho', cursive;
  // font-family: 'Cantata One', serif;
  // font-family: 'Electrolize', sans-serif;
  head: {
    title: "hello",
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Cantata+One|Electrolize|Marck+Script|Rancho|Special+Elite|Tangerine&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/vue2-animate/dist/vue2-animate.min.css"
      }
    ]
  },
  methods: {}
};
</script>
<style scoped>
.anim {
  transition: all 0.2s ease-in;
}
.zoomInS:hover {
  transform: scale(1.1);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
