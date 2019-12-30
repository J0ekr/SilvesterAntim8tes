<template>
<v-content>
  <v-container>
    <div id="app">
      <div v-if="this.dateCheck">
        <visual
          transition="vv-fade"
          aspect="16:10"
          controls
          mute
          autoplay="false"
          autopause="visible"
          :video="Video"
        ></visual>
      </div>
      <div v-else>Bilder gibts erst ab Silvester ;)</div>
      <v-footer app class="blue-grey darken-3">
        <v-row>
          <div align="center">
            <v-btn @click="prev">Previous</v-btn>
            <v-btn @click="next">Next</v-btn>
          </div>
        </v-row>
      </v-footer>
    </div>
    <router-view></router-view>
  </v-container>
</v-content>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selectedVideo: null,
      dateCheck: false,
    };
  },

  methods: {
    next() {
      window.console.log(this.$store.getters.dia_index);
      if (this.$store.getters.dia_index < this.$store.getters.videos_og.length) {
        this.$store.commit("increasediaidx")
        this.selectedVideo = this.$store.getters.videos_og[this.$store.getters.dia_index];
      } 
      
    },
    prev() {
      if (this.$store.getters.dia_index > 2) {
        this.$store.commit("decreasediaidx")
        this.selectedVideo = this.$store.getters.videos_og[this.$store.getters.dia_index];
      } 
    }
  },
  created() {
    this.selectedVideo = this.$store.getters.videos_og[this.$store.getters.dia_index];
  },
  computed: {
    Video() {
      if (!this.selectedVideo) {
        return;
      }
      const fileName = this.selectedVideo.toLowerCase();

      return require(`../assets/videos/${fileName}.mp4`); // the module request
    },
    currentDate() {
      let silvester = new Date(2019, 11, 31, 20, 0, 0, 0); //TODO
      let d = Date.now() > silvester;
      return d;
    }
  }
};
</script>
<style>
</style>