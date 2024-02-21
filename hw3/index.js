import Core from './core/Core.js';
import AppMain from './components/AppMain.js';
import Wrapper from './components/Wrapper.js';
import List from './components/List.js';
import NoteCreater from './components/NoteCreater.js';
import NoteEditor from './components/NoteEditor.js';

const core = new Core({
    root: AppMain,
    components: [
        Wrapper,
        List,
        NoteCreater,
        NoteEditor
    ]
});

core.start();
