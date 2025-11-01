import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout";
import AdminLayout from "./shared/layouts/AdminLayout";
import HomePage from "./features/home/HomePage";
import AboutPage from "./features/about/AboutPage";
import ServicesPage from "./features/services/ServicesPage";
import ContactPage from "./features/contact/ContactPage";
import AdminLoginPage from "./features/admin/AdminLoginPage";
import AdminDashboardPage from "./features/admin/AdminDashboardPage";
import FaqPage from "./features/faq/FaqPage";
import MentionsLegalesPage from "./features/legal/MentionsLegalesPage";
import PrivacyPolicyPage from "./features/legal/PrivacyPolicyPage";

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
          <Route path="faq" element={<FaqPage />} />
          <Route path="mentions-legales" element={<MentionsLegalesPage />} />
          <Route
            path="politique-confidentialite"
            element={<PrivacyPolicyPage />}
          />
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
