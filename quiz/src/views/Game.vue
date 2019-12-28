<template>
  <v-app>
    <v-content>
      <div id="app">
        <h2>Random image in Vue.js:</h2>
        <p v-if="selectedImage">
          <img style="width:100%" :src="selectedImage" alt />
        </p>
      </div>
      <PointsFooter />
    </v-content>
  </v-app>
</template>

<script>
import PointsFooter from '@/components/PointsFooter'
export default {
  name: "Game",
  components: {
    PointsFooter
  },
  data() {
    return {
      images: [
        "https://picsum.photos/600/200",
        "https://picsum.photos/600/200",
        "https://picsum.photos/600/200"
      ],
      selectedImage: null
    };
  },
  methods: {
    randomItem(items) {
      return items[Math.floor(Math.random() * items.length)];
    }
  },
  created() {
    this.selectedImage = this.randomItem(this.images);
  }
};
</script>