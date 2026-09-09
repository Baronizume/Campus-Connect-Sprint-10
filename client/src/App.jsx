import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import StudentRegistration from "./pages/StudentRegistration";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav>
        <h2>Campus Connect</h2>

        <div>
          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("dashboard")}>
            Dashboard
          </button>

          <button onClick={() => setPage("login")}>
            Login
          </button>
        </div>
      </nav>

      {page === "home" && <Home />}

      {page === "dashboard" && <Dashboard />}

      {page === "login" && (
        <Login onRegister={() => setPage("register")} />
      )}

      {page === "register" && (
        <StudentRegistration />
      )}
    </div>
  );
}

export default App;