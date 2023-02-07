import React, { useState } from "react";
import SearchAppBar from "./components/SearchAppBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SearchAppBar handleOpen={handleOpen} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/login"
          element={<LoginPage open={open} handleClose={handleClose} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
