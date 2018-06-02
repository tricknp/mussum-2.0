<template>
  <div>

    <button @click="show" class="adm-button">
      <IconEdit class="icon-edit" />
    </button>

    <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Editar Diretório</h1>

      <form slot="content" class="form-admin-modal">
          <input type="text" :value="diretorio.titulo" placeholder="titulo" required>
          <input type="text"   :value="diretorio.titulo" placeholder="link" required>
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
      url: '',
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
      this.route = 'api/professores/',
      this.datas = JSON.stringify({
        id: this.id,
        titulo: this.titulo,
        url: this.url
      })
    },

  }

}
</script>