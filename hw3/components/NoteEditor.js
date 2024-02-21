import Component from '../core/Component.js';
import List from './List.js';
import noteService from '../core/NoteService.js';

class NoteEditor extends Component {
    inputChanged(event) {
        const note = getNote();
        let value = event.target.value;

        if (!value) {
            value = 'Заметка';
            event.target.value = value;
        }

        note.title = value;
        noteService.update(note);
        List.render();
    }

    areaChanged(event) {
        const note = getNote();

        note.content = event.target.value;
        noteService.update(note);
        List.render();
    }
}

function getNote() {
    return noteService.getNoteById(List.getActiveNoteId());
}

function getActiveNote() {
    const note = getNote();

    if (!note) {
        return `
            <div class="editor_empty">
                <h2>Ничего не выбрано</h2>
            </div>
        `
    }

    return `
        <input class="editor_title" type="text" value="${note.title}" placeholder="Название..." maxlength="50" />
        <textarea class="editor_area" placeholder="Описание..." maxlength="500">${note.content}</textarea>
    `;
}

export default new NoteEditor({
    data: {
        getActiveNote
    },
    selector: 'NoteEditor',
    template: `
        <div class="editor_wrapper">
            {{getActiveNote()}}
        </div>
    `,
    events: {
        'change input': 'inputChanged',
        'change textarea': 'areaChanged'
    }
});