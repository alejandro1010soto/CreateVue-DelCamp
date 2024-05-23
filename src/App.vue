<template>
  <div id="app">
      <DelcampHeader/>
      <landing-page/>
      <router-view/>
      <DelcampFooter/>
    
  </div>
</template>
<script>
    
    import LandingPage from '../src/components/Landing-page.vue';
    
export default {
  components: {
       
        LandingPage,
        
    },

}
</script>
<style>

</style>
