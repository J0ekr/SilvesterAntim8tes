<template>
  <v-app>
    <Navbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
// import { store } from './store/store'

export default {
  // store,

  name: "App",
  components: {
    Navbar
  },
  data() {
    return {};
  },
  methods: {
    addVideos() {
      const videos = require.context("@/assets/", true, /^.*\.gif$/);
      var keys = videos.keys();
      var v_list = []
      for (let index = 1; index < keys.length+1; index++) {
        v_list.push("v"+index)
        
      }
      window.console.log(v_list)
      this.$store.commit("populateVideos", { videos: v_list });
    }
  },
  created() {
    this.addVideos();
  }
};
</script>