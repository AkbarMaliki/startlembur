<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 bg-dark">
          <div class="offset-sm-1 col-sm-10" style="color:White;">
            <tr>
              <td class="tdberitatext">Berita Terkini</td>
              <td class="tdberitatext">&nbsp;:&nbsp;</td>
              <td class="tdberitatext">
                <button type="button" class="btn btn-sm btn-dark" @click="backward">{{'\<'}}</button>
              </td>
              <td class="tdberitatext">
                <button type="button" class="btn btn-sm btn-dark" @click="forward">{{'\>'}}</button>
              </td>
              <td
                v-for="(item, index) in beritas"
                :key="index+'beritass'"
                v-show="posisi==index"
                class="tdberitatext"
                style="font-size:14px;"
              >{{item.isi|truncate}} 1 hari yang lalu</td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posisi: 0
    };
  },
  methods: {
    forward() {
      this.posisi++;
      if (this.posisi > this.beritas.length - 1) {
        this.posisi = 0;
      }
    },
    backward() {
      this.posisi--;
      if (this.posisi < 0) {
        this.posisi = this.beritas.length - 1;
      }
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
  },
  props: {
    beritas: {
      type: Array,
      required: true,
      default: () => ["_id"]
    }
  },
  mounted() {
    setInterval(() => {
      this.posisi++;
      if (this.posisi > this.beritas.length - 1) {
        this.posisi = 0;
      }
    }, 2000);
  }
};
</script>
<style scoped>
.tdberitatext {
  border-left: 1px solid white;
  padding: 5px;
}
</style>