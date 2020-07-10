<template>
  <div class="font-times">
    <div class="container-fluid">
      <div class="row">
        <div class="offset-sm-1 col-sm-7">
          <carousel
            :per-page="1"
            :autoplay="true"
            :mouse-drag="true"
            :loop="true"
            :centerMode="true"
            :adjustableHeight="true"
            :paginationEnabled="false"
            :paginationActiveColor="'blue'"
            :speed="1000"
            @pageChange="change"
            :navigateTo="navigasi"
          >
            <slide v-for="(item, index) in beritanya" :key="index+'beritanya1'">
              <img
                :src="item.gambar"
                class="kinoLightBox img-fluid z-depth-1"
                style="height:400px;width:100%;"
              />
              <div
                class="bg-carousel p-3"
                style="height:100px;z-index;100;margin-top:-100px;position:relative;color:White;"
              >
                <p style="font-size:22px;">
                  {{item.judul}}
                  <span
                    class="float-right"
                    style="font-size:14px;"
                  >{{format(item.createdAt)}}</span>
                </p>
                <p style="font-size:20px;">{{item.isi|truncate}}</p>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="col-sm-3">
          <!-- ITEM KANAN -->
          <div class="row">
            <div class="col-sm-7">
              <p class="font-bold uppercase">Popular Articles</p>
            </div>
            <div class="col-sm-5">
              <hr class="style2" />
            </div>
          </div>
          <!-- overflow scroll -->
          <div style="max-height:400px;overflow:scroll;">
            <!--  -->
            <div
              class="row hover1 mt-2"
              :class="{'hover2':index==posisi}"
              v-for="(item, index) in beritanya"
              :key="index+'beritanya2'"
              @click="navigasi=index"
            >
              <div class="col-sm-2 font-bold text-2xl">{{index+1}}.</div>
              <div class="col-sm-10">
                <img
                  :src="item.gambar"
                  class="kinoLightBox img-fluid z-depth-1 float-right"
                  style="width:100px;"
                />
                <p class="font-bold">{{item.judul}}</p>
                <p style="font-size:13px;">{{item.isi|truncate}}</p>
                <hr class="style5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
export default {
  data() {
    return {
      // ganti navigasi untuk mengganti page
      navigasi: 0,
      // posisi page berubah
      posisi: 0
    };
  },
  props: {
    beritas: {
      type: Array,
      required: true,
      default: () => ["_id"]
    }
  },
  computed: {
    beritanya() {
      let data = this.beritas;
      console.log(data);
      data = this.$_.orderBy(data, ["viewed"], ["desc"]);
      console.log(data);
      return data;
    }
  },
  methods: {
    change(item) {
      this.posisi = item;
    },
    format() {
      return this.$datefns.format(new Date(2014, 6, 2), "dddd MMMM YYYY", {
        locale: id
      });
    }
  },
  filters: {
    //  limit text 20 character panjangnya
    truncate(value) {
      if (value.length > 20) {
        value = value.substring(0, 57) + " ...";
      }
      return value;
    }
  }
};
</script>
<style scoped>
.bg-carousel {
  background: #343a40a9;
}
.hover1:hover {
  padding: 10px;
  cursor: pointer;
  background: #ccd4eca9;
  border-radius: 20px;
}
.hover2 {
  padding: 5px;
  cursor: pointer;
  background: #3085d43d;
  border-radius: 20px;
}
</style>