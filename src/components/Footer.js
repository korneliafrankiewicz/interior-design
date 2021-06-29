import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerSection: {
        backgroundColor: "#0F172A",
        color: "white",
        display: "flex",
        justifyContent: "center",
        height: "60px",
        alignItems: "center",
        flexDirection: "row",
        [theme.breakpoints.up('md')] : {
           flexDirection: "column"
        },
    },
    copyrights: {
        fontSize: "0.7em",
        marginRight: "10px",
        [theme.breakpoints.up('md')] : {
            fontSize: "1em",
         },
    },
    socialIcons: {
        right: "10px",
        fontSize: "1em",
        display: "flex",

        [theme.breakpoints.up('md')] : {
            position: "absolute",
            fontSize: "2em",
            right: "80px",
         },
      
   
    },
    icon: {
        marginLeft: "5px",
        [theme.breakpoints.up('md')] : {
            marginLeft: "20px",
         },
        "&:hover": {
          cursor: "pointer",
      }
      }
  

    }
    ))

const Footer = () => {
    const classes = useStyles();
    return ( 
        <footer className={classes.footerSection}>
            <p className={classes.copyrights}>Copyrights © 2021 Kornelia Frankiewicz. All Rights Reserved.</p>
            <div className={classes.socialIcons}>
              <span className={classes.icon}><i  className="fab fa-facebook-square"></i></span>
              <span className={classes.icon}><i className="fab fa-instagram"></i></span>
            </div>
        </footer>
     );
}
 
export default Footer;