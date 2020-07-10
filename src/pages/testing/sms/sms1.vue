<template>
  <div>
    <div class="sm-form">
      <label for="number">Your number</label>
      <input
        type="text"
        id="number"
        name="number"
        class="form-control form-control-sm"
        placeholder="number"
        v-model="no"
      />
    </div>
    <div class="sm-form">
      <label for="message">Your message</label>
      <input
        type="text"
        id="message"
        name="message"
        class="form-control form-control-sm"
        placeholder="message"
        v-model="sms"
      />
    </div>
    <button type="button" @click="kirim()" class="btn btn-sm btn-info btn-block">kirim</button>
    <button
      type="button"
      @click="requrestPermission()"
      class="btn btn-sm btn-warning btn-block"
    >request</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      vdata: {},
      no: "082251970006",
      sms: "hello bro"
    };
  },
  methods: {
    kirim() {
      let isi = this.sms;
      let no = this.no;
      document.addEventListener("deviceready", function() {
        let that = this;
        var options = {
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
            intent: "" // send SMS with the native android SMS messaging
            //intent: '' // send SMS without opening any other app
          }
        };
        var success = function() {};
        var error = function(e) {
          alert("Message Failed:" + e);
        };
        sms.send(`${no}`, `${isi}`, options, success, error);
      });
    },
    checkSMSPermission() {
      let that = this;
      var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
          intent: "" // send SMS with the native android SMS messaging
          //intent: '' // send SMS without opening any other app
        }
      };
      var success = function() {
        alert("Message sent successfully");
      };
      var error = function(e) {
        alert("Message Failed:" + e);
      };
      console.log(sms);
      sms.send("082251970006", "hello world", options, success, error);
    },
    requrestPermission() {
      sms.requestPermission(
        function() {
          alert("sukses");
          console.log("[OK] Permission accepted");
        },
        function(error) {
          alert("gagal");
          console.info("[WARN] Permission not accepted");
          // Handle permission not accepted
        }
      );
    }
  }
};
</script>