<template>
  <div>
    
    <button @click="show" class="adm-button">
      <svg class="icon icon-add" enable-background="new 0 0 42 42" version="1.1" viewBox="0 0 42 42" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16v11.059  C16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"/>
      </svg>
    </button> 

    <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Adicionar Professor</h1>

      <form slot="content" class="form-admin-modal">
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
import Modal from '../../../../../UIComponents/Modal'
import { create } from '../../../../../_mixins/create.js'
import { url } from '../../../../../_mixins/url.js'

export default {
  name: 'Create',

  components: { Modal },

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
