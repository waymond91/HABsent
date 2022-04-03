import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function Page1() {
  return (
    <div className="App">
      <h1>Page 1</h1>
      <h2>Hopefully this shows how routing works</h2>
    </div>
  );
}

function NoPage() {
  return (
    <div className="App">
      <h1>404</h1>
      <h2>You've gone off the grid!</h2>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
