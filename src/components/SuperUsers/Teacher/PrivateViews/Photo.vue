<template>
  <div class="div-teacher-img">
      
      <PhotoUpload v-if="image == false" />
      
      <div v-else class="square-photo">
        <img class="teacher-photo" :src="`data:image/png;base64,${img}`">
        <IconEdit class="edit-photo-profile" />
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
      img: '',
      image: false
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
          this.image = true
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
