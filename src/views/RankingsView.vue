<template>
    <div class="rankings">
        <div class="card-container">
            <div class="card text-center readers">
                <h5 class="card-header">Top 10 Readers</h5>
                <div class="card-body">
                    <ol class="rank-list">
                        <li v-for="(reader, index) in topReaders" :key="reader.user_id" class="rank-item"
                            :style="getRankStyle(index)">
                            <span class="rank-number">{{ index + 1 }}</span>
                            <span class="rank-name">{{ reader.username }}</span>
                            <span class="rank-count">{{ reader.read_count }} books</span>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="card text-center books">
                <h5 class="card-header">Top 10 Books</h5>
                <div class="card-body">
                    <ol class="rank-list">
                        <li v-for="(book, index) in topBooks" :key="book.book_id" class="rank-item"
                            :style="getRankStyle(index)">
                            <span class="rank-number">{{ index + 1 }}</span>
                            <span class="rank-title">{{ book.title }}</span>
                            <span class="rank-count">{{ book.read_count }} reads</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            books: [],
            topReaders: [],
            topBooks: []
        };
    },
    async created() {
        try {
            // Fetch user data
            const usersResponse = await fetch('http://localhost:8080/api/user/read-count/');
            if (!usersResponse.ok) {
                throw new Error(`HTTP error! status: ${usersResponse.status}`);
            }
            const usersData = await usersResponse.json();
            this.users = usersData;

            // Fetch book data
            const booksResponse = await fetch('http://localhost:8080/api/book/read-count/');
            if (!booksResponse.ok) {
                throw new Error(`HTTP error! status: ${booksResponse.status}`);
            }
            const booksData = await booksResponse.json();
            this.books = booksData;

            // Process and sort top readers
            this.topReaders = this.users.sort((a, b) => b.read_count - a.read_count).slice(0, 10);

            // Process and sort top books 
            this.topBooks = this.books.sort((a, b) => b.read_count - a.read_count).slice(0, 10);

        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Failed to fetch data. Please try again later.");
        }
    },
    methods: {
        getRankStyle(index) {
            const colors = ["#FFD700", "#EEDC82", "#D9D9D9", "#E6E6FA", "#E6E6FA", "#F0E68C", "#F0E68C", "#FFF8DC", "#FFF8DC", "#FFF8DC"];
            return {
                backgroundColor: colors[index] || "#f9f9f9"
            };
        }
    }
};
</script>

<style scoped>
.rankings {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-top: 60px; /* Added padding to prevent header blocking */
}

.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-aspect-ratio: 1/1) {
    .card-container {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start; /* Align items at the top */
        width: 100%;
    }
}

.card {
    color: #b8860b; /* Matching the font color with the register box */
    margin: 20px;
    padding: 20px;
    border-radius: 15px;
    background-color: #1a1a1a; /* Matching background color */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Matching shadow */
    border: 2px solid #6b472c; /* Matching border color */
    width: 100%;
    max-width: 500px;
}

.card-header {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.card-body {
    font-size: 1.2em;
}

.rank-list {
    list-style-type: none;
    padding: 0;
}

.rank-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #6b472c; /* Matching border color */
    background-color: #302720; /* Matching input background color */
    color: #b8860b; /* Matching text color */
}

.rank-number {
    font-size: 1.5em;
    font-weight: bold;
}

.rank-name,
.rank-title {
    flex-grow: 1;
    margin-left: 20px;
    text-align: left;
}

.rank-count {
    font-size: 1em;
    color: #b8860b; /* Matching text color */
}
</style>
