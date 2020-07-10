<template>
  <div>
    <div class="drag">
      <draggable class="dragArea" :list="list1" :options="{group:'people'}" @change="log">
        <transition-group
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <div v-for="(element, index) in list1" :key="index+'test2'">{{element.name}} {{index}}</div>
        </transition-group>
      </draggable>
      <draggable class="dragArea" :list="list2" :options="{group:'people'}" @change="log">
        <div v-for="(element, index) in list2" :key="index">{{element.name}}</div>
      </draggable>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    onItemChanged(event, curr, last) {
      console.log(curr);
    }
  },
  data() {
    return {
      hasil: "",
      list1: [
        {
          name: "vue.draggable",
          order: 1,
          fixed: false
        },
        {
          name: "draggable",
          order: 2,
          fixed: false
        },
        {
          name: "component",
          order: 3,
          fixed: false
        },
        {
          name: "for",
          order: 4,
          fixed: false
        },
        {
          name: "vue.js 2.0",
          order: 5,
          fixed: false
        },
        {
          name: "based",
          order: 6,
          fixed: false
        },
        {
          name: "on",
          order: 7,
          fixed: false
        },
        {
          name: "Sortablejs",
          order: 8,
          fixed: false
        }
      ],
      list2: [{ name: "Kino" }, { name: "Hermes" }]
    };
  },
  methods: {
    log(y) {
      console.log(y);
    },
    onItemChanged() {},
    itemChanged() {}
  }
};
</script>
<style scoped>
</style>