<template>
  <div class="">
      <div class="">
          <h1>{{title}}</h1>          
            <button @click="toggleAdd" class="">+</button>
            <button @click="toggleDel" class="">-</button>
        
      </div>
      <div class="">
          <modal title="Adicionar Professor"
                 transition="bounceUp" 
                 :on-ok="okCb" 
                 :on-cancel="cancelCb" 
                 :is-show="isShow" 
                @close="isShow=false">
                <form>
                  <label for="nome">Nome</label>
                  <input type="text" name="nome">

                  <label for="link">Link</label>
                  <input type="text" name="link">
                </form>
          </modal>
          
      </div>
  </div>
</template>


<script>
export default {
  name: 'LinksBox',
  
    data() {
      return {
       title: 'Links',  
        isShow: false,
    };
  },
  methods: {
    toggleAdd() {
      this.isShow = !this.isShow;
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
}
</script>
