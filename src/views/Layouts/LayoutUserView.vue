<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-container">
      <div class="navbar-logo">
        <router-link to="/">
          <img src="/public/img/logo duo 2-06.png" alt="Logo" class="logo-image me-5" />
        </router-link>
      </div>
      
      <button 
        class="navbar-toggle" 
        @click="toggleMenu" 
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
      >
        <span :class="['navbar-toggle-icon', { 'open': isMenuOpen }]"></span>
      </button>

      <div :class="['navbar-content', { 'show': isMenuOpen }]">
        <ul class="navbar-list">
          <li v-for="item in filteredNavItems" :key="item.path">
            <router-link 
              :to="item.path" 
              class="navbar-link" 
             
              active-class="active" 
              @click="closeMenu"
            >
              <i :class="item.iconClass"></i>
              {{ item.name }}
            </router-link>
          </li>
        </ul>

        <div class="auth-section">
          <template v-if="isAuthenticated">
            <div class="user-menu" @click="toggleUserMenu">
              <div class="user-avatar">
                {{ userInitials }}
              </div>
              <div :class="['user-dropdown', { 'show': isUserMenuOpen }]">
                <router-link to="/profile" class="dropdown-item" @click="closeUserMenu">
                  <i class="fas fa-user"></i>
                  Mi Perfil
                </router-link>
                <router-link to="/settings" class="dropdown-item" @click="closeUserMenu">
                  <i class="fas fa-cog"></i>
                  Configuración
                </router-link>
                <button @click="handleLogout" class="dropdown-item">
                  <i class="fas fa-sign-out-alt"></i>
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <router-link to="/login" class="auth-button login">
              <i class="fas fa-sign-in-alt"></i>
              Iniciar Sesión
            </router-link>
            <router-link to="/register" class="auth-button register">
              <i class="fas fa-user-plus"></i>
              Registrarse
            </router-link>
          </template>
        </div>

        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>
    <div class="mt-5" style="margin-top: 100px;">
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

interface NavItem {
  name: string
  path: string
  iconClass: string
  requiresAuth?: boolean
  publicOnly?: boolean
}

// Auth state (replace with your auth management solution)
const isAuthenticated = ref(false)
const user = ref({
  name: 'John Doe',
  email: 'john@example.com'
})

const router = useRouter()
const isMenuOpen = ref(false)
const isUserMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = ref<NavItem[]>([
  { name: 'Home', path: '/', iconClass: 'fas fa-home' },
  { name: 'Contactos', path: '/contactanos', iconClass: 'fas fa-envelope' },
  { name: 'Quiénes Somos', path: '/quienes-somos', iconClass: 'fas fa-users' },
  { name: 'Mi Cuenta', path: '/profile', iconClass: 'fas fa-user', requiresAuth: true },
])

const filteredNavItems = computed(() => {
  return navItems.value.filter(item => {
    if (item.requiresAuth && !isAuthenticated.value) return false
    if (item.publicOnly && isAuthenticated.value) return false
    return true
  })
})

const userInitials = computed(() => {
  if (!user.value.name) return ''
  return user.value.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    isUserMenuOpen.value = false
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  isUserMenuOpen.value = false
}

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const closeUserMenu = () => {
  isUserMenuOpen.value = false
}

const handleLogout = async () => {
  // Implement your logout logic here
  isAuthenticated.value = false
  closeUserMenu()
  router.push('/login')
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  background-color: rgba(11, 11, 11, 0.9);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background-color: rgba(11, 11, 11, 1);
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-image {
  height: 60px;
  width: auto;
  transition: all 0.3s ease;
}

.scrolled .logo-image {
  height: 50px;
}

.navbar-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-list {
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar-link:hover {
  background-color: rgba(255, 215, 0, 0.1);
  color: #ffd700;
}

.navbar-link.active {
  background-color: #ffd700;
  color: #333;
}

.auth-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.auth-button {
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.auth-button.login {
  color: #ffd700;
  border: 2px solid #ffd700;
}

.auth-button.login:hover {
  background-color: #ffd700;
  color: #333;
}

.auth-button.register {
  background-color: #ffd700;
  color: #333;
}

.auth-button.register:hover {
  background-color: #e6c200;
}

.user-menu {
  position: relative;
}

.user-avatar {
  width: 40px;
  height: 40px;
  background-color: #ffd700;
  color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.user-avatar:hover {
  transform: scale(1.05);
}

.user-dropdown {
  position: absolute;
  top: 120%;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  display: none;
  overflow: hidden;
}

.user-dropdown.show {
  display: block;
  animation: dropdownFade 0.3s ease;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
  border: none;
  width: 100%;
  text-align: left;
  background: none;
  cursor: pointer;
  font-size: 1rem;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: white;
  font-size: 1.2rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
  color: #ffd700;
}

.navbar-toggle {
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}

.navbar-toggle-icon {
  display: block;
  width: 24px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: all 0.3s ease;
}

.navbar-toggle-icon::before,
.navbar-toggle-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
}

.navbar-toggle-icon::before {
  transform: translateY(-8px);
}

.navbar-toggle-icon::after {
  transform: translateY(8px);
}

.navbar-toggle-icon.open {
  background-color: transparent;
}

.navbar-toggle-icon.open::before {
  transform: rotate(45deg);
}

.navbar-toggle-icon.open::after {
  transform: rotate(-45deg);
}

@keyframes dropdownFade {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .navbar-toggle {
    display: block;
  }

  .navbar-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(11, 11, 11, 0.95);
    flex-direction: column;
    padding: 1rem;
  }

  .navbar-content.show {
    display: flex;
  }

  .navbar-list {
    flex-direction: column;
    width: 100%;
  }

  .navbar-link {
    padding: 0.75rem 1rem;
  }

  .auth-section {
    margin: 1rem 0;
    width: 100%;
    justify-content: center;
  }

  .user-dropdown {
    position: static;
    margin-top: 1rem;
    width: 100%;
  }

  .social-icons {
    justify-content: center;
    margin-top: 1rem;
  }
}

@media (max-width: 480px) {
  .auth-section {
    flex-direction: column;
  }

  .auth-button {
    width: 100%;
    justify-content: center;
  }

  .logo-image {
    height: 40px;
  }

  .scrolled .logo-image {
    height: 35px;
  }
}
</style>