import Component from '../core/Component.js';
import noteService from '../core/NoteService.js';
import NoteEditor from './NoteEditor.js';

class List extends Component {
    activeNote(event) {
        this._currentNoteId = Number(event.currentTarget.getAttribute('data-id'));
        this.render();
        NoteEditor.render();
    }

    removeNote(event) {
        event.stopPropagation();
        const noteId = Number(event.currentTarget.parentElement.parentElement.getAttribute('data-id'));

        if (noteId === this._currentNoteId) {
            this._currentNoteId = null;
            NoteEditor.render();
        }

        noteService.remove(noteId);
        this.render();
    }

    getActiveNoteId() {
        return this._currentNoteId;
    }

    setActiveNoteId(id) {
        this._currentNoteId = id;
        this.render();
    }
}

function getList() {
    const notes = noteService.notes;
    const activeNoteId = list.getActiveNoteId();

    if (!notes?.length) {
        return `
            <div class="list_empty">
                Нет заметок
            </div>
        `
    }

    return `
        ${notes.map((el) => {
            return `
                    <div class="list_item" data-id="${el.id}">
                        ${activeNoteId === el.id ? '<div class="list_item-checked"></div>' : ''}
                        <div class="list_item-head" title="${el.title}">
                            <span class="list_item-title">${el.title}</span>
                            <span class="list_item-created">${el.createdAt}</span>
                        </div>
                        <div class="list_item-content" title="${el.content}">${el.content}</div>
                        
                        <div class="list_item-actions">
                            <div class="list_item-remove"></div>
                        </div>
                    </div>
                `;
        }).join('')}
    `;
}

const list = new List({
    data: {
        getList
    },
    selector: 'List',
    template: `
            <div class="list">
                {{ getList() }}
            </div> 
        `,
    events: {
        'click .list_item': 'activeNote',
        'click .list_item-remove': 'removeNote'
    }
});

export default list;