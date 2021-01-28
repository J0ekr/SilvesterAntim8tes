<template>
  <v-app>
    <v-main>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        :disabled="dialogLoading"
      >
        <v-container>
          <v-layout>
            <v-flex>
              <v-alert dense text type="success" v-if="success">
                <strong>Success!</strong> Your topic is created.
              </v-alert>
              <v-alert dense text type="error" v-if="error">
                <strong>Error!</strong> There was an error uploading your topic.
                Try again or message the server admin.
              </v-alert>
              <v-text-field
                dense
                outlined
                :rules="submitRule"
                label="Your Topic"
                color="primary"
                v-model="element.topic.text"
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
                <v-col cols="6" md="3" lg="3">
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
                  <v-col v-bind:key="a" cols="6" md="3" lg="3">
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
                <v-col cols="6" md="3" lg="3">
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
                  <v-col v-bind:key="a" cols="6" md="3" lg="3">
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
                <v-col cols="6" md="3" lg="3">
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
                  <v-col v-bind:key="a" cols="6" md="3" lg="3">
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

          <v-row>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-6"
              @click="submit"
            >
              Submit
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
      <v-dialog v-model="dialogLoading" hide-overlay persistent width="300"
        ><v-card color="primary" dark>
          <v-card-text>
            Uploading
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text> </v-card
      ></v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      valid: true,
      dialogLoading: false,
      dialogDone: false,
      success: false,
      error: false,
      message: "grey",
      file: "",
      element: {
        topic: { text: "", color: "red lighten-2" },
        q50: {
          question: "",
          correctAnswer: "",
          falseAnswers: [],
          isClicked: false,
          color: "cyan lighten-1",
        },
        q100: {
          question: "",
          correctAnswer: "",
          falseAnswers: [],
          isClicked: false,
          color: "cyan darken-1",
        },
        q200: {
          question: "",
          correctAnswer: "",
          falseAnswers: [],
          isClicked: false,
          color: "cyan darken-2",
        },
      },
      submitRule: [(v) => !!v || "Fill Out all Fields."],
    };
  },

  methods: {
    async onSubmit() {
      const data = JSON.stringify(this.element);
      window.console.log("onSubmit", data);
      this.dialogLoading = true;
      await axios
        .post("https://leusmann.io:46980/uploads", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.reset();
          this.success = true;
          window.console.log(response);
        })
        .catch((error) => {
          this.error = true;
          window.console.log(error);
        })
        .finally(() => {
          this.dialogLoading = false;
        });
    },
    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        window.console.log(this.element.topic.text);
        // this.$store.commit("AddTopic", this.element);
        this.onSubmit();
      } else {
        window.console.log("Not all fields have been filled.");
      }
    },
    reset() {
      this.success = false;
      this.error = false;
    },
  },
};
</script>

<style>
.submit-success {
  background-color: darkgreen;
  opacity: 0.4;
}
.submit-error {
  background-color: crimson;
  opacity: 0.4;
}
</style>