<template>
  <v-main fill-height fluid class="grey lighten-1">
    <Score />
    <v-row class="justify-center text-center"
      ><v-col
        ><h1>{{ winner.name }} won!</h1></v-col
      ></v-row
    >
  </v-main>
</template>

<script>
import Score from "@/components/Score";
export default {
  name: "EndScreen",
  components: {
    Score,
  },
  data() {
    return {
      winner: {
        name: "",
        score: 0,
      },
    };
  },
  created() {
    const teams = this.$store.getters.Teams;
    Object.keys(teams).forEach((element) => {
      if (teams[element].score > this.winner.score) {
        this.winner.name = teams[element].text;
        this.winner.score = teams[element].score;
      } else if (teams[element].score == this.winner.score) {
        this.winner.name = this.winner.name + " & " + teams[element].text;
      }
    });
    this.$store.commit("endGame");
  },
};
</script>

<style>
</style>