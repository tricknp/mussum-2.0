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

    <tree class="tree--small"
          :data="treeData" 
          :options="treeOptions" 
          @node:selected="onNodeSelected" >
    </tree>      

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
      
        
      treeData: [ { text: 'aa', state: { expanded: false } } 
        //children: [{  text: '', state: {expanded: false} }]
      ],
                
        treeOptions: {}
        }
      },

      methods: {
      	onNodeSelected(node) {
        	console.log(node.text)
        },

        /*===================================================* 
         *          Getting the courses existing.            *
         *                    - // -                         *
         *          Obtendo todos os cursos existentes.      *
         *===================================================*/
        getCourses(){
          axios
            .get(`${this.BASE_URL}api/cursos`)
            .then( res => {
              this.cursos = res.data;
            })
        },
        
        /*=================================================*
         *      Add a course to teacher repositories       *
         *                     - // -                      *      
         *  Adiciona um curso ao repositório do professor  *
         *=================================================*/
        addCourse(){
          axios
            .post(`${this.BASE_URL}api/repository`, this.dir, {
              headers: { 'dir' : this.dir}
            })
            .then(res => {
              this.treeData.push({ text: this.dir, state: { expanded: false } });
                console.log('Curso adicionado com sucesso ' + this.dir)
          }).catch(error => console.log('error -> ' + error))
        },

        /*========================================================================================*
         *    Getting all repositories from current teacher and adding they in the tree of        * 
         * repositories                                                                           *
         *                                    - // -                                              *
         *    Obtem todos os repositórios do professor atual e adicionando-os na árvore dos       *
         * repositórios                                                                           *
         *========================================================================================*/
        getRepositorys(){
          axios
            .get(`${this.BASE_URL}api/repository`, {
              headers: { 'dir' : '', 'username': this.$route.params.targetName }, 
            })
            .then( res => {
              let folders = res.data.pastas;
              this.treeData.push( { text: folders } )
              console.log(this.treeData)  
            })
         },
      
      }, 

      created(){
        this.getCourses();
        this.getRepositorys();
      },

  }
  
</script>
