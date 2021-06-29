import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgrondImage from "../images/bcg-image2.jpg";
import ContactForm from './ContactForm';

const useStyles = makeStyles((theme) => ({
    root: {
    width: "100wv",
   backgroundColor: "#F5F5F5",
   padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('md')] : {
        flexDirection: "row",
        backgroundImage: `url(${BackgrondImage})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
     },
    },
    blankWrapper: {
        width: "40%",
        [theme.breakpoints.up('lg')] : {
            width: "60%",
         },
    },
    contactWrapper: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        [theme.breakpoints.up('lg')] : {
            width: "40%",
         },
         [theme.breakpoints.up('md')] : {
            width: "60%"
         },
        
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
                <div className={classes.contactWrapper} id="contactForm">
                    <h3 className={classes.contactTitle}>Contact us</h3>
                    <ContactForm />
                </div>
     

        </div>
     );
}
 
export default Contact;