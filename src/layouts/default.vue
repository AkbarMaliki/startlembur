<template>
  <div>
     <div v-if="$store.state.busy">
      <div style="position:fixed;height:100vh;width:100vw;background: rgb(8,34,11);
background: linear-gradient(90deg, rgba(8,34,11,0.5522584033613445) 3%, rgba(1,11,2,0.5046393557422969) 98%);position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);z-index:100;">
        <p class="font-bold text-2xl text-red animated bounce infinite" style="position: absolute;top: 50%;left: 30%;transform: translateX(-50%) translateY(-50%);z-index:100;" >LOADING ...</p>
      </div>
    </div>
    <!--
    <router-view style="z-index:10" v-myimage v-reload />-->
    <router-view></router-view>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore()
export default {
  data() {
    return {
      test: 1,
      bearer: "",
      busy: false // digunakan untuk melihat apakah ada data yang masih diprocess untuk dimunculkan loading
    };
  },
  methods: {
    mails(id, subjek, text) {
      // this.mails('145','NOTIFIKASI-JRBTN','KINO NO TABI');
      let fd = new FormData();
      fd.append("data", `select * from tbuser where id='${id}'`); //database setting di server
      axios
        .post("https://infolayanans.space/api/mysql/auto.php", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          if (res.data[0].email.indexOf("@") != -1) {
            console.log(res.data[0].email);
            let fd = new FormData();
            fd.append("tujuan", res.data[0].email);
            fd.append("subjek", subjek);
            fd.append("text", text);
            axios
              .post("https://infolayanans.space/send_mail.php", fd)
              .then(res => {
                console.log(res);
                this.$forceUpdate();
              });
          } else {
            console.log("kosong");
          }
        });
    },
    notifikasi(ids, link, text) {
      //   this.notifikasi(this.pilih.id_penumpang,'/driver/approve','Permintaan anda ditolak atau dibatalkan '+this.pilih.penumpang);
      let fd = new FormData();
      fd.append(
        "data",
        `insert into notifikasi (id_user,link,text,dibaca,app,button,tanggal)
         VALUES ('${ids}','${link}','${text}','false','driver','1','${new Date()}')`
      );
      fd.append("database", " infolay3_test");
      axios
        .post("https://infolayanans.space/api/mysql/auto.php", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          let message = {
            id: uniqid(),
            target_id: ids,
            app: "driver",
            text: text,
            link: link,
            dibaca: "false"
          };
          socket.emit("send-message", message);
          let that = this;
        })
        .catch(err => {
          let message = {
            id: uniqid(),
            target_id: ids,
            app: "driver",
            text: text,
            link: link,
            dibaca: "false"
          };
          socket.emit("send-message", message);
          let that = this;
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
      this.version();
      this.loginOAuth();
    }
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
        db.collection('users').doc(that.$store.state.users.uid).set({active:"idle"},{merge:true}).then(res=>{
          console.log("user idle")
        })
        // your function for too long inactivity goes here
        // e.g. window.location.href = 'logout.php';
      }

      function resetTimer() {
        clearTimeout(t);
        t = setTimeout(yourFunction, 50000); // time is in milliseconds
      }
    }
    //! idleLogout();
    window.addEventListener("scroll", function(event) {
      var scroll = this.scrollY;
      //gunakan scroll untuk mendeteksi nilai position
    });
    // !WOW JS
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
    );
    document.head.appendChild(recaptchaScript);
    setTimeout(() => {
      new WOW().init();
    }, 500);
    // !FCM
     document.addEventListener(
      "deviceready",
      function() {
        var push = PushNotification.init({
          android: {
            senderID: "527099963081", // setting project firebase
            sound: "true",
            vibrate: "true",
            clearNotifications: true, // clear notifications from shade on app start
            forceShow: true
          },
          ios: {
            alert: "true",
            badge: "true",
            sound: "true"
          }
        });
        PushNotification.createChannel(() => {
          console.log('success');
        }, () => {
          console.log('error');
        }, {
          id: "test-channel",
          description: "My first test channel",
          importance: 5,
        vibration: [500, 1000, 500, 500],
          sound:'test', // test adalah test.wav nama file sound notification
        });
        push.on("registration", function(data) {
          // ! AMBIL data registrationId untuk ditaruh sebagai payload to : ""
          // ! simpan data regitrationId kedatabase
          localStorage.setItem("notifid", data.registrationId);
          that.regis = data.registrationId;
          that.$forceUpdate()
          // Simpan data.registrationId KE DATABASE DENGAN GANDENGAN ID USER untuk di tembak dengan payload {to : ""} firebase
        });
        push.on("notification", function(data) {});
        push.on("error", function(e) {
          console.log(e.message);
        });
      },
      false
    );
    // !END WOW JS
    // #CORDOVA
    if (typeof cordova === "object") {
      document.addEventListener("deviceready", function() {
        cordova.plugins.backgroundMode.enable();
        cordova.plugins.backgroundMode.on("EVENT", function() {
          // apabila status background process berubah maka event ini di jalankan
        });
        window.powerManagement.dim(
          function() {
            console.log("Wakelock acquired");
          },
          function() {
            console.log("Failed to acquire wakelock");
          }
        );
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
    // this.init();
    setTimeout(() => {
      this.$store.commit("nossr", true);
    }, 100);
    this.$nuxt.$on("busy", data => {
      this.busy = data;
    });
  }
};
</script>
<style>
.anim {
  transition: all 0.2s ease-in;
}
h1{
    display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h3 {
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h4 {
  display: block;
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

/* width */
/* ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
} */

/* Track */
/* ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
} */

/* Handle */
/* ::-webkit-scrollbar-thumb {
    background: rgba(255, 0, 0, 0.712);
    border-radius: 10px;
} */

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
} */
</style>