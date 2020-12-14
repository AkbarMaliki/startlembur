<template>
  <div>
    <button type="button" @click="test" class="btn btn-sm btn-primary  ">test</button>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
let db = firebase.firestore()
// let rdb = firebase.database()
import autophp from '@/plugins/autophp';
let sdb = new autophp();
export default{
  data(){
    return{

    }
  },
  methods:{
    test(){
      db.collection('sop').orderBy('createdAt','asc').get().then(res=>{
        let data = res.docs.map(e=>{
          return{
            id:e.id,
            ...e.data()
          }
        })
        console.log(data)
      })
    }

  },
  mounted() {
    
  },
  metaInfo() {
      return {
        title: "Tentang TA_Maliki / Taufik Akbar Maliki",
        meta: [{  hid: "description",  name: "description",  content: "Tentang Taufik akbar maliki / TA_Maliki",},{  property: "og:title",  content: "Tentang Taufik akbar maliki / TA_Maliki",},{ property: "og:site_name", content: "TA_Maliki" },{ property: "og:type", content: "website" },{  property: `og:url`,  content: `${this.$store.state.url}`,},{  property: `og:image`,  content: `${this.$store.state.url}/Kino.jpg`,},{  property: `og:description`,  content: `documentasi ya`,},{  name: "keywords",  content: "blog,portofolio,freelance",},{ name: "robots", content: "index,follow" },],
      };
}}
</script>