<template>
  <div>
    {{$store.state.gpscount.length}}
    {{$store.state.gpsuniq}}
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
export default {
  data() {
    return {};
  },
  methods: {
    trackuser() {
      let that = this;
      this.$store.state.watchgps = navigator.geolocation.watchPosition(
        position => {
          that.$store.state.gpscount.push(position.coords.longitude);
          that.$store.state.gpsuniq = _.uniq(that.$store.state.gpscount);
          if (that.$store.state.gpsuniq.length > 10) {
            db.collection("users")
              .doc(this.$store.state.users.uid)
              .set(
                {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                },
                { merge: true }
              )
              .then(res => {
                console.log("update gps user");
                that.$store.state.gpscount = [];
                that.$store.state.gpsuniq = [];
              });
          }
          that.position.lat = position.coords.latitude;
          that.position.lng = position.coords.longitude;
          that.$forceUpdate();
        },
        error => {
          console.log(error.message);
        }
      );
    }
  },
  mounted() {
    this.trackuser();
  }
};
</script>