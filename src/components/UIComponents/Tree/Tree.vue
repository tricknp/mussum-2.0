<template>
  <li class="tree-item">

    <div @click="toggle(), isFolder ?  itemClicked(model.dir) : null" class="ss">
      <span v-if="isFolder">
        <span v-if="open === false"><IconArrowRight /></span>
        <span v-else><IconArrowDown /></span>
      </span>

      {{ model.name }}

      <div class="tree-buttons">
        <button v-if="isVisible  && !isVisibleProc" @click="toggleVisible"> 
          <IconVisiblePublic />  
        </button>
        
        <button v-if="!isVisible && !isVisibleProc" @click="toggleVisible">
           <IconVisiblePrivate /> 
        </button>
        
        <button v-if="isVisibleProc" @click="toggleVisible"> 
          <img src="../../../../static/loading.gif" class="icon">
        </button>

        <button                  @click="edit"> <IconEdit   /> </button>
        <button                  @click="remove"> <IconDelete /> </button>
        <button v-if="isFolder"  @click="add"> <IconAdd/> </button>
        <button v-if="isFolder"  @click="upload"> <IconUpload/> </button>
        <button v-if="!isFolder" @click="download"> <IconDownload/> </button>
      </div>
    </div>

    <ul v-show="open" v-if="isFolder" :id="model.dir" :ref="model.dir"></ul>
    
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
    IconVisiblePrivate
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
  computed: {
    isFolder: function() {
      //return this.model.children && this.model.children.length;
      return this.model.isFolder;
    },
    isVisible: function() {
      //return this.model.children && this.model.children.length;
      return this.model.isVisible;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    itemClicked(dir) {
      if (!this.clicked) {
        console.log("clicked");
        console.log(this.$refs[dir]);
        this.$bus.$emit(
          "itemClicked",
          this.$refs[dir],
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
        console.log('emit');
        this.$bus.$emit("removeArq", this.model.dir, this.model.name);
      }
    },
    edit() {
      if (this.isFolder) {
        this.$bus.$emit("editDir", this.model.dir, this.model.name);
      } else {
        this.$bus.$emit("editArq", this.model.dir, this.model.name);
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
    }
  }
};
</script>

<style>
.tree-item {
  list-style: none;
  font-size: 1em;
  border-bottom: 1px solid #eee;
  position: relative;
}
.ss:hover {
  background: #eee;
}
.tree-buttons {
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 2em;
  top: 0.5em;
  cursor: pointer;
}
.add-tree {
  color: red;
  text-align: right;
}
.item {
  cursor: pointer;
  padding: 5px;
}
ul {
  padding-left: 2em;
  line-height: 1.5em;
}
</style>
