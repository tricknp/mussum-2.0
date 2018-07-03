<template>
  <li class="tree-item">
    <div @click="toggle(), isFolder ?  itemClicked(model.dir) : null" class="ss">
      <InteligentIcon class="inteligent-icon" :model="{extension: model.name}" ></InteligentIcon>

      <span v-if="isFolder">
        <span   v-if="open === false"> <IconArrowRight /> </span>
        <span   v-else>                <IconArrowDown  /> </span>

      </span>

      <a v-if="model.link" :href="model.link" target="_blank" class="link" >{{ model.name.substr(0, model.name.lastIndexOf('.')) || model.name}}</a>
      {{ model.link ? null : model.name.substr(0, model.name.lastIndexOf('.')) || model.name  }}

      <div class="tree-buttons">
        <button v-if="isVisible  && !isVisibleProc && this.$bus.isOwner" @click="toggleVisible">
          <IconVisiblePublic />
        </button>

        <button v-if="!isVisible && !isVisibleProc && this.$bus.isOwner" @click="toggleVisible">
           <IconVisiblePrivate />
        </button>

        <button v-if="isVisibleProc" @click="toggleVisible">
          <img src="../../../../static/loading.gif" class="icon">
        </button>

        <button v-if="this.$bus.isOwner"              @click="edit">     <IconEdit   />  </button>
        <button v-if="this.$bus.isOwner"              @click="remove">   <IconDelete />  </button>
        <button v-if="isFolder && this.$bus.isOwner"  @click="add">      <IconAdd/>      </button>
        <button v-if="isFolder && this.$bus.isOwner"  @click="upload">   <IconUpload/>   </button>
        <button v-if="!isFolder && !isLink"           @click="download"> <IconDownload/> </button>
      </div>
    </div>

    <ul v-show="open" v-if="isFolder" :id="model.dir +'/'+ model.name" :ref="'li'" class="tree-ul"></ul>
    <button v-if="isFolder" @click="notifyMe">    **   </button>

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
  created() {
    this.$bus.$on("refresh", (dir, name) => {
      console.log("refreshDir: " + dir);
      console.log("refreshName: " + name);
      console.log("refreshDir this: " + this.model.dir);
      console.log("refreshName this: " + this.model.name);
      console.log("-------------------------");

      if (dir == this.model.dir + "/" && name == this.model.name) {
        console.log("REFRESH called at $on refresh" + dir + name);
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
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        if (!this.open) {
          this.refreshChild();
          console.log("refresh toggle");
        }
        this.open = !this.open;
      }
    },
    itemClicked(dir) {
      if (!this.clicked) {
        console.log("clicked");
        console.log(this.$refs.li);
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
        console.log("emit");
        this.$bus.$emit("removeArq", this.model.dir, this.model.name);
      }
    },
    edit() {
      if (this.isFolder) {
        this.$bus.$emit("editFolder", {
          id: this.model.id,
          name: this.model.name
        });
      } else {
        console.log("COMMENTTTTTTTTTTTTTTTTTTTT");
        console.log(this.model.comment);

        this.$bus.$emit("editFile", {
          id: this.model.id,
          name: this.model.name,
          comment: this.model.comment,
          link: this.model.link
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
          console.log("TOGGLE");
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
          console.log("REFRESHHHHH");
          console.log(res.data);

          let folders = res.data.pastas;
          console.log("refreshChild folders");
          console.log(folders);

          let files = res.data.arquivos;
          console.log("refreshChild files");
          console.log(files);

          folders.forEach(element => {
            console.log("EMIT newChild");
            this.$bus.$emit("newChild", ele, element, true);
            //this.createTreeElement(ele, element, true);
          });
          files.forEach(element => {
            console.log("EMIT newChild");
            this.$bus.$emit("newChild", ele, element, false);
            //this.createTreeElement(ele, element, false);
          });

          //this.isVisibleProc = false;
        });
    },
    notifyMe() {
      this.$bus.$emit("notify", {
          username: this.model.username,
          dir: this.model.dir+'/'+this.model.name
        });
    }
  }
};
</script>
