import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// import store from '../store'

const peticion = function(URL) {
    return new Promise((resolver, rechazar) => {
        Vue.http.get(URL)
            .then((response) => response.json())
            .then((data) => resolver(data))
            .catch((error) => rechazar(error));
    });
};


const enviar = function (URL, info) {
    return Vue.http.post(URL, info).then((response) => {
        if (response.error) {
            throw response.error
        }
        return response.body
    })
}


const ValidationUser = function (URL, parameters) {
    return new Promise((resolve, reject) => {
        Vue.http.get(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const user = data.find((user) => user.correo === parameters.email && user.password === parameters.password);
                if (user) {
                    let IdActuallyFound = user.id;
                    console.log(IdActuallyFound)
                    this.$router.push('/ProfileFarmer?IdActually=' + IdActuallyFound); 
                } else {
                    console.log("Usuario no encontrado o contraseña incorrecta");
                    resolve(false);
                }
            })
            .catch((error) => reject(error));
    });
}

export default {
    peticion,
    enviar,
    ValidationUser,
}