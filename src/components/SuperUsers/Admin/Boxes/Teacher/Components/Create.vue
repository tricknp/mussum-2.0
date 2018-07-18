<template>
  <div>

    <button @click="show">
      <IconAdd class="icon-add" />
    </button>

    <modal v-if="showModal" @show="show()" id="modal-container">

      <h1 slot="header">Adicionar Professor</h1>

      <form slot="content" class="form-modal">

          <div class="div-checkbox-admin">
            <input type="checkbox" v-model="checkRole" @change="getRole()">
            <label for="admin">Admin</label>
          </div>
          <input type="text" placeholder="Nome" name="nome" v-model="nome" required>
          <input type="text" placeholder="sobrenome" name="sobrenome" v-model="sobrenome" required>
          <input type="text" placeholder="Descrição" name="descricao" v-model="descricao">
          <input type="email" placeholder="E-mail" name="email" v-model="email">
          <input type="text" placeholder="Username" name="username" v-model="username">
          <input type="password" placeholder="Senha" name="password" v-model="password">
      </form>

      <div slot="footer" class="div-btn-modal">
          <button
            type="submit"
            @click.stop.prevent="onSubmit"
            class="modal-buttons">
                Adicionar
          </button>
          <button
            @click="cancel"
            class="modal-buttons">
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
          descricao : null,
          email     : null,
          username  : null,
          checkRole : false,
          role      : null,
          password  : null,
          msg       : null,
          datas     : '',
      };
  },

  created(){
    this.getRole()
  },

  methods:{
    reset(){
      this.nome      =  ''
      this.sobrenome =  ''
      this.descricao =  ''
      this.email     =  ''
      this.username  =  ''
      this.password  =  ''
    },

    getRole(){
      if (!this.checkRole) {
        this.role = 'professor'
      }else{
        this.role = 'admin'
      }
    },

    postData(){
        this.route = 'api/professores';
        this.datas = JSON.stringify({
        nome      :  this.nome,
        sobrenome :  this.sobrenome,
        descricao :  this.descricao,
        email     :  this.email,
        username  :  this.username,
        password  :  this.password,
        role      :  this.role
      })
    }
  },


}

</script>
