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

   <div class="tree">
    <item v-for="(tree, i) in treeData"
          :key="i"
          class="item"
          :model="tree"
          >
  </item>
  </div>

  </div>
</template>


<script>
import axios from "axios";
import { url } from "../../../../../_mixins/url";
import item from "./Item";
import Vue from "vue";

const ComponentClass = Vue.extend(item);

export default {
  name: "Directories",
  
  components: { item },
  
  mixins: [url],
  
  data() {
    return {
      dir: null,
      cursos: null,
      //components: [],
      treeData: []
    };
  },
  methods: {
    getdata() {
      this.formated = this.$refs.tree.reformatData();
    },
    /*===================================================*
     *          Getting the courses existing.            *
     *                    - // -                         *
     *          Obtendo todos os cursos existentes.      *
     *===================================================*/
    getCourses() {
      axios.get(`${this.BASE_URL}api/cursos`).then(res => {
        this.cursos = res.data;
      });
    },
    /*=================================================*
     *      Add a course to teacher repositories       *
     *                     - // -                      *
     *  Adiciona um curso ao repositório do professor  *
     *=================================================*/
    addCourse() {
      axios
        .post(`${this.BASE_URL}api/repository`, this.dir, {
          headers: { dir: this.dir }
        })
        .then(res => {
          this.treeData.name = this.dir;
          console.log("Curso adicionado com sucesso " + this.dir);
        })
        .catch(error => console.log("error -> " + error));
    },
    /*========================================================================================*
     *    Getting all repositories from current teacher and adding they in the tree of        *
     * repositories                                                                           *
     *                                    - // -                                              *
     *    Obtem todos os repositórios do professor atual e adicionando-os na árvore dos       *
     * repositórios                                                                           *
     *========================================================================================*/
    getRepositorys(div, dire) {
      console.log("get repositorys from " + dire);
      axios
        .get(`${this.BASE_URL}api/repository`, {
          headers: { dir: dire, username: this.$route.params.targetName }
        })
        .then(res => {
          let folders = res.data.pastas;
          console.log("Pastas encontradas em " + dire);
          console.log(folders);
          folders.forEach(element => {
            console.log("element " + element.dir);
            var instance = new ComponentClass({
              propsData: {
                model: { name: element.dir },
                parent: this.$parent.$children[0]
              }
            });
            //this.components.push(instance);
            instance.$mount();
            div.appendChild(instance.$el);
            //this.$children.push(instance);
            console.log(this.$children);
          });
        });
    },
    //RUNS ONE TIME TO GET CURSES FOLDERS
    startRepository() {
      axios
        .get(`${this.BASE_URL}api/repository`, {
          headers: { dir: "", username: this.$route.params.targetName }
        })
        .then(res => {
          let folders = res.data.pastas;
          folders.forEach(element => {
            this.treeData.push({ name: element.dir });
          });
        });
    }
  },
  created() {
    this.getCourses();
    this.startRepository();
    this.$bus.$on("itemClicked", (div, dire) => {
      console.log(dire);
      this.getRepositorys(div, dire);
    });
  }
};
</script>