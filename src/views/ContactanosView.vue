<template>
  <header class="game-match-wrapper">
    <div class="contact-form-container">
      <h2 class="form-title">Contáctanos</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div class="form-group">
          <label for="phone">Número Telefónico</label>
          <input type="tel" id="phone" v-model="form.phone" required>
        </div>
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit" class="submit-button">
          <span>Enviar Mensaje</span>
          <i class="fas fa-paper-plane"></i>
        </button>
      </form>
      <div class="company-info">
        <h3 class="text-white">Información de la Empresa</h3>
        <p  class="text-white"> Correo: <a href="mailto:duo@hotmail.com">duo@hotmail.com</a></p>
        <div class="social-icons">
          <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitForm = () => {
  console.log('Formulario enviado:', form)
  Object.keys(form).forEach(key => form[key as keyof typeof form] = '')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

:root {
  --primary-color: #ffd700;
  --text-color: #ffffff;
  --background-overlay: rgba(0, 0, 0, 0.7);
  --form-background: rgba(255, 255, 255, 0.1);
  --input-background: rgba(255, 255, 255, 0.2);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.game-match-wrapper {
  background-image:  url('/public/img/FONDO\ WEB.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: 80px;
}

.contact-form-container {
  max-width: 600px;
  width: 80%;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.268);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.form-title {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #ffffff;
  font-size: 1rem;
}

input, textarea {
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #ffd700;
  box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.submit-button {
  background-color: #ffd700;
  color: #333;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.submit-button:hover {
  background-color: #e6c200;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.submit-button:active {
  transform: translateY(0);
}

.company-info {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.company-info h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.company-info p {
  margin-bottom: 1rem;
}

.company-info a {
  color: #ffd700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.company-info a:hover {
  color: #e6c200;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icon {
  color: #ffffff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #ffd700;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact-form-container {
    padding: 1.5rem;
  }

  .form-title {
    font-size: 2rem;
  }

  input, textarea, .submit-button {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .game-match-wrapper {
    padding: 1rem;
  }

  .contact-form-container {
    padding: 1rem;
  }

  .form-title {
    font-size: 1.75rem;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>