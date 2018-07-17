import axios from 'axios'

export const edit = {
    methods:{

        onSubmit() {
           this.postData();
            axios
              .put(`${this.BASE_URL}${this.route}${this.id}`, this.datas, {
                headers: { "Content-Type": "application/json" }
              })
              .then(response => {
                console.log(response);
              })
              .catch(error => console.log(error));

              this.showModal = false;


          }
    }
}
