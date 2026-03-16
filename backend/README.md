# Notes App Backend

This is the **backend server** for the Notes Application.
It is built using **Node.js and Express.js** and provides REST API endpoints for creating and retrieving notes.

The backend communicates with the React frontend to manage notes.

---

## Technologies Used

* Node.js
* Express.js
* CORS
* Body-parser
* JavaScript

---

## Project Structure

```
backend/
│
├── server.js
├── package.json
└── README.md
```

---

## Installation

1. Navigate to the backend directory

```
cd backend
```

2. Install the required dependencies

```
npm install
```

---

## Running the Server

Start the backend server using:

```
node server.js
```

The server will start on:

```
http://localhost:5000
```

---

## API Endpoints

### Get All Notes

**Endpoint**

```
GET /notes
```

**Description**

Returns the list of all notes.

**Example Response**

```
[
  {
    "text": "Sample note"
  }
]
```

---

### Add a New Note

**Endpoint**

```
POST /notes
```

**Description**

Adds a new note to the list.

**Request Body**

```
{
  "text": "New note"
}
```

---

## Future Improvements

* Integrate a database such as MongoDB
* Add update and delete note functionality
* Implement proper error handling
* Add user authentication

---

## Author

Kwinsi Thakkar
