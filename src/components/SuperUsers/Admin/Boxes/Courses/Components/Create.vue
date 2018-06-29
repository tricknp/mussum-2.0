<template>
  <div>
    
    <button @click="show">
      <IconAdd class="icon-add" />
    </button> 

    <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Adicionar Curso</h1>

      <form slot="content" class="form-admin-modal">
          <input type="text" placeholder="Nome" name="nome" v-model="titulo" required>
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
import  Modal       from  "../../../../../UIComponents/Modal";
import  { create }  from  "../../../../../_mixins/create.js";
import  { url }     from  "../../../../../_mixins/url.js";
import  IconAdd     from  '../../../../../_utils/Svgs/IconAdd'

export default {
  name: "Create",

  components: { Modal, IconAdd },

  mixins: [create, url],

  data() {
    return {
      titulo: null,
      msg: null,
      datas: "",
    };
  },

  methods: {
    reset() {
      this.titulo = "";
    },

    postData() {
      this.route = "api/cursos";
      this.datas = JSON.stringify({
        titulo: this.titulo
      });
    },

  }
};
</script>
