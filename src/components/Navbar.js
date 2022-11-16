import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "#7289da",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className="bg-dark fixed-top">
      <CssBaseline />
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Typography variant="h6" className={classes.logo}>
            Material UI
          </Typography>
        </IconButton>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Container>
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/about" className={classes.link}>
                About
              </Link>
              <Link to="/table" className={classes.link}>
                Table
              </Link>
              <Link to="/chart" className={classes.link}>
                Chart
              </Link>
              <Link to="/gmap" className={classes.link}>
                GMap
              </Link>
            </div>
          </Container>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
