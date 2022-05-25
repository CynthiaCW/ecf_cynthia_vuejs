<template>
  <!-- Header -->
  <div id="header-wrapper">
    <div class="container">
      <!-- Header -->
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

      <!-- Banner -->
      <div id="banner">
        <h2><strong>Magic Card:</strong> Ma collection</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
@import url("../assets/css/main.css");

</style>
