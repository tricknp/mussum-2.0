<template>
  <div class="teacher-description">
    <h1 class="teacher-name"> {{ `${this.name} ${this.lastname}` }} </h1>
    <div class="div-desc-teacher">
          <IconResume class="teacher-icon-resume" />
          <input type="text"
                :disabled="disabled"
                placeholder="Sem descrição"
                class="input-teacher-profile"
                ref="desc"
                v-model="description">

            <div v-if="isTeacher" class="edit-desc-teacher">
                <button @click="actionDesc" v-if="!editFocused">
                  <IconEdit />
                </button>

                <button type="submit" @click.prevent="onSubmit" v-else>
                  <IconOk />
                 </button>
            </div>
    </div>

    <div class="div-email-teacher">
      <IconEmail />
      <input type="text"
             :disabled="disabled"
             placeholder="Nenhum e-mail informado"
             class="input-teacher-profile"
             ref="mail"
             v-model="email">
      <div v-if="isTeacher" class="edit-desc-teacher">
            <button  @click="actionMail" v-if="!mailFocused">
              <IconEdit />
            </button>

            <button type="submit" @click.prevent="onSubmit" v-else>
              <IconOk />
            </button>
      </div>
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

  mixins: [url, edit ],

  data() {
    return {
      teachers: [],
      role: auth.getRole(),
      name: "",
      lastname: "",
      email: "",
      description: "",
      id: '',
      username: this.$route.params.targetName,
      disabled: true,
      editFocused: false,
      mailFocused: false,
    };
  },

  computed: {
    isTeacher: function(){
      if (this.$route.params.targetName == localStorage.username) {
       return true;
      }
    }
  },

  created() {
    this.getTeacher();

    this.$bus.$on("selectProfessor", username => {
      console.log('ON SELECTeDPROFESSOR DESCRIPTiON');

      this.refresh(username);
    });
  },

  methods: {
    refresh(username) {
      this.username = username;
      let teacher = this.teachers.find(x => x.username === username);
      this.id = teacher.id;
      this.name = teacher.nome;
      this.lastname = teacher.sobrenome;
      this.email = teacher.email;
      this.description = teacher.descricao;
    },

    getTeacher() {
      axios.get(`${this.BASE_URL}api/professores`).then(res => {
        if (this.username == this.$route.params.targetName) {
          this.teachers = res.data;
          this.refresh(this.username);
        }
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
    this.route = "api/professores/",
    this.datas = JSON.stringify({
      id: this.id,
      email: this.email,
      descricao: this.description
    });

      this.$refs.mail.disabled = true;
      this.$refs.desc.disabled = true;
      this.editFocused = false;
      this.mailFocused = false;
    }
  }
};
</script>
