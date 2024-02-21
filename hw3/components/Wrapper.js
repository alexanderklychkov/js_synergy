import Component from '../core/Component.js';

class Wrapper extends Component {
}

export default new Wrapper({
    selector: 'Wrapper',
    template: `
            <div class="wrapper">
                <h1 class="logo">Notes</h1>
                <div class="content">
                    <div class="left">
                        <div class="left-top">
                            <div class="header">
                                <NoteCreater/>
                            </div>
                            <List></List>
                        </div>
                        
                        <div class="footer">
                            by Alexander Klychkov (c) ${new Date().getFullYear()}
                        </div>
                    </div>
                    <div class="right">
                        <NoteEditor/>
                    </div>
                </div>
            </div>
        `
});