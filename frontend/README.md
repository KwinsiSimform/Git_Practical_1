# Notes App - Frontend

This is the **frontend** of the Notes Application built using **React**.
It provides a simple user interface where users can add notes and view the list of notes.

The frontend communicates with the backend REST API to fetch and store notes.

---

## Technologies Used

* React
* JavaScript
* HTML
* CSS
* Fetch API

---

## Features

* Add new notes
* Display list of notes
* Communicate with backend API
* Simple and clean UI

---

## Project Structure

```
frontend/
│
├── public/
├── src/
│   ├── App.js
│   ├── index.js
│
├── package.json
└── README.md
```

---

## Installation

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start the React development server:

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## Backend Connection

The frontend communicates with the backend API running at:

```
http://localhost:5000
```

API endpoints used:

* **GET /notes** → Fetch all notes
* **POST /notes** → Add a new note

---

## Future Improvements

* Improve UI with better styling
* Add edit and delete notes functionality
* Add form validation
* Add user authentication
