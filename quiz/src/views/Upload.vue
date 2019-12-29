<template>
  <v-app>
    <v-content>
      <v-expansion-panels focusable popout class="mb-6">
        <v-container>
          <template v-for="(topic,i) in this.$store.getters.Topics">
            <v-expansion-panel v-bind:key="topic.text+panel">
              <v-expansion-panel-header v-bind:key="topic.text+header">{{topic.text}}</v-expansion-panel-header>
              <v-expansion-panel-content v-bind:key="topic.text+content">
                <template v-for="(question, j) in $store.getters.QuestionValues">
                  <v-text-field
                    dense
                    outlined
                    v-if="question.nr > 1"
                    v-bind:key="topic.text+question.text"
                    :label="quest+question.text"
                    color="primary"
                    v-model="questions[i][j]"
                    @keypress.enter="show"
                  ></v-text-field>
                  <v-row v-bind:key="topic.text+question.text+row">
                    <template v-for="a in 4">
                      <v-col v-bind:key="topic.text+question.text+a+col">
                        <v-text-field
                          dense
                          outlined
                          v-if="question.nr > 1"
                          v-bind:key="topic.text+question.text+a"
                          :label="antwort+a"
                          color="primary"
                          v-model="answers[i][j][a]"
                          @keypress.enter="show"
                        ></v-text-field>
                      </v-col>
                    </template>
                  </v-row>
                </template>
                <v-btn
                  v-bind:key="topic.text+button"
                  depressed
                  tile
                  color="error"
                  class="ma-0"
                  @click="show(i)"
                >Submit</v-btn>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </template>
        </v-container>
      </v-expansion-panels>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      button: "button",
      header: "header",
      content: "content",
      panel: "panel",
      row: "row",
      col: "col",
      antwort: "Answer ",
      quest: "Question ",
      input: [],
      questions: {
        T1: [],
        T2: [],
        T3: [],
        T4: [],
        T5: [],
        T6: [],
        T7: [],
        T8: [],
        T9: [],
        T10: [],
        T11: [],
        T12: []
      },
      answers: {
        T1: { q50: [], q100: [], q200: [] },
        T2: { q50: [], q100: [], q200: [] },
        T3: { q50: [], q100: [], q200: [] },
        T4: { q50: [], q100: [], q200: [] },
        T5: { q50: [], q100: [], q200: [] },
        T6: { q50: [], q100: [], q200: [] },
        T7: { q50: [], q100: [], q200: [] },
        T8: { q50: [], q100: [], q200: [] },
        T9: { q50: [], q100: [], q200: [] },
        T10: { q50: [], q100: [], q200: [] },
        T11: { q50: [], q100: [], q200: [] },
        T12: { q50: [], q100: [], q200: [] }
      }
    };
  },
  watch: {},
  methods: {
    show() {
      window.console.log(this.questions);
      window.console.log(this.answers);
    }
  },
  computed: {
    isQuestion(q) {
      return q.text != "";
    }
  }
};
</script>

<style>
</style>