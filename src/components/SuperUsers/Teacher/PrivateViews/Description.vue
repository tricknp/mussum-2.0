<template>
  <div class="teacher-description">
    <h1> {{ fullName }} </h1>

    <div class="div-desc-teacher">
          <input type="text" 
                :disabled="disabled"
                placeholder="Sem descrição" 
                class="input-teacher-profile"
                ref="desc"
                :value="description"> 
          <button type="submit" class="btn-edit" @click="editDesc">
            <IconEdit />
          </button> 
    </div>
    
    <div class="div-email-teacher">
      <IconEmail />
      <input type="text"  
             :disabled="disabled"
             placeholder="Nenhum e-mail informado" 
             class="input-teacher-profile"
             ref="mail"
             :value="email"> 
    
      <button type="submit" class="btn-edit" @click="editEmail">
        <IconEdit />
      </button>
    </div>


  </div>  
</template>


<script>
import  axios     from  'axios'
import  auth      from  "../../../../services/auth";
import  IconEdit  from  '../../../_utils/Svgs/IconEdit'
import  IconEmail from '../../../_utils/Svgs/IconEmail'
import  { url }   from  '../../../_mixins/url'

export default {
  components: { IconEdit, IconEmail },

  mixins: [ url ],

  data() {
    return {
      role: auth.getRole(),
      username: auth.getUsername(),
      fullName: '',
      description: '',
      email: '',
      disabled: true,
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
          for( let i = 0; i<t.length; i++){
            if (this.username == t[i].username && this.username != '') {
              this.fullName = `${t[i].nome} ${t[i].sobrenome}`
              this.description = t[i].sobre
              this.email = t[i].email
            }
          }
        })
    },

    editDesc(){
      this.disabled = false;
      this.$refs.desc.focus();
    },

    editEmail(){
      this.disabled = false;
      this.$refs.mail.focus();
    }
  },

}
</script>