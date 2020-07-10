<template>
  <div id="closeDropdown">
    <!-- <dropdown :classs="'btns btns-sm'" :styless="''" :text="'list something'">
      <template slot='text'>teks</template>
          ${1:slot isi nya }
      </dropdown>
    import dropdown from '@/components/Single/Dropdown.vue'-->
    <button @click="show=!show;diklik()" :class="classs" :style="styless" style="z-index:10;">
      <slot name="text"/>
      <span class="typcn typcn-arrow-right animated fadeIn float-right" v-if="show"></span>
      <span class="typcn typcn-arrow-down animated fadeIn float-right" v-else></span>
    </button>
    <transition
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft"
      mode="out-in"
    >
      <div
        v-if="show"
        class="bg-white w-full rounded-sm shadow-md p-1"
        style="animation-duration:0.3s;z-index:1;"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    diklik() {
      this.$emit("gogo");
    }
  },
  mounted() {},
  props: {
    classs: {
      type: String,
      required: true
    },
    styless: {
      type: String,
      required: true
    }
  }
};
</script>
