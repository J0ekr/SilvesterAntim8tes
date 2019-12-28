<template>
  <v-content>
    <h1>Change Team Names</h1>
    <h3>Press Enter to confirm</h3>
    <v-container>
      <v-row>
        <v-col v-bind:key="0">
          <v-card class="flat text-center pa-2 grey lighten-1">New Names</v-card>
        </v-col>
        <template v-for="t in this.$store.getters.Teams">
          <v-col v-bind:key="t.nr">
            <v-text-field
              class="pa-2"
              :v-model="t.text"
              :rules="loginRules"
              :label="t.name"
              outlined
              clearable
              @keydown.enter="updateName(t.name, $event)"
            ></v-text-field>
          </v-col>
        </template>
      </v-row>
      <v-row>
        <v-col v-bind:key="100">
          <v-card class="flat text-center pa-2 grey lighten-1">Current Names</v-card>
        </v-col>
        <template v-for="t in this.$store.getters.Teams">
          <v-col v-bind:key="t.nr">
            <v-card class="flat text-center pa-2">{{t.text}}</v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
    <router-view></router-view>
  </v-content>
</template>

<script>
export default {
  name: "Settings",
  components: {},
  data() {
    return {
      loginRules: [v => !!v || "The input is required"],
      input: null,
      currentTeam: null
    };
  },
  watch: {
    $route() {
      this.Teams = this.$store.getters.Teams;
    }
  },
  created() {
    this.$store.getters.Teams;
  },
  methods: {
    updateName(Team, event) {
      if (Team != "" && event.target.value != "") {
        this.$store.commit("changeTeamName", {
          Team: Team,
          name: event.target.value
        });
      }
    }
  }
};
</script>