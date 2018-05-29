<template>
    <div>
        <button @click="show"> + </button>

        <Modal v-if="showModal" @show="show"> 
            
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