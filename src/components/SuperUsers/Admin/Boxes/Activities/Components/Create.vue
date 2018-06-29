<template>
  <div>

    <button @click="show">
      <IconAdd class="icon-add" />
    </button>

    <modal v-if="showModal" @show="show()" id="modal-container">

      <h1 slot="header">Adicionar Aviso</h1>

      <form slot="content" class="form-modal">
          <input type="text" placeholder="Titulo" name="nome" v-model="titulo" required>
          <input type="text" placeholder="Descrição" name="descricao" v-model="descricao">
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
import  Modal       from '../../../../../UIComponents/Modal'
import  { create }  from '../../../../../_mixins/create.js'
import  { url }     from '../../../../../_mixins/url.js'
import  IconAdd     from '../../../../../_utils/Svgs/IconAdd'

export default {
  name: 'Create',

  components: { Modal, IconAdd },

  mixins: [ create, url ],

  data(){
      return{
          titulo: '',
          descricao: '',
          msg       : null,
          datas: ''
      };
  },

  methods:{
    reset(){
      this.titulo      =  ''
      this.descricao   =  ''
    },

    postData(){
        this.route = 'api/avisos';
        this.datas = JSON.stringify({
        titulo     :  this.titulo,
        descricao  :  this.descricao,
      })
    }
  },


}

</script>
