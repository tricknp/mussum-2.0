<template>
    <div class="feed">
        <div  v-for="content in feedContent" :key="content.id">

            <div v-if="type === 'upload'">
                <img src="#">
                <p> {{ `${content.professor} ${textUpload} ${content.dir}` }} </p>
                <p> {{ content.arquivo }} </p>
                <p> {{ content.comentario }} </p>
                <p> {{ content.dataCriacao }} </p>
                <br>
            </div>

            <div v-if="type == 'recado'">
                <img src="#">
                <p> {{ `${content.professor} ${textRecado}` }} </p>
                <p> {{ `${content.titulo}` }} </p>
                <p> {{ `${content.comentario}` }} </p>
                <p> {{ content.dataCriacao }} </p>
                <br>
            </div>

        </div>
    </div>    
</template>

<script>
import axios from 'axios'
import {url} from '../../_mixins/url'
import LoginVue from '../../Authentication/Login.vue';

export default {

    data(){
        return{
            feedContent: '', 
            type: '',
            textUpload: 'adicionou um novo arquivo em',
            textRecado: 'adicionou um novo recado.'
        }
    },

    mixins: [ url ],

    created(){
        this.feed()
    },

    methods:{
        feed(){
            axios.get(`${this.BASE_URL}api/feed`).then( res =>  {
                let contents = res.data
                let a = []   

                contents.forEach(element => {
                    console.log(element)
                    if (element.tipo == 'upload') {          
                        this.type = 'upload'
                    a.unshift({
                          professor: element.professor,
                          dir: element.dir,
                          arquivo: element.arquivo,
                          comentario: element.comentario,
                          dataCriacao: element.dataCriacao
                      })
                    }else if(element.tipo == 'recado'){
                        this.type = 'recado'
                        a.unshift({
                          professor: element.professor,
                          titulo: element.titulo,
                          comentario: element.comentario,
                          dataCriacao: element.dataCriacao
                      })
                    }
                });

                this.feedContent = a;
                console.log(this.feedContent)
            })
        }
    }

}
</script>




