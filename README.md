# Full Stack Notes Application

This project is a basic **full-stack web application** built using **React for the frontend** and **Node.js with Express for the backend**.
The application allows users to add notes and view them in a simple interface.

---

## Project Structure

```
my_app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── package.json
│   └── src/
│       ├── App.js
│       └── index.js
│
└── README.md
```

---

## Technologies Used

### Frontend

* React
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js
* CORS
* Body-parser

---

## Features

* Add new notes
* View all notes
* Simple REST API
* React frontend communicating with Node.js backend

---

## Backend Setup

1. Navigate to the backend directory

```
cd backend
```

2. Install dependencies

```
npm install
```

3. Start the server

```
node server.js
```

The backend server will run on:

```
http://localhost:5000
```

---

## Frontend Setup

1. Navigate to the frontend directory

```
cd frontend
```

2. Install dependencies

```
npm install
```

3. Start the React application

```
npm start
```

The frontend application will run on:

```
http://localhost:3000
```

---

## API Endpoints

### Get All Notes

```
GET /notes
```

Example Response:

```
[
  {
    "text": "Sample note"
  }
]
```

---

### Add New Note

```
POST /notes
```

Example Request Body:

```
{
  "text": "New note"
}
```

---

## Future Improvements

* Add database integration (MongoDB)
* Add update and delete note functionality
* Implement authentication
* Improve UI design

---

## Author

**Kwinsi Thakkar**

GitHub Repository:
https://github.com/KwinsiSimform/Git_Practical_1
