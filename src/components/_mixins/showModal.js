export const showModal = {
    data(){
        return{
            showModal: false,
        }
    },
    methods: {
        show() {
            this.showModal = true;
        },

        cancel(){
          this.showModal = false
        }

    }
}
