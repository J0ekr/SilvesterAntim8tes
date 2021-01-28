<template>
  <v-main>
    <h1>Select number of Teams</h1>
    <h3>Press Enter to confirm</h3>
    <v-container>
      <v-row class="md-6">
        <v-col v-bind:key="0">
          <v-card cols=4 class="flat text-center pa-2 grey lighten-1"
            >Number of Teams</v-card
          >
        </v-col>
        <v-col>
          <v-text-field
            class="pa-2"
            v-model="numberOfTeams"
            :rules="loginRules"
            outlined
            clearable
            @keydown.enter="updateTeams"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <router-view></router-view>

    <h1>Change Team Names</h1>
    <v-container>
      <v-row>
        <template v-for="t in this.$store.getters.Teams">
          <v-col v-bind:key="t.nr" cols=6 lg=4>
            <v-text-field
              class="pa-2"
              v-model="t.text"
              :rules="loginRules"
              :label="t.name"
              outlined
            ></v-text-field>
          </v-col>
        </template>
      </v-row>
    </v-container>
    <router-view></router-view>
  </v-main>
</template>

<script>
export default {
  name: "Settings",
  components: {},
  data() {
    return {
      loginRules: [(v) => !!v || "The input is required"],
      input: null,
      currentTeam: null,
      numberOfTeams: 4,
    };
  },
  watch: {
    $route() {
      this.Teams = this.$store.getters.Teams;
    },
  },
  created() {
    this.$store.getters.Teams;
    this.numberOfTeams = Object.keys(this.$store.getters.Teams).length;
  },
  methods: {
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
      window.console.log(teams);
      this.$store.commit("changeTeamNumber", { Teams: teams });
    },
    updateName(Team, event) {
      if (Team != "" && event.target.value != "") {
        this.$store.commit("changeTeamName", {
          Team: Team,
          name: event.target.value,
        });
      }
    },
  },
};
</script>