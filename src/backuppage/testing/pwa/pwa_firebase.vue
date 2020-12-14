<template>
  <div>
    <button class="btn btn-sm btn-dark" @click="kirim">kirim</button>
    NOTIFIKASI REGISTRASI ID WEB DI MAIN.JS
    <br />REGISTRASI ID ANDROID / IOS DI MOUNTED
    <pre>
        {{regis}}
        </pre>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      regis: ""
    };
  },
  mounted() {
    let that = this;
    document.addEventListener("deviceready", that.onDeviceReady, false);
  },
  methods: {
    kirim() {
      let data = {
        data: {
          title: "JR-BTN Banjarbaru",
          body: "go",
          surveyID: "ewtawgreg-gragrag-rgarhthgbad",
          soundname: "default",
          ledColor: [255, 255, 128, 16],
          vibrationPattern: [250, 1000, 250, 500]
        },
        to:
          "chMhxRk_hKA:APA91bHDaSXPDYqnZHst-fKMMdc0dHyukxZjov5v9IhzR1CsjbBJlaeC7Bf8O1ynxXXesx59TAjbPABsv4VsAQbetBZf2DzvtQ_ucVNfotU1FtNNyWnFTpZ9iyzLiY-oFK1Dj9iwe1SY",
        priority: "high",
        content_available: true
      };
      data = JSON.stringify(data);
      axios
        .post("https://fcm.googleapis.com/fcm/send", data, {
          headers: {
            //   Server Key di project settings firebase
            Authorization:
              "key=AAAAUBoNxhU:APA91bGmp6193yTOWq0XcUu4adMjbF4XVk2uqDy8V-1y7pT26S_Q1kVkYTSyLBsgU-B4lUyYDMykMKtuiQWlVeYIEr713d5Ty0GphyUxcGlMb1D1uKsOPZ4LujfYzke2qdnZOBYEMzdm",
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          console.log(res);
          this.$forceUpdate();
        });
    },
    onDeviceReady() {
      let that = this;
      var push = PushNotification.init({
        android: {
          senderID: "344034493973" // setting project firebase
        }
      });
      push.on("registration", function(data) {
        // ! AMBIL data registrationId untuk ditaruh sebagai payload to : ""
        // ! simpan data regitrationId kedatabase
        that.regis = data.registrationId;
        // Simpan data.registrationId KE DATABASE DENGAN GANDENGAN ID USER untuk di tembak dengan payload {to : ""} firebase
      });
      push.on("error", function(e) {
        console.log(e.message);
      });
    }
  }
};
</script>