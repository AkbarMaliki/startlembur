<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <div
            class="p-3 hover:bg-red hover:text-white anim"
            v-for="(item, index) in menus"
            :key="index"
            :class="{'aktif':posisi==item.posisi}"
            style="box-shadow:1px 1px 1px 1px black;cursor:pointer;"
            @click="posisi=index"
          >
            <span class="typcn float-left mr-2" :class="[item.icon]" style="font-size:36px;"></span>
            <p class="font-bold">{{item.judul}}</p>
            <p>{{item.isi}}</p>
          </div>
        </div>
        <!-- begin -->
        <div class="col-sm-9" v-if="posisi==0">
          <div class="row">
            <!-- BERITA 1 MENU 1 -->
            <div class="col-sm-4 hoverini">
              <div class="anim">
                <img
                  src="https://66.media.tumblr.com/35ebf8aca582035bba09f98457f53135/tumblr_ozakl3HzP01tnxsbko1_500.jpg"
                  style="height:300px;width:100%;"
                  class="kinoLightBox img-fluid rounded-top rounded-lg"
                  alt="top"
                />
              </div>
              <div
                style="background:#343a40a9;height:70px;position:relative;margin-top:-70px;color:white;"
                class="p-2"
              ></div>
              <div
                style="width:80%;margin:auto;z-index:100;margin-top:-60px;position:relative;"
                class="bg-white rounded-lg p-3 hover2 anim"
              >
                <p style="font-size:16px;" class="font-bold">
                  Berita 1
                  <br />
                </p>
                <p style="font-size:12px;">{{format(new Date())}}</p>
                <hr class="style5" />
                <p
                  class
                  style="font-size:13px;"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti</p>
              </div>
            </div>
            <!-- BERITA 1 MENU 2 -->
            <div class="col-sm-4 hoverini">
              <div class="anim">
                <img
                  src="https://static.zerochan.net/Kino.no.Tabi.full.2221355.jpg"
                  style="height:300px;width:100%;"
                  class="kinoLightBox img-fluid rounded-top rounded-lg"
                  alt="top"
                />
              </div>
              <div
                style="background:#343a40a9;height:70px;position:relative;margin-top:-70px;color:white;"
                class="p-2"
              ></div>
              <div
                style="width:80%;margin:auto;z-index:100;margin-top:-60px;position:relative;"
                class="bg-white rounded-lg p-3 hover2 anim"
              >
                <p style="font-size:16px;" class="font-bold">
                  Berita 2
                  <br />
                </p>
                <p style="font-size:12px;">{{format(new Date())}}</p>
                <hr class="style5" />
                <p
                  class
                  style="font-size:13px;"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti</p>
              </div>
            </div>
            <!-- BERITA 1 MENU 3 -->
            <div class="col-sm-4 hoverini">
              <div class="anim">
                <img
                  src="https://static.zerochan.net/Kino.no.Tabi.full.2207382.jpg"
                  style="height:300px;width:100%;"
                  class="kinoLightBox img-fluid rounded-top rounded-lg"
                  alt="top"
                />
              </div>
              <div
                style="background:#343a40a9;height:70px;position:relative;margin-top:-70px;color:white;"
                class="p-2"
              ></div>
              <div
                style="width:80%;margin:auto;z-index:100;margin-top:-60px;position:relative;"
                class="bg-white rounded-lg p-3 hover2 anim"
              >
                <p style="font-size:16px;" class="font-bold">
                  Berita 3
                  <br />
                </p>
                <p style="font-size:12px;">{{format(new Date())}}</p>
                <hr class="style5" />
                <p
                  class
                  style="font-size:13px;"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti</p>
              </div>
            </div>
          </div>
        </div>
        <!-- next -->
        <div class="col-sm-9 anim" v-if="posisi==1">aaa</div>
        <!-- next -->
        <div class="col-sm-9 anim" v-if="posisi==2">bbb</div>
        <!-- next -->
        <div class="col-sm-9 anim" v-if="posisi==3">ccc</div>
        <!-- next -->
      </div>
    </div>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
export default {
  data() {
    return {
      posisi: 0,
      menus: [
        {
          judul: "Terbaru",
          isi: "Rangkuman Berita",
          icon: "typcn-location-arrow",
          posisi: 0
        },
        {
          judul: "Siaran Pers",
          isi: "Siaran Pers Terbaru",
          icon: "typcn-document-text",
          posisi: 1
        },
        {
          judul: "Berita",
          isi: "Berita Terbaru",
          icon: "typcn-microphone-outline",
          posisi: 2
        },
        {
          judul: "Pengumuman",
          isi: "Pengumuman Terbaru",
          icon: "typcn-info-large",
          posisi: 3
        }
      ]
    };
  },
  props: {
    beritas: {
      type: Array,
      required: true,
      default: () => ["_id"]
    }
  },
  methods: {
    format() {
      return this.$datefns.format(new Date(2014, 6, 2), "dddd MMMM YYYY", {
        locale: id
      });
    }
  }
};
</script>
<style scoped>
.aktif {
  background: rgba(39, 243, 56, 0.671);
}
.anim {
  transition: all 0.4s ease-in-out;
}
.hoverini {
  cursor: pointer;
}
.hoverini:hover > .hover2 {
  border: 1px solid gray;
  cursor: pointer;
  transform: translate(-20px, -50px);
}
</style>