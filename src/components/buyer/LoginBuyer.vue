<template>
    <div class="principal">
        <div class="tarjeta">
            <i class="fa-solid fa-user"></i>
            <div class="imagen">.</div>
            <form class="formulario">
                <h1>Inicio de Sesión</h1>
                <label for="user-type">Tipo de usuario</label>
                <select class="user-type" id="user_type">
                    <option disabled selected value="0">Tipo de usuario</option>
                    <option value="buyer">Campesino</option>
                    <option value="seller">Comprador</option>
                </select>
                <label for="user-email">Correo electrónico</label>
                <input v-model="email" class="user-email" type="email" id="campoCorreo" placeholder="Ejemplo@gmail.com">

                <label for="user-password">Contraseña</label>
                <input v-model="password" class="user-password" type="password" id="campoContraseña" placeholder="********">

                <button class="btn-register" @click.prevent="ValidarData">Iniciar Sesión</button>
                <p>¿Aun no tienes una cuenta? <router-link class="rutas" to="/register-buyer">Registrate</router-link></p>

                <p>Olvidaste tu contraseña? <router-link class="rutas" to="#">Recuperar Contraseña</router-link></p>
                <p id="TrueFormulario"></p>
            </form>
        </div>
    </div>
</template>

<script>
import API from '@/api'
    export default{
        name:"LoginBuyer",
        data(){
            return{
                data: null,
                email: null,
                password: null
            }
        },
        methods: {
        infodelcamp () {
            API.peticion('https://render-delcamp.onrender.com/clientes')
                .then(res => {
                    this.data = res
                    console.log(this.data)
            })
        },
        ValidarData() {
            let contador = 5; 
                    this.data.forEach(element => {
                        if(this.email === element.correo && this.password === element.contraseña) {
                        alert('Ingresaste ', element.nombre)
                                // $router.push('../leanding_page.html?IdUserLogin=' + element.id)
                                window.location.reload()
                    }
                    if (this.email != element.correo || this.password != element.contraseña) {
                    console.log('No ingresaste')
                    let interval = setInterval(() => {
                    contador--
                    if (contador === 0) {
                        clearInterval(interval)
                        window.location.reload()
                    } else {
                        document.getElementById('TrueFormulario').innerHTML = `
                        <h3>Correo o Contraseña Incorrecta</h3>
                        <p>Recarga en ${contador} segundos</p>`
                    }
                }, 1000);
            }})
        }
},
    mounted () {
        this.infodelcamp()
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
    box-shadow: 0px 0px 30px 15px #0000008c;
    overflow: hidden;
    padding-bottom: 40px;
}

.imagen {
    background-image: url('https://media.istockphoto.com/id/543212762/es/foto/tractor-en-el-campo-de-primavera-relaciones-sean.jpg?s=612x612&w=0&k=20&c=ua9ZJb046xHKUDsRW2okFfKYJyNd12RMXZ8vESdjUHc=');
    background-size: cover;
    width: 700px;
    height: 350px;
    transform: rotate(9deg);
    border-radius: 2rem 2rem 0px 0px;
    position: relative;
    bottom: 40px;
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
    margin-bottom: 40px;
}

.rutas {
    color: #0ac763;
    text-decoration: none;
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