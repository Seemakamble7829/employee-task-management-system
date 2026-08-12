export default function Navbar() {
  return (
    <nav
      className="navbar navbar-dark bg-dark shadow"
      style={{
        width: "100%",
        padding: "15px 30px",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "100%" }}
      >
        <h2
          className="text-white m-0"
          style={{
            fontWeight: "bold",
            fontSize: "34px",
            letterSpacing: "1px",
          }}
        >
          📋 Employee Task Management System
        </h2>

        <h5 className="text-white m-0">
          Welcome 👋
        </h5>
      </div>
    </nav>
  );
}