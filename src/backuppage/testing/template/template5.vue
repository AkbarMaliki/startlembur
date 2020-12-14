<template>
  <div>
    <navigation1 />
    <hr class="style13" />
    <!-- TEXT BERITA BERJALAN -->
    <h2 class="font-bold text-center">Text berita berjalan</h2>
    <beritaRunningText :beritas="beritas" />
    <!-- BERITA CAROUSEL -->
    <hr class="style13" />
    <h2 class="text-center">carousel berjalan</h2>
    <br />
    <beritaCarousel :beritas="beritas" />
    <hr class="style13" />
    <h2 class="text-center">card</h2>
    <br />
    <beritaCard :beritas="beritas" />
    <hr class="style13" />
    <h2 class="text-center">lingkaran</h2>
    <br />
    <beritaLingkaran :beritas="beritas" />
    <hr class="style13" />
    <h2 class="text-center">card 2</h2>
    <br />
    <beritaCard2 />
    <h2 class="text-center">list berita</h2>
    <br />
    <beritaList :beritas="beritas" />
    <div style="height:500px;"></div>
  </div>
</template>
<script>
import navigation1 from "@/components/Web/navigation1.vue";
import beritaRunningText from "@/components/Web/beritaRunningText.vue";
import beritaCarousel from "@/components/Web/beritaCarousel.vue";
import beritaCard from "@/components/Web/beritaCard.vue";
import beritaLingkaran from "@/components/Web/beritaLingkaran.vue";
import beritaCard2 from "@/components/Web/beritaCard2.vue";
import beritaList from "@/components/Web/beritaList.vue";
export default {
  components: {
    beritaCarousel,
    beritaCard,
    beritaLingkaran,
    beritaRunningText,
    beritaCard2,
    navigation1,
    beritaList
  },
  data() {
    return {
      test: "test",
      beritas: [
        {
          judul: "Berita 1",
          isi: "ini adalah isi berita no 1",
          viewed: 100,
          createdAt: new Date(),
          createdBy: "taufik",
          tags: "novel, anime, journey, kino , best anime",
          gambar:
            "http://girlsincapes.com/wp-content/uploads/2017/09/Kino-no-Tabi-The-Beautiful-World-Light-Novel-Visual-640x347.jpg"
        },
        {
          judul: "Berita 2",
          isi: "bagian berita 2 agak sedikit beda",
          viewed: 80,
          createdAt: new Date(),
          createdBy: "taufik",
          tags: "novel, anime, journey, kino , best anime",
          gambar:
            "https://static.zerochan.net/Kino.%28Kino.no.Tabi%29.full.1936145.jpg"
        },
        {
          judul: "Berita 3",
          isi: "Lorem asd asd edw sadw sad wdsa dwd dwed sadwd",
          viewed: 60,
          createdAt: new Date(),
          createdBy: "taufik",
          tags: "novel, anime, journey, kino , best anime",
          gambar: "https://static.zerochan.net/Kino.no.Tabi.full.854647.jpg"
        },
        {
          judul: "Berita 4",
          isi: "mau nya sih lorem lagi tapi ya gimana lagi",
          viewed: 60,
          createdAt: new Date(),
          createdBy: "taufik",
          tags: "novel, anime, journey, kino , best anime",
          gambar: "http://www.wratbox.com/crap/kinomauser_wp1024.jpg"
        },
        {
          judul: "Berita 5",
          isi: "sexy tania on bikini",
          viewed: 60,
          createdAt: new Date(),
          createdBy: "taufik",
          tags: "novel, anime, journey, kino , best anime",
          gambar:
            "https://i.pinimg.com/474x/44/f2/e1/44f2e141e5f5eae15221bc5e4ef91657.jpg"
        }
      ]
    };
  },
  methods: {
    tests() {
      alert("y");
    }
  },
  filters: {
    //  limit text 20 character panjangnya
    truncate(value) {
      if (value.length > 20) {
        value = value.substring(0, 57) + "...";
      }
      return value;
    }
  }
};
</script>
<style scoped>
</style>