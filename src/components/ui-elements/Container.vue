<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style scoped>
  .container {
    padding-top: 45px;
    width: calc(100% - 5rem);
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    .container {
      width: calc(100% - 1rem);
    }
  }
</style>
