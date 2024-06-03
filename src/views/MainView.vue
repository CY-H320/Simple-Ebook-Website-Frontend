<template>
  <div class="page">
    <div class="library">
      <div class="wrapper">
        <div class="books-container">
          <div v-for="(book, index) in books" :key="book.id" class="book" @click="openBookDisplay(index)">
            <img :src="book.cov" alt="Book Cover" class="book-cover">
            <span class="book-title">{{ book.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-overlay" :class="{ 'active': selectedBook !== null }" @click="closeBookDisplay"></div>

    <transition name="slide">
      <div v-if="selectedBook !== null" class="book-display-container">
        <button class="close-button" @click="closeBookDisplay">Close</button>
        <div class="book-info">
          <h2 class="title">{{ books[selectedBook].title }}</h2>
          <p class="author">By {{ books[selectedBook].author }}</p>
          <p class="publisher">Published by {{ books[selectedBook].publisher }}</p>
          <p class="isbn">ISBN: {{ books[selectedBook].isbn }}</p>
          <div class="description">{{ books[selectedBook].description }}</div>
        </div>
        <div class="book-display">
          <BookDisplay :id="books[selectedBook].id" />
        </div>
      </div>
    </transition>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import BookDisplay from '../components/BookDisplay.vue'

const selectedBook = ref(null);

const openBookDisplay = (index) => {
  selectedBook.value = index;
}

const closeBookDisplay = () => {
  selectedBook.value = null;
}

const books = ref([]);

const fetchBooks = async () => {
  try {
    const response = await fetch('http://0.0.0.0:8080/api/book/', { method: 'GET' });
    const booksData = await response.json();

    // Log each book's cover URL to the console
    books.value = booksData.map(book => {
      const cov = `http://localhost:8080/image/${book.cover}`;
      console.log(`Cover URL for ${book.title}: ${cov}`);
      return {
        ...book,
        cov
      };
    });
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};


fetchBooks();
</script>


<style scoped>
.page {
  padding: 50px;
  position: relative;
  /* Ensure proper positioning for absolute elements */
}

.library {
  line-height: 1.5;
  max-width: 80%;
  /* Limit the maximum width of the library */
  margin: 0 auto;
  /* Center the library horizontally */
}

.wrapper {
  display: flex;
  place-items: flex-start;
  /* Align items to the start */
  flex-direction: column;
}

.books-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* Add gap between grid items */
  justify-content: flex-start;
  /* Start filling the grid from the left */
}

.book {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  /* Hide overflowing content */
  border-radius: 10px;
  /* Add rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Add subtle shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* Add transition effects */
  flex: 0 0 calc(25% - 20px);
  /* Each book occupies one fourth of the container width with spacing */
  margin-bottom: 20px;
  /* Add bottom margin to create space between rows */
}

.book:hover {
  transform: translateY(-5px);
  /* Lift the book on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  /* Enhance shadow on hover */
}

.book-cover {
  width: 100%;
  height: auto;
  /* Maintain aspect ratio */
  border-radius: 10px 10px 10px 10px;
  /* Rounded corners only at the top */
}

.book-title {
  display: block;
  padding: 10px;
  font-size: 18px;
  text-align: center;
}

.book-display-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  background-color: white;
  z-index: 9999;
  overflow-y: auto;
  padding: 20px;
}

.slide-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  /* Initial state: fully transparent */
  z-index: 9998;
  /* Ensure it's behind the book display container */
  transition: background-color 0.3s ease;
  /* Add transition effect */
}

.slide-overlay.active {
  background-color: rgba(0, 0, 0, 0.7);
  /* Semi-transparent background */
  pointer-events: auto;
  /* Enable pointer events when active */
}

.slide-overlay:not(.active) {
  pointer-events: none;
  /* Disable pointer events when not active */
}

.book-info {
  margin-bottom: 20px;
}

.title {
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.author,
.publisher,
.isbn {
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
}

.description {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  color: #333;
}
</style>
