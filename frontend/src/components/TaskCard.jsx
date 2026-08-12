import { useState } from "react";
import API from "../services/api";

export default function TaskCard({ task, fetchTasks }) {
  const [isEditing, setIsEditing] = useState(false);

  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    status: task.status,
    dueDate: task.dueDate?.substring(0, 10),
  });

  const updateTask = async () => {
    try {
      await API.put(`/${task._id}`, editedTask);

      alert("Task Updated Successfully");

      setIsEditing(false);
      fetchTasks();
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  const deleteTask = async () => {
    try {
      await API.delete(`/${task._id}`);

      alert("Task Deleted Successfully");

      fetchTasks();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <div className="card shadow mb-3">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              className="form-control mb-2"
              value={editedTask.title}
              onChange={(e) =>
                setEditedTask({
                  ...editedTask,
                  title: e.target.value,
                })
              }
            />

            <textarea
              className="form-control mb-2"
              value={editedTask.description}
              onChange={(e) =>
                setEditedTask({
                  ...editedTask,
                  description: e.target.value,
                })
              }
            />

            <select
              className="form-select mb-2"
              value={editedTask.priority}
              onChange={(e) =>
                setEditedTask({
                  ...editedTask,
                  priority: e.target.value,
                })
              }
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <select
              className="form-select mb-2"
              value={editedTask.status}
              onChange={(e) =>
                setEditedTask({
                  ...editedTask,
                  status: e.target.value,
                })
              }
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

            <input
              className="form-control mb-3"
              type="date"
              value={editedTask.dueDate}
              onChange={(e) =>
                setEditedTask({
                  ...editedTask,
                  dueDate: e.target.value,
                })
              }
            />

            <button
              className="btn btn-success me-2"
              onClick={updateTask}
            >
              Save
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h4>{task.title}</h4>

            <p>{task.description}</p>

            <span className="badge bg-primary me-2">
              {task.priority}
            </span>

            <span
              className={`badge ${
                task.status === "Completed"
                  ? "bg-success"
                  : task.status === "In Progress"
                  ? "bg-info"
                  : "bg-warning text-dark"
              }`}
            >
              {task.status}
            </span>

            <p className="mt-3">
              <strong>Due Date:</strong>{" "}
              {task.dueDate?.substring(0, 10)}
            </p>

            <button
              className="btn btn-warning me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger"
              onClick={deleteTask}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}