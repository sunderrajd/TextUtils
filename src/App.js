import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" AboutText="About TextUtils" />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={<TextForm Heading="Enter the text to analyze" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
