<template>
  <div>
    <button type="button" @click="inserts" class="btn btn-sm btn-primary  ">inserts</button>
    <button type="button" @click="getdata" class="btn btn-sm btn-warning  ">getdata</button>
    <button type="button" @click="deletes" class="btn btn-sm btn-primary  ">deletes</button>
    <br>
    <p v-for="(item, index) in messages" :key="index+'item'" @click="dipilih(item)">{{item}}</p>
  </div>
</template>
<script>
import axios from "axios";
import uniqid from "uniqid";
import io from 'socket.io-client'
const socket = io(`http://localhost:2021`)
export default {
  data() {
    return {
      messages: [],
      message: "",
      pilih: {},
    };
  },
  beforeMount() {
    socket.on("gets-message", message => {
      console.log(message)
    });
    socket.on("new-message", message => {
      this.messages.push(message);
    });
    socket.on("edit-message", data => {
      console.log(data);
      this.messages = data;
      this.forceUpdate();
      // console.log(this.messages);
    });
    socket.on("refresh-message", data => {
      socket.emit("last-messages", function(messages) {
        that.messages = messages;
        this.forceUpdate();
      });
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
    getdata(){
      socket.emit("get-message", 'data');
    },
    dipilih(item) {
      this.pilih = item;
    },
    inserts() {
      let message = {
        id: uniqid(),
        room: "pesan",
        tujuan: "admin",
        table:"tbuser",
        text: 'taufik akbar maliki',
        dibaca: "false",
        status: 1,
        // 0 hapus, 1 pending, 2 diproses, 3 ada kesalahan, 4 selesai
        createdAt: new Date().toJSON(),
        createdBy: "null"
      };
      // this.messages.push(message)
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
        that.forceUpdate();
        that.pilih = {};
      });
    },
  }
};
</script>