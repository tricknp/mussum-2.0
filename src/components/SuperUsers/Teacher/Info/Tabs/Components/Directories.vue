<template>
  <div>
    <tree
      :data="treeData"
      :options="treeOptions"
      @node:selected="onNodeSelected"
    />  
  </div>  
</template>


<script>
export default {
  name: 'Directories',

  data(){
    return{
      treeData: [
        { text: 'Analise e Desenvolvimento de Sistemas', state: { expanded: false }, 
          children: [ { text: 'Laboratório de Programação I', state: {expanded: false},
                      children: [ { text: 'Bla Bla Bla', children: [ { text: 'bla bla bla' }], }], }, 
                      { text: 'TCC/Projeto Integrador', state: {expanded: false},
                      children: [ { text: 'Bla Bla Bla', children: [ { text: 'bla bla bla' }], }], }, 
                      { text: 'Algoritimos e Programação III' } ]
        },
        
        { text: 'Redes de Computadores', state: { expanded: false }, 
         children: [ { text: 'Laboratório de Programação I' }, 
                      { text: 'TCC/Projeto Integrador' }, 
                      { text: 'Algoritimos e Programação III' } ]
        },                    
           
           ],

           
          treeOptions: {
          }
        }
      },
      methods: {
      	onNodeSelected(node) {
        	console.log(node.text)
        }
      }
    }
  
</script>
