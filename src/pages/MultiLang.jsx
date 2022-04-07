import React from "react";
import { Button, Container, makeStyles, TextField} from "@material-ui/core";
import { Routes, Route, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
// import i18n from "../multilang/i18n";
// import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    },
    item: {
        marginBottom: theme.spacing(3),
    },    
}));

// const changeLangToKr = () => i18n.changeLanguage('kr');
// const changeLangToEn = () => i18n.changeLanguage('en');

const MultiLang = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
// i18n.changeLanguage('en');
const changeLangToKr = () => i18n.changeLanguage('kr');
const changeLangToEn = () => i18n.changeLanguage('en');

  return (
    <Container className={classes.container}>
    <div>
        {t('test')}
        
        <div className={classes.item}>
            <TextField 
                id="standard-basic" 
                label={t('TextInput')}
                variant="standard" 
                size="small" 
                style={{width:"100%"}}
            />
        </div>
        <div className={classes.item}>
            <Button variant="outlined" color="primary" style={{marginRight:20}} onClick={changeLangToKr}>{t('korea-lang')}</Button>
            <Button variant="outlined" color="primary" style={{marginRight:20}} onClick={changeLangToEn}>{t('english-lang')}</Button>
        </div>
    </div>


    
    </Container>
  );
};

export default MultiLang;
// export default withTranslation;