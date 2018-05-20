import Vue from 'vue'

export default {
    getRole() {
        return localStorage.getItem('role')
    },
    getToken() {
        return localStorage.getItem('token');
    }
}