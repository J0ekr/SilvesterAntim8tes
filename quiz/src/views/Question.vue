<template>
  <div class="question">
    <div aign="center">
      <h1 key:v-bind="this.qID">{{this.qID}}</h1>
    </div>
    <h2>{{this.question.content}}</h2>
    <v-footer app class="blue-grey darken-3">
      <v-row>
        <template v-for="t in this.$store.getters.Teams">
          <v-col v-bind:key="t.nr">
            <v-card class="text-center pa-2" outlined tile @click="updatePoints(t)">
              <div>Win {{t.text}}</div>
            </v-card>
          </v-col>
        </template>
        <v-col>
          <v-card class="text-center pa-2" outlined tile @click="updatePoints(NoWinner)">
            <div>No Winner</div>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qID: null,
      question: null,
      points: null
    };
  },

  watch: {
    $route() {
      this.points = this.$route.params.points;
      this.qID = this.$route.params.id + this.$route.params.points;
      this.question = this.$store.getters.Questions[this.qID];
      window.console.log("route changed:", this.qID, this.points);
    }
  },
  methods: {
    updatePoints(Team) {
      this.$store.commit("increaseGameCounter");
      this.$store.commit("changeQuestionIsClicked", this.qID);
      if (Team != "NoWinner") {
        let points = this.$route.params.points;
        this.$store.commit("changeTeamScore", { Team, points });
      }
      this.$router.push("/Quiz");
    }
  },
  created() {
    this.NoWinner = "NoWinner";
    this.qID = this.$route.params.id + this.$route.params.points;
    this.question = this.$store.getters.Questions[this.qID];
  }
};
</script>