<template>
  <div>
    <transition
      v-if="active && jumlah<2"
      tag="div"
      class="conTa"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
      style="z-index:10;"
    >
      <div class="MyImageContainer fixZ" style="z-index:10;" @click="closeIt($event)">
        <button
          type="button"
          class="btn btn-sm btn-outline-danger rounded-circle waves-effect btnClose"
          @click="close"
          id="closeImage"
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
              :key="index"
              :src="item"
              v-show="index==imgIndex"
              alt
            >
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
          >
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      imgList: [],
      imgIndex: 0,
      jumlah: 0,
      swipeDirection: 'None'
    }
  },
  mounted() {
    this.$nuxt.$on('myimage', data => {
      this.imgList = data
    })
    let that = this
    this.$nuxt.$on('closeMyImage', data => {
      this.active = data
    })
    this.$nuxt.$on('myimageactive', data => {
      //saat di active
      document.addEventListener('keydown', function activenya(e) {
        if (e.keyCode == 27) {
          that.$nuxt.$emit('myimagedeactive', false)
          document.removeEventListener('keydown', activenya)
        }
      })
      this.active = true
      this.imgIndex = data
    })
    this.$nuxt.$on('myimagedeactive', data => {
      this.active = data
    })
  },
  methods: {
    onSwipeLeft() {
      this.prev()
    },
    onSwipeRight() {
      this.next()
    },
    prev() {
      this.imgIndex--
      if (this.imgIndex < 0) {
        this.imgIndex = this.imgList.length - 1
      }
    },
    closeIt(e) {
      if (e.target.classList.contains('MyImageContainer')) {
        setTimeout(() => {
          this.$nuxt.$emit('closeMyImage', false)
        }, 500)
        this.$nuxt.$emit('closeMyImage', false)
      } else {
      }
    },
    next() {
      this.imgIndex++
      if (this.imgIndex > this.imgList.length - 1) {
        this.imgIndex = 0
      }
    },
    close() {
      setTimeout(() => {
        this.$nuxt.$emit('closeMyImage', false)
        this.active = false
      }, 500)
      this.active = false
    }
  }
}
</script>
