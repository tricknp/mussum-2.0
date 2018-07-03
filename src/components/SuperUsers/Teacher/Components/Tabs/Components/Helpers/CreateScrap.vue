<template>
    <div>
        <button @click="show" class="create-scrap"> <IconAdd class="icon-create-scrap" /> </button>

        <Modal v-if="showModal" @show="show" id="modal-container">
            <h1 slot="header">Novo Recado</h1>

            <form slot="content" class="form-modal">
                <input type="text" placeholder="Titulo" v-model="titulo">
                <textarea type="text" placeholder="Recado" v-model="descricao"> </textarea>
            </form>

            <div slot="footer" class="div-btn-modal">
                <button @click="onSubmit" class="modal-buttons">Ok</button>
                <button @click="cancel" class="modal-buttons">Cancelar</button>
            </div>

        </Modal>
    </div>

</template>

<script>
import Modal         from  '../../../../../../UIComponents/Modal'
import IconAdd    from  '../../../../../../_utils/Svgs/IconAdd'
import { showModal } from  '../../../../../../_mixins/showModal'
import { url }       from  '../../../../../../_mixins/url'
import { create }    from  '../../../../../../_mixins/create'


export default {

    components: { Modal, IconAdd },

    mixins: [ url, showModal, create ],

    data(){
        return{
            titulo: '',
            descricao: '',
            datas: ''
        }
    },

    methods: {
      reset(){
        this.descricao = ''
        this.titulo =  ''
      },

      postData(){
         this.route = 'api/recados'
         this.datas = JSON.stringify({
             titulo: this.titulo,
             descricao: this.descricao
         })
      }
    }



}
</script>
