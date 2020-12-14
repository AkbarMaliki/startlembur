<template>
  <div>
    <div
      v-if="busy"
      style="width:100%;height:1200px;position:fixed;z-index:200;background: rgb(33,35,57);
background: radial-gradient(circle, rgba(33,35,57,0.36738445378151263) 0%, rgba(34,33,48,0.33657212885154064) 100%);"
    >
      <p
        class="animated infinite bounce font-bold font-times text-2xl text-black"
        style="margin-top:50vh;margin-left:30vw;"
      >LOADING ...</p>
    </div>
    <div v-if="ready">
      <router-view style="z-index:10" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
import md5 from "md5";
// import socket from "@/plugins/socket.io.js";
var id = require("date-fns/locale/id");
export default {
  components: {},
  data() {
    return {
      notifs: [],
      notifn: 0,
      count: 0,
      bgleft1: "#343A40",
      bgleft2: "#232e30",
      bgleft3: "#343A40",
      bgrighttop: "#1A3B4E",
      test: 1,
      menuTrigger: false,
      menuKanan: false,
      ready: false,
      bearer: "",
      busy: false, // digunakan untuk melihat apakah ada data yang masih diprocess untuk dimunculkan loading
    };
  },
  beforeMount() {
    let that = this;
    this.$store
      .dispatch("ceklogin", {
        true: true,
        false: "/",
      })
      .then((res) => {
        that.ready = true;
        console.log(this.$store.state.users);
        let notifid = localStorage.getItem("notifid");
        db.collection("users")
          .doc(this.$store.state.users.uid)
          .set({ fcm: notifid }, { merge: true });
        if (that.$store.state.users.pertama == "true") {
          if (that.$store.state.users.changepassword == "true") {
          } else {
            that.$router.push("/changepassword");
          }
        } else {
          that.$router.push("/pertama");
        }
      });
    //   socket.on("new-message", message => {
    //   if(message.target_id==that.$store.state.users.id && message.app=='driver'){
    //       that.refreshNotif()
    //        //  CORDOVA
    //       document.addEventListener('deviceready', function () {
    //           cordova.plugins.notification.local.schedule({
    //               title: 'BTN Banjarbaru',
    //               text: message.text,
    //               sound:'file://resources/audio/beep.mp3'
    //           });
    //           cordova.plugins.notification.local.on('click', function (notification, eopts) {
    //               setTimeout(() => {
    //                   that.$router.push(message.link)
    //               }, 1000);
    //           });
    //           navigator.notification.beep(1);
    //       })
    //   }
    // });
  },
  methods: {
    exits() {
      document.addEventListener(
        "deviceready",
        function (e) {
          navigator.app.exitApp();
        },
        true
      );
    },
    distanceToNow(tanggal) {
      return this.$datefns.distanceInWordsToNow(new Date(tanggal), {
        locale: id,
        includeSeconds: true,
      });
    },
    logout() {
      this.$store.dispatch("logout");
      localStorage.removeItem("login");
      this.$router.push("/");
    },
    muncul(e) {
      e.target.nextElementSibling.classList.toggle("isaktif");
    },
    onSwipeRight() {
      this.menuTrigger = true;
    },
    scrollOnLoad() {
      this.$el.querySelectorAll("a.scrollactive-item").forEach((el) => {
        if (el.hash == this.$route.hash) {
          el.click();
        }
      });
    },
    version() {
      if (localStorage.getItem("version") == null) {
        localStorage.setItem("version", 1);
      }
    },
    newStuff() {
      if (localStorage.getItem("newstuff") != this.$store.state.version) {
        var req = indexedDB.deleteDatabase(this.$store.state.indexdb);
        req.onsuccess = function () {
          console.log("Deleted database successfully");
        };
        req.onerror = function () {
          console.log("Couldn't delete database");
        };
        req.onblocked = function () {
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
      this.version();
      //! mencek apakah expireData berakhir
      // this.$store.dispatch('auth/autoLogout');
    },
  },
  mounted() {
    let that = this;
    function idleLogout() {
      var t;
      window.onload = resetTimer;
      window.onmousemove = resetTimer;
      window.onmousedown = resetTimer; // catches touchscreen presses as well
      window.ontouchstart = resetTimer; // catches touchscreen swipes as well
      window.onclick = resetTimer; // catches touchpad clicks as well
      window.onkeypress = resetTimer;
      window.addEventListener("scroll", resetTimer, true); // improved; see comments
      function yourFunction() {
        alert("idle");
      }
      function resetTimer() {
        clearTimeout(t);
        console.log("idle di reset");
        t = setTimeout(yourFunction, 5 * 60 * 1000); // time is in milliseconds
      }
    }
    // idleLogout();
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
    this.$nuxt.$on("busy", (data) => {
      this.busy = data;
    });
  },
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
  font-size: 14px;
  border-bottom: 2px solid black;
}
</style>
