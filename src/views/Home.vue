<template>
  <Row>
    <Column
      :xs="6"
      :sm="3"
      :md="2"
      :lg="1"
      v-for="note in notes"
      :key="note.id"
    >
      <NoteItem
        :note="note"
        @clickDelete="onNoteDelete(note.id)"
      />
    </Column>

    <ConfirmDialog
      :show="showDialog"
      :on-confirm="deleteNote"
      :on-cancel="() => showDialog = false"
    >
      Вы уверены?
    </ConfirmDialog>
  </Row>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Row from '../components/ui-elements/Row.vue';
import Column from '../components/ui-elements/Column.vue';
import NoteItem from '../components/NoteItem.vue';
import ConfirmDialog from '../components/ui-elements/ConfirmDialog.vue';

export default {
  name: 'Home',
  components: {
    ConfirmDialog,
    NoteItem,
    Column,
    Row,
  },
  data: () => ({
    deleteId: 0,
    showDialog: false,
  }),
  computed: {
    ...mapState([
      'notes',
    ]),
  },
  methods: {
    ...mapActions([
      'getNotes',
      'removeNote',
    ]),
    onNoteDelete(id) {
      this.deleteId = id;
      this.showDialog = true;
    },
    deleteNote() {
      this.removeNote(this.deleteId);
      this.getNotes();

      this.showDialog = false;
    },
  },
  created() {
    this.getNotes();
  },
};
</script>
