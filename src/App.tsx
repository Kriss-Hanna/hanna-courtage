import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout";
import AdminLayout from "./shared/layouts/AdminLayout";
import HomePage from "./features/home/HomePage";
import AboutPage from "./features/about/AboutPage";
import ServicesPage from "./features/services/ServicesPage";
import ContactPage from "./features/contact/ContactPage";
import AdminLoginPage from "./features/admin/AdminLoginPage";
import AdminDashboardPage from "./features/admin/AdminDashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout transparentHeader={true} />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        {/* Routes d'administration */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminLoginPage />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
