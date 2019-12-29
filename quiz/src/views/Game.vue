<template>
  <v-app>
    <v-content>
      <v-card-actions class="justify-center align-center">
        <v-btn v-if="checkRoute" class="text-center" :to="{path: '/Antim8s/Game/Picture/' + 20}">Show Picture</v-btn>
        
      </v-card-actions>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Game",
  computed: {
    checkRoute() {
      return this.$route.path == "/Antim8s/Game";
    }
  },
  
};
</script>

