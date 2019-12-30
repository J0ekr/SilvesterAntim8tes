<template>
  <div class="question">
    <div align="center">
      <v-spacer></v-spacer>
      <v-card class="cyan darken-3">
        <h1 key:v-bind="this.qID">{{this.qID}}: {{this.question.content}}</h1>
      </v-card>
    </div>
    <div :v-if="!!this.question.answers">
      <v-container class="grey lighten-5" align="center">
        <v-row no-gutters justify="center" align="center">
          <template v-for="n in indices">
            <v-col :key="n">
              <v-card class="pa-2" outlined tile>{{question.answers[n]}}</v-card>
            </v-col>
            <v-responsive v-if="n === 2" :key="`width-${n}`" width="100%"></v-responsive>
          </template>
        </v-row>
      </v-container>
    </div>
    <PointsFooter />
  </div>
</template>
<script>
import PointsFooter from "@/components/PointsFooter";
export default {
  components: {
    PointsFooter
  },
  data() {
    return {
      qID: null,
      question: null,
      answers: [],
      indices: [1, 2, 3, 4]
    };
  },

  watch: {
    $route() {
      this.qID = this.$route.params.id + this.$route.params.points;
      this.question = this.$store.getters.Questions[this.qID];
      window.console.log("route changed:", this.qID, this.points);
    }
  },

  created() {
    this.NoWinner = "NoWinner";
    this.qID = this.$route.params.id + this.$route.params.points;
    this.question = this.$store.getters.Questions[this.qID];
    if (!this.question.answers) {
      this.question.answers = ["", "A", "B", "C", "D"];
    }
  }
};
</script>