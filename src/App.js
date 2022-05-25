import AboutUs from "./pages/AboutUs";
// Importing global style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
