<template>
  <div>
    <p @click="deleteData=item._id" v-for="(item, index) in datanya" :key="index">{{item}}</p>
    <div class="sm-form">
      <label for="username">Your username</label>
      <input
        type="text"
        id="username"
        name="username"
        class="form-control form-control-sm"
        placeholder="username"
        v-model="vdata.username"
      />
    </div>
    <div class="sm-form">
      <label for="password">Your password</label>
      <input
        type="password"
        id="password"
        name="password"
        class="form-control form-control-sm"
        placeholder="password"
        v-model="vdata.password"
      />
    </div>
    <div class="sm-form">
      <label for="table">Your table</label>
      <input
        type="text"
        id="table"
        name="table"
        class="form-control form-control-sm"
        placeholder="table"
        v-model="vdata.table"
      />
    </div>
    <hr class="style2" />
    <button type="button" @click="simpan" class="btn btn-sm btn-outline-success">simpan</button>
    <br />
    <div class="sm-form">
      <label for="findData">Your find data dari table</label>
      <input
        type="text"
        id="findData"
        name="findData"
        class="form-control form-control-sm"
        placeholder="findData"
        v-model="findData"
      />
    </div>
    <button type="button" @click="cek" class="btn btn-sm btn-primary">cek</button>
    <button type="button" @click="ceksemua" class="btn btn-sm btn-success">cek semua</button>
    <hr class="style2" />
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="delete">delete</label>
      <input
        id="delete"
        placeholder="delete"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        v-model="deleteData"
      />
    </div>
    <button type="button" @click="del" class="btn btn-sm btn-danger">delete</button>
  </div>
</template>
<script>
// cek indexDB di browser
var Datastore = require("nedb"),
  db = new Datastore({
    filename: "test.db",
    autoload: true
  });

export default {
  data() {
    return {
      datanya: [],
      findData: "tbl_user",
      deleteData: "",
      vdata: {
        table: "tbl_user"
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let that = this;
      db.find({}, function(err, data) {
        that.datanya = data;
      });
    },
    simpan() {
      let that = this;
      db.insert({ ...this.vdata }, function(err, newDoc) {
        if (err) console.log(err);
        console.log(newDoc);
        console.log("inserted");
        // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined
      });
    },
    cek() {
      db.find({ table: this.findData }, function(err, data) {
        console.log(data);
      });
    },
    ceksemua() {
      db.find({}, function(err, data) {
        console.log(data);
      });
    },
    del(datanya) {
      let that = this;
      console.log(datanya);
      db.remove({ _id: datanya }, function(err, data) {
        if (err) console.log(err);
        console.log("deleted");
        that.getData();
      });
    }
  }
};
</script>