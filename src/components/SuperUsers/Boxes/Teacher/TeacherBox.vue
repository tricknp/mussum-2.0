<template>
  <div class="">
      <div class="">
        <h1>{{title}}</h1>        
        
      </div>
      <div class="">

         <Create @create="initialize"></Create>
      
          <div v-for="professor in professores" :key="professor.nome">
            <span> {{ professor.nome }} </span>
          </div>

      </div>
  </div>
</template>


<script>
import axios from 'axios'
import Create from './Create'
//import FileUpload from '../../../Upload/FileUpload'

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
          this.professores = res.data
      })
    },

  },

  created(){
    this.initialize();
  }
}
</script>
