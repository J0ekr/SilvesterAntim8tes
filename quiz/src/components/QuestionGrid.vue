<template>
  <v-container class="grey lighten-5">
    <template v-for="q in Questions">
    <v-row :key="q.nr">
      <template v-for="t in Topics">
        <v-col :key="t.nr">
          <v-card
            class="pa-2"
            outlined
            tile
            :color=q.color
            v-bind="t"
            :key="q.nr+t.nr"
            :to="{path: '/question/' + t.text+'/'+q.text}"
          >
            <div v-if="q.nr < 2"> {{t.text}}</div>
            <div v-if="q.nr > 1">{{q.text}}</div>
            <!-- <div v-if="{{this.$store.Questions[t.text+q.text]}} = false">clicked</div> -->
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
        { text: '', nr: 1, color: "blue lighten-1"},
        { text: '50', nr: 2, color: "blue lighten-3"},
        { text: '100', nr: 3, color: "blue lighten-4" },
        { text: '200', nr: 4, color: "blue lighten-5" },
      ],
      Topics: [
        { text: 'Politik', nr: 1},
        { text: 'Sport', nr: 2 },
        { text: 'Technik', nr: 3 },
        { text: 'Sport', nr: 4 },
        { text: 'Geographie', nr: 5 },
        { text: 'Internet', nr: 6 },
        { text: 'Bücher', nr: 7 },
        { text: 'Zoologie', nr: 8 },
        { text: 'Fill', nr: 9 },
        { text: 'Fill2', nr: 10 },
        { text: 'Fill3', nr: 11 },

      ]
      }
    },
  }
</script>