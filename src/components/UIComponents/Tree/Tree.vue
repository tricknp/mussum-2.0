<template>
  <li class="tree-item">
    <div  class="ss">
      <InteligentIcon class="inteligent-icon" :model="{extension: model.name}" ></InteligentIcon>


      <div @click="toggle(), isFolder ?  itemClicked(model.dir) : null" class="tree-name">
         <span v-if="isFolder">
           <span   v-if="open === false"> <IconArrowRight /> </span>
           <span   v-else>                <IconArrowDown  /> </span>
         </span>

         <a v-if="model.link" :href="model.link" target="_blank" class="link" >
           {{ model.name.substr(0, model.name.lastIndexOf('.')) || model.name}}
         </a>
        {{ model.link ? null : model.name.substr(0, model.name.lastIndexOf('.')) || model.name  }}
      </div>


      <div class="tree-buttons">
        <button v-if="isVisible  && !isVisibleProc && this.$bus.isOwner" @click="toggleVisible" v-tooltip="'Ocultar'">
          <IconVisiblePublic />
        </button>

        <button v-if="!isVisible && !isVisibleProc && this.$bus.isOwner" @click="toggleVisible" v-tooltip="'Tornar Visivel'">
           <IconVisiblePrivate />
        </button>

        <button v-if="isVisibleProc" @click="toggleVisible">
          <img src="../../../../static/loading.gif" class="icon">
        </button>

        <button v-if="this.$bus.isOwner" @click="edit" v-tooltip="'Editar'" >
          <IconEdit   />
        </button>

        <button v-if="this.$bus.isOwner" @click="remove" v-tooltip="'Remover'">
          <IconDelete />
        </button>

        <button v-if="isFolder && this.$bus.isOwner" @click="add" v-tooltip="'Nova Pasta'">
          <IconAdd/>
        </button>

        <button v-if="isFolder && this.$bus.isOwner" @click="upload" v-tooltip="'Upload'">
          <IconUpload/>
        </button>

        <button v-if="isOpenable" @click="openFile" v-tooltip="'Abrir no navegador'">
          <IconOpenFile />
        </button>

        <button v-if="!isFolder && !isLink" @click="download" v-tooltip="'Download'">
          <IconDownload/>
        </button>

        <button v-if="isFolder" @click="notifyMe" v-tooltip="'Mantenha-me atualizado'">
          <IconNotifyOff />
        </button>


      </div>
    </div>

    <ul v-show="open" v-if="isFolder" :id="model.dir +'/'+ model.name" :ref="'li'" class="tree-ul"></ul>

  </li>
</template>

<script>
import Modal from "../Modal";
import axios from "axios";
import { showModal } from "../../_mixins/showModal";
import IconArrowRight from "../../_utils/Svgs/IconArrowRight";
import IconArrowDown from "../../_utils/Svgs/IconArrowDown";
import IconEdit from "../../_utils/Svgs/IconEdit";
import IconDelete from "../../_utils/Svgs/IconDelete";
import IconUpload from "../../_utils/Svgs/IconUpload";
import IconAdd from "../../_utils/Svgs/IconAdd";
import IconDownload from "../../_utils/Svgs/IconDownload";
import IconVisiblePublic from "../../_utils/Svgs/IconVisiblePublic";
import IconVisiblePrivate from "../../_utils/Svgs/IconVisiblePrivate";
import IconOpenFile from "../../_utils/Svgs/IconOpenFile";
import IconNotifyOff from "../../_utils/Svgs/IconNotifyOff";
import InteligentIcon from "../../_utils/InteligentIcon";

export default {
  components: {
    IconArrowRight,
    IconArrowDown,
    IconEdit,
    IconDelete,
    IconUpload,
    IconAdd,
    IconDownload,
    IconVisiblePublic,
    IconVisiblePrivate,
    IconNotifyOff,
    IconOpenFile,
    InteligentIcon
  },
  props: {
    model: Object
  },
  data() {
    return {
      clicked: false,
      open: false,
      isVisibleProc: false
    };
  },
  beforeDestroy() {
    this.$bus.$off("refresh");
  },
  created() {
    let removeUsernameIndex = this.model.username.length;

    if (this.$bus.dirs) {
      if (
        ("/" + this.$bus.dirs + "/").startsWith(
          this.model.dir.substring(removeUsernameIndex) +
            "/" +
            this.model.name +
            "/"
        )
      ) {
        this.refreshChild();
        this.toggle();
      }
    }
    this.$bus.$on("refresh", (dir, name) => {
      if (dir == this.model.dir + "/" && name == this.model.name) {
        this.refreshChild();
      }
    });
  },
  computed: {
    isFolder: function() {
      //return this.model.children && this.model.children.length;
      return this.model.isFolder;
    },
    isLink: function() {
      //return this.model.children && this.model.children.length;
      return this.model.isLink;
    },
    isVisible: function() {
      //return this.model.children && this.model.children.length;
      return this.model.isVisible;
    },
    isOpenable: function() {
      if (this.model.name.endsWith(".pdf")) {
        return true;
      }
      if (this.model.name.endsWith(".txt")) {
        return true;
      }
      if (this.model.name.endsWith(".sql")) {
        return true;
      }
      if (this.model.name.endsWith(".odt")) {
        return true;
      }
      return false;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        if (!this.open) {
          this.refreshChild();
          let removeUsernameIndex = this.model.username.length;
          let newURL =
            this.$bus.path +
            this.model.dir.substring(removeUsernameIndex) +
            "/" +
            this.model.name;
          window.history.pushState("test", "test", newURL);
        }
        this.open = !this.open;
      }
    },
    itemClicked(dir) {
      if (!this.clicked) {
        this.$bus.$emit(
          "itemClicked",
          this.$refs.li,
          dir + "/" + this.model.name
        );
        this.clicked = true;
      }
    },
    add() {
      this.$bus.$emit("addChild", this.model.dir, this.model.name);
    },
    remove() {
      if (this.isFolder) {
        this.$bus.$emit("removeDir", this.model.dir, this.model.name);
      } else {
        this.$bus.$emit("removeArq", this.model.dir, this.model.name);
      }
    },
    edit() {
      if (this.isFolder) {
        this.$bus.$emit("editFolder", {
          id: this.model.id,
          name: this.model.name
        });
      } else if (this.isLink) {
        this.$bus.$emit("editFile", {
          id: this.model.id,
          name: this.model.name,
          comment: this.model.comment,
          link: this.model.link
        });
      } else {
        this.$bus.$emit("editFile", {
          id: this.model.id,
          name: this.model.name,
          comment: this.model.comment
        });
      }
    },
    upload() {
      this.$bus.$emit("handleUpload", this.model.dir + "/" + this.model.name);
    },
    download() {
      this.$bus.$emit("download", this.model.dir, this.model.name);
    },
    toggleVisible() {
      this.isVisibleProc = true;
      axios
        .post(
          `${this.model.baseUrl}api/togglevisible`,
          {},
          {
            headers: {
              dir: this.model.dir,
              fileName: this.model.name
            }
          }
        )
        .then(res => {
          this.model.isVisible = res.data;
          this.isVisibleProc = false;
        });
    },
    refreshChild() {
      //this.isVisibleProc = true;
      axios
        .get(`${this.model.baseUrl}api/repository`, {
          headers: {
            dir: this.model.dir + "/" + this.model.name,
            username: this.model.username
          }
        })
        .then(res => {
          let ele = this.$refs.li;
          let child = ele.firstChild;
          while (child) {
            this.$refs.li.removeChild(child);
            child = ele.firstChild;
          }
          let folders = res.data.pastas;
          let files = res.data.arquivos;

          folders.forEach(element => {
            this.$bus.$emit("newChild", ele, element, true);
            //this.createTreeElement(ele, element, true);
          });
          files.forEach(element => {
            this.$bus.$emit("newChild", ele, element, false);
            //this.createTreeElement(ele, element, false);
          });

          //this.isVisibleProc = false;
        });
    },
    notifyMe() {
      this.$bus.$emit("notify", {
        username: this.model.username,
        dir: this.model.dir + "/" + this.model.name
      });
    },
    openFile() {
      this.$bus.$emit("openFile", this.model.dir, this.model.name);
    }
  }
};
</script>
