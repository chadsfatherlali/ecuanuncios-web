import jwt from 'jsonwebtoken';
import cookie from 'js-cookie';

export default ({store, app}, inject) => {
    const strategies = <%= JSON.stringify(options) %>;

    inject('authStrategies', {
        async local (username, password) {
            let token = jwt.sign({
                foo: 'bar'
            }, 'santiagofernandosanchezgomez');

            const auth = {
                accessToken: token
            };

            let response = await app.$axios.$post('http://localhost:3001/users', {
                name: 'Jr',
                lastname: 'Sánchez'
            });

            console.log('== RESPONSE ==', response);

            store.commit('setAuth', auth);
            
            cookie.set('ecu_id', auth);
        }
    })
}