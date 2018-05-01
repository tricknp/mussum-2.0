<template>
  <div class="div-directories">
      
      <div class="directories-head">
        <h1>{{title}}</h1>        
         <Create @create="initialize"></Create>
      </div>
      
      <div class="directories-container">
          
      </div>

  </div>
</template>


<script>
import axios from 'axios'
import Create from './Components/Create'

export default {
  name: 'DirectoriesBox',

  components: { Create },
  
    data() {
      return {
       title: 'Diretóris',  
    };
  },

  created(){
    this.initialize();
  }
}
</script>
