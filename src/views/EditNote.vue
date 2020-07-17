<template>
  <div id="edit-note">
    <div class="title">
      <h2>{{ isNewNote ? 'Создать' : 'Изменить' }} заметку</h2>
    </div>

    <div id="edit-form">
      <form>
        <div
          v-show="errorText"
          class="form-item error"
        >
          {{ errorText }}
        </div>
        <div class="form-item">
          <label for="name-input">
            Название
          </label>
          <input
            id="name-input"
            key="name"
            type="text"
            v-model="note.name"
          >
        </div>
        <div class="form-item">
          <label>
            Todo список
          </label>
          <ul class="todo-list">
            <li
              class="todo"
              v-for="(todo, i) in note.todos"
              :key="i"
            >
              <Checkbox v-model="todo.checked"/>

              <label class="todo-text">
                <input
                  type="text"
                  :key="todo.i"
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
            @click.prevent="save"
          >
            Сохранить
          </button>
          <button
            class="btn btn-red"
            @click.prevent="showDialog = true"
          >
            Отменить
          </button>
        </div>
      </form>
    </div>

    <ConfirmDialog
      :show="showDialog"
      :on-confirm="cancel"
      :on-cancel="() => showDialog = false"
    >
      Вы уверены?
    </ConfirmDialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Checkbox from '../components/ui-elements/Checkbox.vue';
import ConfirmDialog from '../components/ui-elements/ConfirmDialog.vue';

export default {
  name: 'EditNote',
  components: { ConfirmDialog, Checkbox },
  data: () => ({
    note: {
      name: '',
      todos: [],
    },
    errorText: '',
    showDialog: false,
  }),
  computed: {
    isNewNote() {
      return this.$route.meta.newNote;
    },
  },
  methods: {
    ...mapActions([
      'saveNote',
    ]),
    addTodo() {
      this.note.todos.push({
        text: '',
        checked: false,
      });
    },
    removeTodo(index) {
      this.note.todos.splice(index, 1);
    },
    async save() {
      this.note.name = this.note.name.trim();
      if (!this.note.name.length) {
        this.errorText = 'Название не может быть пустым';
        return;
      }

      if (!this.note.todos.length) {
        this.errorText = 'Необходимо добавить хотя бы один todo пункт';
        return;
      }

      await this.saveNote(this.note);

      this.$router.history.push('/');
    },
    cancel() {
      this.showDialog = false;
      this.$router.history.push('/');
    },
  },
  async created() {
    if (this.isNewNote) {
      return;
    }

    const noteId = this.$route.params.id;
    let { notes } = this.$store.state;
    if (!notes.length) {
      await this.$store.dispatch('getNotes');
      notes = this.$store.state.notes;
    }

    const note = notes[noteId];
    if (!note) {
      this.$router.history.push('/notes/new');
      return;
    }

    this.note = note;
  },
  beforeRouteLeave(from, to, next) {
    this.note = {
      name: '',
      todos: [],
    };
    next();
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

    cursor: pointer;
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

  .error {
    text-align: center;
    padding: 10px;
    border: 5px solid #e74c3c;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
    background-color: #c0392b;
  }
</style>
