import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

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
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar
          style={{
            background:
              "linear-gradient(0deg, rgb(251,216,230) 0%, rgb(205,229,221) 100%)",
          }}
        >
          <img
            src="https://hcmue.edu.vn/images/106116969_306361297423538_2421300353161578289_n.png"
            alt=""
            height="80"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
