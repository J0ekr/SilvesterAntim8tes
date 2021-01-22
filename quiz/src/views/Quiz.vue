<template>
  <v-main>
    <QuestionGrid />
    <Score />
    <router-view></router-view>
  </v-main>
</template>

<script>
import QuestionGrid from "@/components/QuestionGrid";
import Score from "@/components/Score";
// import a from "@/../data/a.json";
export default {
  name: "Quiz",
  components: {
    QuestionGrid,
    Score,
  },
  data() {
    return {
      isEmpty: true,
    };
  },
  methods: {},
  created() {
    const tmp = require.context("./../../../backend/uploads", true, /^.*\.json$/);
    window.console.log(this.$store.getters.newTopics.length, tmp.keys().length);
    if (this.$store.getters.newTopics.length != tmp.keys().length) {
      tmp.keys().forEach((element) => {
        this.$store.commit("AddTopic", tmp(element));
      });
      this.isEmpty = false;
    }
  },
};
</script>