<template>
  <div id="app">
    <header id="nav">
      <div class="nav-content">
        <router-link to="/"><h1 id="logo">Notes</h1></router-link>

        <div class="nav-buttons">
          <router-link to="/notes/new">
            <RoundButton>+</RoundButton>
          </router-link>
        </div>
      </div>
    </header>
    <main id="main">
      <Container>
        <router-view/>
      </Container>
    </main>
  </div>
</template>

<script>
import Container from './components/ui-elements/Container.vue';
import RoundButton from './components/ui-elements/RoundButton.vue';

export default {
  components: {
    RoundButton,
    Container,
  },
};
</script>

<style>
  * {
    box-sizing: border-box;

    padding: 0;
    margin: 0;
  }

  body {
    background-color: #2980b9;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }

  #nav {
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0;

    background-color: #3498db;
    box-shadow: 5px 0 5px rgba(0, 0, 0, 0.3);
  }

  .nav-content {
    display: flex;
    justify-content: space-between;

    padding: 10px 20px;
  }

  #logo {
    color: #fff;
  }

  #main {
    margin-top: 65px;
  }
</style>
