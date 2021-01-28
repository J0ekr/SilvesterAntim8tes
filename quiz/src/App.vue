<template>
  <v-app>
    <Navbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  // store,

  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      
    };
  },
  methods: {
    addVideos() {
      const videos = require.context("@/assets/", true, /^.*\.mp4$/);
      var keys = videos.keys();
      var v_list = [];
      for (let index = 0; index < keys.length; index++) {
        v_list.push("v" + index);
      }
      this.$store.commit("populateVideos", { videos: v_list });
    },
    
  },
  created() {
    this.addVideos();
    
  },
  mounted() {}
};
</script>
<style>
.v-application {
   font-size: 20px
 }
 .v-main {
   font-size: 20px
 }
</style>