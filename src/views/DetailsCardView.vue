<template>
    <div></div>
</template>

<script>

import axios from 'axios'
const API = 'https://api.magicthegathering.io/v1/cards/'

export default {
    
    name: 'DetailsCardView',
    data: () => ({
        cards: {}
    }),

    async created() {
    //On va chercher avec Get les DATA DE l'API pour avoir les détails d'une card
    const { cardId } = this.$route.params;
    const apiDetailUrl = API + cardId;
    const oneCard = await axios.get(apiDetailUrl);

    //Axios renvoie les Data pour tous les details d'un seul film
    this.cards = oneCard.data.cards;
  }


}

</script>
<style scoped>
 @import url('../assets/css/card-list'); 
 @import url('../assets/css/main');
</style>