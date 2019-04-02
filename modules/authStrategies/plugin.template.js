import jwt from 'jsonwebtoken';
import cookie from 'js-cookie';

export default ({store, app}, inject) => {
    const strategies = <%= JSON.stringify(options) %>;

    inject('authStrategies', {
        local (username, password) {
            let token = jwt.sign({
                foo: 'bar'
            }, 'santiagofernandosanchezgomez');

            const auth = {
                accessToken: token
            };

            app.$axios.$get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
                console.log('== DEV ==', response);
            });

            store.commit('setAuth', auth);
            
            cookie.set('ecu_id', auth);
        }
    })
}