<template>
  <div>
    
    <button @click="show" class="adm-button">+</button> 

    <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Adicionar Diretório</h1>

      <form slot="content" class="form-admin-modal">
          <input type="text" placeholder="Nome" name="titulo" v-model="titulo" required>
          <input type="text" placeholder="Descrição" name="url" v-model="url">
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
          titulo    : null,
          url       : null,
          msg       : null,
          datas: ''
      };
  },

  methods:{   
    reset(){
      this.titulo  =  ''
      this.url     =  ''
    },

    postData(){
        this.route = 'api/diretorios';
        this.datas = JSON.stringify({
        titulo  :  this.titulo,
        url     :  this.url,
      })
    }
  },


}   
    
</script>
