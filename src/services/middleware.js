import user from './auth'

export default {
    isAdmin(to, from, next) {
        if (user.getRole() == 'admin') {
            return next();
        }
        return next(false);
    }
}