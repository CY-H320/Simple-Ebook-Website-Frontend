<template>
    <div class="card text-center m-3">
        <div class = "card-content">
            <h5 class="card-header">About Us</h5>
            <div class="card-body">
                <p>We are a platform dedicated to children and enthusiasts of picture books. We take pride in offering the special service of free online reading of picture books. We firmly believe that reading is a joy that should be accessible to everyone.</p>
            </div>
        </div>
        <div class="card-image"></div>
    </div>

    <div class="goal-content">
        <div class="goal-image-container">
            <img class="goal-image" src="https://i.ibb.co/85KDV7z/goal.jpg" alt = "Goal Image">
        </div>
        <div class="goal-section">
            <h2>Our Goal</h2>
            <p>Our goal is to ignite the imagination of children, cultivate their interest in reading, and provide a vibrant reading community for picture book enthusiasts. Through offering high-quality picture book stories and interactive reading experiences, we aim to ensure that every visitor can find enjoyment and inspiration in reading.</p>
        </div>
    </div>
    <body>
        <div class="features-section">
            <div class="features-container">
                <h2>Membership Features</h2>
                <p>By joining our membership, you will enjoy the following features: </p>
                <br><br>
                <div class="features">
                    <div class="feature">
                        <img src = "https://i.ibb.co/qjdjh5D/feature1.png" width = "100px">
                        <h3>More Free Online Reading</h3><br>
                        <p>Upon membership registration, you will gain access to more free picture books, allowing you to explore a wider range of captivating stories and adventures.</p>
                    </div>
                    <div class="feature">
                        <img src = "https://i.ibb.co/bb6v1rm/ranking.png" width = "115px">
                        <h3>Reading Points Ranking</h3><br>
                        <p>Earn points by delving into the pages of picture books, engage in friendly competition with fellow readers, and inspire a love for reading.</p>
                    </div>
                    <div class="feature">
                        <img src = "https://i.ibb.co/02mQRgD/sharing.gif" width = "145px">
                        <h3>Sharing Favorite Books</h3><br>
                        <p>Members can share their recommended books with our website, enriching our library and spreading great reads throughout the community.</p>
                    </div>
                </div>
                <br><br>
                <promise>We are committed to providing a safe, friendly, and enriching reading environment where children and picture book enthusiasts can explore, learn, and grow. We will continue to strive to bring you more wonderful reading experiences and services.</promise>
            </div> 
        </div> 
    </body>  

    <div class="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions, suggestions, or collaboration opportunities, please feel free to reach out to us. We look forward to building a good partnership with you and bringing more wonderful reading experiences to children and picture book enthusiasts alike!</p>
        <ContactForm />
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'About Us',
  components: {
    ContactForm
  }
};
</script>

<style scoped>
.card {
    display: flex;
    color: #5B5B5B;
    position: relative;
    min-height: 100vh;
}

.card-image{
    flex: 1;
    background: url("https://i.ibb.co/5vfzFDN/picture-book1.jpg") no-repeat center center;
    background-size: cover;
}

.card-content{
    flex: 1; 
    padding: 20px;
    background-color: #FFFFCE;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card-header {
    text-align: center;
    font-size: 3.5em;
    margin-bottom: 100px;
}

.card-body {
    padding: 0px 50px 0px 50px;
    font-size: 1.2em;
    text-align: justify;
}

.goal-content{
    display: flex;
    min-height: 100vh;
}

.goal-image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
}

.goal-image {
    display: block;
    max-width: 55%;
    height: auto;
}

.goal-section {
    flex: 1;
    background-color: #ECF5FF;
    padding: 50px 0px 20px 0px;
    color: #4F4F4F;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.contact-section {
    background-color: #ECF5FF; 
    padding: 100px 0px 20px 0px;
    color: #4F4F4F;
    height: 750px;
    text-align: justify;
    min-height: 100vh;
}

.features-section {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    color: #4F4F4F; 
}

.features-container {
    display: flex;
    flex-direction: column;
    align-items: center; 
    max-width: 1200px;
    margin: 20px auto; 
    padding: 10px; 
}

.goal-section h2,
.contact-section h2{
    margin: 20px;
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 50px;
}

.features-container h2 {
    font-size: 2em;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
}

.features {
    display: flex;
    justify-content: space-between; 
    flex-wrap: wrap;
    width: 100%;
}

.feature {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: 30%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s;
}

.feature h3 {
    margin-top: 15px;
    font-size: 1.5em;
}

.goal-section p,
.contact-section p {
    margin: 20px;
    padding: 0px 100px 0px 100px;
    margin-bottom: 50px;
}

promise {
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0px 100px 0px 100px;
    font-size: 1.0em;
    text-align: center;
}

.feature p {
    text-align: center;
    margin-top: 10px;
    color: #555;
}

.feature:hover {
    transform: scale(1.05); 
}

@media (max-width: 768px) {
    .feature {
        width: 45%;
    }
}

@media (max-width: 480px) {
    .feature {
        width: 100%;
    }
}
</style>
