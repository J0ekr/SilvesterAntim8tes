<template>
  <v-container>
    <div id="app">
      <h2>Random image in Vue.js:</h2>
      <!-- <div v-if="selectedVideo"> -->
      <!-- <visual
          transition="vv-fade"
          controls
          loop
          mute
          autoplay="visible"
          autopause="visible"
          :video="selectedVideo"
      ></visual>-->
      <v-img :src="Video"></v-img>
      <!-- </div> -->

      <PointsFooter />
    </div>
  </v-container>
</template>

<script>
import PointsFooter from "@/components/PointsFooter";
export default {
  components: {
    PointsFooter
  },
  data() {
    return {
      videos: [],
      test_video: "../assets/videos/v1.gif",
      selectedVideo: null,
      selectedVideoRequired: null
    };
  },

  methods: {
    randomItem(items) {
      let index = Math.floor(Math.random() * items.length);
      return items[index];
    }
  },
  created() {
    this.selectedVideo = this.randomItem(this.$store.getters.videos);
    this.$store.commit("setCurrentVideo", { video: this.selectedVideo });
  },
  computed: {
    Video() {
      if (!this.selectedVideo) {
        return;
      }

      const fileName = this.selectedVideo.toLowerCase();

      return require(`../assets/videos/${fileName}.gif`); // the module request
    }
  }
};
</script>
<style>
</style>