import user from './auth'
import router from '../router/index'

export default {
    isAdmin(to, from, next) {
        if (user.getRole() == 'admin') {
            return next();
        }
        router.push('/login');
        return next(false);
        
    }
}