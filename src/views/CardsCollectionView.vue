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
                <!-- Correspond à l'id de la carte, son titre et le bouton pour voir plus de détails -->
                <div class="card-list">
                    <div class="card-title"><b>{{card.id}}</b> {{ card.name }}</div>
                    <div class="card-action"><a href="#">👀</a></div>
                </div>
            </div>


              <div class="card-list">
                <div class="card-title"><b>{{card.id}}</b> {{ card.name }}</div>
                <div class="card-action"><a href="#">👀</a></div>
              </div>
              <div class="card-list">
                <div class="card-title"><b>#2</b> Card Title</div>
                <div class="card-action"><a href="#">👀</a></div>
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
    // Methods avec id de la card pour le bouton voir @click EVENT
      goToCardsDetails(cardsId) {
          console.log(cardsId)
          this.$router.push({name:'DetailCardView', params:{cardsId}})
        }
      },
    async created() {
      //On va chercher avec Get les DATA DE l'API pour toutes les cards
      const cardsApi = await axios.get(
        "https://api.magicthegathering.io/v1/cards "
      );
      //console.log(cardsApi);
      //Axios renvoie les Data pour toutes les cards
      this.cards = cardsApi.data.cards;
      console.log(this.cards);
  },
};
</script>

<style scoped>
@import url("../assets/css/main");
@import url("../assets/fontawesome/css/all.css");
@import url("../assets/css/card-list.css");
</style>