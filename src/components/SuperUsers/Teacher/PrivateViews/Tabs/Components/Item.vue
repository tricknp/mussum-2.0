<template>
  <li>
    <div @click="toggle, itemClicked(model.children, model.name)">
      {{ model.name }}
      <span v-if="isFolder">[ {{ open ? '-' : '+' }} ]</span>
    </div>

    <ul v-show="open" v-if="isFolder">
      <div v-for="(child, index) in model.children" :key="index" >
        <div class="all">
            <button>edit</button>
            <button>delete</button>
          <item
            class="item"
            :model="model"

            >
          </item>
        </div>
      </div>
        <li class="add" @click="addChild">
            <button>novo</button>
        </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "item",
  props: [
    'model',
  ],
  data: function() {
    return {
      open: false
    };
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },

    itemClicked(array, dir) {
      console.log('itemClicked');

      this.$emit('itemClicked', array, dir)
    },

    addChild: () => {
      this.model.children.push({
        name: "blalbalblalblalbal"
      });
    }
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
