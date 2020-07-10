<template>
  <div>
    <div class="container-fluid">
      <div class="row" id="top1">
        <div class="col-sm-3">
          <template v-if="formOn">
            <div>
              <div v-if="editOn" style="font-family:times new roman;">
                Edit Data
                <span class="typcn typcn-tabs-outline"></span>
                <button
                  type="button"
                  @click="print()"
                  class="btn btn-sm btn-outline-info float-right"
                >
                  Print
                  <span class="typcn typcn-printer"></span>
                </button>
              </div>
              <div v-else style="font-family:times new roman;">
                Tambah Data
                <span class="typcn typcn-plus"></span>
              </div>
              <hr class="style13" />
            </div>
          </template>
        </div>
        <div class="col-sm-9 text-right">
          <button
            type="button"
            @click="saveNya();formOn=true;editOn=false;saveOn=true"
            class="btn btn-sm"
            :class="{'btn-outline-primary':!editOn,'btn-outline-dark':editOn}"
          >
            Tambah Data
            <span class="typcn typcn-plus"></span>
          </button>
        </div>
      </div>
    </div>
    <br />
    <br />
    <template v-if="formOn">
      <div>
        <!-- !! TEMPAT  -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <tr>
                <td>Urut ID</td>
                <td>&nbsp;:&nbsp;</td>
                <td>
                  <div class="sm-form">
                    <input
                      type="text"
                      placeholder="Urut ID"
                      id="UrutID"
                      name="UrutID"
                      class="form-control form-control-sm"
                      v-model="vdata.UrutID"
                      disabled
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>Nama</td>
                <td>&nbsp;:&nbsp;</td>
                <td>
                  <div class="sm-form">
                    <input
                      type="text"
                      placeholder="Nama"
                      id="Nama"
                      name="Nama"
                      class="form-control form-control-sm"
                      v-model="vdata.Nama"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>Jenis Kelamin</td>
                <td>&nbsp;:&nbsp;</td>
                <td>
                  <input type="radio" id="one" name="JK" value="Laki - Laki" v-model="vdata.JK" />
                  <label for="one">Laki - Laki</label>
                  <br />
                  <input type="radio" id="one" name="JK" value="Perempuan" v-model="vdata.JK" />
                  <label for="two">Perempuan</label>
                </td>
              </tr>
              <br />

              <tr>
                <td>Tempat Lahir</td>
                <td>&nbsp;:&nbsp;</td>
                <td>
                  <div class="sm-form">
                    <input
                      type="text"
                      placeholder="Tempat Lahir"
                      id="TempatLahir"
                      name="TempatLahir"
                      class="form-control form-control-sm"
                      v-model="vdata.TempatLahir"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>Tgl Lahir</td>
                <td>&nbsp;:&nbsp;</td>
                <td>
                  <div class="sm-form">
                    <input
                      type="text"
                      placeholder="Tgl Lahir"
                      id="TglLahir"
                      name="TglLahir"
                      class="form-control form-control-sm"
                      v-model="vdata.TglLahir"
                    />
                  </div>
                </td>
              </tr>
            </div>
            <div class="col-sm-6">
              <tr>
                <td>Agama</td>
                <td>&nbsp;:&nbsp;</td>
                <td>
                  <div class="sm-form">
                    <input
                      type="text"
                      placeholder="Agama"
                      id="Agama"
                      name="Agama"
                      class="form-control form-control-sm"
                      v-model="vdata.Agama"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>Jabatan</td>
                <td>&nbsp;:&nbsp;</td>
                <td>
                  <div class="sm-form">
                    <input
                      type="text"
                      placeholder="Jabatan"
                      id="Jabatan"
                      name="Jabatan"
                      class="form-control form-control-sm"
                      v-model="vdata.Jabatan"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>Pend Terakhir</td>
                <td>&nbsp;:&nbsp;</td>
                <td>
                  <div class="sm-form">
                    <input
                      type="text"
                      placeholder="Pend Terakhir"
                      id="PendTerakhir"
                      name="PendTerakhir"
                      class="form-control form-control-sm"
                      v-model="vdata.PendTerakhir"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>No Pengangkatan</td>
                <td>&nbsp;:&nbsp;</td>
                <td>
                  <div class="sm-form">
                    <input
                      type="text"
                      placeholder="No Pengangkatan"
                      id="NoPengangkatan"
                      name="NoPengangkatan"
                      class="form-control form-control-sm"
                      v-model="vdata.NoPengangkatan"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>Tgl Pengangkatan</td>
                <td>&nbsp;:&nbsp;</td>
                <td>
                  <div class="sm-form">
                    <input
                      type="text"
                      placeholder="Tgl Pengangkatan"
                      id="TglPengangkatan"
                      name="TglPengangkatan"
                      class="form-control form-control-sm"
                      v-model="vdata.TglPengangkatan"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Gambar</td>
                <td>&nbsp;:&nbsp;</td>
                <td>
                  <div class="tips">
                    <div class="sm-form">
                      <input
                        type="text"
                        placeholder="-"
                        id="Gambar"
                        name="Gambar"
                        class="form-control form-control-sm"
                        v-model="vdata.Gambar"
                        disabled
                        required
                      />
                      <upload @upload="go" @link="linknya" />
                    </div>
                    <span class="tipstextB">Klik Download</span>
                  </div>
                  <img
                    v-if="vdata.Gambar"
                    :src="$store.state.url+vdata.Gambar"
                    class="kinoLightBox img-fluid rounded-top z-depth-2"
                    style="height:150px;"
                    alt="no found"
                  />
                </td>
              </tr>
            </div>
          </div>
        </div>
        <!-- TEMPAT -->

        <template v-if="editOn">
          <div>
            <button
              type="button"
              @click="editData()"
              class="btn btn-sm btn-dark btn-circle"
            >Ubah Data!</button>
          </div>
        </template>
        <template v-else>
          <div>
            <button
              type="button"
              @click="saveData()"
              class="btn btn-sm btn-dark btn-circle"
            >Simpan Data!</button>
          </div>
        </template>

        <br />
        <br />
        <br />

        <!-- TEMPAT END -->
      </div>
    </template>
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
            style="width:100%;z-index:89;margin-left:-50px;position:fixed;background:rgba(22, 21, 21, 0.801);height:900px;top:0;"
          ></div>
          <div
            key="modalisi"
            class="modalny rounded-lg shadow-lg"
            style="z-index:100;overflow-y:scroll;position:fixed;top:2%;;width:90%;left:5%;height:630px;padding:30px 20px 20px 40px;background:white;box-shadow:2px 5px 8px 2px black;"
          >
            <div class="float-right">
              <button
                type="button"
                @click="modal=false"
                class="btn btn-sm btn-outline-danger"
                style=" position:absolute;right:50px;"
              >x</button>
            </div>
            <div class="float-left">
              <button
                type="button"
                @click="modal=!modal;deleteData()"
                class="btn btn-sm btn-outline-danger"
              >
                <span class="typcn typcn-backspace-outline"></span>
                Hapus Data !
              </button>
            </div>
            <br />
            <template v-if="modalAction=='preview'">
              <hr class="style10" />
              <table class="font-times text-sm sm:text-lg">
                <tr v-for="(item, key,index) in pilih" :key="index">
                  <td class="capitalize font-bold" style=" padding-left:23px;">{{key}}</td>
                  <td>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</td>
                  <td :class="{'float-right':key=='Gambar'}">
                    <template v-if="key=='Gambar'">
                      <div>
                        <img
                          :src="$store.state.url+item"
                          class="kinoLightBox img-fluid rounded-top z-depth-2"
                          style="height:150px;"
                          alt="no found"
                        />
                      </div>
                    </template>
                    <template v-else>
                      <div>{{item}}</div>
                    </template>
                  </td>
                </tr>
              </table>
            </template>
            <template v-else-if="modalAction=='edit'">
              <div>
                <p class="text-center font-times">EDIT FORM</p>
                <form action @submit.prevent="editAksi">
                  <div class="mb-4" v-for="(item,key, index) in pilihForm" :key="index">
                    <label
                      class="uppercase block text-grey-darker text-sm font-bold mb-2"
                      :for="key"
                    >{{key}}</label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                      :id="key"
                      type="text"
                      :placeholder="key"
                      :value="item"
                    />
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-md btn-success">Edit</button>
                  </div>
                </form>
              </div>
            </template>
            <template v-else-if="modalAction=='simpan'">
              <div>
                <p class="text-center font-times">SIMPAN FORM</p>
                <form action @submit.prevent="simpanAksi">
                  <div class="mb-4" v-for="(item,key, index) in pilihForm" :key="index">
                    <label
                      class="uppercase block text-grey-darker text-sm font-bold mb-2"
                      :for="key"
                    >{{key}}</label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                      :id="key"
                      type="text"
                      :placeholder="key"
                    />
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-md btn-success">Simpan</button>
                  </div>
                </form>
              </div>
            </template>
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-12">
                  <hr class="style13" />
                </div>
                <div class="col-sm-6"></div>
                <div class="col-sm-6"></div>
              </div>
            </div>
          </div>
        </template>
      </transition-group>

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
            <div class="col-sm-2 order-2">
              <jsontoexcel :data="td" class />
            </div>
            <div class="col-sm-3 order-3">
              <button type="button" @click="printy" class="btn btn-sm btn-outline-danger">
                <img src="@/static/icon/pdf.png" style="height:28px;" alt />
              </button>
            </div>
            <div class="col-sm-4 order-1">
              <select class="form-control" style="width:80px" v-model="selected">
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
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
        <!-- MOBILE -->
        <!-- <template v-if="mdq=='md' || mdq=='sm' || mdq=='xs'">
          <table
            style="width:100%;"
            class="table-print table table-sm table-bordered table-hover table-print rounded-lg"
          >
            <div v-for="(item, index) in td" :key="index+'item1'">
              <tr v-for="(item,key, index) in item" :key="index+'item2'">
                <td class="text-uppercase font-bold p-1">{{key}}</td>
                <td align="right" style="width:100%;padding-right:10px" v-html="item"></td>
              </tr>
              <hr class="style13">
            </div>
          </table>
        </template>
        <template v-else>
        -->
        <template>
          <!-- DEKSTOP -->
          <table
            class="table-print table-sm table-bordered table-hover table-print border-black"
            style=" overflow-x: scroll;
    overflow-y: hidden;
    height: 80px;
    white-space:nowrap"
          >
            <!-- TABLE STYLE -->
            <thead class="mdb-color bg-black">
              <tr class="text-white" style="overflow:scroll;color:white;">
                <th class>#</th>
                <th
                  scope="col"
                  class="th-print cursor-pointer uppercase"
                  @click="sort(item)"
                  v-for="(item, index) in thnya"
                  :key="index+'th'"
                  v-show="item!='UrutID' && item!='Gambar'"
                >
                  <span style="color:white;">
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
                <td>{{(index3+temp1)+1}}</td>
                <no-ssr>
                  <v-touch
                    tag="td"
                    v-on:tap="ambil(item,index3);modal=true"
                    class="cursor-pointer"
                    style="border:1px solid black;"
                    v-for="(item2, indexs) in thnya"
                    :key="indexs+'th2'"
                    v-html="item[item2]"
                    v-show="item2!='UrutID' && item2!='Gambar'"
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
    <div v-else>Loading Table ...</div>
  </div>
</template>
<script>
import upload from "@/components/Single/UploadsNo.vue";
import jsontoexcel from "@/components/backup/convert/JsonToExcel.vue";
import axios from "axios";
var id = require("date-fns/locale/id");
let kirim = {};
let thnya = {};
export default {
  components: {
    jsontoexcel,
    upload
  },
  data() {
    return {
      datanya: [],
      vdata: {},
      ready: false,
      orderBy: "",
      orderWith: true,
      search: "",
      pilih: { name: "taufik", hobby: "coding" },
      thnya: {},
      // modal
      modal: false,
      modalAction: "preview",
      // pagination
      selected: 10,
      pagination: 1,
      temp1: 0,
      temp2: 10,
      // media queries javascript
      mdq: "xlg",
      // kirim
      kirim: {},
      // form
      formOn: false,
      editOn: false,
      saveOn: false
    };
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
    // vdata(){
    //   this.$emit('go',this.vdata)
    // },
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
          if (typeof v[key] === "string") {
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
  methods: {
    linknya(hasil) {
      console.log("link", hasil);
      this.vdata.Gambar = hasil;
      this.$forceUpdate();
    },
    go(hasil) {
      // this.vdata.Gambar=hasil.
      console.log("hasil", hasil);
    },
    saveNya() {
      this.formOn = true;
      let keys = Object.keys(this.vdata);
      keys.forEach(key => {
        this.vdata[key] = "";
      });
    },
    editData() {
      let fd = new FormData();
      fd.append("data[table]", "bamban_tbrw");
      fd.append("data[database]", " infolay3_test");
      fd.append("data[aksi]", "update");
      fd.append("data[UrutID]", this.vdata.UrutID);

      fd.append("data[Nama]", this.vdata.Nama);

      fd.append("data[JK]", this.vdata.JK);

      fd.append("data[TempatLahir]", this.vdata.TempatLahir);

      fd.append("data[TglLahir]", this.vdata.TglLahir);

      fd.append("data[Agama]", this.vdata.Agama);

      fd.append("data[Jabatan]", this.vdata.Jabatan);

      fd.append("data[PendTerakhir]", this.vdata.PendTerakhir);

      fd.append("data[NoPengangkatan]", this.vdata.NoPengangkatan);

      fd.append("data[TglPengangkatan]", this.vdata.TglPengangkatan);
      fd.append("data[Gambar]", this.vdata.Gambar);
      this.$nuxt.$emit("busy", true);
      axios
        .post("https://infolayanans.space/api/mysql/auto_withoutkey.php", fd)
        .then(res => {
          console.log(res);
          this.$nuxt.$emit("busy", false);
          alert("proses berhasil !");
          this.refreshData();
        })
        .catch(err => {
          this.$nuxt.$emit("busy", false);
          alert("proses gagal !");
          console.log(error);
        });
    },
    saveData() {
      let fd = new FormData();
      fd.append("data[table]", "bamban_tbrw");
      fd.append("data[database]", " infolay3_test");
      fd.append("data[aksi]", "insert");
      fd.append("data[UrutID]", this.vdata.UrutID);

      fd.append("data[Nama]", this.vdata.Nama);

      fd.append("data[JK]", this.vdata.JK);

      fd.append("data[TempatLahir]", this.vdata.TempatLahir);

      fd.append("data[TglLahir]", this.vdata.TglLahir);

      fd.append("data[Agama]", this.vdata.Agama);

      fd.append("data[Jabatan]", this.vdata.Jabatan);

      fd.append("data[PendTerakhir]", this.vdata.PendTerakhir);

      fd.append("data[NoPengangkatan]", this.vdata.NoPengangkatan);

      fd.append("data[TglPengangkatan]", this.vdata.TglPengangkatan);
      fd.append("data[Gambar]", this.vdata.Gambar);
      this.$nuxt.$emit("busy", true);
      axios
        .post("https://infolayanans.space/api/mysql/auto_withoutkey.php", fd)
        .then(res => {
          console.log(res);
          this.$nuxt.$emit("busy", false);
          alert("proses berhasil !");
          this.refreshData();
        })
        .catch(err => {
          this.$nuxt.$emit("busy", false);
          alert("proses gagal !");
          console.log(error);
        });
    },
    deleteData() {
      let fd = new FormData();
      fd.append("data[table]", "bamban_tbrw");
      fd.append("data[database]", " infolay3_test");
      fd.append("data[aksi]", "delete");
      fd.append("data[UrutID]", this.vdata.UrutID);

      fd.append("data[Nama]", this.vdata.Nama);

      fd.append("data[JK]", this.vdata.JK);

      fd.append("data[TempatLahir]", this.vdata.TempatLahir);

      fd.append("data[TglLahir]", this.vdata.TglLahir);

      fd.append("data[Agama]", this.vdata.Agama);

      fd.append("data[Jabatan]", this.vdata.Jabatan);

      fd.append("data[PendTerakhir]", this.vdata.PendTerakhir);

      fd.append("data[NoPengangkatan]", this.vdata.NoPengangkatan);

      fd.append("data[TglPengangkatan]", this.vdata.TglPengangkatan);
      fd.append("data[Gambar]", this.vdata.Gambar);
      if (confirm("Yakin dihapus?")) {
        this.$nuxt.$emit("busy", true);
        axios
          .post("https://infolayanans.space/api/mysql/auto_withoutkey.php", fd)
          .then(res => {
            console.log(res);
            this.$nuxt.$emit("busy", false);
            alert("data berhasil dihapus");
            this.refreshData();
            let keys = Object.keys(this.vdata);
            keys.forEach(key => {
              this.vdata[key] = "";
            });
          })
          .catch(err => {
            this.$nuxt.$emit("busy", false);
            alert("data gagal dihapus");
            console.log(error);
          });
      }
    },
    edits() {
      // this.modal = false;
      // window.scrollTo(0, 0);
      let that = this;
      setTimeout(() => {
        // console.log(this.$store.state.desa.penduduk);

        that.$nuxt.$emit("editTable1", obj);
      }, 1000);
    },
    modalKey(e) {
      console.log(e.key == "Escape");
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
        value.replace(/^\s+|\s+$/gm, "");
      }
      dateFormat = /(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/;
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
      //= > "3 days ago"
    },
    ambil(item, index) {
      window.scrollTo(0, 0);
      let that = this;
      this.editOn = true;
      this.formOn = true;
      let clone = this.$_.clone(item);
      // clone["TGL_LHR"] = this.$datefns.format(
      //   new Date(clone["TGL_LHR"]),
      //   "YYYY-MM-dd"
      // );
      this.vdata = clone;
      this.pilih = item;
    },
    editAksi() {
      alert("edit");
    },
    simpanAksi() {
      alert("simpan");
    },
    refreshData() {
      let fd = new FormData();
      fd.append("data", "select * from bamban_tbrw");
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
        console.log(res);
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
    print() {
      this.$store.state.prints = this.pilih;
      this.$router.push("/print/perangkat");
    },
    printy() {
      this.$store.state.prints = this.datanya;
      this.$router.push("/print/laporan_perangkat");
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
    this.$nuxt.$on("ambilGambar", data => {
      console.log(data);
      this.vdata.Gambar = data;
      console.log(this.vdata.Gambar);
    });
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
</script>
<style scoped>
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
</style>`
