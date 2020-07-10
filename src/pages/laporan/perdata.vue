
      <template>
  <div style="font-family:times new roman;">
    <div class="no-print bg-black" style="color:White;">
      <hr />
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2">
            <button
              type="button"
              @click="back()"
              class="btn btn-sm btn-outline-danger no-print mt-4"
            >Go Back!</button>
            <br />
            <br />
          </div>
          <div class="col-sm-4">
           Mengetahui Perangkat Desa :
            <tr>
              <td>Jabatan </td>
              <td>&nbsp;:&nbsp;</td>
              <td>
               <div class="sm-form ">
                   <input type="text" id="Jabatan" name="Jabatan" class="form-control form-control-sm" placeholder="Jabatan" v-model="vdata.jabatan" >
               </div>
                <div class="sm-form ">
                   <input type="text" id="Nama" name="Nama" class="form-control form-control-sm" placeholder="Nama" v-model="vdata.nama" >
               </div>
              </td>
            </tr>
          </div>
          <div class="col-sm-6">
            <button type="button" @click="print()" class="btn btn-sm btn-primary float-right pr-4 mt-4"><span class="typcn typcn-printer"></span> Print</button>
          </div>
        </div>
      </div>
      <hr class="style13" />
    </div>
    <!--  -->
    <!-- DIMULAI DARI SINI PRINT PAGE -->
    <!--  -->
    <div style>
      <div class="row">
        <div class="col-3">
            <img
        src="@/static/icon/btn.png"
        class="kinoLightBox img-fluid rounded-top z-depth-2"
        style="margin-left:10px;position:absolute;left:20px;height:80px;"
        alt="no found"
      />
        </div>
        <div class="col-9">
         <p class="pl-3 text-center" style="font-size:25px;line-height:1.5;line-spacing:3px;">
            PT. BANK TABUNGAN NEGARA (PERSERO) Tbk
            <br />KANTOR CABANG BANJARBARU
            <br />
          </p>
          <p
            class="pl-3 text-center"
            style="font-size:18px;"
          ></p>
      <p
        class="text-center"
        style="font-size:18px;"
      >Jl. A. Yani No.11, Guntung Payung, Landasan Ulin, Kota Banjar Baru, Kalimantan Selatan 70714, Indonesia</p>
        </div>
      </div>
      <img src="@/static//icon.png" class="img-fluid" style="width:100%;height:20px;" />
          <br>
      <p
        class="text-center underline text-uppercase"
        style="font-size:21px;font-weight:bold;"
      >LAPORAN DATA {{ 'BTN BANJARBARU' | nounderline}}</p>
          <br>
      <br />
      <p>Laporan Tanggal : {{format(new Date())}}</p>
      <p>Jumlah Data : {{$store.state.print2.length}}</p>
      <br />
      <!--  -->
      <!-- TABLE -->
      <!--  -->
      <!-- PERDATA -->
        <!-- <table style="margin-left:50px;">
          <tr  v-for="(item, index) in 10" :key="index+'item'">
            <td class="text-capitalize">{{key | nounderline}}</td>
            <td>&nbsp;:&nbsp;</td>
            <td class="px-3">{{item}}</td>
          </tr>
        </table> -->
      <div class="row">
        <div class="col-sm-6" v-for="(item, indexs) in pembatas" :key="indexs">
          <table style="margin-left:50px;">
            <tr  v-for="(item2, index) in datanya" :key="index+'item'" v-if="!less.includes(item2[0])">
              <td class="text-capitalize">{{item2[indexs] | nounderline}}
              </td>
              <td>&nbsp;:&nbsp;</td>
              <td class="px-3">{{$store.state.print2[0][item2[indexs]]}}</td>
            </tr>
          </table>
        </div>
      </div>
        <!-- BANYAK DATA -->
    
      <!-- TABLE END -->
      <!-- TABLE END -->
      <!-- TABLE END -->
      <br />
      <br />
      <!-- TTD -->
      <!-- TTD -->
      <!-- TTD -->
      <div class="float-right" style="padding-right:70px;font-size:19px;">
        <p>Banjarbaru, {{format(new Date())}}</p>
        <p>{{vdata.jabatan}}</p>
        <br />
        <br />
        <p class="underline font-bold" style="font-size:19px;">{{vdata.nama}}</p>
      </div>
    </div>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
export default {
  data() {
    return {
      datanya:[],
      pembatas:1,
      less: ["UrutID","Gambar",'_id'],
      thnya: [],
      records: "",
      key: [],
      vdata:{
        jabatan:"Kepala Bagian",
        nama:"....................................."
      },
      listnya: [
        { Nama: "Taufik", Jabatan: "Programmer" },
        { Nama: "Akbar", Jabatan: "Desainer" },
        { Nama: "Maliki", Jabatan: "Web Master" },
        { Nama: "Kino", Jabatan: "Traveller" }
      ],
      ttd: {
        Nama: ".................................",
        Jabatan: "Kepala Bagian"
      }
    };
  },
 filters: {
  nounderline: function (value) {
    if(value){
      return value.replace('_',' ')
    }
  }
},
  methods: {
    getKeys() {
      let data = this.$store.state.print2[0];
      data = Object.keys(data);
      this.key = data;
    },
     scramble(teks) {
      let char = "";
      let hasil = "";
      for (var i = 0; i < teks.length; i++) {
        char = "";
        char = teks.charAt(i);
        if (char == "a") {
          char = char.replace("a", "x");
        } else if (char == "b") {
          char = char.replace("b", "v");
        } else if (char == "c") {
          char = char.replace("c", "u");
        } else if (char == "d") {
          char = char.replace("d", "w");
        } else if (char == "e") {
          char = char.replace("e", "y");
        } else if (char == "f") {
          char = char.replace("f", "z");
        } else if (char == "g") {
          char = char.replace("g", "t");
        } else if (char == "h") {
          char = char.replace("h", "s");
        } else if (char == "i") {
          char = char.replace("i", "r");
        } else if (char == "j") {
          char = char.replace("j", "q");
        } else if (char == "k") {
          char = char.replace("k", "p");
        } else if (char == "l") {
          char = char.replace("l", "o");
        } else if (char == "m") {
          char = char.replace("m", "n");
        } else if (char == "z") {
          char = char.replace("z", "f");
        } else if (char == "y") {
          char = char.replace("y", "e");
        } else if (char == "x") {
          char = char.replace("x", "a");
        } else if (char == "w") {
          char = char.replace("w", "d");
        } else if (char == "v") {
          char = char.replace("v", "b");
        } else if (char == "u") {
          char = char.replace("u", "c");
        } else if (char == "t") {
          char = char.replace("t", "g");
        } else if (char == "s") {
          char = char.replace("s", "h");
        } else if (char == "r") {
          char = char.replace("r", "i");
        } else if (char == "q") {
          char = char.replace("q", "j");
        } else if (char == "p") {
          char = char.replace("p", "k");
        } else if (char == "o") {
          char = char.replace("o", "l");
        } else if (char == "n") {
          char = char.replace("n", "m");
        } else if (char == "1") {
          char = char.replace("1", "0");
        } else if (char == "2") {
          char = char.replace("2", "8");
        } else if (char == "3") {
          char = char.replace("3", "9");
        } else if (char == "4") {
          char = char.replace("4", "7");
        } else if (char == "5") {
          char = char.replace("5", "6");
        } else if (char == "0") {
          char = char.replace("0", "1");
        } else if (char == "8") {
          char = char.replace("8", "2");
        } else if (char == "9") {
          char = char.replace("9", "3");
        } else if (char == "7") {
          char = char.replace("7", "4");
        } else if (char == "6") {
          char = char.replace("6", "5");
        } else if (char == " ") {
          char = char.replace(" ", "_");
        } else if (char == "_") {
          char = char.replace("_", " ");
        } else if (char == "*") {
          char = char.replace("*", "/");
        } else if (char == "/") {
          char = char.replace("/", "*");
        } else if (char == ",") {
          char = char.replace(",", "^");
        } else if (char == "^") {
          char = char.replace("^", ",");
        }
        hasil = hasil + char;
      }
      return hasil;
    },
    ganti(e) {
      console.log(e);
      this.ttd.Nama = JSON.parse(e).Nama;
      this.ttd.Jabatan = JSON.parse(e).Jabatan;
      this.$forceUpdate();
    },
    print() {
      window.print();
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
    let data = Object.keys(this.$store.state.print2[0]);
    if(data.length > 20){
      this.pembatas=2;
    }else if(data.length > 30){
      this.pembatas=3
    }
    this.less = this.$route.query.less.split(',')
    this.$forceUpdate()
    this.datanya = this.$_.chunk(data,this.pembatas);
    console.log(this.pembatas,this.datanya)
    setTimeout(() => {
      this.getKeys();
    }, 500);
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
  margin:10%;
}
@media print {

    .no-print,
    .no-print * {
        display: none !important;
    }

    .table-print {
        border: 1px solid black;
    }
}
body {
  /* this affects the margin on the content before sending to printer */
  margin: 2cm 2cm 3cm 3cm;
  margin: 0px;
}
</style>