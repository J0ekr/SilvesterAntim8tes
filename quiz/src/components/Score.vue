<template>
  <v-container class="grey lighten-5">
    <v-row>
      <template v-for="t in this.$store.getters.Teams">
        <v-col v-bind:key="t.nr">
          <v-card v-bind:key="t.nr" class="pa-2" outlined tile>
            <div>
              {{t.text}}:
              <b>{{t.score}}</b> Punkte
            </div>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    $store() {
      // this.Teams = this.$store.getters.Teams;
    },
    $route() {
      // this.Teams = this.$store.getters.Teams;
    }
  },
  created() {
    // this.Teams = this.$store.getters.Teams;
  }
};
</script>