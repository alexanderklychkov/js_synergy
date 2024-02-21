import { generateId } from './utils.js';

class NoteService {
    create(id = generateId()) {
        const notes = this.notes;
        notes.push({
            id,
            title: 'Новая заметка',
            content: '',
            createdAt: new Date().toLocaleDateString()
        });

        this._setNotesInStorage(notes);
    }

    update(obj) {
        const notes = this.notes.map((note) => {
            if (note.id === Number(obj.id)) {
                return {
                    ...note,
                    title: obj.title,
                    content: obj.content
                }
            }

            return note;
        });

        this._setNotesInStorage(notes);
    }

    remove(id) {
        this._setNotesInStorage(this.notes.filter((el) => el.id !== Number(id)));
    }

    getNoteById(id) {
        return this.notes?.find((el) => el.id === Number(id));
    }

    get notes() {
        return JSON.parse(localStorage.getItem('notes') || '[]') || [];
    }

    _setNotesInStorage(notes) {
        localStorage.setItem('notes', JSON.stringify(notes));
    }
}

export default new NoteService();