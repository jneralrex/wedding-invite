import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import Gallery from "./Pages/Gallery";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/wedding-invite" element={<Header />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="gallery" element={<Gallery />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
