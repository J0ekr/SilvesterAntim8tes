<template>
  <div class="question">
    <div aign="center">
      <h1 key:v-bind="this.qID">{{this.qID}}</h1>
    </div>
    <h2>{{this.question.content}}</h2>
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