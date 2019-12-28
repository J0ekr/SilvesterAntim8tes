<template>
  <div id="app">
    <h2>Random image in Vue.js:</h2>
    <li v-if="selectedImage">
      <freeze :source="selectedImage" />
    </li>
    <PointsFooter />
  </div>
</template>

<script>
import PointsFooter from "@/components/PointsFooter";
export default {
  components: {
    PointsFooter
  },
  data() {
    return {
      images: [
        require("@/assets/Dietrich.gif"),
        require("@/assets/Erne.gif"),
        require("@/assets/Frauke.gif")
      ],

      selectedImage: null
    };
  },
  computed: {
    get_idx() {
      let idx = [...Array(this.images.length).keys()];
      return idx;
    }
  },
  watch: {},
  methods: {
    randomItem(items) {
      let index = Math.floor(Math.random() * items.length);
      this.$store.commit("UpdateImageIdx", index);
      window.console.log(this.$store.getters.image_idx);
      return items[index];
    }
  },
  created() {
    this.selectedImage = this.randomItem(this.images);
    if (this.$store.getters.image_idx == null) {
      window.console.log("init:", this.get_idx);
      this.$store.commit("InitImageIdx", this.get_idx);
    }

    // window.console.log(this.get_idx);
  }
};
</script>

<style>
li {
  max-width: 256px;
  max-height: 256px;
}
</style>