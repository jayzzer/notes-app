import Vue from 'vue';
import Vuex from 'vuex';
import db from '../db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: {},
  },
  mutations: {
    SET_NOTES(state, notes) {
      state.notes = notes;
    },
  },
  actions: {
    saveNote(ctx, note) {
      return db.saveNote(note);
    },
    async getNotes({ commit }) {
      const notes = await db.getNotes();
      commit('SET_NOTES', notes);
    },
    removeNote(ctx, id) {
      return db.deleteNote(id);
    },
  },
});
