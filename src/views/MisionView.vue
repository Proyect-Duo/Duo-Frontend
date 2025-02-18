<template>
    <header class="game-match-wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark" style="z-index: 2000;">
        <div class="navbar-container">
          <div class="navbar-logo">
            <img src="/public/img/logo duo 2-06.png" alt="Logo" class="logo-image" />
          </div>
          <button class="navbar-toggle" @click="toggleMenu" aria-label="Toggle navigation">
            <span class="navbar-toggle-icon"></span>
          </button>
          <div :class="['navbar-content', { 'show': isMenuOpen }]">
            <ul class="navbar-list">
              <li v-for="item in navItems" :key="item.path">
                <router-link :to="item.path" class="navbar-link" active-class="active" @click="closeMenu">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
            <div class="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  interface NavItem {
    name: string
    path: string
  }
  
  const navItems = ref<NavItem[]>([
    { name: 'Home', path: '/' },
    { name: 'Contactos', path: '/contactos' },
    { name: 'Quiénes Somos', path: '/quienessomos' },
    { name: 'Misión', path: '/mision' },
    { name: 'Login', path: '/login' },
  ])
  
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  const closeMenu = () => {
    isMenuOpen.value = false
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  .game-match-wrapper {
    background-image: url('/public/img/fondo-gamer.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    padding: 2rem 0;
  }
  
  .navbar {
    background-color: rgba(11, 11, 11, 0.8);
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
  
  .navbar-logo {
    flex-shrink: 0;
    margin-right: 2rem;
  }
  
  .logo-image {
    height: 80px;
    width: auto;
    object-fit: contain;
  }
  
  .navbar-content {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .navbar-list li {
    margin: 0.5rem;
  }
  
  .navbar-link {
    color: white;
    text-decoration: none;
    font-size: 1.125rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .navbar-link:hover,
  .navbar-link:focus,
  .navbar-link.active {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffd700;
    text-decoration: none;
  }
  
  .social-icons {
    display: flex;
    gap: 1rem;
  }
  
  .social-icon {
    color: white;
    transition: color 0.3s ease;
  }
  
  .social-icon:hover {
    color: #ffd700;
  }
  
  .navbar-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }
  
  .navbar-toggle-icon {
    display: block;
    width: 30px;
    height: 3px;
    background-color: white;
    position: relative;
    transition: background-color 0.3s ease;
  }
  
  .navbar-toggle-icon::before,
  .navbar-toggle-icon::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: transform 0.3s ease;
  }
  
  .navbar-toggle-icon::before {
    transform: translateY(-8px);
  }
  
  .navbar-toggle-icon::after {
    transform: translateY(8px);
  }
  
  @media (max-width: 1024px) {
    .navbar-container {
      flex-wrap: wrap;
    }
  
    .navbar-logo {
      margin-right: auto;
    }
  
    .navbar-toggle {
      display: block;
      order: 1;
    }
  
    .navbar-content {
      flex-basis: 100%;
      display: none;
      flex-direction: column;
      align-items: center;
      padding-top: 1rem;
    }
  
    .navbar-content.show {
      display: flex;
    }
  
    .navbar-list {
      flex-direction: column;
      align-items: center;
      margin-bottom: 1rem;
    }
  
    .social-icons {
      margin-top: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    .logo-image {
      height: 60px;
    }
  }
  </style>
  
  