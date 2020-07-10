<template>
  <div class="font-times">
    <!-- CLICK BLANK PAGE INI MAKA CLOSE -->
    <div
      style="height:900px;z-index:130;width:100%;position:fixed;top:0;left:280px;"
      class="bg-transparent"
      @click="menukiri=false"
    ></div>
    <!-- NAVIGATION FIXED TOP -->
    <div
      class="row"
      style="position:fixed;width:80%;left:10%;top:0;z-index:140;background:white;"
      id="navig"
    >
      <div
        class="col-sm-12 text-gray rounded-lg"
        style="border-bottom: 1px solid gray;border-right:1px solid gray;border-left:1px solid gray;"
      >
        <span style class="p-2 cursor-pointer" @click="menukiri=!menukiri">
          <span class="typcn typcn-th-small-outline" style="font-size:21px;"></span> MORE
        </span>
        <span style="border-left:1px solid gray;" class="pl-2 pr-1">
          <span class="typcn typcn-time" style="font-size:21px;"></span>
          {{format(new Date())}}
        </span>
        <span style="border-left:1px solid gray;" class="pl-2 pr-1 float-right">
          <span class="typcn typcn-zoom" style="font-size:21px;"></span> Search
        </span>
        <span style="border-left:1px solid gray;" class="pl-2 pr-1 float-right">
          <span class="typcn typcn-social-facebook-circular" style="font-size:21px;"></span>
          &nbsp;
          <span class="typcn typcn-social-twitter-circular" style="font-size:21px;"></span>
          &nbsp;
          <span
            class="typcn typcn-social-google-plus-circular"
            style="font-size:21px;"
          ></span>
          &nbsp;
        </span>
      </div>
    </div>
    <!-- MENU 2 -->
    <div
      v-show="menukiri"
      class="row rounded-lg p-2"
      style="width:300px;height:600px;position:fixed;left:0;top:33px;box-shadow:1px 1px 1px 1px gray;z-index:120;background:white;"
    >
      <div class="col-sm-12">
        <p class="bg-dark p-1 text-center text-white rounded-lg">Popular Articles</p>
        <br />
        <div class="p-2">
          <!-- MENU 1 -->
          <div class="pl-2 bord hover:bg-blue-lighter rounded-t-lg" @click="muncul($event)">
            Menu 1
            <span class="typcn typcn-arrow-down float-right"></span>
          </div>
          <ul class="isaktif pl-3 anim mb-3">
            <li class="bord hover:bg-blue-lightest">pilih 1</li>
            <li class="bord hover:bg-blue-lightest">pilih 2</li>
            <li class="bord hover:bg-blue-lightest">pilih 3</li>
          </ul>
          <!-- MENU 2 -->
          <div class="pl-2 bord hover:bg-blue-lighter rounded-t-lg" @click="muncul($event)">
            Menu 2
            <span class="typcn typcn-arrow-down float-right"></span>
          </div>
          <ul class="isaktif pl-3 anim">
            <li class="bord hover:bg-blue-lightest">pilih 1</li>
            <li class="bord hover:bg-blue-lightest">pilih 2</li>
            <li class="bord hover:bg-blue-lightest">pilih 3</li>
          </ul>
          <!-- MENU 3 -->
          <div class="pl-2 bord hover:bg-blue-lighter rounded-t-lg" @click="muncul($event)">
            Menu 3
            <span class="typcn typcn-arrow-down float-right"></span>
          </div>
          <ul class="isaktif pl-3 anim">
            <li class="bord hover:bg-blue-lightest">pilih 1</li>
            <li class="bord hover:bg-blue-lightest">pilih 2</li>
            <li class="bord hover:bg-blue-lightest">pilih 3</li>
          </ul>
          <!-- END MENU -->
          <br />
          <p class="bg-dark p-1 text-center text-white rounded-lg">Trending</p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
export default {
  data() {
    return {
      menukiri: false,
      mdq: "xl"
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.mdq =
        window.innerWidth <= 576
          ? "sm"
          : window.innerWidth <= 768
          ? "md"
          : window.innerWidth <= 992
          ? "lg"
          : "xl";
    },
    format() {
      return this.$datefns.format(new Date(2014, 6, 2), "dddd MMMM YYYY", {
        locale: id
      });
    },
    muncul(e) {
      e.target.nextSibling.classList.toggle("isaktif");
    }
  }
};
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
  border-bottom: 1px solid gray;
}
</style>