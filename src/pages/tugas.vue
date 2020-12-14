<template>
  <div>
    <div class="row">
      <div class="offset-sm-2 col-sm-8">
        <p class="font-bold text-2xl">FORM PENDAFTARAN DATA LES BAHASA INGGRIS (TUGAS SKRIPSI)</p>
        <div class="sm-form">
          <label for="nama">Your nama</label>
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
          <label for="tanggal_lahir">Your tanggal_lahir</label>
          <input
            type="date"
            id="tanggal_lahir"
            name="tanggal_lahir"
            class="form-control form-control-sm"
            placeholder="tanggal_lahir"
            v-model="vdata.tanggal_lahir"
          />
        </div>
        <p class="p-2">Alamat</p>
        <div class="sm-form">
          <textarea
            type="text"
            id="alamat"
            name="alamat"
            rows="2"
            placeholder="alamat..."
            class="form-control md-textarea"
            v-model="vdata.alamat"
          ></textarea>
        </div>
        <div class="sm-form">
          <label for="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control form-control-sm"
            placeholder="email"
            v-model="vdata.email"
          />
        </div>
        <div class="sm-form">
          <label for="hobby">Your hobby</label>
          <input
            type="text"
            id="hobby"
            name="hobby"
            class="form-control form-control-sm"
            placeholder="hobby"
            v-model="vdata.hobby"
          />
        </div>
        <p>Pilih Kursus : </p>
        <select class='form-control' v-model="vdata.kursus">
        <option>PROGRAMMER</option>
        <option>BAHASA INGGRIS</option>
        <option>MATEMATIKA</option>
        </select>
         <br>
    <br>
    <br>
      <button type="button" @click="simpan" class="btn btn-sm btn-primary  ">Simpan data</button>
      <button type="button" @click="update" class="btn btn-sm btn-success  ">Update data</button>
      <button type="button" @click="hapus" class="btn btn-sm btn-danger  ">Hapus data</button>
      </div>
    

    </div>
    <div class="shadow-lg rounded-lg p-3 ml-5" v-for="(item, index) in datanya" :key="index" @click="ambil(item)">
        <p>Nama : {{item.nama}}</p>
        <p>tanggal_lahir : {{item.tanggal_lahir}}</p>
        <p>alamat : {{item.alamat}}</p>
        <p>email : {{item.email}}</p>
        <p>hobby : {{item.hobby}}</p>
        <p>kursus : {{item.kursus}}</p>
        <hr class="style5">
    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
// let rdb = firebase.database()
export default {
  data() {
    return {
      vdata: {},
      datanya:[]
    };
  },
  methods: {
      ambil(data){  
          this.vdata.uid=data.id
          console.log(this.vdata.uid)
          this.vdata.nama=data.nama
          this.vdata.tanggal_lahir=data.tanggal_lahir
          this.vdata.alamat=data.alamat
          this.vdata.email=data.email
          this.vdata.hobby=data.hobby
          this.vdata.kursus=data.kursus
          this.$forceUpdate()
      },
    simpan() {
      db.collection("siswa")
        .doc()
        .set(this.vdata, { merge: true })
        .then((res) => {
          alert("berhasil simpan siswa");
        });
    },
    update() {
      db.collection("siswa")
        .doc(this.vdata.uid)
        .set(this.vdata, { merge: true })
        .then((res) => {
          alert("berhasil update siswa");
        });
    },
    hapus() {
      db.collection("siswa")
        .doc(this.vdata.uid)
        .delete()
        .then((res) => {
          alert("berhasil delete siswa");
        });
    },
    getData(){
        db.collection('siswa').onSnapshot(res=>{
            let data = res.docs.map(e=>{
                return {
                    id:e.id,
                    ...e.data()
                }
            })
            this.datanya = data
            this.$forceUpdate()
        })
    }
  },
  mounted() {
      this.getData()
  },
};
</script>