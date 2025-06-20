// Initialize notes array
let notes = [];

// DOM elements
const noteTitleInput = document.getElementById('note-title');
const noteBodyInput = document.getElementById('note-body');
const addNoteBtn = document.getElementById('add-note-btn');
const notesContainer = document.getElementById('notes-contaier');

// Function to render all notes
function renderNotes() {
  // Clear the container
  notesContainer.innerHTML = '';

  // Map through notes array and create note cards
  notes.map((note, index) => {
    // Create note card
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');

    // Create title
    const title = document.createElement('h3');
    title.textContent = note.title;

    // Create body
    const body = document.createElement('p');
    body.textContent = note.body;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteNote(index));

    // Append elements to note card
    noteCard.appendChild(title);
    noteCard.appendChild(body);
    noteCard.appendChild(deleteBtn);

    // Append note card to container
    notesContainer.appendChild(noteCard);
  });
}

// Function to add a new note
function addNote() {
  const title = noteTitleInput.value.trim();
  const body = noteBodyInput.value.trim();

  // Validate inputs
  if (!title || !body) {
    alert('Please fill in both title and body.');
    return;
  }

  // Create new note object
  const newNote = {
    title,
    body,
  };

  // Add to notes array
  notes.push(newNote);

  // Clear input fields
  noteTitleInput.value = '';
  noteBodyInput.value = '';

  // Re-render notes
  renderNotes();
}

// Function to delete a note
function deleteNote(index) {
  // Remove note from array
  notes.splice(index, 1);

  // Re-render notes
  renderNotes();
}

// Event listener for Add Note button
addNoteBtn.addEventListener('click', addNote);

// Initial render
renderNotes();
