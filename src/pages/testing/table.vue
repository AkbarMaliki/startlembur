<template>
  <div>
    <TableKu/>
  </div>
</template>
<script>
import TableKu from "@/components/Single/Table.vue";
import axios from "axios";
export default {
  components: {
    TableKu
  },
  data() {
    return {
      dataTable: []
    };
  },
  mounted() {
    axios.get("https://banua.now.sh/api/data/blog").then(res => {
      console.log(res);
      this.dataTable = res.data.data;
    });
  }
};
</script>