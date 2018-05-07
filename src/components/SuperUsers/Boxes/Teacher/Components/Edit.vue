<template>
  <div>
    
    <button @click="show" class="adm-button">&</button>

    <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Editar Professor</h1>

      <form slot="content" class="form-admin-modal">
          <input type="text"   :value="nome" placeholder="nome" required>
          <input type="email"  :value="email" placeholder="email">
          <input type="text" :value="username" placeholder="username" required>
          <input type="password" placeholder="senha" :value="password" required >
        </form>

        <div slot="footer">
            <button type="submit" @click.prevent="onSubmit" class="adm-modal-buttons">
              Confirmar
            </button>
            <button @click="showModal = false" class="adm-modal-buttons">
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
  name: 'Edit',

  components: { Modal },

  data(){
      return{
          showModal: true,
          id:       '',
          nome:     '',
          email:    '',
          username: '',
          password: '',

      }
  },

  methods:{
    show(){
      this.showModal = true; 
      this.$bus.$on('edit', (id, nome, email, username, password) => { 
        this.id        =  id
        this.nome      =  nome;
        this.email     =  email;
        this.username  =  username;
        this.password  =  password;
      })
    },

    onSubmit(){
      const url = 'http://25.77.220.94:8009/api/professores/' + this.id;
      
      let data = JSON.stringify({
        nome: this.nome,
        email: this.email,
        username: this.username,
        password: this.password
      })
      
      axios
          .put(url, data, {
              headers: { 'Content-Type': 'application/json'},
            })
          .then( (response) => {
            console.log(response.data)
            })
          .catch(error => console.log(error));
      this.showModal = false;
      console.log(this.id)
    },
  }
}
</script>
