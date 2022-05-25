import AboutUs from "./pages/AboutUs";
// Importing global style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/work" element={<OurWork  />} />
        <Route path="/work/:url" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
