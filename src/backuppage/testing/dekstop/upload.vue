<template>
  <div>
    <Uploader @upload="img = $event" @resetInput="imageReset" :multi="false"/>
    <button type="button" @click="upload" class="btn btn-sm btn-primary">upload</button>
  </div>
</template>
<script>
import axios from 'axios'
import Uploader from '@/components/Single/Uploader.vue'
export default {
  components: {
    Uploader
  },
  data() {
    return {
      img: []
    }
  },
  methods: {
    upload() {
      let fd = new FormData()
      fd.append('photos', this.img)
      axios
        .post('https://hulustore.herokuapp.com/api/data/upload', fd)
        .then(res => {
          console.log(res)
        })
    },
    imageReset() {
      alert('y')
    }
  }
}
</script>