 <template>
     <div>

      <button @click="show" >
        <IconDelete class="icon-delete" />
      </button>

      <modal v-if="showModal" @show="show()" id="admin-modal">

      <h1 slot="header">Remover Diretório</h1>

      <form slot="content">
          <input type="text" :value="titulo"  readonly>
          <input type="text" :value="descricao"  readonly>
      </form>

      <div slot="footer">
          <button type="submit" @click.prevent="onSubmit">
              Remover
          </button>
          <button @click="showModal = false" >
              Cancelar
          </button>
      </div>

      </modal>

    </div>
  </template>

<script>
import  Modal         from  "../../../../../../../UIComponents/Modal"
import  IconDelete    from  '../../../../../../../_utils/Svgs/IconDelete'
import  { url }       from  '../../../../../../../_mixins/url.js'
import  { showModal } from  '../../../../../../../_mixins/showModal.js'
import  { del }       from  '../../../../../../../_mixins/delete.js'

export default {

  components: { Modal, IconDelete },

  mixins: [ url, showModal, del] ,

  data() {
    return {
      titulo: "",
      descricao: "",
      id: ""
    };
  },

  methods:{
    postData(){
      this.route = 'api/recados/';
      this.datas = JSON.stringify({
        id: this.id
      })
    }
  },

  created(){
    this.showModal = false;
    this.$bus.$on("objectEmited", (scrap) => {
        this.titulo = scrap.titulo;
        this.descricao = scrap.descricao;
        this.id = scrap.id;
      });
  },

}
</script>