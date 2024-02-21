import Component from '../core/Component.js';
import List from './List.js';
import noteService from '../core/NoteService.js';
import NoteEditor from './NoteEditor.js';
import { generateId } from '../core/utils.js';

class NoteCreater extends Component {
    onClick() {
        const id = generateId();
        noteService.create(id);
        List.setActiveNoteId(id);
        NoteEditor.render();
    }
}

export default new NoteCreater({
    selector: 'NoteCreater',
    template: `
        <button id="button">Создать заметку</button>
    `,
    events: {
        'click button': 'onClick'
    }
});