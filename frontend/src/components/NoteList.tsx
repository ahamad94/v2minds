import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NoteList.css"; // Ensure the CSS file is imported

interface Note {
  id: number;
  content: string;
}

interface NoteListProps {
  refresh: number;
}

const NoteList: React.FC<NoteListProps> = ({ refresh }) => {
  const [notes, setNotes] = useState<Note[]>([]);



  const fetchNotes = async () => {
    
    
    try {
      const response = await axios.get("http://localhost:3002/notes");
       console.log(response);
      setNotes(response.data);
    } catch (error) {
      console.error("Failed to fetch notes", error);
    }
  };
 


  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3002/notes/${id}`);
      fetchNotes(); // Re-fetch notes after deletion
    } catch (error) {
      console.error("Failed to delete note", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [refresh]);

  return (
    <div className="note-list-container">
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id} className="note">
            <button
              className="delete-button"
              onClick={() => handleDelete(note.id)}
            >
              &times;
            </button>
            <span className="note-content">{note.content}</span>
          </div>
        ))
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default NoteList;
