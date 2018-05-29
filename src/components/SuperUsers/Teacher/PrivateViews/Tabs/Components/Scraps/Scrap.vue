<template>
  <div>
    <Create></Create>
    <div v-for="scrap in scraps" :key="scrap.titulo">
      <h1>{{ scrap.titulo }}</h1>
      <h3>{{ scrap.descricao }}</h3>
      <h4>{{ scrap.data }}</h4>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Create from './Components/Create'
import { showModal } from '../../../../../../_mixins/showModal'
import { url } from '../../../../../../_mixins/url'

export default {
  
  components: { Create },

  mixins: [ showModal, url ],

  data(){
    return{
      scraps: '',
    }
  },

  methods:{
    init(){
      axios
        .get(`${this.BASE_URL}api/recados`)
        .then( res => {
          this.scraps = res.data;
        })
        
    }
  },

  created(){
    this.init();
  }
  
}
</script>
