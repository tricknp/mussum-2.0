 <template>
     <div>

      <button @click="show">
        <IconDelete class="icon-delete" />
      </button>

      <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Remover Professor</h1>

      <form slot="content" class="form-admin-modal">
          <input type="text"    :value="nome"  readonly>
          <input type="text"    :value="email" placeholder="email não informado" readonly>
          <input type="text"    :value="username"  readonly>
      </form>

      <div slot="footer">
          <button type="submit" @click.prevent="onSubmit" class="adm-modal-buttons">
              Remover
          </button>
          <button @click="showModal = false" class="adm-modal-buttons">
              Cancelar
          </button>
      </div>

      </modal>

    </div>
  </template>

<script>
import  Modal         from  "../../../../../UIComponents/Modal"
import  IconDelete    from  '../../../../../_utils/Svgs/IconDelete'
import  { url }       from  '../../../../../_mixins/url.js'
import  { showModal } from  '../../../../../_mixins/showModal.js'
import  { del }       from  '../../../../../_mixins/delete.js'

export default {
  name: "Delete",

  components: { Modal, IconDelete },

  mixins: [ url, showModal, del] ,

  data() {
    return {
      nome: "",
      email: '',
      username: '',
      id: ""
    };
  },

  methods:{
    postData(){
      this.route = 'api/professores/';
      this.datas = JSON.stringify({
        id: this.id
      })
    }
  },

  created(){
    this.showModal = false;
    this.$bus.$on("objectEmited", (professor) => {
        this.nome = professor.nome;
        this.email = professor.email;
        this.username = professor.username
        this.id = professor.id;
      });
  },

}
</script>