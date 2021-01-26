<template>
  <v-main>
    <v-btn v-if="!loading && !ready" @click="pressPlay">Play</v-btn>
    <div v-if="ready"><Score /><QuestionGrid /></div>
    <router-view></router-view>
  </v-main>
</template>

<script>
import QuestionGrid from "@/components/QuestionGrid";
import Score from "@/components/Score";
import axios from "axios";

// import a from "@/../data/a.json";
export default {
  name: "Quiz",
  components: {
    Score,
    QuestionGrid,
  },
  data() {
    return {
      isEmpty: true,
      jsons: [],
      loading: true,
      ready: false,
    };
  },
  methods: {
    pressPlay() {
      this.ready = true;
      this.$store.commit("resetPoints");
    },
  },
  mounted() {
    window.console.log("mounted");
    axios
      .get("https://leusmann.io:46980/topics")
      .then((response) => {
        window.console.log("response", response.data);
        response.data.forEach((element) => {
          window.console.log("element: ", element);
          this.$store.commit("AddTopic", element);
        });
      })
      .catch((error) => window.console.log(error))
      .finally(() => (this.loading = false));
  },
  created() {
  },
};
</script>