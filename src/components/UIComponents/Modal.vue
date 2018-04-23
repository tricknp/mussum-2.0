<template>
  <div>
    <modal title="title" 
           transition="bounceUp" 
           :on-ok="okCb" 
           :on-cancel="cancelCb" 
           :is-show="isShow" 
           @close="isShow=false">
    </modal>
         <button @click="toggle" class=""></button>
  </div>

</template>


<script>
export default {
  name: 'Modal',

  data() {
      return { 
        isShow: false,
    };
  },

  methods: {
    toggle() {
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
