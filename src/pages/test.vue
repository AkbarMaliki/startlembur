<template>
  <div>
    <form action="" @submit.prevent="test">
    <div class="sm-form ">
        <label for="username">id siswa</label>
        <input type="text" id="idsiswa" name="idsiswa" class="form-control form-control-sm" placeholder="idsiswa" v-model="vdata.idsiswa" >
    </div>
    
    <div class="sm-form ">
        <label for="name">Your name</label>
        <input type="text" id="name" name="name" required class="form-control form-control-sm" placeholder="name" v-model="vdata.name" >
    </div>
    <button type="submit"  class="btn btn-sm btn-style9">test</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
// import firebase from 'firebase'
// let db = firebase.firestore()
// let rdb = firebase.database()
import autophp from '@/plugins/autophp';
let sdb = new autophp();
export default{
  data(){
    return{
      vdata:{
        
      }
    }
  },
  methods:{
    test(){
      // SELECT
      sdb.collection("tbuser").doc("*").get("*").then(res => {
          console.log(res);
      });
      // SELECT
      sdb.collection("test2").doc().select('select * from test2').then(res => {
          console.log(res);
      });
      // UPDATE / INSERT
      //idnya letak di vdata
      sdb.collection('tbuser').doc().set(vdata).then(res=>{
          console.log(res)
      })
      // DELETE
      sdb.collection("test2").doc("3").delete().then(res => {
          console.log(res);
      });
    }
  },
  mounted() {
    
  },
}
</script>