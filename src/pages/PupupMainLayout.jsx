import React, { useRef, useState, useEffect } from "react"
import { Button, Container, makeStyles, Typography} from "@material-ui/core";
import { Map, } from "@material-ui/icons";
import { Routes, Route, Outlet } from "react-router-dom";
import NewWindow from "react-new-window";
import Sample1 from "./Sample1";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom"; 

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
}));

const RenderInWindow = (props) => {
    const containerEl = document.createElement("div");
    let newWindow = null;

  console.log('**************');  
    useEffect(() => {
      // When container is ready
      if (containerEl) {
            newWindow = window.open(
            "/PopupLayout",
            "",
            "_blank"
          );


        // Append container
        newWindow.document.body.appendChild(containerEl);
  
        newWindow.addEventListener('beforeunload', () => {
            props.colsePopupWindow();
        });
        // Save reference to window for cleanup
        // const curWindow = newWindow.current;
  
        // Return cleanup function
        return function cleanup() {
            // newWindow.current.close();            
            // newWindow.current = null;

            // 아래 소스 주석 풀면 다른 화면으로 이동 시 팝업 Close 됨
            // newWindow.close();            
            // newWindow = null;
        }
      }    
    }, []);
  
    // return container && createPortal(props.children, container);
    return containerEl && createPortal(props.children, containerEl);
    // return createPortal(props.children, containerEl);
  };

const PupupMainLayout = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const togglePopupWindowWithHooks = () => setOpen(!open)
    // const [close, setClose] = useState(false);
    const colsePopupWindow = () => setOpen(false);

    // Side Effect
    useEffect(() =>
    window.addEventListener('beforeunload', () => {      
        // colsePopupWindow()
    })
  ) 
  
  
  return (
    <Container className={classes.container}>
        <>
            <Button variant="outlined" color="primary" className={classes.button} onClick={togglePopupWindowWithHooks} >
                    <Map className={classes.icon} />
                    <Typography className={classes.text} >Open Window Layout</Typography>
            </Button>
            <br/>
            tst test test test
            <br/>
            tst test test test
            <br/>
            tst test test test
            <br/>
            tst test test test
            {open && <RenderInWindow colsePopupWindow={colsePopupWindow}></RenderInWindow>}
        </>    
    </Container>
  );
};

export default PupupMainLayout;