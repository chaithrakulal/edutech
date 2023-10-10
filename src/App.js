import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/common/Navbar/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./Components/core/About";
import Home from "./Components/core/Home";
import Contact from "./Components/core/Contact";
import GlobalUserContextProvider from "./Context/GlobalUserContext";
import RandomUseContextTest from "./RandomUseContextTest";

function App() {
  return (
    <div className="w-screen min-h-screen bg-offwhite-900 flex flex-col font-inter">
      <Navbar />
      <GlobalUserContextProvider>
        {/* <RandomUseContextTest /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </GlobalUserContextProvider>
    </div>
  );
}

export default App;
