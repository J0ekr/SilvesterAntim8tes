<template>
  <v-container class="grey lighten-5">
    <v-row :key="componentKey">
      <template v-for="t in $store.getters.newTopics">
        <v-col :key="t.topic.text">
          <v-card :color="t.topic.color" class="pa-2" outlined tile>{{
            t.topic.text
          }}</v-card>
          <v-card
            :color="t.q50.color"
            class="pa-2"
            outlined
            tile
            :disabled="t.q50.isClicked"
            :to="{
              path: '/Antim8s/Quiz/question/' + t.topic.text + '/' + 50,
            }"
            >{{ 50 }}</v-card
          >
          <v-card
            :color="t.q100.color"
            class="pa-2"
            outlined
            tile
            :disabled="t.q100.isClicked"
            :to="{
              path: '/Antim8s/Quiz/question/' + t.topic.text + '/' + 100,
            }"
            >{{ 100 }}</v-card
          >
          <v-card
            :color="t.q200.color"
            class="pa-2"
            outlined
            tile
            :disabled="t.q200.isClicked"
            :to="{
              path: '/Antim8s/Quiz/question/' + t.topic.text + '/' + 200,
            }"
            >{{ 200 }}</v-card
          >
        </v-col>
      </template>
    </v-row>
    <!-- <template v-for="q in $store.getters.QuestionValues">
      <v-row :key="q.nr">
        <template v-for="t in $store.getters.Topics">
          <v-col :key="t.nr">
            <v-card
              class="pa-2"
              outlined
              tile
              :disabled="$store.getters.Questions[t.text + q.text].isClicked"
              :color="$store.getters.Questions[t.text + q.text].col"
              :to="{ path: '/Antim8s/Quiz/question/' + t.text + '/' + q.text }"
            >
              <div v-if="q.nr < 2">
                <b>{{ t.text }}</b>
              </div>
              <div v-if="q.nr > 1">{{ q.text }}</div>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </template> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      componentKey: 0,
    };
  },

  watch: {
    $route() {
      window.console.log(this.$store.getters.QuizCounter);
      this.forceRerender();
      // if (this.$store.getters.QuizCounter >= 6) {
      //   this.$store.commit("resetQuizCounter");
      //   this.$router.push("/Antim8s/Game");
      // }
    },
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
</script>