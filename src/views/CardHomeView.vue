<template>

  <div class="container">
    <!-- Header -->
    <header id="header">
      <div class="inner">
        <!-- Logo -->
        <h1><a :href="index.html" id="logo">Magic</a></h1>

        <!-- Nav -->
        <Navbar/>

      </div>
    </header>

    <!-- Banner -->
    <div id="banner">
      <h2><strong>Magic Card:</strong> Ma collection</h2>
    </div>
  </div>

  <!-- Main Wrapper -->


  <!-- Footer Wrapper -->

  <!-- Component <Footer /> -->

</template>

<script>
import axios from "axios";

import Navbar from "../components/Navbar.vue";
// import Footer from "../components/Footer.vue";


export default {
  name: "CardHomeView",
  data: () => ({
        //cardsApi
  }),
  components: {
    Navbar,
    //Footer
},
  methods: {},
  async created() {
    //On va chercher avec Get les DATA DE l'API pour toutes les cards
    const cardsApi = await axios.get("https://api.magicthegathering.io/v1/cards ");
    console.log(cardsApi);
    //Axios renvoie les Data pour toutes les cards
    this.cards = cardsApi.data;
  },
};
</script>

<style scoped>
 @import url('../assets/css/card-list.css'); 
 @import url('../assets/css/main.css');
</style>
