<template>
  <div>
    <hr class="style2" />vue-wysiwyg: &#9728;
    <br />
    <wysiwyg v-model="youget" />
    {{youget}}
    <br />vue2-editor: &#9728;
    <br />
    <vue-editor v-model="editor"></vue-editor>
    {{editor}}
    <button type="button" @click="$router.go(-1)" class="btn btn-sm btn-primary">KEMBALI</button>
  </div>
</template>
<script>
import wysiwyg from 'vue-wysiwyg'
import {
  VueEditor
} from 'vue2-editor'
import Vue from 'vue'
Vue.use(wysiwyg, {
  //! cara menggunakan
  image: {
    uploadURL: process.env.HOST_URL + '/api/data/upload',
    dropzoneOptions: {}
  }
})
export default {
  components:{
VueEditor,wysiwyg
  },
  data() {
    return {
      youget: "",
      editor: ""
    };
  }
};
</script>
