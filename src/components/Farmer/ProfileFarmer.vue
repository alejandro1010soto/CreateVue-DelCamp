<template lang="">
    <div>
        Profile User
    </div>
</template>
<script>
import API from '@/api/index'
export default {
    name: "ProfileFarmer",
    UserProfile() {
        return {
            data: null,
            email: null,
            id: null,
        }
    },
    methods: {
        ShowProfile() {
            API.peticion('https://render-delcamp.onrender.com/productos')
                .then((respose) => {
                    console.log(respose)
                })
        }
    },
    mounted() {
        this.ShowProfile()
    }
}
</script>
<style lang="">

</style>