<template>
  <div class="dashboardBox">
    <div class="profile-info">
      <h2>User Profile</h2>
      <div class="user-info">
        <p v-if="error" class="error-message">{{ error }}</p>
        <div v-else>
          <p><strong>Username:</strong> {{ user.username }}</p>
          <p><strong>Points:</strong> {{ user.point }}</p>
          <p><strong>Gender:</strong> {{ user.gender }}</p>
          <p><strong>Birthday:</strong> {{ formatDate(user.birthday) }}</p>
          <p><strong>Self Description:</strong> {{ user.self_description }}</p>
          <button @click="toggleUpdate" class="toggle-button">
            {{ formVisible ? "Hide" : "Show" }} Update Form
          </button>
          <button @click="toggleHistory" class="toggle-button">
            {{ historyVisible ? "Hide" : "Show" }} History
          </button>

          <!-- Update form -->
          <form v-show="formVisible" @submit.prevent="updateUser">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="user.username" required />

            <label for="gender">Gender:</label>
            <input type="text" id="gender" v-model="user.gender" required />

            <label for="birthday">Birthday:</label>
            <input type="date" id="birthday" v-model="user.birthday" required />

            <label for="self_description">Self Description:</label>
            <textarea
              id="self_description"
              v-model="user.self_description"
              rows="4"
            ></textarea>

            <button type="submit">Update</button>
          </form>

          <div v-show="historyVisible">
            <h3>History</h3>
            <ul>
              <li v-for="record in history" :key="record.id">
                <p><strong>Book:</strong> {{ getBookTitle(record.book_id) }}</p>
                <p>
                  <strong>Opened At:</strong> {{ formatDate(record.opened_at) }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import apiClient from "../services/apiClient.js"; // Adjust the import path as needed

export default {
  data() {
    return {
      user: {},
      error: null,
      history: [],
      historyVisible: false,
      formVisible: false,
      books: ref([]), // Define books as a ref in data
    };
  },
  async created() {
    await this.fetchUserData();
    await this.fetchUserHistory();
    await this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await fetch("http://0.0.0.0:8080/api/book/", {
          method: "GET",
        });
        const booksData = await response.json();

        // Assign the fetched books data to the books ref
        this.books.value = booksData.map((book) => ({
          ...book,
          cov: `http://localhost:8080/image/${book.cover}`,
        }));
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async fetchUserData() {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        const response = await fetch(
          `http://localhost:8080/api/user/${userId}`,
          {
            method: "GET",
            headers: {
              "Access-Token": token,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        this.user = data;
      } catch (error) {
        console.error("Error:", error);
        this.error = "Failed to fetch user data. Please try again later.";
      }
    },
    async fetchUserHistory() {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        const response = await fetch(
          `http://localhost:8080/api/user/${userId}/history`,
          {
            method: "GET",
            headers: {
              "Access-Token": token,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user history");
        }

        const data = await response.json();
        this.history = data;
      } catch (error) {
        console.error("Error:", error);
        this.error = "Failed to fetch user history. Please try again later.";
      }
    },
    async updateUser() {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const requestBody = {
          old_password: "", // Fill this with the user's current password
          new_password: "", // Fill this with the new password if being updated
          username: this.user.username,
          gender: this.user.gender,
          birthday: this.user.birthday,
          self_description: this.user.self_description,
        };

        const response = await fetch(
          `http://localhost:8080/api/user/${userId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Access-Token": token,
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update user data");
        }

        // If successful, you may want to inform the user or perform any necessary actions
        console.log("User data updated successfully");
      } catch (error) {
        console.error("Error:", error);
        this.error = "Failed to update user data. Please try again later.";
      }
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    getBookTitle(bookId) {
      const book = this.books.value.find(item => item.id === parseInt(bookId));
      return book ? book.title : 'Unknown';
    },
    toggleHistory() {
      this.historyVisible = !this.historyVisible;
      this.formVisible = false;
    },
    toggleUpdate() {
      this.formVisible = !this.formVisible;
      this.historyVisible = false;
    },
  },
};
</script>

<style scoped>
.dashboardBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 70vh;
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  overflow: scroll;
  padding: 25px;
  border: 1px solid #b8860b;
}

.dashboardBox h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #b8860b;
  text-align: center;
}

.profile-info {
  margin-bottom: 20px;
}

.user-info p {
  margin: 5px 0;
  color: #b8860b;
  transition: color 0.3s ease;
}

.error-message {
  color: red;
}

.toggle-button {
  background-color: #6b472c;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
}

.toggle-button:hover {
  background-color: #b8860b;
}

h3 {
  margin-top: 20px;
  color: #b8860b;
}

form {
  margin-top: 20px;
}

form label {
  color: #b8860b;
  margin-bottom: 5px;
}

form input,
form textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #6b472c; /* change border color */
  background-color: #333; /* change background color */
  color: #b8860b; /* change text color */
}

form button {
  background-color: #6b472c;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #b8860b;
}
</style>
