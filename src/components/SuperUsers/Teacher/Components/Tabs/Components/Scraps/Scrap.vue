<template>
  <div>

    <Create v-if="isOwner" @create="init()"></Create>

    <div v-for="(scrap, index) in scraps" :key="scrap.titulo" class="scrap" >

      <div class="desc-scrap">
        <input type="text" v-model="scrap.titulo" :disabled="disabled" ref="title" >

        <div v-if="isOwner">
          <button v-if="!titleFocused" type="button" @click="titleFocus(index)">
             <IconEdit />
         </button>

          <button v-if="titleFocused" type="button">
             <IconOk   />
          </button>
        </div>
      </div>

      <input type="text" v-model="scrap.descricao" :disabled="disabled" ref="desc" class="desc">
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

export default {

  components: { Create, IconEdit, IconOk},

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
    },

    descFocus(index){
      this.$refs.title[index].disabled = false
      this.$refs.title[index].focus()
      this.titleFocused = true
      console.log(this.titleFocused)
    },
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
