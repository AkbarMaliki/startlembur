<template>
  <div>
    <button
      type="button"
      @click="$router.push('/')"
      class="btn btn-sm btn-style1 font-bold text-uppercase underline text-white"
      style="position:absolute;"
    >
      <span class="text-xl typcn typcn-arrow-left"></span> Kembali
    </button>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#000b76"
        fill-opacity="1"
        d="M0,288L0,320L144,320L144,160L288,160L288,160L432,160L432,128L576,128L576,32L720,32L720,160L864,160L864,288L1008,288L1008,256L1152,256L1152,64L1296,64L1296,32L1440,32L1440,0L1296,0L1296,0L1152,0L1152,0L1008,0L1008,0L864,0L864,0L720,0L720,0L576,0L576,0L432,0L432,0L288,0L288,0L144,0L144,0L0,0L0,0Z"
      />
    </svg>
    <br />
    <div class="p-3">
      <p class="text-center font-times text-xl">Permintaan Barang</p>
        <br>
      <button type="button" @click="edit=!edit" class="btn btn-sm btn-success">
        <span class="typcn typcn-plus"></span> Tambah
      </button>
      <a :href="`https://akbarmaliki.github.io/infolayanansjs/#/excel?data=${JSON.stringify(datanya).split('&').join('%26')}`" class="float-right btn-lg btn-success" ><span class="typcn typcn-chart-bar"></span></a>
        <br>
        <br>

       <div class="sm-form ">
          <label for="searchItem">Cari : </label>
          <input type="text" id="searchItem" name="searchItem" class="form-control form-control-sm" placeholder="searchItem" v-model="searchItem" >
      </div>
      <div class="sm-form ">
          <label for="tanggal">Tanggal Pinjam : </label>
          <input type="date" id="tanggal" name="tanggal" class="form-control form-control-sm" placeholder="tanggal" v-model="tanggal" >
      </div>
      <div v-if="edit">
        <br />
        <form action @submit.prevent="permintaanbarang" class="animate__animated animate__fadeIn">
          <div class="sm-form">
            <label for="nama">Nama</label>
            <input
              type="text"
              id="nama"
              name="nama"
              class="form-control form-control-sm"
              placeholder="nama"
              v-model="vdata.nama"
            />
          </div>
          <div class="sm-form">
            <label for="unit">Unit</label>
            <input
              type="text"
              id="unit"
              name="unit"
              class="form-control form-control-sm"
              placeholder="unit"
              v-model="vdata.unit"
            />
          </div>
          <div class="sm-form">
            <label for="keperluan">Keperluan</label>
            <input
              type="text"
              id="keperluan"
              name="keperluan"
              class="form-control form-control-sm"
              placeholder="keperluan"
              v-model="vdata.keperluan"
            />
          </div>
          <div class="sm-form">
            <label for="barang">Barang</label>
            <input
              type="text"
              id="barang"
              name="barang"
              class="form-control form-control-sm"
              placeholder="barang"
              v-model="vdata.barang"
            />
          </div>
           <div class="sm-form">
            <label for="waktu_minta">Tanggal</label>
            <input
              type="date"
              id="waktu_minta"
              name="waktu_minta"
              class="form-control form-control-sm"
              placeholder="waktu_minta"
              v-model="vdata.waktu_minta"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-sm btn-style9">
            <span class="typcn typcn-edit"></span> Simpan
          </button>
        </form>
      </div>
      <div
        class="shadow-lg rounded-lg p-2 mt-2"
        style="border:1px solid grey;"
        v-for="(item, index) in filteredData"
        :key="index"
      >
      <button type="button" @click="hapus(item.id)" class="btn btn-sm btn-danger  float-right" v-show="item.uid==$store.state.users.uid">x</button>
        <p class="font-bold">
          <span>Nama :</span>
          <span class="text-capitalize pl-2">{{item.nama}}</span>
        </p>
        <p class="font-bold">
          <span>Unit :</span>
          <span class="text-capitalize pl-2">{{item.unit}}</span>
        </p>
        <p class="font-bold">
          <span>Keperluan :</span>
          <span class="text-capitalize pl-2">{{item.keperluan}}</span>
        </p>
        <p class="font-bold">
          <span>Barang :</span>
          <span class="text-capitalize pl-2">{{item.barang}}</span>
        </p>
        <p class="font-bold">
          <span>Tanggal :</span>
          <span class="text-capitalize pl-2">{{item.waktu_minta}}</span>
        </p>
      </div>
      <br>
        <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <button
            type="button"
            v-for="(item, index) in tombolPagination"
            @click="changePagination(item)"
            :key="index+'pagination2'"
            v-show="item<jumlahPagination+1"
            class="btn btn-sm btn-primary rounded-circle"
            :class="{'bg-green hover:bg-blue border-blue cursor-not-allowed text-red':item==pagination}"
            :disabled="item==pagination"
          >{{item}}</button>
        </div>
      </div>
    </div>
      <br>

    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
 var id = require("date-fns/locale/id");
let db = firebase.firestore();
// let rdb = firebase.database()
import autophp from "@/plugins/autophp";
let sdb = new autophp();
export default {
  data() {
    return {
      vdata: {},
      edit: false,
       temp1: 0,
      temp2: 10,
      pagination: 1,
      pembagiannya: 10,
      orderBy: "",
      orderWith: true,
      searchItem: "",
      tanggal:"",
      datanya: [],
    };
  },
  methods: {
     format(date) {
       return this.$datefns.format(
         new Date(date),
         "dddd MMMM YYYY",
         {
           locale: id
         }
       );
     },
      format2(date) {
       return this.$datefns.format(
         new Date(date),
         "YYYY-MM-DD",
         {
           locale: id
         }
       );
     },
      pagPrev() {
      this.pagination = this.pagination - 1;
      if (this.pagination == 0) {
        this.pagination = 1;
      }
      this.temp2 = this.pagination * this.pembagiannya;
      this.temp1 = Math.ceil(this.temp2) - this.pembagiannya;
    },
    pagNext() {
      this.pagination = this.pagination + 1;
      if (this.pagination > (this.jumlahPagination+1)) {
        this.pagination = Math.ceil(this.jumlahPagination);
      }
      this.temp2 = this.pagination * this.pembagiannya;
      this.temp1 = Math.ceil(this.temp2) - this.pembagiannya;
    },
    changePagination(pag) {
      this.pagination = pag;
      this.temp2 = this.pagination * this.pembagiannya;
      this.temp2 = Math.ceil(this.temp2);
      this.temp1 = this.temp2 - this.pembagiannya;
      this.temp1 = Math.ceil(this.temp1);
    },
    permintaanbarang() {
      this.vdata.tanggal =this.format(new Date())
      this.vdata.createdAt = new Date()
      db.collection("permintaan_barang")
        .doc()
        .set(this.vdata, { merge: true })
        .then((res) => {});
    },
    hapus(id){
        if(confirm("Yakin menghapus barang ?")){
            db.collection('permintaan_barang').doc(id).delete().then(res=>{
                
            })
        }
    }
  },
  computed:{
       jumlahPagination() {
      let data = this.datanya;
      return data.length / 10;
    },
    tombolPagination() {
      let data = this.pagination;
      // v-if != (current > max ) button nya
      let btn1 = data - 2;
      let btn2 = data - 1;
      let btn3 = data;
      let btn4 = data + 1;
      let btn5 = data + 2;
      let array = [btn1, btn2, btn3, btn4, btn5];
      if (array.indexOf(-1) != -1) {
        array = [1, 2, 3, 4, 5];
      } else if (array.indexOf(0) != -1) {
        array = [1, 2, 3, 4, 5];
      }
      return array;
    },
      filteredData() {
      let that = this;
      let data = this.datanya;
      //! order fungsi
    //   if (this.orderBy.length > 0) {
    //     data = this.$_.orderBy(data, ["title"], [this.orderBy]);
    //   }
      //! search fungsi
      if (data[0] != undefined) {
        let keys = Object.keys(data[0]);
        data = data.filter((v, i, a) => {
          let hasil = false;
          keys.filter(key => {
            if (typeof v[key] === "string") {
              if (
                v[key].toLowerCase().indexOf(this.searchItem.toLowerCase()) !=
                -1
              ) {
                hasil = true;
              }
            } else {
              if (v[key].toString().indexOf(this.searchItem) != -1) {
                hasil = true;
              }
            }
          });
          if (hasil) return v;
        });
      }
       data = data.filter((v, i, a) => {
        let hasil = false;
        console.log(v.waktu_minta==that.tanggal)
          if(v['waktu_minta']==this.tanggal){
            return v
          }else if(this.tanggal==''){
            return v
          }
      });
      // data = data.map(e => {
      //   let obj = {};
      //   let kunci = Object.keys(e);
      //   kunci = that.$_.difference(kunci, that.unless);
      //   kunci.forEach((a, index) => {
      //     if (kunci.find(e => e == that.date[index])) {
      //     } else {
      //       // obj[a] = 'tanggal'
      //     }
      //     console.log(typeof e[a]);
      //     obj[a] =
      //       typeof e[a] != "string"
      //         ? e[a]
      //         : new Date(e[a]) !== "Invalid Date" && !isNaN(new Date(e[a]))
      //         ? that.format(e[a])
      //         : e[a];
      //   });
      //   return obj;
      // });
      data = data.slice(this.temp1, this.temp2);
      return data;
    }
  },
  mounted() {
    this.vdata.nama = this.$store.state.users.nama
    this.vdata.unit = this.$store.state.users.unit.nama_unit
    this.vdata.uid=this.$store.state.users.uid
    var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    today = yyyy + "-" + mm + "-" + dd;
    // this.$el.querySelector("#tanggal_lembur").setAttribute("max", today);
    this.vdata.waktu_minta = this.format2(new Date())
    this.$forceUpdate()
    db.collection("permintaan_barang").onSnapshot((res) => {
      let data = res.docs.map((e) => {
        return {
          id: e.id,
          ...e.data(),
        };
      });
      this.datanya = data;
    });
  },
};
</script>