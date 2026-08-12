import { useState } from "react";
import API from "../services/api";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/", task);

      alert("Task Added Successfully");

      setTask({
        title: "",
        description: "",
        priority: "Medium",
        status: "Pending",
        dueDate: "",
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Error adding task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow mb-4">
      <h3 className="mb-3">Add New Task</h3>

      <input
        className="form-control mb-3"
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <textarea
        className="form-control mb-3"
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        required
      />

      <select
        className="form-select mb-3"
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <select
        className="form-select mb-3"
        name="status"
        value={task.status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <input
        className="form-control mb-3"
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}