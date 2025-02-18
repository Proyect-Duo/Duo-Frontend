<template>
    <div class="registration-wrapper">
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-3 col-lg-3 col-xl-3 logo-container">
              <img src="/public/img/logo duo 2-06.png" class="img-fluid hover-scale" alt="Logo">
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form class="registration-form">
                <div class="text-center mb-5">
                  <h1 class="text-white display-4 fw-bold">Registro</h1>
                  <div class="line-decorator"></div>
                </div>
  
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-group custom-floating">
                      <input 
                        type="text" 
                        class="form-control custom-input" 
                        id="firstNameInput"
                        placeholder=" "
                      />
                      <label>Nombre</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-group custom-floating">
                      <input 
                        type="text" 
                        class="form-control custom-input" 
                        id="lastNameInput"
                        placeholder=" "
                      />
                      <label>Apellido</label>
                    </div>
                  </div>
                </div>
  
                <div class="form-group custom-floating mb-4">
                  <input 
                    type="email" 
                    class="form-control custom-input" 
                    id="emailInput"
                    placeholder=" "
                  />
                  <label>Correo electrónico</label>
                </div>
  
                <div class="form-group custom-floating mb-4">
                  <input 
                    type="password" 
                    class="form-control custom-input" 
                    id="passwordInput"
                    placeholder=" "
                  />
                  <label>Contraseña</label>
                </div>
  
                <div class="form-group custom-floating mb-4">
                  <input 
                    type="password" 
                    class="form-control custom-input" 
                    id="confirmPasswordInput"
                    placeholder=" "
                  />
                  <label>Confirmar contraseña</label>
                </div>
  
                <div class="form-check mb-4">
                  <input 
                    class="form-check-input custom-checkbox" 
                    type="checkbox" 
                    id="termsCheck"
                  />
                  <label class="form-check-label text-white" for="termsCheck">
                    Acepto los términos y condiciones
                  </label>
                </div>
  
                <div class="d-flex justify-content-center mt-4 pt-2">
                  <button 
                    type="button" 
                    class="btn btn-success btn-lg custom-button"
                  >
                    Registrarse
                  </button>
                </div>
                <p class="text-white text-center mt-3 mb-0">
                  ¿Ya tienes una cuenta? 
                  <router-link to="/login" style="text-decoration: none;"><a href="#!" class="text-success fw-bold ms-2 hover-link">Iniciar sesión</a></router-link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Component logic here
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  .registration-wrapper {
    background-image: url('/public/img/FONDO WEB.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    font-family: 'Poppins', sans-serif;
  }
  
  .h-custom {
    height: 100vh;
    overflow-y: auto;
  }
  
  .logo-container {
    transition: transform 0.3s ease;
  }
  
  .hover-scale:hover {
    transform: scale(1.05);
  }
  
  .registration-form {
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.4);
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
  
  .line-decorator {
    width: 50px;
    height: 4px;
    background: linear-gradient(90deg, #28a745, #34d058);
    margin: 1rem auto;
    border-radius: 2px;
  }
  
  .custom-floating {
    position: relative;
  }
  
  .custom-floating input {
    height: 60px;
    background-color: rgba(255, 255, 255, 0.1) !important;
    border: 2px solid rgba(255, 255, 255, 0.1);
    color: white !important;
    border-radius: 10px;
    padding: 1.5rem 1rem 0.5rem;
    transition: all 0.3s ease;
  }
  
  .custom-floating label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity .15s ease-in-out, transform .15s ease-in-out;
    color: rgba(255, 255, 255, 0.6);
    background-color: transparent !important;
  }
  
  .custom-floating input:focus,
  .custom-floating input:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
    background-color: rgba(255, 255, 255, 0.15) !important;
  }
  
  .custom-floating input:focus ~ label,
  .custom-floating input:not(:placeholder-shown) ~ label {
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
    color: #28a745;
  }
  
  .custom-floating input:focus {
    border-color: #28a745;
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
  }
  
  .custom-checkbox {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  .custom-checkbox:checked {
    background-color: #28a745;
    border-color: #28a745;
  }
  
  .custom-button {
    padding: 0.8rem 2.5rem;
    font-weight: 600;
    border-radius: 10px;
    background: linear-gradient(45deg, #28a745, #34d058);
    border: none;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 200px;
  }
  
  .custom-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(40, 167, 69, 0.4);
  }
  
  .hover-link {
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .hover-link:hover {
    color: #28a745 !important;
    text-decoration: none;
  }
  
  @media (max-width: 450px) {
    .registration-wrapper {
      position: fixed;
      height: 100%;
      overflow-y: auto;
    }
  
    .h-custom {
      height: auto;
      min-height: 100vh;
      padding: 2rem 0;
    }
    
    .registration-form {
      padding: 1.5rem;
      margin: 1rem;
    }
  
    .custom-floating input {
      height: 50px;
      padding: 1.25rem 1rem 0.25rem;
    }
  }
  </style>
  
  