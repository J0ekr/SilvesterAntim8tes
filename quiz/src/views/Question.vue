<template>
  <div class="question">
    <div align="center">
      <v-spacer></v-spacer>
      <v-card class="cyan darken-3">
        <h1 key:v-bind="this.qID">
          {{ this.qID }}: {{ this.question.question }}
        </h1>
      </v-card>
    </div>
    <div :v-if="!!this.answers">
      <v-container class="grey lighten-5" align="center">
        <v-row no-gutters justify="center" align="center">
          <template v-for="a in this.answers">
            <v-col :key="a.index">
              <v-card
                class="pa-2"
                outlined
                tile
                :style="
                  a.isClicked
                    ? {
                        'background-color': !a.isCorrect
                          ? '#ff0000'
                          : '#00ff00',
                      }
                    : null
                "
                @click="toggleIsClicked(a)"
                >{{ a.answer }}
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </div>
    <PointsFooter />
  </div>
</template>
<script>
import PointsFooter from "@/components/PointsFooter";
export default {
  components: {
    PointsFooter,
  },
  data() {
    return {
      qID: null,
      question: null,
      answers: [],
      indices: [1, 2, 3, 4],
    };
  },
  methods: {
    shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    },
    toggleIsClicked: function (item) {
      window.console.log(item.index);
      item.isClicked = !item.isClicked;
    },
    fillAnswers() {
      this.answers = [];
      this.question.falseAnswers.slice(1).forEach((element, index) => {
      
      this.answers.push({
        answer: element,
        isCorrect: false,
        index: index,
        isClicked: false,
      });
    });
    this.answers.push({
      answer: this.question.correctAnswer,
      isCorrect: true,
      index: 3,
      isClicked: false,
    });
    this.answers = this.shuffle(this.answers);
    window.console.log(this.answers);
    },
  },
  watch: {
    $route() {
      this.qID = this.$route.params.id + this.$route.params.points;
      this.question = this.$store.getters.newTopics[this.$route.params.id][
        "q" + this.$route.params.points
      ];
      this.fillAnswers();
      window.console.log("route changed:", this.qID);
    },
  },

  created() {
    this.NoWinner = "NoWinner";
    this.qID = this.$route.params.id + this.$route.params.points;
    this.question = this.$store.getters.newTopics[this.$route.params.id][
      "q" + this.$route.params.points
    ];
    this.fillAnswers();

    
    // if (!this.question.answers) {
    //   this.question.answers = ["", "A", "B", "C", "D"];
    // }
  },
};
</script>