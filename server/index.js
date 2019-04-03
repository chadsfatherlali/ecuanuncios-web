const Hapi = require('hapi')
const consola = require('consola')
const HapiNuxt = require('hapi-nuxt')

const server = new Hapi.Server({
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3000,
  routes: {
    cors: {
      origin: ['*'],
      additionalExposedHeaders: ['set-cookie']
    }
  }
})

server.state('testCookie', {
  ttl: null,
  encoding: 'base64json',
  isSameSite: false
});

server.route({
  method: 'GET',
  path: '/api/test',
  handler (request, h) {    
    return h.response(`Hello bertina!!!`).state('testCookie', { firstVisit: true });
  } 
});

server
  .register({
    plugin: HapiNuxt
  })
  .then(() => server.start())
  .then(() =>
    consola.ready({
      message: `Server running at: ${server.info.uri}`,
      badge: true
    })
  )
  .catch(err => {
    consola.error(err)
    throw err
  });
