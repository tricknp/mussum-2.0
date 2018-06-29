<template>
  <div>

    <button @click="show" >
      <IconEdit class="icon-edit" />
    </button>

    <modal v-if="showModal" @show="show()" id="modal-container">

      <h1 slot="header">Editar Diretório</h1>

      <form slot="content" class="form-modal">
          <input type="text" v-model="diretorio.titulo" placeholder="titulo" required>
          <input type="text"   v-model="diretorio.url" placeholder="link" required>
        </form>

        <div slot="footer">
          <div class="div-btn-modal">

            <button type="submit" @click.prevent="onSubmit" class="modal-buttons">
              Confirmar
            </button>
            <button @click="showModal = false" class="modal-buttons">
              Cancelar
           </button>
         </div>
        </div>

    </modal>

  </div>
</template>


<script>
import  IconEdit      from  '../../../../../_utils/Svgs/IconEdit'
import  Modal         from  "../../../../../UIComponents/Modal"
import  { url }       from  '../../../../../_mixins/url.js'
import  { showModal } from  '../../../../../_mixins/showModal.js'
import  { edit }      from  '../../../../../_mixins/edit.js'

export default {

  components: { Modal, IconEdit },

  mixins: [ url, showModal, edit ],

  data() {
    return {
      id: '',
      diretorio : null,
    };
  },

  created() {
    this.$bus.$on("objectEmited", (diretorio) => {
      this.diretorio = diretorio;
      this.id = this.diretorio.id;
    });
  },

  methods: {
    postData(){
      this.route = 'api/diretorios/',
      this.datas = JSON.stringify({
        id: this.id,
        titulo: this.diretorio.titulo,
        url: this.diretorio.url
      })
    },

  }

}
</script>
