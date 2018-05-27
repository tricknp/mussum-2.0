<template>
  <div class="teacher-description">
    <h1>Default namis</h1>

    <div class="div-desc-teacher">
      <input type="text" placeholder="Sem descriçõesis" class="input-teacher-profile"> 
    
      <button type="submit" class="btn-edit">
        <svg class="icon icon-edit" enable-background="new 0 0 528.899 528.899" version="1.1" viewBox="0 0 528.899 528.899" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <path d="m328.88 89.125l107.59 107.59-272.34 272.34-107.53-107.59 272.28-272.34zm189.23-25.948l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259 0l-45.961 45.961 107.59 107.59 53.611-53.611c14.382-14.383 14.382-37.577 0-51.959zm-517.81 449.51c-1.958 8.812 5.998 16.708 14.811 14.565l119.89-29.069-107.53-107.59-27.173 122.09z"/>
        </svg>
      </button>
    </div>
    
    <div class="div-email-teacher">
      <input type="text" placeholder="Sem E-mail" class="input-teacher-profile"> 
    
      <button type="submit" class="btn-edit">
        <svg class="icon icon-edit" enable-background="new 0 0 528.899 528.899" version="1.1" viewBox="0 0 528.899 528.899" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <path d="m328.88 89.125l107.59 107.59-272.34 272.34-107.53-107.59 272.28-272.34zm189.23-25.948l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259 0l-45.961 45.961 107.59 107.59 53.611-53.611c14.382-14.383 14.382-37.577 0-51.959zm-517.81 449.51c-1.958 8.812 5.998 16.708 14.811 14.565l119.89-29.069-107.53-107.59-27.173 122.09z"/>
        </svg>
      </button>
    </div>


  </div>  
</template>


<script>
import auth from "../../../../services/auth";

export default {
  
  data() {
    return {
      role: auth.getRole()
    };
  }
};
</script>