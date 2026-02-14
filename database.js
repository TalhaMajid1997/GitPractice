const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

// GET all notes
router.get("/", noteController.getNotes);

// GET single note
router.get("/:id", noteController.getNote);

// POST create note
router.post("/", noteController.createNote);

// PUT update note
router.put("/:id", noteController.updateNote);

// DELETE note
router.delete("/:id", noteController.deleteNote);

module.exports = router;
