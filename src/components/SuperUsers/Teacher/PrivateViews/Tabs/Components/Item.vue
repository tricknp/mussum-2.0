<template>
  <li>
    <div @click="toggle">
      {{ model.name }}
      <span v-if="isFolder">[ {{ open ? '-' : '+' }} ]</span>
    </div>
    
    <ul v-show="open" v-if="isFolder">
        <div class="all">
            <button>edit</button>
            <button>delete</button>
          <item
            class="item"
            v-for="(model, index) in model.children"
            :key="index"
            :model="model">
          </item>
        </div> 
        <li class="add" @click="addChild">
            <button>novo</button>
        </li>
    </ul>
  </li>
</template>

<script>
export default {
    name: 'item',
    props: {
    model: Object
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },

    addChild: () => {
      this.model.children.push({
        name: 'blalbalblalblalbal'
      })
    }
  }
}
</script>

<style>
.all{
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
