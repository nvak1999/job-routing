import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

function LoginPage() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        mt: 5,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" onSubmit={onSubmit}>
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

        <Button sx={{ m: 1, height: 50 }} fullWidth variant="outlined">
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default LoginPage;
