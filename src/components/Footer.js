import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerSection: {
        backgroundColor: "#0F172A",
        color: "white",
        display: "flex",
        justifyContent: "center",
        height: "60px",
        alignItems: "center"
    },
    socialIcons: {
        position: "absolute",
        right: "80px",
        fontSize: "2em"
    },
    icon: {
        marginLeft: "20px",
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
            <p>Copyrights © 2021 Kornelia Frankiewicz. All Rights Reserved.</p>
            <div className={classes.socialIcons}>
              <span className={classes.icon}><i  className="fab fa-facebook-square"></i></span>
              <span className={classes.icon}><i className="fab fa-instagram"></i></span>
            </div>
        </footer>
     );
}
 
export default Footer;