
<template>
  <div class="directories">
    <vue-progress-bar></vue-progress-bar>

    <div v-if="this.$bus.isOwner" class="div-select-course">
      <select v-model="dir" class="select-course">
        <option v-for="curso in cursos"
                :key="curso.id"
                selected="option == 'tes'"
                :value="$route.params.targetName+'/'+curso.titulo">
                {{ curso.titulo }}
        </option>
        <option :value="'novo'">Novo Curso</option>
      </select>

      <button @click="addCourse()">
        <IconAdd />
      </button>
    </div>

    <modal v-if="showOtherCourse" @show="show" id="modal-container">
      <h1 slot="header">Novo Curso</h1>
      <form slot="content" class="form-modal">
        <input type="text" v-model="otherCourse">
      </form>
      <div slot="footer" class="div-btn-modal">
        <button @click="addNewCourse" class="modal-buttons">Novo</button>
        <button @click="showModal == false" class="modal-buttons">CANCELAR</button>
      </div>
    </modal>

     <div class="tree">
      <tree v-for="(tree, i) in treeData"
            :key="i"
            class="item"
            :model="tree"
       ></tree>
     </div>

    <modal v-if="showModal" @show="show()" id="modal-container">
      <h1 slot="header">Novo Pasta</h1>
      <form slot="content" class="form-modal">
        <input type="text" placeholder="Nova Pasta" v-model="child" required>
        <div class="radios-modal">
            <input type="radio" v-model="visibility" :value="true"  name="visibility"> Publico
            <input type="radio" v-model="visibility" :value="false" name="visibility"> Oculto
        </div>
      </form>
      <div slot="footer" class="div-btn-modal">
          <button type="submit" @click.prevent="addChild"  class="modal-buttons">
            Confirmar
          </button>
          <button @click="showModal = false" class="modal-buttons">
              Cancelar
          </button>
      </div>
    </modal>

    <modal v-if="showUpload" @s="showUp()" id="modal-container">
      <h1 slot="header">Adicionar arquivo</h1>

      <form slot="content" class="form-modal">
        <input type="text" ref="fileName" placeholder="Nome do arquivo/link">
        <input type="text" ref="comment" placeholder="Escreva um comentário (FEED)">
        <input v-if="!isLink" type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        <input v-if="isLink" type="text" ref="link" placeholder="URL">
        <div class="radios-modal">
          <input type="radio" v-model="isLink" :value="true"  name="isLink"> Link
          <input type="radio" v-model="isLink" :value="false" name="isLink"> Arquivo
        </div>
        <div class="radios-modal">
            <input type="radio" v-model="visibility" :value="true"  name="visibility"> Publico
            <input type="radio" v-model="visibility" :value="false" name="visibility"> Oculto
        </div>
      </form>

      <div slot="footer" class="div-btn-modal d">
        <button @click="submitFile()" class="modal-buttons">Salvar</button>
           <button @click="showUpload = false" class="modal-buttons">Cancelar</button>
      </div>
    </modal>

    <modal v-if="showEdit" @showEd="showEd()" id="modal-container">
      <h1 v-if="edit.comment != undefined" slot="header">Editar info do arquivo</h1>
      <h1 v-if="edit.comment == undefined" slot="header">Renomear pasta</h1>
      <form slot="content" class="form-modal">
        <input type="text" v-model="edit.name" ref="editName" placeholder="Nome">
        <input v-if="edit.link != undefined" v-model="edit.link" type="text" ref="editLink" placeholder="URL">
        <input v-if="edit.comment != undefined" v-model="edit.comment" type="text" ref="editComment" placeholder="Novo comentário (FEED)">
      </form>
      <div slot="footer" class="div-btn-modal">
           <button v-if="edit.comment != undefined" @click="editFile" class="modal-buttons">Salvar</button>
           <button v-if="edit.comment == undefined" @click="editFolder" class="modal-buttons">Salvar</button>
           <button @click="showEdit = false" class="modal-buttons">Cancelar</button>
      </div>
    </modal>

    <modal v-if="notifyModal" id="modal-container">
      <h1 slot="header">Coloque seu email para receber notificações quando for adicionado arquivos a esta pasta</h1>
      <form slot="content" class="form-modal">
        <input type="email" ref="email" placeholder="example@example.com">
      </form>
      <div slot="footer" class="div-btn-modal">
           <button @click="notifyModal=false" class="modal-buttons">Cancelar</button>
           <button @click="notify" class="modal-buttons">Salvar</button>
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
      dir: "Novo Curso",
      cursos: null,
      treeData: [],
      child: null,
      showUpload: false,
      notifyModal: false,
      notifyData: {},
      showEdit: false,
      edit: null,
      file: "",
      comment: "",
      showOtherCourse: false,
      visibility: true,
      isLink: false
    };
  },
  beforeDestroy() {
    this.$bus.$off("notify");
    this.$bus.$off("editFile");
    this.$bus.$off("editFolder");
    this.$bus.$off("selectProfessor");
    this.$bus.$off("itemClicked");
    this.$bus.$off("handleUpload");
    this.$bus.$off("download");
    this.$bus.$off("removeDir");
    this.$bus.$off("removeArq");
    this.$bus.$off("newChild");
  },
  created() {
    this.getCourses();
    this.resetRepository();
    this.$bus.$on("notify", data => {
      this.notifyData = data;
      this.notifyModal = true;
    }),
      this.$bus.$on("editFile", data => {
        this.edit = data;
        this.showEdit = true;
      }),
      this.$bus.$on("editFolder", data => {
        this.edit = data;
        this.showEdit = true;
      }),
      this.$bus.$on("selectProfessor", username => {
        this.resetRepository();
      }),
      this.$bus.$on("itemClicked", (div, dire) => {
        //this.getRepositorys(div, dire);
      }),
      this.$bus.$on("addChild", (dir, name) => {
        this.dir = dir + "/" + name;
        this.showModal = true;
      }),
      this.$bus.$on("handleUpload", dirs => {
        this.dir = dirs;
        this.showUpload = true;
      }),
      this.$bus.$on("download", (dir, fileName) => {
        this.$Progress.start();
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
            let blob = new Blob([res.data], {
              type: "application/octet-stream"
            });
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = fileName;
            if (fileName.endsWith(".pdf")) {
              let pdf = new Blob([res.data], {
                type: "application/pdf"
              });
              let pdfURL = window.URL.createObjectURL(pdf);
              window.open(pdfURL);
            } else {
              a.click();
            }
            a.remove();
            this.$Progress.finish();
            console.log("download feito.");
          })
          .catch(err => {
            this.$Progress.fail();
          });
      }),
      this.$bus.$on("removeDir", (dir, name) => {
        axios
          .delete(`${this.BASE_URL}api/repository`, {
            headers: {
              dir: dir,
              name: name
            }
          })
          .then(res => {
            if (dir.split("/").length < 2) {
              this.resetRepository();
            } else {
              this.$bus.$emit(
                "refresh",
                this.getFatherFromChild(dir).dir,
                this.getFatherFromChild(dir).name
              );
            }
          });
      }),
      this.$bus.$on("removeArq", (dir, name) => {
        axios
          .delete(`${this.BASE_URL}api/upload`, {
            headers: {
              dir: dir,
              name: name
            }
          })
          .then(res => {
            this.$bus.$emit(
              "refresh",
              this.getFatherFromChild(dir).dir,
              this.getFatherFromChild(dir).name
            );
          });
      }),
      this.$bus.$on("newChild", (div, ele, isFolder) => {
        this.createTreeElement(div, ele, isFolder);
      });
  },
  methods: {
    addNewCourse() {
      this.dir = this.otherCourse;
    },

    showUp() {
      showUpload = true;
    },

    showEd() {
      showEdit = true;
    },

    getdata() {
      this.formated = this.$refs.tree.reformatData();
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.$refs.fileName.value = this.file.name;
      //this.$refs.fileName.removeAttribute("disabled");
    },
    submitFile() {
      this.$Progress.start();
      const formData = new FormData();
      if (!this.isLink) {
        formData.append("files", this.file, this.file.name);
      }
      axios
        .post(this.BASE_URL + "api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            dir: this.dir,
            fileName: this.$refs.fileName.value,
            link: this.$refs.link ? this.$refs.link.value : "",
            comment: this.$refs.comment.value,
            visible: this.visibility
          }
        })
        .then(res => {
          this.showUpload = false;
          this.$Progress.finish();
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
     *  Adiciona um curso ao repositÃ³rio do professor  *
     *=================================================*/
    addCourse() {
      if (this.dir == "novo") {
        this.child = this.dir;
        this.dir = this.$route.params.targetName;
        this.showModal = true;
      } else {
        this.child = this.dir;
        this.dir = "";
        this.addChild();
      }
    },
    /*========================================================================================*
     *    Getting all repositories from current teacher and adding they in the tree of        *
     * repositories                                                                           *
     *                                    - // -                                              *
     *    Obtem todos os repositÃ³rios do professor atual e adicionando-os na Ã¡rvore dos       *
     * repositÃ³rios                                                                           *
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
      let instance = new ComponentClass({
        propsData: {
          model: {
            id: element.id,
            name: element.nome,
            dir: element.dir,
            isFolder: isFolder,
            isVisible: element.visivel,
            isLink: element.link ? true : false,
            link: element.link ? element.link : "",
            comment: element.comentario ? element.comentario : "",
            username: this.$route.params.targetName,
            baseUrl: this.BASE_URL
          }
        }
      });
      instance.$mount();
      div.appendChild(instance.$el);
    },

    //RUNS ONE TIME TO GET CURSES FOLDERS
    resetRepository() {
      this.treeData = [];

      this.$bus.dirs = this.$route.params.dir;

      axios
        .get(`${this.BASE_URL}api/repository`, {
          headers: {
            dir: this.$route.params.targetName,
            username: this.$route.params.targetName
          }
        })
        .then(res => {
          let folders = res.data.pastas;
          folders.forEach(element => {
            this.treeData.push({
              id: element.id,
              name: element.nome,
              dir: element.dir,
              isFolder: true,
              isVisible: element.visivel,
              link: element.link ? element.link : "",
              comment: element.comentario ? element.comentario : "",
              username: this.$route.params.targetName,
              baseUrl: this.BASE_URL
            });
          });
        });
    },
    addChild() {
      axios
        .post(`${this.BASE_URL}api/repository`, this.dir, {
          headers: {
            dir: this.dir,
            name: this.child,
            visible: this.visibility
          }
        })
        .then(res => {
          //this.treeData.name = this.dir;
          console.log(
            "Curso adicionado com sucesso " + `${this.dir}/${this.child}`
          );
          this.resetRepository();
          this.child = "Nova Pasta";
          this.showModal = false;
        });
    },
    getFatherFromChild(dir) {
      let fatherName = dir.split("/").pop();
      let fatherDir = dir.split("/");
      let indexOfName = fatherDir.length;
      fatherDir[indexOfName - 1] = "";
      fatherDir = fatherDir.join("/");

      return {
        dir: fatherDir,
        name: fatherName
      };
    },
    editFile() {
      var data = {
        name: this.$refs.editName.value,
        comment: this.$refs.editComment.value
      };
      if (this.edit.link) {
        data.link = this.$refs.editLink.value;
      }
      axios
        .put(`${this.BASE_URL}api/upload/${this.edit.id}`, data)
        .then(res => {
          this.showEdit = false;
          this.edit = {};
          this.resetRepository();
        });
    },
    editFolder() {
      axios

        .put(
          `${this.BASE_URL}api/repository/${this.edit.id}`,

          {
            name: this.$refs.editName.value
            //link: this.$refs.editLink.value
          }
        )
        .then(res => {
          this.showEdit = false;
          this.edit = {};
          this.resetRepository();
        });
    },
    closeEditModal() {
      this.edit = {};
    },
    notify() {
      axios
        .post(
          `${this.BASE_URL}api/followers`,
          {
            username: this.notifyData.username,
            dir: this.notifyData.dir,
            email: this.$refs.email.value
          },
          {}
        )
        .then(res => {
          this.notifyModal = false;
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
