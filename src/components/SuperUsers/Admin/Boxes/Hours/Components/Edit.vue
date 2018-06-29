<template>
  <div>

    <button @click="show">
      <IconEdit class="icon-edit" />
    </button>

    <modal v-if="showModal" @show="show()" id="modal-container">

      <h1 slot="header">Editar Horario</h1>

      <form slot="content" class="form-modal">
          <input type="text"   v-model="horario.titulo" placeholder="Titulo" required>
          <input type="text"   v-model="horario.url" placeholder="Url">
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
      horario : null,
    };
  },

  created() {
    this.$bus.$on("objectEmited", (horario) => {
      this.horario = horario;
      this.id = this.horario.id;
    });
  },

  methods: {
    postData(){
      this.route = 'api/horarios/',
      this.datas = JSON.stringify({
        id: this.id,
        titulo: this.horario.titulo,
        url: this.horario.url
      })
    },

  }

}
</script>
