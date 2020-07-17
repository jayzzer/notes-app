<template>
  <div id="confirm-dialog" :class="classList">
    <div class="dialog-background"></div>
    <div class="dialog-content">
      <p class="dialog-text">
        <slot></slot>
      </p>
      <div class="dialog-buttons">
        <button
          class="btn btn-green"
          @click="onConfirm"
        >
          Да
        </button>
        <button
          class="btn btn-red"
          @click="onCancel"
        >
          Отменить
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConfirmDialog',
  props: {
    show: Boolean,
    onConfirm: Function,
    onCancel: Function,
  },
  data: () => ({
    classList: ['hide', 'hiding'],
  }),
  computed: {
    showDialog() {
      return this.show;
    },
  },
  watch: {
    showDialog(newVal, oldVal) {
      if (oldVal === newVal) return;

      this.classList = [];
      switch (newVal) {
        case false:
          this.classList.push('hiding');
          setTimeout(() => {
            this.classList.push('hide');
          }, 300);
          break;
        case true:
          this.classList.push('show');
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
  .btn {
    height: 30px;

    color: #fff;
    font-size: 16px;

    border: none;
    border-radius: 5px;
  }

  .btn-green {
    background-color: #2ecc71;
  }

  .btn-green:hover {
    background-color: #27ae60;
  }

  .btn-red {
    background-color: #e74c3c;
  }

  .btn-red:hover {
    background-color: #c0392b;
  }

  #confirm-dialog {
    position: fixed;
    max-width: 300px;
    width: 100%;
    height: 100px;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -150px;

    z-index: 15;

    transition: opacity ease 0.3s;
  }

  #confirm-dialog.hide {
    visibility: hidden;
  }

  #confirm-dialog.hiding {
    opacity: 0;
  }

  #confirm-dialog.show {
    visibility: visible;
    opacity: 1;
  }

  .dialog-content {
    padding: 10px;

    background-color: #8e44ad;
    border: 5px solid #e74c3c;
    border-radius: 5px;
  }

  .dialog-text {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #fff;

    margin-bottom: 20px;
  }

  .dialog-buttons {
    display: flex;
  }

  .dialog-buttons button {
    flex: 1;
    margin-right: 10px;
  }

  .dialog-buttons button:last-child {
    margin-right: 0;
  }

  .dialog-background {
    position: fixed;
    z-index: -1;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
