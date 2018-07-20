<template>
  <div class="scrap-content">

    <Create v-if="isOwner" @create="init()" />
    <div v-for="(scrap, index) in scraps" :key="scrap.id" class="scrap" >
      <div v-if="isOwner" class="actions-scrap">
        <button @click="handleDelete(scrap.id)" class="btn-scrap">
          <IconDelete class="icon-scrap" />
        </button>

        <button v-if="!titleFocused" type="button" @click="titleFocus(index)" class="btn-scrap">
          <IconEdit class="icon-scrap" />
        </button>

        <button v-else @click="handleEdit(scrap, index)" type="button" class="btn-scrap">
          <IconOk class="icon-scrap"  />
        </button>
      </div>

      <div class="scrap-container">
        <input type="text" v-model="scrap.titulo":disabled="disabled" ref="title" class="scrap-title">
        <textarea v-model="scrap.descricao" :disabled="disabled" ref="desc"  class="scrap-desc"></textarea>
      </div>
      <h4 class="scrap-date"> {{ scrap.data }} </h4>
    </div>

    <Empty v-if="empty" />

  </div>
</template>


<script>
import axios          from  'axios'
import Create         from  './Helpers/CreateScrap'
import { showModal }  from  '../../../../../_mixins/showModal'
import { url }        from  '../../../../../_mixins/url'
import IconEdit       from  '../../../../../_utils/Svgs/IconEdit'
import IconOk         from  '../../../../../_utils/Svgs/IconOk'
import IconDelete     from  '../../../../../_utils/Svgs/IconDelete'
import Empty          from  '../../../../../UIComponents/EmptyCacildis'

export default {

  components: { Create, IconEdit, IconOk, IconDelete, Empty},

  mixins: [ showModal, url ],

  data(){
    return{
      disabled: true,
      scraps: '',
      titleFocused: false,
      empty: true
    }
  },

  computed: {
    isOwner: function(){
      if (this.$route.params.targetName == localStorage.username) {
        return true
      }
    },
  },

  created(){
    this.init();
    // this.$bus.$on("selectProfessor", username => {
    //   this.init(username);
    // });
  },

  methods:{
    init(){
      //this.scraps = {};
      axios
        .get(`${this.BASE_URL}api/recados`, {
          headers: { 'username': this.$route.params.targetName }
        })
        .then( res => {
          this.scraps = res.data;
          this.scraps.reverse()

          if (this.scraps.length > 0) {
            this.empty = false
          }else {
            this.empty = true
          }

        })
    },

    titleFocus(index){
      this.$refs.title[index].disabled = false
      this.$refs.desc[index].disabled  = false
      this.$refs.title[index].focus()
      this.titleFocused = true

    },

    handleEdit(scrap, index){
      axios
        .put(`${this.BASE_URL}api/recados/${scrap.id}`,  {
          titulo: scrap.titulo,
          descricao: scrap.descricao
        })
        .then(res => {
          this.$refs.title[index].disabled = true
          this.$refs.desc[index].disabled  = true
          this.titleFocused = false
          this.init()
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
