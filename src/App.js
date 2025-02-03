import { Routes, Route } from "react-router-dom";
import Header from "./NavbarComponent/Header";
import AboutUs from "./PageComponent/AboutUs";
import ContactUs from "./PageComponent/ContactUs";
import HomePage from "./PageComponent/HomePage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
