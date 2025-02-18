<template>
  <header class="game-match-wrapper">
    <div class="hero-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 hero-content">
            <h1 class="hero-title">Bienvenido a DUO</h1>
            <p class="hero-description">
              Encuentra a tu DUO perfecto en una App creada para unir a la comunidad gamer de todas las plataformas, donde no se discrimina a nadie.
            </p>
            <div class="hero-buttons">
              <a href="#" class="btn btn-primary">Ver Video</a>
              <a href="#" class="btn btn-secondary">Saber Más</a>
            </div>
          </div>
          <div class="col-lg-6 video-container">
            <div class="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <MenuMatchView />
</template>

<script setup>
import MenuMatchView from './MenuMatchView.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

:root {
  --primary-color: #ffd700;
  --text-color: #ffffff;
  --background-overlay: rgba(0, 0, 0, 0.6);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
}
/* linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) */
.game-match-wrapper {
  background-image:  url('/public/img/FONDO\ WEB.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.hero-section {
  width: 100%;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
}

.col-lg-6 {
  width: 100%;
  padding: 1rem;
}

.hero-content {
  color: #ffffff;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-primary {
  background-color: #ffd700;
  color: #000;
  box-shadow: 0 4px 6px rgba(255, 215, 0, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-wrapper {
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-width: 992px) {
  .col-lg-6 {
    width: 50%;
  }
  
  .hero-content {
    padding-right: 2rem;
  }
}

@media (max-width: 991px) {
  .hero-section {
    text-align: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .video-container {
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .game-match-wrapper {
    padding: 1rem 0;
  }
}
</style>