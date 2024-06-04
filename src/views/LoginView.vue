<template>
  <div class="loginBox">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" v-model="username" required>
      <label for="password">Password:</label>
      <input type="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
    <div class="container2">
    <div class="content2">
      <div class="text2">Don't have an account? </div>
      <router-link to="/register" class="link2">Register.</router-link>
    </div>
  </div>
  </div>
</template>

<script>
import { fetchUserData } from '@/store/index.js';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const requestBody = new URLSearchParams();
        requestBody.append('username', this.username);
        requestBody.append('password', this.password);

        const response = await fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: requestBody
        });

        if (!response.ok) {
          throw new Error('Login failed with status: ' + response.status);
        }

        const data = await response.json();
        const token = data.access_token;
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user_id);
        await fetchUserData();
        alert('Login successful');
        this.$router.push('/dashboard');
        
      } catch (error) {
        alert('Login failed: ' + error.message);
        console.error('Login failed', error);
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style>
.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  border: 2px solid #6b472c;
}

.loginBox h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #b8860b;
  text-align: center;
}

.loginBox label {
  display: block;
  margin-bottom: 10px;
  color: #b8860b;
}

.loginBox input[type="text"],
.loginBox input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #6b472c;
  border-radius: 8px;
  background-color: #302720;
  color: #b8860b;
}

.loginBox button {
  width: 100%;
  padding: 12px;
  background-color: #6b472c;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.loginBox button:hover {
  background-color: #8b5a2b;
}

.container2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}

.content2 {
  display: flex;
  align-items: center;
  padding-top: 4px;
}

.text2 {
  display: flex;
}

.link2 {
  color: #b8860b;
  display: flex;
}
</style>