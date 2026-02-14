const Note = require("../models/noteModel");

const getNotes = (req, res) => {
  const notes = Note.getAllNotes();
  res.json(notes);
};

const getNote = (req, res) => {
  const note = Note.getNoteById(req.params.id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
};

const createNote = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content required" });
  }

  const newNote = Note.createNote({ title, content });
  res.status(201).json(newNote);
};

const updateNote = (req, res) => {
  const updated = Note.updateNote(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(updated);
};

const deleteNote = (req, res) => {
  const deleted = Note.deleteNote(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json({ message: "Note deleted", deleted });
};

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
