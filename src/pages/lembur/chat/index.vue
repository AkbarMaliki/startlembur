<template>
  <div>
    <div class="p-1 shadow-lg" style="background:#0099FF;">
      <button
        type="button"
        @click="$router.push('/lembur')"
        class="btn btn-sm font-bold text-uppercase underline"
        style
      >
        <span class="text-xl typcn typcn-arrow-left"></span> Kembali
      </button>
      
      <p class="text-center float-right mr-3 mt-1 font-times font-bold">
        <span class="typcn typcn-flow-switch"></span> CHAT ROOM
      <img src="@/static/logobtn.png" class="kinoLightBox img-fluid" style="height:20px;">
      </p>
    </div>
    <div class="p-1">
      <div class="shadow-lg rounded-lg p-2 text-sm" style="border:1px solid grey;" :class="{'bg-green-300':idku==1}">
        <img
          src="@/static/Kino.jpg"
          class="kinoLightBox img-fluid rounded-circle float-right"
          v-viewer
          style="border-radius: 20px;height:40px;width:40px;"
          alt
        />
        <span class="font-bold font-times">Taufik Akbar Maliki</span>
        <p
          class
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellendus perferendis vel distinctio, adipisci, non tenetur accusamus, sed quasi iure ipsa provident eaque officia consequatur molestiae. Sunt quo fuga veniam.</p>
        <p class="text-right">{{distanceToNow()}} Yang lalu</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
var id = require("date-fns/locale/id");
let db = firebase.firestore();
export default {
  data() {
    return {
        idku:1
    };
  },
  methods: {
    format() {
      return this.$datefns.format(new Date(2014, 6, 2), "dddd MMMM YYYY", {
        locale: id
      });
    },
    distanceToNow() {
      return this.$datefns.distanceInWordsToNow(
        new Date(2015, 0, 1, 0, 0, 15),
        {
          locale: id,
          includeSeconds: true
        }
      );
      //=> "3 days ago"
    }
  },
  layout: "lembur",
  mounted() {}
};
</script>