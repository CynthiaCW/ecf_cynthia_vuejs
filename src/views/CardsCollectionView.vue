<template>
    <Navbar />
    <!-- <Footer />  Fonctionne pas-->
</template>
    
<script>

import axios from 'axios'
import Navbar from '@/components/Navbar.vue';
// import Footer from "@/components/Footer.vue"; Fonctionne pas


export default {
    name: "DetailCardView",
    data: () => ({
        cards: [],
        dataIsLoading: true,
    }),
    components: {
        Navbar,
        // Footer Fonctionne pas
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
 @import url('../assets/css/card-list'); 
 @import url('../assets/css/main');
</style>