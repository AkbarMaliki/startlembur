<template>
  <div>
    <!-- FORM -->
    <!-- FORM -->
    <div class="tips">
      <button type="button" @click="print1" class="btn btn-sm btn-outline-info">
        <span class="typcn typcn-printer"></span>
      </button>
      <span class="tipstextB">print!</span>
    </div>
    <form
      action
      @submit.prevent="aksi == 'insert' ? insert() : aksi == 'update' ? update() : remove() "
    >
      <!-- FORM -->
      <tr>
        <td>UrutID_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="UrutID_"
              id="UrutID"
              name="UrutID"
              class="form-control form-control-sm"
              v-model="vdata.UrutID"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>Nama_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="Nama_"
              id="Nama"
              name="Nama"
              class="form-control form-control-sm"
              v-model="vdata.Nama"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>NIP_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="NIP_"
              id="NIP"
              name="NIP"
              class="form-control form-control-sm"
              v-model="vdata.NIP"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>JK_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="JK_"
              id="JK"
              name="JK"
              class="form-control form-control-sm"
              v-model="vdata.JK"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>TempatLahir_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="TempatLahir_"
              id="TempatLahir"
              name="TempatLahir"
              class="form-control form-control-sm"
              v-model="vdata.TempatLahir"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>TglLahir_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="TglLahir_"
              id="TglLahir"
              name="TglLahir"
              class="form-control form-control-sm"
              v-model="vdata.TglLahir"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>Agama_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="Agama_"
              id="Agama"
              name="Agama"
              class="form-control form-control-sm"
              v-model="vdata.Agama"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>Pangkat_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="Pangkat_"
              id="Pangkat"
              name="Pangkat"
              class="form-control form-control-sm"
              v-model="vdata.Pangkat"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>Jabatan_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="Jabatan_"
              id="Jabatan"
              name="Jabatan"
              class="form-control form-control-sm"
              v-model="vdata.Jabatan"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>PendTerakhir_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="PendTerakhir_"
              id="PendTerakhir"
              name="PendTerakhir"
              class="form-control form-control-sm"
              v-model="vdata.PendTerakhir"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>NoPengangkatan_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="NoPengangkatan_"
              id="NoPengangkatan"
              name="NoPengangkatan"
              class="form-control form-control-sm"
              v-model="vdata.NoPengangkatan"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>TglPengangkatan_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="TglPengangkatan_"
              id="TglPengangkatan"
              name="TglPengangkatan"
              class="form-control form-control-sm"
              v-model="vdata.TglPengangkatan"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>Gambar_</td>
        <td>&nbsp;:&nbsp;</td>
        <td>
          <div class="sm-form">
            <input
              type="text"
              placeholder="Gambar_"
              id="Gambar"
              name="Gambar"
              class="form-control form-control-sm"
              v-model="vdata.Gambar"
              disabled
            />
            <upload @upload="go" @link="linknya" />
          </div>
        </td>
      </tr>
      <!-- FORM -->
      <!-- SUBMIT -->
      <br />
      <button
        type="submit"
        class="btn btn-sm btn-primary ml-2"
        v-text="aksi == 'insert' ? 'insert' : aksi == 'update' ? 'update' : 'remove'"
      ></button>
      <!-- SUBMIT -->
    </form>
    <hr class="style13" />
    <button type="button" @click="aksi='insert';clearInput()" class="btn btn-sm btn-danger">insert</button>
    <button type="button" @click="aksi='update'" class="btn btn-sm btn-danger">update</button>
    <button type="button" @click="aksi='remove'" class="btn btn-sm btn-danger">remove</button>

    <!-- <tables :datatable="datanya" :unless="['fname','lname']" /> -->
    <div style="overflow-x:auto;width:100%;" v-if="ready">
      <!-- MODAL -->
      <!-- ======================================================= -->
      <!-- DATATABLE MULAI DISINI -->
      <!-- SEARCH INPUT -->
      <div class="container flex flex-wrap mx-auto px-4 d-print-none">
        <div class="w-full sm:w-1/3">
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <span class="typcn typcn-zoom"></span>
              </div>
            </div>
            <input
              type="text"
              class="form-control py-0"
              id="searchTable"
              placeholder="Cari Data ... "
              v-model="search"
            />
          </div>
        </div>
        <!-- KOSONG -->
        <div class="w-full sm:w-1/3"></div>
        <!-- BUTTON LIST -->
        <div class="w-full sm:w-1/3">
          <div class="row">
            <div class="col-sm-3 order-2">
              <jsontoexcel :data="td" class />
            </div>
            <div class="col-sm-3 order-3">
              <div class="tips">
                  <button type="button" @click="print2" class="btn btn-sm btn-outline-danger">
                    <span class="typcn typcn-document-text"></span>
                  </button>
                  <span class="tipstextB">Print Laporan</span>
              </div>
            </div>
            <div class="col-sm-4 order-1">
              <select class="form-control" style="width:80px" v-model="selected">
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
                <option :value="1000000">Semua</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- TABLE -->
      <div
        class="table-responsive-sm font-times p-3"
        style="box-shadow:1px 4px 6px black;overflow:scroll;"
        v-dragscroll
      >
        <template>
          <!-- DEKSTOP -->
          <table
            class="table-print table-sm table-bordered table-striped table-hover table-print border-black"
            style=" overflow-x: scroll;
    overflow-y: hidden;
    height: 80px;
    white-space:nowrap"
          >
            <!-- TABLE STYLE -->
            <thead class="mdb-color" :style="{background:thbackground}">
              <tr class="text-white" style="overflow:scroll;color:white;">
                <th class>#</th>
                <th
                  scope="col"
                  class="th-print cursor-pointer uppercase"
                  @click="sort(item)"
                  v-for="(item, index) in thnya"
                  :key="index+'th'"
                  v-show="!less.includes(item)"
                >
                  <span :style="{color:thcolor}">
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
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index3) in td" :key="index3+'td'">
                <td style="border:1px solid black;">{{(index3+temp1)+1}}</td>
                <no-ssr>
                  <v-touch
                    tag="td"
                    v-on:tap="ambil(item,index3);modal=true"
                    class="cursor-pointer"
                    style="border:1px solid black;"
                    v-for="(item2, indexs) in thnya"
                    :key="indexs+'th2'"
                    v-html="item[item2]"
                    v-show="!less.includes(item2)"
                  ></v-touch>
                </no-ssr>
              </tr>
            </tbody>
          </table>
        </template>
        <!-- FUNGSI DIBAWAH TABEL SEPERTI PAGINATION -->
        <div class="float-right">
          <template v-if="datanya.length>=selected">
            <button
              type="button"
              @click="pagPrev"
              class="btn btn-sm btn-outline-info roundec-circle"
            >Prev</button>
            &nbsp;
            <button
              type="button"
              @click="pagNext"
              class="btn btn-sm btn-info roundec-circle"
            >Next</button>
          </template>
          <template v-else>
            <button
              type="button"
              @click="pagPrev"
              class="btn btn-sm btn-black roundec-circle"
              disabled
            >Prev</button>
            &nbsp;
            <button
              type="button"
              @click="pagNext"
              class="btn btn-sm btn-black roundec-circle"
              disabled
            >Next</button>
          </template>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-center">Loading Table ...</p>
    </div>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
import upload from "@/components/Single/UploadsNo.vue";
import jsontoexcel from "@/components/backup/convert/JsonToExcel.vue";
import axios from "axios";
export default {
  components: {
    jsontoexcel,
    upload
  },
  data() {
    return {
      // style
      thbackground: "black",
      thcolor: "red",
      // Data datable
      datanya: [],
      vdata: {},
      ready: false,
      search: "",
      pilih: { name: "taufik", hobby: "coding" },
      thnya: {},
      err: false,
      less: ["UrutID", "Gambar"],
      // modal
      modal: false,
      modalAction: "preview",
      // pagination
      selected: 10,
      pagination: 1,
      temp1: 0,
      temp2: 10,
      orderBy: "",
      orderWith: true,
      // media queries javascript
      mdq: "xlg",
      //kirim
      kirim: {},
      //form
      aksi: "insert",
      formOn: false,
      updateOn: false
    };
  },
  methods: {
    insert() {
      let fd = new FormData();

      fd.append(
        "data",
        `Insert into bamban_tbperangkat (Nama,NIP,JK,TempatLahir,TglLahir,Agama,Pangkat,Jabatan,PendTerakhir,NoPengangkatan,TglPengangkatan,Gambar) VALUES ('${this.vdata.Nama}','${this.vdata.NIP}','${this.vdata.JK}','${this.vdata.TempatLahir}','${this.vdata.TglLahir}','${this.vdata.Agama}','${this.vdata.Pangkat}','${this.vdata.Jabatan}','${this.vdata.PendTerakhir}','${this.vdata.NoPengangkatan}','${this.vdata.TglPengangkatan}','${this.vdata.Gambar}')`
      );
      this.$nuxt.$emit("busy", true);
      axios
        .post(this.$store.state.database + "/api/mysql/auto.php", fd, {
          headers: {
            Authorization: localStorage.getItem("auth.local")
          }
        })
        .then(res => {
          this.$nuxt.$emit("busy", false);
          console.log(res);
          alert("Simpan Data Berhasil!");
          this.refreshData();
        })
        .catch(err => {
          this.$nuxt.$emit("busy", false);
          this.refreshData();
        });
    },
    update() {
      let fd = new FormData();

      fd.append(
        "data",
        `UPDATE bamban_tbperangkat SET Nama='${this.vdata.Nama}',NIP='${this.vdata.NIP}',JK='${this.vdata.JK}',TempatLahir='${this.vdata.TempatLahir}',TglLahir='${this.vdata.TglLahir}',Agama='${this.vdata.Agama}',Pangkat='${this.vdata.Pangkat}',Jabatan='${this.vdata.Jabatan}',PendTerakhir='${this.vdata.PendTerakhir}',NoPengangkatan='${this.vdata.NoPengangkatan}',TglPengangkatan='${this.vdata.TglPengangkatan}',Gambar='${this.vdata.Gambar}' Where UrutID = '${this.vdata.UrutID}'`
      );
      this.$nuxt.$emit("busy", true);
      axios
        .post(this.$store.state.database + "/api/mysql/auto.php", fd, {
          headers: {
            Authorization: localStorage.getItem("auth.local")
          }
        })
        .then(res => {
          this.$nuxt.$emit("busy", false);
          console.log(res);
          alert("Update Data Berhasil!");
          this.refreshData();
        })
        .catch(err => {
          this.$nuxt.$emit("busy", false);
          this.refreshData();
        });
    },
    remove() {
      let fd = new FormData();

      fd.append(
        "data",
        `DELETE FROM bamban_tbperangkat WHERE  UrutID =  '${this.vdata.UrutID}'`
      );
      if (confirm("Yakin dihapus?")) {
        this.$nuxt.$emit("busy", true);
        axios
          .post(this.$store.state.database + "/api/mysql/auto.php", fd, {
            headers: {
              Authorization: localStorage.getItem("auth.local")
            }
          })
          .then(res => {
            this.$nuxt.$emit("busy", false);
            console.log(res);
            alert("Delete Data Berhasil!");
            let keys = Object.keys(this.vdata);
            keys.forEach(key => {
              this.vdata[key] = "";
            });
            this.refreshData();
          })
          .catch(err => {
            this.$nuxt.$emit("busy", false);
            let keys = Object.keys(this.vdata);
            keys.forEach(key => {
              this.vdata[key] = "";
            });
            this.refreshData();
          });
      }
    },
    ambil(item, index) {
      window.scrollTo(0, 0);
      let that = this;
      this.updateOn = true;
      this.formOn = true;
      let clone = this.$_.clone(item);
      // clone["TGL_LHR"] = this.$datefns.format(
      //   new Date(clone["TGL_LHR"]),
      //   "YYYY-MM-dd"
      // );
      console.log(clone);
      this.vdata = clone;
      this.pilih = item;
    },
    print1() {
      this.$router.push("/testing/datatable/print");
      this.$store.state.print2 = [];
      this.$store.state.print2.push(this.pilih);
      alert("print satu");
    },
    print2() {
      this.$router.push("/testing/datatable/print");
      this.$store.state.print2 = this.td;
      alert("print banyak");
    },
    linknya(hasil) {
      console.log("link", hasil);
      this.vdata.Gambar = hasil;
      this.$forceUpdate();
    },
    go(hasil) {
      console.log("uploaded");
    },
    clearInput() {
      this.formOn = true;
      let keys = Object.keys(this.vdata);
      keys.forEach(key => {
        this.vdata[key] = "";
      });
    },
    refreshData() {
      let fd2 = new FormData();
      fd2.append("data", "select * from bamban_tbperangkat"); //if empty = *
      axios
        .post(this.$store.state.database + "/api/mysql/auto.php", fd2, {
          headers: {
            Authorization: localStorage.getItem("auth.local")
          }
        })
        .then(res => {
          console.log("mysql auto", res);
          setTimeout(() => {
            (function() {
              var thElm;
              var startOffset;
              Array.prototype.forEach.call(
                document.querySelectorAll("table th"),
                function(th) {
                  th.style.position = "relative";
                  var grip = document.createElement("div");
                  grip.innerHTML = "&nbsp;";
                  grip.style.top = 0;
                  grip.style.right = 0;
                  grip.style.bottom = 0;
                  grip.style.width = "5px";
                  grip.style.position = "absolute";
                  grip.style.cursor = "col-resize";
                  grip.addEventListener("mousedown", function(e) {
                    thElm = th;
                    startOffset = th.offsetWidth - e.pageX;
                  });
                  th.appendChild(grip);
                }
              );
              document.addEventListener("mousemove", function(e) {
                if (thElm) {
                  thElm.style.width = startOffset + e.pageX + "px";
                }
              });
              document.addEventListener("mouseup", function() {
                thElm = undefined;
              });
            })();
            this.datanya = res.data;
            let keys = Object.keys(res.data[0]);
            keys = this.$_.difference(keys, this.unless);
            this.thnya = keys;
          }, 1000);
        });
    },
    edits() {
      let that = this;
      setTimeout(() => {
        that.$nuxt.$emit("editTable1", obj);
      }, 1000);
    },
    modalKey(e) {
      if (e.key == "Escape") {
        this.modal = false;
      }
    },
    isDate(value) {
      var dateFormat;
      if (toString.call(value) === "[object Date]") {
        return true;
      }
      if (typeof value.replace === "function") {
        value.replace(/^s+|s+$/gm, "");
      }
      dateFormat = /(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/;
      return dateFormat.test(value);
    },
    // MODAL
    distance() {
      return this.$datefns.distanceInWords(
        new Date("2018-12-25T03:21:12.941Z"),
        new Date(),
        {
          locale: id,
          includeSeconds: true
        }
      );
      return result;
    },
    format(date) {
      return this.$datefns.format(date, "DD MMMM YYYY", {
        locale: id
      });
    },
    distanceToNow() {
      return this.$datefns.distanceInWordsToNow(
        new Date(2015, 0, 1, 0, 0, 15),
        {
          locale: id,
          includeSeconds: true
        }
      );
      //=> "3 days ago"
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
  props: {
    unless: {
      type: Array,
      required: false,
      default: () => ["_id"]
    },
    unlessForm: {
      type: Array,
      required: false,
      default: () => ["_id"]
    },
    date: {
      type: Array,
      required: false,
      default: () => ["ditanyakan"]
    }
  },
  watch: {
    modal() {
      if (this.modal) {
        document.addEventListener("keydown", this.modalKey);
      } else {
        document.removeEventListener("keydown", this.modalKey);
        document.removeEventListener("keydown", this.modalKey);
        document.removeEventListener("keydown", this.modalKey);
      }
    },
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
      let keys = this.thnya;
      data = data.filter((v, i, a) => {
        let hasil = false;
        keys.filter(key => {
          if (typeof v[key] == "string") {
            if (v[key].toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
              hasil = true;
            }
          } else {
            if (v[key] != null) {
              if (v[key].toString().indexOf(this.search) != -1) {
                hasil = true;
              }
            } else {
            }
          }
        });
        if (hasil) return v;
      });
      data = data.map(e => {
        let obj = {};
        let kunci = Object.keys(e);
        kunci = that.$_.difference(kunci, that.unless);
        kunci.forEach((a, index) => {
          if (kunci.find(e => e == that.date[index])) {
          } else {
            // obj[a] = 'tanggal'
          }

          obj[a] = e[a];
          // typeof e[a] != "string"
          //   ? e[a]
          //   : new Date(e[a]) !== "Invalid Date" && !isNaN(new Date(e[a]))
          //   ? that.isDate(e[a])
          //     ? that.format(e[a])
          //     : e[a]
          //   : e[a];
        });
        return obj;
      });
      data = data.slice(this.temp1, this.temp2);
      return data;
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
    this.refreshData();
  }
};
</script><style scoped>
@header_background_color: #333;
@header_text_color: #FDFDFD;
@alternate_row_background_color: #DDD;

@table_width: 750px;
@table_body_height: 300px;
@column_one_width: 200px;
@column_two_width: 200px;
@column_three_width: 350px;

.fixed_headers {
  width: @table_width;
  table-layout: fixed;
  border-collapse: collapse;

  th {
    text-decoration: underline;
  }
  th,
  td {
    padding: 5px;
    text-align: left;
  }

  td:nth-child(1),
  th:nth-child(1) {
    min-width: @column_one_width;
  }
  td:nth-child(2),
  th:nth-child(2) {
    min-width: @column_two_width;
  }
  td:nth-child(3),
  th:nth-child(3) {
    width: @column_three_width;
  }

  thead {
    background-color: @header_background_color;
    color: @header_text_color;
    tr {
      display: block;
      position: relative;
    }
  }
  tbody {
    display: block;
    overflow: auto;
    width: 100%;
    height: @table_body_height;
    tr:nth-child(even) {
      background-color: @alternate_row_background_color;
    }
  }
}

.old_ie_wrapper {
  height: @table_body_height;
  width: @table_width;
  overflow-x: hidden;
  overflow-y: auto;
  tbody {
    height: auto;
  }
}
.cl {
  color: rgba(46, 44, 44, 0.404);
}
</style>