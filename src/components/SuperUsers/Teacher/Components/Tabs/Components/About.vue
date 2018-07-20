<template>
  <div class="about-container">

    <Empty v-if="allEmpty && !isOwner" />

    <div v-else class="about-content">

      <div v-if="!emptyResume && !isOwner || isOwner" class="about-content-item">
        <div class="div-edit-item">
          <h1 class="about-title"> Resumo </h1>
          <div v-if="isOwner">
              <button v-if="!resumoFocus" @click="editResume"> <IconEdit /> </button>
              <button v-else @click="handleEdit" > <IconOk /> </button>
          </div>
        </div>
          <textarea v-model="resumo" :disabled="disabled" ref="resumo"  class="textarea-about"></textarea>
      </div>

      <div v-if="!emptyFormation && !isOwner || isOwner" class="about-content-item">
        <div class="div-edit-item">
          <h1 class="about-title"> Formação Academica </h1>
          <div v-if="isOwner">
              <button v-if="!formacaoFocus" @click="editFormacao"> <IconEdit /> </button>
              <button v-else @click="handleEdit" > <IconOk /> </button>
          </div>
        </div>
        <textarea v-model="formacao" :disabled="disabled" ref="formacao"  class="textarea-about"></textarea>
      </div>

      <div v-if="!emptySocial && !isOwner || isOwner" class="about-content-item">
        <div class="div-edit-item">
          <h1 class="about-title"> Contato </h1>
          <div v-if="isOwner">
              <button @click="show"> <IconEdit /> </button>
          </div>
        </div>

        <div class="about-content-social">
          <div class="about-social-icons">
            <a @click="WppText = true"          v-if="!emptyWPP">   <IconWhatsapp     /> </a>
            <a :href="facebook" target="_blank" v-if="!emptyFB" >   <IconFacebook     /> </a>
            <a :href="twitter"  target="_blank" v-if="!emptyTT">    <IconTwitter      /> </a>
            <a :href="linkedin" target="_blank" v-if="!emptyLKD">   <IconLinkedin     /> </a>
            <a :href="google"   target="_blank" v-if="!emptyGPlus"> <IconGooglePlus   /> </a>
            <a :href="youtube"  target="_blank" v-if="!emptyYT">    <IconYoutube      /> </a>
            <a :href="github"   target="_blank" v-if="!emptyGH">    <IconGithub       /> </a>
            <a :href="site"     target="_blank" v-if="!emptySite">  <IconPersonalSite /> </a>
          </div>
          <div v-if="WppText">{{ whatsapp }}</div>
        </div>
      </div>
    </div>

    <Modal v-if="showModal" @show="show" id="modal-container">
        <h1 slot="header">Midias Sociais</h1>

        <form slot="content" class="form-modal">
            <input type="text" placeholder="Facebook" v-model="facebook">
            <input type="text" placeholder="Whatsapp" v-model="whatsapp">
            <input type="text" placeholder="Github"   v-model="github">
            <input type="text" placeholder="Site"     v-model="site">
            <input type="text" placeholder="Youtube"  v-model="youtube">
            <input type="text" placeholder="Linkedin" v-model="linkedin">
            <input type="text" placeholder="Twitter"  v-model="twitter">
            <input type="text" placeholder="Google+"  v-model="google">
        </form>

        <div slot="footer" class="div-btn-modal">
            <button @click="cancel()" class="modal-buttons">Cancelar</button>
            <button @click="editSocial()" class="modal-buttons">Salvar</button>
        </div>
    </Modal>
  </div>
</template>


<script>
import axios from "axios";
import Modal from  '../../../../../UIComponents/Modal'
import Empty from  '../../../../../UIComponents/EmptyCacildis'
import { showModal } from  '../../../../../_mixins/showModal'
import { url } from "../../../../../_mixins/url";
import { edit } from "../../../../../_mixins/edit";

import IconEdit from "../../../../../_utils/Svgs/IconEdit";
import IconOk from "../../../../../_utils/Svgs/IconOk";

import IconFacebook     from "../../../../../_utils/Svgs/_social/IconFacebook";
import IconTwitter      from "../../../../../_utils/Svgs/_social/IconTwitter";
import IconLinkedin     from "../../../../../_utils/Svgs/_social/IconLinkedin";
import IconGithub       from "../../../../../_utils/Svgs/_social/IconGithub";
import IconWhatsapp     from "../../../../../_utils/Svgs/_social/IconWhatsapp";
import IconGooglePlus   from "../../../../../_utils/Svgs/_social/IconGooglePlus";
import IconPersonalSite from "../../../../../_utils/Svgs/_social/IconPersonalSite";
import IconYoutube      from "../../../../../_utils/Svgs/_social/IconYoutube"

export default {
  components:
  {
     IconEdit,
     IconOk,
     Modal,
     Empty,
     IconFacebook,
     IconTwitter,
     IconLinkedin,
     IconGithub,
     IconWhatsapp,
     IconYoutube,
     IconGooglePlus,
     IconPersonalSite,
   },

  mixins: [url, edit, showModal],

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
      id: "",
      WppText: false,

      facebook :  '',
      youtube  :  '',
      github   :  '',
      twitter  :  '',
      whatsapp :  '',
      linkedin :  '',
      site     :  '',
      google   :  '',

      emptyResume: true,
      emptyFormation: true,
      //emptySocial: true,
    };
  },

  computed: {
    isOwner: function() {
      if (this.username == localStorage.username) {
        return true
      }else{
        return false
      }
    },
    emptyFB: function(){
        if (this.facebook == null || this.facebook == '') return true
        else return false
    },
    emptyYT: function(){
      if (this.youtube == null || this.youtube == '') return true
      else return false
    },
    emptyGH: function(){
      if(this.github == null || this.github == '') return true
      else return false
    },
    emptyTT: function(){
      if(this.twitter == null || this.twitter == '') return true
      else return false
    },
    emptyWPP: function(){
        if(this.whatsapp == null || this.whatsapp == '') return true
        else return false
    },
    emptyLKD: function(){
      if(this.linkedin == null || this.linkedin == '') return true
      else return false
    },
    emptySite: function(){
      if(this.site == null || this.site == '') return true
      else return false
    },
    emptyGPlus: function(){
      if(this.google == null || this.google == '') return true
      else return false
    },

    emptySocial: function(){
      if (this.emptyFB && this.emptyYT && this.emptyGH && this.emptyWPP &&
          this.emptyTT && this.emptyLKD && this.emptySite && this.emptyGPlus
         ){
        console.log('social false');
        return true
      }else{
        console.log('social false')
        return false
      }
    },

    allEmpty: function(){
      if ((this.resumo == '' || this.resumo == null)
      && (this.formacao == '' || this.formacao == null)
      && this.emptyFB
      && this.emptyYT
      && this.emptyGH
      && this.emptyWPP
      && this.emptyTT
      && this.emptyLKD
      && this.emptySite
      && this.emptyGPlus )
      {
        console.log('all true')
        return true
      }else{
        console.log('all false')
        return false
      }
    },

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

        if (this.resumo == '' || this.resumo == null) {
          this.emptyResume = true
        }else {
          this.emptyResume = false
        }

        if (this.formacao == '' || this.formacao == null) {
          this.emptyFormation = true
        }else {
          this.emptyFormation = false
        }
      })

      axios.get(`${this.BASE_URL}api/social/${this.username}`).then( res => {
        this.facebook = res.data.facebook
        this.youtube  = res.data.youtube
        this.github   = res.data.github
        this.twitter  = res.data.twitter
        this.whatsapp = res.data.whatsapp
        this.linkedin = res.data.linkedin
        this.site     = res.data.site
        this.google   = res.data.google
      })
    },

    editSocial(){
      axios
        .put(`${this.BASE_URL}api/social/${this.username}`, {
          facebook: this.facebook,
          youtube:  this.youtube,
          github:   this.github,
          twitter:  this.twitter,
          whatsapp: this.whatsapp,
          linkedin: this.linkedin,
          site:     this.site,
          google:   this.google
        })
        .then(res => {
          this.showModal = false
        })
    },

    editResume(){
      this.$refs.resumo.disabled = false;
      this.$refs.resumo.focus();
      this.resumoFocus = true;
      this.formacaoFocus = false;
      this.$refs.formacao.disabled = true;
    },

    editFormacao(){
      this.$refs.formacao.disabled = false;
      this.$refs.formacao.focus();
      this.formacaoFocus = true;
      this.resumoFocus = false;
      this.$refs.resumo.disabled = true;
    },

    handleEdit() {
      this.resumoFocus = false;
      this.formacaoFocus = false;
      this.$refs.resumo.disabled = true;
      this.$refs.formacao.disabled = true;

      axios
        .put(`${this.BASE_URL}api/professores/${this.id}`,
        {
          resumo: this.resumo,
          formacao: this.formacao
        })
        .then(res => {
          console.log(res.data)
        })
    },
  }
};
</script>
