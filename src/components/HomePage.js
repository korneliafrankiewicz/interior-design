import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgrondImage from "../images/bcg-image.jpg";
import Navbar from './Header/Navbar';
import HomeTitle from './HomeTitle';
const useStyles = makeStyles((theme) => ({
    root: {
    top: "0",
    width: "100wv",
    height: "100vh",
    backgroundImage: `url(${BackgrondImage})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
    },

    }
    ))

const HomePage = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
          <Navbar />
          <HomeTitle />
        </div>
     );
}
 
export default HomePage;