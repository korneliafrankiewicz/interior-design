import React from 'react';
import "../styles/fonts.scss";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
titleWrapper: {
display: "flex",
justifyContent: "center",
height: "500px",
alignItems: "center",
flexDirection: "column"
 },
title: {
fontFamily: "Calligraffitti",
fontSize: "4em",
   },
   buttonCTA: {
       marginTop: "50px",
    border: "1px solid #0F172A"
   }

    }
    ))

const HomeTitle = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.titleWrapper}>
            <h1 className={classes.title}>Design<br/> Your Space.</h1>
            <Button className={classes.buttonCTA}>Ask for details</Button>
          
        </div>
     );
}
 
export default HomeTitle;
