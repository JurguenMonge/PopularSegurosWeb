//Libraries
import { Navigate, Route, Routes } from "react-router-dom";

//Pages/Views
import Login from "../pages/auth/Login";
import CreateAccount from "../pages/auth/CreateAccount";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create_account" element={<CreateAccount />} />
      <Route path="*" element={<Navigate to='/' replace />} />
    </Routes>
  );
}
