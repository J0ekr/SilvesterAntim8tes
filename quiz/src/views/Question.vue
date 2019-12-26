<template>
  <div class="question">
    <h1 :v-bind="this.qID">{{this.qID}} {{this.question.content}}</h1>
    <v-row>
      <template v-for="t in this.Teams">
        <v-col v-bind:key="t.nr">
          <v-card 
          class="pa-2" 
          outlined 
          tile 
          @click="updatePoints(t)"
          >
            <div>Win {{t.name}}</div>
          </v-card>
        </v-col>
      </template>
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
      window.console.log("route changed:", this.qID, this.points)
    }
  },
  methods: {
    updatePoints(Team) {
      let points = this.$route.params.points;
      window.console.log("updatePoints:", Team, points);
      this.$store.commit("changeQuestionIsClicked", this.qID);
      this.$store.commit("changeTeamScore", { Team, points });
      this.$router.push('/')
    }
  },
  created() {
    this.Teams = this.$store.getters.Teams;
    
    this.qID = this.$route.params.id + this.$route.params.points;
    this.question = this.$store.getters.Questions[this.qID];
  }
};
</script>