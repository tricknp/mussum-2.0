<template>
  <div class="div-teacher-img">
      <imgUpload />
  </div>
 
</template>


<script>
import imgUpload from "../../../UIComponents/ImageUpload";
import { url } from '../../../_mixins/url'
import axios from 'axios'

export default {

  components: { imgUpload },

  mixins: [ url ],

  methods:{
    /*getPhoto(){
      axios
        .get(`${this.BASE_URL}api/photo`, {
          headers: { professor: this.$route.params.targetName }
        })
        .then( (res) => {
          console.log(res)
          console.log(this.$route.params.targetName)
        })    
    },*/

  },
  
  created(){
    //this.getPhoto();
  }



}
</script>
