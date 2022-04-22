<template>
  <div id="app">
    <!-- Component nav -->
  <Navbar />   
    
    <!-- Component main -->
    <router-view/>

  <!-- Component footer -->
  <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'CardHomeView',
  components: {
   Navbar,
    Footer
  }
}

</script>

<style>
 @import url('./assets/css/main'); 
</style>
