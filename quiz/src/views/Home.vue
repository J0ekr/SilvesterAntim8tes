<template>
  <v-container class="grey lighten-5">
    <template v-for="m in 4">
    <v-row :key="m">
      <template v-for="q in Questions">
        <v-col :key="q.nr">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            {{q.text}}
          </v-card>
        </v-col>
      </template>
    </v-row>
    </template>
  </v-container>
</template>

<script>
export default {
    data () {
      return {
      Questions: [
        { text: 'Q1', nr: 1},
        { text: 'Q2', nr: 2 },
      ]
      }
    },
  }
</script>