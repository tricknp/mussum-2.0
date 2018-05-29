import axios from 'axios'
import router from '../router/index'

axios.interceptors.request.use(req => {
  let token = localStorage.getItem('token');

  //console.log('Passando token do localstorage pro header do request: ' + token);

  if (token != null) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;

});

//redireciona pra /login caso o token expire ou de erro de autenticação
axios.interceptors.response.use(res => {
  return res;
}, err => {
  if (err.response.status == 401) {
    router.push('/login');
  }

});
