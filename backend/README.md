### Published Backend Project
https://v2-minds-backend-srinivas-project.vercel.app

# V2Minds Backend Project

### **Development Environment**:
- Set up your Node.js environment
- Initialize a new Node.js project with `npm init`
- Install necessary packages like `express` for server setup, `sqlite3` for database management

### **Database Design**

- **SQLite**:
    - Create a database file
    - Define a table `notes` with columns: `id`, `content`, `created_at`

### **Backend Development**

- **Setting up the server**:
    - Use Express to set up basic server routes.
- **API Endpoints**:
    - **POST /notes**: For creating new notes. It should accept note content, save it to the database, and return the saved note.
    - **GET /notes**: To fetch all notes from the database.
    - **DELETE /notes/:id**: To delete a specific note by ID.
- **Database Integration**:
    - Connect to the database using appropriate drivers (`sqlite3`).
    - Implement functions to interact with the database (add, retrieve, delete notes).
