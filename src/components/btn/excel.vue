<template>
  <div>
    <JsonToExcel :data="listData" class="btns btns-sm" />
  </div>
</template>
<script>
import axios from "axios";
import JsonToExcel from "@/components/backup/convert/JsonToExcel.vue";
import ExcelToJson from "@/components/backup/convert/ExcelToJson.vue";
export default {
  data() {
    return {
      listData: []
    };
  },
  methods: {
    refresh() {
      let fd2 = new FormData();
      fd2.append("data", "select * from tbpenilaian"); // if empty = *
      fd2.append("database", " infolay3_test");
      fd2.append("aksi", "select");
      axios.post("http://localhost" + "/api/mysql/auto.php", fd2).then(res => {
        console.log(res.data.data);
        this.listData = res.data.data;
      });
    }
  },
  mounted() {
    let fd2 = new FormData();
    fd2.append("data", "select * from tbpenilaian"); // if empty = *
    fd2.append("database", " infolay3_test");
    fd2.append("aksi", "select");
    axios.post("http://localhost" + "/api/mysql/auto.php", fd2).then(res => {
      console.log(res.data);
      this.listData = res.data;
    });
  },
  components: {
    JsonToExcel,
    ExcelToJson
  }
};
</script>
