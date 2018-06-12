<template>
  <div class="teacher-description">
    <h1> {{ name }} </h1>

    <div class="div-desc-teacher"> 
      <IconResume />
      <p class="p-desc">{{ description }}</p>
    </div>
    
    <div class="div-email-teacher">
      <IconEmail />
      <p> {{ email }} </p> 
    </div>


  </div>  
</template>

<script>
import  axios     from  'axios'
//import  auth      from  "../../../../services/auth";
import  IconResume from  '../../../_utils/Svgs/IconResume'
import  IconEmail from '../../../_utils/Svgs/IconEmail'
import  { url }   from  '../../../_mixins/url'

export default {
  components: { IconEmail, IconResume, },

  mixins: [ url ],

  data() {
    return {
      username:'',
      name: '',
      description: '',
      email: '',
    }
  },

  created(){
    this.getTeacher();
  },

  methods: {
    getTeacher(){
      axios
        .get(`${this.BASE_URL}api/professores`)
        .then(res => {
           let t = res.data
           console.log(t.length)
           for(let i = 0; i < t.length; i++){
             if (this.$route.params.targetName == t[i].username) {
               this.name = `${t[i].nome} ${t[i].sobrenome}`;
               this.email = t[i].email;
               this.description = t[i].descricao;
             }
           }
        })
    }
          
          
  },

}
</script>