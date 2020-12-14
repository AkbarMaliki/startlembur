<template>
  <div>{{$store.state.blog.data}}</div>
</template>
<script>
import axios from 'axios'
export default {
  // Watch for $route.query.page to call Component methods (asyncData, fetch, validate, layout, etc.)
  watchQuery: ['page'],
  // Key for <nuxt-child> (transitions)
  key: to => to.fullPath,
  // Called to know which transition to apply
  transition(to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
  data() {
    return {
      blog: []
    }
  },
  mounted() {
    let that = this
    console.log(this.$store.state.url)
    axios.get('http://localhost:3000/api/version').then(res => {
      console.log(res.data.data.version)
      console.log(this.$store.state.blog.version)
      console.log(this.$store.state.blog.data.length)
      if (this.$store.state.blog.data.length) {
        console.log('sudah ada')
        if (res.data.data.version == this.$store.state.blog.version) {
          console.log('versi nya sama')
        } else {
          console.log('versi nya beda')
          this.$store.dispatch('blog/refresh', res.data.data.version)
        }
      } else {
        console.log('belum ada')
        this.$store.dispatch('blog/refresh', res.data.data.version)
      }
    })
  }
}
</script>