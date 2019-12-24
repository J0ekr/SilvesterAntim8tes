<template>
<v-app>
  <Navbar />
  <v-content>
    <QuestionGrid />
    <Score />
    <router-view></router-view>
    
  </v-content>
</v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import QuestionGrid from '@/components/QuestionGrid'
import Score from '@/components/Score'

  export default {
  name: "App",
  components: {
    Navbar, 
    QuestionGrid, 
    Score
  },
  data () {
    return {

    }
  }

  }
</script>