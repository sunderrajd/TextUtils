import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Textuils" AboutText="AboutTextutils" />

      <div className="container  my-3">
        {/* <TextForm Heading="Enter the text to anaylize" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
