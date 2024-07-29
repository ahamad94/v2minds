# Note-Taking Application

## Table of Contents

1. [Project Structure](#project-structure)
2. [Frontend](#frontend)
   - [File Structure](#file-structure-frontend)
   - [Components](#components)
   - [Styles](#styles)
3. [Backend](#backend)
   - [File Structure](#file-structure-backend)
   - [APIs](#apis)
   - [Database](#database)
4. [Setup and Installation](#setup-and-installation)
   - [Frontend](#setup-frontend)
   - [Backend](#setup-backend)
5. [Running the Application](#running-the-application)
   - [Running the Backend](#running-the-backend)
   - [Running the Frontend](#running-the-frontend)
6. [Conclusion](#conclusion)

## Project Structure

```
root
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── NoteForm.tsx
│   │   │   ├── NoteList.tsx
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── styles
│   │   │   ├── NoteForm.css
│   │   │   ├── NoteList.css
│   │   │   ├── App.css
│   │   │   ├── index.css
│   ├── package.json
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── noteController.ts
│   │   ├── routes
│   │   │   ├── noteRoutes.ts
│   │   ├── services
│   │   │   ├── noteService.ts
│   │   ├── config
│   │   │   ├── db.ts
│   │   ├── index.ts
│   ├── package.json
├── README.md
```

## Frontend

### File Structure (Frontend)

- `App.tsx`: Main application component.
- `index.tsx`: Entry point for the React application.
- `components/NoteForm.tsx`: Component for creating new notes.
- `components/NoteList.tsx`: Component for listing and deleting notes.
- `styles/NoteForm.css`: Styles for the NoteForm component.
- `styles/NoteList.css`: Styles for the NoteList component.
- `styles/App.css`: General styles for the application.
- `styles/index.css`: Global styles.

### Components

- **NoteForm.tsx**:
  - Handles user input for new notes.
  - Saves notes by sending POST requests to the backend.
- **NoteList.tsx**:
  - Fetches and displays the list of notes from the backend.
  - Handles note deletion by sending DELETE requests to the backend.
- **App.tsx**:
  - Main application component.
  - Manages state for note updates and toggling the note list visibility.

### Styles

- **NoteForm.css**: Styles for the note form including layout, button, and textarea styles.
- **NoteList.css**: Styles for the note list including note item layout and delete button.
- **App.css**: General layout and styles for the application container.
- **index.css**: Global styles for body and other elements.

## Backend

### File Structure (Backend)

- `controllers/noteController.ts`: Handles HTTP requests for note operations.
- `routes/noteRoutes.ts`: Defines API routes for notes.
- `services/noteService.ts`: Contains business logic for note operations.
- `config/db.ts`: Database configuration and connection.
- `index.ts`: Entry point for the Express server.

### APIs

- **GET /api/notes**:

  - Fetches all notes from the database.
  - Response: `200 OK`, `500 Internal Server Error`.

- **POST /api/notes**:

  - Creates a new note with the provided content.
  - Request Body: `{ "content": "Note content" }`
  - Response: `201 Created`, `400 Bad Request`, `500 Internal Server Error`.

- **DELETE /api/notes/:id**:
  - Deletes a note by its ID.
  - Response: `204 No Content`, `500 Internal Server Error`.

### Database

- MySQL database named `examtasks`.
- Table: `notes`
  - Columns: `id` (INT, PRIMARY KEY, AUTO_INCREMENT), `content` (TEXT).

## Setup and Installation

### Setup Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Setup Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure MySQL is running and create the `examtasks` database and `notes` table.

## Running the Application

### Running the Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Start the server:
   ```bash
   npm run dev
   ```
   The backend will be running on `http://localhost:3001`.

### Running the Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Start the React application:
   ```bash
   npm start
   ```
   The frontend will be running on `http://localhost:3000`.

## Conclusion

This note-taking application allows users to create, view, and delete notes. The frontend is built using React and styled with CSS, while the backend uses Node.js, Express, and MySQL for data management. This documentation covers the structure, setup, and running instructions for the project.

```

You can copy the above content into a `README.md` file for your project.
```
