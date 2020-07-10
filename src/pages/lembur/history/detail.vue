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
    <div class="card" >
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
        <div class="row">
            <div class="col-6" v-if="datanya.disposisi_unit_head">
                <p class="p-2">Unit Head</p>
                Nip : {{datanya.disposisi_unit_head.nip}} <br>
                Nama : {{datanya.disposisi_unit_head.nama}} <br>
                disposisi : {{datanya.disposisi1}}
            </div>
            <div class="col-6" v-if="datanya.disposisi_head">
                 <p class="p-2">Head</p>
                Nip : {{datanya.disposisi_head.nip}}<br>
                Nama : {{datanya.disposisi_head.nama}}
                disposisi : {{datanya.disposisi2}}
            </div>
        </div>
        <br>
        <!-- <button type="button" @click="generateslink()" class="btn btn-sm btn-style9 "><span class="typcn typcn-printer"></span>Generate Link to print</button> -->
        <div v-if="vdata.link.length>0" class="sm-form">
        <textarea
        type="text"
        id="link"
        name="link"
        rows="2"
        placeholder="link..."
        class="form-control md-textarea"
        v-model="vdata.link"
        ></textarea>
        <a :href="vdata.link"></a>
        </div>
        <button type="button" @click="print" class="btn btn-sm btn-style9 float-right"><span class="typcn typcn-printer"></span> Print</button>
      </div>
    </div>
    <!-- <div v-else>
      <p
        class="p-3 font-bold font-medium text-center animated bounce infinite"
      >DATA TIDAK DITEMUKAN ...</p>
    </div> -->
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
        disposisi1:"",
        link:""
      },
      ready: false,
      units:[]
    };
  },
  methods: {
    generateslink(){
      this.vdata.link = `http://localhost:8082/lembur_generate?datanya=${JSON.stringify(this.datanya)}`;
     navigator.clipboard.writeText(this.vdata.link).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    },
    print() {
      this.$router.push(`/lembur/history/laporan?id=${this.$route.query.id}`)
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
    let that= this
      db.collection(`users/${this.$route.query.uid}/history-lembur`).doc(this.$route.query.id).get().then(res=>{
          let data = {
              id:res.id,
              ...res.data()
          }
          this.datanya = data
          console.log('hadang')
          console.log('daranaya',res.data())
          setTimeout(() => {
            that.ready=true
          }, 3000);
      })
  },
  layout: "lembur"
};
</script>