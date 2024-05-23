<template>
    <div>
        <div class="tarjeta">
            <div class="imagen"></div>
            <i class="fa-solid fa-user"></i>
            <form class="formulario">
                <h1>Registro</h1>
                <label for="user-name">Nombre</label>
                <input class="user-name" type="text" v-model="nombre" placeholder="@Pepito">

                <label for="user-lastname">Apellido</label>
                <input class="user-name" type="text" v-model="apellido" placeholder="@Pérez Pérez">

                <label for="user-type">Tipo de usuario</label>
                <select class="user-type" id="user_type">
                    <option disabled selected value="0">Tipo de usuario</option>
                    <option value="buyer">Campesino</option>
                    <option value="seller">Comprador</option>
                </select>
                <label for="user-email">Correo electrónico</label>
                <input class="user-email" type="email" v-model="email" placeholder="Ejemplo@gmail.com">

                <label for="user-password">Contraseña</label>
                <input class="user-password" type="password" v-model="password" placeholder="********">
                <section class="checks">
                    <div class="terms-conditions">
                        <label for="terms-conditions">Aceptar términos y condiciones <input type="checkbox" id="terms-conditions" required /></label>
                    </div>
                    <div class="direct-message">
                        <label for="direct-message">Recibir mensajes <input type="checkbox" id="direct-message" /></label>
                    </div>
                </section>
                <p id="TrueFormulario"></p>
                <section class="botones">
                    <button class="btn-register" @click="enviarDatos">Registrar</button>
                    <button class="btn-cancel" type="reset">Cancelar</button>
                </section>
            </form>
            <p>Ya tienes una cuenta? <router-link class="rutas" to="/login-buyer">Inicia Sesión</router-link></p>
        </div>
    </div>
</template>

<script>
import API from '@/api'
    export default{
        data(){
            return {
                nombre: null,
                apellido: null,
                email: null,
                password: null
            }
        },
        methods: {
            enviarDatos() {
                API.enviar('https://render-delcamp.onrender.com/clientes',{
                    nombre: this.nombre,
                    apellido: this.apellido,
                    correo: this.email,
                    contraseña: this.password})
                .then(res => {
                    console.log(res, this.email, this.password)
                })
            }
    }
}

</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');

*{
    box-sizing: border-box;
    padding: 0%;
    margin: 0%;
}

.principal{
    background-size: cover;
    background-color: #ffffff;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.body {
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: #fac55452;
}

.fa-solid.fa-user {
    font-size: 20vh;
    color: #ffffff;
    background-color: #0ac763;
    border: 10px #0ac763 solid;
    overflow: hidden;
    padding: 20px 20px 0px 20px;
    border-radius: 50%;
    position: absolute;
    top: 20%;
}

.tarjeta {
    margin-left: 38%;
    transform: translateY(0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    width: 500px;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0px 0px 30px 15px #0000008c;
    padding-bottom: 40px;
}

.imagen {
    background-image: url('https://media.istockphoto.com/id/543212762/es/foto/tractor-en-el-campo-de-primavera-relaciones-sean.jpg?s=612x612&w=0&k=20&c=ua9ZJb046xHKUDsRW2okFfKYJyNd12RMXZ8vESdjUHc=');
    background-size: cover;
    width: 700px;
    height: 350px;
    transform: rotate(8deg);
    border-radius: 2rem 2rem 0px 0px;
    position: relative;
    bottom: 35px;
    z-index: -1;
}

.formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25%;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="password"], input[type="email"], input[type="text"]{
    width: 95%;
    padding: 8px;
    background-color: #f5f5f5;
    margin-bottom: 10px;
    border-style: none;
    border-bottom: 2px solid #0ac763;
}

input:focus {
    outline: none;
}


select {
    width: 99.8%;
    padding: 8px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-style: none;
    border-bottom: 2px solid #0ac763;
    margin-bottom: 20px;
}

h1 {
    margin-bottom: 20px;
}

.rutas {
    color: #0ac763;
    text-decoration: none;
}

.checks{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 30px;
}

.btn-register {
    margin: 25px;
    padding: 10px 60px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background-color: #0ac763;
    color: #fff;
    font-weight: 700;
}

.btn-register:hover {
    background-color: #08a652;
}

.btn-cancel {
    margin: 5px;
    padding: 10px 60px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background-color: #ffffff;
    border: 1px #0ac763 solid;
    color: #212529;
    font-weight: 700;
}

.btn-cancel:hover {
    border: 1px #0ac763 solid;
}
</style>