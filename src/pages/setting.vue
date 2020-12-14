<template>
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,224L0,224L180,224L180,288L360,288L360,32L540,32L540,160L720,160L720,64L900,64L900,32L1080,32L1080,288L1260,288L1260,64L1440,64L1440,0L1260,0L1260,0L1080,0L1080,0L900,0L900,0L720,0L720,0L540,0L540,0L360,0L360,0L180,0L180,0L0,0L0,0Z"></path></svg>
    <div class="card animate__animated animate__backInRight">
      <div class="card-header text-center mx-auto">
        <div v-if="this.$store.state.users.gambar!='-'">
          <img
            :src="$store.state.users.gambar"
            class="img-fluid rounded-top z-depth-1"
            alt
            style="height:140px;"
            v-viewer
          />
        </div>
        <div v-else>
          <img
            src="@/static/nofound.png"
            class="img-fluid rounded-top z-depth-1"
            alt
            style="height:140px;"
            v-viewer
          />
        </div>
      </div>
      <div class="card-body">
        <button type="button" @click="$router.push('/changepassword')" class="btn btn-sm btn-style9 ">Change Password</button>
      <button type="button" @click="$router.push('/kedua')" class="btn btn-sm btn-style9  float-right" style="background: rgb(34,227,23);
background: linear-gradient(349deg, rgba(34,227,23,0.5410539215686274) 0%, rgba(17,232,27,0.8603816526610644) 97%);"><span class="typcn typcn-pen"></span> TTD</button>
      <br>
        <div class="md-form form-sm">
          <span class="typcn typcn-business-card text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="nip">nip</label>
          <input type="text" id="nip" name="nip" class="form-control" required v-model="vdata.nip" />
        </div>
        <div class="md-form form-sm">
          <span class="typcn typcn-user-add text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="nama">Nama</label>
          <input
            type="text"
            id="nama"
            name="nama"
            class="form-control"
            required
            v-model="vdata.nama"
          />
        </div>
        <div class="md-form form-sm">
          <span class="typcn typcn-group text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="unit">Unit</label>
           <v-select :options="units" label="nama_unit" v-model="vdata.unit"></v-select>
          <!-- <select class="form-control" required v-model="vdata.unit">
            <option v-for="(item, index) in units" :key="index+'unit'">{{item.nama_unit}}</option>
          </select> -->
        </div>
        <br />
      
        <div class="md-form form-sm">
          <span class="typcn typcn-phone text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="nohp">NO WA (optional)</label>
          <input type="text" id="nohp" name="nohp" class="form-control" v-model="vdata.nohp" />
        </div>
        <div class="md-form form-sm">
          <span class="typcn typcn-image text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="gambar">Gambar (optional)</label>
          <input type="file" @change="previewImage" accept="image/*" />
          <p>
            Progress: {{uploadValue.toFixed()+"%"}}
            <progress
              id="progress"
              :value="uploadValue"
              max="100"
            ></progress>
          </p>
          <div v-if="imageData!=null">
            <img class="preview" :src="picture" />
            <br />
            <button @click="onUpload" class="btn btn-sm btn-dark">
              <span class="typcn typcn-upload"></span> Upload
            </button>
          </div>
        </div>
        <hr class="style2">
         <!-- <p>Notifikasi dengan Email ? <span class="font-bold font-times"> 
          {{email ?'aktif':"tidak aktif"}}
          </span> 
          </p>
        <button type="button" class="btn btn-sm" @click="email=false;vdata.emails=false" :class="{'btn-secondary':!email}">OFF</button>
        <button type="button" class="btn btn-sm" @click="email=true;vdata.emails=true" :class="{'btn-primary':email}">ON</button> -->
        <div class="md-form form-sm" v-if="email">
          <span class="typcn typcn-mail text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="email">Email</label>
          <input type="email" id="email" name="email" class="form-control" required v-model="vdata.emailnotif" />
        </div>
        <br>
        <br>
        <br />
        <button type="button" @click="$router.go(-1)" class="btn btn-md btn-dark">
          <span class="typcn typcn-arrow-left"></span> Back
        </button>
        <button
          type="button"
          @click="next()"
          v-if="vdata.nama.length>0 && vdata.unit"
          class="btn btn-sm btn-style9 float-right"
        >
          Simpan
          <span class="typcn typcn-edit"></span>
        </button>
      </div>
    </div>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,224L0,224L180,224L180,288L360,288L360,32L540,32L540,160L720,160L720,64L900,64L900,32L1080,32L1080,288L1260,288L1260,64L1440,64L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"></path></svg>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
export default {
  data() {
    return {
      vdata: {
        nama: "",
        unit: ""
      },
      units: [],
      unit: '',
      imageData: null,
      picture: null,
      email: false,
      uploadValue: 0
    };
  },
  beforeMount() {
    db.collection("users")
      .doc(this.$store.state.users.uid)
      .get()
      .then(res => {
        let data = res.data();
        this.vdata.nip = data.nip;
        this.vdata.nama = data.nama;
        this.vdata.unit = data.unit;
           this.vdata.emails=this.$store.state.users.emails
    this.email=this.$store.state.users.emails
        this.vdata.emailnotif = data.emailnotif;
        this.vdata.gambar = data.gambar ? data.gambar : "";
        this.vdata.nohp = data.nohp ? data.nohp : "";
      });
  },
  layout: "lembur",
  methods: {
    next() {
      db.collection("users")
        .doc(this.$store.state.users.uid)
        .set({ ...this.vdata }, { merge: true })
        .then(res => {
          alert("Simpan Berhasil")
          this.$store.dispatch('ceklogin',{true:true,false:true}).then(res=>{
            this.$router.push("/lembur");
          })
        });
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
            console.log("url", url);
            this.vdata.gambar = url;
          });
        }
      );
    }
  },
  mounted() {
    db.collection("unit")
      .get()
      .then(res => {
        let data = res.docs.map(e => {
          return {
            id: e.id,
            ...e.data()
          };
        });
        data = _.orderBy(data, ["nama_unit"], ["asc"]);
        this.units = data;
        console.log(this.units)
      });
  }
};
</script>