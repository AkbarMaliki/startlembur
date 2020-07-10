<template>
  <div>
    <button type="button" @click="searchTGL" class="btn btn-sm btn-primary">Cek Tanggal</button>

    <div class="sm-form">
      <label for="tanggal1">Tanggal</label>
      <input
        type="date"
        id="tanggal1"
        name="tanggal1"
        class="form-control form-control-sm"
        placeholder="tanggal1"
        v-model="date1"
      />
    </div>
    <br />
    <div class="sm-form" style="padding-top:10px;">
      <label for="tanggal2">Sampai Dengan</label>
      <input
        type="date"
        id="tanggal2"
        name="tanggal2"
        class="form-control form-control-sm"
        placeholder="tanggal2"
        v-model="date2"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      datanya: [],
      date1: "",
      date2: new Date(),
      vdata: {}
    };
  },
  methods: {
    searchTGL() {
      if (this.date1 && this.date2) {
        let data = this.datanya;
        let that = this;
        this.vdata = data.filter(item => {
          return (
            //   item.tgl1 ini dari database , letak record tanggal input
            new Date(item.tgl1).getTime() >= new Date(that.date1).getTime() &&
            new Date(item.tgl1).getTime() <= new Date(that.date2).getTime()
          );
        });
        this.vdata.date1 = that.date1;
        this.vdata.date2 = that.date2;
        console.log(this.vdata);
      } else {
        alert("isi input tanggal terlebih dahulu !");
      }
    },
    getData() {
      let fd = new FormData();
      fd.append("data", "select * from bamban_tbdomisili"); //if empty = *
      axios
        .post(this.$store.state.database + "/api/mysql/auto.php", fd, {
          headers: {
            Authorization: localStorage.getItem("auth.local")
          }
        })
        .then(res => {
          this.datanya = res.data;
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>