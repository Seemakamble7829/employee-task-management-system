export default function Dashboard({ tasks }) {
  const total = tasks.length;

  const pending = tasks.filter(
    (t) => t.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (t) => t.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (t) => t.status === "Completed"
  ).length;

  return (
    <div className="row g-3 mb-4">

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card bg-primary text-white shadow h-100">
          <div className="card-body text-center">
            <h2>{total}</h2>
            <h5>Total Tasks</h5>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card bg-warning shadow h-100">
          <div className="card-body text-center">
            <h2>{pending}</h2>
            <h5>Pending</h5>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card bg-info text-white shadow h-100">
          <div className="card-body text-center">
            <h2>{progress}</h2>
            <h5>In Progress</h5>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card bg-success text-white shadow h-100">
          <div className="card-body text-center">
            <h2>{completed}</h2>
            <h5>Completed</h5>
          </div>
        </div>
      </div>

    </div>
  );
}