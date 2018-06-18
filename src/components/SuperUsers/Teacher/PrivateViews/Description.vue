<template>
  <div class="teacher-description">
    <h1> {{ `${teachers.find(x => x.username === this.username).nome} ${teachers.find(x => x.username == this.username).sobrenome}` }} </h1>
    <div class="div-desc-teacher">
          <IconResume />
          <input type="text" 
                :disabled="disabled"
                placeholder="Sem descrição" 
                class="input-teacher-profile"
                ref="desc"
                v-model="teachers.find(x => x.username === this.username).descricao"> 
          <button type="submit" @click="actionDesc" v-if="!editFocused">
            <IconEdit />
          </button> 
          
          <button type="submit" @click.prevent="onSubmit" v-else>
            <IconOk />
          </button> 
    </div>
    
    <div class="div-email-teacher">
      <IconEmail />
      <input type="text"  
             :disabled="disabled"
             placeholder="Nenhum e-mail informado" 
             class="input-teacher-profile"
             ref="mail"
             v-model="teachers.find(x => x.username === this.username).email"> 
    
      <button type="submit" @click="actionMail" v-if="!mailFocused">
        <IconEdit />
      </button> 

      <button type="submit" @click.prevent="onSubmit" v-else>
        <IconOk />
      </button> 
    </div>


  </div>  
</template>


<script>
import axios from "axios";
import auth from "../../../../services/auth";
import IconOk from "../../../_utils/Svgs/IconOk";
import IconEdit from "../../../_utils/Svgs/IconEdit";
import IconResume from "../../../_utils/Svgs/IconResume";
import IconEmail from "../../../_utils/Svgs/IconEmail";
import { url } from "../../../_mixins/url";
import { edit } from "../../../_mixins/edit";

export default {
  components: {
    IconEdit,
    IconOk,
    IconResume,
    IconEmail
  },

  mixins: [url, edit],

  data() {
    return {
      teachers: [],
      role: auth.getRole(),
      username: this.$route.params.targetName,
      disabled: true,
      editFocused: false,
      mailFocused: false
    };
  },
  created() {
    this.getTeacher(),
      this.$bus.$on("selectProfessor", (username) => {
        this.username = username;
        //this.getTeacher();
      });
  },
  methods: {
    getTeacher() {
      console.log("USERNAME");
      console.log(this.username);

      axios.get(`${this.BASE_URL}api/professores`).then(res => {
        this.teachers = res.data;
        console.log(res.data);
      });
    },

    actionDesc() {
      this.$refs.desc.disabled = false;
      this.$refs.mail.disabled = true;
      this.$refs.desc.focus();
      this.editFocused = true;
      this.mailFocused = false;
    },

    actionMail() {
      this.$refs.mail.disabled = false;
      this.$refs.desc.disabled = true;
      this.$refs.mail.focus();
      this.mailFocused = true;
      this.editFocused = false;
    },

    postData() {
      //route to post teacher
      (this.route = "api/professores/"),
        (this.datas = JSON.stringify({
          id: this.id,
          email: this.teacher.email,
          descricao: this.teacher.descricao
        }));

      this.$refs.mail.disabled = true;
      this.$refs.desc.disabled = true;
      this.editFocused = false;
      this.mailFocused = false;
    }
  }
};
</script>