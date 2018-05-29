<template>
    <div v-if="!image">
        <div class="dropzone-area" @dragenter="hovering = true" @dragleave="hovering = false" :class="{'dropzone-hover': hovering}">
            <div class="dropzone-text">
                <span class="dropzone-title">Arraste a imagem aqui ou clique para selecionar</span>
                <span class="dropzone-info" v-if="info">{{ info }}</span>
            </div>
            <form>
                <input type="file" @change="onFileChange" name="img">
            </form>
        </div>
    </div>
    <div class="dropzone-preview" v-else>
        <img :src="image" />
        <button @click="onUpload">Upload</button>
        <div class="dropzone-close modal-close" @click="removeImage">
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { url } from "../_mixins/url.js";

export default {
  name: "imgUpload",

  props: ["info"],

  mixins: [url],

  data() {
    return {
      image: "",
      hovering: false,
      selectedFile: "",
      image: "",
      hovering: ""
    };
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.selectedFile = files[0];
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      reader.onload = e => {
        this.image = e.target.result;
        this.hovering = false;
      };
      reader.readAsDataURL(file);
    },

    onUpload() {
      const formData = new FormData();
      formData.append("img", this.selectedFile, this.selectedFile.name);
      axios.post(this.BASE_URL + "api/photo", formData, {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=--------------------------703046025918186291990540"
        }
      });
    },

    removeImage: function(e) {
      this.image = "";
    }
  }
};
</script>