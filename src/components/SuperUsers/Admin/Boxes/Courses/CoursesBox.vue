<template>
  <div class="div-courses">
      
      <div class="courses-head">
        <h1>{{title}}</h1>        
        
      </div>
      
      <div class="courses-container">
          
      </div>

  </div>
</template>


<script>
import axios from 'axios'
import Create from './Components/Create'

export default {
  name: 'CoursesBox',

  components: { Create },
  
    data() {
      return {
       title: 'Cursis',  
    };
  },

}
</script>
