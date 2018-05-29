import axios from 'axios'

export const edit = {
    methods:{
      
        onSubmit() {
           this.postData();
           console.log('response do datas no editttt   ' + this.datas)
            axios
              .put(this.BASE_URL + this.route + this.id, this.datas, {
                headers: { "Content-Type": "application/json" } 
              })
              .then(response => {
                console.log('response do edit   ' + response.data);
              })
              .catch(error => console.log(error));
                
              this.showModal = false;

          }
    }   
}