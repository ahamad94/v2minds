import React, { useState } from "react";
import axios from "axios";
import "./NoteForm.css"; // Import the CSS file

const NoteForm: React.FC<{ onSave: () => void }> = ({ onSave }) => {
  const [note, setNote] = useState("");

  const handleSave = async () => {
    if (!note.trim()) {
      alert("Note cannot be empty");
      return;
    }

    
    try {
      await axios.post("http://localhost:3002/notes", { content: note });
      setNote(""); // Clear the textarea
      onSave(); // Trigger refresh of the notes list
    } catch (error) {
      console.error("Failed to save note", error);
      alert("Failed to save note");
    }
  };

  return (
    <div className="note-form">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter your note here..."
      />
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
};

export default NoteForm;
