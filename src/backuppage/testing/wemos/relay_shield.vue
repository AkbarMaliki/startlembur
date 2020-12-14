<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-sm-12"
          style="height:50px;background:blue;box-shadow:1px 2px 4px gray;margin-bottom:5px;"
        >
          <p class="text-center font-times" style="color:white;padding:10px;">IOT PROJECT 1</p>
        </div>
        <div class="col-6">
          <button type="button" @click="turnOn" class="btn btn-sm btn-primary btn-block">ON</button>
        </div>
        <div class="col-6">
          <button type="button" @click="turnOff" class="btn btn-sm btn-danger btn-block">OFF</button>
        </div>
        <div class="col-12">
          <button
            type="button"
            @click="cekData"
            class="btn btn-sm btn-outline-warning btn-block"
          >Cek Data</button>
          <br>
          <br>
          <br>
          <div class="text-center">
            <span class="typcn typcn-lightbulb" style="color:orange;font-size:150px;" v-if="lampu"></span>
            <span class="typcn typcn-lightbulb" style="color:black;font-size:150px;" v-else></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  layout: "test",
  name: "home",
  data() {
    return {
      lampu: true
    };
  },
  methods: {
    turnOn() {
      axios.get("http://192.168.43.30/relay=ON").then(res => {
        console.log(res);
        this.lampu = true;
      });
    },
    cekData() {
      axios.get("http://192.168.43.30/relay=data").then(res => {
        console.log(res);
      });
    },
    turnOff() {
      axios.get("http://192.168.43.30/relay=OFF").then(res => {
        console.log(res);
        this.lampu = false;
      });
    }
  }
};
</script>