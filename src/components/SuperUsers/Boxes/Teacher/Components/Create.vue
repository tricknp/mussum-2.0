<template>
  <div>
    
    <button @click="show" class="adm-button">+</button> 

    <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Adicionar Professor</h1>

      <form slot="content" class="form-admin-modal">
          <input type="text" placeholder="Nome" name="nome" v-model="nome" required>
          <input type="text" placeholder="Descrição" name="sobre" v-model="sobre">
          <input type="email" placeholder="E-mail" name="email" v-model="email">
          <input type="text" placeholder="Username" name="username" v-model="username">
          <input type="password" placeholder="Senha" name="password" v-model="password">
      </form>

      <div slot="footer" class="div-btn-modal">
          <button 
            type="submit" 
            @click.prevent="onSubmit" 
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
import axios from 'axios'
import Modal from '../../../../UIComponents/Modal'

export default {
  name: 'Create',

  components: { Modal },
  
  data(){
      return{
          nome      : null,
          sobre     : null,
          email     : null,
          username  : null,
          password  : null,
        
          showModal: false,
          msg: ''
      };
  },

  methods:{
    
    reset(){
      this.nome      =  ''
      this.sobre     =  ''
      this.email     =  ''
      this.username  =  ''
      this.password  =  ''
    },

    show(){
      this.showModal = true;
      this.reset();
    },

    cancel(){
      this.showModal = false;
      this.reset();
    },

    
   onSubmit() {
     let data = JSON.stringify({
        nome      :  this.nome,
        username  :  this.username,
        password  :  this.password
      })
        axios
          .post('http://mussum2api.herokuapp.com/api/professores', data, {
            headers: { 'Content-Type': 'application/json'},
            })
          .then( (response) => {
                console.log('sucess')
            })
          .catch(error => console.log(error))
          
          this.$emit('create');
          this.showModal = false;
      }
    }
  }   
    
</script>
