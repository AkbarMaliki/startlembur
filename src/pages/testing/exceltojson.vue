<template>
  <div>
    <div class="text-center">
      Excel to Json : &#9728;
      <br />
    </div>

    <button type="button" @click="$router.go(-1)" class="btn btn-sm btn-primary">KEMBALI</button>
    <br />
    <br />
    <p>JSON TO EXCEL </p>
    <JsonToExcel :data="listData" class="btns btns-sm bg-red-light text-black cursor-pointer" />
    <br />
    <br />
    <p>JSON TO EXCEL dengan link bisa buat cordova</p>
    <a href="https://infolayanans.space/api/mysql/excel.php?data=select * from test">EXCEL</a>
  </div>
</template>
<script>
import axios from "axios";
import JsonToExcel from "@/components/backup/convert/JsonToExcel.vue";
export default {
  data() {
    return {
      listData: []
    };
  },
  mounted() {
    axios(this.$store.state.url + "/api/data/blog").then(res => {
      console.log(res.data.data);
      this.listData = res.data.data;
    });
  },
  components: {
    JsonToExcel
  }
};
</script>
