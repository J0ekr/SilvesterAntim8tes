<template>
  <v-row justify="center" align="center" class="question">
    <v-col justify="center" align="center">
      <v-dialog
        persistent
        v-model="dialog"
        max-width="1000px"
        transition="dialog-bottom-transition"
      >
        <v-card>
          <!-- <v-toolbar color="cyan darken-3"> -->
          <v-card-title :class="this.question.color">
            <v-row
              ><v-col class="text-left" cols=11>
                <b>{{ this.qID }}</b
                >: {{ this.question.question }}
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="text-right">
                <v-btn icon dark @click="onClickOutside">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col></v-row
            >
          </v-card-title>
          <v-card-subtitle :class="this.question.color">
            {{ this.currentTeam.text }}'s turn
          </v-card-subtitle>

          <!-- </v-toolbar> -->
          <v-card-text class="grey lighten-1">
            <v-container>
              <div class="question">
                <!-- <div align="center">
                  <v-spacer></v-spacer>
                  <v-card class="cyan darken-3"> </v-card>
                </div> -->
                <div :v-if="!!this.answers">
                  <template v-for="a in this.answers">
                    <v-row :key="a.index" cols="6">
                      <v-col>
                        <v-card
                          class="pa-2"
                          outlined
                          tile
                          :style="
                            a.isClicked
                              ? {
                                  'background-color': !a.isCorrect
                                    ? '#E53935'
                                    : '#43A047',
                                }
                              : null
                          "
                          @click="toggleIsClicked(a)"
                          >{{ a.answer }}
                        </v-card>
                      </v-col>
                    </v-row>
                  </template>
                </div>
              </div>
            </v-container>
          </v-card-text>
          <v-card-actions :class="actionClass">
            <PointsFooter />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
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
      dialog: true,
      lowesPoints: 10000,
      currentTeam: "",
      blacklist: [],
      actionClass: "d-block cyan question",
    };
  },
  methods: {
    onClickOutside() {
      this.dialog = false;
      this.$router.push("/Antim8s/Quiz");
    },
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
      item.isClicked = true;
      const round = Math.ceil(
        (this.$store.getters.QuizCounter + 1) /
          Object.keys(this.$store.getters.Teams).length
      );
      if (!item.isCorrect && round >= 3) {
        const teams = this.$store.getters.Teams;
        this.lowesPoints = 100000;
        Object.keys(teams).forEach((element) => {
          if (teams[element].score < this.lowesPoints) {
            this.lowesPoints = teams[element].score;
          }
        });
        var results = this.shuffle(
          Object.values(teams).filter((obj) => {
            return obj.score === this.lowesPoints;
          })
        );
        const tmp = this.blacklist;
        results = results.filter(function (obj) {
          return !tmp.includes(obj.name);
        });
        var chosenTeam = this.currentTeam;

        if (results.length > 0) {
          chosenTeam = results[0];
          this.blacklist.push(chosenTeam.name);
        }
        this.currentTeam = chosenTeam;
      }
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
    },
  },
  watch: {
    $route() {
      this.qID = this.$route.params.id + this.$route.params.points;
      this.question = this.$store.getters.Topics[this.$route.params.id][
        "q" + this.$route.params.points
      ];
      this.fillAnswers();
      window.console.log("route changed:", this.qID);
    },
  },
  mounted() {
    this.currentTeam = this.$store.getters.Teams[
      Object.keys(this.$store.getters.Teams)[
        this.$store.getters.QuizCounter %
          Object.keys(this.$store.getters.Teams).length
      ]
    ];
    this.blacklist.push(this.currentTeam.name);
  },
  created() {
    this.NoWinner = "NoWinner";
    this.qID = this.$route.params.id + this.$route.params.points;
    this.question = this.$store.getters.Topics[this.$route.params.id][
      "q" + this.$route.params.points
    ];
    this.actionClass = "d-block " + this.question.color + " question";
    this.fillAnswers();
  },
};
</script>
<style>
.question {
  overflow-x: hidden;
}
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>