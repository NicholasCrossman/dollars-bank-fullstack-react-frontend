import "../css/NavbarBank.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logout: {
    marginLeft: "auto",
  },
}));

function NavbarBank() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {/* //home */}
        <Typography variant="h4" className={classes.title}>
          DollarsBank Application
        </Typography>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>

          <IconButton color="inherit">
            {" "}
            <NavLink exact to="/deposit" className="nav-links">
              Deposit
            </NavLink>
          </IconButton>
          {/* <NavLink to="/"> Dashboard </NavLink> */}

          <IconButton color="inherit">
            {" "}
            <NavLink exact to="/withdrawl" className="nav-links">
              Withdraw
            </NavLink>
          </IconButton>

          <IconButton color="inherit">
            {" "}
            <NavLink exact to="/transfer" className="nav-links">
              Transfer
            </NavLink>
          </IconButton>

          <IconButton color="inherit" align="right">
            {" "}
            <NavLink exact to="/passchange" className="nav-links">
              Change Password
            </NavLink>
          </IconButton>
          <IconButton className={classes.logout} color="inherit" align="right">
            {" "}
            <NavLink exact to="/logout" className="nav-links">
              Logout
            </NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavbarBank;
