
<template>
  <footer id="footer">
      <div class="divider"></div>

      <h4 class="college"> {{ college_name }} </h4>
      
      <h4 class="developed-by"> 
          {{ by }}
          <a 
             href="https://github.com/tricknp" 
             target="_blank" 
             id="name"> 
             Patrick Porto, 
          </a>
          <a 
             href="https://github.com/yurinb" 
             target="_blank" 
             id="name"> 
             Yuri Bento, 
           </a>
          <a 
             href="https://github.com/marcosmtt" 
             target="_blank" 
             id="name"> 
             Marcos Motta 
          </a>  
      </h4>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data(){
      return{
          college_name: 'Faculdade de Tecnologia Senac Pelotas',
          by: 'Desenvolvido por: ',
      };
  },

}
</script>

