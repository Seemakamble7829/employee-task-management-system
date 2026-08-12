import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/");
      setTasks(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPriority =
      priorityFilter === "All" ||
      task.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  return (
    <>
      <Navbar />

      <div className="container py-4">

        <h2 className="text-center mb-4">
          Dashboard
        </h2>

        <Dashboard tasks={tasks} />

        <div className="row justify-content-center my-4">
          <div className="col-lg-8">
            <TaskForm />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-8 mb-2">
            <input
              className="form-control"
              type="text"
              placeholder="🔍 Search Task..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="All">All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <h3 className="mb-3">All Tasks</h3>

        {filteredTasks.length === 0 ? (
          <div className="alert alert-warning text-center">
            No Tasks Found
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              fetchTasks={fetchTasks}
            />
          ))
        )}

      </div>
    </>
  );
}