<template>
  <div>
    <button type="button" @click="$router.go(-1)" class="btn btn-sm btn-primary">KEMBALI</button>
    <div class="text-center">
      Json to Excel : &#9728;
      <br />
    </div>

    <br />
    <br />
    <JsonToExcel :data="listData" class="btns btns-sm bg-red-light text-black cursor-pointer" />

    <hr class="style13" />
    <div class="text-center">
      Excel to Json : &#9728;
      <br />
    </div>

    <ExcelToJson :data="listData" class="btns btns-sm bg-blue-light text-black cursor-pointer" />
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
  mounted() {
    axios.get(this.$store.state.url + "/api/data/blog").then(res => {
      console.log(res.data.data);
      this.listData = res.data.data;
    });
    this.$nuxt.$on("ExcelToJson", data => {
      console.log(data);
    });
  },
  components: {
    JsonToExcel,
    ExcelToJson
  }
};
</script>
