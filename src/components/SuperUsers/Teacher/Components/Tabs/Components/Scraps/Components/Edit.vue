<template>
    <div>
        <button @click="show"> <IconEdit /> </button>

        <Modal v-if="showModal" @show="show"> 
            <h1 slot="header">Editar Recado</h1>

            <form slot="content"> 
                <input type="text" placeholder="titulo..."  v-model="titulo">
                <input type="text" placeholder="recado..."  v-model="descricao">
            </form>
            
            <div slot="footer">
                <button @click="handleEdit">Ok</button>
                <button @click="showModal == false">Cancelar</button>
            </div>

        </Modal>
    </div>    
</template>

<script>
import axios from 'axios'
import  IconEdit       from '../../../../../../../_utils/Svgs/IconEdit'
import  Modal          from  '../../../../../../../UIComponents/Modal'
import  { url }        from  '../../../../../../../_mixins/url'
import  { showModal }  from  '../../../../../../../_mixins/showModal'

export default {
    
    components: { IconEdit, Modal },
    
    mixins: [ url, showModal ],

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

      handleEdit(){
          let data = JSON.stringify({
             descricao: this.descricao,
             titulo: this.titulo 
          })

          axios
            .put(`${this.BASE_URL}api/recados/`,  )
            .then()
      },


       
    }   

}
</script>
