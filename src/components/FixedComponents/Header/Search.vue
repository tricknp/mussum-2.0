<template>
    <div class="search-container">
      <div class="search">
          <input type="text" class="input-search" ref="search" v-model="data" placeholder="Pesquisar...">
          <button @click="focus" class="btn-header-search">
              <IconSearch class="icon-search" />
          </button>
      </div>
      <div class="search-response" v-if="data.length > 0">
        <div class="search-content">

          <span class="search-type" v-if="empty"> Sem resultadis... </span>

          <div v-else v-for="(res, index) in response" :key="index">
            <div v-if="res.type == 'folder'" class="search-type">
              <router-link :to="{ path: `professor/${res.username}/diretorios/${res.dir}` }" class="search-type-link">
                <IconFolder />
                <div class="text-search-box">
                  <h1 class="search-box-title"> {{ res.name }} </h1>
                  <h4 class="search-box-dir"> {{ res.dir }} </h4>
                </div>
              </router-link>
            </div>

            <div v-if="res.type == 'file'" class="search-type">
              <router-link :to="{ path: `professor/${res.username}/diretorios/${res.dir}`}" class="search-type-link">
                <IconFile />
                <div class="text-search-box">
                  <h1 class="search-box-title"> {{ res.name }} </h1>
                  <h4 class="search-box-dir"> {{ res.dir }} </h4>
                </div>
              </router-link>
            </div>

          </div>

        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import { url } from '../../_mixins/url'
import IconSearch from '../../_utils/Svgs/IconSearch'
import IconFile from '../../_utils/Svgs/IconFile'
import IconFolder from '../../_utils/Svgs/IconFolder'

export default {

  components: { IconSearch, IconFile, IconFolder },

  mixins: [ url ],

  data(){
    return{
      response: '',
      data: '',
      empty: true,
      teacher: ''
    }
  },

  updated(){
    this.search()
  },

  methods:{
    focus(){
        if (this.$refs.search.value.length <= 0) {
          this.$refs.search.focus();
        }
      },

      search(){
        axios.get(`${this.BASE_URL}api/search`, {
          headers: { 'txt': this.data  }
        }).then( res => {

          this.response = ''

          if (res.data != null && res.data != '') {
            this.empty = false;
            this.response = res.data;
          }else{
            this.empty = true;
          }
        })
      },
  },

}
</script>
