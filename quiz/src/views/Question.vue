<template>
  <div class="question">
    <div align="center">
      
      <v-card><h1 key:v-bind="this.qID">{{this.qID}}: {{this.question.content}}</h1></v-card>
    </div>
    <v-row no-gutters>
      <template :v-if="this.question.answers" v-for="n in this.question.answers">
        <v-col :key="n">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            {{n}}
          </v-card>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
      </template>
    </v-row>
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
      answers: []
     
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

  }
};
</script>