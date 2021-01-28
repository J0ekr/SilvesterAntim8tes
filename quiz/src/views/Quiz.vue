<template>
  <v-main fill-height fluid class="grey lighten-1 justify-space-between">
      <v-row justify="center" align="center">
        <v-col justify="center" align="center">
          <v-dialog
            v-if="!loading && !ready"
            v-model="dialog"
            persistent
            max-width="900px"
            scrollable
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Start Game
              </v-btn>
            </template>

            <v-card height="75vh">
              <v-card-title>
                <span class="headline">Team Settings</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row class="justify-center">
                    <v-col cols="4">
                      <v-text-field
                        label="Number of Teams"
                        type="number"
                        v-model="numberOfTeams"
                        :rules="loginRules"
                        outlined
                        required
                        @keydown.enter="updateTeams"
                        @click:prepend="decrement"
                        @click:append-outer="increment"
                        prepend-icon="remove"
                        append-outer-icon="add"
                        hide-details
                        single-line
                      ></v-text-field>
                    </v-col> </v-row
                  ><v-row>
                    <v-col cols="12" sm="12" md="12">Change Teamnames</v-col>

                    <v-col
                      v-for="t in this.$store.getters.Teams"
                      v-bind:key="t.nr"
                      cols="6"
                      ><v-text-field
                        v-model="t.text"
                        :rules="loginRules"
                        :label="t.name"
                        outlined
                      ></v-text-field
                    ></v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="pressPlay">
                  Play
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    <div v-if="ready">
      <Score /><QuestionGrid />
    </div>
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
      dialog: false,
      loginRules: [(v) => !!v || "The input is required"],
      input: null,
      currentTeam: null,
      numberOfTeams: 4,
    };
  },
  methods: {
    pressPlay() {
      this.dialog = false;
      this.ready = true;
      this.$store.commit("resetScore");
    },
    updateTeams() {
      var teams = this.$store.getters.Teams;
      teams = Object.keys(teams)
        .slice(0, this.numberOfTeams)
        .reduce((result, key) => {
          result[key] = teams[key];

          return result;
        }, {});
      for (let index = 1; index <= this.numberOfTeams; index++) {
        const tmp = "Team" + index;
        var text = "Team " + index;
        try {
          text = teams[tmp].text;
        } catch (err) {
          window.console.log("Not yet created");
        }

        teams[tmp] = {
          name: "Team" + index,
          text: text,
          score: 0,
          nr: index,
        };
      }
      this.$store.commit("changeTeamNumber", { Teams: teams });
    },
    increment() {
      if (this.numberOfTeams < 15) {
        this.numberOfTeams = parseInt(this.numberOfTeams, 10) + 1;
        this.updateTeams();
      }
    },
    decrement() {
      if (this.numberOfTeams > 1) {
        this.numberOfTeams = parseInt(this.numberOfTeams, 10) - 1;
        this.updateTeams();
      }
    },
    getTopics() {
      axios
        .get("https://leusmann.io:46980/topics")
        .then((response) => {
          response.data.forEach((element) => {
            this.$store.commit("AddTopic", element);
          });
        })
        .catch((error) => window.console.log(error))
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.getTopics();
  },
  created() {
    this.numberOfTeams = Object.keys(this.$store.getters.Teams).length;
  },
};
</script>