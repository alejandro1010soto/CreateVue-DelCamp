<template>
    <div>
        <body>
    <!-----------------------header------------------>
    <header>
        <h3>Stack Products</h3>
        <h3>Profile</h3>
        <h3>Seller</h3>
        <img src="./..\img\treslineas.jpg">
    </header>
    
    <div class="imagen_carrusel">
        <img src="./..\img\Agro_-_colombia.png">
    </div>

    <div id="body2" class="body2" ref="body2"></div> <!--fondo oscuro / modal-->

        <!-----------------------div medios de pago------------------>
    <div class="div_padre"  id="mediospago">
        <div class="tarjeta">
            <div class="tit">
                <h1>¿Cómo deseas Pagar?</h1>
                <hr>
            </div>

            <!------------------ventana modal para agregar datos de la tarjeta cred/deb----------------------->
            <div class="metodos_pago">
                <section id="tarjetas" ref="tarjetas"  >
                    <img class="tarjetastatic" src="./..\img\tarjeta.png">
                    <img class="closed" v-on:click="cerrar()" src="./..\img\cerrar.png">
                    
                    <form id="form" ref="form">
                        <input type="number" placeholder="Número de Tarjeta">
                        <input type="text" placeholder="Nombre del Titular">
                        <input type="date" placeholder="Fecha de Vencimiento">
                        <input type="number" placeholder="Código CVV">
                        
                        <div id="boton" ref="boton"  v-if="botonVisible">
                            <button id="botonmostrar" v-bind:name="nombreboton" ref="botonmostrar" v-on:click="moste(nombreboton)" type="submit">Continuar</button>
                        </div>
                    
                    </form>
                </section>

                <!-----------------Ventana modal para el pago en efectivo------------------------>
                <section id="pago_efectivo" ref="pago_efectivo">
                    <h1>¡Entendido! Tu Pago se Cobrará una vez tu pedido haya llegado a tu destino</h1>
                    <button id="efectivop" v-bind:name="nombreboton" v-on:click="moste(nombreboton)">Continuar</button>
                </section>

                <!--------------------ventana modal para el pago por PSE--------------------->
                <section id="pse" ref="pse">
                    <h1>Seleccione su Banco</h1>
                    <img src="./..\img\cerrar.png" v-on:click="cerrar()" class="closed">
                    <div class="bancos">
                        <!-----------------cada una de las opciones de banco------------------------>
                        <div v-for="(banco, index) in bancos" v-bind:key="index" class="listado_bancos" @click="EleccionBanco(banco.id)">
                         <h2>{{ banco.id }}</h2><img class="flecha" src="./..\img\flechaminimal.png">
                        </div>
                    </div>
                </section>

                <!----------------Ventana modal para pago por Efecty------------------------->
                <section id="efecty" ref="efecty">
                    <div class="div_efecty">
                        <div class="aviso">
                            <h2>Te pedirán estos datos</h2>
                            <img src="./..\img\cerrar.png" @click="cerrar()" class="closed">
                        </div>
                        <div class="datos_requeridos">
                            <h3>
                                Número de Convenio
                                <span id="conv" ref="conv">11074</span>
                            </h3>
                            <h3>
                                Referencia
                                <span id="refe" ref="refe">2341987531</span>
                            </h3>
                        </div>
                        <div class="datos_botones">
                            <button @click="convenio(1)">Cancelar Compra</button>
                            <button @click="convenio()">Generar Convenio</button>
                        </div>
                    </div>
                </section>

                <!------------------medios de pago disponibles----------------------->
                <div id="Credito" ref="Credito" @click="datos(1)" class="targe">
                    <img class="debcred" src="./..\img\creditoverde.png"><h2>Nueva Tarjeta de Crédito</h2><img class="flecha2" src="./..\img\flechaminimal.png">
                </div>
                <div id="Debito" ref="Debito" @click="datos(2)" class="targe">
                    <img class="debcred" src="./..\img\debitoverde.png"><h2>Nueva Tarjeta de Débito</h2><img class="flecha2" src="./..\img\flechaminimal.png">
                </div>
                <div id="Efectivo" ref="Efectivo" @click="datos(3)" class="targe">
                    <img class="debcred" src="./..\img\efectivo.png"><h2>Pago en Efectivo</h2><img class="flecha2" src="./..\img\flechaminimal.png">
                </div>

            </div>
            
            
            <div class="tat">
                <h1>Otros Métodos de Pago</h1>
                <hr class="tathr">
            </div>

                <!----------------Otros medios de pago disponibles---------------------->
            <div class="otros_medios">
                <div @click="datos(4)" class="targe">
                    <img class="debcred" src="./..\img\pse.png"><h2>Transferencia con PSE</h2><img class="flecha2" src="./..\img\flechaminimal.png">
                </div>
                <div @click="datos(5)" class="targe">
                    <img class="debcred" src="./..\img\efecty.png"><h2>Pago con Efecty</h2><img class="flecha2" src="./..\img\flechaminimal.png">
                </div>
            </div>

            <!------------------boton para mostrar segunda sección----------------------->
            <div class="continue" @click="mostrar()">
                <button>Continuar</button>
            </div>
        
        </div> 
    </div>

 <!----------------sección dos para verificacion de datos y pagar------------------------->
    <div id="divpadre2" ref="divpadre2">
        <div class="descripcion">

            <!------------------resumen de valor a pagar----------------------->
            <div class="precios">
                <h1>Confirma tu Compra</h1>

             
                    <div id="carac">
                        <h2>Productos</h2>
                        <h2>$9.057</h2>
                    </div>
                    
                    <div id="dinero">
                        <h2>Envío</h2>
                        <h2>$11.900</h2>
                    </div>
             

                <hr class="hrdescrip">
                <h1 id="pagas">Pagas    <span>$20.957</span></h1>
            </div>
            
            <!-------------------resumen de datos suministrados--------------------->
            <div class="datos">
                <h1>Comprueba los Datos</h1>
                <img src="./..\img\ubi.png">
                <h2>Carrera 49#59-43</h2>
                <h2>El Congolo-Bello, Antioquia</h2>
                <h2>Andrés Felipe Gonzalez Pineda - 3134684602</h2>
                <p id="metodo">{{  metodo }}</p>
                <a href="./..\Pasarela\MainAndres.vue"><button>Cambiar</button></a>
            </div>

            <!----------------boton para pagar------------------------->
            <div class="envio">
                <h1>¿Todo parece correcto?</h1>
                <button @click="pagar()">Pagar</button>
                <p>Al pagar aceptas los Términos y Condiciones</p>
            </div>

            <!-----------------ventana modal por si el usuario no selecciona metodo de pago primero------------------------>
            <div id="comprobar_pago" ref="comprobar_pago">
                <section class="regret">
                    <h1>Por favor, debes de seleccionar un método de pago primero</h1>
                    <hr>
                    <h2>Regresa a la lista superior para seleccionar un método de pago</h2>
                </section>
                <section class="x_button">
                    <img class="closed" @click="cerrar()"  src="./..\img\cerrar.png">
                    <a @click="cerrar()" href="#mediospago"><p>Continuar</p></a>
                </section>  
            </div>
            
            <!-----------------ventana modal cuando el usuario haya seleccionado metodo de pago------------------------>
            <div id="pago_realizado" ref="pago_realizado">
                <h1>Su Pago se Ha Realizado Con Éxito</h1>
                <a href="./..\Pasarela\MainAndres.vue" target="_self"><button @click="cerrar(1)">Continuar</button></a>
            </div>

        </div>
    </div>
</body>
    </div>
</template>

<script>
export default {
  name: 'PasarelaAndres',

  data() {
    return {
      metodo: 'No has seleccionado un método de pago',
      botonVisible: false,
      bancos: [
        { id: 'AV Villas'},
        { id: 'Banco Agrario de Colombia'},
        { id: 'Banco Caja Social'},
        { id: 'Banco Cooperativo Coopcentral'},
        { id: 'Banco de Bogotá' },
        { id: 'Banco de Occidente'},
        { id: 'Banco Falabella' },
        { id: 'Banco Itaú' },
        { id: 'Banco Mundo Mujer'},
        { id: 'Bancolombia'},
        { id: 'BBVA' },
        { id: 'Cotrafa' },
        { id: 'DaviPlata' },
        { id: 'Davivienda' },
        { id: 'Nequi'},
        { id: 'RappiPay'},
        { id: 'Santander'},
      ],
      nombreboton:null,
    };
  },

  mounted() {
    const form = this.$refs.form;
    window.addEventListener('load', this.iniciar);
    form.addEventListener("submit", this.borrar);
  },

  methods: {
    mostrar() {
      const divpadre2 = this.$refs.divpadre2;
      divpadre2.style.display = "block";
    },

    iniciar() {
      const elementostotales = [
        this.$refs.divpadre2,
        this.$refs.efecty,
        this.$refs.comprobar_pago,
        this.$refs.pse,
        this.$refs.tarjetas,
        this.$refs.pago_realizado,
        this.$refs.pago_efectivo,
      ];
      elementostotales.forEach(elem => elem.style.display = "none");
    },

    borrar(e) {
      e.preventDefault();
      this.$refs.form.reset();
    },

    datos(argum) {
      const tarjetas = this.$refs.tarjetas,
            body2 = this.$refs.body2,
            pago_efectivo = this.$refs.pago_efectivo,
            pse = this.$refs.pse,
            divefecty = this.$refs.efecty;

      switch(argum) {
        case 1:
          tarjetas.style.display = "block";
          body2.style.display = "block";
          this.nombreboton='Credito'
          this.botonVisible= true;
          break;
        
        case 2:
          tarjetas.style.display = "block";
          body2.style.display = "block";
          this.nombreboton='Debito'
          this.botonVisible= true;
          break;
          
        case 3:
          pago_efectivo.style.display="block";
          body2.style.display="block";
          this.nombreboton='Efectivo'
          break;
        
        case 4:
          pse.style.display = "block";
          body2.style.display = "block";
          break;
        
        case 5:
          divefecty.style.display = "block";
          body2.style.display = "block";
          this.metodo = "Vas a Pagar con Efecty";
          break;
      }
      },
    moste(element){
    const elementostotales = [
        this.$refs.tarjetas,
        this.$refs.body2,
        this.$refs.pago_efectivo,
        this.$refs.pse,
        this.$refs.efecty
      ];
      elementostotales.forEach(elem => elem.style.display = "none");
        this.metodo = `Vas a Pagar con ${element}`;
    },

    EleccionBanco(bancoN){
        const body2 = this.$refs.body2;
        const pse = this.$refs.pse;
        this.metodo=`Vas a Pagar con PSE, en tu Banco ${bancoN}`
        pse.style.display = "none";
        body2.style.display = "none";

    },

    cerrar() {
      const ocultar = [
        this.$refs.tarjetas,
        this.$refs.comprobar_pago,
        this.$refs.pago_efectivo,
        this.$refs.pse,
        this.$refs.efecty,
        this.$refs.body2,
      ];
      ocultar.forEach(elem => elem.style.display = "none");
    },

    pagar() {
      const body2 = this.$refs.body2;
      const pago_efectivo = this.$refs.pago_efectivo;
      const tarjeta2 = this.$refs.comprobar_pago;

      if (this.metodo === "No has seleccionado un método de pago") {
        tarjeta2.style.display = "block";
        body2.style.display = "block";
      } else {
        pago_efectivo.style.display = "block";
        body2.style.display = "block";
      }
    },

    convenio(arg) {
      const divefecty = this.$refs.efecty;
      const body2 = this.$refs.body2;
      const conv = this.$refs.conv;
      const refe = this.$refs.refe;

      conv.innerHTML = '';
      refe.innerHTML = '';
      for (let i = 0; i <= 5; i++) {
        conv.innerHTML += Math.floor(Math.random() * 10);
      }
      for (let i = 0; i <= 9; i++) {
        refe.innerHTML += Math.floor(Math.random() * 10);
      }
      if (arg === 1) {
        divefecty.style.display = "none";
        body2.style.display = "none";
        this.metodo = "No has seleccionado un método de pago";
      }
    },
  },
};
</script>

<style scoped>
/*class="closed2"*/
body{
    background-color: red;
    margin: 0px;
    padding:0px;
    overflow-x: hidden;
    overflow-y: auto;
}
header{
    background-color: rgb(255, 255, 255);
    width:100%; 
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
header > img{
    width:2%;
    height: 5%;
    margin-top:4px;
    margin-right: 25px;
}
header > h3{
    margin: 0px 55px 0px 45px 
}
.imagen_carrusel{
    background-image: url('./../img/banner.jpg');
    float: left;
    width: 100%;
    height: 32vh;
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.imagen_carrusel>img{
    width: 10%;
    border-radius: 100px;
    position: relative;
    left:5%
}
.div_padre{
    background-color: rgb(255, 255, 255);
    height: 100vh;
    width: 100%;
    overflow: hidden;
}
.tarjeta{
    background-color: rgb(223, 223, 223);
    position: relative;
    top: 7%;
    left: 10%;
    height: 20.4%;
    width: 80%;
}
.tit{
    background-color: rgb(255, 255, 255);
    font-size: 35px;
    padding: 1% 0% 1% 3%;
    box-sizing: border-box;
}
.tit>h1{
    position: relative;
    left: -30%;
}
hr{
    width: 40%;
    float: left;
    margin: -1% 0% 0% 0%;
    border: 5px solid rgb(164, 241, 206);
    border-radius: 5px;
}
.metodos_pago{
    background-color: rgb(255, 255, 255);
    height: 70%;
    width: 100%;
}
.targe,.listado_bancos{
    background-color: rgb(255, 255, 255);
    float: left;
    width: 100%;
    border:4px solid  rgb(230, 228, 228);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.targe:hover,.listado_bancos:hover{
    cursor: pointer;
    background-color: rgb(192, 188, 188);
}
.targe>h2{
    margin-left: 5%;
    text-align: left;
    font-size:25px ;
}
.debcred{
    width: 5%;
    margin-left: 3%;
}
.flecha2{
    width: 2%;
    margin-left: 75%;
    margin-right: 1.5%;
}
.flecha{
    width: 2%;
    margin-left: 8%;
    margin-right: 3%;
}
.tat{
    margin-top: 9%;
    background-color: rgb(255, 255, 255);
    font-size: 25px;
    padding: 1% 0% 1% 7%;
    box-sizing: border-box;
}
.tat>h1{
    position: relative;
    left: -35%;
}
.tathr{
  width: 30%;
  position: relative;
  right: 1%;
}
.otros_medios{
    width: 100%;
    background-color: yellow;
    height: 10%;
}
#tarjetas{
    position: absolute;
    position:fixed;
    z-index: 2;
    bottom: 25%;
    right: 10%;
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    width: 80%;
    border-radius: 20px;
    padding: 4%;
    box-sizing: border-box;
}
#body2{
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}
.tarjetastatic{
    float: left;
    background-color: rgb(255, 255, 255);
    margin-left: 5%;
    height: 100%;
    width: 30%;
}
.closed{
   float: right;
   position: relative;
   top:30px;
   right:2%;
   width: 2%;
}
.closed:hover{
    cursor: pointer;
}
#tarjetas>form{
    float: left;
    width: 100%;
    background-color: rgb(255, 255, 255);
    height: 100px;
}
#tarjetas>form>input{
    border: none;
    font-size: 25px;
    margin:2% ;
    border-bottom: 2px solid rgb(28, 56, 28);;
}
#tarjetas>form>input:focus{
    outline: none;
    border-bottom: 2px solid #f07a19;
}
#boton{
   background-color: rgb(255, 255, 255);
   height: 50%;
}
#botonmostrar{
    border-radius: 10px;
    font-size: 20px;
    position: relative;
    left: 45%;
    position: relative;
    border:none;
    height: 100%;
    width: 10%;
    color:white;
    background-color: rgb(54, 197, 116);
}
.datos_botones>button:hover,#boton>button:hover,#pago_efectivo>button:hover,.continue>button:hover,.datos>a>button:hover,.envio>button:hover,.x_button>a:hover,#pago_realizado>a>button:hover{
    background-color: rgb(49, 164, 99);
}
.datos_botones>button:active,#boton>button:active,#pago_efectivo>button:active,.continue>button:active,.datos>a>button:active,.envio>button:active,.x_button>a:active,#pago_realizado>a>button:active{
    background-color: rgb(33, 102, 63);
}
#pago_efectivo{
    position: absolute;
    position:fixed;
    z-index: 2;
    bottom: 35%;
    right: 25%;
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    width: 50%;
    border-radius: 20px;
    padding: 4%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#pago_efectivo>h1{
    font-size: 35px;
    text-align: center;
}
#pago_efectivo>button{
    margin-top: 5%;
    height: 3vh;
    border-radius: 10px;
    font-size: 20px;
    border:none;
    width: 10%;
    position: relative;
    left: 45%;
    color:white;
    background-color: rgb(54, 197, 116);
}
#pse{
    position: absolute;
    position:fixed;
    z-index: 2;
    bottom: 30%;
    right: 25%;
    background-color: rgb(211, 209, 209);
    overflow: hidden;
    width: 50%;
    height: 50%;
    border-radius: 20px;
    padding: 2%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#pse>h1{
    background-color: transparent;
    font-size:35px;
}
#pse>img{
    position: relative;
    top: -19%;
}
.bancos{
    background-color: rgb(255, 255, 255);
    height: 80%;
    overflow-y: auto;
    overflow-x:hidden;
    white-space: nowrap;
}
.listado_bancos{
    background-color: rgb(255, 255, 255);
    padding: 1.2%;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
}
#efecty{
    position: absolute;
    position:fixed;
    z-index: 2;
    bottom: 30%;
    right: 30%;
    background-color: rgb(211, 209, 209);
    overflow: hidden;
    width: 40%;
    height: 50%;
    border-radius: 20px;
}
.div_efecty{
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.aviso{
    float: left;
    background-color: rgb(54, 197, 116);
    color:white;
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
}
.aviso>img{
    position: relative;
    left: 20%;
    top: -20%;
}
.datos_requeridos{
    float: left;
    height: 35%;
    background-color: rgb(182, 182, 178);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.datos_requeridos>h3{
    display: flex;
    font-size: 22px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.datos_botones{
    float: left;
    height: 35%;
    background-color: rgb(255, 255, 255);
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.datos_botones>button{
    width: 50%;
    height:25%;
    border: none;
    font-size: 20px;
    border-radius: 15px;
    margin-top: 1%;
    color: white;
    background-color: rgb(54, 197, 116);
}
.continue>button{
    border-radius: 10px;
    font-size: 20px;
    position: relative;
    left: 45%;
    border:none;
    height: 4vh;
    width: 10%;
    color:white;
    margin-top: 4%;
    background-color: rgb(54, 197, 116);
}
#divpadre2{
    background-color: rgb(255, 255, 255);
    height: 85vh;
    display: flex;
    align-content: center;
}
.descripcion{
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    float: right;
    width: 60%;
    height: 80%;
    position: relative;
    right:19%;
    overflow: hidden;
}
.precios{
    background-color: rgb(250, 241, 241);
    float: left;
    width: 50%;
    height: 100%;
    padding: 15% 10% 0% 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 19px;
}

#carac{
    background-color: rgb(250, 241, 241);
    float: left;
    width: 100%;
    height: 10%;
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
}
#dinero{
    background-color: rgb(250, 241, 241);
    float: right;
    width: 100%;
    height: 12%;
    display: flex;
    justify-content: space-between;
}
#dinero>h2{
    margin-top: 6%;
}
#pagas{
    position:relative;
    left:-30%
}
#pagas>span{
    position: relative;
    left: 60%;
}
.hrdescrip{
    width: 100%;
}
.datos{
    background-color: rgb(233, 232, 232);
    float:right;
    width: 50%;
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.datos>p{
    font-size: 23px;
}
.datos>a,.envio>button{
    border-radius: 10px;
    font-size: 20px;
    border:none;
    height: 4vh;
    width: 40%;
    color:white;
    margin-top: 2%;
    background-color: rgb(54, 197, 116);
    text-decoration: none;
}
.datos>a>button{
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 10px;
    border:none;
    height: 4vh;
    width: 100%;
    color:white;
    background-color: rgb(54, 197, 116);
}

.datos>img{
    width: 10%;
}
#comprobar_pago{
    background-color: rgb(255, 255, 255);
    position: absolute;
    position:fixed;
    z-index: 2;
    width: 50%;
    height: 35%;
    top: 35%;
    left: 25%;;
}
.regret{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    float: left;
    width: 70%;
    height: 100%;
}
.regret>hr{
    width: 65%;
    margin: -1% 0% -2% 0%;
}
.regret>h1,.regret>h2{
    width: 85%;
}
.x_button{
    background-color: rgb(255, 255, 255);
    float: right;
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}
.x_button>img{
    width: 20%;
    padding: 5% 10% 0% 0%;
    box-sizing:border-box;
}
.x_button>a{
    border-radius: 10px;
    text-decoration: none;
    font-size: 20px;
    border:none;
    height: 4vh;
    width: 40%;
    color:white;
    margin-top: 2%;
    background-color: rgb(54, 197, 116);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 9%;
    right: 10%;
}
.envio{
    background-color: rgb(199, 193, 199);
    float: right;
    width: 50%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#pago_realizado{
    background-color: white;
    display: flex;
    position: absolute;
    position:fixed;
    z-index: 2;
    width: 50%;
    height: 30%;
    top: 35%;
    left: 25%;
    text-align: center;
    border-radius: 15px;
}
#pago_realizado>h1,#pago_realizado>button{
    position: relative;
    top: 25%;
}
#pago_realizado>a>button{
    width: 50%;
    margin-top: 13%;
    font-size: 20px;
    height: 10%;
    border:none;
    border-radius: 15px;
    color:white;
    background-color:rgb(54, 197, 116) ;
}
</style>

