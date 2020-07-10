<template>
  <transition
    v-if="active"
    tag="div"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="out-in"
  >
    <div class="MyImageContainer fixZ" @click="closeIt($event)">
      <button
        type="button"
        class="btn btn-sm btn-outline-danger rounded-circle waves-effect btnClose"
        @click="close"
      >X</button>
      <button type="button" class="btn btn-sm btn-outline-success prev" @click="prev">
        <span class="typcn typcn-arrow-left"></span>
      </button>
      <button type="button" class="btn btn-sm btn-outline-success next" @click="next">
        <span class="typcn typcn-arrow-right"></span>
      </button>
      <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
        <transition-group
          tag="div"
          class="imgContainer"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOutRight"
          mode="out-in"
        >
          <img
            class="imgnya animated fadeIn"
            v-for="(item, index) in imgList"
            :key="index+'asd'"
            :src="item"
            v-show="index==imgIndex"
            alt
          />
        </transition-group>
      </v-touch>
      <div class="imgPosList">
        <img
          style="cursor:pointer;"
          @click="imgIndex=index"
          v-for="(item, index) in imgList"
          :key="index"
          :src="item"
          class="imgLitleList"
          :class="[{act:index==imgIndex}]"
          alt
        />
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      imgList: [],
      imgIndex: 0,
      swipeDirection: "None"
    };
  },
  mounted() {
    this.$nuxt.$on("myimage", data => {
      this.imgList = data;
    });
    let that = this;
    this.$nuxt.$on("myimageactive", data => {
      //saat di active
      document.addEventListener("keydown", function activenya(e) {
        if (e.keyCode == 27) {
          that.$nuxt.$emit("myimagedeactive", false);
          document.removeEventListener("keydown", activenya);
        }
      });
      this.active = true;
      this.imgIndex = data;
    });
    this.$nuxt.$on("myimagedeactive", data => {
      this.active = data;
    });
  },
  methods: {
    onSwipeLeft() {
      this.prev();
    },
    onSwipeRight() {
      this.next();
    },
    prev() {
      this.imgIndex--;
      if (this.imgIndex < 0) {
        this.imgIndex = this.imgList.length - 1;
      }
    },
    closeIt(e) {
      if (e.target.classList.contains("MyImageContainer")) {
        this.active = false;
      } else {
      }
    },
    next() {
      this.imgIndex++;
      if (this.imgIndex > this.imgList.length - 1) {
        this.imgIndex = 0;
      }
    },
    close() {
      this.active = false;
    }
  }
};
</script>
