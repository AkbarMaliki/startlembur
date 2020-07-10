<template>
  <div>
    <button type="button" @click="inserts" class="btn btn-sm btn-success  ">insert</button><br>
    <button type="button" @click="deletes" class="btn btn-sm btn-danger  ">delete</button>
    <p v-for="(item, index) in messages" :key="index" @click="dipilih(item)">{{item}}</p>
  </div>
</template>
<script>
import axios from "axios";
import socket from "@/plugins/socket.io.js";
import uniqid from "uniqid";
export default {
  data() {
    return {
      messages: [],
      message: "",
      pilih: {},
    };
  },
  beforeMount() {
    socket.on("new-message", message => {
      this.messages.push(message);
    });
    socket.on("edit-message", data => {
      console.log(data);
      this.messages = data;
      this.$forceUpdate();
      // console.log(this.messages);
    });
    socket.on("refresh-message", data => {
      socket.emit("last-messages", function(messages) {
        that.messages = messages;
        this.$forceUpdate();
      });
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
    dipilih(item) {
      this.pilih = item;
    },
    inserts() {
      let message = {
        id: uniqid(),
        target_id: 1,
        app: 'driver',
        dibaca: 'false',
        text:"hello there",
        link:"/driver/link",
        tanggal:new Date()
      };
      this.messages.push(message);
      // this.$store.state.notifikasi.push(message)
      this.message = "";
      socket.emit("send-message", message);
    },
    edits(id) {
      this.pilih.status = 4;
      this.pilih.Nama = "selesai";
      this.pilih.text = "selesai";
      socket.emit("edits-message", this.pilih);
    },
    deletes(id) {
      let that = this;
      socket.emit("delete-message", this.pilih);
      socket.emit("last-messages", function(messages) {
        that.messages = messages;
        that.$forceUpdate();
        that.pilih = {};
      });
    },
  }
};
</script>