<template>
  <button
    class="round-btn"
    :class="[color, size]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'RoundButton',
  props: {
    color: String,
    size: String,
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
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

    font-weight: bold;
    font-size: 18px;
  }

  .round-btn.small {
    width: 30px;
    height: 30px;
  }

  .round-btn.white {
    color: #000;
    background-color: #fff;
  }

  .round-btn.white:hover {
    color: #000;
    background-color: #e1e1e1;
  }

  .round-btn.red {
    color: #fff;
    background-color: #e74c3c;
  }

  .round-btn.red:hover {
    background-color: #be4636;
  }
</style>
