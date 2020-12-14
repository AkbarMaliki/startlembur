<template>
  <div>
    {{vdata.upload}}
    <upload @upload="go" @link="linknya" />
  </div>
</template>
<script>
import upload from "@/components/Single/UploadsNo.vue";
import axios from "axios";
export default {
  components: {
    upload
  },
  data() {
    return {
      vdata: {}
    };
  },
  methods: {
    linknya(hasil) {
      console.log("link", hasil);
      this.vdata.upload = hasil;
      this.$forceUpdate();
    },
    go(hasil) {
      console.log("uploaded");
    }
  }
};
</script>