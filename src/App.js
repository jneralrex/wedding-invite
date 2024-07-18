import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;