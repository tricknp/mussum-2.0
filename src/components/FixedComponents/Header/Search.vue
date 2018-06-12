<template>
    <div class="search">
        <input type="text" class="input-search" ref="search" placeholder="Pesquisar...">
        <button @click="search" class="btn-header-search">
            <IconSearch class="icon-search" />
        </button>   
    </div>
</template>

<script>
import IconSearch from '../../_utils/Svgs/IconSearch'

export default {

    components: { IconSearch },

    methods:{
        search(){
            if (this.$refs.search.value.length <= 0) {
                this.$refs.search.focus(); 
            }else{
                alert('need a get')
                
            }
        },
        
    }

}
</script>
