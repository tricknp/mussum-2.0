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
          @itemClicked="getRepositorys">
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
    getRepositorys(arrayRaiz, dire) {
      console.log('get repositorys');
      console.log(arrayRaiz);
      console.log(dire);

      axios
        .get(`${this.BASE_URL}api/repository`, {
          headers: { dir: dire, username: this.$route.params.targetName }
        })
        .then(res => {
          let folders = res.data.pastas;

          folders.forEach(element => {
            arrayRaiz.push({
              name: element.dir,
              children: []
            });
          });
          console.log(arrayRaiz);
        });
    }
  },

  addChild() {},

  created() {
    this.getCourses();
    this.getRepositorys(this.treeData, "");
  }
};
</script>



