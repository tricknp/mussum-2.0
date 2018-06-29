<template>
  <div>

    <button @click="show">
      <IconEdit class="icon-edit" />
    </button>

    <modal v-if="showModal" @show="show()" id="modal-container">

      <h1 slot="header">Editar Aviso</h1>

      <form slot="content" class="form-modal">
          <input type="text"   v-model="aviso.titulo" placeholder="Titulo" required>
          <input type="text"   v-model="aviso.descricao" placeholder="Descrição" required>
          <input type="text "  v-model="aviso.data" placeholder="Data">
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
  name: "Edit",

  components: { Modal, IconEdit },

  mixins: [ url, showModal, edit ],

  data() {
    return {
      id: '',
      aviso : null,
    };
  },

  created() {
    this.$bus.$on("objectEmited", (aviso) => {
      this.aviso = aviso;
      this.id = this.aviso.id;
    });
  },

  methods: {
    postData(){
      this.route = 'api/avisos/',
      this.datas = JSON.stringify({
        id: this.id,
        titulo: this.aviso.titulo,
        descricao: this.aviso.descricao,
        data: this.aviso.data
      })
    },

  }

}
</script>
