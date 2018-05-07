<template>
  <div class="div-teacher">
      
      <div class="teacher-head">
        <h1>{{title}}</h1>  
        <div class="div-adm-button">
          <Create @create="initialize"></Create>
          <Delete></Delete>
          <Edit></Edit>
        </div>
      </div>
      
      <div class="teacher-container">
          <div v-for="professor in professores" :key="professor.nome" class="teacher-content">
          
          <label>
            <input type="radio" 
                   v-model="radioValue" name="name" 
                   @change="nome     =  professor.nome, 
                            id       =  professor.id,
                            email    =  professor.email
                            username =  professor.username
                            password =  professor.password">   
            <span for="name"> {{ professor.nome }} </span>
          </label>
          
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
     url         :  'http://25.77.220.94:8009', 
     title       :  'Professoris',
     professores :  null,
     nome        :  null,
     id          :  null,

    };
  },

  computed: {
    radioValue: {
        get: function() {
          this.$bus.$emit('delete', this.nome, 
                                    this.id) 

          this.$bus.emit('edit', this.id, 
                                 this.nome, 
                                 this.email, 
                                 this.username, 
            
                                 this.password)
            return this.nome;
        },
        set: function() {
      }
    }
  }, 
 
  methods: {

    initialize () {
      axios.get(this.url + '/api/professores')
        .then( (res) => {
          this.professores = res.data; 

          for (let i = 0; i < this.professores.length; i++) {

            this.id        =  this.professores[i].id;
            this.nome      =  this.professores[i].nome;
            this.email     =  this.professores[i].email;
            this.username  =  this.professores[i].username;
  
            //console.log(this.nome)
            this.$bus.$emit('showTeacher', this.nome)  
          }
      })
    },
      
  },

    created(){
      this.initialize();
    },

    updated(){
      //this.initialize();
    }
}
</script>
