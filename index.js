// Fake in-memory database
let notes = [
  { id: 1, title: "First Note", content: "This is the first note" },
  { id: 2, title: "Second Note", content: "This is the second note" },
];

const getAllNotes = () => notes;

const getNoteById = (id) => notes.find((note) => note.id === parseInt(id));

const createNote = (data) => {
  const newNote = {
    id: notes.length + 1,
    ...data,
  };
  notes.push(newNote);
  return newNote;
};

const updateNote = (id, data) => {
  const index = notes.findIndex((note) => note.id === parseInt(id));

  if (index === -1) return null;

  notes[index] = { ...notes[index], ...data };
  return notes[index];
};

const deleteNote = (id) => {
  const index = notes.findIndex((note) => note.id === parseInt(id));

  if (index === -1) return null;

  const deleted = notes[index];
  notes.splice(index, 1);
  return deleted;
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
