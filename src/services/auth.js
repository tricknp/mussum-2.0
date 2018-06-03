import Vue from 'vue'

export default {
    getRole() {
        return localStorage.getItem('role')
    },
    getToken() {
        return localStorage.getItem('token');
    },
    getNome() {
        return localStorage.getItem('nome');
    },
    getUsername(){
        return localStorage.getItem('username')
    }
}