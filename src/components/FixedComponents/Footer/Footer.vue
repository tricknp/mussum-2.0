
<template>
  <footer class="footer">
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

<style>
    
    .footer
    {
        position: absolute;
        bottom: .3%;
        padding: .45em 0;
        width: 100%;
    }

    .divider
    {
        margin: 0 10em 1em 8.9em;
        border: .5px solid #999;
    }

    h4  
    {
        color: #555;   
        font-weight: 300;
        font-size: .9em;     
    }

    #name
    {
        color: #666;
        font-weight: 700;
    }

    .college
    {
        position: absolute;
        left: 10em;
    }

    .developed-by
    {
        text-align: right;
        margin-right: 11.2em;
    }


</style>


