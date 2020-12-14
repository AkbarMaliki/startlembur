<template>
  <div style="font-family:times new roman;">
    <div class="no-print bg-black" style="color:White;">
      <hr/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <button type="button" @click="back()" class="btn btn-sm btn-outline-danger no-print">
              <span class="typcn typcn-arrow-left"></span>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              @click="print()"
              class="btn btn-sm btn-primary"
            >Print</button>
            <br />
          </div>
          <!-- <div class="col-sm-6">
            <br />Mengetahui Perangkat Desa :
            <tr>
              <td>Perangkat ID</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <select class="form-control" @change="ganti($event.target.value)">
                    <option
                      :value="JSON.stringify({Nama:'......................',Jabatan:'Kepala Desa'})"
                    >-</option>
                    <option
                      v-for="(item, index) in listnya"
                      :key="index+'perangkat'"
                      :value="JSON.stringify(item)"
                    >{{item.Nama}}</option>
                  </select>
                </div>
              </td>
            </tr>
          </div>-->
        </div>
      </div>
      <hr class="style13" />
    </div>
    <!--  -->
    <!-- DIMULAI DARI SINI PRINT PAGE -->
    <!--  -->
    <div style="font-family:times new roman;" v-if="ready">
      <p
        class="pl-3 text-center font-times font-bold"
        style="font-size:18px;line-height:1.0;line-spacing:3px;"
      >
        FORM KERJA LEMBUR
        <br />Unit Kerja
        <span class="text-capitalize">{{datanya.unit.nama_unit}}</span>
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Kepada Yth.
        <br />
        {{datanya.disposisi_head.unit.nama_unit}}
        BTN KC Banjarbaru
        <br />Di
        <br />
      </p>
      <p class="pl-5">Tempat</p>
      <br />
      <br />
      <p class="pr-4">
        Sehubungan dengan adanya tugas yang harus cepat diselesaikan/dikerjakan dimana memerlukan waktu lembur di luar jam/hari
        kerja normal, maka dengan ini kami mengajukan permohonan lembur pada hari :
        <span class="font-bold">{{format(datanya.tanggal_lembur)}}</span>
        , dengan rincian pekerjaan
        sebagai berikut :
      </p>
      <br />
      <!--  -->
      <!-- TABLE -->
      <!--  -->
      <div class="table-responsive">
        <table class="table-responsive-lg table-sm table-bordered w-full">
          <tr>
            <th class="p-2">
              Disposisi
              <span class="text-uppercase"></span>
            </th>
            <th class="p-2">Keterangan Kerja Lembur</th>
          </tr>
          <tr>
            <td>
              <div v-if="datanya.disposisi2">
                <p
                  class="font-bold font-times text-uppercase"
                >{{datanya.disposisi_head.unit.singkatan_unit}}</p>
                <p class="p-1">{{datanya.disposisi2}}</p>
                <br />
              </div>
              <div v-if="datanya.disposisi1">
                <hr class="style1" />
                <p
                  class="font-bold font-times text-uppercase"
                >{{datanya.disposisi_unit_head.unit.singkatan_unit}} HEAD</p>
                <p class="p-1">{{datanya.disposisi1}}</p>
              </div>
              <br />
            </td>
            <td style="width:70%;">
              A. Jenis Pekerjaan yang perlu dilemburkan :
              <br />
              <span class="pl-4">- {{datanya.jenis_pekerjaan}}</span>
              <br />B. Rincian tugas kerja lembur :
              <br />
              <span class="pl-4">- {{datanya.rincian_kerja}}</span>
              <br />C. Jumlah & daftar nama Pegawai yang diperlukan untuk kerja lembur : &nbsp;
              <br />
              <div class="pl-4">
                - Jumlah Pegawai
                &nbsp;:&nbsp;
                1 Orang
                <br />
                - Nama Pegawai
                &nbsp;:&nbsp;
                {{datanya.nama}} / NIP {{datanya.nip}}
                <br />
                - Waktu / Jam Lembur
                &nbsp;:&nbsp;
                {{datanya.lama_lembur}}
              </div>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <p>Demikian permohonan ini kami ajukan, atas perhatiannya kami ucapkan terima kasih.</p>

      <!-- TABLE END -->
      <!-- TABLE END -->
      <!-- TABLE END -->
      <br />
      <br />
      <!-- TTD -->
      <!-- TTD -->
      <!-- TTD -->
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4">
          <p>Banjarbaru, {{format(new Date())}}</p>
          <p class="font-bold">Hormat Kami</p>
          <br />
          <br />
          <div v-if="datanya.disposisi2">
            <img
              :src="ttd_unit_head"
              class="kinoLightBox img-fluid"
              style="height:120px;width:100px;"
            />
            <!-- {{datanya}} -->
            <p v-if="datanya.disposisi_head" class="underline font-bold" style="font-size:19px;">{{datanya.disposisi_head.unit.singkatan_unit}}</p>
          </div>
          <div v-else>
            <img
              :src="ttd_unit_head"
              class="kinoLightBox img-fluid"
              style="height:120px;width:100px;"
            />
            <!-- {{datanya}} -->
            <p v-if="datanya.disposisi_unit_head" class="underline font-bold" style="font-size:19px;">{{datanya.disposisi_unit_head.unit.singkatan_unit}} HEAD</p>
            <p v-else class="underline font-bold" style="font-size:19px;">{{datanya.unit.singkatan_unit}} HEAD</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
var id = require("date-fns/locale/id");
export default {
  data() {
    return {
      less: ["UrutID", "Gambar", "_id"],
      thnya: [],
      records: "",
      key: [],
      ready: false,
      datanya: [],
      listnya: [
        { Nama: "Taufik", Jabatan: "Programmer" },
        { Nama: "Akbar", Jabatan: "Desainer" },
        { Nama: "Maliki", Jabatan: "Web Master" },
        { Nama: "Kino", Jabatan: "Traveller" }
      ],
      ttd_unit_head: "",
      ttd_deputy: "",
      ttds1: "",
      ttds2: "",
      ttds3: "",
      ttd: {
        Nama: ".................................",
        Jabatan: "Kepala"
      }
    };
  },
  methods: {
    refresh() {
      let fd = new FormData();
      fd.append(
        "data",
        `SELECT  tb1.disposisi1,tb1.disposisi2,tb2.nama,tb3.posisi as head, tb4.posisi as unit_head,tb2.posisi,tb2.nip,tb1.jenis_pekerjaan,tb1.jam_lembur,tb1.jam_lama,tb1.rincian_kerja,tb1.tanggal,tb1.status,tb1.id FROM driver_lembur tb1 LEFT JOIN tbuser tb2 ON tb1.id_user= tb2.id left join tbuser tb3 on tb3.id=tb1.head left join tbuser tb4 on tb4.id=tb1.unit_head where  tb1.id='${this.$route.params.id}' `
      );
      fd.append("database", " infolay3_test");
      axios
        .post("https://infolayanans.space/api/mysql/auto.php", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          console.log(res);
          this.key = Object.keys(res.data[0]);
          this.datanya = res.data[0];
        });
    },
    getKeys() {
      let data = this.$store.state.print2[0];
      data = Object.keys(data);
      this.key = data;
    },
    ganti(e) {
      console.log(e);
      this.ttd.Nama = JSON.parse(e).Nama;
      this.ttd.Jabatan = JSON.parse(e).Jabatan;
      this.$forceUpdate();
    },
    print() {
      this.ready = true;
      setTimeout(() => {
        
        document.addEventListener(
          "deviceready",
        function() {
          // cordova.plugins.printer is now available
          cordova.plugins.printer.print();
        },
        false
      );
      window.print();
      }, 2000);
    },
    back() {
      this.$router.go(-1);
    },
    format(date) {
      return this.$datefns.format(date, "DD MMMM YYYY", {
        locale: id
      });
    }
  },
  mounted() {
    let that = this;
    db.collectionGroup("history-lembur")
      .get()
      .then(res => {
        let data = res.docs.map(e => {
          return {
            id: e.id,
            ...e.data()
          };
        });
        data = data.filter(e => {
          if (e.id == that.$route.query.id) {
            return e;
          }
        });
        this.datanya = data[0];
        if (this.$store.state.users.bagian == "unit_head") {
          db.collection("users")
            .doc(data[0].disposisi_head.uid)
            .collection("ttd")
            .doc("pertama")
            .get()
            .then(res => {
              let data = res.data();
              this.ttd_unit_head = data.ttd;
              this.$forceUpdate();
              setTimeout(() => {
                // window.print();
                // this.$router.go(-1);
              }, 1000);
            });
        } else {
          db.collection("users")
            .doc(data[0].disposisi_unit_head.uid)
            .collection("ttd")
            .doc("pertama")
            .get()
            .then(res => {
              let data = res.data();
              this.ttd_unit_head = data.ttd;
              this.$forceUpdate();
              setTimeout(() => {
                // window.print();
                // this.$router.go(-1);
              }, 1000);
            });
        }
      });
  }
};
</script>
<style scoped>
.setting {
  padding: 10px;
  line-heigth: 1.5;
}
td {
  font-size: 19px;
  line-heigth: 1.5;
}
@page {
  size: auto; /* auto is the initial value */

  /* this affects the margin in the printer settings */
  /* margin: 2cm 2cm 3cm 3cm; */
  margin: 10%;
}

body {
}
@media print {
  .no-print,
  .no-print * {
    display: none !important;
  }

  .table-print {
    border: 1px solid black;
  }
  .border-none-print {
    border: none;
  }
}
</style>