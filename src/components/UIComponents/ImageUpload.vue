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
        <img class="photo-upload" :src="image" />
        
        <!-- cancel -->
        <button class="dropzone-close" @click="removeImage">
          <svg class="icon icon-cancel" enable-background="new 0 0 348.333 348.334" version="1.1" viewBox="0 0 348.333 348.334" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <path d="m336.56 68.611l-105.54 105.55 105.54 105.55c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769l-105.57-105.56-105.56 105.56c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.55-105.55-105.55c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.56 105.55 105.56-105.55c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145 6e-3 56.844z"/>
          </svg>
        </button>
        
        <!-- ok! -->
        <button @click="onUpload">
          <svg class="icon icon-ok" enable-background="new 0 0 442.533 442.533" version="1.1" viewBox="0 0 442.533 442.533" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        	  <path d="m434.54 98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993-7.618 0-14.093 2.665-19.417 7.993l-187.29 187.58-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992-7.616 0-14.087 2.662-19.417 7.992l-38.828 38.829c-5.33 5.329-7.994 11.802-7.994 19.417 0 7.609 2.664 14.088 7.994 19.416l103.35 103.35 38.831 38.828c5.327 5.332 11.8 7.994 19.414 7.994 7.611 0 14.084-2.669 19.414-7.994l38.83-38.828 206.7-206.7c5.325-5.33 7.994-11.802 7.994-19.417 4e-3 -7.611-2.669-14.084-7.994-19.414z"/>
          </svg>
        </button>

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
      }).then( res => {
          console.log('imagem enviada com sucesso')
      })
    },

    removeImage: function(e) {
      this.image = "";
    }
  }
};
</script>