<template>
  <div class="div-teacher-img">
      <imgUpload v-if="!img"/>

      <img v-if="img" :src="`data:image/png;base64,${img}`" >

  </div>
 
</template>


<script>
import imgUpload from "../../../UIComponents/ImageUpload";
import { url } from "../../../_mixins/url";
import axios from "axios";

export default {
  components: { imgUpload },

  mixins: [url],

  data() {
    return {
      img: ""
    };
  },

  methods: {
    getPhoto() {
      axios
        .get(`${this.BASE_URL}api/photo`, {
          headers: { professor: this.$route.params.targetName }
        })
        .then((res, err) => {
          //let f = res.data
          //this.$refs.photo.src = `data:image/png;base64,${f}`;
          //this.img = this.$refs.photo
          this.img = res.data;
        })
        .catch(error => {
          this.img = 0;
        });
    }
  },

  created() {
    this.getPhoto();
    this.$bus.$on("selectProfessor", username => {
      this.getPhoto();
    });
  }
};
</script>
