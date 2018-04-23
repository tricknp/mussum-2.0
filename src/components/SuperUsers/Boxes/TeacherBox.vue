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
                <input type="text" name="nome" required>

                <label for="desc">Descrição</label>
                <input type="text" name="desc">
              </form>
          </modal>
      </div>
  </div>
</template>


<script>
export default {
  name: 'TeacherBox',
  
    data() {
      return {
       title: 'Professoris',  
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
