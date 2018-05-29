<template>
  <div>
    <select v-model="dir">
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
      dir: null,
      cursos: null,
      treeData: 
      [
        { text: 'Curso', state: { expanded: false }, 
          children: 
          [{ 
            text: 'REPOSITÓRIO PAI - 1', state: {expanded: false}, 
          }]
        }],        
          treeOptions: {}
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

        getRepositorys(){
          axios
            .get(`${this.BASE_URL}api/repository`, {
              headers: { 'dir' : '', 'username': this.$route.params.targetName }, 
            })
            .then( res => {
              console.log(res.data.pastas)
              this.treeData.push({ text: res.dir  })
            })
        },

        addCourse(){
          axios
            .post(`${this.BASE_URL}api/repository`, this.dir, {
              headers: { 'dir' : this.dir}
            })
            .then(res => {
              //this.treeData.push({ text: dir, state: { expanded: false } });
                console.log('Curso adicionado com sucesso ' + this.dir)
          }).catch(error => console.log('error -> ' + error))
        }
      },

      created(){
        this.getCourses();
        this.getRepositorys();
      },

  }
  
</script>
