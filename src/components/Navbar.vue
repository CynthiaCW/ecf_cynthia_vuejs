<template>
 
      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li class="current_page_item"><router-link to="home">Home</router-link></li>
          <li><router-link to="CardsCollection">Collection</router-link></li>
        </ul>
      </nav>
    
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
@import url("../assets/css/card-list.css");
 @import url("../assets/css/main.css"); 
</style>
