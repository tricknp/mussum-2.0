import axios from 'axios'
export const del = {

    methods: {
        onSubmit() {
          this.postData();

          axios
            .delete(this.BASE_URL + this.route + this.id)
            .then(response => {
              console.log(response.data);
            })
            .catch(error => console.log(error));
              this.showModal = false;
        }
      },

}