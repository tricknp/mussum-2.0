<template>

  <div>

    <button @click="show">
      <IconAdd class="icon-add" />
    </button>

    <modal v-if="showModal" @show="show()" id="modal-container">

      <h1 slot="header">Adicionar Link</h1>

      <form slot="content" class="form-modal">
          <input type="text" placeholder="Nome" name="titulo" v-model="titulo" required>
          <input type="text" placeholder="Link" name="link" v-model="url" required>
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

  components: { Modal, IconAdd },

  mixins: [ create, url ],

  data(){
      return{
          titulo  : null,
          url     : null,
          msg     : null,
          datas: ''
      };
  },

  methods:{
    reset(){
      this.titulo =  '';
      this.url    =  '';
    },

    postData(){
        this.route = 'api/links';
        this.datas = JSON.stringify({
        titulo :  this.titulo,
        url    :  this.url,
      })
    }
  },


}

</script>
