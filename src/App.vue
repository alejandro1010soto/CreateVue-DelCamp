<template>
  <div id="app">
      <DelcampHeader/>
      <router-view/>
      <DelcampFooter/>
    
  </div>
</template>
<script>
    import DelcampHeader from '../src/components/DelcampHeader.vue'
    import DelcampFooter from '../src/components/DelcampFooter.vue'
export default {
  components: {
        DelcampHeader,
        DelcampFooter
    }
}
</script>
<style>

</style>
