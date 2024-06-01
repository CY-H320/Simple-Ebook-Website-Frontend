<template>
  <div class="contact-form">
      <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div>
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit" class="submit-button">submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      const data = {
        name: this.form.name,
        email: this.form.email,
        message: this.form.message
      };
      try {
        localStorage.setItem('contactFormData', JSON.stringify(data));
        console.log('Data saved to localStorage:', data);
        alert('Message sent!');
        this.resetForm();
      } catch (error) {
        console.error('Submission Failed:', error);
        alert('Submission failed, please try again later.');
      }
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.contact-form div {
  margin-bottom: 15px;
}
.contact-form label {
  display: block;
  margin-bottom: 5px;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.submit-button {
  background-color: #2894FF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}
.submit-button:hover {
  background-color: 	#005AB5;
}
</style>
