<template>
  <div>
    <Busy v-if="busy" />
    <imageku style="z-index:1000" />
    <div class="text-center d-sm-none">
      <v-touch
        style="width:40px;background:transparent;height:900px;position:absolute;left:0;z-index:10001;"
        v-on:swiperight="onSwipeRight"
        v-if="!menuTrigger"
      ></v-touch>
    </div>
    <div class="container-fluid anim bg-black">
      <div class="row anim">
        <div
          class="bg-black anim col-4 col-sm-3 col-md-2"
          style="position:absolute;padding:0;margin:0;min-height:760px;"
        >
          <!-- LEFT TOP -->
          <div
            style="height:40px;background:#3580a8;margin:none;padding-top:10px;"
            class="text-center text-white font-bold text-times text-xs"
          >
            ADMIN DESA
            <span class="typcn typcn-folder-open"></span>
          </div>
          <!-- LEFT SECOND -->
          <div class="text-center" style="background:#232e30;">
            <div class="sm:p-3 text-center">
              <img
                src="@/static/icon.png"
                class="kinoLightBox img-thumbnail z-depth-2 content-center"
                style="width:50px;margin-left:40%;"
                alt="circle"
              />
              <span class="text-white text-times sm:ml-1 md:ml-2">Admin</span>
              <br />
              <span class="text-times ml-2 text-green-light font-bold">Online</span>
            </div>
            <!-- SEARCH BAR -->
            <!-- <div class="flex items-center border-b border-b-2 border-teal p-2">
              <input
                class="appearance-none border-white w-full text-grey-darker mr-3 py-1 px-2 ml-2 leading-tight focus:outline-none"
                type="text"
                style="background:#374850;"
                placeholder="Jane Doe"
                aria-label="Full name"
              >
              <span class="typcn typcn-zoom-outline" style="font-size:21px;color:white;"></span>
            </div>-->
            <br />
            <!-- MENU BUTTON -->
            <b-menu class="pl-2 text-left bg-dark" style="color:white;">
              <b-menu-list label="Menu">
                <b-menu-item
                  icon="information-outline"
                  label="Info"
                  style="border-bottom:1px solid black;"
                ></b-menu-item>
                <!-- ONE MENU -->
                <b-menu-item icon="settings" style="border-bottom:1px solid black;">
                  <template slot="label" slot-scope="props">
                    <span class="typcn typcn-user"></span>
                    Administrator
                    <span
                      class="float-right"
                      v-if="props.expanded"
                    >UP</span>
                    <span class="float-right" v-else>Down</span>
                  </template>
                  <!-- MENU EXPAND -->
                  <b-menu-item style="border-bottom:1px solid black;" icon="account" label="Users"></b-menu-item>
                  <b-menu-item
                    style="border-bottom:1px solid black;"
                    icon="cellphone-link"
                    label="Devices"
                  ></b-menu-item>
                  <b-menu-item
                    style="border-bottom:1px solid black;"
                    icon="cash-multiple"
                    label="Payments"
                    disabled
                  ></b-menu-item>
                  <!-- MENU EXPAND END -->
                </b-menu-item>
                <!--  -->
                <b-menu-item icon="settings" active>
                  <template slot="label" slot-scope="props">
                    <span class="typcn typcn-user"></span>
                    Acount
                    <span class="float-right" v-if="props.expanded">UP</span>
                    <span class="float-right" v-else>Down</span>
                  </template>
                  <b-menu-item icon="account" label="Uang"></b-menu-item>
                </b-menu-item>
                <!--  -->
              </b-menu-list>
              <b-menu-list>
                <b-menu-item label="Back" @click="$router.push('../')"></b-menu-item>
              </b-menu-list>
              <b-menu-list label="Actions">
                <b-menu-item label="Logout"></b-menu-item>
              </b-menu-list>
            </b-menu>
          </div>
        </div>
        <div
          class="bg-black anim"
          :class="{'col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2':menuTrigger,'col-sm-12':!menuTrigger}"
        >
          <div class="row">
            <!-- RIGHT TOP -->
            <div class="col-sm-12" style="padding:0;margin:0;">
              <div style="height:40px;background:#3c8dbc;margin:none;padding:3px;">
                <button
                  type="button"
                  class="btn btn-sm ml-3"
                  style="border-color:white;"
                  @click="menuTrigger=!menuTrigger"
                >
                  <div class="tips">
                    <span class="typcn typcn-th-menu" style="color:white;margin-left:50px;"></span>
                    <span class="tipstextB">Slide</span>
                  </div>
                </button>
                <template class>
                  <div style="position:absolute;right:40px;top:5px;">
                    <button
                      type="button"
                      @click="$store.dispatch('logout')"
                      class="btn btn-sm btn-danger mr-2"
                    >
                      <div class="tips">
                        <span class="typcn typcn-eject"></span>
                        <span class="tipstextB">Logout</span>
                      </div>
                    </button>
                    <button
                      type="button"
                      @click="$router.push('/')"
                      class="btn btn-sm btn-warning mr-2"
                    >
                      <div class="tips">
                        <span class="typcn typcn-home"></span>
                        <span class="tipstextB">Home</span>
                      </div>
                    </button>
                  </div>
                </template>
              </div>
            </div>
            <!-- RIGHT SECOND -->
            <div
              class="col-sm-12"
              style="background:#eceff4;min-height:760px;"
              @click="menuTrigger=false"
            >
              <div class="sm:mt-2 sm:p-2">
                <router-view style="z-index:10" v-myimage v-reload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dropdown from "@/components/Single/Dropdown.vue";
import menus from "@/components/app/menu.vue";
import axios from "axios";
import imageku from "@/components/Web/MyImage.vue";
import Busy from "@/components/Web/Busy.vue";
import Footer from "@/components/Web/Footer.vue";
import Navbar from "@/components/desa/navbar.vue";
export default {
  components: {
    imageku,
    menus,
    dropdown,
    Busy,
    Footer,
    Navbar
  },
  data() {
    return {
      test: 1,
      menuTrigger: true,
      bearer: "",
      busy: false // digunakan untuk melihat apakah ada data yang masih diprocess untuk dimunculkan loading
    };
  },
  methods: {
    onSwipeRight() {
      this.menuTrigger = true;
    },
    scrollOnLoad() {
      this.$el.querySelectorAll("a.scrollactive-item").forEach(el => {
        if (el.hash == this.$route.hash) {
          el.click();
        }
      });
    },
    cekAuth() {
      if (localStorage.getItem("auth._token.local") != null) {
        if (localStorage.getItem("auth._token.local") == "false") {
          if (localStorage.getItem("auth.local") != "false") {
            axios
              .get(this.$store.state.url + "/api/auth/user", {
                headers: {
                  Authorization: localStorage.getItem("auth.local")
                }
              })
              .then(res => {
                this.$store.commit("changeUser", res.data.user);
              });
          }
        } else {
          axios
            .get(this.$store.state.url + "/api/auth/user", {
              headers: {
                Authorization: localStorage.getItem("auth._token.local")
              }
            })
            .then(res => {
              this.$store.commit("changeUser", res.data.user);
            });
        }
      }
    },
    loginOAuth() {
      // ! DIGUNAKAN UNTUK ELECTRON
      let url = document.URL.indexOf("?json");
      url = document.URL.slice(0, url);
      let xxx = document.URL.indexOf("xxx");
      if (xxx != -1) {
        let token = document.URL.slice(xxx)
          .replace("%20", " ")
          .replace("#/", "")
          .replace("xxx=", "");
        console.log(token);
        this.bearer = token;
        localStorage.setItem("auth._token.local", token);
        localStorage.setItem("auth.local", token);
        axios
          .get(this.$store.state.url + "/api/auth/user", {
            headers: {
              Authorization: token
            }
          })
          .then(res => {
            console.log(res.data);
            this.$store.commit("changeUser", res.data.user);
            console.log(this.$store.state.user);
            setTimeout(() => {
              window.location = url;
            }, 500);
          });
      }
    },
    isLoginNotLocal() {
      let that = this;
      if (
        this.$store.state.auth.loggedIn &&
        this.$store.state.auth.strategy != "local" &&
        !this.$store.state.auth.isAuth
      ) {
        this.busy = true;
        setTimeout(() => {
          this.busy = false;
          this.$store.dispatch("auth/goAuth", this.$store.state.auth.isAuth);
          if (this.$auth.$state.strategy != "local") {
            let now = new Date();
            localStorage.setItem(
              "expireDate",
              new Date(now.getTime() + 3600 * 1000)
            );
            let data = this.$auth.user;
            if (this.$auth.$state.strategy == "facebook") {
              data.picture = this.$auth.user.picture.data.url;
              data.verified = true;
            }
            this.$auth
              .loginWith("local", {
                data: {
                  ...data,
                  oAuth: true
                }
              })
              .then(res => {
                //! setelah di ganti ke login local maka redirect kemana?
                this.busy = true;
                setTimeout(() => {
                  this.busy = false;
                  that.$store.dispatch("userRefresh");
                  this.$router.push("/");
                }, 500);
              });
          }
        }, 1000);
      }
    },
    version() {
      if (localStorage.getItem("version") == null) {
        localStorage.setItem("version", 1);
      }
    },
    newStuff() {
      if (localStorage.getItem("newstuff") != this.$store.state.version) {
        var req = indexedDB.deleteDatabase(this.$store.state.indexdb);
        req.onsuccess = function() {
          console.log("Deleted database successfully");
        };
        req.onerror = function() {
          console.log("Couldn't delete database");
        };
        req.onblocked = function() {
          console.log(
            "Couldn't delete database due to the operation being blocked"
          );
        };
        localStorage.clear();
        localStorage.setItem("newstuff", this.$store.state.version);
        alert("new version");
      }
    },
    mediaQueries() {
      this.$store.commit(
        "mediaQueries",
        window.innerWidth <= 576
          ? "sm"
          : window.innerWidth <= 768
          ? "md"
          : window.innerWidth <= 992
          ? "lg"
          : "xl"
      );
    },
    init() {
      this.scrollOnLoad();
      // this.cekAuth();
      if (this.$store.state.device != "dekstop") {
        this.isLoginNotLocal();
      }
      this.version();
      this.loginOAuth();
      //! mencek apakah expireData berakhir
      // this.$store.dispatch('auth/autoLogout');
    }
  },
  mounted() {
    this.$store.dispatch("auth");
    let that = this;
    // #CORDOVA
    if (typeof cordova == "object") {
      document.addEventListener("deviceready", function() {
        cordova.plugins.backgroundMode.enable();
        cordova.plugins.backgroundMode.on("EVENT", function() {
          // apabila status background process berubah maka event ini di jalankan
        });
        cordova.plugins.backgroundMode.setDefaults({
          title: "HELLO",
          text: "World",
          // icon: 'icon' // this will look for icon.png in platforms/android/res/drawable|mipmap
          // color: "F14F4D", // hex format like 'F14F4D'
          // resume: true,
          hidden: true,
          silent: true
          // bigText: Boolean
        });
        cordova.plugins.notification.local.setDefaults({
          led: { color: "#FF00FF", on: 500, off: 500 },
          vibrate: [100, 50, 200]
        });
      });
    }
    this.mediaQueries();
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        that.mediaQueries();
      });
    });
    this.init();
    setTimeout(() => {
      this.$store.commit("nossr", true);
    }, 100);
    this.$nuxt.$on("busy", data => {
      this.busy = data;
    });
  },
  head: {
    title: "hello",
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
      },
      {}
    ]
    // script: [
    //   {
    //     src: "https://cdn.jsdelivr.net/npm/peerjs@0.3.20/dist/peer.min.js"
    //   }
    // ]
  }
};
</script>
<style>
</style>
