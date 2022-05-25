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
import axios from "axios";

export default {
  name: 'CardHomeView',
  data: () => ({
    cards:[],
  }),
  components: {
    Navbar,
    Footer
  },
  methods: {},
  async created() {
    //On va chercher avec Get les DATA DE l'API pour toutes les cards
    const cardsApi = await axios.get(
      "https://api.magicthegathering.io/v1/cards "
    );
    //console.log(cardsApi);
    //Axios renvoie les Data pour toutes les cards
    this.cards = cardsApi.data.cards;
  }
};

</script>



<style>
 @import url('./assets/css/main'); 
</style>
