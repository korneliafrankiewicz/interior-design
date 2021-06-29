import React, { useState } from 'react';
import {Link} from "react-scroll";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const DrawerComponent = () => {
    const useStyles = makeStyles(theme => ({
      drawerContainer: {},
      iconButtonContainer: {
        marginLeft: 'auto',
        color: 'white',
      },
  
      menuIconToggle: {
        fontSize: '3rem',
      },
      menuLink: {
        color: "#616161"
      }
    }));
  
    const [openDrawer, setOpenDrawer] = useState(false);
  
    //Css
    const classes = useStyles();
    return (
      <>
        <Drawer
          anchor='right'
          classes={{ paper: classes.drawerContainer }}
          onClose={() => setOpenDrawer(false)}
          open={openDrawer}
          onOpen={() => setOpenDrawer(true)}>
          <List>
            <ListItem divider button  onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText><Link className={classes.menuLink} to="about" smooth={true} duration={500}>About us</Link></ListItemText>
                
              </ListItemIcon>
            </ListItem>
  
            <ListItem divider button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText> <Link className={classes.menuLink} to="projects" smooth={true} duration={500}>Projects</Link></ListItemText>
              </ListItemIcon>
            </ListItem>
  
 
  
            <ListItem divider button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>
                <Link className={classes.menuLink}  to="contactForm" smooth={true} duration={1000}>Contact</Link>
                </ListItemText>
              </ListItemIcon>
            </ListItem>
  
            <ListItem divider button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText> 
                <Link className={classes.menuLink}  to="faq" smooth={true} duration={1000}>FAQ</Link>
                </ListItemText>
              </ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
       
        <IconButton
          className={classes.iconButtonContainer}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple>
          <MenuIcon className={classes.menuIconToggle} />
        </IconButton>
      </>
    );
  };
  
  export default DrawerComponent;