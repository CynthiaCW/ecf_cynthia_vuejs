<template>
  <!-- Main Wrapper -->
  <div id="main-wrapper">
    <div class="wrapper style2">
      <div class="inner">
        <div class="container">
          <div id="content">
            <!-- Content -->

            <article>
              <header class="major">
                <h2>Ma Collection</h2>
              </header>

            <!-- Je crée une boucle for qui va me permettre d'afficher les 3 cartes qui se trouvent sur la home page -->
            <div v-for="(card,idx) in cards" :key="idx" class="card-list">
                 <!--Correspond à l'image associée à la card, une numérotation dans l'ordre croissant avec l'index, son titre et le bouton pour voir plus de détails -->

                    <!-- <div class="card-img"><img :src="card.imageUrl" style="height=105px;"></div> -->
                    <div class="card-title"><b>#{{idx}}</b> {{ card.name }}</div>
                    <div class="card-action" @click="goToCardsDetails(card.id)"><a href="#">👀</a></div>
    
                
            </div>



              
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import axios from "axios";

export default {
    name: "CardsCollection",
    data: () => ({
        cards: [],
    }),
    components: {},
    methods: {
        
        /**
         * Methodes avec l'id de la card pour le bouton @click voir plus 
         * Je vérifie qu'au click, l'id s'affiche correctement dans la console
         * Au click sur celui ci, le user sera renvoyé sur la carte détaillée correspondant à l'id
         */
        goToCardsDetails(id) {
            console.log(id+' ok')
            this.$router.push({name:'CardDetails', params:{cardId:id}})
        }
    },
    async created() {
        //On va chercher avec Get les DATA DE l'API pour toutes les cards
        const cardsApi = await axios.get(
            "https://api.magicthegathering.io/v1/cards"
        );
        //console.log(cardsApi);
        //Axios renvoie les Data pour toutes les cards
        this.cards = cardsApi.data.cards;
        console.log(this.cards);
    }
};
</script>

<style scoped>
@import url("../assets/css/main");
@import url("../assets/fontawesome/css/all.css");
@import url("../assets/css/card-list.css");
</style>