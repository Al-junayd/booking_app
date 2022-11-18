import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyListings from "./pages/PropertyListings";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<PropertyListings />}></Route>
        <Route path="/hotels/:id" element={<PropertyDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
