<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br>
    </div>
    <br>
    <!-- <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>-->
    <!-- <GmapMap :center="center" :zoom="12" style="width:100%;  height: 400px;">
      <gmap-custom-marker :marker="marker">
        <img
          src="http://lorempixel.com/800/600/nature/"
          @click="test"
          style="width:100px;height:60px;"
        >
      </gmap-custom-marker>
      <gmap-custom-marker :marker="marker2">
        <img src="http://lorempixel.com/800/600/nature/" style="width:100px;height:60px;">
      </gmap-custom-marker>
    </GmapMap> -->
  </div>
</template>

<script>
// import GmapCustomMarker from "vue2-gmap-custom-marker";
export default {
  components: {
    // GmapCustomMarker
  },
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      marker: {
        lat: 50.60229509638775,
        lng: 3.0247059387528408
      },
      marker2: {
        lat: 200.60229509638775,
        lng: 3.0247059387528408
      },
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    test() {
      alert("y");
    },
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: this.marker.lat,
          lng: this.marker.lng
        };
        // this.center = {
        //   lat: position.coords.latitude,
        //   lng: position.coords.longitude
        // };
      });
    }
  }
};
</script>