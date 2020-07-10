t<template>
  <div>
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="SearchItem">Search</label>
      <input
        id="SearchItem"
        placeholder="Search Item"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        v-model="searchItem"
      />
    </div>
    <button type="button" @click="orderBy='asc'" class="btn btn-sm btn-primary">ASC</button>
    <button type="button" @click="orderBy='desc'" class="btn btn-sm btn-primary">DESC</button>
    <ul>
      <li v-for="(item, index) in filteredData" :key="index">{{item.title}}</li>
    </ul>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <button
            type="button"
            v-for="(item, index) in tombolPagination"
            @click="changePagination(item)"
            :key="index+'pagination2'"
            v-show="item<jumlahPagination+1"
            class="btn btn-sm btn-warning rounded-circle"
            :class="{'bg-blue hover:bg-blue border-blue cursor-not-allowed text-red':item==pagination}"
            :disabled="item==pagination"
          >{{item}}</button>
        </div>
      </div>
    </div>
    <button type="button" @click="pagPrev" class="btn btn-sm btn-primary">Previous</button>
    <button type="button" @click="pagNext" class="btn btn-sm btn-primary">Next</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      datanya: "",
      temp1: 0,
      temp2: 10,
      pagination: 1,
      pembagiannya: 10,
      orderBy: "",
      orderWith: true,
      searchItem: ""
    };
  },
  computed: {
    jumlahPagination() {
      let data = this.datanya;
      return data.length / 10;
    },
    tombolPagination() {
      let data = this.pagination;
      // v-if != (current > max ) button nya
      let btn1 = data - 2;
      let btn2 = data - 1;
      let btn3 = data;
      let btn4 = data + 1;
      let btn5 = data + 2;
      let array = [btn1, btn2, btn3, btn4, btn5];
      if (array.indexOf(-1) != -1) {
        array = [1, 2, 3, 4, 5];
      } else if (array.indexOf(0) != -1) {
        array = [1, 2, 3, 4, 5];
      }
      return array;
    },
    filteredData() {
      let that = this;
      let data = this.datanya;
      //! order fungsi
      if (this.orderBy.length > 0) {
        data = this.$_.orderBy(data, ["title"], [this.orderBy]);
      }
      //! search fungsi
      if (data[0] != undefined) {
        let keys = Object.keys(data[0]);
        data = data.filter((v, i, a) => {
          let hasil = false;
          keys.filter(key => {
            if (typeof v[key] === "string") {
              if (
                v[key].toLowerCase().indexOf(this.searchItem.toLowerCase()) !=
                -1
              ) {
                hasil = true;
              }
            } else {
              if (v[key].toString().indexOf(this.searchItem) != -1) {
                hasil = true;
              }
            }
          });
          if (hasil) return v;
        });
      }
      // data = data.map(e => {
      //   let obj = {};
      //   let kunci = Object.keys(e);
      //   kunci = that.$_.difference(kunci, that.unless);
      //   kunci.forEach((a, index) => {
      //     if (kunci.find(e => e == that.date[index])) {
      //     } else {
      //       // obj[a] = 'tanggal'
      //     }
      //     console.log(typeof e[a]);
      //     obj[a] =
      //       typeof e[a] != "string"
      //         ? e[a]
      //         : new Date(e[a]) !== "Invalid Date" && !isNaN(new Date(e[a]))
      //         ? that.format(e[a])
      //         : e[a];
      //   });
      //   return obj;
      // });
      data = data.slice(this.temp1, this.temp2);
      return data;
    }
  },
  methods: {
    pagPrev() {
      this.pagination = this.pagination - 1;
      if (this.pagination == 0) {
        this.pagination = 1;
      }
      this.temp2 = this.pagination * this.pembagiannya;
      this.temp1 = Math.ceil(this.temp2) - this.pembagiannya;
    },
    pagNext() {
      this.pagination = this.pagination + 1;
      if (this.pagination > (this.jumlahPagination+1)) {
        this.pagination = Math.ceil(this.jumlahPagination);
      }
      this.temp2 = this.pagination * this.pembagiannya;
      this.temp1 = Math.ceil(this.temp2) - this.pembagiannya;
    },
    changePagination(pag) {
      this.pagination = pag;
      this.temp2 = this.pagination * this.pembagiannya;
      this.temp2 = Math.ceil(this.temp2);
      this.temp1 = this.temp2 - this.pembagiannya;
      this.temp1 = Math.ceil(this.temp1);
    }
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      this.datanya = res.data;
    });
  }
};
</script>
