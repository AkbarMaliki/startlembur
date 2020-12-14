<template>
  <div>
    <button
      type="button"
      @click="$router.push('/testing/wemos/relay_shield')"
      class="btn btn-sm btn-primary btn-block"
    >Relay Shield</button>
    <button
      type="button"
      @click="$router.push('/testing/wemos/ultra_sonic')"
      class="btn btn-sm btn-primary btn-block"
    >Ultra Sonic</button>
    <button
      type="button"
      @click="$router.push('/testing/wemos/infra_red')"
      class="btn btn-sm btn-primary btn-block"
    >Infra Red</button>
     <button
      type="button"
      @click="$router.push('/testing/wemos/sms')"
      class="btn btn-sm btn-primary btn-block"
    >SMS Module</button>
  </div>
</template>
 <script>
export default {}
</script>