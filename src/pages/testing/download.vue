<template>
  <div>
    <a href="http://localhost:3000/api/download/ba15beaf5fafdb5582dbf34299976740.xlsx">tes</a>
    <upload @upload="go" @link="linknya"/>
    <button type="button" @click="downloads" class="btn btn-sm btn-primary">Downloads</button>
  </div>
</template>
<script>
import axios from "axios";
import upload from "@/components/Single/UploadsNo.vue";
export default {
  data() {
    return {
      links: ""
    };
  },
  methods: {
    go(hasil) {
      console.log(hasil);
    },
    linknya(hasil) {
      this.links = hasil;
    },
    downloads() {
      axios
        .get(
          "http://localhost:3000/api/download/ba15beaf5fafdb5582dbf34299976740.xlsx",
          {
            headers: {
              Authorization: localStorage.getItem("auth._token.local")
            }
          }
        )
        .then(output => {
          // hasil.push(res);
          console.log(output);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    upload
  }
};
</script>