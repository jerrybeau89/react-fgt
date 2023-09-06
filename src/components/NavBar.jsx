import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import Switch from "@mui/material/Switch";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Favorites from "../pages/Favorites";
import Profile from "../pages/Profile";
import About from "../pages/About";

import FGT from "../assets/images/FGTH.png"
import { Link } from "react-router-dom";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElTwo, setAnchorElTwo] = React.useState(null);
  
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuTwo = (event) => {
      setAnchorElTwo(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElTwo(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar className="header">
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Profile />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Favorites />
                </MenuItem>
              </Menu>
            </div>
          )}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, color: "yellow" }}
          >
            Fried Green T
            <img className="fgt-img" src={FGT} />
            mat
            <img className="fgt-img" src={FGT} />
            es
          </Typography>
          <IconButton
            size="large"
            aria-label="account menu"
            aria-controls="menu-appbar2"
            aria-haspopup="true"
            onClick={handleMenuTwo}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar2"
            anchorEl={anchorElTwo}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElTwo)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/Home" onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/About" onClick={handleClose}>
              About
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}