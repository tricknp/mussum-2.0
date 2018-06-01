<template>
  <li>

    <div @click="toggle(), itemClicked(model.name)"> {{ model.name }}

      <div class="all">
        <button>edit</button>
        <button>delete</button>
      </div>

      <span v-if="isFolder">[ {{ open ? '-' : '+' }} ]</span>

    </div>

    <ul v-show="open" v-if="isFolder" :id="model.name" :ref="model.name">

      <li class="add" @click="addChild">
        <button>novo</button>
      </li>

    </ul>
  </li>
</template>

<script>
export default {
  name: "item",

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
};
</script>

<style>
.all {
  display: inline-block;
}

.item {
  cursor: pointer;
}

ul {
  padding-left: 2em;
  line-height: 1.5em;
}
</style>
