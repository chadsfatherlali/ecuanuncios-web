import passport from 'passport';
import { Strategy } from 'passport-local';

export default (ctx, inject) => {
    const strategies = <%= JSON.stringify(options) %>;

    inject('authStrategies', {
        local (username, password) {
            passport.use(new Strategy((username, password) => {
                if (username == 'nani' && password == '123') {
                    console.log('== Iniciaste ==')
                }

                else {
                    console.log('== credenciales erroneas ==');
                }
            }))
        }
    })
}