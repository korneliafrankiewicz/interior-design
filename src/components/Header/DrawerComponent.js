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
                <ListItemText><Link className={classes.menuLink} to="cooperation" smooth={true} duration={500}>Oferta współpracy</Link></ListItemText>
                
              </ListItemIcon>
            </ListItem>
  
            <ListItem divider button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText> <Link className={classes.menuLink} to="bestsellers" smooth={true} duration={500}>Bestsellery</Link></ListItemText>
              </ListItemIcon>
            </ListItem>
  
            <ListItem divider button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText> 
                <a rel="noopener noreferrer" target="_blank" className={classes.menuLink} href="https://sklep.greenservice.pl/pl/">Sklep</a>
                </ListItemText>
              </ListItemIcon>
            </ListItem>
  
            <ListItem divider button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>
                <Link className={classes.menuLink}  to="cooperation" smooth={true} duration={1000}>Kontakt</Link>
                </ListItemText>
              </ListItemIcon>
            </ListItem>
  
            <ListItem divider button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText> 
                <Link className={classes.menuLink}  to="company_data" smooth={true} duration={1000}>Dane firmy</Link>
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