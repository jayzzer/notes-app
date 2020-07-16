<template>
  <div class="column"
       :class="columnClasses"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Column',
  computed: {
    columnClasses() {
      const classes = [];
      if (this.sm) {
        classes.push(`sm-${this.sm}`);
      }

      if (this.md) {
        classes.push(`md-${this.md}`);
      }

      if (this.lg) {
        classes.push(`lg-${this.lg}`);
      }

      return classes;
    },
  },
  props: {
    sm: Number,
    md: Number,
    lg: Number,
  },
};
</script>

<style scoped>
  .column {
    padding: 10px;
  }

  .column.sm-1 {
    flex: 0 0 16.66667%;
  }

  .column.sm-2 {
    flex: 0 0 33.33333%;
  }

  .column.sm-3 {
    flex: 0 0 50%;
  }

  .column.sm-4 {
    flex: 0 0 66.66667%;
  }

  .column.sm-5 {
    flex: 0 0 83.33333%;
  }

  .column.sm-6 {
    flex: 0 0 100%;
  }

  @media (min-width: 768px) {
    .column.md-1 {
      flex: 0 0 16.66667%;
    }

    .column.md-2 {
      flex: 0 0 33.33333%;
    }

    .column.md-3 {
      flex: 0 0 50%;
    }

    .column.md-4 {
      flex: 0 0 66.66667%;
    }

    .column.md-5 {
      flex: 0 0 83.33333%;
    }

    .column.md-6 {
      flex: 0 0 100%;
    }
  }

  @media (min-width: 1024px) {
    .column.lg-1 {
      flex: 0 0 16.66667%;
    }

    .column.lg-2 {
      flex: 0 0 33.33333%;
    }

    .column.lg-3 {
      flex: 0 0 50%;
    }

    .column.lg-4 {
      flex: 0 0 66.66667%;
    }

    .column.lg-5 {
      flex: 0 0 83.33333%;
    }

    .column.lg-6 {
      flex: 0 0 100%;
    }
  }
</style>
