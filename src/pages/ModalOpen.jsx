import React, { useRef, useState, useEffect } from "react"
import { Button, Container, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, TextField, Typography} from "@material-ui/core";
import { Map, } from "@material-ui/icons";
import { Routes, Route, Outlet } from "react-router-dom";
import NewWindow from "react-new-window";
import Sample1 from "./Sample1";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom"; 
import { AutoAwesomeMotion } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import * as actions from "../actions/tutorials";

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    },
    button: {
        // display: "flex",
        size: "large",
        color: "#555",
        right: 12,
        bottom: 5,
        // alignItems: "center",        
        // marginBottom: theme.spacing(2),

    },
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    containerModal: {
        width: "70vm",
        height: "80vh",
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        overflow: "scroll",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
        },
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    },

}));

const columns = [
    { field: 'cd_cargo_rep', headerName: 'cd_cargo_rep', width: 200, align: 'center', headerAlign: 'center'},
    { field: 'cd_cust', headerName: 'cd_cust', width: 200, align: 'center', headerAlign: 'center'},
    { field: 'cd_cargo_vest', headerName: 'cd_cargo_vest', width: 200, align: 'center', headerAlign: 'center'},
    { field: 'nm_cargo1', headerName: 'nm_cargo1', width: 200, align: 'center', headerAlign: 'center'}
];

const ModalOpen = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const inInitialMount = useRef(true);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenAlert(false);
    };

    const dispatch = useDispatch();
    const cargos = useSelector((store) => store.CargoTutorial);
    
    // useEffect(() => {
    //     console.log("=====useEffect===cargosList=call==");            

    //     console.log("=====useEffect===cargosList=0000000==");            
    //     if (open) {
    //         dispatch(actions.getTutorials());   
    //     }
    //     console.log("=====useEffect===cargosList=111111=cargos="+cargos.cargoData);
    // },[]);

    const modalOpen = (openGubun) => {
        console.log("=====modalOpen===call==");     
        if (openGubun) {
            setOpen(true);
            dispatch(actions.getTutorials());   
        }
    }
    
    const rowDatas = cargos.cargoData?.map((record) => {
        return {
            cd_cargo_rep: record?.cd_cargo_rep,
            cd_cust: record?.cd_cust,
            cd_cargo_vest: record?.cd_cargo_vest,
            nm_cargo1: record?.nm_cargo1,   
            id: record?.nm_cargo1,   
        };
    });    
  return (
    <Container className={classes.container}>
        <>
            <Button variant="outlined" color="primary" className={classes.button} onClick={() => modalOpen(true)} >
                    <AutoAwesomeMotion className={classes.icon} />
                    <Typography className={classes.text} >Modal Open</Typography>
            </Button>            

            <Modal open={ open}>
            <Container className={classes.containerModal}>
                <form className={classes.form} autoComplete="off">
                    <div className={classes.item}>
                        <DataGrid rows={ rowDatas } columns={ columns } pageSize={ 10 } checkboxSelection autoHeight disableColumnMenu />
                    </div>
                    
                    <div className={classes.item}>
                        <TextField 
                            id="standard-basic" 
                            label="Title" 
                            variant="standard" 
                            size="small" 
                            style={{width:"100%"}}
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField 
                            id="standard-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            defaultValue="Tell your stroy..."
                            variant="outlined" 
                            size="small" 
                            style={{width:"100%"}}
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField select label="Visibility" value="Public">
                            <MenuItem value="Public">Public</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                            <MenuItem value="Unlisted">Unlisted</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.item}>
                        <FormLabel component="legend">who can comment..?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="Everybody" control={<Radio size="small"/>} label="Everybody"/>
                            <FormControlLabel value="My Friends" control={<Radio size="small"/>} label="My Friends"/>
                            <FormControlLabel value="Nobody" control={<Radio size="small"/>} label="Nobody"/>
                            <FormControlLabel
                                value="Custom"
                                disabled="disabled"
                                control={<Radio size="small"/>}
                                label="Custom (Premium)"/>
                        </RadioGroup>
                    </div>
                    <div className={classes.item}>
                        <Button variant="outlined" color="primary" style={{marginRight:20}} onClick={() => setOpenAlert(true)}>Create</Button>
                        <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>
        </>    
    </Container>
  );
};

export default ModalOpen;