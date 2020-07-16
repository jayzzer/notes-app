const DB_NAME = 'notesdb';
const STORAGE_NAME = 'notes';
const DB_VERSION = 1;
let DB;

async function getDb() {
  // eslint-disable-next-line consistent-return
  return new Promise((resolve, reject) => {
    if (DB) {
      return resolve(DB);
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = (e) => {
      console.log('Error opening db', e);

      reject(e);
    };
    request.onsuccess = (e) => {
      DB = e.target.result;
      resolve(DB);
    };
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      db.createObjectStore(STORAGE_NAME, {
        autoIncrement: true,
        keyPath: 'id',
      });
    };
  });
}

export default {
  async deleteNote(id) {
    const db = await getDb();

    return new Promise((resolve) => {
      const trans = db.transaction([STORAGE_NAME], 'readwrite');
      trans.oncomplete = () => {
        resolve();
      };
      const store = trans.objectStore(STORAGE_NAME);
      store.delete(id);
    });
  },
  async getNotes() {
    const db = await getDb();

    return new Promise((resolve) => {
      const trans = db.transaction([STORAGE_NAME], 'readonly');
      const notes = [];
      trans.oncomplete = () => {
        resolve(notes);
      };

      const store = trans.objectStore(STORAGE_NAME);
      store.openCursor().onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          notes.push(cursor.value);
          cursor.continue();
        }
      };
    });
  },
  async saveNote(note) {
    const db = await getDb();
    return new Promise((resolve) => {
      const trans = db.transaction([STORAGE_NAME], 'readwrite');
      trans.oncomplete = () => {
        resolve();
      };
      const store = trans.objectStore(STORAGE_NAME);
      store.put(note);
    });
  },
};
