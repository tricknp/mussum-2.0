<template>
  <div>
    
    <button @click="show">
      <IconAdd class="icon-add" />
    </button> 

    <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Adicionar Professor</h1>

      <form slot="content" class="form-admin-modal">

          <div class="div-checkbox-admin">
            <input type="checkbox" name="admin">
            <label for="admin">Admin</label>
          </div>
          <input type="text" placeholder="Nome" name="nome" v-model="nome" required>
          <input type="text" placeholder="Sobrenome" name="sobrenome" v-model="sobrenome" required>
          <input type="text" placeholder="Descrição" name="sobre" v-model="sobre">
          <input type="email" placeholder="E-mail" name="email" v-model="email">
          <input type="text" placeholder="Username" name="username" v-model="username">
          <input type="password" placeholder="Senha" name="password" v-model="password">
      </form>

      <div slot="footer" class="div-btn-modal">
          <button 
            type="submit" 
            @click.stop.prevent="onSubmit" 
            class="adm-modal-buttons">
                Adicionar
          </button>
          <button 
            @click="cancel" 
            class="adm-modal-buttons">
                Cancelar
          </button>
      </div>

    </modal>

  </div>
</template>

<script>
import  Modal       from  '../../../../../UIComponents/Modal'
import  { create }  from  '../../../../../_mixins/create.js'
import  { url }     from  '../../../../../_mixins/url.js'
import  IconAdd     from  '../../../../../_utils/Svgs/IconAdd'

export default {
  name: 'Create',

  components: { Modal, IconAdd },

  mixins: [ create, url ],
  
  data(){
      return{
          nome      : null,
          sobrenome : null,
          sobre     : null,
          email     : null,
          username  : null,
          password  : null,
          msg       : null,
          datas: ''
      };
  },

  methods:{   
    reset(){
      this.nome      =  ''
      this.sobrenome =  ''
      this.sobre     =  ''
      this.email     =  ''
      this.username  =  ''
      this.password  =  ''
    },

    postData(){
        this.route = 'api/professores';
        this.datas = JSON.stringify({
        nome      :  this.nome,
        sobrenome :  this.sobrenome,
        sobre     :  this.sobre,
        email     :  this.email,
        username  :  this.username,
        password  :  this.password
      })
    }
  },


}   
    
</script>
