<template>
    <div id="main-andres">
        <DelcampHeader/>
     <i id="Back" class="fa-solid fa-circle-arrow-left"></i>
     <!--<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeModal">Close</button>
                    <button type="button" class="btn btn-primary" id="saveReload">Save changes</button>
                </div>
            </div>
        </div>
    </div>-->

   
    <section class="first">
        <div class="imagen_carrusel">
            <img src="./..\img\Agro_-_colombia.png">
        </div>

        <div class="productos_comprados">
            <h1>Productos en proceso de compra</h1>
            <hr>
            <div id="tr_id4">
                <!-- <a id="h" v-for="(item, index) in ProductosComprados" :key="index">
                </a> -->
            </div>
        </div>
        <div class="programar_envio">
            <div class="envío_ok">
                <h2>Programar envío del Pedido:</h2>
                <img src="./..\img\ok.jpg">
            </div>

            <div class="formEnvio">
                <h2>Formulario de Envio</h2>
                <hr>
                <label for="user-town">Municipio</label>
                <input class="user-town" type="text" id="campoTown" placeholder="@Bello">

                <label for="user-city">Ciudad</label>
                <input class="user-city" type="text" id="campoCity" placeholder="@Medellín">

                <label for="user-address">Dirección</label>
                <input class="user-address" type="text" id="campoAddress" placeholder="@Cr 62 #54-16">
            </div>

        </div>

        <div class="pagar">
            <div class="parrafo">
                <h1>Recuerda que cuando le des pagar
                    ya estas aceptando todos los términos
                    y tratamiento de datos de Delcamp
                </h1>
            </div>
            <button>Pagar</button>
        </div>
    </section>
    <section class="second">
        <div class="titulo_productos">
            <img src="./..\img\izquierda.jpg">
            <h2>Otros Productos</h2>
            <img src="./..\img\derecha.jpg">
        </div>
        <div class="productos_final">
            <div class="lista_productos">
                <img src="./..\img\zanahorias.jpg">
                <p><b>$25.8/kg</b><span>$29.9/kg</span></p>
                <p>Zanahoría Extra</p>
                <button>Agregar</button>
            </div>
        </div>
    </section>
<DelcampFooter/>
    </div>
</template>

<script>
import DelcampHeader from "../DelcampHeader.vue";
import DelcampFooter from "../DelcampFooter.vue";

export default{      
    name:'CarritoProductos',
    props: ['ProductosComprados'],
    components:{
        DelcampHeader,
        DelcampFooter
    },   
   
 
   /* let urlParams = new URLSearchParams(window.location.search);
let idProducts = urlParams.getAll('idproduct').flatMap(id => id.split(','));
document.getElementById('Back').addEventListener('click', function () {
  window.history.back();
  localStorage.clear();
})


idProducts.forEach(idP => {
  axios.get(`https://render-delcamp.onrender.com/productos/${idP}`)
    .then((response) => {
      // Almacenar el objeto JSON con una clave única en localStorage
      localStorage.setItem(`ProducSelect_${idP}`, JSON.stringify(response.data));
    })
    .catch((err) => {
      console.error("Error al obtener producto ", err);
    });
});

let mostrarModal = true;

document.getElementById('closeModal').addEventListener('click', function () {
  console.warn("Thanks to ");
  setTimeout(() => {
    window.location.reload();
    mostrarModal = false;
  }, 3000);
})

// function activarModal() {
//   if (mostrarModal) {
//       jQuery('#exampleModal').modal('show');
//   }
// }

// jQuery(document).ready(function(){
//   activarModal()
// });


// Crear el título de la tabla fuera del bucle
document.getElementById('tr_id4').innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Productos</th>
        <th>Cantidades</th>
        <th>Descripción del Producto</th>
        <th>Total a Pagar</th>
        <th>Opciones</th>
      </tr>
    </thead>
    <tbody id="table_body"></tbody>
  </table>
`;

// Agregar filas al cuerpo de la tabla
idProducts.forEach(idP => {
  let productData = localStorage.getItem(`ProducSelect_${idP}`);
  if (productData) {
    let product = JSON.parse(productData);
    // Agregar filas al cuerpo de la tabla
    document.getElementById('table_body').innerHTML += `
        <tr>
          <td><img src="${product.foto}" alt="" srcset=""></td>
          <td>${product.nombre_producto}</td>
          <td>${product.descripcion}</td>
          <td>${product.id}</td>
          <td>
          <button>Eliminar</button>
          <button>Cancelar</button>
          </td>
        </tr>
      `;
  }
}),*/
}
</script>

<style scoped>

.first{
    background-color: green;
    width: 100%;
    height: 200vh;
    overflow: hidden;
    margin-bottom: 0px;
}
.imagen_carrusel{
    background-image: url('./../img/banner.jpg');
    float: left;
    width: 100%;
    height: 16%;
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
 .inform_vendedor>button:hover,.pagar>button:hover,.lista_productos>button:hover{
    background-color: rgb(49, 164, 99);
 }
 .inform_vendedor>button:active,.pagar>button:active,.lista_productos>button:active{
    background-color: rgb(33, 102, 63);
 }
.productos_comprados{
    background-color: rgb(255, 255, 255);
    float: right;
    width: 100%;
    height: 44%;
    display: flex;
    margin-bottom: -5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.productos_comprados>h1{
    font-size:70px;
    margin-top: 3%;
}
.productos_comprados>hr{
    border: 7px solid rgb(164, 241, 206);
    width: 55%;
    border-radius: 5px;
    margin-bottom: 20%; 
}

table{
    border-collapse: collapse;
    margin-top: -12%;
}
#tr_id4{
  position: relative;
  top:-20%;
  width: 60%;
  overflow-y: scroll;
}
th,.two2>thead>tr>th{
    font-size: 35px;
}
td{
    width: 310px;
    border:2px solid gray;
    padding: 3%;
    box-sizing: border-box;
    text-align: center;
}
.programar_envio{
    background-color: rgb(255, 255, 255);
    float: left;
    width: 100%;
    height: 29%;
    display: flex;
    margin-top: 1%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.formEnvio {
    width: 60%;
    height: 70%;
    margin: 0px;
    padding: 2% 3% 5% 3%;
    box-sizing: border-box;
    border-radius: 2rem;
    background-color: #fff;
}
.formEnvio>h2{
    font-size: 55px;
    text-align: center;
    margin-bottom: 1%;
}
.formEnvio>hr{
    width: 60%;
    border: 6px solid rgb(164, 241, 206);

}
.formEnvio>label,.formEnvio>input{
    font-size: 32px;
    width: 10%;
}
.formEnvio>input:focus{
    outline: none;
    border-bottom: 2px solid #f07a19;
}
input[type="text"]{
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border-style: none;
    border-bottom: 2px solid #0ac763;
}

i{
   font-size: 30px;
}
.envío_ok{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    left: -22%;
    margin: 0px;
}
.envío_ok>h2{
    font-size: 35px;
}
.envío_ok>img{
    height: 55%;
    margin-left: 20px;
}
.two2{
    border-collapse: collapse;
    margin-top:15px;
}
.two2>tbody>tr>td{
    width: 250px;
    border:2px solid gray;
    padding: 3%;
    box-sizing: border-box;
    text-align: center;
}
.pagar{
    background-color: rgb(255, 255, 255);
    float: left;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.parrafo{
    background-color: rgb(255, 255, 255);
    font-size: 25px;
    width: 30%;
    margin-right: 7%;
    text-align: center;
}
.pagar>button{
    display: flex;
    height: 30%;
    width: 20%;
    margin-right:-6%;
    justify-content: center;
    align-items: center;
    color:white;  
    background-color: rgb(54, 197, 116);
    font-size: 35px;
    border:none;
    border-radius: 15px;
}
.compras{
    width: 13%;
    margin-right: 40px;
}
.second{
    background-color: blue;
    width: 100%;
    height: 75vh;
    overflow: hidden;
}
.titulo_productos{
    background-color: rgb(255, 255, 255);
    float: left;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.titulo_productos>h2{
    font-size: 300%;
}
.titulo_productos>img{
    width: 30%;
}
.productos_final{
    background-color: rgb(255, 255, 255);
    float: left;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.lista_productos{
    margin-top: 2%;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    width: 20%;
    height: 75%;
}
.lista_productos>img{
    width: 90%;
    border-radius: 100%;
}
.lista_productos>p{
    font-size: 25px;
    margin-top: 0px;
}
.lista_productos>p>span{
    color:gray;
    text-decoration: line-through;
}
.lista_productos>button{
    margin-top:10px;
    width: 90%;
    height: 15%;
    border: none;
    border-radius:15px;
    color:white;
    font-size: 25px;
    background-color: rgb(54, 197, 116);
}
</style>