<template>
  <div>
    <no-ssr>
      <!-- directive -->
      <div class="images" v-viewer>
        <img src="https://i.pinimg.com/originals/5c/1f/35/5c1f35a71a9b022ec122eadd20cfc207.jpg">
        <img
          src="https://www.anime-planet.com/images/manga/covers/kinos-journey-the-beautiful-world-20856.jpg"
        >
      </div>
      <!-- component -->
      <viewer :images="images">
        <img v-for="src in images" :src="src" :key="src">
      </viewer>
    </no-ssr>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        'https://i.pinimg.com/originals/5c/1f/35/5c1f35a71a9b022ec122eadd20cfc207.jpg',
        'https://www.anime-planet.com/images/manga/covers/kinos-journey-the-beautiful-world-20856.jpg'
      ]
    }
  }
}
</script>