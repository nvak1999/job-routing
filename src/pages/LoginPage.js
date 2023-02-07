import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

function LoginPage({ open, handleClose, handleSubmit }) {
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
        <Box component="form" onSubmit={handleSubmit} sx={{ padding: 5 }}>
          <TextField
            fullWidth
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
          >
            Login
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default LoginPage;
