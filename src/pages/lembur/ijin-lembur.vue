<template>
  <div>
    <div v-show="ready">
      <button
        type="button"
        @click="$router.push('/lembur')"
        class="btn btn-sm btn-style1 font-bold text-uppercase underline"
        style="position:absolute;"
      >
        <span class="text-xl typcn typcn-arrow-left"></span> Kembali
      </button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          class
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L30,213.3C60,203,120,181,180,170.7C240,160,300,160,360,170.7C420,181,480,203,540,181.3C600,160,660,96,720,90.7C780,85,840,139,900,138.7C960,139,1020,85,1080,96C1140,107,1200,181,1260,213.3C1320,245,1380,235,1410,229.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        />
      </svg>
      <p class="text-center">FORM LEMBUR</p>
      <div class="card animate__animated animate__backInDown">
        <div class="card-header text-center mx-auto">
          <img
            src="@/static/gif/latemin.gif"
            class="img-fluid rounded-top z-depth-1"
            alt
            style="height:140px;"
            v-viewer
          />
        </div>
        <div class="card-body">
          <form action @submit.prevent="next()">
            <div class="sm-form">
              <label for="jenis_pekerjaan">Jenis pekerjaan yang dilemburkan</label>
              <textarea
                type="text"
                id="jenis_pekerjaan"
                name="jenis_pekerjaan"
                rows="2"
                placeholder="isi"
                class="form-control md-textarea"
                v-model="vdata.jenis_pekerjaan"
                required
              ></textarea>
            </div>
            <div class="sm-form">
              <label for="rincian_kerja">Rincian pekerjaan lembur</label>
              <textarea
                type="text"
                id="rincian_kerja"
                name="rincian_kerja"
                rows="2"
                placeholder="isi"
                class="form-control md-textarea"
                v-model="vdata.rincian_kerja"
                required
              ></textarea>
            </div>
            <div class="sm-form">
              <label for="tanggal" class="pl-2">Tanggal Lembur (Min H-1)</label>
              <input
                type="date"
                id="tanggal_lembur"
                name="tanggal"
                class="form-control form-control-sm"
                placeholder="tanggal"
                required
                v-model="vdata.tanggal_lembur"
              />
            </div>
            <div class="sm-form">
              <label for="lama_lembur">Lama Lembur</label>
              <input
                type="number"
                id="lama_lembur"
                name="lama_lembur"
                class="form-control form-control-sm"
                required
                placeholder="lama_lembur"
                v-model="vdata.lama_lembur"
              />
            </div>
            <p class="p-1">Disposisi ke :</p>
            <div v-if="this.$store.state.users.bagian=='unit_head'">
              <v-select :options="units2" label="nama" v-model="vdata.to"></v-select>
            </div>
            <div v-else>
              <v-select :options="units" label="nama" v-model="vdata.to"></v-select>
            </div>
            <br />
            <button type="submit" class="btn btn-sm btn-style9 float-right">
              Simpan
              <span class="typcn typcn-edit"></span>
            </button>
          </form>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L30,213.3C60,203,120,181,180,170.7C240,160,300,160,360,170.7C420,181,480,203,540,181.3C600,160,660,96,720,90.7C780,85,840,139,900,138.7C960,139,1020,85,1080,96C1140,107,1200,181,1260,213.3C1320,245,1380,235,1410,229.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        />
      </svg>
    </div>
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
        lama_lembur: 1
      },
      head_nama: "",
      units: [],
      units2:[],
      ready: false
    };
  },
  methods: {
    pilih(){
      alert('y')
    },
    next() {
      let that = this
      this.vdata.from = this.$store.state.users
      if (confirm("apakah data yang dimasukkan sudah benar?")) {
        this.vdata.createAt = new Date();
            db.collection("users")
              .doc(this.$store.state.users.uid)
              .collection("lembur")
              .doc()
              .set(this.vdata, { merge: true })
              .then(res => {
                let link=""
                if(this.$store.state.users.bagian=='unit_head'){
                  link = '/lembur/head2'
                }else{
                  link = '/lembur/head1'
                }
                alert("Lembur berhasil di request!");
                this.$store.dispatch('notifikasi',{
                  title:"Permintaan approve lembur!",
                  body:"lembur oleh "+this.$store.state.users.nama,
                  uid:that.vdata.to.uid,
                  link:link,
                  from:this.$store.state.users,
                  to:that.vdata.to,
                })
                this.$router.push("/lembur/status");
                //   NOTIFIKASI
              });
      }
    }
  },
  mounted() {
    db.collection('users').where('bagian','==','unit_head').get().then(res=>{
      let data = res.docs.map(e=>{
        return {
          uid:e.id,
          ...e.data()
        }
      })
      this.units=data
    })
     db.collection('users').where('bagian','==','deputy').get().then(res=>{
      let data = res.docs.map(e=>{
        return {
          uid:e.id,
          ...e.data()
        }
      })
      this.units2=data
    })
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
    this.$el.querySelector("#tanggal_lembur").setAttribute("max", today);
    let that = this;
    setTimeout(() => {
      that.vdata.nip = this.$store.state.users.nip;
      that.vdata.nama = this.$store.state.users.nama;
      that.vdata.unit = this.$store.state.users.unit;
      if(this.$store.state.users.bagian=='unit_head'){
        that.vdata.status = 2;
      }else{
        that.vdata.status = 1;
      }
      that.$forceUpdate();
    }, 1000);
  },
  beforeMount() {
    let that = this;
    db.collection("users")
      .doc(this.$store.state.users.uid)
      .collection("lembur")
      .get()
      .then(res => {
        let data = res.docs.map(e => e.data());
        if (data.length > 0) {
          that.$router.push("/lembur/status");
        } else {
          that.ready = true;
        }
      });
  },
  layout: "lembur"
};
</script>