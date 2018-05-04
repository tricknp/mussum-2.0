<template>
  <div class="div-teacher">
      
      <div class="teacher-head">
        <h1>{{title}}</h1>  
        <div class="div-adm-button">
          <Create @create="initialize"></Create>
          <Delete />
          <Edit />
        </div>
      </div>
      
      <div class="teacher-container">
          <div v-for="professor in professores" :key="professor.nome">
            <span> {{ professores.nome }} </span>
          </div>
      </div>

  </div>
</template>


<script>
import axios from 'axios'
import Create from './Components/Create'
import Delete from './Components/Delete'
import Edit from './Components/Edit'

export default {
  name: 'TeacherBox',

  components: { Create, Delete, Edit },
  
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
          console.log(this.professores)       
      })
    },

  },

    created(){
      this.initialize();
    }
}
</script>
