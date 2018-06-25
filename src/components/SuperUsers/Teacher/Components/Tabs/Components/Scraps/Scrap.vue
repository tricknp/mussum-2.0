<template>
  <div>

    <Create v-if="isOwner" @create="init()"></Create>

    <div v-for="(scrap, index) in scraps" :key="scrap.titulo" class="scrap" >

      <div class="desc-scrap">
        <button @click="handleDelete(scrap.id)">
          <IconDelete />
        </button>
        <input type="text" v-model="scrap.titulo" :disabled="disabled" ref="title" >

        <div v-if="isOwner">
          <button v-if="!titleFocused" type="button" @click="titleFocus(index)">
             <IconEdit />
         </button>

          <button v-if="titleFocused" @click="handleEdit(scrap)" type="button">
             <IconOk   />
          </button>
        </div>
      </div>
      
      <div>
        <input type="text" v-model="scrap.descricao" :disabled="disabled" ref="desc" class="desc">
        <div v-if="isOwner">
          <button v-if="!descFocused" type="button" @click="descFocus(index)">
             <IconEdit />
         </button>

          <button v-if="descFocused" @click="handleEdit(scrap)" type="button">
             <IconOk   />
          </button>
        </div>
      </div>
      <h4> {{ scrap.data }} </h4>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Create from './Components/Create'
import { showModal } from '../../../../../../_mixins/showModal'
import { url } from '../../../../../../_mixins/url'
import IconEdit from '../../../../../../_utils/Svgs/IconEdit'
import IconOk from '../../../../../../_utils/Svgs/IconOk'
import IconDelete from '../../../../../../_utils/Svgs/IconDelete'

export default {

  components: { Create, IconEdit, IconOk, IconDelete},

  mixins: [ showModal, url ],

  data(){
    return{
      disabled: true,
      scraps: '',
      titleFocused: false,
      descFocused: false,
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
          this.scraps.reverse()
        })
    },

    titleFocus(index){
      this.$refs.title[index].disabled = false
      this.$refs.title[index].focus()
      this.titleFocused = true    
      this.$refs.desc[index].disabled = true
      this.descFocused = false
    },

    descFocus(index){
      this.$refs.desc[index].disabled = false
      this.$refs.desc[index].focus()
      this.descFocused = true
      this.$refs.title[index].disabled = true
      this.titleFocused = false
      console.log(this.titleFocused)
    },

    handleEdit(scrap){
      let data = JSON.stringify({
        titulo: scrap.titulo,
        descricao: scrap.descricao
      })
      axios
        .put(`${this.BASE_URL}api/recados/${scrap.id}`, data)
        .then(res => {
          console.log(res.data)
        })
    },
    
    handleDelete(id){
      let decision = confirm('Tem certeza de que deseja excluir este recado?')
      if (decision) {
        axios
          .delete(`${this.BASE_URL}api/recados/${id}`)
          .then(res => {
            this.init()
          })
      }
    }
 },

}
</script>


<style>
input, textarea
{
  border: none;;
}

.scrap
{
  display: flex;
  flex-direction: column;
}

.desc-scrap
{
  display: flex;
  flex-direction: row;
}
</style>
