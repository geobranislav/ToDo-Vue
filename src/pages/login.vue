<template>
  <div>
    <form @submit.prevent="login">
      <h2>Login</h2>
      <input v-model="email" type="text"  name="email" placeholder="Email Address" required autofocus />
      <input v-model="password" type="password"  name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
  import { authService } from '../services/AuthService';

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        authService.login(this.email, this.password)
          .then(() => {
            this.$router.push({ name: 'Todos' })
            this.isAuthenticated = true
          })
      }
    }
  }


</script>
