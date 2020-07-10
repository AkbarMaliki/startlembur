<template>
  <div>
    <template v-if="expire">EXPIRE</template>
    <template v-else>days {{day}} hour {{hour}} minute {{minute}} second {{sec}}</template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sec: 0,
      minute: 0,
      hour: 0,
      day: 0,
      expire: false
    };
  },
  mounted() {
    let that = this;
    //! Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
    // interval
    var countdown = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      that.day = Math.floor(distance / (1000 * 60 * 60 * 24));
      that.hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      that.minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      that.sec = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(countdown);
        that.expire = true;
      }
    }, 1000);
  }
};
</script>
