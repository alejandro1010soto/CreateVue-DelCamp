<template>
  <div>
    <button @click="AddProduct">¿Agregar Productos?</button>
    <p>Profile User</p>
    <p>Nombre de la finca: {{ farmName }}</p>
    <p>Ubicacion de la finca: {{ ubication }}</p>
    <p>Correo de la finca o Campesino: {{ correo }}</p>
    <p>Numero Finca: {{ phone_number }}</p>

    <hr>
    <div v-for="(producto, index) in all" :key="index">
      <img :src="producto.foto" class="imagenProduct" alt="Image Product Farmer">
      <h6>{{ producto.description }}</h6>
      <h6><strong>{{ producto.precio }}</strong></h6>
    </div>
  </div>
</template>

<script>
import API from '@/api/index'

export default {
  name: "ProfileFarmer",
  data() {
    return {
      farmName: null,
      ubication: null,
      correo: null,
      phone_number: null,
      all: [],
    }
  },
  methods: {
    showProfile() {
  let id = new URLSearchParams(window.location.search).get('IdActually');
  
  if (id) {
    API.peticion(`https://render-delcamp.onrender.com/campesinos/${id}`)
      .then((response) => {
        this.farmName = response.nombre_finca;
        this.ubication = response.ubicacion_finca;
        this.correo = response.correo;
        this.phone_number = response.telefono;

        // Productos Vendidos
        response.productos_disponibles.forEach(producto => {
          this.all.push({
            foto: producto.foto,
            description: producto.descripcion,
            precio: producto.precio
          });
        });
      })
      .catch((error) => {
        console.error("Error al cargar el perfil:", error);
      });
  } else {
    console.error("No se encontró el parámetro 'IdActually' en la URL.");
  }
},
    AddProduct() {
      alert("Add Product")
    }
  },
  mounted() {
    this.showProfile();
  }
}
</script>
<style>
.imagenProduct {
  width: 200px;
  border-radius: 5px;
  margin: 10px;
}
</style>