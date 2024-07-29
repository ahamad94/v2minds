const express = require("express");
const path = require("path");
const cors = require("cors");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, "database.db");

let db = null;

const initializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });

        app.listen(3002, () => {
            console.log("Server is Running at http://localhost:3002/");
        });
    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    }
}

initializeDBAndServer();

// POST /notes: For creating new notes. It should accept note content, save it to the database in the notes table, 
// and return the saved note.
app.post("/notes", async (request, response) => {
    try {
        const { content } = request.body;
        const createNoteQuery = `INSERT INTO notes(content) VALUES(?);`;
        await db.run(createNoteQuery, [content]);
        response.status(200).send("Note added successfully!");
    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        response.status(500).send("An error occured while adding the notes");
    }
});

// GET /notes: To fetch all notes from the database.
app.get("/notes", async (request, response) => {
    try {
        const getNotesQuery = `SELECT * FROM notes;`;
        const notesArray = await db.all(getNotesQuery);
        response.status(200).send(notesArray);
    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        response.status(500).send("An error occured while fetching the notes");
    }
});

// DELETE /notes/:id: To delete a specific note by ID.
app.delete("/notes/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const deleteNoteQuery = `DELETE FROM notes WHERE id = ?;`;
        await db.run(deleteNoteQuery, [id]);
        response.status(200).send("Note deleted successfully!");
    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        response.status(500).send("An error occured while deleting the note");
    }
});

app.get("/", (request, response) => {
    try {
        response.send("Welcome! This is a V2Minds Company Assignment.Please access any path to get the data.");
    } catch (e) {
        console.log(e.message);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;