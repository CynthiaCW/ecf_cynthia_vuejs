<template>
  <header id="header">
    <div class="inner">
      <!-- Logo -->
      <h1><router-link to="/">Magic</router-link></h1>

      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li class="current_page_item">
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="CardsCollection">Collection</router-link>
          </li>
        </ul>
      </nav>
      
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
@import url("../assets/css/main.css");
</style>
