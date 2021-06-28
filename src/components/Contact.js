import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgrondImage from "../images/bcg-image2.jpg";
import ContactForm from './ContactForm';

const useStyles = makeStyles((theme) => ({
    root: {
    width: "100wv",
    height: "100vh",
    backgroundImage: `url(${BackgrondImage})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    },
    blankWrapper: {
        width: "60%"
    },
    contactWrapper: {
        display: "flex",
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    contactTitle: {
        fontFamily: "Calligraffitti",
        fontSize: "3.5em",
        marginBottom: "20px",
    },

    }
    ))

const Contact = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
             <div className={classes.blankWrapper}>
                
            </div>
            <div className={classes.contactWrapper}>
                <h3 className={classes.contactTitle}>Contact us</h3>
                <ContactForm />
            </div>

        </div>
     );
}
 
export default Contact;