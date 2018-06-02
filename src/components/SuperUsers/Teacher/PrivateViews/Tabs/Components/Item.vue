<template>
  <li class="tree-item">

    <div @click="toggle(), itemClicked(model.name)" class="ss">
      <span v-if="isFolder">
        <span v-if="open === false"> <IconArrowRight /> </span>
        <span v-else> <IconArrowDown /> </span>
      </span>

      {{ model.name }}

      <div class="tree-buttons">
        <button> <IconEdit   /> </button>
        <button> <IconDelete /> </button>
        <button> <IconUpload /> </button>
        <button> <IconAdd    /> </button>
      </div>
    </div>

    <ul v-show="open" v-if="isFolder" :id="model.name" :ref="model.name">
      <!-- <li class="add-tree" @click="addChild"></li> -->
    </ul>

  </li>
</template>

<script>
import  IconArrowRight  from   '../../../../../_utils/Svgs/IconArrowRight'
import  IconArrowDown   from   '../../../../../_utils/Svgs/IconArrowDown'
import  IconEdit        from   '../../../../../_utils/Svgs/IconEdit'
import  IconDelete      from   '../../../../../_utils/Svgs/IconDelete'
import  IconUpload      from   '../../../../../_utils/Svgs/IconUpload'
import  IconAdd         from   '../../../../../_utils/Svgs/IconAdd'

export default {
  components: 
{ 
    IconArrowRight,
    IconArrowDown,
    IconEdit, 
    IconDelete,
    IconUpload, 
    IconAdd, 
  },
  
  props: {
    model: Object
  },
  
  data: function() {
    return {
      open: false
    };
  },
  computed: {
    isFolder: function() {
      //return this.model.children && this.model.children.length;
      return true;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    itemClicked(dir) {
      console.log("clicked");
      console.log(this.$refs[dir]);
      this.$bus.$emit("itemClicked", this.$refs[dir], dir);
    },
    addChild() {}
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

.ss:hover{
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
