const add = document.querySelector('#btn');
const main = document.querySelector('#main');
const input = document.querySelector('.text');

const saveNotes = () => {
    const notes = document.querySelectorAll('.note textarea');
    const notesArray = [];

    notes.forEach(note => {
        notesArray.push(note.value);
    });

    if (notesArray.length === 0){
        localStorage.removeItem('notes');
    }
    else {
    localStorage.setItem('notes', JSON.stringify(notesArray));
    }
}

add.addEventListener("click", () => {
    addNote();
});

const addNote = (text = "") => {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="tool">
        <i class="save fa-solid fa-floppy-disk"></i>
        <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea class="text">${text}</textarea>
    `;

    note.querySelector('.trash').addEventListener('click', () => {
        note.remove();
        saveNotes();
    });

    note.querySelector('.save').addEventListener('click', () => {
        saveNotes();
    });

    note.querySelector('textarea').addEventListener('focusout', () => {
        saveNotes();
    });

    main.appendChild(note);
    saveNotes();
}

(
    function(){
        const localnotes = JSON.parse(localStorage.getItem('notes'));
        if (localnotes == null){
            addNote();
        }
        else {
            localnotes.forEach (localnotes => {
                addNote(localnotes);
            });
        }

    }
)()