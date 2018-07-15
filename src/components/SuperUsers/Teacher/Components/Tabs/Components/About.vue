<template>
  <div class="about-container">
    <div class="about-content">

      <div class="about-content-item">
        <div class="div-edit-item">
          <h1 class="about-title"> Resumo </h1>
          <div v-if="isOwner">
              <button v-if="!resumoFocus" @click="editResume"> <IconEdit /> </button>
              <button v-else @click="handleEdit" > <IconOk /> </button>
          </div>
        </div>
          <textarea v-model="resumo" :disabled="disabled" ref="resumo"  class="textarea-about"></textarea>
      </div>

      <div class="about-content-item">
        <div class="div-edit-item">
          <h1 class="about-title"> Formação Academica </h1>
          <div v-if="isOwner">
              <button v-if="!formacaoFocus" @click="editFormacao"> <IconEdit /> </button>
              <button v-else @click="handleEdit" > <IconOk /> </button>
          </div>
        </div>
        <textarea v-model="formacao" :disabled="disabled" ref="formacao"  class="textarea-about"></textarea>
      </div>

      <div class="about-content-item">
        <h1 class="about-title"> Contato </h1>
        <div></div>
      </div>
    </div>

  </div>
</template>


<script>
import axios from "axios";
import { url } from "../../../../../_mixins/url";
import { edit } from "../../../../../_mixins/edit";
import IconEdit from "../../../../../_utils/Svgs/IconEdit";
import IconOk from "../../../../../_utils/Svgs/IconOk";

export default {
  components: { IconEdit, IconOk },

  mixins: [url, edit],

  data() {
    return {
      professor: [],
      username: this.$route.params.targetName,
      formacao: '',
      resumo: '',
      resumoFocus: false,
      formacaoFocus: false,
      disabled: true,
      social: '',
      id: ""
    };
  },

  computed: {
    isOwner: function() {
      if (this.username == localStorage.username) {
        return true;
      }
    }
  },

  created() {
    this.init();
    this.$bus.$on("selectProfessor", username => {
      this.refresh(username);
    });
  },

  methods: {
    refresh(username) {
      this.username = username;
      let t = this.professor.find(x => x.username === username);
      this.id = t.id;
      this.resumo = t.resumo;
      this.formacao = t.formacao
    },

    init() {
      axios.get(`${this.BASE_URL}api/professores`).then(res => {
        this.professor = res.data;
        this.refresh(this.username);
      axios.get(`${this.BASE_URL}api/social/${this.username}`).then( res => {
        console.log(res.data)
      })
      });
    },

    editResume(){
      this.$refs.resumo.disabled = false;
      this.$refs.resumo.focus();
      this.resumoFocus = true;
    },

    editFormacao(){
      this.$refs.formacao.disabled = false;
      this.$refs.formacao.focus();
      this.formacaoFocus = true;
    },

    handleEdit() {
      this.resumoFocus = false;
      this.formacaoFocus = false;
      this.$refs.resumo.disabled = true;
      this.$refs.formacao.disabled = true;

      let datas = {
        id: this.id,
        resumo: this.resumo,
        formacao: this.formacao
      };

      axios.put(`${this.BASE_URL}api/professores/${datas.id}`, {}, datas).then(res => {

          this.refresh(this.username);
        });
    }
  }
};
</script>


<style>
.about-container
{
  background: white;
  min-height: 25em;
  max-width: 100%;
}

.about-content
{
  margin: 0 2%;
}

.about-title
{
  font-size: 1.3em;
}

.textarea-about
{
  min-width: 100%;
  max-width: 100%;
  background: transparent;
  border: none;
  font-size: 1em;
}

.about-content-item
{
  border-bottom: 1px #ddd solid;
}

.about-content-item:nth-child(3)
{
  border-bottom: none;
}

.social-icons:nth-child(1)
{
  margin-left: 0;
}

.social-icons
{
  cursor: pointer;
  width: 3em;
  margin-left: 1.5%;
}

.social-icons:hover
{
    opacity: .8;
}

.div-edit-item
{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
