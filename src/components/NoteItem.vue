<template>
  <div class="note">
    <router-link :to="`/notes/${note.id}/edit`">
      <div class="note-short-content">
        <div class="todo-list">
          <div class="todo-item"
               v-for="(todo, i) in shortTodos"
               :key="i"
          >
            <label>
              <input type="checkbox" :checked="todo.checked">
              {{ todo.text.length > 15 ? `${todo.text.slice(0, 15)}...` : todo.text }}
            </label>
          </div>
          <div v-if="note.todos.length > 5" class="more-sign">
            ...
          </div>
        </div>
      </div>
      <div class="note-name">
        {{ note.name }}
      </div>
    </router-link>

    <RoundButton
      class="delete-btn"
      color="red"
      size="small"
      @onClick="onClickDelete"
    >
      x
    </RoundButton>
  </div>
</template>

<script>
import RoundButton from './ui-elements/RoundButton.vue';

export default {
  name: 'NoteItem',
  components: { RoundButton },
  props: {
    note: {
      id: 0,
      name: '',
      todos: [],
    },
  },
  computed: {
    shortTodos() {
      return this.note.todos.slice(0, 4);
    },
  },
  methods: {
    onClickDelete() {
      this.$emit('clickDelete');
    },
  },
};
</script>

<style scoped>
  .note {
    position: relative;
    height: 200px;
    width: 100%;

    background-color: #2c3e50;
    border: 5px solid #16a085;
    border-radius: 10px;
  }

  .note-short-content {
    height: 100%;
    padding: 10px;
    color: #fff;
  }

  .note-name {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #34495e;
    color: #fff;
  }

  .delete-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
