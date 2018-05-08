import axios from 'axios'

export const initialize = {
    
    data() {
        return {
          selected: null,
          object: '',
        }
      },
      
    methods: { 
      initialize() {
          this.postData();
          
          axios
            .get(this.BASE_URL + this.route)
            .then(res => {
            this.diretorios = res.data;
            });
        },

       select(obj) {
         this.selected = obj;
         console.log('selected    ' + this.selected.id)
         this.$bus.$emit("objectEmited", this.selected);
        },
    },
    
    created() {
        this.initialize();
    },
    
    updated() {
        this.initialize();
    }
}