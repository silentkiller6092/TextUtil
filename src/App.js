import { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  const [darkmode, setdarkmode] = useState("light");
  const toggleMode = () => {
    if (darkmode == "light") {
      setdarkmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils Dark Mode";
    } else {
      setdarkmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils Light Mode";
    }
  };
  return (
    <>
      <NavBar title="TextUtils" mode={darkmode} toogleMode={toggleMode} />

      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={darkmode} />
      </div>
    </>
  );
}

export default App;
