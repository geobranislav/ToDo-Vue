<template>
    <nav>
        <ul>
            <li><router-link to="/add" exact>Add Todo</router-link></li>
            <li><router-link to="/todos" exact>todos</router-link></li>
            <a href="#"  @click="logout">Logout </a>
        </ul>
    </nav>
</template>

<script>

  import { authService } from '../services/AuthService';

  export default {
    data() {
      return {
        isAuthenticated: authService.isAuthenticated()
      }
    },
    methods: {
      logout() {
        authService.logout()
         this.isAuthenticated = false
          this.$router.push({ name: 'Login' })
      }
    }
  }

</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>
