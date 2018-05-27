<template>
    <Directories> 
      <div slot="header">
         <h1>Diretóris</h1>
         <div class="btn-teacher-aside">
            <CreateDir />
            <DeleteDir />
            <EditDir />
         </div>
      </div>
      <div slot="content">
        <div v-for="diretorio in diretorios" :key="diretorio.titulo" class="box-admin-content">
            <label>
              <input type="radio" name="name" @change="select(diretorio)">
              <span for="name"> {{ diretorio.titulo }} </span>
            </label>
          </div>
      </div>

    </Directories>    
</template>

<script>
import Directories    from  '../../../../../FixedComponents/Aside/Components/Directories';
import CreateDir      from  '../../../../Admin/Boxes/Directories/Components/Create'
import DeleteDir      from  '../../../../Admin/Boxes/Directories/Components/Delete'
import EditDir        from  '../../../../Admin/Boxes/Directories/Components/Edit'
import { url }        from  '../../../../../_mixins/url.js'
import { initialize } from  '../../../../../_mixins/boxInitialize.js'

export default {

  components:
  {
      Directories,
      CreateDir,
      DeleteDir,
      EditDir
  },

    mixins: [ url, initialize ],

  data() {
    return {
      diretorios: null,
    }
  },
  
  methods:{
    postData(){
      this.route = 'api/diretorios';
    }
  }    


}
</script>
