<template>
  <div>
    
    <button @click="show" class="adm-button">+</button> 

    <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Adicionar Professor</h1>

      <form slot="content" @submit.prevent="onSubmit" class="form-admin-modal">
          <input type="text" placeholder="Nome" name="nome" v-model="nome" required>
          <input type="text" placeholder="Descrição" name="sobre" v-model="sobre">
          <input type="email" placeholder="E-mail" name="email" v-model="email">
          <input type="text" placeholder="Username" name="username" v-model="username">
          <input type="password" placeholder="Senha" name="password" v-model="password">
      </form>

      <div slot="footer" class="div-btn-modal">
          <button type="submit" class="adm-modal-buttons">Adicionar</button>
          <button @click="showModal = false" class="adm-modal-buttons">Cancelar</button>
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
          nome: null,
          sobre: null,
          email: null,
          username: null,
          password: null,
        
          showModal: false,
          msg: ''
      };
  },

  methods:{

    show(){
      this.showModal = true;
    },
    
   onSubmit() {
      let data = JSON.stringify({
        nome: this.nome,
        //sobre: this.sobre,
        //email: this.email,
        username: this.username,
        password: this.password
      })
        axios
          .post('http://mussum2api.herokuapp.com/api/professores', data, {
              headers: { 'Content-Type': 'application/json'},
            })
          .then( (response) => {
                console.log('sucess')
            })
          .catch(error => console.log(error))
      }
    }
  }   
    
</script>
