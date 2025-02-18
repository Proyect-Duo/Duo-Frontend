<template>
  <div class="profile-wrapper">
    <div class="container">
      <div class="profile-header">
        <div class="profile-avatar">
          <img v-if="user.avatar" :src="user.avatar" :alt="user.username">
          <div v-else class="avatar-initials">{{ userInitials }}</div>
        </div>
        <h1 class="profile-username">{{ user.username }}</h1>
        <p class="profile-tagline">{{ user.tagline }}</p>
      </div>

      <div class="profile-content">
        <div class="profile-stats">
          <div class="stat-item">
            <span class="stat-value">{{ user.level }}</span>
            <span class="stat-label">Nivel de comportamiento</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ user.matches }}</span>
            <span class="stat-label">recomendaciones</span>
          </div>
          
        </div>

        <div class="profile-details">
          <h2>Sobre mí</h2>
          <p>{{ user.bio }}</p>

          <h2>Forma de jugar</h2>
          <p v-for="(item, index) in user.formagame" :key="index" class="badge bg-success me-2">{{ item.nombre }}</p>


          <h2>Juegos favoritos</h2>
          <ul class="favorite-games">
            <li v-for="game in user.favoriteGames" :key="game">
              <img :src="`/img/games/${game}.png`" :alt="game">
              <span>{{ game }}</span>
            </li>
          </ul>

          <h2>Rango de juego</h2>
          <div class="achievements">
            <div v-for="achievement in user.achievements" :key="achievement.id" class="achievement">
              <img :src="achievement.icon" :alt="achievement.name">
              <div class="achievement-info">
                <h3>{{ achievement.name }}</h3>
                <p>{{ achievement.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="edit-profile">
        <h2>Editar Perfil</h2>
        <form @submit.prevent="updateProfile">
          <div class="form-group">
            <label for="username">Nombre de usuario</label>
            <input type="text" id="username" v-model="editedUser.username" required>
          </div>
          <div class="form-group">
            <label for="tagline">Frase personal</label>
            <input type="text" id="tagline" v-model="editedUser.tagline">
          </div>
          <div class="form-group">
            <label for="bio">Biografía</label>
            <textarea id="bio" v-model="editedUser.bio"></textarea>
          </div>
          <div class="form-group">
            <label for="avatar">URL del avatar</label>
            <input type="url" id="avatar" v-model="editedUser.avatar">
          </div>
          <button type="submit" class="btn-update">Actualizar Perfil</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const user = ref({
  username: 'GamerPro2023',
  tagline: 'Conquistando mundos virtuales, un juego a la vez',
  avatar: '/img/avatar.jpg',
  level: 42,
  matches: 1337,
  
  formagame: [
    {
      nombre: 'solo juego competitivo',
    },
    {
      nombre: 'juego de chill'
    }
  ],

  bio: 'Gamer apasionado desde los 5 años. Me encanta explorar nuevos mundos, resolver enigmas y formar equipos para grandes aventuras. Siempre en busca del próximo desafío épico.',
  favoriteGames: ['Fortnite', 'Overwatch', 'League of Legends', 'Valorant'],
  achievements: [
    { id: 1, name: 'Maestro Estratega', description: 'Ganó 100 partidas ranked', icon: '/img/achievements/strategy.png' },
    { id: 2, name: 'Francotirador Elite', description: 'Consiguió 1000 headshots', icon: '/img/achievements/sniper.png' },
    { id: 3, name: 'Leyenda del Battle Royale', description: 'Último superviviente 50 veces', icon: '/img/achievements/battle-royale.png' },
  ]
})

const editedUser = ref({ ...user.value })

const userInitials = computed(() => {
  const names = user.value.username.split(' ')
  return names.map(name => name[0].toUpperCase()).join('')
})

const updateProfile = () => {
  user.value = { ...user.value, ...editedUser.value }
  // Here you would typically send the updated data to your backend
  console.log('Profile updated:', user.value)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.profile-wrapper {
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

.profile-header {
  text-align: center;
  margin-bottom: 3rem;
}

.profile-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  border: 4px solid #ffd700;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd700;
  color: #000000;
  font-size: 4rem;
  font-weight: bold;
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-initials {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-username {
  font-size: 2.5rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.profile-tagline {
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.8;
}

.profile-content {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.profile-stats {
  flex: 1;
  display: flex;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffd700;
  display: block;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

.profile-details {
  flex: 2;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

h2 {
  font-size: 1.8rem;
  color: #ffd700;
  margin-bottom: 1rem;
  border-bottom: 2px solid #ffd700;
  padding-bottom: 0.5rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.favorite-games {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.favorite-games li {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.favorite-games li:hover {
  transform: translateY(-5px);
}

.favorite-games img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.achievements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.achievement {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.achievement:hover {
  transform: translateY(-5px);
}

.achievement img {
  width: 48px;
  height: 48px;
  margin-right: 1rem;
}

.achievement-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
}

.achievement-info p {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0;
}

.edit-profile {
  margin-top: 3rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input[type="text"],
input[type="url"],
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  font-size: 1rem;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.btn-update {
  background-color: #ffd700;
  color: #000000;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-update:hover {
  background-color: #e6c200;
}

@media (max-width: 992px) {
  .profile-content {
    flex-direction: column;
  }

  .profile-stats {
    order: -1;
  }
}

@media (max-width: 768px) {
  .profile-wrapper {
    padding: 2rem 0;
  }

  .profile-avatar {
    width: 150px;
    height: 150px;
    font-size: 3rem;
  }

  .profile-username {
    font-size: 2rem;
  }

  .profile-tagline {
    font-size: 1rem;
  }

  .stat-value {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .profile-avatar {
    width: 120px;
    height: 120px;
    font-size: 2.5rem;
  }

  .profile-username {
    font-size: 1.75rem;
  }

  .stat-value {
    font-size: 1.75rem;
  }

  .favorite-games {
    justify-content: center;
  }
}
</style>