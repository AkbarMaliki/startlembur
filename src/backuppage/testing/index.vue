<template>
  <div>
    <div class="container flex flex-wrap mx-auto px-4">
      <div class="w-full sm:w-1/3 bg-blue-light">
        tail
        <span class="typcn typcn-arrow-left"></span>
      </div>
      <div class="w-full sm:w-1/3 bg-yellow-light">wind</div>
    </div>
    <div class="text-center">
      axios : &#9728; cek di mounted
      <br />toast : &#9728;
      <button
        type="button"
        @click="toastIt"
        class="btn btn-sm btn-outline-primary"
      >Toast</button>
      <br />bootstrap : &#9728; ini udah pake bootstrap
      <br />animation.css : &#9728; ini udah pake animation
      <p class="animated fadeInDown">Hello world</p>
      <p class="font-bold">
        note: ada kemungkinan animasi off di windows, cara menaktifkannya
        In Windows 10, Settings > Ease of Access > Display > Show animations.
      </p>
      <br />daycaca : &#9728; cek di mounted
      <br />vue head : &#9728; cek di head property
      <br />
      lodash : &#9728; {{$_.difference([3,2],[2,5])}}
      <br />moment : &#9728; off
      <br />
      datefns : &#9728; {{$datefns.distanceInWordsToNow(new Date(2015, 0, 1, 0, 0, 15))}}
      <br />typicons : &#9728;
      <span class="typcn typcn-arrow-left"></span>
      <img src="@/assets/svg/arrow-left.svg" alt />
      <br />
      uniqid: &#9728;{{$uniqid()}}
      <br />scrollactive: &#9728;
      <scrollactive @itemchanged="onItemChanged" active-class="active" :offset="50">
        <a href="javascript:;" onclick="document.location.hash='pos1';" key="1">pos1</a>
        <br />
        <a href="javascript:;" onclick="document.location.hash='lazy';" key="2">vlazy</a>
      </scrollactive>
      <br />
      <br />v-touch: &#9728; cek di mode mobile
      <div class="text-center d-sm-none">
        <v-touch style="background:blue;" v-on:swiperight="onswiperight">swipe ke kanan</v-touch>
      </div>
      <hr class="style2" />
      <!-- MODAL -->
      <br />modal: &#9728;
      <template v-if="modal">
        <div
          class="modalbackground"
          @click="modal=false"
          style="width:100%;z-index:10;position:fixed;background:rgba(128, 128, 128, 0.438);height:900px;"
        ></div>
        <div
          class="modalny rounded-lg shadow-lg"
          style="z-index:100;overflow-y:scroll;position:fixed;top:10%;;width:60%;left:20%;height:500px;padding:30px 20px 20px 40px;background:white;"
        >isi</div>
      </template>
      <!-- MODAL END -->
      <button @click="modal=true" class="btns btns-sm bg-blue">modal</button>
      <br />upload: &#9728;
      <Uploader @upload="imgs = $event" :multi="true" />
      <button @click="cek" class="btns btns-sm bg-blue">cek image uploaded</button>
    </div>
    <hr class="style13" />
    <br />share: &#9728;
    <br />
    <br />
    <Share
      description="dataBlog.description"
      title="titlenya"
      quote="titlenya"
      hashtags="tag1,tag2,tag3"
      :twitterUser="'vuejs'"
    />
    <br />
    <br />
    <!-- <input-tag v-model="tags"></input-tag> -->
    input tags: &#9728;
    <br />
    <br />
    <vue-tags-input
      v-model="tag"
      :autocomplete-items="filteredItems"
      :tags="tags"
      @tags-changed="newTags => tags = newTags"
    />
    <br />carousel: &#9728;
    <br />
    <br />
    <carousel
      :per-page="1"
      :autoplay="true"
      :autoplayTimeout="6000" 
      :mouse-drag="true"
      :loop="true"
      :centerMode="true"
      :adjustableHeight="true"
      :paginationActiveColor="'blue'"
      :paginationEnabled="true"
      :speed="1000"
      ref="idCarousel"
    >
      <slide>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Kino_no_Tabi_volume_1_cover.jpg/220px-Kino_no_Tabi_volume_1_cover.jpg"
          alt
        />
      </slide>
      <slide>
        <img src="https://img.esit.biz/tuiteruyoo2013/51smpNp6wyL.jpg" alt />
      </slide>
    </carousel>
    <!-- 
      Carousel custom navigation 
      #button
      @click="SlideCarousel('prev')"
      @click="SlideCarousel('next')"
      #method
      SlideCarousel(value) {
        const carousel = this.$refs['idCarousel'][0];
        const currentPage = carousel.currentPage;
        const pageCount = carousel.pageCount;
        if (value == 'prev') {
            currentPage != 0 ? carousel.goToPage(currentPage - 1) : carousel.goToPage(pageCount - 1);
        } else {
            currentPage < pageCount - 1 ? carousel.goToPage(currentPage + 1) : carousel.goToPage(0);
        }
    },
     -->

    <div class="text-center mx-auto w-50pr">
      <router-link to="/testing/auto" class="btn btn-sm btn-outline-danger btn-block">auto</router-link>
      <br />#A
      <router-link
        to="/testing/autocompleteObject"
        class="btn btn-sm btn-outline-danger btn-block"
      >AutoComplete Object Buefy</router-link>
      <br />
       <router-link
        to="/testing/barcode"
        class="btn btn-sm btn-outline-danger btn-block"
      >Barcode</router-link>
      <br />
      <router-link
        to="/testing/backup"
        class="btn btn-sm btn-outline-danger btn-block"
      >Backup/restore ke excel</router-link>
      <br />#B
      <router-link
        to="/testing/chat?room=12345"
        class="btn btn-sm btn-outline-danger btn-block"
      >Chat</router-link>
      <br />#C
      <router-link to="/testing/chart" class="btn btn-sm btn-outline-danger btn-block">Chart</router-link>
      <br />
      <router-link to="/testing/countdown" class="btn btn-sm btn-outline-danger btn-block">CountDown</router-link>
      <br />
      <router-link to="/testing/crud" class="btn btn-sm btn-outline-danger btn-block">CRUD</router-link>
      <br />
      <router-link
        to="/testing/dekstop"
        class="btn btn-sm btn-outline-danger btn-block"
      >Dekstop section</router-link>
      <br />#D
      <router-link to="/testing/download" class="btn btn-sm btn-outline-danger btn-block">download</router-link>
      <br />
      <router-link to="/testing/draggable-list" class="btn btn-sm btn-outline-danger btn-block">Draggable List</router-link>
      <br />
      <router-link to="/testing/datefns" class="btn btn-sm btn-outline-danger btn-block">Date fns</router-link>
      <br />
      <router-link
        to="/testing/editor"
        class="btn btn-sm btn-outline-danger btn-block"
      >Editor text area</router-link>
      <br />#E
      <router-link
        to="/testing/filterList"
        class="btn btn-sm btn-outline-danger btn-block"
      >Filter List Data</router-link>
      <br />#F
      <router-link to="/testing/gmap" class="btn btn-sm btn-outline-danger btn-block">goggle maps</router-link>
      <br />
       <router-link to="/testing/firebase/auth" class="btn btn-sm btn-outline-danger btn-block">Firebase Auth</router-link>
      <br />
         <router-link to="/testing/firebase/crud" class="btn btn-sm btn-outline-danger btn-block">Firebase CRUD (database firestore)</router-link>
      <br />
      <router-link
        to="/testing/infolayananapi"
        class="btn btn-sm btn-outline-danger btn-block"
      >info layanan API</router-link>
      <br />
      <router-link
        to="/testing/jsontoexcel"
        class="btn btn-sm btn-outline-danger btn-block"
      >json to excel</router-link>
      <br />
       <router-link
        to="/testing/json-edit"
        class="btn btn-sm btn-outline-danger btn-block"
      >json-edit</router-link>
      <br />
      <router-link
        to="/testing/kalendar"
        class="btn btn-sm btn-outline-danger btn-block"
      >Kalendar</router-link>
      <br />
      <router-link
        to="/testing/mobile"
        class="btn btn-sm btn-outline-danger btn-block"
      >Mobile section</router-link>
      <br />
      <router-link
        to="/testing/menudropdown"
        class="btn btn-sm btn-outline-danger btn-block"
      >menu drop down</router-link>
      <br />
      <router-link to="/testing/menu" class="btn btn-sm btn-outline-danger btn-block">menu</router-link>
      <br />
      <router-link
        to="/testing/antara-tgl"
        class="btn btn-sm btn-outline-danger btn-block"
      >Mencari Tanggal Diantara tanggal</router-link>
      <br />
      <router-link to="/testing/menu2" class="btn btn-sm btn-outline-danger btn-block">menu 2</router-link>
      <br />
      <router-link
        to="/testing/multiform"
        class="btn btn-sm btn-outline-danger btn-block"
      >Multi form & buefy components</router-link>
      <br />
      <router-link to="/testing/nedb" class="btn btn-sm btn-outline-danger btn-block">nedb</router-link>
      <br />
       <router-link to="/testing/notifikasi" class="btn btn-sm btn-outline-danger btn-block">notifikasi</router-link>
      <br />
      <router-link
        to="/testing/observevisibility"
        class="btn btn-sm btn-outline-danger btn-block"
      >Observe visibility</router-link>
      <br />
      <router-link to="/testing/pwa" class="btn btn-sm btn-outline-danger btn-block">PWA</router-link>
      <br />
      <router-link
        to="/testing/persistance"
        class="btn btn-sm btn-outline-danger btn-block"
      >persistance</router-link>
      <br />
 <router-link
        to="/testing/pdf"
        class="btn btn-sm btn-outline-danger btn-block"
      >pdf</router-link>
      <br />
      <router-link to="/testing/php" class="btn btn-sm btn-outline-danger btn-block">php login</router-link>
      <br />
      <router-link to="/testing/printA4" class="btn btn-sm btn-outline-danger btn-block">Print A4</router-link>
      <br />
      <router-link to="/testing/socketio" class="btn btn-sm btn-outline-danger btn-block">Socket Io</router-link>
      <br />
       <router-link to="/testing/socketiophp" class="btn btn-sm btn-outline-danger btn-block">Socket Io PHP</router-link>
      <br />
      <router-link to="/testing/sms" class="btn btn-sm btn-outline-danger btn-block">SMS</router-link>
      <br />
      <router-link to="/testing/scrollbutton" class="btn btn-sm btn-outline-danger btn-block">Scroll Button</router-link>
      <br />
      <router-link to="/testing/table" class="btn btn-sm btn-outline-danger btn-block">Table</router-link>
      <br />
      <router-link
        to="/testing/datatable"
        class="btn btn-sm btn-outline-danger btn-block"
      >Table Datatable section</router-link>
      <br />
      <router-link to="/testing/tree" class="btn btn-sm btn-outline-danger btn-block">tree</router-link>
      <br />
       <router-link to="/testing/timelinevertical" class="btn btn-sm btn-outline-danger btn-block">timeline</router-link>
      <br />
      <router-link
        to="/testing/treechart"
        class="btn btn-sm btn-outline-danger btn-block"
      >tree chart</router-link>
      <br />
      <router-link to="/testing/treedrags" class="btn btn-sm btn-outline-danger btn-block">tree drag</router-link>
      <br />
      <router-link
        to="/testing/treeinput"
        class="btn btn-sm btn-outline-danger btn-block"
      >tree input</router-link>
      <br />
      <router-link
        to="/testing/treenavigation"
        class="btn btn-sm btn-outline-danger btn-block"
      >tree navigation</router-link>
      <br />
      <router-link to="/testing/template" class="btn btn-sm btn-outline-danger btn-block">Template</router-link>
      <br />
      <router-link to="/testing/test" class="btn btn-sm btn-outline-danger btn-block">Test</router-link>
      <br />
      <router-link to="/testing/ttdsignature" class="btn btn-sm btn-outline-danger btn-block">Tanda tangan / ttd / signature</router-link>
      <br />
      <router-link
        to="/testing/upload"
        class="btn btn-sm btn-outline-danger btn-block"
      >Upload to string</router-link>
      <br />
      <router-link
        to="/testing/vuedragscroll"
        class="btn btn-sm btn-outline-danger btn-block"
      >vue drag scroll</router-link>
      <br />
      <router-link
        to="/testing/vuelazycomponent"
        class="btn btn-sm btn-outline-danger btn-block"
      >Vue Lazy Load Components</router-link>
      <br />
      <router-link
        to="/testing/radialprogress"
        class="btn btn-sm btn-outline-danger btn-block"
      >vue radias progress</router-link>
      <br />
      <router-link to="/testing/vviewer" class="btn btn-sm btn-outline-danger btn-block">v-viewer</router-link>
      <br />
      <router-link to="/testing/wemos" class="btn btn-sm btn-outline-danger btn-block">Wemos</router-link>
      <br />
      <router-link
        to="/testing/websocket"
        class="btn btn-sm btn-outline-danger btn-block"
      >Web Scoket</router-link>
      <br />
      <router-link to="/testing/webrtc" class="btn btn-sm btn-outline-danger btn-block">webrtc</router-link>
      <br />
    </div>
    <br />
    <div style="height:500px;"></div>
    <div id="pos1"></div>
    <div id="lazy" v-myimage>
      <img src="@/static/icon.png" class="myimage" alt />
      <img v-lazy="require('@/static/icon.png')" class="myimage" alt />
    </div>
    <br />

    <div style="height:500px;"></div>
  </div>
</template>
<script>
import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel'

import Share from '@/components/Single/Share.vue'
import Uploader from '@/components/Single/Uploader.vue'
export default {
  data () {
    return {
      imgs: [],
      tag: '',
      tags: ['taufik', 'akbar', 'maliki'],
      filteredItems: [
        {
          text: 'Spain'
        },
        {
          text: 'France'
        },
        {
          text: 'USA'
        },
        {
          text: 'Germany'
        },
        {
          text: 'China'
        }
      ],
      modal: false,
      img: {
        src: '@/assets/tree.png'
      }
    }
  },
  components: {
    Share,
    Uploader,
    Carousel,
    Slide
  },
  mounted () {
    console.log('daycaca', this.$daycaca)
    console.log('lodash', this.$_)
  },
  methods: {
    cek () {
      console.log(this.img)
    },
    onItemChanged () {
      console.log('sup')
    },
    onswiperight () {
      alert('sup')
    },
    toastIt () {
      this.$toasted.show('Logging in...').goAway(1500)
    }
  },
  head: {
    title: {
      inner: 'It will be a pleasure'
    },
    meta: [
      // { name: 'application-name', content: 'Name of my application' },
    ],
    link: [
      // { rel: 'canonical', href: 'http://example.com/#!/contact/', id: 'canonical' },
    ],
    script: [
      // { type: 'text/javascript', src: 'cdn/to/script.js', async: true, body: true}, // Insert in body
    ],
    style: [
      // { type: 'text/css', inner: 'body { background-color: #000; color: #fff}', undo: false },
    ]
  }
}
</script>
