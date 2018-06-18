<template>
  <div class="div-teacher-img">
      
      <imgUpload v-if="isTeacher" />

      <img :src="img">

  </div>
 
</template>


<script>
import axios from 'axios'
import imgUpload from "../../../UIComponents/ImageUpload";
import { url } from '../../../_mixins/url'
import isTeacher from '../../../_mixins/isTeacher'

export default {

  components: { imgUpload },

  mixins: [ url, isTeacher ],

  data(){
    return{
      img: '',
    }
  },

  methods:{
    getPhoto(){
      axios
        .get(`${this.BASE_URL}api/photo`, {
          headers: { professor: this.$route.params.targetName }
        })
        .then( (res) => {
          //let f = res.data
          //this.$refs.photo.src = `data:image/png;base64,${f}`;
          //this.img = this.$refs.photo
          this.img = res.data;
          
        })    
    },

  },
  
  created(){
    this.getPhoto();
  }



}
</script>
