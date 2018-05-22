 <template>
     <div>

      <button @click="show" class="adm-button">
        <svg class="icon icon-del" enable-background="new 0 0 348.333 348.334" version="1.1" viewBox="0 0 348.333 348.334" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	        <path d="m336.56 68.611l-105.54 105.55 105.54 105.55c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769l-105.57-105.56-105.56 105.56c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.55-105.55-105.55c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.56 105.55 105.56-105.55c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145 6e-3 56.844z"/>
        </svg>
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