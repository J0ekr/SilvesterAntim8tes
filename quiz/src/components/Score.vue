<template>
  <v-container align="center" justify="center">
    <v-row
      ><v-col class="pa-2"
        ><v-card :key="round" outlined tile class="round"
          ><v-card-title primary-title class="justify-center">
            Round:
            {{
              Math.ceil(
                (this.$store.getters.QuizCounter + 1) /
                  Object.keys(this.$store.getters.Teams).length
              )
            }}
          </v-card-title>
          <v-card-subtitle primary-title class="justify-center text-center"
            >{{
              this.$store.getters.Teams[
                Object.keys(this.$store.getters.Teams)[
                  this.$store.getters.QuizCounter %
                    Object.keys(this.$store.getters.Teams).length
                ]
              ].text
            }}'s turn</v-card-subtitle
          >
        </v-card></v-col
      >
    </v-row>
    <v-row>
      <template v-for="t in this.$store.getters.Teams">
        <v-col v-bind:key="t.nr" xs="4" class="pa-2">
          <v-card
            class="justify-space-around text-center pt-2 pb-2"
            v-bind:key="t.nr"
            outlined
            tile
          >
            <div>
              {{ t.text }}: <b>{{ t.score }}</b> Punkte
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
    return { round: 1 };
  },
  watch: {
    $store() {
      this.round = Math.ceil(
        this.$store.getters.QuizCounter /
          Object.keys(this.$store.getters.Teams).length
      );
    },
    $route() {
      // this.Teams = this.$store.getters.Teams;
    },
  },
  mounted() {
    // this.Teams = this.$store.getters.Teams;
  },
};
</script>
<style>
</style>