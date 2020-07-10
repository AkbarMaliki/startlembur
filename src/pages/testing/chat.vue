<template>
  <div>
    <button type="button" @click="test" class="btn btn-sm btn-primary">test</button>
    <a
      href="javascript:;"
      onclick="document.location.hash='pos1';"
      class="btns btns-sm rounded-lg hover:bg-black hover:text-white"
      style="position:fixed;top:10px;right:10px;"
      key="1"
      @click="goDown"
    >
      <img src="@/assets/svg/arrow-down-thick.svg" alt>
    </a>
    <ul id="chatnya" class="messages font-times" ref="messages">
      <li v-if="messages.length==0">
        <hr class="style13">
        <div class="text-center">kosong</div>
        <div class="text-center">Mulai Chat Sekarang</div>
        <hr class="style13">
      </li>
      <li
        class="message font-times rounded-lg p-2"
        style="box-shadow:1px 2px 4px black;margin-bottom:10px;"
        v-for="(message, index) in messages"
        :key="index"
        v-if="message.room==$route.query.room"
      >
        <div class="text-right" style="font-size:12px;font-family:times new roman;">
          <p style="font-size:13px;position:absolute;left:50px;font-weight:bold;">{{message.name}}</p>
          <p>{{distanceToNow(message.createdAt)}}</p>
        </div>
        <p style="font-size:14px;word-wrap:break-word;line-height:1.5;text-align:justify;">
          <img
            :src="message.picture.indexOf('http')!=-1?message.picture:$store.state.url+message.picture"
            class="rounded-full"
            style="width:30px;height:30px;box-shadow:1px 2px 2px gray;margin-bottom:6px;"
            alt
          >
          <span style="margin-left:12px;" v-html="message.text"></span>
        </p>
      </li>
    </ul>
    <div style="margin-left:30px;">
      <Uploader @upload="upload($event)" @resetInput="resetImg"/>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <input
            id="pos1"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="message"
            @keyup.enter="sendMessage"
            placeholder="Type here..."
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var id = require("date-fns/locale/id");
import axios from "axios";
import Uploader from "@/components/Single/Uploads.vue";
import socket from "@/plugins/socket.io.js";
export default {
  data() {
    return {
      messages: [],
      message: "",
      imgs: [],
      img: ""
    };
  },
  components: {
    Uploader
  },
  watch: {
    messages: "scrollToBottom"
  },
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
    this.scrollToBottom();
  },
  methods: {
    distanceToNow(timena) {
      return this.$datefns.distanceInWordsToNow(new Date(timena), {
        locale: id,
        includeSeconds: true
      });
      //=> "3 days ago"
    },
    goDown() {
      window.scrollTo(0, this.$el.querySelector("input").offsetTop);
    },
    resetImg() {
      this.imgs = [];
      this.img = "";
    },
    upload(e) {
      this.imgs = e;
      setTimeout(() => {
        let hasil = `<br><img class="img-thumbnail" src='${this.imgs}'/>`;
        this.img = hasil;
        console.log(this.img);
      }, 1000);
    },
    sendMessage() {
      if (!this.message.trim()) return;
      if (this.imgs.length > 0) {
        this.message = this.message + this.img;
      }
      let message = {
        name: this.$store.state.user ? this.$store.state.user.name : "unknown",
        room: this.$route.query.room,
        text: this.message.trim(),
        picture: this.$store.state.user
          ? this.$store.state.user.picture
          : "./nofound.png",
        createdAt: new Date().toJSON(),
        createdBy: this.$store.state.user._id
      };
      this.messages.push(message);
      this.message = "";
      socket.emit("send-message", message);
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$el.querySelector("#chatnya").scrollTop = this.$el.querySelector(
          "#chatnya"
        ).scrollHeight;
        // this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
      });
    },
    test() {
      axios
        .get("/api/test/random")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
#chatnya {
  padding: 30px 10px 0 10px;
  list-style: none;
  word-wrap: break-word;
}
/* Pages */
.pages {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}
.page {
  height: 100%;
  position: absolute;
  width: 100%;
}
/* Font */
.messages {
  font-size: 150%;
}
.inputMessage {
  font-size: 100%;
}
.log {
  color: gray;
  font-size: 70%;
  margin: 5px;
  text-align: center;
}
/* Messages */
.chatArea {
  height: 100%;
}
.messages {
  overflow-y: scroll;
  /* padding: 10px 5px 10px 5px; */
}
/* Input */
</style>