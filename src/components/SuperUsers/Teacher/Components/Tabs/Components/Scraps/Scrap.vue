<template>
  <div>

    <Create v-if="isOwner" @create="init()"></Create>   

    <div v-for="scrap in scraps" :key="scrap.titulo" class="scrap" >
      <div v-if="isOwner">
        <Edit />
        <Delete /> 
      </div>
      <h1> {{ scrap.titulo }} </h1>
      <h2> {{ scrap.descricao }} </h2>
      <h4> {{ scrap.data }} </h4>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Create from './Components/Create'
import Edit from './Components/Edit'
import Delete from './Components/Delete'
import { showModal } from '../../../../../../_mixins/showModal'
import { url } from '../../../../../../_mixins/url'

export default {

  components: { Create, Edit, Delete},

  mixins: [ showModal, url ],

  data(){
    return{
      disabled: true,
      scraps: '',
    }
  },

  computed: { 
    isOwner: function(){
      if (this.$route.params.targetName == localStorage.username) {
        return true
      }
    }
  },

  created(){
    this.init();
  },

  methods:{
    init(){
      axios
        .get(`${this.BASE_URL}api/recados`, {
          headers: { 'username': this.$route.params.targetName }
        })
        .then( res => {
          this.scraps = res.data;
        })
    },
 },

}
</script>


<style>
input, textarea
{
  border: none;
  background: transparent;
}

.scrap
{
  display: flex;
  flex-direction: column;
}
</style>
