<template>
  <v-container>
    <v-footer app class="cyan darken-3">
      <v-row>
        <template v-for="t in this.$store.getters.Teams">
          <v-col v-bind:key="t.nr">
            <v-card class="text-center pa-2" outlined tile @click="updatePoints(t)">
              <div><b>Win</b> {{t.text}}</div>
            </v-card>
          </v-col>
        </template>
        <v-col>
          <v-card class="text-center pa-2" outlined tile @click="updatePoints(NoWinner)">
            <div><b>No Winner</b></div>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      points: null,
      qID: null
    };
  },
  methods: {
    updatePoints(Team) {
      if (this.$route.params.id != null) {
        this.$store.commit("increaseQuizCounter");
        this.$store.commit("changeQuestionIsClicked", {q: this.$route.params.id, v: this.$route.params.points});
        if (Team != "NoWinner") {
          let points = this.$route.params.points;
          this.$store.commit("changeTeamScore", { Team, points });
        }
        this.$router.push("/Antim8s/Quiz");
      } else {
        this.$store.commit("removeVideo");
        if (Team != "NoWinner") {
          let points = 20;
          this.$store.commit("changeTeamScore", { Team, points });
        }
        window.console.log(this.$store.getters.GameCount);
        if (this.$store.getters.GameCount < 4) {
          this.$store.commit("increaseGameCount");
          this.$router.push("/Antim8s/Game");
        } else {
          this.$store.commit("resetGameCount");
          this.$router.push("/Antim8s/Quiz");
        }
      }
    }
  },
  $route() {
    this.points = this.$route.params.points;
    this.qID = this.$route.params.id + this.$route.params.points;
  },
  created() {
    this.NoWinner = "NoWinner";
    this.qID = this.$route.params.id + this.$route.params.points;
    this.question = this.$store.getters.newTopics[this.$route.params.id][
      "q" + this.$route.params.points
    ];
  }
};
</script>