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
        v-model="vdata.number"
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
        v-model="vdata.message"
      />
    </div>
    <button type="button" @click="kirim()" class="btn btn-sm btn-primary">kirim</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      vdata: {}
    };
  },
  methods: {
    kirim() {
      var messageInfo = {
        phoneNumber: "082251970006",
        textMessage: "This is a test message"
      };
      alert("y");
      sms.sendMessage(
        messageInfo,
        function(message) {
          alert("sukses");
          console.log("success: " + message);
        },
        function(error) {
          console.log("code: " + error.code + ", message: " + error.message);
        }
      );
    }
  }
};
</script>