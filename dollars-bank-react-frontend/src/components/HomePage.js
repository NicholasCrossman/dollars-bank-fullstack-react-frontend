import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import Button from "@restart/ui/esm/Button";

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

    color: "red",
  },
}));

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        {/* //home */}
        <Typography variant="h4" id="dollarsbank" className={classes.title}>
          DollarsBank
        </Typography>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <HomeIcon />
            </Link>
          </IconButton>

          <IconButton color="inherit" align="right">
            <nav>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </nav>
          </IconButton>
          <IconButton color="inherit" align="right">
            <nav>
              <Link
                to="/create"
                style={{ textDecoration: "none", color: "white" }}
              >
                Create Account
              </Link>
            </nav>
          </IconButton>
        </Toolbar>
      </AppBar>

      <div>
        <Card sx={{ maxWidth: 50 }}>
          <span class="material-icons icons">perm_identity</span>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Create an Account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Set up an account with a username and password to become a member
              of Dollars Bank!
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 50 }}>
          <span class="material-icons icons">paid</span>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Deposit, Withdraw, & Transfer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our users can add, take, and transfer cash from their accounts.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 50 }}>
          <span class="material-icons icons">history</span>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              View History
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pull up your five most recent transactions.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
