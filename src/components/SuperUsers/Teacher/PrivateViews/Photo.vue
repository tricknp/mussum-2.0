<template>
  <div class="div-teacher-img">
      <imgUpload />

      <img :src="`data:image/png;base64,${img}`" >

  </div>
 
</template>


<script>
import imgUpload from "../../../UIComponents/ImageUpload";
import { url } from '../../../_mixins/url'
import axios from 'axios'

export default {

  components: { imgUpload },

  mixins: [ url ],

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
