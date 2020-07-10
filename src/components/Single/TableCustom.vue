<template>
  <div>
    <!-- <tables :datatable="datanya" :unless="['fname','lname']" /> -->
    <div style="overflow-x:auto;width:100%;" v-if="ready">
      <!-- MODAL -->
      <transition-group
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <template v-if="modal">
          <div
            key="modalbackground"
            class="modalbackground"
            @click="modal=false"
            style="width:100%;z-index:89;position:fixed;background:rgba(22, 21, 21, 0.801);height:900px;top:0;"
          ></div>
          <div
            key="modalisi"
            class="modalny rounded-lg shadow-lg"
            style="z-index:100;overflow-y:scroll;position:fixed;top:10%;;width:60%;left:20%;height:500px;padding:30px 20px 20px 40px;background:white;box-shadow:2px 5px 8px 2px black;"
          >
            <div class="text-right">
              <button type="button" @click="modal=false" class="btn btn-sm btn-danger">x</button>
            </div>
            isi 
           
          </div>
        </template>
      </transition-group>

      <!-- ======================================================= -->
      <!-- DATATABLE MULAI DISINI -->
      <!-- SEARCH INPUT -->
      <div class="container flex flex-wrap mx-auto px-4 d-print-none">
        <div class="w-full sm:w-1/3">
          <div class>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="searchTable"
              type="text"
              placeholder="Search "
              v-model="search"
            >
          </div>
        </div>

        <!-- KOSONG -->
        <div class="w-full sm:w-1/3"></div>

        <!-- BUTTON LIST -->
        <div class="w-full sm:w-1/3">
          <div class="row">
            <div class="col-sm-6">
              <jsontoexcel :data="td" class/>
            </div>
            <div class="col-sm-6">
              <button
                type="button"
                @click="printy"
                class="btn btn-sm btn-outline-danger btn-block"
              >PDF</button>
            </div>
          </div>
        </div>
      </div>

      <!-- TABLE -->
      <div class="table-responsive-sm font-times p-3" style="box-shadow:1px 4px 6px black;">
        <!-- MOBILE -->
        <template v-if="mdq=='md' || mdq=='sm' || mdq=='xs'">
          <table
            style="width:100%;"
            class="table-print table table-sm table-bordered table-hover table-print rounded-lg"
          >
            <div v-for="(item, index) in td" :key="index+'item1'">
              <tr v-for="(item,key, index) in item" :key="index+'item2'">
                <td class="text-uppercase font-bold p-1">{{key}}</td>
                <td align="right" style="width:100%;padding-right:10px">{{item}}</td>
              </tr>
              <hr class="style13">
            </div>
          </table>
        </template>
        <template v-else>
          <!-- DEKSTOP -->
          <table
            class="table-print table table-sm table-bordered table-hover table-print border-black"
          >
            <!-- TABLE STYLE -->
            <thead class="mdb-color bg-grey">
              <tr class="text-black" style=" overflow:scroll;">
                <th class>#</th>
                <th
                  class="th-print cursor-pointer uppercase"
                  @click="sort(item)"
                  v-for="(item, index) in th"
                  :key="index+'th'"
                >
                  <p>
                    {{item}}
                    <template v-if="orderWith">
                      <span v-show="orderBy==item">
                        <span class="typcn typcn-arrow-down"></span>
                      </span>
                    </template>
                    <template v-else>
                      <span v-show="orderBy==item">
                        <span class="typcn typcn-arrow-up"></span>
                      </span>
                    </template>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in td" :key="index+'td'">
                <td>{{index+1}}</td>
                <td
                  @click="ambil(item);modal=true"
                  class="cursor-pointer"
                  v-for="(item2, index) in th"
                  :key="index+'th2'"
                >{{item[item2]}}</td>
              </tr>
            </tbody>
          </table>
        </template>
        <!-- FUNGSI DIBAWAH TABEL SEPERTI PAGINATION -->
        <div class="container flex flex-wrap mx-auto px-4">
          <div class="w-full sm:w-1/3">
            <select class="form-control" style="width:80px" v-model="selected">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div class="w-full sm:w-1/3"></div>
          <div class="w-full sm:w-1/3 text-right">
            <button
              type="button"
              @click="pagPrev"
              class="btn btn-sm btn-primary roundec-circle"
            >Prev</button>
            &nbsp;
            <button
              type="button"
              @click="pagNext"
              class="btn btn-sm btn-primary roundec-circle"
            >Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jsontoexcel from "@/components/backup/convert/JsonToExcel.vue";
import axios from "axios";
export default {
  components: {
    jsontoexcel
  },
  data() {
    return {
      ready: false,
      orderBy: "",
      orderWith: true,
      search: "",
      pilih: { name: "taufik", hobby: "coding" },
      // modal
      modal: false,
      modalAction: "preview",
      // pagination
      selected: 10,
      pagination: 1,
      temp1: 0,
      temp2: 10,
      // media queries javascript
      mdq: "xlg"
    };
  },
  props: {
    datanya: {
      type: Array,
      required: false,
      default: () => []
    },
    unless: {
      type: Array,
      required: false,
      default: () => ["_id"]
    },
    unlessForm: {
      type: Array,
      required: false,
      default: () => ["_id"]
    }
  },
  watch: {
    datanya() {
      if (this.datanya.length > 0) {
        this.ready = true;
      }
    },
    selected() {
      this.temp2 = this.pagination * this.selected;
      this.temp1 = this.temp2 - this.selected;
    },
    search() {
      this.pagination = 1;
      this.temp2 = this.pagination * this.selected;
      this.temp1 = this.temp2 - this.selected;
    }
  },
  computed: {
    // MODAL
    pilihForm() {
      let data = this.pilih;
      let keys = Object.keys(data);
      this.unlessForm.forEach(les => {
        delete data[les];
      });
      return data;
    },
    // DATATABLE
    bagi() {
      let data = this.datanya;
      data = data.length / 10;
      console.log(data);
      return data;
    },
    th() {
      let data = this.datanya;
      let keys = Object.keys(data[0]);
      keys = this.$_.difference(keys, this.unless);
      return keys;
    },
    td() {
      let that = this;
      let data = this.datanya;
      //! order fungsi
      if (this.orderBy.length > 0) {
        let ordernya = this.orderWith ? "asc" : "desc";
        data = this.$_.orderBy(data, [this.orderBy], [ordernya]);
      }
      //! search fungsi
      let keys = this.th;
      data = data.filter((v, i, a) => {
        let hasil = false;
        keys.filter(key => {
          if (typeof v[key] == "string") {
            if (v[key].toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
              hasil = true;
            }
          } else {
            if (v[key].toString().indexOf(this.search) != -1) {
              hasil = true;
            }
          }
        });
        if (hasil) return v;
      });
      data = data.map(e => {
        let obj = {};
        let kunci = Object.keys(e);
        kunci = that.$_.difference(kunci, that.unless);
        kunci.forEach(a => {
          obj[a] = e[a];
        });
        return obj;
      });
      data = data.slice(this.temp1, this.temp2);
      return data;
    }
  },
  methods: {
    // MODAL
    ambil(item) {
      this.pilih = item;
    },
    editAksi() {
      alert("edit");
    },
    simpanAksi() {
      alert("simpan");
    },
    // DATATABLE
    pagPrev() {
      this.pagination = this.pagination - 1;
      if (this.pagination == 0) {
        this.pagination = 1;
      }
      this.temp2 = this.pagination * this.selected;
      this.temp1 = this.temp2 - this.selected;
    },
    pagNext() {
      this.pagination = this.pagination + 1;
      if (this.pagination > this.bagi) {
        this.pagination = this.bagi;
      }
      this.temp2 = this.pagination * this.selected;
      this.temp1 = this.temp2 - this.selected;
    },
    printy() {
      window.print();
    },
    sort(item) {
      this.orderBy = item;
      this.orderWith = !this.orderWith;
    },
    mediaQueries() {
      this.mdq =
        window.innerWidth <= 576
          ? "sm"
          : window.innerWidth <= 768
          ? "md"
          : window.innerWidth <= 992
          ? "lg"
          : "xl";
    }
  },
  mounted() {
    let that = this;
    that.mediaQueries();
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        that.mediaQueries();
      });
    });
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      this.datanya = res.data;
      console.log(res);
    });
  }
};
</script>
<style>
.cl {
  color: rgba(46, 44, 44, 0.404);
}
@media print {
  .no-print,
  .no-print * {
    display: none !important;
  }
  .table-print {
    border: 1px solid black;
  }
  .th-print {
    background: black;
    color: white;
  }
  th {
    background: black;
  }
}
</style>