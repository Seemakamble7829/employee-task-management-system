📋 Employee Task Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js)** web application that enables efficient employee task management. The system allows users to create, update, delete, search, and organize tasks with an intuitive dashboard and responsive interface.

---

 🚀 Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- 🔍 Search tasks by title
- 🎯 Filter tasks by priority
- 📊 Dashboard with task statistics
- 📅 Due date management
- 📌 Task status tracking (Pending, In Progress, Completed)
- 📱 Responsive Bootstrap UI
- ☁️ MongoDB database integration

---

 🛠️ Tech Stack

 Frontend
- React.js
- Bootstrap 5
- Axios
- Vite

 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

 Database
- MongoDB

---

 📂 Project Structure

```
Employee Task Management System
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

⚙️ Installation & Setup

1️⃣ Clone the Repository

```bash
git clone https://github.com/Seemakamble7829/employee-task-management-system.git
```

 2️⃣ Navigate to the Project

```bash
cd employee-task-management-system
```

---

 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the **backend** folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend server:

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## Frontend Setup

Open a new terminal.

```bash
cd frontend
npm install
npm run dev
```

Application runs at:

```
http://localhost:5173
```

---

Dashboard

> Add a screenshot here

 Add Task

> Add a screenshot here

 Task List

> Add a screenshot here

 Search & Filter

> Add a screenshot here

---

 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |


---

 👨‍💻 Author

Seema A K

GitHub:
https://github.com/Seemakamble7829/employee-task-management-system


