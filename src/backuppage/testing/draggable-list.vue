<template>
  <div>
      <button class="btn btn-secondary button" @click="add">Add</button>
      <draggable tag="ul" :list="list" class="list-group" handle=".handle">
        <li
          class="list-group-item"
          v-for="(item, idx) in list"
          :key="item.name"
        >
          <i class="fa fa-align-justify handle"></i>
          <input type="text" class="form-control ml-2" v-model="item.text" />
          <i class="fa fa-times close" @click="removeAt(idx)"></i>
        </li>
      </draggable>
      {{list}}
  </div>
</template>

<script>
 import draggable from 'vuedraggable'
let id = 2;
export default {
     components: {
            draggable,
        },
  data() {
    return {
      list: [
        { text: "", id: 0 },
        { text: "", id: 1 },
        { text: "", id: 2 }
      ],
    };
  },
  methods: {
    removeAt(idx) {
      this.list.splice(idx, 1);
    },
    add: function() {
      id++;
      this.list.push({id, text: "" });
    }
  }
};
</script>
<style scoped>
.button {
  margin-top: 35px;
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}
.close {
  float: right;
  padding-top: 8px;
  padding-bottom: 8px;
}
.inputs {
  display: inline-block;
  width: 50%;
}
.text {
  margin: 20px;
}
</style>