<template>
  <div>
    <h1>START</h1>
    <div style="height:900px;"></div>
    {{isVisible}}
    <h2 v-observe-visibility="visibilityChanged">END</h2>
    <div class="bg-blue h-100px w-full" v-if="isVisible">muncul kan ini</div>
    <div style="height:900px;"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible
      console.log(entry)
    }
  }
}
</script>
