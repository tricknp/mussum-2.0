 <template>
     <div>

      <button @click="show">
        <IconDelete class="icon-delete" />
      </button>

      <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Remover Curso</h1>

      <form slot="content" class="form-admin-modal">
          <input type="text"    :value="titulo"  readonly>
          <input type="text"    :value="descricao" placeholder="descricao não informada" readonly>
          <input type="text"    :value="data"  readonly>
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
      titulo: "",
      descricao: '',
      data: '',
      id: ""
    };
  },

  methods:{
    postData(){
      this.route = 'api/cursos/';
      this.datas = JSON.stringify({
        id: this.id
      })
    }
  },

  created(){
    this.showModal = false;
    this.$bus.$on("objectEmited", (curso) => {
        this.titulo = curso.titulo;
        this.descricao = curso.descricao;
        this.data = curso.data
        this.id = curso.id;
      });
  },

}
</script>
