const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let notes = []; // Temporary in-memory storage

// Routes
app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const note = req.body;
  notes.push(note);
  res.status(201).json(note);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
