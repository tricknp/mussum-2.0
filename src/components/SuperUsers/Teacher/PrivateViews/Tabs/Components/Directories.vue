<template>
  <div>
    <div class="div-select-course">
      <select v-model="dir" class="select-course">
        <option v-for="curso in cursos"
                :key="curso.id"
                :value="curso.titulo">
                {{ curso.titulo }}
        </option>
      </select>

      <button @click="addCourse"> 
        <IconAdd /> 
      </button>
    </div>

     <div class="tree">
      <tree v-for="(tree, i) in treeData"
            :key="i"
            class="item"
            :model="tree"
       ></tree>
     </div>

    <modal v-if="showModal" @show="show()" id="admin-modal">
      <h1 slot="header">Adicionar</h1>
      <form slot="content" class="form-admin-modal">
        <input type="text" placeholder="diretorio" v-model="child" required>
      </form>
      <div slot="footer">
          <button type="submit" @click.prevent="addChild" >
            Confirmar
          </button>
          <button @click="showModal = false" class="adm-modal-buttons">
              Cancelar
          </button>
      </div>
    </modal>

    <modal v-if="showUpload" @s="showUp()" id="admin-modal">
      <h1 slot="header">Adicionar arquivo</h1>
      <form slot="content" class="form-admin-modal">
        <input type="text" ref="fileName" placeholder="nome do arquivo (com extensão)" disabled>
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        <input type="text" v-model="comment">
      </form>
      <div slot="footer">
           <button @click="showUpload=false">CANCELAR</button>
           <button @click="submitFile()">UPLOAD!</button>
      </div>
    </modal>

  </div>
</template>


<script>
import Vue from "vue";
import axios from "axios";
import fs from "fs";
import { url } from "../../../../../_mixins/url";
import { showModal } from "../../../../../_mixins/showModal";
import IconAdd from "../../../../../_utils/Svgs/IconAdd";
import tree from "../../../../../UIComponents/Tree/Tree";
import Modal from "../../../../../UIComponents/Modal";
const ComponentClass = Vue.extend(tree);
export default {
  name: "Directories",
  components: { tree, IconAdd, Modal },
  mixins: [url, showModal],
  props: {
    selected: {
      default: "Adicionar curso"
    }
  },
  data() {
    return {
      dir: null,
      cursos: null,
      treeData: [],
      child: null,
      showUpload: false,
      file: "",
      comment: ''
    };
  },
  created() {
    this.getCourses();
    this.startRepository();
    this.$bus.$on("itemClicked", (div, dire) => {
      console.log(dire);
      this.getRepositorys(div, dire);
    });
  },
  mounted() {
    this.$bus.$on("addChild", dirs => {
      this.dir = dirs;
      this.showModal = true;
    }),
      this.$bus.$on("handleUpload", dirs => {
        this.dir = dirs;
        this.showUpload = true;
      }),
      this.$bus.$on("download", (dir, fileName) => {
        axios
          .get(`${this.BASE_URL}api/download`, {
            headers: {
              dir: dir,
              professor: this.$route.params.targetName,
              fileName: fileName
            },
            responseType: "blob"
          })
          .then(res => {
            console.log("Fazendo download file: " + fileName);
            console.log("From directory... " + dir);
            var blob = new Blob([res.data], {
              type: "application/octet-stream"
            });
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = fileName;
            a.click();
            a.remove();
            console.log("download feito.");
          });
      });
  },
  methods: {
    showUp() {
      showUpload = true;
    },
    getdata() {
      this.formated = this.$refs.tree.reformatData();
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.$refs.fileName.value = this.file.name;
      this.$refs.fileName.removeAttribute('disabled');
    },
    submitFile() {
      const formData = new FormData();
      formData.append("files", this.file, this.file.name);
      axios
        .post(this.BASE_URL + "api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            dir: this.dir,
            fileName: this.$refs.fileName.value,
            comment: this.comment
          }
        })
        .then(res => {
          console.log("brilhou");
          console.log(this.$refs.fileName.value);
          this.showUpload = false;
        });
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
          let files = res.data.arquivos;
          console.log("Pastas encontradas em " + dire);
          console.log(folders);
          console.log("Arquivos encontradas em " + dire);
          console.log(files);
          folders.forEach(element => {
            this.createTreeElement(div, element, true);
          });
          files.forEach(element => {
            this.createTreeElement(div, element, false);
          });
        });
    },
    createTreeElement(div, element, isFolder) {
      console.log("Criando elemento tree > " + element.nome);
      let instance = new ComponentClass({
        propsData: {
          model: { name: element.nome, dir: element.dir, isFolder: isFolder }
        }
      });
      instance.$mount();
      div.appendChild(instance.$el);
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
            this.treeData.push({
              name: element.nome,
              dir: element.dir,
              isFolder: true
            });
          });
        });
    },
    addChild() {
      axios
        .post(`${this.BASE_URL}api/repository`, this.dir, {
          headers: { dir: `${this.dir}/${this.child}` }
        })
        .then(res => {
          this.treeData.name = this.dir;
          console.log(
            "Curso adicionado com sucesso " + `${this.dir}/${this.child}`
          );
          this.showModal = false;
        });
    }
  }
};
</script>


<style>
.div-select-course {
  display: flex;
}
</style>