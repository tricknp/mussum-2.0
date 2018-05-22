<template>
  <div>

    <button @click="show" class="adm-button">
      <svg class="icon icon-edit" enable-background="new 0 0 528.899 528.899" version="1.1" viewBox="0 0 528.899 528.899" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	      <path d="m328.88 89.125l107.59 107.59-272.34 272.34-107.53-107.59 272.28-272.34zm189.23-25.948l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259 0l-45.961 45.961 107.59 107.59 53.611-53.611c14.382-14.383 14.382-37.577 0-51.959zm-517.81 449.51c-1.958 8.812 5.998 16.708 14.811 14.565l119.89-29.069-107.53-107.59-27.173 122.09z"/>
      </svg>
    </button>

    <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Editar Aviso</h1>

      <form slot="content" class="form-admin-modal">
          <input type="text"   :value="aviso.titulo" placeholder="Titulo" required>
          <input type="text"   :value="aviso.descricao" placeholder="Descrição" required>
          <input type="text "  :value="aviso.data" placeholder="Data">
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
import Modal from "../../../../../UIComponents/Modal"
import { url } from '../../../../../_mixins/url.js'
import { showModal } from '../../../../../_mixins/showModal.js'
import { edit } from '../../../../../_mixins/edit.js'

export default {
  name: "Edit",

  components: { Modal },

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