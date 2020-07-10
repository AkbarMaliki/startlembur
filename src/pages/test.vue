<template>
  <div>
    <button type="button" @click="test" class="btn btn-sm btn-primary">test</button>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
export default {
  data() {
    return {};
  },
  methods: {
    async readIds(collection, ids) {
      const reads = ids.map(id => collection.doc(id).get());
      const result = await Promise.all(reads);
      return result.map(v => v.data());
    },
    test() {
      db.collection("table1")
        .get()
        .then(res => {
          let data = res.docs.map(e => e.data());
          db.collection("table2")
            .get()
            .then(res2 => {
              let data2 = res2.docs.map(e => e.data());
              console.log(data)
              console.log(data2)
              let leftjoin = _.map(data2, function(obj) {
                return _.assign(
                  obj,
                  _.find(data1, {
                    id: obj.id
                  })
                );
              });
              console.log(leftjoin)
            });
        });

      // console.log(leftjoin);
    }
  },
  mounted() {}
};
</script>