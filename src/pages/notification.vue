<template>
  <div>
    <div class="bg-blue-300">
      <div class="p-2">
        <p class="p-2 text-lg font-bold  float-right">
          Notification
          <span class="typcn typcn-bell"></span>
        </p>
          <button type="button" @click="$router.go(-1)" style="font-size:12px;" class="btn btn-sm btn-style9">
        <span class="typcn typcn-arrow-left"></span> Back
      </button>
      </div>
    </div>
    <div>
      <hr class="style13" style="margin:0;padding:0;" />
      <div v-for="(item, index) in notification" :key="index+'notif'" class="p-2 btn-style2  btn-block" :class="{'text-red-400':item.dibaca==false}" >
        <button type="button" @click="del(item.id)" class="btn btn-sm btn-style9 float-right   "><span class="typcn typcn-delete"></span></button>
        <p @click="dibaca(item)">
        {{item.title}}
        </p>
        <p @click="dibaca(item)" class="text-sm">
          {{item.body}}
        </p>
        <span class="text-xs">
          {{distanceToNow(item.createdAt.toDate())+' yang lalu'}}
        </span>
      </div>
    </div>
  
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
export default {
  layout: "lembur",
  data() {
    return {
      notification:[],
      notification2:[]
    };
  },
  methods: {
    dibaca(item){
      db.collection(`users/${this.$store.state.users.uid}/notification`).doc(item.id).set({dibaca:true},{merge:true}).then(res=>{
        console.log('dibaca')
        console.log(item.link)
        this.$router.push(item.link)
      })
    },
    del(id){
      db.collection(`users/${this.$store.state.users.uid}/notification`).doc(id).delete().then(res=>{
        console.log()
      })
    },
    distanceToNow(date) {
      return this.$datefns.distanceInWordsToNow(
        new Date(date),
        {
          locale: id,
          includeSeconds: true
        }
      );
      //=> "3 days ago"
    }
  },
  computed:{
     distance() {
      return this.$datefns.distanceInWords(
        new Date("2018-12-25T03:21:12.941Z"),
        new Date(),
        {
          locale: id,
          includeSeconds: true
        }
      );
      return result;
    },
    format() {
      return this.$datefns.format(
        new Date(2014, 6, 2),
        "[di tanggal] dddd MMMM YYYY",
        {
          locale: id
        }
      );
    },
    
  },
  mounted() {
    db.collection('users').doc(this.$store.state.users.uid).collection('notification').orderBy("createdAt", "desc").onSnapshot(res=>{
      let data = res.docs.map(e=>{
        return {id:e.id,...e.data()}
      })
      let notiffalse=data.filter(e=>{
        if(!e.dibaca){
          return e
        }
      })
      this.notification = data
      this.notification2 = notiffalse
    })
  }
};
</script>