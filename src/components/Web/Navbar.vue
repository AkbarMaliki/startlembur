<template>
  <div style="position:fixed;width:100%;top:0;z-index:1000;">
    <div
      class="bg-white h-10 container flex flex-wrap mx-auto px-4 border md:rounded-b-full"
      style="z-index:100;position:static;"
    >
      <!-- LEFT ITEM -->
      <div class="w-1/2 sm:w-3/5 self-center pl-6">
        <div class="container flex flex-wrap mx-auto px-4">
          <div class="flex flex-wrap flex-row">
            <img
              @click="sidebar=!sidebar;closeCall=!closeCall;"
              src="@/assets/svg/leaf.svg"
              class="rounded-full hover:bg-green-light cursor-pointer h-30px"
              alt="test"
            >
            <router-link
              to="/"
              class="d-none d-md-inline linkMenu hover:text-green-dark hover:bg-green-lightest"
            >HOME</router-link>
            <router-link
              to="/about"
              class="d-none d-md-inline linkMenu hover:text-green-dark hover:bg-green-lightest"
            >ABOUT</router-link>
            <router-link
              to="/blog"
              class="d-none d-md-inline linkMenu hover:text-green-dark hover:bg-green-lightest"
            >BLOG</router-link>
          </div>
        </div>
      </div>
      <!-- RIGHT ITEM -->
      <div class="w-1/2 sm:w-2/5 self-center pl-6">
        <div class="pr-10 flex flex-wrap">
          <div class="container flex flex-wrap">
            <div
              class="w-full d-none d-md-inline pt-1 pr-2"
              :class="[{'sm:w-4/5':$store.state.user},{'sm:w-4/5':!$store.state.user}]"
            >
              <AutoComplete/>
            </div>
            <div class="w-full self-center sm:w-1/5 d-none d-md-inline">
              <img
                :src="$store.state.user.picture"
                v-imgs
                class="img-thumbnail cursor-pointer shadow-md"
                style="height:35px;"
                v-if="$store.state.user"
                alt="my picture"
                @click="navbar=!navbar;closeCall=!closeCall;"
                @mouseover="navbar=!navbar;closeCall=!closeCall;"
              >
              <img
                id="extendscall"
                src="@/assets/svg/export-outline.svg"
                alt="thlist"
                class="cursor-pointer hover:bg-red-light rounded-full"
                @click="navbar=!navbar;closeCall=!closeCall;extendaktif($event)"
                @mouseover="navbar=!navbar;closeCall=!closeCall;extendaktif($event)"
                v-else
              >
            </div>
            <!-- tampilan mobile -->
            <img
              id="extendscall2"
              src="@/assets/svg/arrow-sorted-down.svg"
              alt="thlist"
              class="d-md-none cursor-pointer p-1 hover:bg-red-light rounded-full"
              @click="navbar=!navbar;closeCall=!closeCall;$event.target.classList.toggle('active')"
            >
          </div>
        </div>
      </div>
    </div>
    <!-- <v-touch style="width:80px;background:black;height:900px;position:absolute;left:0;z-index:10001;" @click="onSwipeLeft"></v-touch> -->
    <!-- slider di kiri dengan gesture swap -->
    <no-ssr>
      <div class="text-center d-sm-none">
        <v-touch
          style="width:40px;background:transparent;height:900px;position:absolute;left:0;z-index:10001;"
          v-on:swiperight="onSwipeRight"
        ></v-touch>
      </div>
    </no-ssr>
    <!-- DROP MENU -->
    <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
      style="animation-duration:0.5s;"
    >
      <div
        id="navbarextend"
        class="container pt-3 bg-white boxshadow rounded-b-lg"
        style="min-height:250px;animation-duration:0.5s;position:absolute;left:0;right:0;z-index:100;"
        v-show="navbar"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 order-0 d-sm-none sm:order-0 md:order-0 lg:order-0 pb-3">
              <br>
              <AutoComplete class="d-sm-none"/>
            </div>
            <div
              class="col-sm-12 flex flex-wrap flex-col item-center justify-center order-0 sm:order-1 md:order-1 lg:order-1"
            >
              <div class="text-center">
                <template v-if="$store.state.user">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm-3">
                        <br>
                        <br>
                        <router-link
                          :to="`/profile/${$store.state.user.name.split(' ').join('-')}?id=${$store.state.user._id}`"
                          class="btns btns-xs hover:bg-red-light btn-block no-style"
                        >Profile</router-link>
                        <router-link
                          :to="`/blog?xx=${$store.state.user._id}`"
                          class="btns btns-xs hover:bg-red-light btn-block no-style"
                        >Note ku</router-link>
                        <button
                          class="btns btns-xs hover:bg-red-light btn-block cursor-not-allowed"
                          disabled
                        >Notifikasi</button>
                      </div>
                      <div class="col-sm-9">
                        <router-link
                          :to="`/profile?id=${$store.state.user._id}`"
                          class="tips no-style"
                        >
                          <img
                            v-lazy="$store.state.user.picture"
                            class="rounded-full"
                            style="width:100px;"
                            alt
                          >
                          <br>
                          <span
                            class="capitalize font-bold font-times text-lg"
                          >{{$store.state.user.name}}</span>
                          <br>
                          <span
                            v-if="$store.state.nossr"
                            class="text-lg text-grey-dark uppercase font-times"
                          >{{$store.state.user.title.split(',').join('-')}}</span>
                          <span class="tipstextR text-xs">Click Edit Profile</span>
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <hr class="style13">
                  <div class="tips">
                    <button
                      type="button"
                      @click="$store.dispatch('logout')"
                      class="mb-2 btns btns-sm btn-danger"
                      style="width:100px;"
                      v-if="$store.state.user"
                    >logout</button>
                    <span class="tipstextB">Keluar</span>
                  </div>
                </template>
                <template v-else>
                  <hr class="style13">
                  <div class="container flex flex-wrap mx-auto px-4">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="tips">
                          <router-link
                            to="/login"
                            class="w-1/5 btns btns-sm text-center font-bold d-md-inline linkMenu hover:text-green-dark hover:bg-grey-light"
                          >MASUK/LOGIN</router-link>
                          <span class="tipstextB">Masuk</span>
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="tips">
                          <router-link
                            to="/register"
                            class="w-1/5 btns btns-sm text-center font-bold d-md-inline linkMenu hover:text-green-dark hover:bg-grey-light"
                          >DAFTAR</router-link>
                          <span class="tipstextB">Daftar</span>
                        </div>
                        <div class="d-sm-none">
                          <br>
                          <hr class="style2">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <LoginStrategy style="width:300px;"/>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- SIDEBAR -->
    <transition
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft"
      mode="out-in"
    >
      <div v-if="sidebar" class="sidebar w-240px" style="height:630px;position:fixed;z-index:1000">
        <div class="container-fluid p-3">
          <div class="row flex flex-col flex-wrap">
            <div class="text-right mr-4">
              <img src="@/assets/svg/leaf.svg" alt="leaf">
            </div>
            <hr class="style13">
            <ul class="list-group list-group-flush">
              <router-link
                tag="li"
                to="/"
                class="hover:bg-grey-light cursor-pointer list-group-item d-flex justify-content-between align-items-center"
              >Home</router-link>
              <router-link
                tag="li"
                to="/blog"
                class="hover:bg-grey-light cursor-pointer list-group-item d-flex justify-content-between align-items-center"
              >Blog</router-link>
            </ul>
          </div>
        </div>
      </div>
    </transition>
    <!-- MOBILE MENU BAWAH -->
    <div
      id="menuMobile"
      class="bg-white w-full flex d-sm-none flex-wrap flex-row text-center"
      style="position:fixed;bottom:0;width:100%;border-top:1px solid grey;height:35px;"
    >
      <router-link to="/" class="w-1/3 self-center hover:bg-green rounded-lg cursor-pointer">
        <img src="@/assets/svg/home-outline.svg" alt="svg">
      </router-link>
      <div
        class="w-1/3 self-center font-sant hover:bg-green rounded-lg cursor-pointer p-1"
        @click="navbar=!navbar;closeCall=!closeCall;"
      >MENU</div>
      <div class="w-1/3 self-center hover:bg-green rounded-lg cursor-pointer">
        <template v-if="$store.state.user">
          <router-link
            :to="`/profile/${$store.state.user.name.split(' ').join('-')}?id=${$store.state.user._id}`"
          >
            <img src="@/assets/svg/user-outline.svg" alt="svg">
          </router-link>
        </template>
        <template v-else>
          <router-link to="/login" class="no-style p-1">
            Login
            <img src="@/assets/svg/arrow-forward.svg" style="height:17px;" alt="login">
          </router-link>
        </template>
      </div>
    </div>
    <!-- CLOSE CALL -->
    <div
      class="w-100pr bg-transparent"
      style="height:900px;position:absolute;z-index:1;"
      @click="closeAll"
      v-if="closeCall"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navbar: false,
      closeCall: false,
      sidebar: false
    };
  },
  components: {
    AutoComplete: () => import("@/components/Single/AutoComplete.vue"),
    LoginStrategy: () => import("@/components/backup/auth/LoginStrategy.vue")
  },
  methods: {
    onSwipeRight() {
      this.sidebar = true;
      this.closeCall = true;
    },
    closeAll() {
      console.log(this.$el.querySelector("#extendscall"));
      if (!this.$store.state.user) {
        this.$el
          .querySelector("#extendscall")
          .classList.toggle("active", false);
        this.$el
          .querySelector("#extendscall2")
          .classList.toggle("active", false);
      }
      this.navbar = false;
      this.sidebar = false;
      this.closeCall = false;
    },
    search() {
      alert("search");
    },
    extendaktif(event) {
      event.target.classList.toggle("active");
    }
  },
  computed: {}
};
</script>
<style scoped>
.linkMenu {
  @apply .text-black .text-sm .self-center .px-2 .cursor-pointer .no-underline .px-2 .py-2 .rounded-lg;
}

.test {
  transform: rotate(180 deg);
}

.buttonMobile {
  margin-left: 60px;
}

.sidebar {
  @apply .border .border-grey .rounded-tr-lg .rounded-br-lg .overflow-hidden .bg-white;
}

.sidebar {
  animation-duration: 0.5s;
}

#extendscall {
  transform: rotate(90deg);
  transition: all 0.5s ease-in-out;
}

#extendscall.active {
  transform: rotate(270deg);
}

#extendscall2 {
  margin-left: 70%;
  transform: rotate(0deg);
  transition: all 0.3s ease-in-out;
}

#extendscall2.active {
  transform: rotate(180deg);
}
#navbarextend {
  width: 70%;
}
/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  #navbarextend {
    width: 50%;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #navbarextend {
    width: 50%;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  #navbarextend {
    width: 40%;
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
