<template>
  <div id="edit-note">
    <div class="title">
      <h2>{{ isNewNote ? 'Создать' : 'Изменить' }} заметку</h2>
    </div>

    <div id="edit-form">
      <form>
        <div class="form-item">
          <label for="name-input">
            Название
          </label>
          <input
            id="name-input"
            type="text"
            v-model="name"
          >
        </div>
        <div class="form-item">
          <label>
            Todo список
          </label>
          <ul class="todo-list">
            <li
              class="todo"
              v-for="(todo, i) in todos"
              :key="i"
            >
              <Checkbox v-model="todo.checked"/>

              <label class="todo-text">
                <input
                  type="text"
                  v-model="todo.text"
                >
              </label>

              <button
                class="delete-todo"
                @click.prevent="removeTodo(i)"
              >
                x
              </button>
            </li>
            <li>
              <button
                class="btn btn-block btn-blue"
                @click.prevent="addTodo"
              >
                Добавить
              </button>
            </li>
          </ul>
        </div>

        <div class="control-btns">
          <button
            class="btn btn-green"
            type="submit"
          >
            Сохранить
          </button>
          <button class="btn btn-red">Отменить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Checkbox from './Checkbox.vue';

export default {
  name: 'EditNote',
  components: { Checkbox },
  data: () => ({
    name: '',
    todos: [],
  }),
  computed: {
    isNewNote() {
      return this.$route.meta.newNote;
    },
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: '',
        checked: false,
      });
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
  beforeCreate() {
    if (this.isNewNote) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    // request to db for note data
  },
};
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input {
    color: #fff;
    background-color: #34495e;
    border: 2px solid #95a5a6;
    border-radius: 5px;
    padding: 5px;
  }

  #edit-note {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    color: #fff;
    background-color: #2c3e50;
    border: 5px solid #16a085;
    border-radius: 10px;
  }

  #edit-form {
    padding: 20px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #34495e;

    border-radius: 10px 10px 0 0;
  }

  .form-item {
    margin-bottom: 10px;
  }

  .form-item:last-child {
    margin-bottom: 0;
  }

  .form-item > label {
    font-size: 16px;
    margin-bottom: 5px;
    display: block;
  }

  .form-item > input {
    width: 100%;
    height: 30px;
  }

  .todo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;
  }

  .todo:last-child {
    margin-bottom: 0;
  }

  .todo-text {
    min-width: 150px;
    height: 30px;
    flex: 1;
    margin-right: 10px;
    margin-left: 10px;
  }

  .todo-text input {
    width: 100%;
    height: 100%;
  }

  .delete-todo {
    height: 30px;
    width: 30px;

    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background-color: #e74c3c;
    border: none;
    border-radius: 5px;
  }

  .delete-todo:hover {
    background-color: #d63e2d;
  }

  .control-btns {
    display: flex;

    margin-top: 30px;
  }

  .control-btns button {
    flex: 1;

    margin-right: 10px;
  }

  .control-btns button:last-child {
    margin-right: 0;
  }

  .btn {
    height: 30px;

    color: #fff;
    font-size: 16px;

    border: none;
    border-radius: 5px;
  }

  .btn-block {
    width: 100%;
  }

  .btn-blue {
    background-color: #3498db;
  }

  .btn-blue:hover {
    background-color: #2980b9;
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
</style>
