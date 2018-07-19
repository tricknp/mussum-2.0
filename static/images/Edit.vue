<template>
  <div>

    <button @click="show">
      <IconEdit class="icon-edit" />
    </button>

    <modal v-if="showModal" @show="show()" id="modal-container">

      <h1 slot="header">Editar Wiki</h1>

      <form slot="content" class="form-modal">
          <input type="text"   v-model="wiki.titulo" placeholder="Titulo" required>
          <input type="text"   v-model="wiki.url" placeholder="Url">
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
      id   : '',
      wiki : null,
    };
  },

  created() {
    this.$bus.$on("objectEmited", (wiki) => {
      this.wiki = wiki;
      this.id = this.wiki.id;
    });
  },

  methods: {
    postData(){
      this.route = 'api/wikis/',
      this.datas = JSON.stringify({
        id: this.id,
        titulo: this.wiki.titulo,
        url: this.wiki.url
      })
    },

  }

}
</script>
