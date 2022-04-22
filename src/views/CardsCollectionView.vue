<template>
    <div></div>
</template>
    
<script>

import axios from 'axios'



export default {
    name: "DetailCardView",
    data: () => ({
        cards: [],
        dataIsLoading: true,
    }),
    components: {
        
    },
    methods: {
    //Methods avec id de la card pour le bouton voir @click EVENT
    //   goToCardsDetails(cardsId) {
    //       console.log(cardsId)
    //       this.$router.push({name:'DetailCardView', params:{cardsId:cardsId}})
    //   }
    },
    async created() {
        //On va chercher avec Get les DATA DE l'API pour toutes les cards
        const cards = await axios.get("https://api.magicthegathering.io/v1/cards");
        console.log(cards);
        //Axios renvoie les Data pour toutes les cards
        this.cards = cards.data;
    }
}

</script>

<style scoped>
 @import url('../assets/css/main');
</style>