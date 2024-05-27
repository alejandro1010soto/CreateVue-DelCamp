<template>

</template>

<script>
import CarritoProductos from './Pasarela/CarritoProductos.vue'
export default {
    CarritoProductos,
    props: ['ProductosComprados'],
    data() {
        return {

    },
   
}
</script>
<style scoped>

    margin: 0;
    box-sizing: border-box;
}

body {
    overflow-x: hidden;
    font-family: Arial, Helvetica, sans-serif;
}

.btnProductoAndres {
    text-align: center;
    padding: 10px;
}

.lineaPRODUC {
    border: none;
    border-radius: 5px;
    background-color: rgb(19, 174, 19);
    padding: 2px;
}

.nombre_producto {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
}

.PrecioProducto {
    color: red;
    font-size: 20px;
}

.descriptionElement {
    font-size: 12px;
    font-weight: 500;
}

#carrito {
    position: relative;
    font-size: 25px;
}

#carrito p {
    position: absolute;
    top: 4px;
    font-size: 10px;
    left: 12px;
    color: white;
}

.narvar {
    width: 100%;
    height: 50px;
    color: black !important;
    display: flex;
    justify-content: end;
}

.narvar ul {
    width: 60%;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    font-size: 17px;
}

.narvar li i a {
    cursor: pointer;
    text-decoration: none;
}

.narvar a {
    text-decoration: none;
}


.narvar a:visited {
    color: black;
}

.container_carrusel_leading_page {
    position: relative;
}

.carrusel_leanding_page {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

}

.carrusel_leanding_page div {
    width: 100%;
    height: 300px;
}

.carrusel_leanding_page img {
    width: 100%;
    height: 300px;
}

.logo {
    width: 150px;
    height: 150px;
    position: absolute;
    background-color: yellow;
    top: 0;
    margin: 70px 80px;
    border-radius: 50%;
}

.logo img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
</style>