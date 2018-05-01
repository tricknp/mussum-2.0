<template>
  <div class="div-activities">
      
      <div class="activities-head">
        <h1>{{title}}</h1>        
         <Create @create="initialize"></Create>
      </div>
      
      <div class="activities-container">
          
      </div>

  </div>
</template>


<script>
import axios from 'axios'
import Create from './Components/Create'

export default {
  name: 'ActivitiesBox',

  components: { Create },
  
    data() {
      return {
       title: 'Atividadis',  
    };
  },

  created(){
    this.initialize();
  }
}
</script>
