<template>
    <div>
        <button @click="show" class="adm-button">
          <IconAdd />
        </button> 
        
        <modal v-if="showModal" @show="show()">
            <h1 slot="header">Adicionar Repositório</h1>
            <form slot="content" class="form-admin-modal">
              <input type="text" placeholder="diretorio" v-model="child" required>
            </form>
            <div slot="footer">
                <button type="submit" @click.prevent="addChild" >
                  Confirmar
                </button>
                <button @click="showModal = false">
                    Cancelar
                </button>
            </div>
        </modal>
        
        <modal v-if="showModal" @show="show()">
            <h1 slot="header">Adicionar Repositório</h1>
            <form slot="content" class="form-admin-modal">
              <input type="text" placeholder="diretorio" v-model="child" required>
            </form>
            <div slot="footer">
                <button type="submit" @click.prevent="addChild" >
                  Confirmar
                </button>
                <button @click="showModal = false">
                    Cancelar
                </button>
            </div>
        </modal>

    </div>
</template>

<script>
import IconAdd     from   '../../../_utils/Svgs/IconAdd'
import {showModal} from   '../../../_mixins/showModal'

export default {
    components: { IconAdd },
    mixins: [ showModal ],
}
</script>