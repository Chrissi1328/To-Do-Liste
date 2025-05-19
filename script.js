let notes = [];

let trashNotes = []

function init() {
    getFromLocalStorage()
    renderNotes()
}

function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = ""

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = ""

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<p id="new_note">+ ${notes[indexNote]}<button id="Trash_button" onclick="noteToTrash(${indexNote})">X</button></p>`
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button></p>`
}

function addNote() {
    let noteInputRef = document.getElementById("note_input");
    let noteInput = noteInputRef.value

    notes.push(noteInput);
    renderNotes();
    saveToLocalStorage()
    noteInputRef.value = "";
}

function noteToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    renderNotes();
    renderTrashNotes();
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("notes"));

    if (myArr === null) {
        notes != myArr
    } else {
        notes = myArr;
    }   
}