<template>
  <div>

    <button @click="show" class="adm-button">
      <IconEdit class="icon-edit" />
    </button>

    <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Editar Curso</h1>

      <form slot="content" class="form-admin-modal">
          <input type="text"   v-model="curso.titulo" placeholder="nome" required>
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
  name: "Edit",

  components: { Modal, IconEdit },

  mixins: [ url, showModal, edit ],

  data() {
    return {
      id: '',
      curso : null,
    };
  },

  created() {
    this.$bus.$on("objectEmited", (curso) => {
      this.curso = curso;
      this.id = this.curso.id;
    });
  },

  methods: {
    postData(){
      this.route = 'api/cursos/',
      this.datas = JSON.stringify({
        id: this.id,
        titulo: this.curso.titulo,
      })
    },

  }

}
</script>