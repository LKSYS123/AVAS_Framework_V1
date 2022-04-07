import React from "react";
import { Grid, makeStyles} from "@material-ui/core";
// import Add from "./components/Add";
// import Feed from "./components/Feed";
// import Leftbar from "./components/Leftbar";
// import Navbar from "./components/Navbar";
// import Rightbar from "./components/Rightbar";
// import Abcd from "./components/Abcd";
// import Sample1 from "./pages/Sample1";
// import Sample2 from "./pages/Sample2";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import Sample3 from "./Sample3";
// import Rutas from "./Rutas";
// import PageLayout from "./PageLayout";
// import Sample4 from "./Sample4";
// import DataGridList from "./pages/DataGridList";
// import Openlayer1 from "./pages/Openlayer1";
// import OpenlayerPop from "./pages/OpenlayerPop";
// import PopupLayer from "./pages/PopupLayer";
// import SampleTest1 from "./pages/SampleTest1";
// import SampleTest2 from "./pages/SampleTest2";
// import SampleTest3 from "./pages/SampleTest3";
// import SampleLee1 from "./pages/SampleLee1";

import Rutas from "../Rutas";
// import PupupMainLayout from "./pages/PupupMainLayout";
import NavbarPop from "../components/PopupLayout/NavbarPop";
import LeftbarPop from "../components/PopupLayout/LeftbarPop";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const PopupLayout = () => {
  const classes = useStyles();
  return (


      <div>
          <NavbarPop />          
          {/* <Router exact path="/" component={ Feed } /> */}
          {/* <Router path="/abcd" component={Abcd} /> */}
          <Grid container="container">
              <Grid item="item" sm={2} xs={2}>
                  <LeftbarPop />
              </Grid>              
              <Grid item="item" sm={10} xs={10}>             
                <Rutas />
              </Grid>
              {/* <Grid item="item" sm={3} className={classes.right}>
                  <Rightbar/>
              </Grid> */}
          </Grid>
          {/* <Add/> */}
      </div>
  );
};

export default PopupLayout;