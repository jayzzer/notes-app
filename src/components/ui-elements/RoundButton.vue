<template>
  <button class="round-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'RoundButton',
};
</script>

<style scoped>
  .round-btn {
    width: 45px;
    height: 45px;

    cursor: pointer;
    border-radius: 30px;
    border: none;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
    background-color: #fff;
  }
</style>
