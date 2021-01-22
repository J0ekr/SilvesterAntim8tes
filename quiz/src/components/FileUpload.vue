<template>
  <div class="file">
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <div class="fields">
        <label>Upload File</label><br />
        <input type="file" ref="file" @change="onSelect" />
      </div>
    </form>
    <div class="fields">
      <button @click="onSubmit">Submit</button>
    </div>
    <div class="message">
      <h5>{{ message }}</h5>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FileUpload",
  data() {
    return {
      file: "",
      message: "",
    };
  },
  methods: {
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
      if (file.size > 500000) {
        this.message = "Too large, max size allowed is 500kb";
      }
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        await axios.post("http://localhost:5000/uploads", formData);
        this.message = "Uploaded!!";
      } catch (err) {
        window.console.log(err);
        this.message = err.response.data.error;
      }
    },
  },
};
</script>

<style>
</style>