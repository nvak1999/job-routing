import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

function LoginPage({ open, handleClose }) {
  const style = {
    bgcolor: "white",
  };
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  function handleSubmit(event) {
    event.preventDefault();

    let from = location.state?.from?.pathname || "/";
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.login(username, () => {
      navigate(from, { replace: true });
    });
  }
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          style,
          mt: 5,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography component="h5" variant="h3" paddingTop={5}>
          LOGIN
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ padding: 5 }}>
          <TextField
            fullWidth
            type={"text"}
            name="username"
            label="User name"
            id="fullWidth"
            sx={{ m: 1 }}
          />
          <TextField
            sx={{ m: 1 }}
            fullWidth
            type={"passWord"}
            label="Password"
            id="fullWidth"
          />
          <Button
            sx={{ m: 1, height: 50 }}
            fullWidth
            variant="outlined"
            onClick={handleClose}
            type="submit"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default LoginPage;
