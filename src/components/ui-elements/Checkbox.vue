<template>
    <label class="checkbox">
        <input class="todo-check" type="checkbox" v-model="inputVal">
        <span class="checkmark"></span>
    </label>
</template>
<script>
export default {
  name: 'Checkbox',
  props: {
    value: Boolean,
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
<style scoped>
    .checkbox {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 27px;

        cursor: pointer;
        font-size: 22px;
        user-select: none;
    }

    .checkbox input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        width: 30px;
        background-color: #27ae60;
        border-radius: 5px;
    }

    .checkbox:hover input ~ .checkmark {
        background-color: #2ecc71;
    }

    .checkbox input:checked ~ .checkmark {
        background-color: #2ecc71;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .checkbox input:checked ~ .checkmark:after {
        display: block;
    }

    .checkmark:after {
        left: 11px;
        top: 7px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
</style>
