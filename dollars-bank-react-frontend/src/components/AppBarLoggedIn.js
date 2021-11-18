import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
// import { NavLink } from "react-router-dom";

// import MenuIcon from "@material-ui/icons/Menu";

export default function AppBarLoggedIn() {
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
              Make a Deposit
            </NavLink>
          </IconButton>

          <IconButton color="inherit">Withdraw</IconButton>

          <IconButton color="inherit">Transfer</IconButton>

          <IconButton color="inherit">Transaction-History</IconButton>

          <IconButton color="inherit">Account-Info</IconButton>

          <IconButton className={classes.logout} color="inherit" align="right">
            Logout
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
