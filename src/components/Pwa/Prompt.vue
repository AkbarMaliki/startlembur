<template>
  <div>
    <div class="countainer-pwa-promt">
      <span
        @mouseover="slideIt"
        @click="slideIt"
        class="typcn typcn-chevron-left cursor-pointer"
        style="font-size:34px;position:absolute;margin-top:16px;margin-left:-30px;"
      ></span>
      <span
        @mouseover="slideIt"
        @click="slideIt"
        class="typcn typcn-chevron-left cursor-pointer"
        style="font-size:34px;position:absolute;margin-top:16px;margin-left:-38px;"
      ></span>
      <div class="pwa-ui">
        <install/>
        <subscribe/>
      </div>
    </div>
  </div>
</template>
<script>
import Subscribe from '@/components/Pwa/Subscribe.vue'
import Install from '@/components/Pwa/Install.vue'
export default {
  methods: {
    slideIt() {
      this.$el
        .querySelector('.countainer-pwa-promt')
        .classList.toggle('slideNya')
    }
  },
  mounted() {
    let cek = localStorage.getItem('pwaPrompt')
    if (!cek) {
      this.$el
        .querySelector('.countainer-pwa-promt')
        .classList.remove('slideNya')
      setTimeout(() => {
        this.$el
          .querySelector('.countainer-pwa-promt')
          .classList.add('slideNya')
        localStorage.setItem('pwaPrompt', true)
      }, 3500)
    } else {
      this.$el.querySelector('.countainer-pwa-promt').classList.add('slideNya')
    }
  },
  components: {
    Subscribe,
    Install
  }
}
</script>
<style scoped>
.countainer-pwa-promt {
  box-shadow: 1px 2px 5px black;
  border-top-left-radius: 9%;
  width: 200px;
  background: white;
  position: fixed;
  bottom: 5px;
  right: 0px;
  transition: all ease 0.5s;
  padding: 5px;
}
.slideNya {
  right: -205px;
}
.pwa-ui {
}
</style>