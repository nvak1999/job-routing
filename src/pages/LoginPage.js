import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
function LoginPage({
  open,
  handleClose,
  username,
  setUsername,
  password,
  setPassword,
}) {
  const style = {
    bgcolor: "white",
  };

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
        <Box component="form" sx={{ padding: 5 }}>
          <TextField
            fullWidth
            type={"text"}
            name="username"
            label="User name"
            id="fullWidth"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            sx={{ m: 1 }}
          />
          <TextField
            sx={{ m: 1 }}
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            type={"passWord"}
            label="Password"
            id="fullWidth"
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              sx={{ m: 1, height: 50 }}
              fullWidth
              variant="outlined"
              onClick={handleClose}
              type="submit"
            >
              Login
            </Button>
          </Link>
        </Box>
      </Box>
    </Modal>
  );
}

export default LoginPage;
