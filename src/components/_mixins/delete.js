import axios from 'axios'
export const del = {

    methods: {
        onSubmit() {
          this.postData();

          axios
            .delete(this.BASE_URL + this.route + this.id)
            .then(response => {
              //console.log(response.data);
              this.$emit('delete');
              this.showModal = false;
            })
            .catch(error => console.log(error));
        }
      },

}
