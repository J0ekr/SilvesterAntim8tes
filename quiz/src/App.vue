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
    Navbar,
  },
  data() {
    return {};
  }
};
</script>