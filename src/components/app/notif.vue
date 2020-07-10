<template>
  <div style="position:absolute;right:10px;top:10px;">
    <button type="button" @click="test()" class="btn btn-sm btn-dark rounded-circle">
      <span class="typcn typcn-arrow-left" style="font-size:24px;font-weight:bold;"></span>
    </button>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
import axios from "axios";
import socket from "@/plugins/socket.io.js";
export default {
  data() {
    return {
      messages: [],
      message: "",
      imgs: [],
      img: "",
      vdata: {
        NIK: this.$store.state.users.NIK,
        jk: "Laki - Laki"
      }
    };
  },
  layout: "app2",
  // watch: {
  //   messages: "scrollToBottom"
  // },
  beforeMount() {
    socket.on("new-message", message => {
      this.messages.push(message);
      // #CORDOVA
      if (typeof cordova == "object") {
        document.addEventListener("deviceready", function() {
          cordova.plugins.notification.local.schedule({
            title: "pesan baru",
            text: "ada pesan baru ...",
            foreground: true,
            badge: 1,
            sound: "file://resources/audio/beep.mp3",
            led: { color: "#FF00FF", on: 500, off: 500 },
            vibrate: [100, 50, 200]
          });
          navigator.notification.beep(1);
        });
      }
    });
  },
  mounted() {
    let that = this;
    socket.emit("last-messages", function(messages) {
      that.messages = messages;
    });
    // this.scrollToBottom();
  },
  methods: {
    distanceToNow(timena) {
      return this.$datefns.distanceInWordsToNow(new Date(timena), {
        locale: id,
        includeSeconds: true
      });
      //=> "3 days ago"
    },
    sendMessage() {
      // if (!this.message.trim()) return;
      // if (this.imgs.length > 0) {
      //   this.message = this.message + this.img;
      // }
      let message = {
        name: this.vdata.Nama,
        room: "pesan",
        tujuan: "admin",
        nik: this.vdata.NIK ? this.$store.state.users.NIK : "",
        TTL: this.vdata.TTL,
        alamat: this.vdata.alamat,
        pekerjaan: this.vdata.pekerjaan,
        keperluan: this.vdata.keperluan,
        text: this.message.trim(),
        picture: this.$store.state.users
          ? this.$store.state.users.picture
          : "./nofound.png",
        dibaca: "false",
        createdAt: new Date().toJSON(),
        createdBy: this.$store.state.users._id
      };
      this.messages.push(message);
      this.message = "";
      socket.emit("send-message", message);
    }
    // scrollToBottom() {
    //   this.$nextTick(() => {
    //     this.$el.querySelector("#chatnya").scrollTop = this.$el.querySelector(
    //       "#chatnya"
    //     ).scrollHeight;
    //     // this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
    //   });
    // },
  }
};
</script>
<style scoped>
.tdspace > td {
  padding-top: 5px;
}
</style>
