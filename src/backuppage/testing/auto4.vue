<template>
  <div>
    <br />
    <h2 class="text-center font-bold text-2xl">SOCKET IO</h2>
    <hr class="style13" />
    <div class="text-center">
      <!-- <button type="button" @click="backend='nodejs'" class="btn btn-sm btn-primary">NODE.JS</button>&nbsp;
      <button type="button" @click="backend='php'" class="btn btn-sm btn-danger">PHP</button>&nbsp;
      <button type="button" @click="backend='nedb'" class="btn btn-sm btn-warning">NEDB</button>-->
    </div>
    <p class="text-center font-bold">
      BACKEND SEKARANG
      <br />
      <span :style="{color:backend=='php'?'red':'blue'}">{{backend}}</span>
      <br />
      DATABASE SEKARANG {{backend == "php"?"MySQL":"mongoDB"}}
    </p>
    <!-- CREATE SENDIRI -->
    <button
      type="button"
      @click="createSendiri=!createSendiri"
      class="btn btn-sm btn-outline-primary"
    >Buat Table Sendiri</button>
    <div v-if="createSendiri">
      <div class="container flex flex-wrap mx-auto px-4">
        <div class="w-full sm:w-1/4">
          <div class="text-right">
            <span
              class="btns btns-md cursor-pointer bg-red-dark text-white p-2"
              v-if="tables.length>1"
              @click="tables.pop();tablenya.pop()"
            >kurang</span>
            <span
              class="btns btns-md cursor-pointer bg-green text-black p-2"
              @click="tables.push(1)"
            >tambah</span>
          </div>
        </div>
      </div>
      <br />
      <div
        class="container flex flex-wrap mx-auto px-4"
        v-for="(item, index) in tables"
        :key="index+'tables'"
      >
        <div class="w-full sm:w-1/2">
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2">
              tables :
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="nama tables"
                v-model="tablenya[index]"
                @keypress.enter="tables.push(1)"
              />
            </label>
          </div>
        </div>
      </div>
      <button type="button" @click="buat" class="btn btn-sm btn-info">Ambil Tabel</button>
    </div>
    <!-- END CREATE SENDIRI -->
    <div class="text-center">
      <button
        type="button"
        @click="checkWith=!checkWith"
        class="btn btn-sm btn-primary"
      >{{checkWith?'Dengan Check ON(TRUE)':"Tanpa Check ON(FALSE)"}}</button>
      <div class="sm-form">
        <label for="links">Your links</label>
        <input
          type="text"
          id="links"
          name="links"
          class="form-control form-control-sm"
          placeholder="links"
          v-model="links"
        />
      </div>
    </div>
    <div class="container flex flex-wrap mx-auto px-4">
      <div class="w-full sm:w-1/2 text-center">
        <p class="text-center font-bold">FORM LESS</p>
        <br />
        <span v-for="(item, index) in datanya" :key="index+'formless'">
          <input type="checkbox" :id="item+'1'" :value="item" v-model="formless" />
          <label :for="item+1">{{item}}</label>&nbsp;&nbsp;
        </span>
      </div>
      <div class="w-full sm:w-1/2 text-center">
        <p class="text-center font-bold">TABLE LESS</p>
        <br />
        <span v-for="(item, index) in datanya" :key="index+'tableless'">
          <input type="checkbox" :id="item+'2'" :value="item" v-model="tableless" />
          <label :for="item+2">{{item}}</label>&nbsp;&nbsp;
        </span>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-3" v-for="(item, index) in datanya" :key="index+'data'">
              {{item}} :
              <select class="form-control" v-model="selected[index]">
                <option selected="selected">text</option>
                <option>number</option>
                <option>date</option>
                <option>date2</option>
                <option>jam</option>
                <option>switch</option>
                <option>tag</option>
                <option>email</option>
                <option>password</option>
                <option>file</option>
                <option>textarea</option>
                <option>select</option>
                <option>radio</option>
                <option>checkbox</option>
              </select>
            </div>
          </div>

          <br />
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <button
                  type="button"
                  @click="getData"
                  class="btn btn-sm btn-warning btn-block shadow-md"
                >get data</button>
              </div>
              <div class="col-sm-6">
                <button
                  type="button"
                  @click="formula"
                  class="btn btn-sm btn-outline-primary btn-block shadow-md"
                >get formula</button>
              </div>
              <div class="col-sm-12">
                <select class="form-control" v-model="vdata.key">
                  <option v-for="(item, index) in keys" :key="index+'keys'">{{item}}</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr class="style2" />
          <br />
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-4">
                Input HTML
                <button
                  type="button"
                  @click="copy('#textarea1')"
                  class="btn btn-sm btn-outline-primary"
                >copy</button>
                <br />
                <textarea
                  name
                  id="textarea1"
                  cols="30"
                  rows="10"
                  v-model="kalimat"
                  style="border:1px solid black;"
                ></textarea>
              </div>
              <div class="col-sm-4">
                FULL HTMLS
                <button
                  type="button"
                  @click="copy('#textarea4')"
                  class="btn btn-sm btn-outline-primary"
                >copy</button>
                <br />
                <textarea
                  name
                  id="textarea4"
                  cols="30"
                  rows="10"
                  v-model="kalimat2"
                  style="border:1px solid black;"
                ></textarea>
              </div>
              <div class="col-sm-4">
                print page
                <button
                  type="button"
                  @click="copy('#textarea6')"
                  class="btn btn-sm btn-outline-primary"
                >copy</button>
                <br />
                <textarea
                  name
                  id="textarea6"
                  cols="30"
                  rows="10"
                  v-model="kalimat3"
                  style="border:1px solid black;"
                ></textarea>
              </div>
              <div class="col-sm-4">
                Mongoose schema
                <button
                  type="button"
                  @click="copy('#textarea4')"
                  class="btn btn-sm btn-outline-primary"
                >copy</button>
                <br />
                <textarea
                  name
                  id="textarea4"
                  cols="30"
                  rows="10"
                  v-model="schema"
                  style="border:1px solid black;"
                ></textarea>
              </div>
              <div class="col-sm-4">
                fprm only
                <button
                  type="button"
                  @click="copy('#textarea9')"
                  class="btn btn-sm btn-outline-primary"
                >copy</button>
                <br />
                <textarea
                  name
                  id="textarea9"
                  cols="30"
                  rows="10"
                  v-model="kalimat4"
                  style="border:1px solid black;"
                ></textarea>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <button
            type="button"
            @click="mysqlShow=!mysqlShow"
            class="btn btn-sm btn-danger"
          >Mysql Show</button> &nbsp;&nbsp;
          <template v-if="mysqlShow">
            <h3
              class="text-center font-times"
            >NOTE: UNTUK MENGGUNAKAN UPDATE DAN DELETE BAGIAN LINK HARUS DIUPDATE PADA BAGIAN (.....)</h3>
            <hr class="style3" />
            <h2 class="text-center">MYSQL</h2>
            <p class="text-center font-bold uppercase">AUTO</p>
            <pre>
            <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>
            {{nodeMysqlSelectauto}}</pre>
            <p class="text-center font-bold uppercase">SELECT</p>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMysqlSelect}}</pre>
            <p class="text-center font-bold uppercase">INSERT</p>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{sqlInsert}}</pre>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMysql}}</pre>
            <h2 class="text-center">versi auto</h2>
            <pre>
           <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button> {{ifk}}
          </pre>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMysqls}}</pre>
            <h2 class="text-center">server</h2>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMysqlInsert}}</pre>
            <p class="text-center font-bold uppercase">UPDATE</p>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{sqlUpdate}}</pre>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMysql2}}</pre>
            <h2 class="text-center">versi auto</h2>
            <pre>
           <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button> {{ifk}}
          </pre>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMysqls2}}</pre>
            <h2 class="text-center">server</h2>

            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMysqlUpdate}}</pre>
            <p class="text-center font-bold uppercase">DELETE</p>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{sqlDelete}}</pre>

            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMysql2}}</pre>
            <h2 class="text-center">versi auto</h2>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMysqls3}}</pre>
            <h2 class="text-center">server</h2>

            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMysqlDelete}}</pre>
          </template>
          <button type="button" @click="mongoShow=!mongoShow" class="btn btn-sm btn-info">Mongo Show</button>&nbsp;&nbsp;
          <template v-if="mongoShow">
            <hr class="style13" />
            <h2 class="text-center">MONGODB</h2>
            <p class="text-center font-bold uppercase">AUTO</p>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMongoSelectauto}}</pre>
            <p class="text-center font-bold uppercase">SELECT</p>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMongoSelect}}</pre>
            <p class="text-center font-bold uppercase">INSERT</p>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMongo}}</pre>
            <h2 class="text-center">server</h2>

            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMongoInsert}}</pre>
            <p class="text-center font-bold uppercase">UPDATE</p>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMongo2}}</pre>
            <h2 class="text-center">server</h2>

            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMongoUpdate}}</pre>
            <p class="text-center font-bold uppercase">DELETE</p>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMongo3}}</pre>
            <h2 class="text-center">server</h2>

            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{nodeMongoDelete}}</pre>
          </template>
          <button
            type="button"
            @click="nedbShow=!nedbShow"
            class="btn btn-sm btn-dark"
          >Socket IO Show</button>
          <template v-if="nedbShow">
            <hr class="style13" />
            <h2 class="text-center font-bold font-times">SOCKET IO</h2>
            <pre>
                       <button
  type="button"
  @click="cop($event)"
  class="btn btn-sm btn-primary"
  style="height:20px;width:50px;"
></button>{{sockets}}</pre>
          </template>
        </div>
      </div>
    </div>
    <div v-html="kalimat"></div>
  </div>
</template>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const uniqid = require("uniqid");
export default {
  data() {
    return {
      tables: [1],
      tablenya: [],
      createSendiri: false,
      sockets: "",
      formless: [],
      tableless: [],
      selected: [],
      datanya: [],
      backend: "socket",
      kalimat: "",
      kalimat2: "",
      kalimat3: "",
      kalimat4: "",
      mongoSelects: "",
      mongoInserts: "",
      mongoUpdates: "",
      mongoRemoves: "",
      links: "this.$store.state.database",
      schema: "",
      sqlInsert: "",
      sqlUpdate: "",
      checkWith: false,
      databaseWith: false,
      mongoShow: false,
      mysqlShow: false,
      nedbShow: false,
      sqlDelete: "",
      nodeMysql: "",
      nodeMysqls: "",
      nodeMysql2: "",
      nodeMysqls3: "",
      nodeMysqls2: "",
      nodeMongo: "",
      nodeMongo2: "",
      nodeMongo3: "",
      nodeMysqlInsert: "",
      nodeMysqlUpdate: "",
      nodeMysqlDelete: "",
      nodeMysqlSelect: "",
      nodeMysqlSelectauto: "",
      nodeMongoSelect: "",
      nodeMongoInsert: "",
      nodeMongoUpdate: "",
      nodeMongoDelete: "",
      nodeMongoSelectauto: "",
      ifk: "",
      gambars: "Gambars",
      nedb: "",
      key: "",
      // !table
      table: "bamban_tbpindah",
      vdata: {
        id: "1",
        table: "tbuser"
      }
    };
  },
  computed: {
    keys() {
      return this.datanya;
    }
  },
  methods: {
    buat() {
      this.datanya = this.tablenya;
      let length = this.datanya.length;
      for (let i = 0; i < length; i++) {
        this.selected[i] = "text";
      }
    },
    cop(e) {
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
    copy(te) {
      let textarea = this.$el.querySelector(te);
      textarea.select();
      document.execCommand("copy");
    },
    getData() {
      let data = {
        nama: "taufik",
        text: "isi pesan",
        room: "123",
        tujuan: "user",
        warning: "-",
        dibaca: "false",
        status: 1,
        id: uniqid()
      };
      this.datanya = Object.keys(data);
      let length = this.datanya.length;
      for (let i = 0; i < length; i++) {
        this.selected[i] = "text";
      }
    },
    formula() {
      let that = this;
      let length = this.datanya.length;
      let tanya = "(";
      let sqlInsert = "Insert into " + this.vdata.table + " (";
      let sqlInserts = "Insert into " + this.vdata.table + " (";
      let sqlUpdate = "UPDATE " + this.vdata.table + " SET ";
      let sqlUpdates = "UPDATE " + this.vdata.table + " SET ";
      let sqlDelete = "DELETE FROM " + this.vdata.table + " WHERE ";
      let sqlDeletes = "DELETE FROM " + this.vdata.table + " WHERE ";
      sqlDelete;
      let schema = `let ${this.vdata.table}Schema = new mongoose.Schema({`;
      let input = `<!-- FORM -->
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
      <!-- FORM -->`;

      let nodeMysql = ` let fd = new FormData();
      let arr = [
      `;
      let nodeMysqls = ` let fd = new FormData();
      `;
      let nodeMysql2 = ` let fd = new FormData();
      let arr = [
      `;
      let nodeMysqls2 = ` let fd = new FormData();
      `;
      let nodeMysqls3 = ` let fd = new FormData();
      `;
      let more = ``;
      let keys = [];
      let vdata = `(`;
      this.datanya.forEach((key, index) => {
        if (that.vdata.key == key) {
        } else {
          sqlInsert = sqlInsert + `${key},`;
          sqlInserts = sqlInserts + `${key},`;
          sqlUpdate = sqlUpdate + `${key}=?,`;
          sqlUpdates = sqlUpdates + `${key}='\${this.vdata.${key}}',`;
          tanya = tanya + "?,";
          vdata = vdata + `'\${this.vdata.${key}}',`;
          nodeMysql = nodeMysql + `this.vdata.${key},`;
          nodeMysql2 = nodeMysql2 + `this.vdata.${key},`;
        }
        keys.push(key);
        schema =
          schema +
          `${key}: {
          type: String,
          default: "null"
        },`;
        if (this.formless.includes(key)) {
          console.log("less", key);
        } else {
          if (this.selected[index] == "text") {
            console.log("ini text", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="${key}_"
                    id="${key}"
                    name="${key}"
                    class="form-control form-control-sm"
                    v-model="vdata.${key}"
                    pattern="[a-zA-Z0-9\\s]+" minlength="0" maxlength="30"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
              oninput="this.setCustomValidity('')"
              ${key == "_id" || key == "id" ? "disabled" : ""}
                  >
                </div>
              </td>
            </tr>
            `;
          } else if (this.selected[index] == "number") {
            console.log("ini number", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="number"
                    placeholder="${key}_"
                    id="${key}"
                    name="${key}"
                    class="form-control form-control-sm"
                    v-model="vdata.${key}"
                    value="0" min="1" max="100"
                    oninvalid="this.setCustomValidity('Harus diisi dan Number valie 1 - 100 !')"
              oninput="this.setCustomValidity('')"
                  >
                </div>
              </td>
            </tr>
            `;
          } else if (this.selected[index] == "date") {
            console.log("ini date", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="date"
                    placeholder="${key}_"
                    id="${key}"
                    name="${key}"
                    class="form-control form-control-sm"
                    v-model="vdata.${key}"
                    oninvalid="this.setCustomValidity('Harus diisi  !')"
              oninput="this.setCustomValidity('')"
                  >
                </div>
              </td>
            </tr>
            `;
          } else if (this.selected[index] == "date2") {
            console.log("ini date2", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
    <b-field label="">
      <b-datepicker placeholder="Click to select..." icon="calendar-today" v-model="vdata.${key}"></b-datepicker>
    </b-field>
              </td>
            </tr>
            `;
          } else if (this.selected[index] == "jam") {
            console.log("ini jam", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
   <b-field label="Select timepicker">
      <b-timepicker
        placeholder="Type or select a date..."
        icon="clock"
        v-model="vdata.${key}"
        editable
      ></b-timepicker>
    </b-field>
              </td>
            </tr>
            `;
          } else if (this.selected[index] == "switch") {
            console.log("ini jam", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
   <div class="field">
      <b-switch v-model="vdata.${key}" true-value="Yes" false-value="No">{{ vdata.${key} }}</b-switch>
    </div>
              </td>
            </tr>
            `;
            more = more + `${key}:"Yes",`;
          } else if (this.selected[index] == "tag") {
            console.log("ini tag", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
  <b-field label="Add some tags">
      <b-taginput v-model="vdata.${key}" ellipsis icon="label" placeholder="Add a tag"></b-taginput>
    </b-field>
              </td>
            </tr>
            `;
            more = more + `${key}:[],`;
          } else if (this.selected[index] == "file") {
            console.log("ini file", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="${key}_"
                    id="${key}"
                    name="${key}"
                    class="form-control form-control-sm"
                    v-model="vdata.${key}"
                    disabled
                  >
                  <upload @upload="go" @link="linknya" />
                </div>
              </td>
            </tr>
            `;
            this.gambars = key;
          } else if (this.selected[index] == "email") {
            console.log("ini email", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="email"
                    placeholder="${key}_"
                    id="${key}"
                    name="${key}"
                    class="form-control form-control-sm"
                    v-model="vdata.${key}"
                    required
                    oninvalid="this.setCustomValidity('Harus dalam format email !')"
              oninput="this.setCustomValidity('')"
                  >
                </div>
              </td>
            </tr>
            `;
          } else if (this.selected[index] == "password") {
            console.log("ini password", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="password"
                    placeholder="${key}_"
                    id="${key}"
                    name="${key}"
                    class="form-control form-control-sm"
                    v-model="vdata.${key}"
                    required
                     pattern="[a-zA-Z0-9]+" minlength="0" maxlength="30"
                    oninvalid="this.setCustomValidity('Harus diisi dan tidak boleh menggunakan karakter special!')"
              oninput="this.setCustomValidity('')"
                  >
                </div>
              </td>
            </tr>
            `;
          } else if (this.selected[index] == "file") {
            console.log("ini file", index);
            //! belum
          } else if (this.selected[index] == "textarea") {
            console.log("ini textarea", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                 <div class="sm-form">
        <label for="${key}">Your ${key}</label>
        <textarea type="text" id="${key}" name="${key}"  pattern="[a-zA-Z0-9\\s]+" minlength="0" maxlength="200" rows="2" placeholder="${key}" class="form-control md-textarea" v-model="vdata.${key}"
        oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 200 Karakter !')"
              oninput="this.setCustomValidity('')"
        ></textarea>
    </div>
              </td>
            </tr>
            `;
          } else if (this.selected[index] == "select") {
            console.log("ini select", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                 <select class="form-control" v-model="vdata.${key}">
                <option selected="true">text</option>
                <option>number</option>
                <option>date</option>
               </select>
              </td>
            </tr>
            `;
          } else if (this.selected[index] == "radio") {
            console.log("ini radio", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                 <input type="radio" id="one" name="${key}" value="L" v-model="vdata.${key}">
                  <label for="one">L</label>
                  <br>
                  <input type="radio" id="one" name="${key}" value="P" v-model="vdata.${key}">
                  <label for="two">P</label>
              </td>
            </tr>
            <br/>
            `;
          } else if (this.selected[index] == "checkbox") {
            console.log("ini checkbox", index);
            input =
              input +
              ` 
          <tr>
              <td>${key}_</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <input type="checkbox" id="no1" value="no1"   oninvalid="this.setCustomValidity('Harus dipilih salah satu !')"
              oninput="this.setCustomValidity('')" v-model="vdata.${key}">
                <label for="no1">no1</label>
                <input type="checkbox" id="no2" value="no2"   oninvalid="this.setCustomValidity('Harus dipilih salah satu !')"
              oninput="this.setCustomValidity('')" v-model="vdata.${key}">
                <label for="no2">no2</label>
                <input type="checkbox" id="no3" value="no3"   oninvalid="this.setCustomValidity('Harus dipilih salah satu !')"
              oninput="this.setCustomValidity('')" v-model="vdata.${key}">
                <label for="no3">no3</label>
              </td>
            </tr>
            <br/>
            `;
            more = more + `${key}:[],`;
          }
        }
      });
      //! #END#
      sqlInsert =
        sqlInsert.substring(0, sqlInsert.length - 1) +
        ") VALUES " +
        tanya.substring(0, tanya.length - 1) +
        ")";
      sqlInserts =
        sqlInserts.substring(0, sqlInserts.length - 1) +
        ") VALUES " +
        vdata.substring(0, vdata.length - 1) +
        ")";
      sqlUpdate =
        sqlUpdate.substring(0, sqlUpdate.length - 1) +
        " Where " +
        this.vdata.key +
        ` = \${req.body.id}`;
      sqlUpdates =
        sqlUpdates.substring(0, sqlUpdates.length - 1) +
        " Where " +
        this.vdata.key +
        ` = '\${this.vdata.${this.vdata.key}}'`;
      sqlDelete = sqlDelete + " " + this.vdata.key + ` =  \${req.body.id}`;
      sqlDeletes =
        sqlDeletes +
        " " +
        this.vdata.key +
        ` =  '\${this.vdata.${this.vdata.key}}'`;
      nodeMysql =
        nodeMysql.substring(0, nodeMysql.length - 1) +
        `
      ];
      fd.append("data", arr);
      this.$nuxt.$emit("busy", true);
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mysql/insert/${this.vdata.table}", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          this.$nuxt.$emit("busy", false);
          console.log(res);
        });
    }`;
      nodeMysqls =
        nodeMysqls +
        `
      fd.append("data", \`${sqlInserts}\`);
      ${
        this.links == "this.$store.state.database"
          ? `this.$nuxt.$emit("busy", true);`
          : ``
      }
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mysql/auto${this.backend == "php" ? ".php" : ""}", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          ${
            this.links == "this.$store.state.database"
              ? `this.$nuxt.$emit("busy", false);`
              : ``
          }
          console.log(res);
          alert('Simpan Data Berhasil!')
          this.refreshData()
        }).catch(err => {
            ${
              this.links == "this.$store.state.database"
                ? `this.$nuxt.$emit("busy", false);`
                : ``
            }
            this.refreshData()
          });
    `;
      nodeMysqls2 =
        nodeMysqls2 +
        `
      fd.append("data", \`${sqlUpdates}\`);
      ${
        this.links == "this.$store.state.database"
          ? `this.$nuxt.$emit("busy", true);`
          : ``
      }
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mysql/auto${this.backend == "php" ? ".php" : ""}", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          ${
            this.links == "this.$store.state.database"
              ? `this.$nuxt.$emit("busy", false);`
              : ``
          }
          console.log(res);
          alert('Update Data Berhasil!')
          this.refreshData()
        }).catch(err => {
           ${
             this.links == "this.$store.state.database"
               ? `this.$nuxt.$emit("busy", false);`
               : ``
           }
            this.refreshData()
          });
    `;
      nodeMysqls3 =
        nodeMysqls3 +
        `
      fd.append("data", \`${sqlDeletes}\`);
      if (confirm('Yakin dihapus?')) {
      ${
        this.links == "this.$store.state.database"
          ? `this.$nuxt.$emit("busy", true);`
          : ``
      }
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mysql/auto${this.backend == "php" ? ".php" : ""}", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
         ${
           this.links == "this.$store.state.database"
             ? `this.$nuxt.$emit("busy", false);`
             : ``
         }
          console.log(res);
          alert('Delete Data Berhasil!')
          let keys = Object.keys(this.vdata)
          keys.forEach(key => {
            this.vdata[key] = ''
          })
          this.refreshData()
        }).catch(err => {
            ${
              this.links == "this.$store.state.database"
                ? `this.$nuxt.$emit("busy", false);`
                : ``
            }
            let keys = Object.keys(this.vdata)
          keys.forEach(key => {
            this.vdata[key] = ''
          })
            this.refreshData()
          });
          }
    `;
      nodeMysql2 =
        nodeMysql2.substring(0, nodeMysql2.length - 1) +
        `
      ];
      //! ganti pada bagian .... menjadi fungsi delete atau update
      fd.append("data", arr);
      fd.append("id", this.vdata.${this.vdata.key});
      this.$nuxt.$emit("busy", true);
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mysql/..../${this.vdata.table}", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          this.$nuxt.$emit("busy", false);
          console.log(res);
        });
    }`;
      this.nodeMysqlInsert =
        this.nodeMysqlInsert +
        `
     app.post(\`/api/mysql/insert/${this.vdata.table}\`, multipart, (req, res, next) => {
    mysql.query(
      \`${sqlInsert}\`,
      req.body.data.split(","),
      function(err, result, field) {
        res.json({
          data: result
        });
      }
    );
  });`;
      this.nodeMysqlUpdate =
        this.nodeMysqlUpdate +
        `
     app.post(\`/api/mysql/update/${this.vdata.table}\`, multipart, (req, res, next) => {
    mysql.query(
      \`${sqlUpdate}\`,
      req.body.data.split(","),
      function(err, result, field) {
        res.json({
          data: result
        });
      }
    );
  });`;
      this.nodeMysqlDelete =
        this.nodeMysqlDelete +
        `
     app.post(\`/api/mysql/delete/${this.vdata.table}\`, multipart, (req, res, next) => {
    mysql.query(
      \`${sqlDelete}\`,
      req.body.data.split(","),
      function(err, result, field) {
        res.json({
          data: result
        });
      }
    );
  });`;
      this.nodeMysqlSelect =
        this.nodeMysqlSelect +
        `
     app.post(\`/api/mysql/select/${this.vdata.table}\`, multipart, (req, res, next) => {
    mysql.query(
      \`Select * from ${this.vdata.table}\`,
      function(err, result, field) {
        res.json({
          data: result
        });
      }
    );
  });`;
      this.nodeMongoSelect =
        this.nodeMongoSelect +
        `
     app.post(\`/api/mongo/select/${this.vdata.table}\`, multipart, (req, res, next) => {
       schemas["${this.vdata.table}"].find({}, function(err, data) {
      console.log(data);
      if (err) console.log(err);
      res.json(data);
    });
    );
  });`;

      this.nodeMysqlSelectauto =
        this.nodeMysqlSelectauto +
        `
     let fd = new FormData();
      fd.append("data", "select * from ${this.vdata.table}"); //if empty = *
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mysql/auto${this.backend == "php" ? ".php" : ""}", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          console.log(res);
        });`;
      this.nodeMongoSelectauto =
        this.nodeMongoSelectauto +
        `
     let fd = new FormData();
      fd.append("table", "${this.vdata.table}");
      fd.append("select", "${keys.join()}"); //if empty = *
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mongo/${this.vdata.table}", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          console.log(res);
        });`;
      this.mongoSelects =
        this.mongoSelects +
        `
     let fd = new FormData();
      fd.append("table", "${this.vdata.table}");
      fd.append("aksi", "select");
      fd.append("select", "${keys.join()}"); //if empty = *
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mongo/auto", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          console.log(res);
        });`;
      this.nodeMongo =
        this.nodeMongo +
        `let fd = new FormData();
      fd.append("data", JSON.stringify(this.vdata));
      this.$nuxt.$emit("busy", true);
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mongo/insert/${this.vdata.table}", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          this.$nuxt.$emit("busy", false);
          alert('data berhasil diinsert!')
          console.log(res);
          let keys = Object.keys(this.vdata)
          keys.forEach(key => {
            this.vdata[key] = ''
          })
          this.refreshData()
        });`;
      this.mongoInserts =
        this.mongoInserts +
        `let fd = new FormData();
      fd.append("data", JSON.stringify(this.vdata));
      fd.append("aksi", "insert");
      fd.append("table", "${this.vdata.table}");
      this.$nuxt.$emit("busy", true);
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mongo/auto", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          this.$nuxt.$emit("busy", false);
          alert('data berhasil diinsert!')
          console.log(res);
          let keys = Object.keys(this.vdata)
          keys.forEach(key => {
            this.vdata[key] = ''
          })
          this.refreshData()
        }).catch(err=>{
          this.$nuxt.$emit("busy", false);
          console.log(res);
        });`;
      this.mongoUpdates =
        this.mongoUpdates +
        `let fd = new FormData();
      fd.append("data", JSON.stringify(this.vdata));
      fd.append("aksi", "update");
      fd.append("table", "${this.vdata.table}");
      this.$nuxt.$emit("busy", true);
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mongo/auto", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          this.$nuxt.$emit("busy", false);
          alert('data berhasil diupdate!')
          console.log(res);
          let keys = Object.keys(this.vdata)
          keys.forEach(key => {
            this.vdata[key] = ''
          })
          this.refreshData()
        }).catch(err=>{
          this.$nuxt.$emit("busy", false);
          console.log(res);
        });`;
      this.mongoRemoves =
        this.mongoRemoves +
        `let fd = new FormData();
      fd.append("data", JSON.stringify(this.vdata));
      fd.append("aksi", "remove");
      fd.append("table", "${this.vdata.table}");
      if (confirm('Yakin dihapus?')) {
      this.$nuxt.$emit("busy", true);
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mongo/auto", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          this.$nuxt.$emit("busy", false);
          console.log(res);
          alert('data berhasil dihapus!')
          let keys = Object.keys(this.vdata)
          keys.forEach(key => {
            this.vdata[key] = ''
          })
          this.refreshData()
        }).catch(err=>{
          this.$nuxt.$emit("busy", false);
          console.log(res);
        });
        }`;
      this.nodeMongo2 =
        this.nodeMongo2 +
        `let fd = new FormData();
      fd.append("data", JSON.stringify(this.vdata));
      fd.append("id", this.vdata.${this.vdata.key})
      // ! ganti bagian .... menjadi fungsi update atau delete
      this.$nuxt.$emit("busy", true);
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mongo/update/${this.vdata.table}", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
           this.$nuxt.$emit("busy", false);
          alert('data berhasil update!')
          console.log(res);
          let keys = Object.keys(this.vdata)
          keys.forEach(key => {
            this.vdata[key] = ''
          })
          this.refreshData()
        });`;
      this.nodeMongo3 =
        this.nodeMongo3 +
        `let fd = new FormData();
      fd.append("data", JSON.stringify(this.vdata));
      fd.append("id", this.vdata.${this.vdata.key})
      // ! ganti bagian .... menjadi fungsi update atau delete
      if (confirm('Yakin dihapus?')) {
      this.$nuxt.$emit("busy", true);
      axios
        .post(${
          this.links == "this.$store.state.database"
            ? this.links
            : `\"${this.links}\"`
        }+"/api/mongo/remove/${this.vdata.table}", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
           this.$nuxt.$emit("busy", false);
          alert('data berhasil dihapus!')
          console.log(res);
          let keys = Object.keys(this.vdata)
          keys.forEach(key => {
            this.vdata[key] = ''
          })
          this.refreshData()
        });
        }`;
      this.nodeMongoInsert =
        this.nodeMongoInsert +
        `
     app.post(\`/api/mongo/insert/${this.vdata.table}\`, multipart, (req, res, next) => {
    console.log(JSON.parse(req.body.data));
    schemas["${this.vdata.table}"].create(JSON.parse(req.body.data), function(err, data) {
      console.log(data);
      if (err) console.log(err);
      res.json(data);
    });
  });`;
      this.nodeMongoUpdate =
        this.nodeMongoUpdate +
        `
     app.post(\`/api/mongo/update/${this.vdata.table}\`, multipart, (req, res, next) => {
    console.log(JSON.parse(req.body.data));
    schemas["${this.vdata.table}"].findByIdAndUpdate(req.body.id, JSON.parse(req.body.data), function(err, data) {
      console.log(data);
      if (err) console.log(err);
      res.json(data);
    });
  });
  
  <<------------------NOTE------------------------>>
  schemas["${this.vdata.table}"].findByIdAndUpdate(
        req.body.id,
        {
        set: {
            stok: data.stok - jumlah
        }
  `;
      this.nodeMongoDelete =
        this.nodeMongoDelete +
        `
     app.post(\`/api/mongo/delete/${this.vdata.table}\`, multipart, (req, res, next) => {
    console.log(JSON.parse(req.body.data));
    schemas["${this.vdata.table}"].findByIdAndRemove(req.body.id, function(err, data) {
      console.log(data);
      if (err) console.log(err);
      res.json(data);
    });
  });`;
      console.log("insert", sqlInsert);
      console.log("update", sqlUpdate);
      console.log("update", sqlDelete);
      let ifk = "if(";
      keys.forEach((key, index) => {
        if (index < keys.length - 1) {
          ifk = ifk + `this.vdata.${key} && `;
        } else {
          ifk = ifk + `this.vdata.${key} `;
        }
        console.log(index);
      });
      ifk = ifk + "){ this.err = false }else{ this.err=true }";
      console.log("ifk", ifk);
      this.ifk = ifk;
      schema =
        schema +
        `});  
      let ${this.vdata.table} = mongoose.model("${this.vdata.table}", ${this.vdata.table}Schema);`;
      this.schema = schema;
      console.log("schema", schema);
      this.sqlDelete = sqlDelete;
      this.sqlInsert = sqlInsert;
      this.sqlUpdate = sqlUpdate;
      this.nodeMysql = nodeMysql;
      this.nodeMysqls = nodeMysqls;
      this.nodeMysql2 = nodeMysql2;
      this.nodeMysqls3 = nodeMysqls3;
      this.nodeMysqls2 = nodeMysqls2;

      // HTMLS
      input =
        input +
        `<!-- FORM -->
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
    `;
      let htmls = `<template>
  <div>
    <!-- FORM -->`;
      let htmls2 = `<template>
  <div>
    <!-- FORM -->`;
      let les = "";
      this.tableless.forEach((e, index) => {
        les = les + `"${e}",`;
      });
      les = les.substring(0, les.length - 1);
      htmls =
        htmls +
        input +
        `
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
                 <th class :style="{color:thcolor}">#</th>
                 ${this.checkWith ? "<th class>NO</th>" : ""}
                <th
                  scope="col"
                  class="th-print cursor-pointer uppercase"
                  @click="sort(item)"
                  v-for="(item, index) in thnya"
                  :key="index+'th'"
                  v-show="!less.includes(item)"
                  :order='index+1'
                >
                  <span :style="{color:thcolor}" style='font-size:13px;'>
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
                 ${
                   this.checkWith
                     ? ` <td >
                  <input
                    type="checkbox"
                    :id="item.UrutID+index3+'check'"
                    :value="item.UrutID"
                    v-model="checkedItem"
                  />
                  <label :for="item.UrutID+index3+'check'">{{item.UrutID}}</label>
                </td>`
                     : ""
                 }
                <td >{{(index3+temp1)+1}}</td>
                <no-ssr>
                  <v-touch
                    tag="td"
                    v-on:tap="ambil(item,index3);modal=true;aksi='update'"
                    class="cursor-pointer"
                    
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
                 ${
                   this.checkWith
                     ? `  <button
          type="button"
          @click="checkedAll()"
          class="btn btn-sm btn-primary"
        >Delete Checked Item!</button>`
                     : ""
                 }
       
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
import socket from "@/plugins/socket.io.js";
import uniqid from "uniqid";
export default {
  components: {
    jsontoexcel,
    upload
  },
   data() {
    return {
      // style
      thbackground: "initial",
      thcolor: "",
      // Data datable
      datanya: [],
      vdata: {},
      messages: [],
      ready: false,
      search: "",
      pilih: { name: "taufik", hobby: "coding" },
      thnya: {},
      err: false,
      checkedItem: [],
      less: [, "_id"],
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
  beforeMount() {
    let that =this;
    socket.on("new-message", message => {
      this.messages.push(message);
      console.log(message);
      console.log("this.messages", this.messages);
      this.$forceUpdate();
      setTimeout(() => {
        that.refreshData(this.messages);
      }, 1000);
    });
    socket.on("edit-message", data => {
      this.messages = data;
      that.refreshData(data);
      this.$forceUpdate();
      setTimeout(() => {
        that.refreshData(this.messages)
      }, 1000)
      // console.log(this.messages);
    });
    socket.on("refresh-message", data => {
      socket.emit("last-messages", function(messages) {
        that.messages = messages;
        that.refreshData(messages);
        this.$forceUpdate();
      });
    });
  },
  methods: {
    `;
      htmls2 =
        htmls2 +
        input +
        `  </div>
</template>
<script>
var id = require("date-fns/locale/id");
import upload from "@/components/Single/UploadsNo.vue";
import axios from "axios";
import socket from "@/plugins/socket.io.js";
import uniqid from "uniqid";
export default {
  components: {
    upload
  },
   data() {
    return {
      datanya: [],
      vdata: {},
      messages: [],
      ready: false,
      search: "",
      pilih: { name: "taufik", hobby: "coding" },
      thnya: {},
      err: false,
      less: [, "_id"],
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
  beforeMount() {
    let that =this;
    socket.on("new-message", message => {
      this.messages.push(message);
      console.log(message);
      console.log("this.messages", this.messages);
      this.$forceUpdate();
    });
    socket.on("edit-message", data => {
      this.messages = data;
      that.refreshData(data);
      this.$forceUpdate();
      // console.log(this.messages);
    });
    socket.on("refresh-message", data => {
      socket.emit("last-messages", function(messages) {
        that.messages = messages;
        that.refreshData(messages);
        this.$forceUpdate();
      });
    });
  },
  methods: {
    dipilih(item) {
      this.pilih = item;
    },
    insert() {
      let message = {
        id: uniqid(),
        nama: this.vdata.nama,
        room: "pesan",
        tujuan: "admin",
        text: this.vdata.text.trim(),
        warning: "-",
        picture: this.$store.state.users
          ? this.$store.state.users.picture
          : "./nofound.png",
        dibaca: "false",
        status: 1,
        // 0 hapus, 1 pending, 2 diproses, 3 ada kesalahan, 4 selesai
        createdAt: new Date().toJSON(),
        createdBy: "null"
      };
     this.messages.push(message);
        // this.$store.state.notifikasi.push(message)
        this.message = "";
        socket.emit("send-message", message);
        this.$forceUpdate();
    },
    update(id) {
      let keys = Object.keys(this.pilih);
      keys.forEach(key => {
        this.pilih[key] = this.vdata[key];
      });
      socket.emit("edits-message", this.pilih);
    },
    remove(id) {
      let that = this;
      socket.emit("delete-message", this.pilih);
      socket.emit("last-messages", function(messages) {
        that.messages = messages;
        that.$forceUpdate();
        that.pilih = {};
      });
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
    checkedAll() {
      console.log(this.checkedItem);
    },
    print1() {
      this.$router.push(\`/laporan/perdata?less=`+"${this.less.toString()}"+`\`);
      this.$store.state.print2=[]
      this.$store.state.print2.push(this.pilih)
      alert("print satu");
    },
    print2() {
      this.$router.push(\`/laporan/print?less=`+"${this.less.toString()}"+`\`);
      this.$store.state.print2 = this.td
      alert("print banyak");
    },
     linknya(hasil) {
      console.log('link', hasil)
      this.vdata.${this.gambars} = hasil
      this.$forceUpdate()
    },
    go(hasil){
      console.log('uploaded')
    },
    clearInput() {
      this.formOn = true;
      let keys = Object.keys(this.vdata);
      keys.forEach(key => {
        this.vdata[key] = "";
      });
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
      //=> "3 days ago"
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
    socket.emit("last-messages", function(messages) {
      that.messages = messages;
    });
  }
};<\/script>
    `;
      let methods = `
     dipilih(item) {
      this.pilih = item;
    },
    insert() {
      let message = {
        id: uniqid(),
        nama: this.vdata.nama,
        room: "pesan",
        tujuan: "admin",
        text: this.vdata.text.trim(),
        warning: "-",
        picture: this.$store.state.users
          ? this.$store.state.users.picture
          : "./nofound.png",
        dibaca: "false",
        status: 1,
        // 0 hapus, 1 pending, 2 diproses, 3 ada kesalahan, 4 selesai
        createdAt: new Date().toJSON(),
        createdBy: "null"
      };
      if (this.messages.length > 0) {
        this.messages.push(message);
        // this.$store.state.notifikasi.push(message)
        this.message = "";
        socket.emit("send-message", message);
        this.$forceUpdate();
      } else {
        this.messages.push(message);
        setTimeout(() => {
          this.refreshData(this.messages);
          console.log(this.messages);
          // this.$store.state.notifikasi.push(message)
          this.message = "";
          socket.emit("send-message", message);
          this.$forceUpdate();
        }, 1000);
      }
    },
    update(id) {
      let keys = Object.keys(this.pilih);
      keys.forEach(key => {
        this.pilih[key] = this.vdata[key];
      });
      socket.emit("edits-message", this.pilih);
    },
    remove(id) {
      let that = this;
      socket.emit("delete-message", this.pilih);
      socket.emit("last-messages", function(messages) {
        that.messages = messages;
        that.$forceUpdate();
        setTimeout(() => {
          that.refreshData(that.messages);
        }, 1000);
        that.pilih = {};
      });
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
    checkedAll() {
      console.log(this.checkedItem);
    },
    print1() {
      this.$router.push(\`/laporan/perdata?less=`+"${this.less.toString()}"+`\`);
      this.$store.state.print2=[]
      this.$store.state.print2.push(this.pilih)
      alert("print satu");
    },
    print2() {
      this.$router.push(\`/laporan/print?less=`+"${this.less.toString()}"+`\`);
      this.$store.state.print2 = this.td
      alert("print banyak");
    },
     linknya(hasil) {
      console.log('link', hasil)
      this.vdata.${this.gambars} = hasil
      this.$forceUpdate()
    },
    go(hasil){
      console.log('uploaded')
    },
    clearInput() {
      this.formOn = true;
      let keys = Object.keys(this.vdata);
      keys.forEach(key => {
        this.vdata[key] = "";
      });
    },
   refreshData(item) {
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
        this.datanya = item;
        let keys = Object.keys(item[0]);
        keys = this.$_.difference(keys, this.unless);
        this.thnya = keys;
      }, 1000);
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
      //=> "3 days ago"
    },
    // DATATABLE
    pagPrev() {
      this.pagination = this.pagination - 1;
      if (this.pagination == 0) {
        this.pagination = 1;
      }
      this.temp2 = this.pagination * this.selected;
      this.temp1 = Math.ceil(this.temp2) - this.selected;
    },
    pagNext() {
      this.pagination = this.pagination + 1;
      if (this.pagination > this.bagi) {
        this.pagination = Math.round(this.bagi);
      }
      this.temp2 = this.pagination * this.selected;
      this.temp1 = Math.ceil(this.temp2) - this.selected;
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
  },props: {
    unless: {
      type: Array,
      required: false,
      default: () => ["gone"]
    },
    unlessForm: {
      type: Array,
      required: false,
      default: () => ["gone"]
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
  }, computed: {
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
    socket.emit("last-messages", function(messages) {
      that.messages = messages;
      if (messages.length > 0) {
        that.refreshData(messages);
      }
    });
  }
};<\/script><style scoped>
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
</style>`;
      this.sockets = `//=======================
//! SOCKET IO BEGIN
//=======================

// Add socket.io events
let messages = []
io.on('connection', socket => {
  socket.on('event', function(fn) {
    console.log(fn)
  })
  socket.on('last-messages', function(fn) {
    fn(messages.slice(-50))
  })
  socket.on('send-message', function(message) {
    console.log('terkirim', message)
    messages.push(message)
    socket.broadcast.emit('new-message', message)
  })
  socket.on('edits-message', function(datas) {
    console.log('edit', datas)
    let no = messages.findIndex(pil => {
      if (pil.id == datas['id']) {
        return this
      }
    })
    messages[no] = datas
    socket.broadcast.emit('edit-message', messages)
    // console.log(messages[no])
  })
  socket.on('delete-message', function(datas) {
    console.log('delete', datas)
    let no = messages.findIndex(pil => {
      if (pil.id == datas['id']) {
        return this
      }
    })
    messages.splice(no, 1)
    socket.broadcast.emit('edit-message', messages)
    // console.log(messages[no])
  })

  socket.on('last-jarak', function(fn) {
    fn(jaraks)
  })
  socket.on('send-jarak', function(jarak) {
    jaraks = jarak
    socket.broadcast.emit('new-jarak', jarak)
  })
  socket.on('last-infra', function(fn) {
    fn(infras)
  })
  socket.on('send-infra', function(infra) {
    infras = infra
    socket.broadcast.emit('new-infra', infra)
  })
})`;
      htmls = htmls + methods;
      this.kalimat = input;
      this.kalimat2 = htmls;
      this.kalimat4 = htmls2;
      let hasilprint = `
      <template>
  <div style="font-family:times new roman;">
    <div class="no-print bg-black" style="color:White;">
      <hr />
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <button
              type="button"
              @click="back()"
              class="btn btn-sm btn-outline-danger no-print"
            >Go Back!</button>
            <br />
            <br />
            <button type="button" @click="print()" class="btn btn-sm btn-primary">Print</button>
          </div>
          <div class="col-sm-6">
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
          </div>
        </div>
      </div>
      <hr class="style13" />
    </div>
    <!--  -->
    <!-- DIMULAI DARI SINI PRINT PAGE -->
    <!--  -->
    <div style>
      <img
        src="@/static/icon.png"
        class="kinoLightBox img-fluid rounded-top z-depth-2"
        style="height:100px;margin-left:10px;position:absolute;left:20px;"
        alt="no found"
      />
      <p class="pl-3 text-center" style="font-size:25px;line-height:1.0;line-spacing:3px;">
        PEMERINTAH KABUPATEN HULU SUNGAI SELATAN
        <br />KECAMATAN ANGKINANG
        <br />DESA BAMBAN
        <br />
      </p>
      <p
        class="pl-3 text-center"
        style="font-size:18px;"
      >Jl. A. Yani Km 11.2 Desa Bamban Kec. Angkinang Kab. HSS Kode Pos 71291</p>
      <img src="@/static//icon.png" class="img-fluid" style="width:100%;height:20px;" />
      <p
        class="text-center underline"
        style="font-size:21px;font-weight:bold;"
      >LAPORAN SURAT KETERANGAN ${this.vdata.table}</p>
      <br />
      <p>Laporan Tanggal : {{format(new Date())}}</p>
      <p>Jumlah Data : {{$store.state.print2.length}}</p>
      <br />
      <!--  -->
      <!-- TABLE -->
      <!--  -->
      <div class="table-responsive-sm" style="width:100%;">
        <table border="1" style="border:1px solid black;widht:100%;margin:1em auto;">
          <!--Table head-->
          <thead class="mdb-color bg-white">
            <tr style="color:black;">
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">NO</th>
              <th
                class="uppercase"
                style="font-size:11px;padding:2px;border:1px solid;"
                v-for="(item, index) in key"
                :key="index+'key'"
                v-show="!less.includes(item)"
              >{{item}}</th>
            </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody>
            <tr
              style="font-size:12px;"
              v-for="(tr, index) in $store.state.print2"
              :key="index+'print'"
            >
              <td style="font-size:12px;border:1px solid;padding:2px;">{{index+1}}</td>
              <td
                style="font-size:12px;border:1px solid;padding:2px;"
                v-for="(td,keys, index) in tr"
                :key="index"
                v-show="!less.includes(keys)"
              >{{td}}</td>
            </tr>
          </tbody>
          <!--Table body-->
        </table>
        <!--Table-->
      </div>
      <!-- TABLE END -->
      <!-- TABLE END -->
      <!-- TABLE END -->
      <br />
      <br />
      <!-- TTD -->
      <!-- TTD -->
      <!-- TTD -->
      <div class="float-right" style="padding-right:70px;font-size:19px;">
        <p>Bamban, {{format(new Date())}}</p>
        <p>{{ttd.Jabatan}}</p>
        <br />
        <br />
        <p class="underline font-bold" style="font-size:19px;">{{ttd.Nama}}</p>
      </div>
    </div>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
export default {
  layout: "print",
  data() {
    return {
      less: ["UrutID","Gambar",'_id'],
      thnya: [],
      records: "",
      key: [],
      listnya: [
        { Nama: "Taufik", Jabatan: "Programmer" },
        { Nama: "Akbar", Jabatan: "Desainer" },
        { Nama: "Maliki", Jabatan: "Web Master" },
        { Nama: "Kino", Jabatan: "Traveller" }
      ],
      ttd: {
        Nama: ".................................",
        Jabatan: "Kepala"
      }
    };
  },
  methods: {
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
   
    setTimeout(() => {
      this.getKeys();
    }, 500);
  }
};
<\/script>
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
  margin: 2cm 2cm 3cm 3cm;
}

body {
  /* this affects the margin on the content before sending to printer */
  margin: 2cm 2cm 3cm 3cm;
  margin: 0px;
}
</style>`;
      this.kalimat3 = hasilprint;
    }
  }
};
</script>