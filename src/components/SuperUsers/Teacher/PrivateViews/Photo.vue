<template>
  <div class="div-teacher-img">
      
      <PhotoUpload v-if="!img && this.$bus.isOwner" />
      
      <div class="square-photo">
        <img v-if="img" class="teacher-photo" :src="`data:image/png;base64,${img}`">
        <img v-if="!img" class="teacher-photo" src="../../../../../static/images/blackNwhite.jpeg">
        <IconEdit v-if="this.$bus.isOwner" class="edit-photo-profile" />
      </div>

  </div>
 
</template>


<script>
import PhotoUpload from "../../../Upload/PhotoUpload";
import { url } from '../../../_mixins/url'
import IconEdit from '../../../_utils/Svgs/IconEdit'
import axios from 'axios'

export default {

  components: { PhotoUpload, IconEdit },

  mixins: [url],

  data(){
    return{
      img: ''
    }
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
