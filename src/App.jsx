import Sidebar from "./pages/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Customer from "./pages/Customer";
import ProfileBarberMan from "./pages/ProfileBarberMan";
import ScheduleTable from "./pages/ScheduleTable";
import FormRegistrasi from "./pages/FormRegistrasi";
import Inventory from "./pages/Inventory";
import TambahInventory from "./pages/TambahInventory";
import ContactUsForm from "./pages/ContactUsForm";

const App = () => {
  return (
    <Router>
      <div className="flex bg-third">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/barberman" element={<ProfileBarberMan />} />
            <Route path="/schedule" element={<ScheduleTable />} />
            <Route path="/form-registrasi" element={<FormRegistrasi />} />
            <Route path="/tambah-inventory" element={<TambahInventory />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/contact" element={<ContactUsForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
