import React, { useState } from 'react';
import {Link} from "react-scroll";
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import DrawerComponent from './DrawerComponent';


const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: "transparent",
    color: "#0F172A",
    position: "absolute",
    [theme.breakpoints.up('lg')] : {
       top: "20px",
       right: "50px"
    },
  },


  tabsContainer: {
    marginLeft: 'auto',
    display:"flex",
    alignItems: "center"
  },

  menuButton: {
    fontSize: "1em",
     color: "#0F172A",
     border: "1px solid transparent",
     "&:hover": {

        border: "1px solid #0F172A"
    }
  },

}));

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);


  const classes = useStyles();

  const theme = useTheme(); 
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  //Functions
  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };


  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar>
  
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Tabs
                onChange={handleClickTab}
                className={classes.tabsContainer}
                indicatorColor='secondary'
               value={value}
               TabIndicatorProps={{style: {backgroundColor: "transparent"}}}
              
               >
                <Button className={classes.menuButton} color="secondary">
                <Link className={classes.menuLink}  to="cooperation" smooth={true} duration={1000}>About us</Link>
                </Button>
                
                <Button className={classes.menuButton} color="secondary">
                <Link className={classes.menuLink} to="bestsellers" smooth={true} duration={1000}>Projects</Link>
                </Button>
                <Button className={classes.menuButton} color="secondary">
                <Link className={classes.menuLink} to="bestsellers" smooth={true} duration={1000}>Contact</Link>
                </Button>
        
                
                <Button className={classes.menuButton} color="secondary">
                <Link  to="cooperation" smooth={true} duration={1000}>FAQ</Link>
                </Button>
               
                        
               
               
            


      
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Menu */}
      <Menu
        style={{ marginTop: '50px' }}
        id='menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}>
        <MenuItem onClick={handleCloseMenu}>My Account</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Examination Results</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Promotions</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Pending Fees</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Final Project</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;