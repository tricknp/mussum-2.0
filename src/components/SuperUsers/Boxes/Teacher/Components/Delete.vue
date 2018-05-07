  <template>
     <div>
      
      <button @click="show" class="adm-button">-</button> 
  
      <modal v-if="showModal" @show="show()" id="admin-modal">
  
      <h1 slot="header">Remover Professor</h1>
  
        <form slot="content" class="form-admin-modal">
            <input type="text"    :value="nome"  readonly>
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
import axios from 'axios'
import Modal from '../../../../UIComponents/Modal'

export default {  
  name: 'Delete',

  components: { Modal },

  data(){
    return{
       showModal: false,
       nome: '',
    }
  },

  methods:{
    show(){
      this.showModal = true; 
        this.$bus.$on('delete', (nome, id) => { 
          this.nome = nome;
          this.id = id;
      })
    },

    onSubmit(){
      axios
          .delete('http://25.77.220.94:8009/api/professores/' + this.id)
          .then( (response) => {
            console.log(response.data)
            })
          .catch(error => console.log(error));
      this.showModal = false;
      console.log(this.id)
    },
  },


}
</script>



