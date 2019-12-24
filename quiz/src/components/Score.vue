<template>
    <v-container class="orange lighten-5">
    <v-row>
    <template v-for="t in Teams">
        <v-col :key="t.nr">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <div> {{t.text}}:{{t.score}}</div>
          </v-card>
        </v-col>

    </template> 
    </v-row>
  </v-container>
</template>

<script>
export default {
    data () {
      return {
      Teams: [
        { text: 'Team 1', nr: 1, score: 0},
        { text: 'Team 2', nr: 2, score: 0 },
        { text: 'Team 3', nr: 3, score: 0 },
        { text: 'Team 4', nr: 4, score: 0 },
        { text: 'Team 5', nr: 5, score: 0 },
        { text: 'Team 6', nr: 6, score: 0 },

      ]
      }
    },
  }
</script>