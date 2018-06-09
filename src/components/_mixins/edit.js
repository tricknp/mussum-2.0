import axios from 'axios'

export const edit = {
    methods:{
      
        onSubmit() {
           this.postData();
           console.log('datas no mixins/edit   ' + this.datas)
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