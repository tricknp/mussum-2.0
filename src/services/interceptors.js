import axios from 'axios'

axios.interceptors.request.use(req => {
  let token = localStorage.getItem('token');

  //console.log('Passando token do localstorage pro header do request: ' + token);
  
  if (token != null) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;

});
