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
    <item
      class="item"
      :model="treeData">
      <button>asa</button>

  </item>
  </div>

  </div>
</template>


<script>
import axios from "axios";
import { url } from "../../../../../_mixins/url";
import item from "./Item";

export default {
  name: "Directories",

  components: { item },

  mixins: [url],

  data() {
    return {
      dir: null,
      cursos: null,

      treeData: {
        name: "Repositórios",
        children: []
      }
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
    getRepositorys() {
      axios
        .get(`${this.BASE_URL}api/repository`, {
          headers: { dir: "", username: this.$route.params.targetName }
        })
        .then(res => {
          let folders = res.data.pastas;

          folders.forEach(element => {
            this.treeData.children.push({
              name: element.dir,
              children: []
            });
            console.log(this.treeData.name);
          });

          console.log("fora do for");
          console.log(this.treeData);
        });
    }
  },

  addChild() {},

  created() {
    this.getCourses();
    this.getRepositorys();
  }
};
</script>



