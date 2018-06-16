<template>
  <div>
    
    <h1> {{ `${professor.nome} ${professor.sobrenome}` }} </h1>
    
    <input type="text" ref="sobre" :disabled="disabled" v-model="professor.sobre" placeholder="sobre...">
    
    <button v-if="!focused" @click="focus"> <IconEdit /> </button>
    
    <button v-if="focused" @click="onSubmit"> <IconOk /> </button>

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
      professor: '',
      focused: false,
      disabled: true,
      id: '',
    }
  },

  created(){
    this.init()
  },

  methods: {
    init(){
      axios.get(`${this.BASE_URL}api/professores`).then(res => {
      
        let t = res.data
        
        for (let i = 0; i < t.length; i++) {
          if (t[i].username == this.$route.params.targetName) {
            this.professor = t[i]
            this.id = t[i].id
          }  
        }
      })
    },

    focus(){
      this.disabled = false
      this.focused = true
      this.$refs.sobre.focus()
    },  

    postData(){

      this.focused = false

      this.route = 'api/professores/',
      this.datas = JSON.stringify({
        id: this.id,
        sobre: this.professor.sobre,
      })
    },
  
  }
}
</script>
