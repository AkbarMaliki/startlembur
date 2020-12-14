<template>
  <div>
    <button type="button" @click="crud" class="btn btn-sm btn-primary">crud</button>
    <button type="button" @click="getData" class="btn btn-sm btn-primary">get</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/api/data/alluser")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    crud() {
      let fd = new FormData();
      fd.append("table", "User");
      fd.append("aksi", "data"); //data/insert/delete/update
      let id = "5cf8795a13dd04257cbc0e49";
      fd.append("email", "admin");
      fd.append("username", "akbar");
      fd.append("password", "maliki");
      axios.post(`http://localhost:3000/api/query/${id}`, fd).then(res => {
        console.log(res);
      });
    }
  }
};
</script>