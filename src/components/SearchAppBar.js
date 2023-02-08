import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function SearchAppBar({
  handleOpen,
  username,
  setUsername,
  name,
  setName,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Job Routing
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {name.slice(0, 8)}
          </Typography>
          <LoginIcon sx={{ ml: 2 }} />
          {!username ? (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button onClick={handleOpen} variant="outlined">
                Sign in
              </Button>
            </Link>
          ) : (
            <Button
              onClick={() => {
                setUsername("");
                setName("");
              }}
              variant="outlined"
            >
              Sign out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
