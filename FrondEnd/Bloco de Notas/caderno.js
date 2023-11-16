document.addEventListener("DOMContentLoaded", function () {
    loadNotes();
});

function addNote() {
    var noteInput = document.getElementById("noteInput");
    var noteText = noteInput.value.trim();

    if (noteText !== "") {
        saveNote(noteText);
        noteInput.value = "";
        loadNotes();
    }
}

function saveNote(note) {
    var notes = getNotes();
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getNotes() {
    var notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
}

function loadNotes() {
    var notes = getNotes();
    var noteList = document.getElementById("noteList");
    noteList.innerHTML = "";

    notes.forEach(function (note) {
        var li = document.createElement("li");
        li.textContent = note;
        noteList.appendChild(li);
    });
}
