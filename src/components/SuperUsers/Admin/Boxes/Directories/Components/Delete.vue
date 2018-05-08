 <template>
     <div>

      <button @click="show" class="adm-button">-</button>

      <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Remover Diretório</h1>

      <form slot="content" class="form-admin-modal">
          <input type="text" :value="titulo"  readonly>
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
import Modal from "../../../../../UIComponents/Modal"
import { url } from '../../../../../_mixins/url.js'
import { showModal } from '../../../../../_mixins/showModal.js'
import { del } from '../../../../../_mixins/delete.js'

export default {
  name: "Delete",

  components: { Modal },

  mixins: [ url, showModal, del] ,

  data() {
    return {
      titulo: "",
      id: ""
    };
  },

  methods:{
    postData(){
      this.route = 'api/diretorios/';
      this.datas = JSON.stringify({
        id: this.id
      })
    }
  },

  created(){
    this.showModal = false;
    this.$bus.$on("objectEmited", (diretorio) => {
        this.titulo = diretorio.titulo;
        this.id = diretorio.id;
      });
  },

}
</script>