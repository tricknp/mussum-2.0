<template>
    <div>
        <button @click="show"> Novo Recado </button>

        <Modal v-if="showModal" @show="show"> 
            <h1 slot="header">Novo Recado</h1>

            <form slot="content"> 
                <input type="text" placeholder="Titulo">
                <input type="text" placeholder="Recado">
            </form>
            
            <div slot="footer">
                <button>Ok</button>
                <button>Cancelar</button>
            </div>

        </Modal>
    </div>
    
</template>

<script>
import Modal from '../../../../../../../UIComponents/Modal'
import { showModal } from '../../../../../../../_mixins/showModal'
import { url } from '../../../../../../../_mixins/url'


export default {
    
    components: { Modal },

    mixins: [ url, showModal ],



}
</script>