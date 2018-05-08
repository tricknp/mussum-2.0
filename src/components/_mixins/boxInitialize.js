import axios from 'axios'

export const initialize = {
    
    data() {
        return {
          selected: null
        }
      },
      
    methods: { 
      initialize() {
          this.postData();
          axios
            .get(this.BASE_URL + this.route)
            .then(res => {
            this.professores = res.data;
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