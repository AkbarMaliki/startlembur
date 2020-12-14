<template>
  <div>
    <div class="mt-3"></div>
    <h2 class="text-center font-bold">JOIN TABLE</h2>
    <br />
    <h2 class="font-bold font-times uppercase">One To Many</h2>
    <div class="text-center">
      <img
        src="http://en.tekstenuitleg.net/media/22949/one-to-many_relationship.png"
        class="kinoLightBox img-fluid rounded-top z-depth-2"
        style="border-radius: 20px;width:200px;"
        alt="top"
      />
    </div>
    <p
      class="text-center font-times font-bold"
      style="font-size:15px;"
    >NOTE:table1 sebagai table utama</p>

    <hr class="style13" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <div class="sm-form">
            <label for="table1">Table1</label>
            <input
              type="text"
              id="table1"
              name="table1"
              class="form-control form-control-sm"
              placeholder="table1"
              v-model="vdata.table1"
            />
          </div>
          <div class="sm-form">
            <label for="id1">ID table 1</label>
            <input
              type="text"
              id="id1"
              name="id1"
              class="form-control form-control-sm"
              placeholder="id1"
              v-model="vdata.id1"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="sm-form">
            <label for="table2">Table2</label>
            <input
              type="text"
              id="table2"
              name="table2"
              class="form-control form-control-sm"
              placeholder="table2"
              v-model="vdata.table2"
            />
          </div>
          <div class="sm-form">
            <label for="id2">ID table 2</label>
            <input
              type="text"
              id="id2"
              name="id2"
              class="form-control form-control-sm"
              placeholder="id2"
              v-model="vdata.id2"
            />
          </div>
        </div>
      </div>
    </div>

    <hr class="style3" />

    <div class="text-center">
      <button type="button" @click="proses()" class="btn btn-sm btn-primary text-center">PROSES</button>
    </div>

    <hr class="style3" />
    <h2 class="text-center font-bold">HASIL</h2>
    <pre>
CARA UNTUK MEMILAH HASIL MENJADI JSON DENGAN LODASH

       _.chain(res.data)
        // Group the elements of Array based on `id yang sama` property
        .groupBy("id_tv")
        // `key` is group's name (id), `value` is the array of objects
        .map((value, key) => ({ id: key, value: value }))
        .value()
    </pre>
    <pre> <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{hasil1}}</pre>
    <pre> <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{hasil2}}</pre>

    <hr class="style13" />
    <h2 class="font-bold font-times uppercase">Many To Many</h2>
    <div class="text-center">
      <img
        src="https://fmhelp.filemaker.com/help/17/fmp/en/FMP_Help/images/relational.07.06.1.png"
        class="kinoLightBox img-fluid rounded-top z-depth-2"
        style="border-radius: 20px;width:200px;"
        alt="top"
      />
      <p
        class="font-times font-bold"
        style="font-size:15px;"
      >NOTE:table1 sebagai table utama atau yang ditengah</p>
    </div>

    <hr class="style13" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4">
          <div class="sm-form">
            <label for="table1">Table1</label>
            <input
              type="text"
              id="table1"
              name="table1"
              class="form-control form-control-sm"
              placeholder="table1"
              v-model="vdata.table1"
            />
          </div>
          <div class="sm-form">
            <label for="id1">ID table 1</label>
            <input
              type="text"
              id="id1"
              name="id1"
              class="form-control form-control-sm"
              placeholder="id1"
              v-model="vdata.id1"
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="sm-form">
            <label for="table2">Table2</label>
            <input
              type="text"
              id="table2"
              name="table2"
              class="form-control form-control-sm"
              placeholder="table2"
              v-model="vdata.table2"
            />
          </div>
          <div class="sm-form">
            <label for="id2">ID table 2</label>
            <input
              type="text"
              id="id2"
              name="id2"
              class="form-control form-control-sm"
              placeholder="id2"
              v-model="vdata.id2"
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="sm-form">
            <label for="table3">Table3</label>
            <input
              type="text"
              id="table3"
              name="table3"
              class="form-control form-control-sm"
              placeholder="table3"
              v-model="vdata.table3"
            />
          </div>
          <div class="sm-form">
            <label for="id3">ID table 3</label>
            <input
              type="text"
              id="id3"
              name="id3"
              class="form-control form-control-sm"
              placeholder="id3"
              v-model="vdata.id3"
            />
          </div>
        </div>
      </div>
    </div>

    <hr class="style3" />

    <div class="text-center">
      <button type="button" @click="proses2()" class="btn btn-sm btn-primary text-center">PROSES</button>
    </div>

    <hr class="style3" />
    <h2 class="text-center font-bold">HASIL</h2>
    <pre>
CARA UNTUK MEMILAH HASIL MENJADI JSON DENGAN LODASH

       _.chain(res.data)
        // Group the elements of Array based on `id yang sama` property
        .groupBy("id_tv")
        // `key` is group's name (id), `value` is the array of objects
        .map((value, key) => ({ id: key, value: value }))
        .value()
    </pre>
    <pre> <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{hasil3}}</pre>
    <pre> <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{hasil4}}</pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datanya: [],
      vdata: {
        table1: "bamban_tbdomisili",
        table2: "bamban_tbpenduduk",
        table3: "bamban_tbperangkat",
        id1: "PendudukID",
        id2: "URUTID",
        id3: "UrutID"
      },
      hasil1: "",
      hasil2: "",
      hasil3: "",
      hasil4: ""
    };
  },
  methods: {
    cop() {
      console.dir(e.target.parentElement);
      let target = e.target.parentElement;
      const copyText = target.textContent;
      const textArea = document.createElement("textarea");
      textArea.textContent = copyText;
      document.body.append(textArea);
      textArea.select();
      document.execCommand("copy");
      // document.execCommand("copy");
    },
    getData() {
      alert("y");
    },
    proses() {
      this.hasil1 = `
        Select * FROM ${this.vdata.table1} tb1 LEFT JOIN ${this.vdata.table2} tb2 ON tb1.${this.vdata.id1}= tb2.${this.vdata.id2} ORDER BY tb1.${this.vdata.id1} ASC
        `;
      this.hasil2 = `
       schemas["${this.vdata.table1}"].aggregate(
      [
        {
          lookup: {
            from: '${this.vdata.table2}',
            localField: '${this.vdata.id1}',
            foreignField: '${this.vdata.id2}',
            as: 'hasil1'
          }
        }
      ],
      function(err, data) {
          if(err)console.log(err)
          res.json(data)
      })
        `;
    },
    proses2() {
      this.hasil3 = `
        Select * FROM ${this.vdata.table1} tb1 
        LEFT JOIN ${this.vdata.table2} tb2 ON tb1.${this.vdata.id1}= tb2.${this.vdata.id2} 
        LEFT JOIN ${this.vdata.table3} tb3 ON tb1.${this.vdata.id1}= tb2.${this.vdata.id3}
        ORDER BY tb1.${this.vdata.id1} ASC
        `;
      this.hasil4 = `
        schemas["${this.vdata.table1}"].aggregate(
      [
        {
          lookup: {
            from: '${this.vdata.table2}',
            localField: '${this.vdata.id1}',
            foreignField: '${this.vdata.id2}',
            as: 'hasil1'
          }
        },
        {
          lookup: {
            from: '${this.vdata.table3}',
            localField: '${this.vdata.id1}',
            foreignField: '${this.vdata.id3}',
            as: 'hasil2'
          }
        }
      ],
      function(err, data) {
          if(err)console.log(err)
          res.json(data)
      })
        `;
    }
  }
};
</script>
