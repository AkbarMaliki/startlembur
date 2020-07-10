<template>
  <div>
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
    <div class="card animate__animated animate__bounceInDown">
        <div class="card-header mx-auto">
             <img
          src="@/static/gif/latemin.gif"
          class="img-fluid rounded-top z-depth-1"
          alt
          style="height:140px;"
          v-viewer
        />
        </div>
        <div class="card-body">
            <div class="bg-red-400 animated bounce infinite rounded-lg shadow-1" style="">
                <p class="font-bold text-center ">
                PERMINTAAN MASIH DI PROSES ...
                </p>
            </div>
            <div class="p-2">
                <hr class="style4">
                <tr>
                    <td>Nip</td>
                    <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
                    <td>{{datanya.nip}}</td>
                </tr>
                <tr>
                    <td>Nama</td>
                    <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
                    <td>{{datanya.nama}}</td>
                </tr>
                <tr>
                    <td>Unit</td>
                    <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
                    <td>{{datanya.unit.bagian}}</td>
                </tr>
                <tr>
                    <td>Jenis Pekerjaan</td>
                    <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
                    <td>{{datanya.jenis_pekerjaan}}</td>
                </tr>
                <tr>
                    <td>Rincian Lembur</td>
                    <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
                    <td>{{datanya.rincian_kerja}}</td>
                </tr>
                <tr>
                    <td>Tanggal Lembur</td>
                    <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
                    <td>{{datanya.tanggal_lembur}}</td>
                </tr>
                <tr>
                    <td>Lama lembur</td>
                    <td class="pl-1 pr-1">&nbsp;:&nbsp;</td>
                    <td>{{datanya.lama_lembur}}</td>
                </tr>
            </div>
            <div class="text-center">
                <button type="button" @click="hapus" class="btn btn-sm btn-style9  " style="
                background: rgb(196,47,10);
background: linear-gradient(349deg, rgba(196,47,10,0.5410539215686274) 0%, rgba(232,53,17,0.8603816526610644) 93%);"><span class="typcn typcn-delete"></span> BATAL</button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
let db = firebase.firestore()
export default{
  data(){
    return{
datanya:[]
    }
  },
  methods:{
      hapus(){
          if(confirm('Yakin ingin membatalkan ijin lembur?')){
              db.collection('users').doc(this.$store.state.users.uid).collection('lembur').doc(this.datanya.id).delete().then(res=>{
                  alert('berhasil delete!');
              this.$router.push('/lembur')
          })
          }
      }
  },
  mounted() {
    db.collection('users').doc(this.$store.state.users.uid).collection('lembur').get().then(res=>{
        let data = res.docs.map(e=>{
            return{
                id:e.id,
                ...e.data()
            }
        })
        if(data.length==0){
            this.$router.push('/lembur/ijin-lembur')
        }
        console.log(data[0])
        this.datanya=data[0]
    })
  },
  layout:"lembur"
}
</script>