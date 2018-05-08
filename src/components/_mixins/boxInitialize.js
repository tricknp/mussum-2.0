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

       selectTeacher(obj) {
         this.selected = obj;
         this.$bus.$emit("objectEmited", this.selected);
        },
    },
    
    created() {
        this.initialize();
    },
    
    updated() {
       // this.initialize();
    }
}