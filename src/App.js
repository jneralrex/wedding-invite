import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
return(
    <div className="App">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path="/" element={<HomePage/>} exact/>
    </Routes> 
    </BrowserRouter>

  </div>
)
}

export default App;
