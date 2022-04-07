import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { Bookmark, ExitToApp, Home, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac, List, Map, OpenInBrowser, } from "@material-ui/icons";

/* Router */
import { button, NavLink, Link } from 'react-router-dom';


import { useEffect, useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import { Button, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Divider, } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { ArrowBackIosNew, ArrowForwardIos, BusinessOutlined, DirectionsBusOutlined, DirectionsCarFilledOutlined, HomeMaxOutlined, HomeOutlined, ListOutlined, MapOutlined, OpenInBrowserOutlined, } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
// import Clock from 'react-live-clock';

// import MailList from './MailList';
// import CenterContent from './CenterContent';

// import '../Main.css';
// import subMeunListView from "./SubMenuList";
// import ListHome from './ListHome';

// const openedMixin = (theme) => ({
//     width: 200,
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     position: 'relative',
//     overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     position: 'relative',
//     width: 0,
// });

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         ...(open && {
//             ...openedMixin(theme),
//             '& .MuiDrawer-paper': openedMixin(theme),
//         }),
//         ...(!open && {
//             ...closedMixin(theme),
//             '& .MuiDrawer-paper': closedMixin(theme),
//         }),
//     }),
// );


const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7"
        },
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
    },
    button: {
        // display: "flex",
        // color: "success",
        // variant:"outlined",
        right: 12,
        bottom: 5,
        // alignItems: "center",        
        // marginBottom: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(1),
            cursor: "pointer",
            
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        paddingLeft: "25px",
        // [theme.breakpoints.down("sm")]: {
        //     fontSize: "18px",
        //     color: "white",
        //     marginRight: theme.spacing(3),
        // },
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    }
}));

const LeftbarPop = () => {
    const classes = useStyles();

    return (  
        <Container className={classes.container}>
            <div>
                <Button className={classes.button} component={Link} to=''>
                    <Home className={classes.icon} />
                    <Typography className={classes.text}>Homepage</Typography>
                </Button>
            </div>
            <div>
                <Button className={classes.button} component={Link} to='sample1'>
                    <List className={classes.icon} />
                    <Typography className={classes.text} >Cargo List</Typography>
                </Button>
            </div>
            <div>
                <Button className={classes.button} component={Link} to='sample2'>
                    <Map className={classes.icon} />
                    <Typography className={classes.text} >Openlayer Map</Typography>
                </Button>
            </div>
            <div>
                <Button className={classes.button} component={Link} to='/OpenlayerPop'>
                    <OpenInBrowser className={classes.icon} />
                    <Typography className={classes.text} >Openlayer Pop</Typography>
                </Button>                
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon} />
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon} />
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon} />
                <Typography className={classes.text}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon} />
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon} />
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    );
};

export default LeftbarPop;