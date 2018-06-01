<template>
  <li class="tree-item">

    <div @click="toggle(), itemClicked(model.name)" class="ss"> 
      <span v-if="isFolder">
        <!-- Arrow right -->       
        <span v-if="open === false">
          <svg class="icon" enable-background="new 0 0 129 129" version="1.1" viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
            <path d="m40.4 121.3c-0.8 0.8-1.8 1.2-2.9 1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8s4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"/>
          </svg>
        </span>
          <!-- Arrow Down -->
        <span v-else>
          <svg class="icon" enable-background="new 0 0 129 129" version="1.1" viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
            <path d="m121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0s-1.6 4.2 0 5.8l53.9 53.9c0.8 0.8 1.8 1.2 2.9 1.2 1 0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
          </svg>
        </span>
      </span>

      {{ model.name }}
    
      <div class="tree-buttons">
        <!-- edit -->
        <button>
          <svg class="icon" enable-background="new 0 0 528.899 528.899" version="1.1" viewBox="0 0 528.899 528.899" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <path d="m328.88 89.125l107.59 107.59-272.34 272.34-107.53-107.59 272.28-272.34zm189.23-25.948l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259 0l-45.961 45.961 107.59 107.59 53.611-53.611c14.382-14.383 14.382-37.577 0-51.959zm-517.81 449.51c-1.958 8.812 5.998 16.708 14.811 14.565l119.89-29.069-107.53-107.59-27.173 122.09z"/>
          </svg>
        </button>
        <!-- Delete -->
        <button>
          <svg class="icon" enable-background="new 0 0 348.333 348.334" version="1.1" viewBox="0 0 348.333 348.334" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <path d="m336.56 68.611l-105.54 105.55 105.54 105.55c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769l-105.57-105.56-105.56 105.56c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.55-105.55-105.55c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.56 105.55 105.56-105.55c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145 6e-3 56.844z"/>
          </svg>
        </button>
        <!-- upload -->
        <button>
          <svg class="icon" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
		        <polygon points="422 302 422 422 90 422 90 302 0 302 0 512 512 512 512 302"/>
		        <polygon points="256 0 166 135 226 135 226 345 286 345 286 135 346 135"/>
          </svg>
        </button>
        <!-- New Repository -->
        <button>
          <svg class="icon" enable-background="new 0 0 42 42" version="1.1" viewBox="0 0 42 42" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16v11.059  C16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"/>
          </svg>
        </button>
      </div>
    </div>

    <ul v-show="open" v-if="isFolder" :id="model.name" :ref="model.name">
      <!-- <li class="add-tree" @click="addChild"></li> -->
    </ul> 

  </li>
</template>

<script>
export default {
  
  name: "item",
  
  props: {
    model: Object | Array
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
        if (this.open) {
          this.open = false;
        } else {
          this.open = true;
        }
      }
    },
  
    itemClicked(dir) {
      console.log('clicked');
      console.log(this.$refs[dir]);
        this.$emit("itemClicked", this.$refs[dir], dir);
    },
  
    addChild() {}
  }

}
</script>

<style>
button{
  background: transparent;
  border: none;
}

.tree-item
{
  list-style: none;
  font-size: 1em;
  border-bottom: 1px solid #eee;
  position: relative;
}

.ss:hover{
  padding: .3em;
  background: #eee;
}

.tree-buttons {
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 2em;
  top: .5em;
  cursor: pointer;
}

.add-tree{
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