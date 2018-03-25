<template>
  <div>
      <div>
          <h3> {{title}} </h3>

      </div>

      <div>

      </div>
  </div>
</template>


<script>
export default {
  name: 'Links',
  
  data(){
      return{
          title: 'Links Interessantes',

          links:
          [
              {test: 'bla bla'},
              {test: 'cla cla'},
              {test: 'dla dla'},
          ],  

      };
  },

}
</script>
