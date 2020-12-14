<template>
  <div>
    <div id="header" class="text-center">
      <hr class="style1">
      <h1>HEADER</h1>
      <hr class="style1">
    </div>
    <div id="body" class="text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sunt eum quasi aperiam blanditiis voluptatibus tenetur nam ut, quidem libero, consequatur possimus explicabo debitis mollitia distinctio accusantium sit quas aspernatur.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, dolore voluptatum aliquam doloribus, at dolorem mollitia deserunt placeat, odit accusantium aspernatur reprehenderit nobis non. Fuga hic quibusdam debitis autem nihil!
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    window.print();
  }
};
</script>
<style scoped>
@page {
  size: auto; /* auto is the initial value */

  /* this affects the margin in the printer settings */
  margin: 2cm 2cm 3cm 3cm;
}

body {
  /* this affects the margin on the content before sending to printer */
  margin: 0px;
}
</style>