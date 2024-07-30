import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Gallery from "./Pages/Gallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;