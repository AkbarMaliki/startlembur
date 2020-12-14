<template>
  <div>
    {{tanggal}}
    <br>
    distance : {{distance }}
    <br>
    format : {{format}}
    <br>
    format distanceToNow : {{distanceToNow}}
    <hr class="style13">
    <a
      target="_blank"
      href="https://date-fns.org/v1.30.1/docs/addMonths"
    >https://date-fns.org/v1.30.1/docs/addMonths</a>
  </div>
</template>

<script>
var id = require("date-fns/locale/id");
export default {
  computed: {
    distance() {
      return this.$datefns.distanceInWords(
        new Date("2018-12-25T03:21:12.941Z"),
        new Date(),
        {
          locale: id,
          includeSeconds: true
        }
      );
      return result;
    },
    format() {
      return this.$datefns.format(
        new Date(2014, 6, 2),
        "[di tanggal] dddd MMMM YYYY",
        {
          locale: id
        }
      );
    },
    distanceToNow() {
      return this.$datefns.distanceInWordsToNow(
        new Date(2015, 0, 1, 0, 0, 15),
        {
          locale: id,
          includeSeconds: true
        }
      );
      //=> "3 days ago"
    }
  }
};
</script>