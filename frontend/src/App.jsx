import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import TrainerDashboard from "./pages/TrainerDashboard";
import MemberDashboard from "./pages/MemberDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            (() => {
              const token = localStorage.getItem("token");
              const role = localStorage.getItem("role");

              if (!token) return <Navigate to="/login" replace />;
              if (role === "admin") return <Navigate to="/admin" replace />;
              if (role === "trainer") return <Navigate to="/trainer" replace />;
              return <Navigate to="/member" replace />;
            })()
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
            </ProtectedRoute>
          }
        />

    <Route
      path="/trainer"
      element={
        <ProtectedRoute allowedRoles={["trainer", "admin"]}>
          <TrainerDashboard />
        </ProtectedRoute>
      }
    />

    <Route
      path="/member"
      element={
        <ProtectedRoute allowedRoles={["member", "trainer", "admin"]}>
          <MemberDashboard />
        </ProtectedRoute>
      }
    />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
