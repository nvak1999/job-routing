import React, { useState } from "react";
import SearchAppBar from "./components/SearchAppBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [openJob, setOpenJob] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setName(username);
  };

  const handleOpenJob = (link) => {
    setOpenJob(true);
  };

  const handleCloseJob = () => {
    setOpenJob(false);
    navigate("/");
  };
  return (
    <div>
      <SearchAppBar
        handleOpen={handleOpen}
        username={username}
        setUsername={setUsername}
        name={name}
        setName={setName}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              username={username}
              handleOpen={handleOpen}
              handleOpenJob={handleOpenJob}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <LoginPage
              open={open}
              handleClose={handleClose}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        ></Route>
        <Route
          path="/job/:jobId"
          element={
            <DetailPage openJob={openJob} handleCloseJob={handleCloseJob} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
