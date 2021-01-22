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
          <v-row>
            <v-card class="mt-6">
              <form @submit.prevent="onSubmit" enctype="multipart/form-data">
                <div class="fields">
                  <input type="file" ref="file" @change="onSelect" />
                </div>
              </form>
              <br />
              <v-btn :color="this.message" class="mr-6" @click="onSubmit">
                Upload
              </v-btn>
            </v-card>
          </v-row>
        </v-container>
      </v-form>
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
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
      if (file.size > 500000) {
        this.message = "Too large, max size allowed is 500kb";
      }
    },
    async onSubmit() {
      window.console.log("onSubmit");
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        await axios.post("http://localhost:5000/uploads", formData);
        this.message = "success";
      } catch (err) {
        window.console.log(err);
        this.message = "error";
      }
    },
    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        window.console.log(this.element.topic.text);
        // this.$store.commit("AddTopic", this.element);
        const data = JSON.stringify(this.element);
        const blob = new Blob([data], { type: "text/plain" });
        const e = document.createEvent("MouseEvents"),
          a = document.createElement("a");
        a.download = this.element.topic.text + ".json";
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
        e.initEvent(
          "click",
          true,
          false,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null
        );
        a.dispatchEvent(e);
        this.onSubmit();
      } else {
        window.console.log("Not all fields have been filled.");
      }
    },
  },
};
</script>

<style>
</style>