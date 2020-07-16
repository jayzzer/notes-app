<template>
  <div class="note">
    <div class="note-short-content">
      <div class="todo-list">
        <div class="todo-item"
             v-for="(todo, i) in todos"
             :key="i"
        >
          <label>
            <input type="checkbox" :checked="todo.checked">
            {{ todo.text }}
          </label>
        </div>
      </div>
    </div>
    <div class="note-name">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteItem',
  props: {
    name: String,
    todos: Array,
  },
};
</script>

<style scoped>
  .note {
    position: relative;
    height: 200px;
    width: 99%;

    background-color: #2c3e50;
    border: 5px solid #16a085;
    border-radius: 10px;

    color: #fff;
  }

  .note-short-content {
    padding: 10px;
  }

  .note-name {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 99%;
    height: 50px;
    background-color: #34495e;
  }
</style>
