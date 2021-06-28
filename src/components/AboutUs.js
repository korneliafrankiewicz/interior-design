import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SectionAboutImg from "../images/about-section-img.jpg"
import "../styles/fonts.scss";

const useStyles = makeStyles((theme) => ({
    aboutSection: {
        height: "800px", 
    },
    sectionTitle: {
        fontSize: "3em",
        margin: "60px 0",
    },

    DescriptionWrapper: {
        display: "flex",
        lineHeight: "1.6",
        justifyContent: "space-between"
    },
    DescriptionSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "50%"
    },
    DescriptionTitle: {
        fontFamily: "Calligraffitti",
        fontSize: "2.6em"
    },
    sectionImage: {
        display: "flex",
        width:"50%",
        backgroundImage: `url(${SectionAboutImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "750px",
        width: "500px",
    }

    }
    ))

const AboutUs = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.aboutSection}>
            <h2 className={classes.sectionTitle}>About us</h2>
            <Container>
            <div className={classes.DescriptionWrapper}>
                <div className={classes.DescriptionSection}>
                   <h3 className={classes.DescriptionTitle}>Who are we?</h3>
                   <p className={classes.Description}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                   </p>
                </div>
                <div className={classes.sectionImage}></div>
            </div>
            </Container>

        </div>
     );
}
 
export default AboutUs;