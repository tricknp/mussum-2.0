<template>
  <div>

    <button @click="show()">
      <IconEdit class="icon-edit" />
    </button>

    <modal v-if="showModal" @show="show()" id="modal-container">

      <h1 slot="header">Editar Professor</h1>

      <form slot="content" class="form-modal">

        <div class="div-checkbox-admin">
          <input type="checkbox" v-model="checkRole" @change="getRole()">
          <label for="admin">Admin</label>
        </div>

          <input type="text"  v-model="professor.nome"  placeholder="nome" required>
          <input type="text"  v-model="professor.sobrenome"  placeholder="sobrenome" required>
          <input type="email" v-model="professor.email" placeholder="email" >
          <input type="text"  v-model="professor.username" placeholder="username" required>
          <input type="password"  v-model="professor.password" placeholder="password" required >
        </form>

        <div slot="footer">
          <div class="div-btn-modal">
            <button type="submit" @click.prevent="onSubmit()" class="modal-buttons">
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
import  IconEdit       from  '../../../../../_utils/Svgs/IconEdit'
import  Modal          from  "../../../../../UIComponents/Modal"
import  { url }        from  '../../../../../_mixins/url.js'
import  { showModal }  from  '../../../../../_mixins/showModal.js'
import  { edit }       from  '../../../../../_mixins/edit.js'

export default {
  name: "Edit",

  components: { Modal, IconEdit },

  mixins: [ url, showModal, edit ],

  data() {
    return {
      datas: '',
      professor: '',
      id: '',
      checkRole: '',
      role: '',
    };
  },

  created() {
    this.$bus.$on("objectEmited", (professor) => {
      this.professor = professor;
      this.id = professor.id;
      if (this.professor.role == 'professor') {
        this.checkRole = false
      }else {
        this.checkRole = true
      }
    });
  },

  methods: {
    getRole(){
      if (!this.checkRole) {
        this.role = 'professor'
      }else{
        this.role = 'admin'
      }
    },

    postData(){
      this.route = 'api/professores/',
      this.datas = {
        id: this.id,
        role: this.role,
        nome: this.professor.nome,
        sobrenome: this.professor.sobrenome,
        email: this.professor.email,
        username: this.professor.username,
        password: this.professor.password,
        descricao: this.professor.descricao,
        sobre: this.professor.sobre,
      }
    },

  }

}
</script>
