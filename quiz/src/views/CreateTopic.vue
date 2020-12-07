<template>
  <v-app>
    <v-main>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-layout>
            <v-flex>
              <v-text-field
                dense
                outlined
                :rules="submitRule"
                label="Your Topic"
                color="primary"
                v-model="element.topic"
                @keypress.enter="submit()"
                required
              ></v-text-field>
              <v-text-field
                dense
                outlined
                :rules="submitRule"
                label="Your 50 Question"
                color="primary"
                v-model="element.q50.question"
                @keypress.enter="submit()"
                required
              ></v-text-field>
              <v-row>
                <v-col>
                  <v-text-field
                    dense
                    outlined
                    :rules="submitRule"
                    :label="'Correct Answer'"
                    color="primary"
                    v-model="element.q50.correctAnswer"
                    @keypress.enter="submit()"
                  ></v-text-field>
                </v-col>
                <template v-for="a in 3">
                  <v-col v-bind:key="a">
                    <v-text-field
                      dense
                      outlined
                      :rules="submitRule"
                      :label="'Incorrect answer ' + a"
                      color="primary"
                      v-model="element.q50.falseAnswers[a]"
                      @keypress.enter="submit()"
                    ></v-text-field>
                  </v-col>
                </template>
              </v-row>

              <v-text-field
                dense
                outlined
                :rules="submitRule"
                label="Your 100 Question"
                color="primary"
                v-model="element.q100.question"
                @keypress.enter="submit()"
                required
              ></v-text-field>
              <v-row>
                <v-col>
                  <v-text-field
                    dense
                    outlined
                    :rules="submitRule"
                    :label="'Correct Answer'"
                    color="primary"
                    v-model="element.q100.correctAnswer"
                    @keypress.enter="submit()"
                  ></v-text-field>
                </v-col>
                <template v-for="a in 3">
                  <v-col v-bind:key="a">
                    <v-text-field
                      dense
                      outlined
                      :rules="submitRule"
                      :label="'Incorrect answer ' + a"
                      color="primary"
                      v-model="element.q100.falseAnswers[a]"
                      @keypress.enter="submit()"
                    ></v-text-field>
                  </v-col>
                </template>
              </v-row>
              <v-text-field
                dense
                outlined
                :rules="submitRule"
                label="Your 200 Question"
                color="primary"
                v-model="element.q200.question"
                @keypress.enter="submit()"
                required
              ></v-text-field>
              <v-row>
                <v-col>
                  <v-text-field
                    dense
                    outlined
                    :rules="submitRule"
                    :label="'Correct Answer'"
                    color="primary"
                    v-model="element.q200.correctAnswer"
                    @keypress.enter="submit()"
                  ></v-text-field>
                </v-col>
                <template v-for="a in 3">
                  <v-col v-bind:key="a">
                    <v-text-field
                      dense
                      outlined
                      :rules="submitRule"
                      :label="'Incorrect answer ' + a"
                      color="primary"
                      v-model="element.q200.falseAnswers[a]"
                      @keypress.enter="submit()"
                    ></v-text-field>
                  </v-col>
                </template>
              </v-row>
            </v-flex>
          </v-layout>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="submit"
          >
            Submit
          </v-btn>
        </v-container>
      </v-form>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      element: {
        topic: "",
        q50: { question: "", correctAnswer: "", falseAnswers: [] },
        q100: { question: "", correctAnswer: "", falseAnswers: [] },
        q200: { question: "", correctAnswer: "", falseAnswers: [] },
      },
      submitRule: [(v) => !!v || "Fill Out all Fields."],
    };
  },

  methods: {
    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        window.console.log(this.element.topic);
        this.$store.commit("AddTopic", this.element);
      } else {
        window.console.log("Not all fields have been filled.");
      }
    },
  },
};
</script>

<style>
</style>