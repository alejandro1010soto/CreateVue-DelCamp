<template>
  <div>
    <div class="container">
      <i class="fa-solid fa-user"></i>
      <h2>Inicio de Sesión</h2>
      <form class="user-form">
        <label for="user-type">Tipo de usuario</label>
        <select class="user-type" id="user_type" v-model="userType">
          <option disabled selected value="0">Tipo de usuario</option>
          <option value="buyer">Campesino</option>
          <option value="seller">Comprador</option>
        </select>
        <label for="user-email">Correo electrónico</label>
        <input class="user-email" type="text" id="campoCorreo" placeholder="Ejemplo@gmail.com" v-model="text">

        <label for="user-password">Contraseña</label>
        <input class="user-password" type="password" id="campoContraseña" placeholder="********" v-model="password">

        <button class="btn-register" @click.prevent="Acceder">Iniciar Sesión</button>
        <p>¿Aun no tienes una cuenta? <a href="/Components/Login-Register-User/user_register.html">Registrate</a></p>
        <p>Olvidaste tu contraseña? <a href="#">Recuperar Contraseña</a></p>
        <p id="TrueFormulario"></p>
      </form>
    </div>
  </div>
</template>

<script>
import API from '@/api/index'

export default {
  data() {
    return {
      userType: '0',
      email: '',
      password: ''
    };
  },
  methods: {
    Acceder() {
      API.ValidationUser('https://render-delcamp.onrender.com/campesinos', { email: this.text, password: this.password })
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
</script>

<style></style>
