<template>
  <div>
    <h2 id="multipleInput">Multiple Input</h2>
    <!-- BUTTON TAMBAH KURANG -->
    <div class="container flex flex-wrap mx-auto px-4">
      <div class="w-full sm:w-1/4">
        <div class="text-right">
          <span class="btns btns-md cursor-pointer bg-green text-black" @click="skill.push(1)">+</span>
          <span
            class="btns btns-md cursor-pointer bg-red-dark text-white"
            v-if="skill.length>1"
            @click="skill.pop();vdata.skill.pop()"
          >-</span>
        </div>
      </div>
    </div>
    <br>
    <div
      class="container flex flex-wrap mx-auto px-4"
      v-for="(item, index) in skill"
      :key="index+'skill'"
    >
      <div class="w-full sm:w-1/2">
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2">
            skill :
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="nama skill"
              v-model="vdata.skill[index]"
            >
          </label>
        </div>
      </div>
    </div>
    {{vdata}}
    <!-- =========================================== -->
    <hr class="style13">
    <h2>SELECT INPUT</h2>
    <select class="form-control" v-model="vdata.selected">
      <option>taufik</option>
      <option>akbar</option>
      <option>maliki</option>
      <option>kino no tabi</option>
    </select>
    <!-- =========================================== -->
    <hr class="style13">
    <h2>RADIO INPUT</h2>
    <input type="radio" id="one" value="One" v-model="vdata.picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="vdata.picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ vdata.picked }}</span>
    <!-- =========================================== -->
    <hr class="style13">
    <h2>CHECKBOX INPUT</h2>
    <div id="example-3">
      <!-- note : checkedNames harus dalam bentuk array -->
      <input type="checkbox" id="taufik" value="taufik" v-model="vdata.checkedNames">
      <label for="taufik">taufik</label>
      <input type="checkbox" id="akbar" value="akbar" v-model="vdata.checkedNames">
      <label for="akbar">akbar</label>
      <input type="checkbox" id="maliki" value="maliki" v-model="vdata.checkedNames">
      <label for="maliki">maliki</label>
      <br>
      <span>Checked names: {{ vdata.checkedNames }}</span>
    </div>
    <!-- =========================================== -->
    <hr class="style13">
    <h2>INPUT AUTOCOMPLET(buefy)</h2>
    <!-- 
       data: [
              'Angular',
              'Angular 2',
              'Aurelia',
              'Backbone',
              'Ember',
              'jQuery',
              'Meteor',
              'Node.js',
              'Polymer',
              'React',
              'RxJS',
              'Vue.js'
          ],
          name: '',
          selected: null

    -->
    <b-autocomplete
      rounded
      v-model="name"
      :data="filteredDataArray"
      placeholder="e.g. jQuery"
      icon="magnify"
      @select="option => selected = option"
    >
      <template slot="empty">No results found</template>
    </b-autocomplete>
    <!-- =========================================== -->
    <hr class="style13">
    <h2>TANGGAL INPUT (buefy)</h2>
    <b-field label="Select a date">
      <b-datepicker placeholder="Click to select..." icon="calendar-today" v-model="vdata.tanggal"></b-datepicker>
    </b-field>
    <!-- =========================================== -->
    <hr class="style13">
    <h2>JAM INPUT (buefy)</h2>
    <b-field label="Select timepicker">
      <b-timepicker
        placeholder="Type or select a date..."
        icon="clock"
        v-model="vdata.jam"
        editable
      ></b-timepicker>
    </b-field>
    <!-- ==================================== -->
    <hr class="style13">
    <h2>INPUT FILE DRAG AND DROP (buefy)</h2>
    <!-- methods:{
       deleteDropFile(index) {
        this.dropFiles.splice(index, 1);
      }
    }
    note* dropFiles = array
    -->
    <section>
      <b-field>
        <b-upload v-model="dropFiles" multiple drag-drop>
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>Drop your files here or click to upload</p>
            </div>
          </section>
        </b-upload>
      </b-field>
      <div class="tags">
        <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
          {{file.name}}
          <button class="delete is-small" type="button" @click="deleteDropFile(index)"></button>
        </span>
      </div>
    </section>
    <!-- =========================================== -->
    <hr class="style13">
    <h2>SWITCH INPUT(buefy)</h2>
    <!-- note* switchData bisa dikasih value terlebih dahulu misal Yes -->
    <div class="field">
      <b-switch v-model="vdata.switchData" true-value="Yes" false-value="No">{{ vdata.switchData }}</b-switch>
    </div>
    <!-- =========================================== -->
    <hr class="style13">
    <h2>TAG INPUT (buefy)</h2>
    <!-- note* tags = array, bisa dikasih nilai terlebih dahulu ['taufik','akbar'] -->
    <b-field label="Add some tags">
      <b-taginput v-model="tags" ellipsis icon="label" placeholder="Add a tag"></b-taginput>
    </b-field>
    <!-- =========================================== -->
    <hr class="style13">
    <h2>DROPDOWN BUTTONS (buefy)</h2>
    <b-dropdown>
      <button class="button is-primary" slot="trigger">
        <span>Click me!</span>
        <b-icon icon="menu-down"></b-icon>
      </button>
      <b-dropdown-item>Action</b-dropdown-item>
    </b-dropdown>
    <!-- HOVERABLE -->
    <b-dropdown hoverable>
      <button class="button is-info" slot="trigger">
        <span>Hover me!</span>
        <b-icon icon="menu-down"></b-icon>
      </button>
      <b-dropdown-item>Action</b-dropdown-item>
    </b-dropdown>
    <br>

    <br>
    <br>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skill: [1],
      vdata: {
        // multiple input
        skill: [],
        selected: "",
        // radio
        picked: "",
        // checkbox
        checkedNames: [],
        // date picker
        tanggal: null,
        // jam picker
        jam: null,
        // switch
        switchData: "Yes"
      },
      // INPUT FILE
      dropFiles: [],
      // tag
      tags: ["Auckland", "Wellington", "Very long string that would overflow"],
      // autocomplete
      data: ["Angular", "Angular 2", "Vue.js"],
      name: "",
      selected: null
    };
  },
  computed: {
    //  autocomplete
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  },
  methods: {
    // input file
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    }
  }
};
</script>
