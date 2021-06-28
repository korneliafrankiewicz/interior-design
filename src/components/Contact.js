import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgrondImage from "../images/bcg-image2.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
    width: "100wv",
    height: "100vh",
    backgroundImage: `url(${BackgrondImage})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
    },

    }
    ))

const Contact = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>

        </div>
     );
}
 
export default Contact;