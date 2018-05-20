import user from './auth'
import axios from 'axios'

export default {
    isAdmin(to, from, next) {
        if (user.getRole() == 'admin') {
            return next();
        }
        return next(false);
    }
}