<template>
  <div>
    
    <button @click="show" class="adm-button">&</button>

    <modal v-if="showModal" @show="show()">

      <h1 slot="header">Editar Professor</h1>

      <form slot="content">
          <label for="nome" >Nome</label>
          <input type="text"  name="nome" required>

          <label for="sobre">Descrição</label>
          <input type="text" name="sobre" >

          <label for="email">E-mail</label>
          <input type="email" name="email">

          <label for="username">Nome de usuario</label>
          <input type="text" placeholder="username" name="username" >

          <label for="password">Senha</label>
          <input type="password" placeholder="senha" name="password" >
        </form>

        <div slot="footer">
            <button type="submit">Confirmar</button>
            <button @click="showModal = false">Cancelar</button>
        </div>

    </modal>

  </div>
</template>


<script>
export default {
  name: 'Edit',

  data(){
      return{
          showModal: true
      }
  },

  methods:{
    show(){
      this.showModal = true;
    },
  }
}
</script>
