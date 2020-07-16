<template>
  <Row>
    <Column
      :sm="3"
      :md="2"
      :lg="1"
      v-for="note in notes"
      :key="note.id"
    >
      <NoteItem
        :name="note.name"
        :todos="note.todos"
      />
    </Column>
  </Row>
</template>

<script>
import Row from '../components/ui-elements/Row.vue';
import Column from '../components/ui-elements/Column.vue';
import NoteItem from '../components/NoteItem.vue';

export default {
  name: 'Home',
  components: {
    NoteItem,
    Column,
    Row,
  },
  data: () => ({
    notes: [
      {
        id: 1,
        name: 'kek',
        todos: [
          {
            text: 'kek1',
            checked: true,
          },
          {
            text: 'kek2',
            checked: false,
          },
          {
            text: 'kek3',
            checked: true,
          },
        ],
      },
      {
        id: 2,
        name: 'lol',
        todos: [
          {
            text: 'lol1',
            checked: true,
          },
          {
            text: 'lol2',
            checked: false,
          },
          {
            text: 'lol3',
            checked: true,
          },
        ],
      },
      {
        id: 3,
        name: 'lol',
        todos: [
          {
            text: 'lol1',
            checked: true,
          },
          {
            text: 'lol2',
            checked: false,
          },
          {
            text: 'lol3',
            checked: true,
          },
        ],
      },
      {
        id: 4,
        name: 'lol',
        todos: [
          {
            text: 'lol1',
            checked: true,
          },
          {
            text: 'lol2',
            checked: false,
          },
          {
            text: 'lol3',
            checked: true,
          },
        ],
      },
      {
        id: 5,
        name: 'lol',
        todos: [
          {
            text: 'lol1',
            checked: true,
          },
          {
            text: 'lol2',
            checked: false,
          },
          {
            text: 'lol3',
            checked: true,
          },
        ],
      },
    ],
  }),
};
</script>
