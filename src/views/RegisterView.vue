<template>
    <div class="registerBox">
        <h2>Register</h2>
        <form @submit.prevent="register">
            <label for="username">Username:</label>
            <input type="text" v-model="username" required>

            <label for="password">Password:</label>
            <input type="password" v-model="password" required>

            <label for="gender">Gender:</label>
            <select v-model="gender" required>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
            </select>

            <label for="birthday">Birthday:</label>
            <input type="date" v-model="birthday" required>

            <label for="self_description">Self Description:</label>
            <textarea v-model="self_description" required></textarea>

            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            gender: '',
            birthday: '',
            self_description: ''
        };
    },
    methods: {
        async register() {
            try {
                const requestBody = {
                    username: this.username,
                    password: this.password,
                    gender: this.gender,
                    birthday: this.birthday,
                    self_description: this.self_description
                };

                const response = await fetch('http://localhost:8080/api/user/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });

                if (!response.ok) {
                    throw new Error('Register failed with status: ' + response.status);
                }
                alert('Register successful, please log in again');
                this.$router.push('/login');

            } catch (error) {
                alert('Register failed: ' + error.message);
                console.error('Register failed', error);
                this.$router.push('/register');
            }
        }
    }
};
</script>

<style>
.registerBox {
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

.registerBox h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #b8860b;
    text-align: center;
}

.registerBox label {
    display: block;
    margin-bottom: 10px;
    color: #b8860b;
}

.registerBox input[type="text"],
.registerBox input[type="password"],
.registerBox input[type="date"],
.registerBox select,
.registerBox textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #6b472c;
    border-radius: 8px;
    background-color: #302720;
    color: #b8860b;
}

.registerBox button {
    width: 100%;
    padding: 12px;
    background-color: #6b472c;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.registerBox button:hover {
    background-color: #8b5a2b;
}
</style>
