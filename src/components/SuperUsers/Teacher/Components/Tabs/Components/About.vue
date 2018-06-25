<template>
  <div>

    <h1> {{ `${nome} ${sobrenome}` }} </h1>

    <input type="text" ref="sobre" :disabled="disabled" v-model="sobre" placeholder="sobre...">

    <div v-if="isOwner">
      <button v-if="!focused" @click="focus"> <IconEdit /> </button>

      <button v-if="focused" @click="onSubmit"> <IconOk /> </button>
    </div>

  </div>
</template>


<script>
import axios from 'axios'
import { url } from '../../../../../_mixins/url'
import { edit } from '../../../../../_mixins/edit'
import IconEdit from '../../../../../_utils/Svgs/IconEdit'
import IconOk from '../../../../../_utils/Svgs/IconOk'

export default {

  components: { IconEdit, IconOk },

  mixins: [ url, edit ],

  data(){
    return{
      professor: [],
      username: this.$route.params.targetName,
      nome: '',
      sobrenome: '',
      sobre: '',
      focused: false,
      disabled: true,
      id: '',
    }
  },

  computed: {
    isOwner: function(){
      if (this.username == localStorage.username) {
        return true
      }
    }
  },

  created(){
    this.init();

    this.$bus.$on("selectProfessor", username => {
      this.refresh(username);
    });
  },

  methods: {
    refresh(username){
      this.username = username;
      let t = this.professor.find(x => x.username === username);
      this.id = t.id;
      this.nome = t.nome;
      this.sobrenome = t.sobrenome;
      this.sobre = t.sobre;
    },

    init(){
      axios.get(`${this.BASE_URL}api/professores`).then(res => {
        this.professor = res.data
        this.refresh(this.username);
      })
    },


    focus(){
      this.disabled = false
      this.focused = true
      this.$refs.sobre.focus()
    },

    postData(){

      this.disabled = true

      this.route = 'api/professores/',
      this.datas = JSON.stringify({
        id: this.id,
        sobre: this.sobre,
      })
    },

  }
}
</script>
