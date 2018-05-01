<template>
  <div>
    
    <div class="div-adm-button">
      <button @click="toggleAdd" class="adm-button">+</button>
      <button @click="toggleDel" class="adm-button">-</button>
      <button @click="toggleDel" class="adm-button">&</button>
    </div>

      <modal title="Adicionar Professor"
             transition="bounceUp" 
             :on-ok="okCb" 
             :on-cancel="cancelCb" 
             :is-show="isShow" 
             @close="isShow=false">

            <form>
                <label for="nome">Nome</label>
                <input type="text" name="nome" v-model="professor.nome" required>

                <label for="sobre">Descrição</label>
                <input type="text" name="sobre" v-model="professor.desc">

                <label for="email">E-mail</label>
                <input type="email" name="email" v-model="professor.email">

                <label for="username">Nome de usuario</label>
                <input type="text" name="username" v-model="professor.username">

                <label for="password">Senha</label>
                <input type="password" name="password" v-model="professor.password">

                <button>
                    <a href="javascript:void(0);" @click="handleSubmit(teacher)"> Adicionar </a>
                </button>
            </form>      
            
        </modal>

  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'Create',
  
  data(){
      return{
          professor:{
              nome: null,
              desc: null,
              email: null,
              username: null,
              password: null,
          },

          isShow: false,
          msg: ''
      };
  },

  methods:{
    //========================== modal =============================//
    toggleAdd() {
      this.isShow = !this.isShow;
      this.$emit('created')
    },

    toggleDel() {
      this.isShow = !this.isShow;
    },

    okCb() {
      this.$notify.open({
        type: 'success',
        title: `Ok! Registradis.`,
      });
    },
    cancelCb() {
      this.$notify.open({
        type: 'danger',
        title: `Ok! Canceladis.`,
      });
    },
    okCloseCb() {
      setTimeout(() => {
        this.toggle();
      }, 2000);
    },
  },

//========================== add =============================//

    handleSubmit(teacher){
        axios.post('http://mussum2api.herokuapp.com/professores', professor)
            .then( (result) => {
                this.isShow = !this.isShow;
                console.log('sucess')
            }), () => {
                console.log('fail')
            }
    }
    
}
</script>
