<template>
  <div>
    <p>MAIN</p>
    {{$store.state.users}}
    <button
      type="button"
      @click="$router.push('/testing/php/login')"
      class="btn btn-sm btn-primary"
    >login</button>
    <button type="button" @click="logout" class="btn btn-sm btn-danger">Logout</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vdata: {}
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
