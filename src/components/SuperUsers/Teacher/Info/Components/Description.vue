<template>
  <div class="teacher-description">
    <h1>Default namis</h1>
    <input type="text" placeholder="Sem descriçõesis">
      <br> 
    <input type="email" name="" id="" placeholder="email">
  </div>  
</template>


<script>
import auth from "../../../../../services/auth";

export default {
  name: "Description",

  data() {
    return {
      role: auth.getRole()
    };
  }
};
</script>