<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">web</h1>
      <h2 class="subtitle">Web para anuncios clasificados en Ecuador</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        
        <form @submit.prevent="login">
            <label for="email">
                <input v-model="credentials.username" id="email" type="email"/>
            </label>
            <label for="password">
                <input v-model="credentials.password" id="password" type="password"/>
            </label>

            <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
    data () {
        return {
            credentials: {
                username: null,
                password: null 
            }
        }
    },
    components: {
        Logo
    },
    methods: {
        login () {
            this.$authStrategies.local(this.credentials.username, this.credentials.password);
        }
    }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
