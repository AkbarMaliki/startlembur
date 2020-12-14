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
    <div class="container-fluid anim shadow-lg" style="background:#343A40;">
      <div class="row anim">
        <div
          class="anim col-4 col-sm-3 col-md-2"
          style="position:absolute;padding:0;margin:0;min-height:760px;position:fixed;"
          :style="{'background':bgleft1}"
        >
          <!-- LEFT TOP -->
          <div
            style="height:50px;margin:none;padding-top:10px;border-bottom:1px solid gray;"
            :style="{'background':bgleft2}"
            class="text-center text-white font-bold text-times text-xs"
          >
            <img
              src="https://static.zerochan.net/Kino.no.Tabi.full.2207382.jpg"
              class="kinoLightBox img-fluid rounded-circle z-depth-1 float-left ml-4"
              style="height:30px;"
            />
            <span class="pt-2 text-md pr-2">ADMIN</span>
            <i class="fas fa-folder-open pl-2" style="font-size:16px;"></i>
          </div>
          <!-- LEFT SECOND -->
          <div class="text-center" :style="{'background':bgleft2}">
            <div class="sm:p-3 text-center" style="border-bottom:1px solid gray;">
              <span class="text-times ml-2 text-green-light font-bold">Online</span>
              <br />
            </div>
            <!-- SEARCH BAR -->
            <div class="flex items-center border-b border-b-2 p-2">
              <input
                class="appearance-none border-white w-full text-grey-darker mr-3 py-1 px-2 ml-2 leading-tight focus:outline-none rounded-lg"
                type="text"
                style="background:white;"
                placeholder="search ..."
                aria-label="Full name"
              />
              <i class="fas fa-search" style="font-size:17px;color:White;"></i>
            </div>
            <br />
            <!-- MENU BUTTON -->
            <div
              class="bord hover:bg-red text-left pl-3 animated fadeInLeft"
              style="border-top:2px solid black;color:white;"
              @click="muncul($event)"
            >
              Menu 1
              <span class="typcn typcn-arrow-down float-right"></span>
            </div>
            <ul class="isaktif pl-4 anim mb-3 text-white">
              <li class="bord hover:bg-red text-left pl-3 animated fadeInLeft">pilih 1</li>
              <li class="bord hover:bg-red text-left pl-3 animated fadeInLeft">pilih 2</li>
              <li class="bord hover:bg-red text-left pl-3 animated fadeInLeft">pilih 3</li>
            </ul>
            <div
              class="bord hover:bg-red text-left pl-3 animated fadeInLeft"
              style="border-top:2px solid black;color:white;"
              @click="muncul($event)"
            >
              Menu 2
              <span class="typcn typcn-arrow-down float-right"></span>
            </div>
            <ul class="isaktif pl-4 anim mb-3 text-white">
              <li class="bord hover:bg-red text-left pl-3 animated fadeInLeft">pilih 1</li>
              <li class="bord hover:bg-red text-left pl-3 animated fadeInLeft">pilih 2</li>
              <li class="bord hover:bg-red text-left pl-3 animated fadeInLeft">pilih 3</li>
            </ul>
            <!-- END MENU -->
          </div>
        </div>
        <div
          class="bg-black anim"
          :class="{'col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2':menuTrigger,'col-sm-12':!menuTrigger}"
        >
          <div class="row">
            <!-- RIGHT TOP -->
            <div class="col-sm-12" style="padding:0;margin:0;">
              <span   @click="menuTrigger=!menuTrigger" class="typcn typcn-arrow-back cursor-pointer" style="font-size:30px;position:fixed;top:20px;z-index:30;" v-if="float_menu"></span>
              <div
                style="height:50px;margin:none;padding:3px;"
                :style="{'background':bgrighttop}"
                class="pt-2"
              >
                <button
                  type="button"
                  class="btn btn-sm btn-dark ml-3"
                  style="border-color:white;"
                  @click="menuTrigger=!menuTrigger"
                >
                  <div class="tips">
                    <i class="fas fa-th" style="color:white;margin-left:50px;"></i>
                    <span class="tipstextB">Slide</span>
                  </div>
                </button>
                <span class="p-1 ml-3 text-white cursor-pointer hover:bg-black rounded-lg">
                  HOME
                  <i class="fas fa-home"></i>
                </span>
                <span class="p-1 ml-3 text-white cursor-pointer hover:bg-black rounded-lg">CONTACT</span>
                <template class>
                  <div style="position:absolute;right:40px;top:5px;">
                    <button
                      type="button"
                      @click="$store.dispatch('logout')"
                      class="btn btn-sm btn-warning mr-2"
                    >
                      <i
                        class="far fa-bell text-white p-1 cursor-pointer"
                        style="font-size:13px;color:black;"
                      ></i>
                    </button>
                    <button
                      type="button"
                      @click="menuKanan=!menuKanan"
                      class="btn btn-sm btn-secondary mr-2"
                    >
                      <div class="tips">
                        <i class="fas fa-user"></i>
                        <span class="tipstextB">Profile</span>
                      </div>
                    </button>
                    <button
                      type="button"
                      @click="$store.dispatch('logout')"
                      class="btn btn-sm btn-danger mr-2"
                    >
                      <div class="tips">
                        <i class="fas fa-sign-out-alt"></i>
                        <span class="tipstextB">Logout</span>
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
              @click="menuTrigger=false;menuKanan=false"
            >
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
          style="position:fixed;z-index:11;right:0;top:0;width:210px;height:700px;box-shadow:1px 1px 2px 1.5px black;"
          class="bg-blue"
        >
          <p class="text-center">MENU</p>
          <div
            class="bord hover:bg-red text-left pl-3 animated fadeInLeft"
            style="border-top:2px solid black;color:white;"
            @click="muncul($event)"
          >
            Menu 1
            <span class="typcn typcn-arrow-down float-right"></span>
          </div>
          <ul class="isaktif pl-4 anim mb-3 text-white animated fadeIn">
            <li class="bord hover:bg-red text-left pl-3 animated fadeInLeft">pilih 1</li>
            <li class="bord hover:bg-red text-left pl-3 animated fadeInLeft">pilih 2</li>
            <li class="bord hover:bg-red text-left pl-3 animated fadeInLeft">pilih 3</li>
          </ul>
        </div>
      </transition>
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
      bgleft1: "#343A40",
      bgleft2: "#232e30",
      bgleft3: "#343A40",
      bgrighttop: "#3c8dbc",
      test: 1,
      menuTrigger: true,
      menuKanan: false,
      bearer: "",
      float_menu:false,
      busy: false // digunakan untuk melihat apakah ada data yang masih diprocess untuk dimunculkan loading
    };
  },
  methods: {
    muncul(e) {
      e.target.nextElementSibling.classList.toggle("isaktif");
    },
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
     // wATCH / CEK SCROLL HEIGHT SAAT SCROLL KEBAWAH
    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        if(scroll > 80){
           that.float_menu=true;
        }else{
           that.float_menu=false;
        }
    });
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
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
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
  padding: 5px 0px 5px 0px;
  font-size: 12px;
  border-bottom: 1px solid black;
}
</style>
