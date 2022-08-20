<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/car">Cars</b-nav-item>
            <b-nav-item to="/motor">Motors</b-nav-item>
            <b-nav-item to="/truck">Trucks</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!token" to="/login">Log in</b-nav-item>
            <b-nav-item v-else @click="logout()">Log Out</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'App',

  data() {
    return {
      searchQuery: ''
    }
  },

  computed: {
    ...mapState([
      'token'
    ])
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }
  },

  methods: {
    ...mapActions([
      // 'fetchDepartments'
    ]),

    ...mapMutations([
      'removeToken',
      'setToken'
    ]),

    logout() {
      this.removeToken();
    }
  },

  sockets: {
    error(err) {
      alert(err);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
