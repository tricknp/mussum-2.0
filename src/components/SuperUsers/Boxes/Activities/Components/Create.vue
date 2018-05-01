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
 
}
</script>
