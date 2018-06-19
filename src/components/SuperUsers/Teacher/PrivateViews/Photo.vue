<template>
  <div class="div-teacher-img">
      
      <PhotoUpload v-if="image == false" />
      
      <div v-else class="square-photo">
        <img class="teacher-photo" :src="`data:image/png;base64,${img}`">
      </div>

  </div>
 
</template>


<script>
import PhotoUpload from "../../../Upload/PhotoUpload";
import { url } from '../../../_mixins/url'
import axios from 'axios'

export default {

  components: { PhotoUpload },

  mixins: [ url ],

  data(){
    return{
      img: '',
      image: false
    }
  },

  methods:{
    getPhoto(){
      axios
        .get(`${this.BASE_URL}api/photo`, {
          headers: { professor: this.$route.params.targetName }
        })
        .then( (res) => {
          this.img = res.data;
          this.image = true
        })    
    },

  },
  
  created(){
    this.getPhoto();
  }



}
</script>
