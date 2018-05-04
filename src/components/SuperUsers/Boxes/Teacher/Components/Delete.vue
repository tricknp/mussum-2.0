<template>
   <div>
    
    <button @click="show" class="adm-button">-</button> 

    <modal v-if="showModal" @show="show()">

    <h1 slot="header">Remover Professor</h1>

      <form slot="content" @submit.prevent="onSubmit">
          <label for="nome" >Nome</label>
          <input type="text" name="nome" readonly>

          <label for="sobre">Descrição</label>
          <input type="text" name="sobre" readonly> 

          <label for="email">E-mail</label>
          <input type="email" name="email" readonly>

          <label for="username">Nome de usuario</label>
          <input type="text" name="username" readonly>

          <label for="password">Senha</label>
          <input type="password" name="password" readonly>
        </form>

        <div slot="footer">
            <button type="submit">Remover</button>
            <button @click="showModal = false">Cancelar</button>
        </div>

    </modal>

  </div> 
</template>


<script>
export default {
  name: 'Delete',

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
