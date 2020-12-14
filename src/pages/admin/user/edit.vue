<template>
  <div>
        <button type="button" @click="$router.go(-1)" class="btn btn-md btn-danger float-left absolute m-3">
          <span class="typcn typcn-arrow-left"></span>
        </button>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,224L0,224L180,224L180,288L360,288L360,32L540,32L540,160L720,160L720,64L900,64L900,32L1080,32L1080,288L1260,288L1260,64L1440,64L1440,0L1260,0L1260,0L1080,0L1080,0L900,0L900,0L720,0L720,0L540,0L540,0L360,0L360,0L180,0L180,0L0,0L0,0Z"></path></svg>
    <div class="card animate__animated animate__backInRight">
      <div class="card-header text-center mx-auto">
      </div>
      <div class="card-body">
        <!-- <button type="button" @click="$router.push(`/changepassword?id=${this.$route.query.id}`)" class="btn btn-sm btn-style9 ">Change Password</button> -->
      <!-- <button type="button" @click="$router.push('/kedua')" class="btn btn-sm btn-style9  float-right" style="background: rgb(34,227,23);
background: linear-gradient(349deg, rgba(34,227,23,0.5410539215686274) 0%, rgba(17,232,27,0.8603816526610644) 97%);"><span class="typcn typcn-pen"></span> TTD</button> -->
      <hr class="style13">
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
         <!--  -->
        <div class="md-form form-sm">
          <span class="typcn typcn-key-outline text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="nama">Bagian</label>
            <v-select :options="bagians" label="nama_unit" v-model="vdata.bagian"></v-select>
        </div>
        <!--  -->
        <!--  -->
        <div class="md-form form-sm">
          <span class="typcn typcn-key text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="nama">Hak akses</label>
            <v-select :options="akses" label="nama_unit" v-model="vdata.auth"></v-select>
        </div>
        <!--  -->
        <!--  -->
        <div class="md-form form-sm">
          <span class="typcn typcn-key-outline text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="nama">Ganti Password :</label>
            <v-select :options="ganti_p" label="nama_unit" v-model="vdata.changepassword"></v-select>
        </div>
        <!--  -->
        <!--  -->
        <div class="md-form form-sm">
          <span class="typcn typcn-pencil text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="nama">Ganti TTD :</label>
            <v-select :options="ganti_ttd" label="nama_unit" v-model="vdata.changettd"></v-select>
        </div>
        <!--  -->
        <!--  -->
        <div class="md-form form-sm">
          <span class="typcn typcn-user text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="nama">Set User balik :</label>
            <v-select :options="ganti_user" label="nama_unit" v-model="vdata.pertama"></v-select>
        </div>
        <!--  -->
      
        <div class="md-form form-sm">
          <span class="typcn typcn-phone text-lg"></span>&nbsp;&nbsp;&nbsp;
          <label for="nohp">NO WA (optional)</label>
          <input type="text" id="nohp" name="nohp" class="form-control" v-model="vdata.nohp" />
        </div>
        <!-- <div class="md-form form-sm">
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
        </div> -->
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
        <button
          type="button"
          @click="simpan()"
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
      akses:[
          "admin",
          "user"
      ],
        bagians:[
            "-",
            "deputy",
            "unit_head",
        ],
      ganti_p:[
          "true",
          "false",
      ],
      ganti_ttd:[
          "true",
          "false",
      ],
      ganti_user:[
          "true",
          "false",
      ],
      units: [],
      unit: '',
      imageData: null,
      datauser: [],
      picture: null,
      email: false,
      uploadValue: 0
    };
  },
  beforeMount() {
  },
  layout: "admin",
  methods: {
    getData(){
        let that = this
        console.log(this.$route.query.id)
        db.collection(`users`).doc(this.$route.query.id).get().then(res=>{
            let obj = {
                id:res.id,
                ...res.data()
            }
            that.vdata = obj
            that.$forceUpdate()
        })
    },
    simpan(){
        db.collection(`users`).doc(this.$route.query.id).set(this.vdata,{merge:true}).then(res=>{
            alert("Berhasil Simpan")
        })
    }
  },
  mounted() {
    this.getData()
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