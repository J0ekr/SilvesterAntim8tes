<template>
  <div class="question">
    <h1 :v-bind="this.qID">{{this.qID}} </h1>
    <h2>{{this.question.content}}</h2>
    <v-row>
      <template v-for="t in this.Teams">
        <v-col v-bind:key="t.nr">
          <v-card class="pa-2" outlined tile @click="updatePoints(t)">
            <div>Win {{t.name}}</div>
          </v-card>
        </v-col>
      </template>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-2" outlined tile @click="updatePoints(NoWinner)">
          <div>No Winner</div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  watch: {
    $route() {
      this.Teams = this.$store.getters.Teams;
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
      this.$router.push("/");
    }
  },
  created() {
    this.Teams = this.$store.getters.Teams;
    this.NoWinner = "NoWinner";
    this.qID = this.$route.params.id + this.$route.params.points;
    this.question = this.$store.getters.Questions[this.qID];
  }
};
</script>