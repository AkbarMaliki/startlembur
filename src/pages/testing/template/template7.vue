<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- HEADER -->
        <div class="col-sm-12 " style="padding:0;margin:0;height:140px;background: rgb(201,206,231);
background: linear-gradient(0deg, rgba(201,206,231,1) 3%, rgba(32,110,210,0.5410539215686274) 36%, rgba(73,115,217,0.8603816526610644) 93%);">
          <!-- GARIS KIRI ATAS -->
          <!-- <p class="absolute" style="z-index:100;">HELLO THERE</p> -->
          <img src="@/static/icon.png" class="img-fluid z-depth-1  animated fadeInLeft" style="height:5vh;width:80vw;" />
          <span class="absolute" style="right:10px;;top:0;color:White;">
            <a href="#" style="margin-left:10px;" class="font-times" @click="$router.push('/sekolah/login')"> LOGIN <span class="typcn typcn-user"></span></a>
          </span>
          <!-- GARIS KIRI ATAS END -->
          <!-- LOGO -->
          <img
            src="@/static/icon.png"
            class="img-fluid z-depth-1 absolute  animated fadeIn"
            style="width:60px;left:30px;top:45px;"
          />
          <p class=" font-times  sm:text-xl md:text-2xl xl:texl-2xl" style="margin-left:100px;margin-top:10px;color:white;">
            SMA Negeri 1 Tambang Ulang
            <br />Website Akademik
            
          </p>
          <a href="https://dapo.dikdasmen.kemdikbud.go.id/sekolah/72F2B6E8C7A78F0E9B0B">
            <img src="@/static/Kino.jpg"  class="kinoLightBox img-fluid absolute cursor-pointer" style="right:10px;width:40vw;top:45px;border-radius: 20px">
          </a>
          
        </div>
        <!-- MENUS -->
        <div class="col-12 bg-blue-darker" style="">
          
           <nav role="navigation" class="" style="z-index:10;">
            <ul class="row">
              <!-- MENU 1 -->
              <li class="col-1 btn-outline-primary font-times text-sm">
                <span class="typcn typcn-home text-yellow"></span>
              </li>
              <li class="col-2 btn-outline-primary font-times text-sm">
                <a href="#">Profile</a>
                 <ul class="dropdown rounded-b-lg animated fadeIn" style="box-shadow:3px 4px 10px 2px grey;">
                  <li style="border-top:3px solid black;"></li>
                  <li class="hover:bg-grey-light font-bold text-sm  font-times  rounded-r-lg anim">
                    <a href="#">Sejarah sekolah</a>
                  </li>
                  <li class="hover:bg-grey-light font-bold text-sm  font-times rounded-r-lg anim">
                    <a href="#">Visi dan Misi</a>
                  </li>
                  <li class="hover:bg-grey-light font-bold text-sm  font-times rounded-r-lg anim">
                    <a href="#">Program Sekolah</a>
                  </li>
                   <li class="hover:bg-grey-light font-bold text-sm  font-times rounded-r-lg anim">
                    <a href="#">Prestasi Sekolah</a>
                  </li>
                  <li class="hover:bg-grey-light font-bold text-sm  font-times rounded-r-lg anim">
                    <a href="#">Daftar PTK dan Karyawan</a>
                  </li>
                </ul>
              </li>
              <!-- MENU 2 -->
              <li class="col-2 btn-outline-primary font-times text-sm">
                <a href="#">Kurikulum</a>
                <ul class="dropdown rounded-b-lg animated fadeIn" style="box-shadow:3px 4px 10px 2px grey;">
                  <li style="border-top:3px solid black;"></li>
                  <li class="hover:bg-grey-light font-bold text-sm rounded-r-lg anim">
                    <a href="#">List Pelajaran</a>
                  </li>
                  <li class="hover:bg-grey-light font-bold text-sm rounded-r-lg anim">
                    <a href="#">Kalender Pendidikan</a>
                  </li>
                </ul>
              </li>
              <!-- MENU 3 -->
              <li class="col-2 btn-outline-primary font-times text-sm">
                <a href="#">Kesiswaan</a>
                 <ul class="dropdown rounded-b-lg animated fadeIn" style="box-shadow:3px 4px 10px 2px grey;">
                  <li style="border-top:3px solid black;"></li>
                  <li class="hover:bg-grey-light font-bold text-sm rounded-r-lg anim">
                    <a href="#">Osis</a>
                  </li>
                  <li class="hover:bg-grey-light font-bold text-sm rounded-r-lg anim">
                    <a href="#">Ekstrakuliler</a>
                  </li>
                  <li class="hover:bg-grey-light font-bold text-sm rounded-r-lg anim">
                    <a href="#">Prestasi Siswa</a>
                  </li>
                </ul>
              </li>
                <li class="col-2 btn-outline-primary font-times text-sm">
                <a href="#">Tentang</a>
                 <ul class="dropdown rounded-b-lg animated fadeIn" style="box-shadow:3px 4px 10px 2px grey;">
                  <li style="border-top:3px solid black;"></li>
                  <li class="hover:bg-grey-light font-bold text-sm rounded-r-lg anim">
                    <a href="#">Berita</a>
                  </li>
                  <li class="hover:bg-grey-light font-bold text-sm rounded-r-lg anim">
                    <a href="#">Kegiatan / Event</a>
                  </li>
                  <li class="hover:bg-grey-light font-bold text-sm rounded-r-lg anim">
                    <a href="#">Photo Galery</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <!-- ROUTER VIEW -->
        <div class="col-12" style="padding:0;margin:0;">
          ROUTER VIEW
        </div>
        <!-- FOOTER -->
        <div class="col-12 bg-dark text-white" >
          <div class="row">
            <div class="col-sm-6 p-4">
              <br>
              <p class="text-center font-times ">Tentang Kami</p>
              <hr class="style16">
              <br>
              <p class="text-2xl font-times font-bold">SMA 1 Negeri Tambang Ulung</p>
              <p class="text-justify font-times text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit autem obcaecati ipsa vel quam perferendis, molestias nisi maxime omnis nihil modi molestiae! In commodi culpa, distinctio quibusdam ad accusantium.
              </p>
            </div>
            <div class="col-sm-3">
                <br>
              <p class="text-center font-times ">Link Penting</p>
              <hr class="style16">
              <br>
               <a href="https://google.com" class="border-b-2 border-white hover:text-blue font-times text-sm" style="display:block;">
                TEST
               </a>
                <a href="https://google.com" class="border-b-2 border-white hover:text-blue font-times text-sm" style="display:block;">
                TEST
               </a>
                <a href="https://google.com" class="border-b-2 border-white hover:text-blue font-times text-sm" style="display:block;">
                TEST
               </a>
            </div>
            <div class="col-sm-3">
                   <br>
              <p class="text-center font-times ">Link Intranet</p>
              <hr class="style16">
              <br>
               <a href="https://google.com" class="border-b-2 border-white hover:text-blue font-times text-sm" style="display:block;">
                TEST
               </a>
                <a href="https://google.com" class="border-b-2 border-white hover:text-blue font-times text-sm" style="display:block;">
                TEST
               </a>
                <a href="https://google.com" class="border-b-2 border-white hover:text-blue font-times text-sm" style="display:block;">
                TEST
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Carousel, Slide } from 'vue-carousel';
  import axios from 'axios'
export default {
  layout:"awal",
  data() {
    return { 
      beritas: [
        {
          judul: "Berita 1",
          isi: "ini adalah isi berita no 1",
          viewed: 100,
          createdAt: new Date(),
          createdBy: "taufik",
          tags: "novel, anime, journey, kino , best anime",
          gambar:
            "http://girlsincapes.com/wp-content/uploads/2017/09/Kino-no-Tabi-The-Beautiful-World-Light-Novel-Visual-640x347.jpg"
        },
        {
          judul: "Berita 2",
          isi: "bagian berita 2 agak sedikit beda",
          viewed: 80,
          createdAt: new Date(),
          createdBy: "taufik",
          tags: "novel, anime, journey, kino , best anime",
          gambar:
            "https://static.zerochan.net/Kino.%28Kino.no.Tabi%29.full.1936145.jpg"
        },
        {
          judul: "Berita 3",
          isi: "Lorem asd asd edw sadw sad wdsa dwd dwed sadwd",
          viewed: 60,
          createdAt: new Date(),
          createdBy: "taufik",
          tags: "novel, anime, journey, kino , best anime",
          gambar: "https://static.zerochan.net/Kino.no.Tabi.full.854647.jpg"
        },
        {
          judul: "Berita 4",
          isi: "mau nya sih lorem lagi tapi ya gimana lagi",
          viewed: 60,
          createdAt: new Date(),
          createdBy: "taufik",
          tags: "novel, anime, journey, kino , best anime",
          gambar: "http://www.wratbox.com/crap/kinomauser_wp1024.jpg"
        },
        {
          judul: "Berita 5",
          isi: "sexy tania on bikini",
          viewed: 60,
          createdAt: new Date(),
          createdBy: "taufik",
          tags: "novel, anime, journey, kino , best anime",
          gambar:
            "https://i.pinimg.com/474x/44/f2/e1/44f2e141e5f5eae15221bc5e4ef91657.jpg"
        }
      ],
      menus:"tentang",
      vdata: {},
      pelajarans:[]
    };
  },
  components:{
     Carousel,
          Slide
  },
  mounted() {
  }
};
</script>
<style scoped>
/* DROPDOWN */
a {
  text-decoration: none;
}

nav {
}

nav > ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

nav > ul > li {
  padding: 4px;
  color: black;
  display: block;
  float: left;
  z-index: 100;
  text-align: center;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
}

nav > ul > li a {
  color:  white;
  text-transform: uppercase;
}

nav > ul > li:hover {
  cursor: pointer;
}
nav > ul > li:hover a {
  color: black;
}

nav > ul li ul {
  background: white;
  visibility: hidden;
  opacity: 0;
  min-width: 100%;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1px;
  left: 0;
  display: none;
}

nav > ul li:hover > ul,
nav > ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

nav > ul li ul li {
  margin-left: 1px;
  clear: both;
  width: 100%;
  padding:5px;
}
/* DROPDOWN */
</style>