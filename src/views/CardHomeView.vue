<template>
  <div id="main-wrapper">
    <div class="wrapper style1">
      <div class="inner">

        <!-- Feature 1 -->
        <section class="container box feature1">
          <div class="row">
            <div class="col-12">
              <header class="first major">
                <!-- Je suis partie du 98 pour avoir des titres différents meme si la derniere carte est 99 -->
                <h2>Mes 3 Dernières Cartes</h2>
              </header>
            </div>
            <div class="col-4 col-12-medium">
              <section>
                <a href="#" class="image featured"
                  ><img :src="cards[98].imageUrl" alt=""
                /></a>
                <header class="second icon solid fa-dragon">
                  <h3>{{ cards[98].name }}</h3>
                  <p>{{ cards[98].originalType }}</p>
                </header>
              </section>
            </div>
            <div class="col-4 col-12-medium">
              <section>
                <a href="#" class="image featured"
                  ><img :src="cards[97].imageUrl" alt=""
                /></a>
                <header class="second icon solid fa-dragon">
                  <h3>{{ cards[97].name }}</h3>
                  <p>{{ cards[97].originalType }}</p>
                </header>
              </section>
            </div>
            <div class="col-4 col-12-medium">
              <section>
                <a href="#" class="image featured"
                  ><img :src="cards[96].imageUrl" alt=""
                /></a>
                <header class="second icon solid fa-dragon">
                  <h3>{{ cards[96].name }}</h3>
                  <p>{{ cards[96].originalType }}</p>
                </header>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CardHomeView",
  data: () => ({
    cards: [],
  }),
  components: {},
  methods: {},
  async created() {
    //On va chercher avec Get les DATA DE l'API pour toutes les cards
    const cardsApi = await axios.get(
      "https://api.magicthegathering.io/v1/cards "
    );
    //console.log(cardsApi);
    //Axios renvoie les Data pour toutes les cards
    this.cards = cardsApi.data.cards;
    console.log(this.cards);

    //Permet de connaitre la longueur du tableau d'objet (99)
    console.log(this.cards.length);
  },
};
</script>

<style scoped>
/* Mettre l'icone de la card fa-dragon */
@import url("../assets/fontawesome/css/all.css");

</style>
