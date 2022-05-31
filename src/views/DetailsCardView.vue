<template>
  <!-- Main Wrapper -->
  <div id="main-wrapper">
    <div class="wrapper style2">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-8 col-12-medium">
              <div id="content">
                <!-- Content -->

                <article>
                  <header class="major">
                    <h2>{{ card.name }}</h2>
                    <p>{{ card.artist }}</p>
                  </header>

                  <span class="image featured">
                    <img :src=" card.imageUrl ">
                  </span>

                  <p>{{ card.text}}</p>
                </article>
              </div>
            </div>
            <div class="col-4 col-12-medium">
              <div id="sidebar">
                <!-- Sidebar -->

                <section>
                  <header class="major">
                    <h2>Infos</h2>
                  </header>
                  <p>set name: <b>{{ card.setName }}</b></p>
                  <p>rarity: <b>{{ card.rarity }}</b></p>
                  <p>toughness: <b>{{ card.toughness }}</b></p>

                  <span class="button alt icon">
                    Card power
                    <i class="fa-solid fa-fire-flame-curved"></i>
                    <i class="fa-solid fa-fire-flame-curved"></i>
                    <i class="fa-solid fa-fire-flame-curved"></i>
                  </span>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"


export default {
  name: "CardDetails",
  data: () => ({
    /**
     * On ne met pas de double accolade car dans ce cas présent, 
     * on récupère les data d'une seule carte en fonction de son id
     * car c'est juste un object
     */
    card: {}, 

  }),

    async created() {
        const { cardId } = this.$route.params
        //On va chercher avec Get les DATA DE l'API pour toutes les cards
        const cardsApi = "https://api.magicthegathering.io/v1/cards/" + cardId;
        const oneCard = await axios.get(cardsApi);
        //console.log(oneCard);
        /// Axios renvoie les Datas pour tous les details d'une seule card
        this.card = oneCard.data.card;
        console.log(this.card);
    },
};        

</script>
<style scoped>
@import url("../assets/css/main");
@import url("../assets/fontawesome/css/all.css");
@import url("../assets/css/card-list.css");
</style>