<template>
    <Wikis> 
      <div slot="header">
         <h1>Wikis</h1>
         <div class="btn-teacher-aside">
            <CreateWiki />
            <DeleteWiki />
            <EditWiki />
         </div>
      </div>
      <div slot="content">
        <div v-for="wiki in wikis" :key="wiki.titulo" class="box-admin-content">
            <label>
              <input type="radio" name="name" @change="select(wiki)">
              <span for="name"> {{ wiki.titulo }} </span>
            </label>
          </div>
      </div>

    </Wikis>    
</template>

<script>
import Wikis          from  '../../../../../FixedComponents/Aside/Components/Wikis';
import CreateWiki     from  '../../../../Admin/Boxes/Wikis/Components/Create'
import DeleteWiki     from  '../../../../Admin/Boxes/Wikis/Components/Delete'
import EditWiki       from  '../../../../Admin/Boxes/Wikis/Components/Edit'
import { url }        from  '../../../../../_mixins/url.js'
import { initialize } from  '../../../../../_mixins/boxInitialize.js'

export default {

  components:
  {
      Wikis,
      CreateWiki,
      DeleteWiki,
      EditWiki
  },

    mixins: [ url, initialize ],

  data() {
    return {
      wikis: null,
    }
  },
  
  methods:{
    postData(){
      this.route = 'api/wikis';
    }
  }    


}
</script>
