<template>
  <div class="game-match-wrapper">
    <div class="container py-5">
      <h1 class="text-center text-white mb-5">Game Match</h1>
      
      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="user-profile p-4">
            <img :src="yourProfile.avatar" alt="Your Profile" class="profile-img mb-3">
            <h2 class="text-white"><a href="/perfil" style="text-decoration: none; color: white;">{{ yourProfile.name }}</a></h2>
            <p class="text-white-50">Juegos favoritos:</p>
            <div class="game-list">
              <span v-for="game in yourProfile.games" :key="game" class="game-tag">{{ game }}</span>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 mb-4">
          <div class="match-area p-4">
            <h3 class="text-white text-center mb-4">Potential Match</h3>
            <div class="match-percentage">
              <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle-bg" d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle" :stroke-dasharray="`${matchPercentage}, 100`" d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="20.35" class="percentage">{{ matchPercentage }}%</text>
              </svg>
            </div>
            <div class="text-center mt-4 d-flex justify-content-center">
              <button @click="rejectMatch" class="btn btn-danger btn-lg custom-button mr-2">
                <i class="fas fa-times"></i>
              </button>
              <button @click="skipMatch" class="btn btn-secondary btn-lg custom-button mx-2">
                <i class="fas fa-forward"></i>
              </button>
              <button @click="acceptMatch" class="btn btn-success btn-lg custom-button ml-2">
                <i class="fas fa-check"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 mb-4">
          <div class="user-profile p-4">
            <img :src="currentMatch.avatar" alt="Potential Match Profile" class="profile-img mb-3">
            <h2 class="text-white">{{ currentMatch.name }}</h2>
            <p class="text-white-50">Their Games:</p>
            <div class="game-list">
              <span v-for="game in currentMatch.games" :key="game" class="game-tag" 
                    :class="{ 'matching-game': yourProfile.games.includes(game) }">
                {{ game }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showMatchModal" class="match-modal">
        <div class="match-modal-content">
          <h2>It's a Match!</h2>
          <p>You and {{ currentMatch.name }} are ready to play together!</p>
          <div class="player-descriptions">
            <div class="player-description">
              <h3>{{ yourProfile.name }}</h3>
              <p>{{ yourProfile.description }}</p>
            </div>
            <div class="player-description">
              <h3>{{ currentMatch.name }}</h3>
              <p>{{ currentMatch.description }}</p>
            </div>
          </div>
          <button @click="startChat" class="btn btn-primary btn-lg custom-button mt-3">
            Start Chatting
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const yourProfile = ref({
  name: 'NOMBRE USUARIO 1',
  avatar: '/img/your-avatar.jpg',
  games: ['Fortnite', 'Minecraft', 'Among Us', 'Rocket League', 'Fall Guys'],
  description: 'Enthusiastic gamer looking for teammates to conquer virtual worlds!'
});

const potentialMatches = ref([
  {
    name: 'NOMBRE USUARIO 2',
    avatar: '/img/avatar1.jpg',
    games: ['Minecraft', 'Among Us', 'Valorant', 'CS:GO', 'Apex Legends'],
    description: 'Competitive player seeking skilled partners for ranked matches.'
  },
  {
    name: 'Player Three',
    avatar: '/img/avatar2.jpg',
    games: ['Fortnite', 'Rocket League', 'Overwatch', 'League of Legends', 'Dota 2'],
    description: 'Casual gamer who enjoys team-based games and having fun.'
  },
  {
    name: 'Player Four',
    avatar: '/img/avatar3.jpg',
    games: ['Among Us', 'Fall Guys', 'Minecraft', 'Fortnite', 'PUBG'],
    description: 'Strategy game enthusiast looking for like-minded players.'
  }
]);

const currentMatchIndex = ref(0);
const currentMatch = computed(() => potentialMatches.value[currentMatchIndex.value]);

const matchPercentage = computed(() => {
  const commonGames = yourProfile.value.games.filter(game => currentMatch.value.games.includes(game));
  return Math.round((commonGames.length / yourProfile.value.games.length) * 100);
});

const showMatchModal = ref(false);

const nextMatch = () => {
  currentMatchIndex.value = (currentMatchIndex.value + 1) % potentialMatches.value.length;
};

const rejectMatch = () => {
  nextMatch();
};

const skipMatch = () => {
  nextMatch();
};

const acceptMatch = () => {
  showMatchModal.value = true;
};

const startChat = () => {
  // Here you would typically navigate to a chat page or open a chat interface
  // For this example, we'll just navigate to a hypothetical chat route
  router.push({ 
    name: 'chat', 
    params: { 
      matchId: currentMatch.value.name,
      yourName: yourProfile.value.name,
      matchName: currentMatch.value.name
    } 
  });
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.game-match-wrapper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/public/img/FONDO WEB.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  padding: 2rem 0;
  color: #ffffff;
}

.user-profile, .match-area {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.user-profile:hover, .match-area:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #28a745;
}

.game-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.game-tag {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.game-tag:hover {
  transform: scale(1.05);
}

.matching-game {
  background-color: rgba(40, 167, 69, 0.6);
}

.circular-chart {
  display: block;
  margin: 0 auto;
  max-width: 150px;
}

.circle-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke: #28a745;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.percentage {
  fill: #fff;
  font-size: 0.5em;
  text-anchor: middle;
}

.custom-button {
  background: linear-gradient(45deg, #28a745, #34d058);
  border: none;
  padding: 0.8rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.custom-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(40, 167, 69, 0.4);
}

.btn-danger {
  background: linear-gradient(45deg, #dc3545, #ff4d5a);
}

.btn-danger:hover {
  box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4);
}

.btn-secondary {
  background: linear-gradient(45deg, #6c757d, #868e96);
}

.btn-secondary:hover {
  box-shadow: 0 5px 15px rgba(108, 117, 125, 0.4);
}

.match-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.match-modal-content {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  color: #333;
  max-width: 600px;
  width: 90%;
}

.player-descriptions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.player-description {
  flex: 1;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 0.5rem;
}

.player-description h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.player-description p {
  font-size: 0.9rem;
}

@media (max-width: 992px) {
  .game-match-wrapper {
    padding: 1rem 0;
  }
  
  .user-profile, .match-area {
    margin-bottom: 2rem;
  }

  .player-descriptions {
    flex-direction: column;
  }

  .player-description {
    margin: 0.5rem 0;
  }
}

@media (max-width: 768px) {
  .profile-img {
    width: 100px;
    height: 100px;
  }

  .game-tag {
    font-size: 0.8rem;
  }

  .custom-button {
    padding: 0.6rem 1.5rem;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  .profile-img {
    width: 80px;
    height: 80px;
  }

  .game-tag {
    font-size: 0.7rem;
  }

  .custom-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>