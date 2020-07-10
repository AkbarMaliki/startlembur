<template>
  <div>
    <div class="container-fluid">
      <div class="row" id="top1">
        <div class="col-sm-3">
          <p v-if="editOn" style="font-family:times new roman;">
            Edit Data
            <span class="typcn typcn-tabs-outline"></span>
            <button type="button" @click="printy()" class="btn btn-sm btn-outline-info float-right">
              Print
              <span class="typcn typcn-printer"></span>
            </button>
          </p>
          <p v-else style="font-family:times new roman;">
            Tambah Data
            <span class="typcn typcn-plus"></span>
          </p>

          <hr class="style13" />
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

    <!-- !! TEMPAT  -->
    <div class="container-fluid" v-if="formOn">
      <div class="row">
        <div class="col-sm-4">
          <tr>
            <td>Domisili ID</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="sm-form">
                <input
                  type="text"
                  placeholder="Domisili ID"
                  id="DomisiliID"
                  name="DomisiliID"
                  class="form-control form-control-sm"
                  v-model="vdata.DomisiliID"
                  disabled
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>No Surat</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="sm-form">
                <input
                  type="text"
                  placeholder="No Surat"
                  id="NoSurat"
                  name="NoSurat"
                  class="form-control form-control-sm"
                  v-model="vdata.NoSurat"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>Tanggal Surat</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="tips">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="Tanggal Surat"
                    id="TglSurat"
                    name="TglSurat"
                    class="form-control form-control-sm"
                    v-model="vdata.TglSurat"
                  />
                </div>
                <span class="tipstextB">ex : 01 Januari 2019</span>
              </div>
            </td>
          </tr>

          <tr>
            <td>Penduduk ID</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="sm-form">
                <select class="form-control" v-model="vdata.PendudukID" @change="getValue($event)">
                  <option
                    v-for="(item, index) in penduduks"
                    :key="index+'penduduk'"
                    :value="item.value"
                  >{{item.text}}</option>
                </select>
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
                  id="Nm1"
                  name="Nm1"
                  class="form-control form-control-sm"
                  v-model="vdata.Nm1"
                />
              </div>
            </td>
          </tr>

          <!-- <tr>
            <td>Tanggal</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="sm-form">
                <input
                  type="date"
                  placeholder="Tanggal"
                  id="tgl1"
                  name="tgl1"
                  class="form-control form-control-sm"
                  v-model="vdata.tgl1"
                >
              </div>
            </td>
          </tr>-->
          <tr>
            <td>NIK</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="sm-form">
                <input
                  type="text"
                  placeholder="NIK"
                  id="NIK"
                  name="NIK"
                  class="form-control form-control-sm"
                  v-model="vdata.NIK"
                />
              </div>
            </td>
          </tr>

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
            <td>Tanggal Lahir</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="sm-form">
                <input
                  type="text"
                  placeholder="Tanggal Lahir"
                  id="TanggalLahir"
                  name="TanggalLahir"
                  class="form-control form-control-sm"
                  v-model="vdata.TanggalLahir"
                />
              </div>
            </td>
          </tr>
        </div>
        <div class="col-sm-4">
          <tr>
            <td>Jenis Kelamin</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <input
                type="radio"
                id="one"
                name="JenisKelamin"
                value="Laki - Laki"
                v-model="vdata.JenisKelamin"
              />
              <label for="one">Laki - Laki</label>
              <br />
              <input
                type="radio"
                id="one"
                name="JenisKelamin"
                value="Perempuan"
                v-model="vdata.JenisKelamin"
              />
              <label for="two">Perempuan</label>
            </td>
          </tr>
          <br />

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
            <td>Status</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <select class="form-control" v-model="vdata.Status">
                <option selected="true">Kawin</option>
                <option>Belum Kawin</option>
                <option>Cerai Mati</option>
                <option>Cerai Hidup</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Pekerjaan</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="sm-form">
                <input
                  type="text"
                  placeholder="Pekerjaan"
                  id="Pekerjaan"
                  name="Pekerjaan"
                  class="form-control form-control-sm"
                  v-model="vdata.Pekerjaan"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>Alamat</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="sm-form">
                <textarea
                  type="text"
                  id="Alamat"
                  name="Alamat"
                  rows="2"
                  placeholder="Alamat"
                  class="form-control md-textarea"
                  v-model="vdata.Alamat"
                ></textarea>
              </div>
            </td>
          </tr>
          <tr>
            <td>Kewarganegaraan</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <select class="form-control" v-model="vdata.Kwn">
                <option selected="true">WNI</option>
                <option>WNA</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Domisili</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="sm-form">
                <input
                  type="text"
                  placeholder="Domisili"
                  id="Domisili"
                  name="Domisili"
                  class="form-control form-control-sm"
                  v-model="vdata.Domisili"
                />
              </div>
            </td>
          </tr>
        </div>
        <div class="col-sm-4">
          Mengetahui Perangkat Desa :
          <tr>
            <td>Perangkat ID</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="sm-form">
                <select class="form-control" v-model="vdata.PerangkatID">
                  <option
                    v-for="(item, index) in perangkats"
                    :key="index+'perangkat'"
                    :value="item.value"
                  >{{item.text}}</option>
                </select>
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
                  placeholder="Nama Perangkat"
                  id="Pekerjaan"
                  name="Pekerjaan"
                  class="form-control form-control-sm"
                  v-model="vdata.namaPerangkat"
                  disabled
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>Jabatan</td>
            <td>&nbsp;:&nbsp;</td>
            <td>
              <div class="sm-form">
                <textarea
                  type="text"
                  id="Jabatan"
                  name="Jabatan"
                  rows="2"
                  placeholder="Jabatan"
                  class="form-control md-textarea"
                  v-model="vdata.jabatan"
                  disabled
                ></textarea>
              </div>
            </td>
          </tr>
        </div>
      </div>
    </div>

    <template v-if="editOn">
      <div>
        <button type="button" @click="editData()" class="btn btn-sm btn-dark btn-circle">Ubah Data!</button>
      </div>
    </template>
    <template v-else>
      <div>
        <button
          type="button"
          v-if="formOn"
          @click="saveData()"
          class="btn btn-sm btn-dark btn-circle"
        >Simpan Data!</button>
      </div>
    </template>

    <br />
    <br />
    <br />

    <!-- TEMPAT END -->

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
                  <td>{{item}}</td>
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
            <div class="col-sm-2 order-2"></div>
            <div class="col-sm-3 order-3">
              <jsontoexcel :data="td" class />
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
                  v-show="item!='DomisiliID' && item!='PendudukID' && item!='PerangkatID' && item!='tgl1' && item!='Pekerjaan' && item!='Alamat' && item!='Kwn'"
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
                    v-show="item2!='DomisiliID' && item2!='PendudukID' && item2!='PerangkatID' && item2!='tgl1' && item2!='Pekerjaan' && item2!='Alamat' && item2!='Kwn'"
                    v-html="item[item2]"
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
import jsontoexcel from "@/components/backup/convert/JsonToExcel.vue";
import axios from "axios";
var id = require("date-fns/locale/id");
let kirim = {};
let thnya = {};
export default {
  components: {
    jsontoexcel
  },
  data() {
    return {
      vdata: {},
      penduduks: [],
      perangkats: [],
      perangkats2: [],
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
      datanya: {},
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
    getValue(es) {
      let fd = new FormData();
      fd.append("data", "select * from bamban_tbperangkat");
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
        let hasil = res.data.filter(e => {
          if (e.URUTID == es.target.value) {
            return true;
          }
        });
        this.vdata.Nm1 = hasil[0].NAMA;
        this.vdata.NIK = hasil[0].NIK;
        this.vdata.TempatLahir = hasil[0].TMPT_LHR;
        this.vdata.TanggalLahir = hasil[0].TGL_LHR;
        this.vdata.JenisKelamin =
          hasil[0].JK == "L" ? "Laki - Laki" : "Perempuan";
        this.vdata.Agama = hasil[0].AGAMA;
        this.vdata.Status = hasil[0].STATUS;
        this.vdata.Pekerjaan = hasil[0].PEKERJAAN;
        this.vdata.Alamat = hasil[0].ALAMAT;
        this.$forceUpdate();
      });
    },
    penduduk() {
      let fd = new FormData();
      fd.append("data", "select * from bamban_tbperangkat");
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
        res.data.forEach(e => {
          let data = {};
          data.text = e.NAMA + " : " + e.NIK;
          data.value = e.URUTID;
          this.penduduks.push(data);
        });
      });
    },
    perangkat() {
      let fd = new FormData();
      fd.append("data", "select * from bamban_tbperangkat");
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
        this.perangkats2 = res.data;
        res.data.forEach(e => {
          let data = {};
          data.text = e.Nama + " : " + e.NIP;
          data.value = e.UrutID;
          data.value2 = e.Nama;
          this.perangkats.push(data);
        });
      });
    },
    saveNya() {
      let keys = Object.keys(this.vdata);
      keys.forEach(key => {
        this.vdata[key] = "";
      });
      var d = new Date();
      let nosurat = "";
      let fd = new FormData();
      fd.append("data[table]", "bamban_tbdomisili");
      axios
        .post("https://infolayanans.space/api/mysql/getData.php", fd)
        .then(res => {
          nosurat = nosurat + res.data.length;
          nosurat =
            nosurat +
            "/SKD/Bmb/" +
            this.integer_to_roman(d.getMonth() + 1) +
            "/" +
            d.getFullYear();
          this.vdata.NoSurat = nosurat;
          console.log(this.formatDate(new Date()));
          this.vdata.TglSurat = this.formatDate(new Date());
          this.vdata.tgl1 = this.formatDate(new Date());
        });
      setTimeout(() => {
        this.$forceUpdate();
      }, 1000);
    },
    editData() {
      let fd = new FormData();
      fd.append("data[table]", "bamban_tbdomisili");
      fd.append("data[database]", " infolay3_test");
      fd.append("data[aksi]", "update");
      fd.append("data[DomisiliID]", this.vdata.DomisiliID);

      fd.append("data[NoSurat]", this.vdata.NoSurat);

      fd.append("data[TglSurat]", this.vdata.TglSurat);

      fd.append("data[PendudukID]", this.vdata.PendudukID);

      fd.append("data[PerangkatID]", this.vdata.PerangkatID);

      fd.append("data[Nm1]", this.vdata.Nm1);

      fd.append("data[Kwn]", this.vdata.Kwn);

      fd.append("data[Domisili]", this.vdata.Domisili);

      fd.append("data[tgl1]", this.vdata.tgl1);

      fd.append("data[NIK]", this.vdata.NIK);

      fd.append("data[TempatLahir]", this.vdata.TempatLahir);

      fd.append("data[TanggalLahir]", this.vdata.TanggalLahir);

      fd.append("data[JenisKelamin]", this.vdata.JenisKelamin);

      fd.append("data[Agama]", this.vdata.Agama);

      fd.append("data[Status]", this.vdata.Status);

      fd.append("data[Pekerjaan]", this.vdata.Pekerjaan);

      fd.append("data[Alamat]", this.vdata.Alamat);
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
      fd.append("data[table]", "bamban_tbdomisili");
      fd.append("data[database]", " infolay3_test");
      fd.append("data[aksi]", "insert");
      fd.append("data[DomisiliID]", this.vdata.DomisiliID);

      fd.append("data[NoSurat]", this.vdata.NoSurat);

      fd.append("data[TglSurat]", this.vdata.TglSurat);

      fd.append("data[PendudukID]", this.vdata.PendudukID);

      fd.append("data[PerangkatID]", this.vdata.PerangkatID);

      fd.append("data[Nm1]", this.vdata.Nm1);

      fd.append("data[Kwn]", this.vdata.Kwn);

      fd.append("data[Domisili]", this.vdata.Domisili);

      fd.append("data[tgl1]", this.vdata.tgl1);

      fd.append("data[NIK]", this.vdata.NIK);

      fd.append("data[TempatLahir]", this.vdata.TempatLahir);

      fd.append("data[TanggalLahir]", this.vdata.TanggalLahir);

      fd.append("data[JenisKelamin]", this.vdata.JenisKelamin);

      fd.append("data[Agama]", this.vdata.Agama);

      fd.append("data[Status]", this.vdata.Status);

      fd.append("data[Pekerjaan]", this.vdata.Pekerjaan);

      fd.append("data[Alamat]", this.vdata.Alamat);
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
      fd.append("data[table]", "bamban_tbdomisili");
      fd.append("data[database]", " infolay3_test");
      fd.append("data[aksi]", "delete");
      fd.append("data[DomisiliID]", this.vdata.DomisiliID);

      fd.append("data[NoSurat]", this.vdata.NoSurat);

      fd.append("data[TglSurat]", this.vdata.TglSurat);

      fd.append("data[PendudukID]", this.vdata.PendudukID);

      fd.append("data[PerangkatID]", this.vdata.PerangkatID);

      fd.append("data[Nm1]", this.vdata.Nm1);

      fd.append("data[Kwn]", this.vdata.Kwn);

      fd.append("data[Domisili]", this.vdata.Domisili);

      fd.append("data[tgl1]", this.vdata.tgl1);

      fd.append("data[NIK]", this.vdata.NIK);

      fd.append("data[TempatLahir]", this.vdata.TempatLahir);

      fd.append("data[TanggalLahir]", this.vdata.TanggalLahir);

      fd.append("data[JenisKelamin]", this.vdata.JenisKelamin);

      fd.append("data[Agama]", this.vdata.Agama);

      fd.append("data[Status]", this.vdata.Status);

      fd.append("data[Pekerjaan]", this.vdata.Pekerjaan);

      fd.append("data[Alamat]", this.vdata.Alamat);
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
    tests() {
      alert("y");
    },
    integer_to_roman(num) {
      if (typeof num !== "number") return false;

      var digits = String(+num).split("");
      var key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX"
      ];
      var roman_num = "";
      var i = 3;
      while (i--) roman_num = (key[+digits.pop() + i * 10] || "") + roman_num;
      return Array(+digits.join("") + 1).join("M") + roman_num;
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
    formatDate(date) {
      var d = new Date(date);
      var month = "" + (d.getMonth() + 1);
      var day = "" + d.getDate();
      var year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
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
      this.perangkats2.filter(x => {
        if (x["UrutID"] == clone["PerangkatID"]) {
          that.vdata.jabatan = x["Jabatan"];
          that.vdata.namaPerangkat = x["Nama"];
        }
        return true;
      });
    },
    editAksi() {
      alert("edit");
    },
    simpanAksi() {
      alert("simpan");
    },
    refreshData() {
      let fd = new FormData();
      fd.append("data", "select * from bamban_tbdomisili");
      axios.get("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
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
    printy() {
      this.$store.state.prints = this.vdata;
      this.$router.push("/print/domisili");
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
    this.penduduk();
    this.perangkat();
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
