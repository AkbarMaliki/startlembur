<template>
  <div>
    <button
      type="button"
      @click="$router.go(-1)"
      class="btn btn-sm btn-style1 font-bold text-uppercase underline"
      style="position:absolute;z-index:10;"
    >
      <span class="text-xl typcn typcn-arrow-left"></span> Kembali
    </button>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="animated fadeInDown">
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,106.7C840,64,960,32,1080,69.3C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
    <div class="card" v-if="ready">
      <div class="card-header">APPROVE UNIT HEAD</div>
      <div class="card-body">
        <tr>
          <td>NIP</td>
          <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
          <td>{{datanya.nip}}</td>
        </tr>
        <img
          :src="datanya.from.gambar"
          v-viewer
          class="kinoLightBox img-fluid rounded-circle float-right"
          style="margin-top:-10px;width:40px;height:40px;"
        />
        Nama
        &nbsp;:&nbsp;
        {{datanya.nama}}
        <br />
        Unit
        &nbsp;:&nbsp;
        {{datanya.from.unit.nama_unit}}
        <tr>
          <td>Tanggal Lembur</td>
          <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
          <td>{{format(datanya.tanggal_lembur)}}</td>
        </tr>
        <tr>
          <td>Jenis Pekerjaan</td>
          <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
          <td>{{datanya.jenis_pekerjaan}}</td>
        </tr>
        <tr>
          <td>Rincian lembur</td>
          <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
          <td>{{datanya.rincian_kerja}}</td>
        </tr>
        <span class="text-sm float-right">{{distanceToNow(datanya.createAt.toDate())}} Yang lalu</span>
        <br />
        <hr class="style13" />
        <div class="sm-form">
        <textarea
        type="text"
        id="disposisi1"
        name="disposisi1"
        rows="2"
        placeholder="disposisi1..."
        class="form-control md-textarea"
        v-model="vdata.disposisi1"
        ></textarea>
        </div>
        Disposisi ke : 
        <v-select :options="units" label="nama" v-model="vdata.to"></v-select>
        <br>
        <br>
        <button type="button" @click="approve" class="btn btn-sm btn-style9 float-right">Approve</button>
        <button
          type="button"
          @click="batal"
          class="btn btn-sm btn-style9"
          style="background: rgb(227,23,23);
background: linear-gradient(349deg, rgba(227,23,23,0.5410539215686274) 0%, rgba(232,53,17,0.8603816526610644) 97%);"
        >BATAL</button>
      </div>
    </div>
    <div v-else>
      <p
        class="p-3 font-bold font-medium text-center animated bounce infinite"
      >DATA TIDAK DITEMUKAN ...</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
var id = require("date-fns/locale/id");
import firebase from "firebase";
let db = firebase.firestore();
export default {
  data() {
    return {
      datanya: {
      },
      vdata:{
        disposisi1:""
      },
      ready: false,
      units:[]
    };
  },
  methods: {
    approve() {
      let that = this
      console.log(this.vdata)
      if (confirm("yakin meng approve lemburan ?")) {
          this.$store.dispatch('notifikasi',{
              title:"Permintaan diteruskan!",
              body:'Permintaan lembur dari '+that.datanya.from.nama,
              link:'/lembur/head2',
              from:that.datanya.from,
              uid:that.datanya.from.uid,
              to:that.vdata.to,
            })
         db.collection('users').doc(this.datanya.from.uid).collection('lembur').doc(this.$route.query.id).set({status:2,disposisi_unit_head:this.$store.state.users,to:this.vdata.to,disposisi1:this.vdata.disposisi1},{merge:true}).then(res=>{
          that.$router.push('/lembur')
         })
      }
    },
    batal() {
      let that = this;
      if (confirm("yakin membatalkan lemburan?")) {
        let text = prompt("Alasan dibatalkan ? ", "-");
        console.log(that.datanya.from)
              this.$store.dispatch('notifikasi',{
                      title:"Permintaan lembur dibatalkan",
                      body:text,
                      link:'/lembur',
                      from:this.$store.state.users,
                      uid:that.datanya.from.uid,
                      to:that.datanya.from,
                })
          db.collection('users').doc(this.datanya.from.uid).collection('lembur').doc(this.$route.query.id).delete().then(res=>{
          that.$router.push('/lembur')
         })
      }
    },
    distanceToNow(date) {
      return this.$datefns.distanceInWordsToNow(new Date(date), {
        locale: id,
        includeSeconds: true
      });
      //=> "3 days ago"
    },
    format(date) {
      return this.$datefns.format(new Date(date), "DD MMMM YYYY", {
        locale: id
      });
    }
  },
  mounted() {
    console.log(this.$route.query);
    db.collection('users').where('bagian','==','deputy').get().then(res=>{
      let data = res.docs.map(e=>{
        return{
          id:e.id,
          ...e.data()
        }
      })
      this.units=data
    })
    db.collectionGroup("lembur")
      .where("status", "==", 1)
      .onSnapshot(res => {
        let data = res.docs.map(e => {
          return {
            id: e.id,
            ...e.data()
          };
        });
        data = data.filter(e => {
          if (e.id == this.$route.query.id) {
            return e;
          }
        });
        console.log("datanya", data);
        this.datanya = data[0];
        if (data[0]) {
          this.ready = true;
        } else {
        }
      });
  },
  layout: "lembur"
};
</script>