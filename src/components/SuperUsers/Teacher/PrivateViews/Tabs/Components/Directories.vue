<template>
  <div>
    <select v-model="item">
      <option v-for="curso in cursos" 
              :key="curso.id" 
              :value="curso.titulo"> 
              {{ curso.titulo }}
      </option>
    </select>
    <button @click="addCourse">+</button>

    <tree :data="treeData" :options="treeOptions" @node:selected="onNodeSelected" /> 

  </div>  
</template>


<script>
import axios from 'axios'
import { url } from '../../../../../_mixins/url'

export default {
  name: 'Directories',

  mixins: [ url ],

  data(){
    return{
      item: null,
      cursos: null,
      treeData: 
      [
        { text: 'Curso', state: { expanded: false }, 
          children: [ { text: 'REPOSITÓRIO PAI - 1', state: {expanded: false},
                      children: [ { text: 'FILHO', 
                  }], 
                },   
             ]},
           ],
           
          treeOptions: {
          }
        }
      },
      methods: {
      	onNodeSelected(node) {
        	console.log(node.text)
        },

        getCourses(){
          axios
            .get(this.BASE_URL + 'api/cursos')
            .then( res => {
              this.cursos = res.data;
            })
        },

        addCourse(){
          const dir = this.item;
          axios
            .post(`${this.BASE_URL}api/repository`, dir, {
              headers: { 'dir' : dir}
            })
            .then(res => {
              //this.treeData.push({ text: dir, state: { expanded: false } });
                console.log('Curso adicionado com sucesso')
          }).catch(error => console.log('erro -> ' + error))
        }
      },

      created(){
        this.getCourses();
      },
    }
  
</script>
