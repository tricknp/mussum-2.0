<template>
  <div class="div-teacher">
      
      <div class="teacher-head">
        <h1>{{title}}</h1>        
         <Create @create="initialize"></Create>
      </div>
      
      <div class="teacher-container">
          <div v-for="professor in professores" :key="professor.nome">
            <span> {{ professor.nome }} </span>
          </div>
      </div>

  </div>
</template>


<script>
import axios from 'axios'
import Create from './Components/Create'

export default {
  name: 'TeacherBox',

  components: { Create },
  
    data() {
      return {
       title: 'Professoris',  
       BASE_URL: 'http://mussum2api.herokuapp.com',
       professores: []
    };
  },
  methods: {

    initialize () {
      axios.get(this.BASE_URL + '/api/professores')
        .then( (res) => {
          this.professores = res.data;
      })
    },

  },

  created(){
    this.initialize();
  }
}
</script>
