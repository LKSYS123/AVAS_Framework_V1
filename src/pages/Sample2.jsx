import React from "react";
import { Container, makeStyles} from "@material-ui/core";
import { Routes, Route, Outlet } from "react-router-dom";

// import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

const Sample2 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div>
Sample 222222222222222<br/>
Sample 222222222222222<br/>
Sample 222222222222222<br/>
Sample 222222222222222<br/>
Sample 222222222222222<br/>
Sample 222222222222222
<Outlet />
    </div>
    </Container>
  );
};

export default Sample2;