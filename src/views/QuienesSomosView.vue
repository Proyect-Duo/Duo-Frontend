<template>
    <div class="quienes-somos-wrapper">
      <div class="container">
        <h1 class="main-title">Quiénes Somos</h1>
        
        <section class="about-us">
          <h2>Sobre Nosotros</h2>
          <p>DUO es una plataforma innovadora diseñada para unir a la comunidad gamer de todas las plataformas. Nuestra misión es crear un espacio inclusivo donde los jugadores puedan encontrar compañeros perfectos para sus aventuras gaming, sin discriminación alguna.</p>
          <p>Fundada en 2023, DUO ha crecido rápidamente, convirtiéndose en el hogar virtual de miles de gamers apasionados que buscan conectar, competir y divertirse juntos.</p>
        </section>
  
        <section class="testimonials">
          <h2>Lo que dicen nuestros usuarios</h2>
          <div class="testimonial-grid">
            <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="testimonial-avatar">
              <h3>{{ testimonial.name }}</h3>
              <p>"{{ testimonial.quote }}"</p>
            </div>
          </div>
        </section>
  
        <section class="location">
          <h2>Dónde Estamos</h2>
          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6167379590934!2d-3.7031746846009856!3d40.41695507936409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d6da3df33%3A0x6e6743217e6f5d17!2sPuerta%20del%20Sol%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1626532263044!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
          </div>
          <p class="address">Puerta del Sol, 28013 Madrid, España</p>
        </section>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const testimonials = ref([
    {
      name: "Ana García",
      quote: "DUO me ayudó a encontrar un equipo increíble para mis partidas de Overwatch. ¡Ahora juego mejor que nunca!",
      avatar: "/img/avatar1.jpg"
    },
    {
      name: "Carlos Rodríguez",
      quote: "Gracias a DUO, conocí a mi actual equipo de eSports. La plataforma es fácil de usar y muy efectiva.",
      avatar: "/img/avatar2.jpg"
    },
    {
      name: "Laura Martínez",
      quote: "Como streamer, DUO me ha permitido conectar con una comunidad increíble de jugadores y espectadores.",
      avatar: "/img/avatar3.jpg"
    }
  ])
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  :root {
    --primary-color: #ffd700;
    --text-color: #ffffff;
    --background-overlay: rgba(0, 0, 0, 0.7);
    --card-background: rgba(255, 255, 255, 0.1);
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  .quienes-somos-wrapper {
    background-image: url('/public/img/FONDO WEB.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    padding: 4rem 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .main-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #ffd700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  section {
    margin-bottom: 4rem;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #ffd700;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .testimonial-card {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 1.5rem;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
  }
  
  .testimonial-card:hover {
    transform: translateY(-5px);
  }
  
  .testimonial-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid #ffd700;
  }
  
  .testimonial-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .map-container {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .address {
    text-align: center;
    margin-top: 1rem;
    font-style: italic;
  }
  
  @media (max-width: 768px) {
    .quienes-somos-wrapper {
      padding: 2rem 0;
    }
  
    .main-title {
      font-size: 2.5rem;
    }
  
    h2 {
      font-size: 1.75rem;
    }
  
    p {
      font-size: 1rem;
    }
  
    .testimonial-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .container {
      padding: 0 1rem;
    }
  
    .main-title {
      font-size: 2rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  }
  </style>