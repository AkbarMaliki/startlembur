<template>
  <div>
    <input
      type="file"
      multiple="false"
      id="sheets"
      accept="application/x-iwork-keynote-sffnumbers, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      @change="convert"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      datanya: [],
      vdata: {},
      finis: false
    };
  },
  methods: {
    convert(e) {
      let that = this;
      var reader = new FileReader();
      this.$nuxt.$emit("busy", false);
      reader.onload = function(event) {
        var data = event.target.result;
        var workbook = XLSX.read(data, { type: "binary" });
        workbook.SheetNames.forEach(function(sheetName) {
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheetName]
          );
          var json_object = XL_row_object;
          console.log(json_object);
          let keys = Object.keys(json_object[0]);
          console.log(json_object);
          // !  JSON OBJECT DISINI HASIL NYA
          json_object.forEach(e => {});
        });
      };
      reader.onerror = function(event) {
        console.error("file gagal proses" + event.target.error.code);
      };
      reader.readAsBinaryString(e.target.files[0]);
    }
  },
  head() {
    return {
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/xlsx.full.min.js"
        }
      ]
    };
  }
};
</script>