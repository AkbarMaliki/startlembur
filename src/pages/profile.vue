<template>
  <div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,256C480,299,600,309,720,261.3C840,213,960,107,1080,90.7C1200,75,1320,149,1380,186.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
    <div class="card">
      <div class="card-header text-center mx-auto">
              <img src="@/static/Kino.jpg" class="img-fluid rounded-top z-depth-1" alt="" style="height:140px;" v-viewer>
      </div>
      <div class="card-body">
        <div class="md-form form-sm">
          <span class="typcn typcn-user-add text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="nama">Nama</label>
          <input type="text" id="nama" name="nama" class="form-control" required v-model="vdata.nama" />
        </div>
        <div class="md-form form-sm">
          <span class="typcn typcn-group text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="unit">Unit</label>
          <select class="form-control" required v-model="vdata.unit">
            <option>UNIT 1</option>
            <option>UNIT 2</option>
            <option>UNIT 3</option>
            <option>UNIT 4</option>
          </select>
        </div>
        <br>
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
            <button @click="onUpload" class="btn btn-sm btn-dark"><span class="typcn typcn-upload"></span> Upload</button>
          </div>
        </div>
        <br>
        <button type="button" @click="next()" v-if="vdata.nama.length>0 && vdata.unit.length>0" class="btn btn-sm btn-style9 float-right ">Next <span class="typcn typcn-arrow-right"></span></button>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,224L30,213.3C60,203,120,181,180,170.7C240,160,300,160,360,170.7C420,181,480,203,540,181.3C600,160,660,96,720,90.7C780,85,840,139,900,138.7C960,139,1020,85,1080,96C1140,107,1200,181,1260,213.3C1320,245,1380,235,1410,229.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
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
          nama:"",
          unit:''
      },
      imageData: null,
      picture: null,
      uploadValue: 0
    };
  },
  beforeMount(){
      db.collection('users').doc(this.$store.state.users.uid).get().then(res=>{
          let data = res.data()
          this.vdata.nama=data.nama
          this.vdata.unit=data.unit
          this.vdata.gambar=data.gambar ? data.gambar:'';
          this.vdata.nohp=data.nohp ? data.nohp:'';
      })
  },
  layout:"lembur",
  methods: {
    next() {
      db.collection("users")
        .doc(this.$store.state.users.uid)
        .set({ ...this.vdata,pertama: true }, { merge: true })
        .then(res => {
          this.$router.push("/lembur");
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
            this.vdata.gambar=url
          });
        }
      );
    }
  },
  mounted() {}
};
</script>