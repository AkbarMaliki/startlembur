<template>
  <section>
    <!-- NOTE 
      default sort dipilih pada title id atau no
      b-table-column = td 
      untuk mengakses item di data cukup akses melalui props.row = this.datanya[index]
      b-table-column label=penamaan th 
      b-table-column field=id dari th
    -->
    <!-- MULAI -->
    <!-- SEARCH -->
    <div class="sm-form" style="width:200px;">
      <input
        type="text"
        id="search"
        name="search"
        class="form-control form-control-sm"
        placeholder="search"
        v-model="search"
      />
    </div>
    <b-table
      v-if="!loading"
      :data="datanya"
      :per-page="10"
      :bordered="true"
      :striped="true"
      :narrowed="true"
      :hoverable="true"
      :loading="loading"
      :focusable="true"
      :mobile-cards="true"
      :paginated="true"
      :default-sort-direction="'asc'"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      default-sort="id"
    >
      <template slot-scope="props">
        <b-table-column
          :field="item"
          sortable
          :label="changeTH(item)"
          :width="item=='id' ? 40 : ''"
          v-for="(item, index) in keys"
          :key="index+'keys'"
        >
          <span
            style="display:block;cursor:pointer;"
            @click="pilih(props.row)"
          >{{ props.row[item] }}</span>
        </b-table-column>
        <!-- <b-table-column field="id" sortable label="ID" width="40" numeric>{{ props.row.id }}</b-table-column>
        <b-table-column field="first_name" sortable label="First Name">{{ props.row.first_name }}</b-table-column>
        <b-table-column field="last_name" sortable label="Last Name">{{ props.row.last_name }}</b-table-column>
        <b-table-column field="date" sortable label="Date" centered>
          <span class="tag is-success">{{ new Date(props.row.date).toLocaleDateString() }}</span>
        </b-table-column>
        <b-table-column label="Gender">
          <b-icon pack="fas" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"></b-icon>
          {{ props.row.gender }}
        </b-table-column>-->
        <b-table-column field="tes" sortable label="test Name">
          <button type="button" @click="del(props.row)" class="btn btn-sm btn-primary">delete</button>
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large"></b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      loading: true,
      search: ""
    };
  },
  methods: {
    pilih(item) {
      console.log(item);
    },
    del(item) {
      console.log(item);
    },
    changeTH(item) {
      let data = item;
      data = data.replace("_", " ");
      data = data.charAt(0).toUpperCase() + data.slice(1);
      return data;
    },
    refresh() {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
        this.data = res.data;
        console.log(res.data);
        this.loading = false;
      });
    }
  },
  mounted() {
    this.refresh();
  },
  computed: {
    keys() {
      let data = this.data;
      return Object.keys(data[0]);
    },
    datanya() {
      let data = this.data;
      let hasil = false;
      let keys = Object.keys(data[0]);
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
      return data;
    }
  }
};
</script>
<style>
/* TH STYLE */
th.is-sortable {
  background: rgb(132, 174, 207);
  text-transform: uppercase;
}
/* TH TEXT STYLE */
div.th-wrap {
  /* color: white; */
}
/* STRIPPED */
div.table-wrapper > table > tbody > tr:nth-of-type(odd) {
  background: rgba(240, 240, 241, 0.945);
}
</style>