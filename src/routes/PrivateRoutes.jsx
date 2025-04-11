//Libraries
import { Navigate, Route, Routes } from "react-router-dom";

//Layout
import Layout from "../layout/Layout";

//Pages/Views
import Policy from "../pages/Policy/Policy";
import Clients from "../pages/clients/Clients";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/Policy" element={<Policy /> } index/>
        <Route path="/clients" element={<Clients />} />
      </Route>
      <Route path="*" element={<Navigate to='/Policy' replace />} />
    </Routes>
  );
}
