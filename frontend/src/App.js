import React, { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  const addNote = () => {
    fetch('http://localhost:5000/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newNote })
    })
      .then(res => res.json())
      .then(note => {
        setNotes([...notes, note]);
        setNewNote('');
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Notes App</h1>
      <input
        value={newNote}
        onChange={e => setNewNote(e.target.value)}
        placeholder="Enter note"
      />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
