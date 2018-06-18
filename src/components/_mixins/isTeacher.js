import auth from "../../services/auth"

export default { 
    computed: {
        isTeacher: function() {
          if (auth.getUsername() !== null && auth.getRole() !== null) {
            const username = auth.getUsername().toLowerCase();
            const role = auth.getRole();
    
            return (role == 'professor' || role == 'admin') && username == this.$route.params.targetName;
          }
        }
      },
}