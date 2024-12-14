import {  Routes, Route } from "react-router";
import { Home, About, DashboardHome, DashboardCandidateProfil, LoginRegister, NotFound, DashboardJobList} from "./pages/index";
import HomeLayout from "./layouts/HomeLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import PrivateRoutes from "./components/PrivateRoutes";


function App() {
  

  return (
  <Routes>
    <Route path="/"  element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
    </Route>
    <Route path="/login-register"  element={<AuthLayout />}>
        <Route index element={<LoginRegister />} />
    </Route>
    {/* Protected routes */}
    <Route element={<PrivateRoutes />}>
      <Route path="/dashboard"  element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<DashboardCandidateProfil />} />
        <Route path="jobs" element={<DashboardJobList />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>

  )
}

export default App
