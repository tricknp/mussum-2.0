<template>
  <div class="div-adm-links">
      
      <div class="adm-links-head">
        <h1>{{title}}</h1>        
         
      </div>
      
      <div class="adm-links-container">
          
      </div>

  </div>
</template>


<script>
import axios from 'axios'
import Create from './Components/Create'

export default {
  name: 'WikisBox',

  components: { Create },
  
    data() {
      return {
       title: 'Wikis',  
    };
  },
}
</script>
