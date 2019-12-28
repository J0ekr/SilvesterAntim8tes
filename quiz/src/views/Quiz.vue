<template>
  <v-content>
    <QuestionGrid />
    <Score />
    <router-view></router-view>
  </v-content>
</template>

<script>
import QuestionGrid from "@/components/QuestionGrid";
import Score from "@/components/Score";

export default {
  name: "Quiz",
  components: {
    QuestionGrid,
    Score
  },
  data() {
    return {};
  }
};
</script>