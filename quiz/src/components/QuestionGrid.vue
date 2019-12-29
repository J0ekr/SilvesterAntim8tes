<template>
  <v-container class="grey lighten-5">
    <template v-for="q in $store.getters.QuestionValues">
      <v-row :key="q.nr">
        <template v-for="t in $store.getters.Topics">
          <v-col :key="t.nr">
            <v-card
              class="pa-2"
              outlined
              tile
              :disabled="$store.getters.Questions[t.text+q.text].isClicked"
              :color="$store.getters.Questions[t.text+q.text].col"
              :to="{path: '/Antim8s/Quiz/question/' + t.text+'/'+q.text}"
            >
              <div v-if="q.nr < 2"><b>{{t.text}}</b></div>
              <div v-if="q.nr > 1">{{q.text}}</div>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </template>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      
      
    };
  },
  watch: {
    $route() {
      window.console.log(this.$store.getters.QuizCounter)
      if (this.$store.getters.QuizCounter >= 6) {
        this.$store.commit("resetQuizCounter");
        this.$router.push("/Antim8s/Game");
      }
    },
    created() {
      // this.Topics = this.$store.getters.Topics
    }
  }
};
</script>