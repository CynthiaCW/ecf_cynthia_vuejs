<template>


<div>

</div>

</template>

<script>
import axios from "axios";


export default {
  name: "CardHomeView",
  data: () => ({
        //cardsApi
  }),
  components: {

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

</style>
