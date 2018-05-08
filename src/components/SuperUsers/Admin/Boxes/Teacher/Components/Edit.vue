<template>
  <div>

    <button @click="show" class="adm-button">&</button>

    <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Editar Professor</h1>

      <form slot="content" class="form-admin-modal">
          <input type="text"   :value="professor.nome" placeholder="nome" required>
          <input type="email"  :value="professor.email" placeholder="email">
          <input type="text"   :value="professor.username" placeholder="username" required>
          <input type="password" placeholder="senha" :value="professor.password" required >
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
import axios from "axios"
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
      professor : null,
    };
  },

  created() {
    this.$bus.$on("objectEmited", (professor) => {
      this.professor = professor;
      this.id = this.professor.id;
    });
  },

  methods: {
    postData(){
      this.route = 'api/professores/',
      this.datas = JSON.stringify({
        id: this.id,
        nome: this.nome,
        email: this.email,
        username: this.username,
        password: this.password
      })
    },

  }

}
</script>