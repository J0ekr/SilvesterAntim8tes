<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
        <v-list-item-icon>
          <v-icon class="black--text">{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="black--text">{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer> 

  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title app>
      <span class="font-weight-light">Antim</span>
        <span>8</span>
        <span class="font-weight-light">s</span>
    </v-toolbar-title>
  </v-app-bar> 
  </nav>
</template>

<script>
  export default {
    data () {
      return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Home', route: '/Antim8s/' },
        { icon: 'mdi-folder', text: 'Quiz', route: '/Antim8s/Quiz' },
        { icon: 'mdi-settings', text: 'Settings', route: '/Antim8s/Settings' },
        { icon: 'mdi-play', text: 'Game', route: '/Antim8s/Game' },
        { icon: 'mdi-upload', text: 'Upload', route: '/Antim8s/Upload' },
        { icon: 'mdi-library-video', text: 'Diashow', route: '/Antim8s/Diashow' }
      ]
      }
    },
  }
</script>